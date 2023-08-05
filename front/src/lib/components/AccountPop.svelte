<script>
  import { onMount } from 'svelte';
  import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { Button } from '$lib/components';

  // import { IconUserCircle,
  //          IconCopy } from '@tabler/icons-svelte';
  import IconUserCircle from '@tabler/icons-svelte/dist/svelte/icons/IconUserCircle.svelte';
  import IconCopy from '@tabler/icons-svelte/dist/svelte/icons/IconCopy.svelte';

  const copyEmailAddr = e => {
    const { textContent } = e.target;
    navigator.clipboard.writeText(textContent);
  };

  let account = { domains: [] };

  onMount(async () => {
    account = await fetch(`${API}/v1/account`, { credentials: 'include' })
      .then(r=>r.json())
      .then(j=>j.account);
  });

  $: ({ user = '', display = '', domains } = account);
</script>

<div class="flex relative">
  <input type="checkbox" id="account-menu" class="absolute opacity-0 h-full w-full">

  <div class="flex items-center gap-3">
    <IconUserCircle stroke="1.5" class="w-8 h-8 flex-shrink-0 text-slate-400" />
    <!-- <span class="font-bold text-slate-400">{display}</span> -->
  </div>

  <div id="account-pop" class="transition-opacity duration-300
    inline-block w-64
    absolute right-0 top-14 z-10
    text-sm text-gray-500 dark:text-gray-400
    bg-white dark:bg-gray-800
    rounded-lg shadow-sm
    border border-gray-200 dark:border-gray-600">
    <div class="flex flex-col items-center gap-3
                p-4 my-2">
      <IconUserCircle stroke="1.5" class="w-14 h-14 text-slate-400" />

      <p class="flex flex-col items-center w-full">
        <span class="text-2xl">{display}</span>
        {#each domains as domain (domain)}
          <span on:click={copyEmailAddr}
                class="flex items-center gap-1
                       italic cursor-pointer
                       hover:text-slate-800 hover:dark:text-slate-300">
            <IconCopy class="w-4 h-4" />
            {`${user}@${domain}`}
          </span>
        {/each}
      </p>

      <a href="/account/settings" class="contents">
        <Button value={t('settings', $language)} />
      </a>
      <form method="POST" action="/api/auth/logout" class="contents">
        <Button value={t('logout', $language)} />
      </form>
    </div>
  </div>
</div>

<style>
  #account-pop {
    @apply invisible opacity-0;
  }

  #account-menu:checked ~ #account-pop {
    @apply visible opacity-100;
  }
</style>