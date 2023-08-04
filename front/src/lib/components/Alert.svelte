<script>
  // import { IconInfoCircle,
  //          IconAlertTriangle,
  //          IconX } from '@tabler/icons-svelte';
  import IconInfoCircle from '@tabler/icons-svelte/dist/svelte/icons/IconInfoCircle.svelte';
  import IconAlertTriangle from '@tabler/icons-svelte/dist/svelte/icons/IconAlertTriangle.svelte';
  import IconX from '@tabler/icons-svelte/dist/svelte/icons/IconX.svelte';

  export let type = 'info',
             close = false;
  let hidden = false;

  $: icon =  (type === 'warn') ? IconAlertTriangle : IconInfoCircle;
  $: color = (type === 'warn') ? 'text-rose-600 dark:text-rose-500' : '';
</script>

<aside class:hidden
       class="flex items-center justify-between
              w-full h-fit p-4
              {color}
              bg-gray-50 dark:bg-gray-800
              rounded-lg border border-gray-300 dark:border-gray-600">

  <div class="flex gap-3 items-center p-1.5">
    <svelte:component this={icon} class="w-6 aspect-square flex-shrink-0" />
    <span class="sr-only capitalize">{type}</span>

    <slot />
  </div>

  {#if close}
    <button on:click={() => hidden = true}
            class="inline-flex items-center p-1.5
                   rounded-lg focus:ring-2 focus:ring-blue-400
                   hover:bg-gray-300 dark:hover:bg-gray-600">
      <IconX class="w-6 aspect-square flex-shrink-0" />
      <span class="sr-only capitalize">Close</span>
    </button>
  {/if}
</aside>

<style>
  aside :global(a) {
    @apply text-indigo-500 underline underline-offset-4;
  }

  :global(body.dark) aside :global(a) {
    @apply text-indigo-300;
  }
</style>