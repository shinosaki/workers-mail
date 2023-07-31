import { language, langMenu, menu } from '$lib/stores';
import { get } from 'svelte/store';
import translations from './translations';

export const t = (key) => {
  const i18n = Object.keys(translations);

  const lang = (!get(language).length)
    ? 'en'
    : get(language).find(lang => i18n.includes(lang.split('-').shift()))
               .split('-').shift();

  return translations[lang][key] ?? '';
};

export const langSelector = lang => {
  return () => {
    language.set([lang]);
    langMenu.set(false);
    menu.set(false);
  }
};