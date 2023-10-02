import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

export const rules = {
  user: z.string().trim().toLowerCase().max(64).regex(/^[\w\-\.]+$/),
  display: z.string().max(64).trim(),
  password: z.string().min(8).max(256),
};

export const validation = (schema, target = 'form') => {
  return zValidator(target, schema, (r, c) => {
    if (!r.success) {
      return c.json({ status: false, message: 'Invalid request' }, 400);
    };
  });
};
