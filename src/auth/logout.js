import { deleteSession } from '../lib/session';

export const logout = async (c) => {
  await deleteSession(c);
  
  const redirect = c.req.query('redirect') ?? '';

  return c.redirect(`${redirect}/?alert=successful.logout`, 302);
};