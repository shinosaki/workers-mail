<script>
  import { PUBLIC_APP_VERSION as APP_VERSION,
           PUBLIC_APP_AUTHOR as APP_AUTHOR } from '$env/static/public';

  import { t } from '$lib';
  import { menu, language } from '$lib/stores';
  import { MenuItem, Button } from '$lib/components';

  export let header = { title: 'Menu', link: '/' },
             footer,
             button,
             top = [],
             bottom = [];

  $: footer = [ `${t('version', $language)}: ${APP_VERSION}`, `by ${APP_AUTHOR}` ];
</script>

<nav class="flex flex-col justify-between
            h-full w-64 p-4
            bg-slate-100 dark:bg-slate-800">

  <div class="grid gap-5">
    <div class="text-center">
      <a href={header.link} on:click={() => $menu = false} >
        <b>{header.title}</b>
      </a>
    </div>

    {#if button}
      <Button value={button.value} disabled={button.disabled} />
    {/if}

    <ul class="grid gap-1">
      {#each top as item (item)}
        <div on:click={item.onClick} >
          <MenuItem {item} />
        </div>
      {/each}
    </ul>
  </div>

  <div class="grid gap-5">
    <ul class="grid gap-1">
      {#each bottom as item (item)}
        <div on:click={item.onClick} >
          <MenuItem {item} />
        </div>
      {/each}
    </ul>

    <footer class="flex justify-between text-xs text-slate-400">
      {#each footer as item (item)}
        <i>{item}</i>
      {/each}
    </footer>
  </div>

</nav>