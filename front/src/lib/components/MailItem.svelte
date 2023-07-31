<script>
  import { language } from '$lib/stores';
  import { CheckBox } from '$lib/components';

  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/en';
  import 'dayjs/locale/ja';

  export let data = {};

  $: ({ id, date, from, subject, icon } = data);

  $: name = (/<[\w\.@]+>/.test(from.name))
    ? from.name.match(/"?(?<name>.*?)"? <[\w\.\+@]+>/).groups.name
    : from.name;

  $: time = (
    dayjs.extend(relativeTime),
    dayjs.locale($language[0] ?? 'en'),
    dayjs(new Date(date)).fromNow()
  );
</script>

<li class="flex flex-nowrap items-center gap-5 lg:gap-10 py-2 px-3 border-b border-slate-500 last:border-0">
  <CheckBox size="38" {icon} text={name} />

  <a href="/i/message/{id}" class="contents">
    <div class="flex flex-col md:flex-row flex-nowrap w-full whitespace-nowrap items-start md:items-center">
      <b class="w-80 text-lg">{name}</b>
      <span class="w-full dark:text-slate-400">{subject}</span>
    </div>
  </a>
  <span class="absolute md:static right-10 top-44 whitespace-nowrap dark:text-slate-400">{time}</span>
</li>