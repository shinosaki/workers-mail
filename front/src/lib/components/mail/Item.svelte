<script>
  import { lang } from '$lib/stores';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ja';
  import IconCheck from '@tabler/icons-svelte/dist/svelte/icons/IconCheck.svelte';

  export let data;

  $: ({ id, date, from, subject } = data);

  $: time = (date) => {
    dayjs.extend(relativeTime);
    dayjs.locale($lang[0] ?? 'en');
    return dayjs(new Date(date)).fromNow();
  };
</script>

<li class="py-1.5 px-3 flex gap-5 items-center whitespace-nowrap">
  <label for={id} class="relative w-10 h-10 flex shrink-0 items-center justify-between select-none">
    <input {id} name={id} type="checkbox" class="peer w-full h-full appearance-none rounded-xl bg-slate-300 dark:bg-slate-600 checked:bg-blue-500 dark:checked:bg-blue-500 hover:opacity-70">
    <IconCheck stroke="3" class="stroke-white dark:opacity-90 absolute inset-0 m-auto hidden peer-checked:block pointer-events-none peer-hover:block" />
    <span class="absolute inset-0 flex items-center justify-center peer-checked:hidden peer-hover:hidden">{from.name.slice(0, 2).toUpperCase()}</span>
  </label>

  <a href="./message/{id}" class="w-full h-full flex flex-col md:flex-row md:items-center md:gap-3 overflow-x-hidden">
    <span class="md:w-40 truncate shrink-0">{from.name}</span>

    <p class="flex gap-3 w-full overflow-x-hidden">
      <span class="opacity-70 w-full truncate">{subject}</span>
      <span class="opacity-80 ml-auto">{time(date)}</span>
    </p>
  </a>
</li>