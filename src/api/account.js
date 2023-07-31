export const account = async c => {
  const { KV_EMAIL: kv } = c.env;
  const { user: USER } = c.session;

  const data = await kv.get(`user:${USER}`, { type: 'json' });
  const { sents,
          drafts,
          messages,
          account: { user, display, domains } } = data;

  return (data)
    ? c.json({ sents,
               drafts,
               messages,
               account: { user, display, domains } })
    : c.json({ status: false }, 404);
}