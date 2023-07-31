import { writable } from 'svelte/store';

export const dark = writable(false);
export const menu = writable(false);
export const language = writable(['en']);
export const langMenu = writable(false);