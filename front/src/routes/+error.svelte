<script>
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME } from '$env/static/public';

  $: ({ status, error } = $page);
</script>

<svelte:head>
  <title>{$page.status} | {PUBLIC_APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<article class="w-screen h-screen">
  <main class="absolute inset-0 m-auto w-fit h-fit flex flex-col items-center gap-5">
    <h1 class="text-9xl">{status}</h1>
    <h3 class="text-2xl">{error.message}</h3>
    <a href="/" class="link absolute -bottom-1/2 whitespace-nowrap text-xl 
    dark:text-slate-400">Top Page</a>
  </main>
</article>
