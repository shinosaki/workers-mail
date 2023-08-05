<script>
  import { CheckBox, IconFolderShare, MailItem, Skeleton } from '$lib/components';

  // import { IconArchive,
  //          IconCheck,
  //          IconFlame,
  //          IconMailCancel,
  //          IconTag,
  //          IconTrash } from '@tabler/icons-svelte';
  import IconArchive from '@tabler/icons-svelte/dist/svelte/icons/IconArchive.svelte';
  import IconCheck from '@tabler/icons-svelte/dist/svelte/icons/IconCheck.svelte';
  import IconFlame from '@tabler/icons-svelte/dist/svelte/icons/IconFlame.svelte';
  import IconMailCancel from '@tabler/icons-svelte/dist/svelte/icons/IconMailCancel.svelte';
  import IconTag from '@tabler/icons-svelte/dist/svelte/icons/IconTag.svelte';
  import IconTrash from '@tabler/icons-svelte/dist/svelte/icons/IconTrash.svelte';

  export let messages = [];
</script>


<ul class="h-[calc(100vh_-_9rem)] lg:h-[calc(100vh_-_4.5rem)]
           mx-5 mb-6 lg:mb-0
           overflow-y-scroll overflow-x-hidden
           rounded-lg border border-slate-500
           flex flex-col">

  <nav class="flex justify-between md:justify-start md:gap-5 items-center py-2 px-3 md:px-5 border-b border-slate-500">
    <CheckBox />

    <button><IconMailCancel /></button>
    <hr class="w-px h-full bg-slate-500 border-0">

    <button><IconTrash /></button>
    <button><IconArchive /></button>
    <button><IconFlame /></button>
    <hr class="w-px h-full bg-slate-500 border-0">

    <button><IconTag /></button>
    <button><IconFolderShare /></button>
  </nav>

  {#each messages as item (item)}
    <MailItem data={item} />
  {/each}
</ul>