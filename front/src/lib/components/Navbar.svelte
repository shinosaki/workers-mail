<script>
  import { menu } from '$lib/stores';

  // import { IconMenu2 } from '@tabler/icons-svelte';
  import IconMenu2 from '@tabler/icons-svelte/dist/svelte/icons/IconMenu2.svelte';
  
  export let title,
             link;
</script>

<nav class="sticky lg:hidden top-0 left-0 z-40  w-full h-14 px-4 flex items-center justify-between bg-white dark:bg-slate-900">

  <div class="flex items-center">
    <button on:click={() => $menu = true} class="w-8 p-1 rounded hover:bg-slate-700">
      <IconMenu2 />
    </button>

    <a href={link}>
      <p class="ml-2">{title}</p>
    </a>
  </div>

  <slot />

</nav>