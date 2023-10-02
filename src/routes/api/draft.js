import { z } from 'zod';
import { insertEmail, getUser } from '$db';
import { validation } from '$lib/validations';
import { createEML, parseEmailAddr } from '$lib/utils';

export const draft = {
  validator: validation(z.object({
    subject: z.string(),
    toName: z.string(),
    toAddr: z.string().email(),
    fromName: z.string(),
    fromAddr: z.string().email(),
    body: z.string(),
  })),

  post: async (c) => {
    const user = c.session.value;
    const userData = await getUser(c, user);

    // Support multiple "to" in the future.
    // https://github.com/honojs/hono/issues/1018
    const { subject, body, toName, toAddr, fromName, fromAddr } = c.req.valid('form');

    const addr = parseEmailAddr(fromAddr);
    if (!addr.user === user || !userData.domains.includes(addr.domain)) {
      return c.json({ status: false, message: 'Invalid "from" address' }, 401);
    };

    const from = { name: fromName, addr: fromAddr };
    const to = [{ name: toName, addr: toAddr }];

    const eml = createEML({
      subject,
      from,
      to,
      message: {
        data: body
      },
    });

    const id = await insertEmail(c, user, {
      type: 'draft',
      eml,
      subject,
      to,
      from
    });

    return c.json({ status: true, id });
  }
}
