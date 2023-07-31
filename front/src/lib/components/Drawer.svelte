<script>
  import { menu } from '$lib/stores';
</script>

<!-- Background Shadow -->
<div on:click={() => $menu = false} class="fixed inset-0 opacity-100 bg-black/25 dark:bg-black/60 z-50"></div>

<div class="fixed w-64 h-screen z-50">
  <slot />
</div>
