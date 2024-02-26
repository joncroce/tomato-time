import { currentTimeStore as currentTime } from './currentTime.svelte';

export enum TimerStatus {
	IDLE = 'IDLE',
	ACTIVE = 'ACTIVE',
	PAUSED = 'PAUSED',
	ALERT = 'ALERT'
};

class TimerStore {
	private status = $state<TimerStatus>(TimerStatus.IDLE);
	isIdle = $derived(this.status === TimerStatus.IDLE);
	isActive = $derived(this.status === TimerStatus.ACTIVE);
	isPaused = $derived(this.status === TimerStatus.PAUSED);
	isAlert = $derived(this.status === TimerStatus.ALERT);

	timeoutId: number | undefined;
	startTime = $state(0);
	finishTime = $state(0);
	remainingTime: number = 0;
	progress = $derived.by(() => {
		if (this.isIdle) {
			return 0;
		} else if (this.isActive) {
			return (
				(currentTime.value!.valueOf() - this.startTime) /
				(this.finishTime - this.startTime)
			);
		} else if (this.isPaused) {
			const originalDuration = this.finishTime - this.startTime;
			const elapsed = originalDuration - this.remainingTime;
			return elapsed / originalDuration;
		} else if (this.isAlert) {
			return 1;
		}
	});

	constructor() { }

	getStatus() {
		return this.status;
	}

	setIdle() {
		this.status = TimerStatus.IDLE;
	}

	setActive() {
		this.status = TimerStatus.ACTIVE;
	}

	setAlert() {
		this.status = TimerStatus.ALERT;
	}

	setPaused() {
		this.status = TimerStatus.PAUSED;
	}

	start(duration: number) {
		this.setActive();
		this.startTime = currentTime.value!.valueOf();
		this.finishTime = this.startTime + duration;
		this.remainingTime = duration;
		this.timeoutId = setTimeout(() => {
			this.setAlert();
		}, duration);
	}

	pause() {
		if (this.status !== TimerStatus.ACTIVE) return;
		this.setPaused();
		clearTimeout(this.timeoutId);
		this.remainingTime = this.finishTime - currentTime.value!.valueOf();
	}

	resume() {
		if (this.status !== TimerStatus.PAUSED) return;
		this.setActive();
		const originalDuration = this.finishTime - this.startTime;
		const elapsed = originalDuration - this.remainingTime;
		this.finishTime = currentTime.value!.valueOf() + this.remainingTime;
		this.startTime = currentTime.value!.valueOf() - elapsed;
		this.timeoutId = setTimeout(() => {
			this.setAlert();
		}, this.remainingTime);
	}

	stop() {
		this.setIdle();
		clearTimeout(this.timeoutId);
	}
}

export const timerStore = new TimerStore();