<script>
  import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { Button, Alert, Input } from '$lib/components';
</script>

<main class="flex flex-col gap-16
             items-center justify-center
             w-full h-screen">
  <h1 class="text-5xl font-bold">{t('login', $language)}</h1>

  <form method="POST" action={`${API}/auth/login`}
        class="grid gap-20 w-80">
    <div class="grid gap-10">
      <Input id="user"
             type="text"
             label={t('user.id', $language)}
             placeholder="lain" />

      <Input id="password"
             type="password"
             label={t('password', $language)}
             placeholder="Password">
        <a href="/reset"
           class="text-right text-indigo-500 dark:text-indigo-300
                  underline underline-offset-4">
          <i class="text-xs">{t('password.reset', $language)}</i>
        </a>
      </Input>
    </div>

    <Button value={t('login', $language)} />
  </form>
</main>