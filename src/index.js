import { Email } from './email';
import app from './hono';

export default {
  async fetch(req, env, ctx) {
    return app.fetch(req, env, ctx);
  },

  async email(mes, env, ctx) {
    await Email(mes, env, ctx);
  }
}