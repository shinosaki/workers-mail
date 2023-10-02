import { drizzle } from 'drizzle-orm/d1'

export const drizzleD1 = () => {
  return async (c, next) => {
    c.db = drizzle(c.env.DB);
    await next();
  }
};