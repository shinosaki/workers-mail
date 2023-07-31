<script>
  import { menu } from '$lib/stores';

  export let item;

  $: ({ hr,
        title,
        link,
        icon,
        method,
        keepMenu,
        onClick,
        color,
        children = [],
        toggleChildren } = item);

  $: Color = (color === 'indigo') ? 'bg-indigo-600 dark:bg-indigo-700 text-slate-100 dark:text-inherit hover:bg-indigo-500 dark:hover:bg-indigo-600' : 'hover:bg-slate-200 dark:hover:bg-slate-700';
</script>

{#if hr}
  <hr class="my-2 border-slate-500" />
{:else}
  <li on:click={onClick} on:click={() => $menu = keepMenu}>

    {#if method === 'post'}
      <form method="POST" action={link} class="contents">
        <button class="flex w-full p-2 rounded-md select-none {Color}">
          <span class="w-5 mr-3">
            <svelte:component this={icon} />
          </span>
          <span>{title}</span>
        </button>
      </form>
    {:else}
      <a href={link} 
         class="flex p-2 rounded-md select-none {Color}">
        <span class="w-5 mr-3">
          <svelte:component this={icon} />
        </span>
        <span class="w-full">{title}</span>
      </a>
    {/if}

    {#if toggleChildren}
      <ul>
        {#each children as item (item)}
          <svelte:self {item} />
        {/each}
      </ul>
    {/if}
    
  </li>
{/if}