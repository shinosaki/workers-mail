<script>
  import { MailLists, MailNavbar } from '$lib/components';

  export let data;
  $: ({ messages } = data);
</script>

<div class="w-full">
  <MailNavbar />
  <MailLists {messages} />
</div>