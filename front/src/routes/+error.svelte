<script>
  import '../app.css';

  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME as APP_NAME } from '$env/static/public';

  import { loadLanguage, loadTheme, t } from '$lib';
  import { menu, language } from '$lib/stores';
  import { Drawer, Navbar, SideMenu } from '$lib/components';
  import Menu from './(app)/Menu.svelte';

  onMount(() => {
    loadLanguage();
    loadTheme();
  });
</script>

<div class="flex flex-col lg:flex-row
            dark:bg-slate-900
            text-slate-700 dark:text-slate-300">

  <Navbar title={APP_NAME} link="/" />

  {#if $menu}
    <Drawer>
      <Menu />
    </Drawer>
  {/if}

  <SideMenu>
    <Menu />
  </SideMenu>

  <main class="flex flex-col gap-16 items-center justify-center w-full h-screen">
    <div class="grid gap-10 w-80 text-center">
      <h1 class="text-9xl">{$page.status}</h1>
      <h3 class="text-2xl">{$page.error.message}</h3>
    </div>
  </main>

</div>