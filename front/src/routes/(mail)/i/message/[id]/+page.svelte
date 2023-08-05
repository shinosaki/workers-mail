<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { MailNavbar } from '$lib/components';
  import DummyMessage from './DummyMessage.svelte';

  import dayjs from 'dayjs';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ja';

  export let data;
  $: ({ id, to, from, date, subject, headers, email } = data);
</script>


<div class="w-full h-[calc(100vh-3.5rem)] lg:h-screen overflow-y-hidden">
  <MailNavbar />

  <article class="mx-5 lg:mb-0 p-10
                  rounded-lg border border-slate-500
                  flex flex-col gap-10
                  h-[calc(100%-5rem)]">

    <header class="flex flex-col gap-5">
      <div class="flex gap-5 flex-col md:flex-row justify-between md:items-end">
        <span class="text-3xl">{subject}</span>
        <span class="italic text-right flex-shrink-0">{dayjs(new Date(date)).format('YYYY/MM/DD HH:mm:ss')}</span>
      </div>

      <div class="grid gap-y-2 grid-cols-[3.5rem_auto] md:grid-cols-[5rem_auto] md:text-lg">
        <span>{t('from', $language)}:</span>
        <span>{from.name}</span>

        <span>{t('to', $language)}:</span>
        <span>{to[0].name}</span>
      </div>
    </header>

    {#if email.html}
      <iframe srcdoc={email.html} class="overflow-y-scroll w-full h-full" />
    {:else if email.text}
      <main class="p-4 bg-slate-100 dark:bg-slate-800 whitespace-pre-wrap break-words overflow-y-scroll w-full h-full">{email.text}</main>
    {/if}
  </article>
</div>