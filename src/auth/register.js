import Bcrypt from 'bcryptjs';

export const register = async (c) => {
  const { KV_EMAIL: kv,
          EMAIL_DOMAINS,
          DISABLE_REGISTRATION } = c.env;

  if (DISABLE_REGISTRATION === true)
    return c.json({ message: 'Registration temporarily unavailable' }, 503);

  const { user,
          password,
          display } = await c.req.parseBody();
  // const domains = formDomains.split(',');
  const domains = EMAIL_DOMAINS;
  console.log(`Registration request (user: ${user})`);

  // if (!domains.every(v=>EMAIL_DOMAINS.includes(v)))
  //   return c.json({ message: 'Invalid domain' }, 400);
  else if (await kv.get(`user:${user}`))
    return c.json({ message: 'User already exists' }, 409);

  await kv.put(`user:${user}`, JSON.stringify({
    sents: [],
    drafts: [],
    messages: [],
    account: {
      user, display, domains,
      passwordHash: await Bcrypt.hash(password, await Bcrypt.genSalt())
    }
  }));

  // append user to users index
  const users = await kv.get('users', { type: 'json' })
  await kv.put('users', JSON.stringify([ ...users, user ]));

  return c.redirect(`/login?alert=successful.registration`, 302)
};