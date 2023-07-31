import { Hono } from 'hono';
const app = new Hono();

// cors
// import { cors } from 'hono/cors';
// app.use('*', async (c, next) => {
//   // https://github.com/honojs/hono/issues/1133#issuecomment-1563573749
//   const middleware = cors({
//     origin: () => new URL(c.url).origin,
//     credentials: true,
//   });

//   await middleware(c, next);
// })

import auth from './auth';
app.route('/api/auth', auth);

import api from './api';
app.route('/api/:api_version', api);

import { serveStatic } from 'hono/cloudflare-workers';
app.get('*', serveStatic({ root: './' }));
// app.notFound(c=>c.redirect('/', 302))

export default app;