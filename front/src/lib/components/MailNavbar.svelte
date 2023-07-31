<script>
  import { AccountPop, SearchBox } from '$lib/components';
</script>

<nav class="h-16 px-14 flex items-center justify-between">
  <div class="w-full lg:w-2/5">
    <SearchBox />
  </div>

  <div class="hidden lg:block">
    <AccountPop />
  </div>
</nav>