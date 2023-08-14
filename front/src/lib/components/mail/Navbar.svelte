<script>
  import { t } from '$lib/i18n';
  import IconUserCircle from '@tabler/icons-svelte/dist/svelte/icons/IconUserCircle.svelte';
</script>

<nav class="w-full sticky inset-0 px-10 py-2.5 flex shrink-0 items-center justify-center bg-slate-200 dark:bg-slate-800">
  <form class="relative flex gap-2 h-10" method="post" action="/search">
    <label class="flex flex-col w-80" for="search">
      <input id="search" name="search" type="search" placeholder="Search message..." class="input w-full h-full">
    </label>

    <button class="button absolute top-0 bottom-0 right-1 my-auto h-3/4 w-20 flex items-center justify-center">
      {$t('search')}
    </button>
  </form>

  <span class="hidden md:block ml-auto">
    <IconUserCircle />
  </span>
</nav>