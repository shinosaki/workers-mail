import { Hono } from 'hono';
const api = new Hono();

import { sessionManager } from '../lib/session';
api.use('*', sessionManager());

api.get('/ping', c => c.json({ status: true }, 200));

import { account } from './account';
api.get('/account', account);

import { message, messageList } from './message';
api.get('/message/:id', message);
api.get('/messages', messageList);

import { sent, sentList } from './sent';
api.get('/sent/:id', sent);
api.get('/sents', sentList);

import { sending } from './sending';
api.post('/sending', sending);

export default api;