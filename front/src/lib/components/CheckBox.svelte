<script>
  // import { IconCheck } from '@tabler/icons-svelte';
  import IconCheck from '@tabler/icons-svelte/dist/svelte/icons/IconCheck.svelte';

  export let size = '24',
             icon = '',
             text;

  $: initials = text?.toUpperCase().slice(0,2);
</script>

<label class="flex items-center select-none cursor-pointer">
  <input type="checkbox" class="opacity-0 absolute" />
  <div style="background-image: url('{icon}')"
       class="flex flex-shrink-0 justify-center items-center
              bg-slate-300 dark:bg-indigo-900
              hover:bg-gray-400 hover:dark:bg-gray-700
              rounded-md bg-cover">
    <span class="opacity-0">
      <IconCheck size={size} stroke="3" class="text-white dark:text-slate-300" />
    </span>

    {#if !icon && text}
      <p class="absolute text-slate-900 dark:text-slate-300">{initials}</p>
    {/if}
  </div>
</label>

<style>
  input:checked + div {
    @apply bg-gray-400;
  }
  :global(body.dark) input:checked + div {
    @apply bg-gray-700;
  }

  input:checked + div span {
    @apply opacity-100;
  }

  input:checked + div p {
    @apply opacity-0;
  }
</style>