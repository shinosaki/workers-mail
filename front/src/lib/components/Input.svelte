<script>
  export let id,
             type,
             label,
             placeholder,
             disabled;
</script>

<label class="grid gap-2" for={id}>
  {label}
  <input {id} name={id} {type} {placeholder} {disabled}
         class="p-2.5 bg-slate-100 dark:bg-slate-700
                rounded-lg border border-slate-500
                disabled:bg-slate-300 dark:disabled:bg-slate-500
                disabled:cursor-not-allowed">
  <slot />
</label>