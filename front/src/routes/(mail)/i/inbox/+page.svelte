<script>
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import { MailLists, MailNavbar } from '$lib/components';

  export let data;
  $: ({ messages } = data);
</script>

<svelte:head>
  <title>{$t('inbox')} | {PUBLIC_APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-slate-200 dark:bg-slate-800">
  <MailNavbar />
  <MailLists {messages} />
</div>