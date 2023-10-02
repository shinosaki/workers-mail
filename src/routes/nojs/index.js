import { Hono } from 'hono';
import i from './i';
import auth from './auth';

const app = new Hono();

app.get('/', (c) => {
  return c.redirect((c.session.status) ? '/nojs/i/inbox' : '/nojs/auth/login');
});

app.route('/auth', auth);
app.route('/i', i);

export default app;
