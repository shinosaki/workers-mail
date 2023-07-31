<script>
  import { page } from '$app/stores';
  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { Alert, Button } from '$lib/components';

  $: alert = t($page.url.searchParams.get('alert'), $language);
</script>

<main class="flex flex-col gap-20 items-center justify-center w-full h-screen">
  <div class="grid gap-5 w-80">
    <a href="/login" class="contents">
      <Button value={t('login', $language)} />
    </a>

    <i class="text-center">or</i>

    <a href="/register" class="contents">
      <Button value={t('registration', $language)} />
    </a>
  </div>

  <div class="max-w-[90%]">
    <Alert>
      <span>
        {@html t('project.info', $language)}
      </span>
    </Alert>
  </div>
</main>
