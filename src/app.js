import { Hono } from 'hono';
import { kvClient } from 'hono-kv-session/cloudflare';
import { SessionManager, createSession } from 'hono-kv-session';
import { drizzleD1 } from '$lib/middlewares';
import { users, allUsers, deleteUser, createUser, insertEmail } from '$db';
import { api, auth, nojs } from '$routes';
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono();

// Middlewares
app.use('*', drizzleD1());
app.use('*', kvClient());
app.use('*', SessionManager());
// Renew Session
app.use('*', async (c, next) => {
  if (c.session.status) {
    await createSession(c, c.session.value);
  };
  await next();
});

// API
app.route('/api/auth', auth);
app.route('/api/:api_version', api);

// SSR Web UI
app.route('/nojs', nojs);

// SPA Web UI
// app.notFound(serveStatic({ path: './index.html' }));
app.get('/', c => c.redirect('/nojs'));

// Static Assets
app.get('/*', serveStatic({ root: '.' }));

export default app
