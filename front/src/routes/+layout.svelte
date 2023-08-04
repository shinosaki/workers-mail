<script>
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME as APP_NAME } from '$env/static/public';
</script>

<svelte:head>
  <title>{APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<slot />