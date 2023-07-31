<script>
  import { PUBLIC_APP_NAME as APP_NAME } from '$env/static/public';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<slot />