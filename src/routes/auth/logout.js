import Bcrypt from 'bcryptjs';
import { deleteSession } from 'hono-kv-session';

export const logout = {
  post: async (c) => {
    const user = c.session.value;
    console.log(`"${user}" attempts to log out.`);

    await deleteSession(c);

    const redirect = c.req.query('redirect');
    return (redirect)
      ? c.redirect(redirect)
      : c.json({ status: true, message: 'Logout successful' });
  }
}
