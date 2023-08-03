import { Hono } from 'hono';
const app = new Hono();

// cors
import { cors } from 'hono/cors';
app.use('*', async (c, next) => {
  // https://github.com/honojs/hono/issues/1133#issuecomment-1563573749
  const middleware = cors({
    origin: () => new URL(c.req.url).hostname.replace(/^api\./, ''),
    credentials: true,
  });

  await middleware(c, next);
});

import auth from './auth';
app.route('/api/auth', auth);

import api from './api';
app.route('/api/:api_version', api);

export default app;