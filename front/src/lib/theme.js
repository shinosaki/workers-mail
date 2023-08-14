import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { dark } from '$lib/stores';

export const loadTheme = (key) => {
  if (!browser) {
    dark.set(Boolean((key === 'dark')));
    return true;
  };

  dark.set(
    ('dark' in localStorage) ? JSON.parse(localStorage.getItem('dark'))
    : (window.matchMedia('(prefers-color-scheme: dark)').matches) ? true
    : false
  );

  (get(dark)) ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark');

  dark.subscribe((value) => {
    localStorage.dark = JSON.stringify(value);
    (value) ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
  });
};