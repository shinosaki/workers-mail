<script>
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import { t } from '$lib/i18n';
  import { dark, lang, menu } from '$lib/stores';
  import { MenuItem, SideMenu } from '$lib/components';
  import IconMenu2 from '@tabler/icons-svelte/dist/svelte/icons/IconMenu2.svelte';
  import IconUserCircle from '@tabler/icons-svelte/dist/svelte/icons/IconUserCircle.svelte';
  import IconBrightnessHalf from '@tabler/icons-svelte/dist/svelte/icons/IconBrightnessHalf.svelte';
  import IconLanguageHiragana from '@tabler/icons-svelte/dist/svelte/icons/IconLanguageHiragana.svelte';

  export let header = { link: '/', title: PUBLIC_APP_NAME };

  const themeHandler = () => {
    return (e) => {
      e.preventDefault();
      $dark = !$dark;
    };
  };

  const langHandler = (language) => {
    return (e) => {
      e.preventDefault();
      $lang = language;
    };
  };

  const menuHandler = () => {
    return (e) => {
      e.preventDefault();
      $menu = true;
    };
  };

  const userpopHandler = () => {
    return (e) => {
      e.preventDefault();
      $menu = true;
    };
  };

  $: $menu = ($page.url.searchParams.get('menu') === 'true') ? true : false;
</script>

<nav class="z-20 md:hidden sticky inset-0 px-4 py-2.5 flex shrink-0 items-center justify-between bg-slate-200 dark:bg-slate-800">
  <dialog open={$menu} class="absolute inset-0 m-0 z-10 w-full bg-black/50 text-inherit" on:click={() => $menu = false}>
    <SideMenu close {header}>
      <slot />
    </SideMenu>
  </dialog>

  <div class="flex items-center gap-3">
    <MenuItem icon={IconMenu2}
              link="?menu=true"
              onclick={menuHandler()} />
    <a href={header.link}>{header.title}</a>
  </div>

  <div class="flex items-center gap-3">
    <MenuItem icon={IconBrightnessHalf}
              link="?theme={($dark) ? 'light' : 'dark'}"
              onclick={themeHandler()} />

    <MenuItem icon={IconLanguageHiragana}
              method="children">

      <MenuItem value="English"
                link="?lang=en"
                onclick={langHandler('en')} />

      <MenuItem value="Japanese - 日本語"
                link="?lang=ja"
                onclick={langHandler('ja')} />
    </MenuItem>

    {#if $page.url.pathname.startsWith('/i/')}
      <MenuItem icon={IconUserCircle}
                link="?userpop=true"
                onclick={userpopHandler()} />
    {/if}
  </div>
</nav>