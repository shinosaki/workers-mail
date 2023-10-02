import { Hono } from 'hono';
import { login } from './login';
import { logout } from './logout';
import { register } from './register';

const app = new Hono();

app.post('/login', login.validator, login.post);
app.post('/logout', logout.post);
app.post('/register', register.validator, register.post);

app.get('/register', (c) => c.json({
  status: c.env.REGISTRATION ? true : false
}));

export default app;
