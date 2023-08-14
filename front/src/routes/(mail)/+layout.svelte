<script>
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import { Alert, Navbar, SideMenu } from '$lib/components';
  import Menu from './Menu.svelte';
</script>

<div class="flex flex-col md:flex-row h-screen">
  <Alert />

  <Navbar header={{ link: '/i/inbox', title: PUBLIC_APP_NAME }}>
    <Menu />
  </Navbar>

  <div class="hidden md:block">
    <SideMenu header={{ link: '/i/inbox', title: PUBLIC_APP_NAME }}>
      <Menu />
    </SideMenu>
  </div>

  <div class="w-full h-full md:h-screen flex flex-col gap-20 items-center overflow-auto">
    <slot />
  </div>
</div>