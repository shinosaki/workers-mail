<script>
  import { t } from '$lib/i18n';
  import { lang } from '$lib/stores';
  import { MailNavbar } from '$lib/components';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ja';

  import IconArchive from '@tabler/icons-svelte/dist/svelte/icons/IconArchive.svelte';
  import IconFlame from '@tabler/icons-svelte/dist/svelte/icons/IconFlame.svelte';
  import IconMailCancel from '@tabler/icons-svelte/dist/svelte/icons/IconMailCancel.svelte';
  import IconTag from '@tabler/icons-svelte/dist/svelte/icons/IconTag.svelte';
  import IconTrash from '@tabler/icons-svelte/dist/svelte/icons/IconTrash.svelte';


  export let data;

  $: ({ id, email: { from, to, date, subject, text, html } } = data.message);

  $: time = (date) => {
    dayjs.extend(relativeTime);
    dayjs.locale($lang[0] ?? 'en');
    return dayjs(new Date(date)).fromNow();
  };
</script>

<div class="flex flex-col w-full h-full bg-slate-200 dark:bg-slate-800">
  <MailNavbar />

  <article class="relative mx-1 p-6 flex flex-col gap-5 rounded-lg border-2 border-slate-500 h-full overflow-y-auto bg-slate-100 dark:bg-slate-900">
    <header class="flex flex-col gap-2 md:gap-5">
      <div class="flex flex-col md:flex-row justify-between">
        <h1 class="text-2xl md:text-3xl">{subject}</h1>
        <i class="ml-auto mt-auto opacity-80">{time(date)}</i>
      </div>

      <div class="flex flex-col gap-1 md:gap-2 px-2">
        <p class="flex">
          <span class="shrink-0 w-16">{$t('from')}:</span>
          <span>
            {from.name ?? ''}
            <span class="opacity-80">&nbsp;&lt;{from.address}&gt;</span>
          </span>
        </p>

        <p class="flex">
          <span class="shrink-0 w-16">{$t('to')}:</span>
          {#each to as item}
            <span>{item.address}</span>
          {/each}
        </p>
      </div>

      <nav class="py-1.5 px-3 flex gap-5 rounded-lg border border-slate-500">
        <button class="hover:opacity-50"><IconMailCancel class="w-5 h-5 md:w-6 md:h-6" /></button>

        <hr class="w-px h-full bg-slate-500 border-0">

        <button class="hover:opacity-50"><IconTrash class="w-5 h-5 md:w-6 md:h-6" /></button>
        <button class="hover:opacity-50"><IconArchive class="w-5 h-5 md:w-6 md:h-6" /></button>
        <button class="hover:opacity-50"><IconFlame class="w-5 h-5 md:w-6 md:h-6" /></button>

        <hr class="w-px h-full bg-slate-500 border-0">

        <button class="hover:opacity-50"><IconTag class="w-5 h-5 md:w-6 md:h-6" /></button>
        <!-- <button><IconFolderShare /></button> -->
      </nav>
    </header>

    {#if html}
      <iframe srcdoc={html} class="h-full" />
    {:else if text}
      <main class="h-full p-6 overflow-y-auto whitespace-pre-wrap break-words bg-slate-200 dark:bg-slate-700">{text}</main>
    {/if}
  </article>
</div>
