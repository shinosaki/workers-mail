<script>
  import '../../app.css';

  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME as APP_NAME } from '$env/static/public';

  import { loadLanguage, loadTheme, t } from '$lib';
  import { menu, language } from '$lib/stores';
  import { AccountPop, Alert, Drawer, Navbar, SideMenu } from '$lib/components';
  import Menu from './Menu.svelte';

  $: type = $page.url.searchParams.get('type');
  $: alert = t($page.url.searchParams.get('alert'), $language);

  onMount(() => {
    loadLanguage();
    loadTheme();
  });
</script>

<div class="flex flex-col lg:flex-row
            dark:bg-slate-900
            text-slate-700 dark:text-slate-300">

  {#if alert}
    <div class="alert absolute animate-fadeout
                top-20 lg:top-10
                right-10 md:right-10
                left-10 md:left-auto">
      <Alert {type} close>{alert}</Alert>
    </div>
  {/if}

  <Navbar title={APP_NAME} link="/i/inbox">
    <AccountPop />
  </Navbar>

  {#if $menu}
    <Drawer>
      <Menu />
    </Drawer>
  {/if}

  <SideMenu>
    <Menu />
  </SideMenu>

  <slot />

</div>