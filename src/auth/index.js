import { Hono } from 'hono';
const auth = new Hono();

import { login } from './login';
auth.post('/login', login);

import { logout } from './logout';
auth.post('/logout', logout);

import { register } from './register';
auth.post('/register', register);
auth.get('/register', async c => {
  // if DISABLE_REGISTRATION = true
  //     return false;
  // if DISABLE_REGISTRATION = false or undefined
  //     return true;
  const status = !c.env.DISABLE_REGISTRATION ?? true;
  return c.json({ status });
});

export default auth;