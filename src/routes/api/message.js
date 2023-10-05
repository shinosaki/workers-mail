import { z } from 'zod';
import { validation } from '$lib/validations';
import { getEmail, getUserEmails } from '$db';

export const message = {
  validator: validation(z.object({
      id: z.string().uuid(),
  }), 'param'),

  get: async (c) => {
    const { id } = c.req.param();

    const data = await getEmail(c, id);
    if (!data) {
      return c.json({ status: false, id, message: 'Message not found' }, 404);
    };

    return c.json({ status: true, ...data });
  }
};

export const messageLists = (type) => {
  return async (c) => {
    const user = c.session.value;

    const data = await getUserEmails(c, user, type);
    data.map(v => delete v.userId);

    return c.json({ status: true, lists: data });
  };
};
