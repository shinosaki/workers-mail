import { getCookie, setCookie, deleteCookie } from 'hono/cookie';

export const sessionManager = () => {
  return async (c, next) => {
    const { SESSION_KV_NAME,
            SESSION_TTL: expirationTtl = 432000 } = c.env;
    const kv = c.env[SESSION_KV_NAME];

    const session = getCookie(c, 'id');

    const user = await kv.get(`session:${session}`);
    if (!user) return c.json({ message: 'Unauthorized' }, 401);

    // renew session and cookie
    await kv.put(`session:${session}`, user, { expirationTtl });
    setCookie(c, 'id', session, {
      // path: '/',
      domain: new URL(c.req.url).hostname,
      secure: true,
      httpOnly: true,
      maxAge: expirationTtl,
      sameSite: 'Strict',
    });

    c.session = { id: session, user };

    await next();
  }
}

export const createSession = async ({
  c,
  user,
  expirationTtl = 432000,
  session = crypto.randomUUID(),
}) => {
  const { SESSION_KV_NAME } = c.env;
  const kv = c.env[SESSION_KV_NAME];
  await kv.put(`session:${session}`, user, { expirationTtl });

  setCookie(c, 'id', session, {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: expirationTtl,
  });

  return true;
}

export const deleteSession = async (c) => {
  const { SESSION_KV_NAME } = c.env;
  const kv = c.env[SESSION_KV_NAME];
  const session = getCookie(c, 'id');

  await kv.delete(`session:${session}`);

  deleteCookie(c, 'id', {
    path: '/',
    secure: true,
  })

  return true;
}