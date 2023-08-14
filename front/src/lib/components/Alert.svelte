<script>
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import IconInfoCircle from '@tabler/icons-svelte/dist/svelte/icons/IconInfoCircle.svelte';
  import IconAlertTriangle from '@tabler/icons-svelte/dist/svelte/icons/IconAlertTriangle.svelte';
  import IconX from '@tabler/icons-svelte/dist/svelte/icons/IconX.svelte';

  $: type = $page.url.searchParams.get('type');
  $: alert = $t($page.url.searchParams.get('alert'));
  $: icon = (type === 'warn') ? IconAlertTriangle : IconInfoCircle;
</script>

{#if alert}
<dialog open class="animate-fadeout alert z-10 mt-20 md:mr-10 md:mt-10 shadow-xl">
  <div class="flex gap-5 items-center">
    <span class="p-1.5">
      <svelte:component this={icon} class="opacity-80" />
    </span>

    <span>
      {alert}
    </span>

    <form class="contents" method="dialog">
      <button class="button-menu p-1.5">
        <IconX class="opacity-80" />
      </button>
    </form>
  </div>
</dialog>
{/if}