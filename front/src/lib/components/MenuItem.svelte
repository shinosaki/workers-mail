<script>
  export let method = 'get',
             icon,
             link,
             value,
             color,
             onclick;

  let pop = false,
      popTimeout;
</script>

<li class="{color} relative rounded-lg list-none select-none hover:bg-slate-300 dark:hover:bg-slate-600">
  {#if method === 'get'}
    <a href={link} class="w-full p-2 flex gap-2 items-center active:opacity-70"
       on:click={onclick}>
      <svelte:component this={icon} class="shrink-0" />
      {#if value}
        <span class="w-full text-left">{value}</span>
      {/if}
    </a>
  {:else if method === 'post'}
    <form method="POST" action={link} class="contents">
      <button class="w-full p-2 flex gap-2 items-center active:opacity-70"
              on:click={onclick}>
        <svelte:component this={icon} class="shrink-0" />
        {#if value}
          <span class="w-full text-left">{value}</span>
        {/if}
      </button>
    </form>
  {:else if method === 'children'}
    <input bind:checked={pop}
           on:click={onclick}
           on:mouseenter={() => pop = true}
           on:mouseleave={() => popTimeout = setTimeout(() => pop = false, 100)}
           type="checkbox" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer">
    <button class="w-full p-2 flex gap-2 items-center rounded-lg active:opacity-70 peer-checked:bg-slate-300 peer-checked:dark:bg-slate-600">
      <svelte:component this={icon} class="shrink-0" />
      {#if value}
        <span class="w-full text-left">{value}</span>
      {/if}
    </button>

    <dialog on:click|stopPropagation={() => {}}
            on:mouseenter={() => { pop = true; clearTimeout(popTimeout) }}
            on:mouseleave={() => pop = false}
            class="alert !border-slate-300/80 z-10 mr-0 absolute right-0 md:bottom-0 md:left-full md:ml-4 peer-checked:flex peer-checked:animate-[fadein_0.2s_linear_forwards_0s] shadow-xl">
      <div class="flex flex-col gap-1 whitespace-nowrap max-h-80 overflow-y-auto">
        <slot />
      </div>
    </dialog>
  {/if}
</li>

<style lang="postcss">
  li.indigo {
    @apply text-slate-200 bg-indigo-600 hover:text-slate-200 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500;
  }
</style>