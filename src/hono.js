import { Hono } from 'hono';
const app = new Hono();

// cors
import { cors } from 'hono/cors';
app.use('*', async (c, next) => {
  // https://github.com/honojs/hono/issues/1133#issuecomment-1563573749
  const middleware = cors({
    origin: () => new URL(c.req.url).origin.replace(/\/\/api\./, '//'),
    credentials: true,
  });

  await middleware(c, next);
});

import auth from './auth';
app.route('/api/auth', auth);

import api from './api';
app.route('/api/:api_version', api);

app.get('/robots.txt', c => c.text('User-agent: *\n\nDisallow: /'));

const html = `
<html>
  <head>
    <title>Workers Mail API</title>
  </head>

  <body>
    <p>It\'s an API for the Workers Mail.</p>
    <p>More information about the Workers Mail can be found on Github.</p>

    <ul>
      <li>Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/shinosaki/workers-mail">https://github.com/shinosaki/workers-mail</a></li>
    </ul>

    <footer>
      <p>Workers Mail is developed by <a target="_blank" rel="noopener noreferrer" href="https://shinosaki.com">@shinosaki</p>
    </footer>
  </body>
</html>
`;
app.notFound(c => c.html(html, 404));

export default app;