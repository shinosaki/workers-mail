<script>
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import { Alert, Navbar, SideMenu } from '$lib/components';
  import Menu from './Menu.svelte';
</script>

<div class="flex flex-col md:flex-row">
  <Alert />

  <Navbar>
    <Menu />
  </Navbar>

  <div class="hidden md:block">
    <SideMenu>
      <Menu />
    </SideMenu>
  </div>

  <div class="w-full h-screen flex flex-col gap-20 items-center overflow-auto">
    <slot />
  </div>
</div>