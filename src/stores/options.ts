import { writable } from 'svelte/store';

export const showLeadingZero = writable(false);
export const twentyFourHourMode = writable(false);
export const blinkingColon = writable(false);
export const showProgressBar = writable(false);