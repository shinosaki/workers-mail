<script>
  import { PUBLIC_APP_NAME, PUBLIC_APP_VERSION, PUBLIC_APP_AUTHOR, PUBLIC_APP_AUTHOR_URL } from '$env/static/public';
  import { menu } from '$lib/stores';
  import IconX from '@tabler/icons-svelte/dist/svelte/icons/IconX.svelte';

  export let close = false,
             header = { link: '/', title: PUBLIC_APP_NAME },
             footer = [ `Version: ${PUBLIC_APP_VERSION}`, `by <a href="${PUBLIC_APP_AUTHOR_URL}">@${PUBLIC_APP_AUTHOR}</a>` ];
</script>

<nav on:click|stopPropagation={() => {}} class="p-4 w-60 h-screen flex flex-col shrink-0 items-center justify-between bg-slate-200 dark:bg-slate-800">
  <header class="flex relative">
    <a href={header.link} class="contents">
      <b>{header.title}</b>
    </a>
    
    <form class:hidden={!close} class="absolute bottom-0 left-full ml-7" method="dialog" on:click={() => $menu = false}>
      <button class="button-menu p-1.5">
        <IconX class="opacity-80" />
      </button>
    </form>
  </header>

  <main class="w-full h-full py-3 flex flex-col justify-between">
    <slot />
  </main>

  <footer class="w-full flex justify-between">
    {#each footer as item}
      <i class="text-xs opacity-80">{@html item}</i>
    {/each}
  </footer>
</nav>