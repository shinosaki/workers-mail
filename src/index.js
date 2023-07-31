import { Email } from './email';
import app from './hono';

export default {
  async fetch(req, env, ctx) {
    const { origin, pathname } = new URL(req.url);

    const root = new Request(origin, req)

    const rules = [
      pathname.includes('/api/'),
      pathname.includes('/_app/'),
    ];

    return (rules.includes(true))
      ? app.fetch(req, env, ctx)
      : app.fetch(root, env, ctx);
  },

  async email(mes, env, ctx) {
    await Email(mes, env, ctx);
  }
}