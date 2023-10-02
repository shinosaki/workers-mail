import { z } from 'zod';
import { getUser, insertEmail } from '$db';
import { validation } from '$lib/validations';
import { createEML, parseEmailAddr } from '$lib/utils';

export const sending = {
  validator: validation(z.object({
    subject: z.string().optional(),
    toName: z.string().optional(),
    toAddr: z.string().email(),
    fromName: z.string().optional(),
    fromAddr: z.string().email(),
    body: z.string().optional(),
    type: z.union([
      z.literal('send'),
      z.literal('save')
    ]).default('send')
  })),

  post: async (c) => {
    // Support multiple "to" in the future.
    // https://github.com/honojs/hono/issues/1018
    const { type, subject, body, toName, toAddr, fromName, fromAddr } = c.req.valid('form');

    const user = c.session.value;
    const userData = await getUser(c, user);

    const addr = parseEmailAddr(fromAddr);
    if (!addr.user === user || !userData.domains.includes(addr.domain)) {
      return c.json({ status: false, message: 'Invalid "from" address' }, 401);
    };

    const from = { name: fromName, addr: fromAddr };
    const to = [{ name: toName, addr: toAddr }];

    if (type !== 'save') {
      if (!c.env.SENDING) {
        return c.json({ status: false, message: 'Sending email is not available' }, 500);
      };

      const res = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          subject,
          from: {
            name: from.name,
            email: from.addr,
          },
          content: [{
            type: 'text/plain',
            value: body,
          }],
          personalizations: [{
            to: to.map(({ name, addr }) => ({ name, email: addr })),
            dkim_domain: addr.domain,
            dkim_selector: c.env.DKIM_SELECTOR,
            dkim_private_key: c.env.DKIM_PRIV_B64,
          }],
        }),
      });

      if (!res.ok) {
        return c.json({
          status: false,
          message: 'Failed to send email',
          mailchannels: {
            status: res.status,
            body: await res.json() ?? null,
          }
        }, 500);
      };
    };

    const eml = createEML({
      subject,
      from,
      to,
      message: {
        data: body
      },
    });

    const id = await insertEmail(c, user, {
      type: (type === 'save') ? 'draft' : 'sent',
      eml,
      subject,
      to,
      from
    });

    const redirect = c.req.query('redirect');
    return (redirect)
      ? c.redirect(redirect)
      : c.json({ status: true, id });
  }
};
