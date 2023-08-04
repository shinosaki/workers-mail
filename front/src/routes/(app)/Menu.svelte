<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_APP_NAME as APP_NAME,
           PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t, langSelector } from '$lib';
  import { dark, language, langMenu } from '$lib/stores';
  import { Menu } from '$lib/components';

  // import { IconLogin,
  //          IconLogout2,
  //          IconUserPlus,
  //          IconInbox,
  //          IconSettings,
  //          IconBrightnessHalf,
  //          IconLanguageHiragana } from '@tabler/icons-svelte';
  import IconLogin from '@tabler/icons-svelte/dist/svelte/icons/IconLogin.svelte';
  import IconLogout2 from '@tabler/icons-svelte/dist/svelte/icons/IconLogout2.svelte';
  import IconUserPlus from '@tabler/icons-svelte/dist/svelte/icons/IconUserPlus.svelte';
  import IconInbox from '@tabler/icons-svelte/dist/svelte/icons/IconInbox.svelte';
  import IconSettings from '@tabler/icons-svelte/dist/svelte/icons/IconSettings.svelte';
  import IconBrightnessHalf from '@tabler/icons-svelte/dist/svelte/icons/IconBrightnessHalf.svelte';
  import IconLanguageHiragana from '@tabler/icons-svelte/dist/svelte/icons/IconLanguageHiragana.svelte';

  let isLogin = false;

  $: top = (isLogin) ? [
    {
      title: t('inbox', $language),
      link: `/i/inbox`,
      icon: IconInbox
    }
  ] : [
    {
      title: t('login', $language),
      link: '/login',
      icon: IconLogin
    },
    {
      title: t('registration', $language),
      link: '/register',
      icon: IconUserPlus
    },
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
    ... (isLogin) ? [
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
        link: `${API}/auth/logout?redirect=${$page.url.origin}`,
        color: 'indigo'
      }
    ] : []
  ];

  onMount(async () => {
    isLogin = await fetch(`${API}/v1/ping`, { credentials: 'include' })
      .then(r=>r.json())
      .then(j=>j.status);
  });
</script>

<Menu header={{ title: APP_NAME, link: '/' }} {top} {bottom} />