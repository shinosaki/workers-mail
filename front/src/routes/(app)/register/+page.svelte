<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { Button, Alert, Input } from '$lib/components';

  let disabled;
  onMount(async () => {
    disabled = !await fetch(`${API}/auth/register`)
      .then(r=>r.json())
      .then(j=>j.status);
  });
</script>

<main class="flex flex-col gap-16
             items-center justify-center
             w-full h-screen">
  <h1 class="text-5xl font-bold">{t('registration', $language)}</h1>

  <form method="POST" action={`${API}/auth/register?redirect=${$page.url.origin}`} class="grid gap-20 w-80">
    <!-- <input id="domains" type="hidden" value={PUBLIC_DOMAINS}> -->

    <div class="grid gap-10">
      <Input id="user"
             type="text"
             label={t('user.id', $language)}
             placeholder="lain"
             {disabled} />

      <Input id="display"
             type="text"
             label={t('display.name', $language)}
             placeholder="Iwakura Lain"
             {disabled} />

      <Input id="password"
             type="password"
             label={t('password', $language)}
             placeholder="Password"
             {disabled} />
    </div>

    <Button value={t('registration', $language)} {disabled} />
  </form>
</main>