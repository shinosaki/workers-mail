<script>  
  export let id = 'id',
             type = 'text',
             label = 'Label',
             disabled = false,
             placeholder = 'Placeholder...';
</script>

<label class="flex flex-col w-full" for={id}>
  <span class="p-1">{label}</span>
  <input {id} name={id} {type} {placeholder} class="input w-full" {disabled}>
</label>