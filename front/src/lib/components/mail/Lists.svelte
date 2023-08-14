<script>
  import { MailItem } from '$lib/components';
  
  import IconArchive from '@tabler/icons-svelte/dist/svelte/icons/IconArchive.svelte';
  import IconFlame from '@tabler/icons-svelte/dist/svelte/icons/IconFlame.svelte';
  import IconMailCancel from '@tabler/icons-svelte/dist/svelte/icons/IconMailCancel.svelte';
  import IconTag from '@tabler/icons-svelte/dist/svelte/icons/IconTag.svelte';
  import IconTrash from '@tabler/icons-svelte/dist/svelte/icons/IconTrash.svelte';

  export let messages = [];
</script>

<ul class="relative mx-1 flex flex-col gap-0.5 rounded-lg border-2 border-slate-500 h-full overflow-y-auto bg-slate-100 dark:bg-slate-900">
  <form class="contents">
    <nav class="z-10 sticky top-0 py-1.5 px-3 flex gap-5 border-b-2 border-slate-500 bg-inherit">
      <button class="hover:opacity-50"><IconMailCancel /></button>

      <hr class="w-px h-full bg-slate-500 border-0">

      <button class="hover:opacity-50"><IconTrash /></button>
      <button class="hover:opacity-50"><IconArchive /></button>
      <button class="hover:opacity-50"><IconFlame /></button>

      <hr class="w-px h-full bg-slate-500 border-0">

      <button class="hover:opacity-50"><IconTag /></button>
      <!-- <button><IconFolderShare /></button> -->
    </nav>

    {#each messages as data (data.id)}
      <MailItem {data} />

      <hr class="border-slate-300 dark:border-slate-600">
    {/each}
  </form>
</ul>