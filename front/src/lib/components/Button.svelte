<script>
  export let value,
             disabled = false;
</script>

<button {disabled} class="
  w-full p-2.5
  border border-indigo-900 rounded-lg
  text-slate-100 dark:text-inherit
  bg-indigo-600 dark:bg-indigo-700
  hover:bg-indigo-500 dark:hover:bg-indigo-600
  disabled:bg-slate-400 dark:disabled:bg-slate-600
  disabled:cursor-not-allowed">

  {value}
  <slot />
  
</button>