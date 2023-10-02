import { Hono } from 'hono';
import { denyAccess } from 'hono-kv-session';
import { MailLayout } from '$lib/layouts';
import { inbox } from './inbox';
import { create } from './create';
import { message } from './message';

const app = new Hono();

app.use('*', denyAccess());

app.get('/inbox', inbox.get('message'));
app.get('/drafts', inbox.get('draft'));
app.get('/sents', inbox.get('sent'));

app.get('/message/:id{[0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}}', message.get);

app.get('/create', create.get);

app.get('*', c => c.html(
  <MailLayout>
    <main class="flex flex-col gap-5 items-center">
      <h1 class="text-9xl">404</h1>
      <h2 class="text-3xl opacity-80">Not Found</h2>
    </main>
  </MailLayout>
, 404));

export default app;
