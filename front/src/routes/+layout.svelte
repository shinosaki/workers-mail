<script>
  import '../app.css';
  import { loadTheme } from '$lib/theme';
  import { loadLang } from '$lib/i18n';

  export let data;

  loadTheme(data.theme);
  loadLang(data.lang);
</script>

<slot />