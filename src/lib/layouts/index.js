import { html } from 'hono/html';

export const Layout = (props) => html`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style.css">
  <title>${props.title} - Workers Mail (nojs)</title>
</head>
<body class="flex">
  ${props.children}
</body>
</html>`;

export const SideBar = (props) => (
  <aside class="h-screen w-52 shrink-0 bg-gray-100 py-4 flex flex-col items-center">
    <header class="py-2 w-fit">
      <a href="/nojs" class="contents">
        <h2 class="text-2xl text-center">Workers Mail</h2>
        <p class="text-sm text-right text-black/60">nojs ver.</p>
      </a>
    </header>

    <a href="/nojs/i/create" class="contents">
      <p class="w-4/5 rounded-lg bg-indigo-600 py-2 text-white text-center">Compose</p>
    </a>

    <ul class="py-4 text-lg flex flex-col gap-2 items-center">
      <li><a href="/nojs/i/inbox">Inbox</a></li>
      <li><a href="/nojs/i/drafts">Drafts</a></li>
      <li><a href="/nojs/i/sents">Sents</a></li>
    </ul>
  </aside>
);

export const MailLayout = (props) => (
  <Layout>
    <SideBar />
    <div class="text-white w-full h-screen flex items-center justify-center bg-gray-600">
      {props.children}
    </div>
  </Layout>
);