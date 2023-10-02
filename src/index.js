import App from './app';
import Email from './email';

export default {
  async fetch(req, env, ctx) {
    return App.fetch(req, env, ctx);
  },

  async email(mes, env, ctx) {
    await Email(mes, env, ctx);
  }
};
