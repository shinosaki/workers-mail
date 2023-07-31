import { get } from 'svelte/store';
import { dark } from '$lib/stores';

export const loadTheme = () => {
  dark.set(
    ('dark' in localStorage) ? JSON.parse(localStorage.getItem('dark'))
    : (window.matchMedia('(prefers-color-scheme: dark)').matches) ? true
    : false
  );

  (get(dark)) ? document.body.classList.add('dark')
              : document.body.classList.remove('dark');

  dark.subscribe((value) => {
    localStorage.dark = JSON.stringify(value);
    (value) ? document.body.classList.add('dark')
            : document.body.classList.remove('dark')
  });
}