const parseForm = (form) => {
  const data = {};

  [...form].map(([key, value]) => {
    key.split('.').reduce((obj, k, i, keys) => {
      if (i === keys.length - 1) {
        obj[k] = value;
      } else {
        obj[k] = obj[k] || {};
      }
      return obj[k];
    }, data);
  });

  return data;
}

export const sending = async (c) => {
  const { KV_EMAIL: kv,
          DISABLE_SENDING } = c.env;
  const { user } = c.session;
  const type = c.req.header('content-type');

  if (DISABLE_SENDING === true)
    return c.json({ message: 'Email sending is disabled' }, 503);

  switch (type) {
  case 'multipart/form-data': {
    const data = parseForm(await c.req.parseBody());
    break;
  }
  case 'application/json': {
    const data = await c.req.json();
    break;
  }
  default:
    return c.json({ message: 'Invalid content-type' }, 400)
  };

  const { sender,
          recipients: { to  = [],
                        cc  = [],
                        bcc = [] },
          subject,
          body,
          attachments = [] } = data;

  const email = {
    subject,
    from: { name: sender.name, email: sender.addr },
    personalizations: [{
      to:  [...to.map( ({ addr: email, name }) => Object({ name, email }))],
      cc:  [...cc.map( ({ addr: email, name }) => Object({ name, email }))],
      bcc: [...bcc.map(({ addr: email, name }) => Object({ name, email }))],
    }],
    content: [
      { type: body.contentType, value: body.data },
      // ...attachments.map(({ contentType: type, data: value }) => Object({ type, value }))
    ]
  }
  
  const url = 'https://api.mailchannels.net/tx/v1/send';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(email)
  })

  console.log('Post to Mail Channels API: ', await res.text());

  if (res.ok) {
    const id = crypto.randomUUID();
    await kv.put(`sent:${user}:${id}`, JSON.stringify({
      id,
      from: { name: sender.name, addr: sender.addr },
      to: [...to.map(({ addr, name }) => Object({ addr, name }))],
      cc: [...cc.map(({ addr, name }) => Object({ addr, name }))],
      bcc: [...bcc.map(({ addr, name }) => Object({ addr, name }))],
      subject,
      date: new Date().toISOString(),
      body, attachments
    }));

    const userData = await kv.get(`user:${user}`, { type: 'json' });
    userData.sents.push(id);
    await kv.put(`user:${user}`, JSON.stringify(userData));
  };

  return c.json({ status: res.ok }, res.status);
}