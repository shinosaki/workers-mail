import { deleteSession } from '../lib/session';

export const logout = async (c) => {
  await deleteSession(c);

  return c.redirect(`/?alert=successful.logout`, 302);
};