export const message = async (c) => {
  const { KV_EMAIL: kv } = c.env;
  const { id } = c.req.param();
  const { user } = c.session;

  const data = await kv.get(`message:${user}:${id}`, { type: 'json' });

  return (data) ? c.json(data)
                : c.json({ status: false }, 404);
}

export const messageList = async (c) => {
  const { KV_EMAIL: kv } = c.env;
  const { user } = c.session;

  const data = await kv.get(`user:${user}`, { type: 'json' });

  const fetchAllMessages = async messages => {
    const data =  await Promise.all(messages.map(id => 
      kv.get(`message:${user}:${id}`, { type: 'json' })));
    return data.map(({ id, email: { date, from, subject } }) => 
      Object({ id, date, from, subject })).reverse();
  };

  return (data) ? c.json(await fetchAllMessages(data.messages))
                : c.json({ status: false }, 404);
}
