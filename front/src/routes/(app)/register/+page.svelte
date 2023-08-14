<script>
  import { PUBLIC_APP_NAME, PUBLIC_API_ENDPOINT } from '$env/static/public';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import { Input } from '$lib/components';
  import IconInfoCircle from '@tabler/icons-svelte/dist/svelte/icons/IconInfoCircle.svelte';

  export let data;

  $: disabled = !data.status;
</script>

<svelte:head>
  <title>{$t('registration')} | {PUBLIC_APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<article class="flex flex-col gap-20 items-center w-full my-auto p-10">
  <h1 class="text-5xl font-bold text-center">
    {$t('registration')}
  </h1>

  <main class="flex flex-col gap-10 w-96 max-w-[90vw]">
    <form class="contents"
          method="post"
          action={`${PUBLIC_API_ENDPOINT}/auth/register?redirect=${$page.url.origin}`}>
      <Input id="user"
             placeholder="lain"
             label={$t('user.id')}
             {disabled} />

      <Input id="display"
             placeholder="Iwakura Lain"
             label={$t('display.name')}
             {disabled} />

      <Input id="password"
             type="password"
             placeholder="Password"
             label={$t('password')}
             {disabled} />

      <button class="button mt-10" {disabled}>
        {$t('registration')}
      </button>
    </form>
  </main>
</article>
