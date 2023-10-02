import { z } from 'zod';
import { getUser } from '$db';
import { validation, rules } from '$lib/validations';
import Bcrypt from 'bcryptjs';

export const account = {
  validator: validation(z.object({
    display: rules.display.optional(),
    password: rules.password.optional(),
  })),

  get: async (c) => {
    const data = await getUser(c, c.session.value);

    return (!data)
      ? c.json({ status: false, message: 'Failed to fetch user data' }, 500)
      : c.json({
          status: true,
          user: data.user,
          display: data.display,
          domains: data.domains,
          sents: data.sents,
          drafts: data.drafts,
          messages: data.messages,
        });
  },

  patch: async (c) => {
    const user = c.session.value;
    const form = c.req.valid('form');

    if (form.password) {
      form.password = await Bcrypt.hash(form.password, await Bcrypt.genSalt());
    };

    await updateUser(c, user, form);

    return c.json({
      status: true,
      message: 'User data updated successfully',
      updated: Object.keys(form),
    });
  },
};
