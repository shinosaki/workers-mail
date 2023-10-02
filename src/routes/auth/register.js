import Bcrypt from 'bcryptjs';
import { createSession } from 'hono-kv-session';
import { z } from 'zod';
import { validation, rules } from '$lib/validations';
import { existsUser, createUser } from '$db';

export const register = {
  validator: validation(z.object({
    user: rules.user,
    display: rules.display,
    password: rules.password,
  })),

  post: async (c) => {
    if (!c.env.REGISTRATION) {
      return c.json({ status: false, message: 'Temporarily not accepting new registrations' });
    };

    const { user, display, password } = c.req.valid('form');
    console.log(`"${user}" attempts to registration.`);

    const exists = await existsUser(c, user);
    if (exists) {
      return c.json({ status: false, message: `"${user}" already exists.` }, 400);
    };

    const status = await createUser(c, {
      user,
      display,
      password,
      domains: c.env.EMAIL_DOMAINS,
    });

    const redirect = c.req.query('redirect');
    return (status && redirect) ? c.redirect(redirect)
      : (status) ? c.json({ status: true, message: 'Registration successful' })
      : c.json({ status: false, message: 'Registration failed' }, 400);
  }
}