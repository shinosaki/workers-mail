<script>
  import { PUBLIC_APP_NAME } from '$env/static/public';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import IconInfoCircle from '@tabler/icons-svelte/dist/svelte/icons/IconInfoCircle.svelte';
</script>

<svelte:head>
  <title>{PUBLIC_APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<article class="flex flex-col gap-20 items-center w-full my-auto p-10">
  <h1 class="text-5xl font-bold text-center">
    {PUBLIC_APP_NAME}
  </h1>

  <main class="flex flex-col gap-6 w-96 max-w-[90vw]">
    <a href="/login" class="button">{$t('login')}</a>
    <i class="text-center">or</i>
    <a href="/register" class="button">{$t('registration')}</a>
  </main>

  <aside class="alert flex shadow-xl">
    <span>
      <IconInfoCircle class="opacity-80" />
    </span>
    <span>
      {@html $t('project.info')}
    </span>
  </aside>
</article>
