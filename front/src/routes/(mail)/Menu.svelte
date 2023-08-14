<script>
  import { page } from '$app/stores';
  import { PUBLIC_API_ENDPOINT } from '$env/static/public';
  import { t } from '$lib/i18n';
  import { dark, lang } from '$lib/stores';
  import { MenuItem } from '$lib/components';

  import IconInbox from '@tabler/icons-svelte/dist/svelte/icons/IconInbox.svelte';
  import IconLogout2 from '@tabler/icons-svelte/dist/svelte/icons/IconLogout2.svelte';
  import IconSettings from '@tabler/icons-svelte/dist/svelte/icons/IconSettings.svelte';
  import IconBrightnessHalf from '@tabler/icons-svelte/dist/svelte/icons/IconBrightnessHalf.svelte';
  import IconLanguageHiragana from '@tabler/icons-svelte/dist/svelte/icons/IconLanguageHiragana.svelte';

  const themeHandler = () => {
    return (e) => {
      e.preventDefault();
      $dark = !$dark;
    };
  };

  const langHandler = (language) => {
    return (e) => {
    console.log('handle')
      e.preventDefault();
      $lang = language;
    };
  };
</script>

<ul class="flex flex-col gap-1">
  <MenuItem icon={IconInbox}
            value={$t('inbox')}
            link="/i/inbox" />
</ul>

<div class="flex flex-col gap-1">
  <ul class="hidden md:flex flex-col gap-1">
    <MenuItem icon={IconBrightnessHalf}
              value={$t('switch.theme')}
              link="?theme={($dark) ? 'light' : 'dark'}"
              onclick={themeHandler()} />

    <MenuItem icon={IconLanguageHiragana}
              value={$t('language')}
              method="children">

      <MenuItem value="English"
                link="?lang=en"
                onclick={langHandler('en')} />

      <MenuItem value="Japanese - 日本語"
                link="?lang=ja"
                onclick={langHandler('ja')} />

    </MenuItem>
  </ul>

  <hr class="border-slate-300 dark:border-slate-600">

  <ul class="flex flex-col gap-1">
    <MenuItem icon={IconSettings}
              value={$t('settings')}
              link="/account/settings" />

    <MenuItem icon={IconLogout2}
              value={$t('logout')}
              method="post"
              color="indigo"
              link={`${PUBLIC_API_ENDPOINT}/auth/logout?redirect=${$page.url.origin}`} />
  </ul>
</div>