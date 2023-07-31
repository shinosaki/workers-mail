import { language } from '$lib/stores';

export const loadLanguage = () => {
  language.set(
    ('lang' in localStorage) ? JSON.parse(localStorage.getItem('lang'))
    : navigator.languages
  );

  language.subscribe((value) => {
    localStorage.lang = JSON.stringify([...value]);
  });
};