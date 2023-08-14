<script>
  import { t } from '$lib/i18n';
  import { dark, lang } from '$lib/stores';
  import { MenuItem } from '$lib/components';

  import IconLogin from '@tabler/icons-svelte/dist/svelte/icons/IconLogin.svelte';
  import IconUserPlus from '@tabler/icons-svelte/dist/svelte/icons/IconUserPlus.svelte';
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
  <MenuItem icon={IconLogin}
            value={$t('login')}
            link="/login" />

  <MenuItem icon={IconUserPlus}
            value={$t('registration')}
            link="/register" />
</ul>

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