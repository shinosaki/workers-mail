import { Hono } from 'hono';
import { Layout } from '$lib/layouts';

const app = new Hono();

const Contents = (props) => (
  <Layout {...props.meta}>
    <div class="w-full h-screen flex items-center justify-center bg-gray-600">
      <div class="w-full h-full sm:w-fit sm:h-fit p-14 shadow-lg flex flex-col gap-20 items-center justify-center bg-[#201a30] rounded-lg text-gray-100">
        <h1 class="text-4xl font-bold">{props.title}</h1>
        <form method="POST" action={props.action} class="w-full sm:w-96 flex flex-col gap-10">
          {props.children}
        </form>
      </div>
    </div>
  </Layout>
);

const Input = (props) => (
  <label class="flex flex-col rounded-xl bg-gray-500 px-4 py-1">
    <span class="text-sm select-none">{props.title}</span>
    <input class="bg-inherit" type={props.type ?? 'text'} name={props.name} />
  </label>
);

const Button = (props) => {
  const style = `rounded-xl px-4 py-3 ${props.color ?? 'bg-indigo-600'} disabled:bg-gray-700`;

  return (props.link)
    ? <a href={props.link} class={style}>{props.children ?? 'Submit'}</a>
    : <button class={style} disabled={props.disabled}>{props.children ?? 'Submit'}</button>
};

app.get('/login', (c) => {
  const props = {
    title: 'Login',
    action: '/api/auth/login?redirect=/nojs/i/inbox',
    meta: {
      title: 'Login',
    }
  };

  return (c.session.status) ? c.redirect('/nojs/i/inbox') : c.html(
    <Contents {...props}>
      <Input {...{ title: 'User name', name: 'user' }} />
      <Input {...{ title: 'Password', name: 'password', type: 'password' }} />
      <div class="flex flex-col gap-5 text-center">
        <Button>Login</Button>
        <span class="text-center">or</span>
        <Button {...{ link: '/nojs/auth/register', color: 'bg-blue-600' }}>Registration</Button>
      </div>
    </Contents>
  )
});

app.get('/register', (c) => {
  const props = {
    title: 'Registration',
    action: '/api/auth/register?redirect=/nojs/auth/login',
    meta: {
      title: 'Registration',
    }
  };

  return (c.session.status) ? c.redirect('/nojs/i/inbox') : c.html(
    <Contents {...props}>
      <Input {...{ title: 'User name', name: 'user' }} />
      <Input {...{ title: 'Display name', name: 'display' }} />
      <Input {...{ title: 'Password', name: 'password', type: 'password' }} />
      <Button {...{ disabled: !c.env.REGISTRATION }}>Registration</Button>
    </Contents>
  )
});

app.get('/logout', (c) => {
  const props = {
    title: 'Are you sure you want to log out?',
    action: '/api/auth/logout?redirect=/nojs/auth/login',
    meta: {
      title: 'Registration',
    }
  };

  return c.html(
    <Contents {...props}>
      <Button>Yes, I'm sure</Button>
    </Contents>
  )
});

export default app;
