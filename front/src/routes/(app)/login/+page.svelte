<script>
  import { PUBLIC_APP_NAME, PUBLIC_API_ENDPOINT } from '$env/static/public';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import { Input } from '$lib/components';
</script>

<svelte:head>
  <title>{$t('login')} | {PUBLIC_APP_NAME} - {$page.url.hostname}</title>
</svelte:head>

<article class="flex flex-col gap-20 items-center w-full my-auto p-10">
  <h1 class="text-5xl font-bold text-center">
    {$t('login')}
  </h1>

  <main class="flex flex-col gap-10 w-96 max-w-[90vw]">
    <form class="contents"
          method="post"
          action={`${PUBLIC_API_ENDPOINT}/auth/login?redirect=${$page.url.origin}`}>
      <Input id="user"
             placeholder="lain"
             label={$t('user.id')} />

      <Input id="password"
             type="password"
             placeholder="Password"
             label={$t('password')} />

      <button class="button mt-10">
        {$t('login')}
      </button>
    </form>
  </main>
</article>
