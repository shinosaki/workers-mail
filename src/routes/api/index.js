import { Hono } from 'hono';
import { denyAccess } from 'hono-kv-session';
import { account } from './account';
import { message, messageLists } from './message';
import { draft } from './draft';
import { sending } from './sending';

const app = new Hono();

app.use('*', denyAccess());

app.get('/ping', (c) => c.json({ status: true, message: 'pong' }));

app.get('/account', account.get)
app.patch('/account', account.validator, account.patch);

app.get('/messages', messageLists('message'));
app.get('/message/:id', message.validator, message.get);
app.get('/sents', messageLists('sent'));
app.get('/sent/:id', message.validator, message.get);
app.get('/drafts', messageLists('draft'));
app.get('/draft/:id', message.validator, message.get);

app.post('/draft', draft.validator, draft.post);
app.post('/sending', sending.validator, sending.post);

export default app;