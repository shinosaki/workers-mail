<script>
  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { Button } from '$lib/components';

  // import { IconSearch } from '@tabler/icons-svelte';
  import IconSearch from '@tabler/icons-svelte/dist/svelte/icons/IconSearch.svelte';
</script>

<form>
  <label for="search" class="sr-only">{t('search', $language)}</label>

  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <IconSearch class="text-gray-500 dark:text-gray-400" />
    </div>

    <input type="search" id="search" required placeholder={t('search.messages', $language)} class="
        block w-full p-2.5 pl-10
        text-sm text-gray-900 dark:text-slate-100 dark:placeholder-gray-400
        rounded-lg border border-gray-300 dark:border-gray-600
        focus:border-indigo-500 dark:focus:border-indigo-500
        bg-gray-50 dark:bg-gray-700
        focus:ring-indigo-500 dark:focus:ring-indigo-500">

    <button type="submit" class="
        absolute right-2.5 bottom-1 rounded-lg
        px-4 py-1.5
        text-sm text-white font-medium
        focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:outline-none
        bg-indigo-700 dark:bg-indigo-600 hover:bg-indigo-800 dark:hover:bg-indigo-700">{t('search', $language)}</button>
  </div>
</form>