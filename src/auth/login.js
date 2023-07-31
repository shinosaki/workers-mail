import Bcrypt from 'bcryptjs';
import { createSession } from '../lib/session';

export const login = async (c) => {
  const { KV_EMAIL: kv,
          SESSION_TTL: expirationTtl } = c.env;

  const { user, password } = await c.req.parseBody();
  console.log(`Login request (user: ${user})`);

  const { account: { passwordHash } } = await kv.get(`user:${user}`, { type: 'json' });

  const checkHash = await Bcrypt.compare(password, passwordHash);

  // if invalid password redirect to "/login"
  if (!checkHash)
    return c.redirect(`/login?alert=invalid.username.or.password&type=warn`, 302);

  await createSession({
    c,
    user,
    expirationTtl,
  });

  return c.redirect(`/i/inbox`, 302);
};