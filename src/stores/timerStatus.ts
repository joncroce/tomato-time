import { writable } from 'svelte/store';

export enum TimerStatus {
	IDLE = 'IDLE',
	ACTIVE = 'ACTIVE',
	ALERT = 'ALERT',
};

export const status = writable(TimerStatus.IDLE);