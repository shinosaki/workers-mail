import { browser } from '$app/environment';
import { get, derived } from 'svelte/store';
import { lang } from '$lib/stores';
import translations from './translations';

export const loadLang = (key = 'en') => {
  if (!browser) {
    lang.set([key]);
    return true;
  };

  lang.set(
    ('lang' in localStorage) ? JSON.parse(localStorage.getItem('lang'))
    : navigator.languages
  );

  lang.subscribe((value) => {
    if (!Array.isArray(value)) lang.set([value]);
    localStorage.lang = JSON.stringify(get(lang));
  });
};

export const t = derived(lang, ($lang) =>
  (key) => translations[$lang[0]][key]);