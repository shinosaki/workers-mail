<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PUBLIC_API_ENDPOINT as API } from '$env/static/public';

  import { t } from '$lib';
  import { language } from '$lib/stores';
  import { MailNavbar } from '$lib/components';
  import DummyMessage from './DummyMessage.svelte';

  import PostalMime from 'postal-mime';
  const parser = new PostalMime();

  import dayjs from 'dayjs';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ja';

  const getMessage = async () => await fetch(`${API}/v1/message/${$page.params.id}`).then(r=>r.json());

  const parseEmail = async eml => await parser.parse(eml);
</script>


<div class="w-full h-[calc(100vh-3.5rem)] lg:h-screen overflow-y-hidden">
  <MailNavbar />

  <article class="mx-5 lg:mb-0 p-10
                  rounded-lg border border-slate-500
                  flex flex-col gap-10
                  h-[calc(100%-5rem)]">
    {#await getMessage()}
      <header class="flex flex-col gap-5">
        <div class="flex gap-5 flex-col md:flex-row justify-between md:items-end">
          <span class="skeleton text-3xl md:w-80">Email Subject</span>
          <span class="skeleton text-right">1970/01/01 00:00:00</span>
        </div>

        <div class="grid gap-y-2 grid-cols-[3.5rem_auto] md:grid-cols-[5rem_auto] md:text-lg">
          <span>{t('from', $language)}:</span>
          <span class="skeleton md:w-80"></span>

          <span>{t('to', $language)}:</span>
          <span class="skeleton md:w-80"></span>
        </div>
      </header>

      <main class="p-4 bg-slate-100 dark:bg-slate-800 whitespace-pre-wrap break-words overflow-y-scroll w-full h-full">
        <DummyMessage />
      </main>
    {:then { id, to, from, date, subject, headers, eml }}
      <header class="flex flex-col gap-5">
        <div class="flex gap-5 flex-col md:flex-row justify-between md:items-end">
          <span class="text-3xl">{subject}</span>
          <span class="italic text-right flex-shrink-0">{dayjs(new Date(date)).format('YYYY/MM/DD HH:mm:ss')}</span>
        </div>

        <div class="grid gap-y-2 grid-cols-[3.5rem_auto] md:grid-cols-[5rem_auto] md:text-lg">
          <span>{t('from', $language)}:</span>
          <span>{from.name}</span>

          <span>{t('to', $language)}:</span>
          <span>{to.shift().name}</span>
        </div>
      </header>

      {#await parseEmail(eml)}
        <main class="p-4 bg-slate-100 dark:bg-slate-800 whitespace-pre-wrap break-words overflow-y-scroll w-full h-full">
          <DummyMessage />
        </main>
      {:then email}
        {#if email.html}
          <iframe srcdoc={email.html} class="overflow-y-scroll w-full h-full" />
        {:else if email.text}
          <main class="p-4 bg-slate-100 dark:bg-slate-800 whitespace-pre-wrap break-words overflow-y-scroll w-full h-full">{email.text}</main>
        {/if}
      {/await}
    {/await}
  </article>
</div>