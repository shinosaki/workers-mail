import Bcrypt from 'bcryptjs';
import { createSession } from 'hono-kv-session';
import { z } from 'zod';
import { validation, rules } from '$lib/validations';
import { getUser } from '$db';

export const login = {
  validator: validation(z.object({
    user: rules.user,
    password: rules.password,
  })),

  post: async (c) => {
    const { user, password } = c.req.valid('form');
    console.log(`"${user}" attempts to log in.`);

    const userData = await getUser(c, user);
    if (!userData) {
      return c.json({ status: false, message: 'Invalid username or password' }, 400);
    };

    const hash = await Bcrypt.compare(password, userData.password);
    if (!hash) {
      return c.json({ status: false, message: 'Invalid username or password' }, 400);
    };

    const session = await createSession(c, user);

    const redirect = c.req.query('redirect');
    return (redirect)
      ? c.redirect(redirect)
      : c.json({ status: true, session, message: 'Login successful' });
  }
};
