<script>
  // import { IconPhoto } from '@tabler/icons-svelte';
  import IconPhoto from '@tabler/icons-svelte/dist/svelte/icons/IconPhoto.svelte';

  export let width = 'full',
             height = '4',
             noShrink = false,
             type,
             classes;
</script>

<span class="w-{width} h-{height} bg-slate-700 rounded-lg animate-pulse {classes}"
      class:flex-shrink-0={noShrink}>
  {#if type === 'image'}
    <IconPhoto />
  {/if}
</span>
