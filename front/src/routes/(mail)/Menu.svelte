<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME as APP_NAME,
           PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t, langSelector } from '$lib';
  import { dark, language, langMenu } from '$lib/stores';
  import { Menu } from '$lib/components';

  // import { IconInbox,
  //          IconLogout2,
  //          IconSettings,
  //          IconBrightnessHalf,
  //          IconLanguageHiragana } from '@tabler/icons-svelte';
  import IconInbox from '@tabler/icons-svelte/dist/svelte/icons/IconInbox.svelte';
  import IconLogout2 from '@tabler/icons-svelte/dist/svelte/icons/IconLogout2.svelte';
  import IconSettings from '@tabler/icons-svelte/dist/svelte/icons/IconSettings.svelte';
  import IconBrightnessHalf from '@tabler/icons-svelte/dist/svelte/icons/IconBrightnessHalf.svelte';
  import IconLanguageHiragana from '@tabler/icons-svelte/dist/svelte/icons/IconLanguageHiragana.svelte';

  $: button = { value: t('compose', $language), type: 'indigo' };

  $: top = [
    {
      title: t('inbox', $language),
      link: `/i/inbox`,
      icon: IconInbox
    }
  ];

  $: bottom = [
    {
      title: t('theme.switch', $language),
      icon: IconBrightnessHalf,
      onClick: () => $dark = !$dark
    },
    {
      title: t('language', $language),
      icon: IconLanguageHiragana,
      keepMenu: true,
      onClick: () => $langMenu = !$langMenu,
      toggleChildren: $langMenu,
      children: [
        { title: 'English', onClick: langSelector('en') },
        { title: 'Japanese - 日本語', onClick: langSelector('ja') },
      ]
    },
    { hr: true },
    {
      title: t('settings', $language),
      icon: IconSettings,
      link: '/account/settings'
    },
    {
      title: t('logout', $language),
      icon: IconLogout2,
      method: 'post',
      keepMenu: true,
      link: `${API}/auth/logout?redirect=${$page.url.origin}`,
      color: 'indigo'
    }
  ];
</script>

<Menu header={{ title: APP_NAME, link: '/i/inbox' }} {button} {top} {bottom} />