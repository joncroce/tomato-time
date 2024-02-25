export enum TimerStatus {
	IDLE = 'IDLE',
	ACTIVE = 'ACTIVE',
	ALERT = 'ALERT',
};

class TimerStore {
	private status = $state<TimerStatus>(TimerStatus.IDLE);
	isIdle = $derived(this.status === TimerStatus.IDLE);
	isActive = $derived(this.status === TimerStatus.ACTIVE);
	isAlert = $derived(this.status === TimerStatus.ALERT);

	timeoutId: number | undefined;
	startTime = $state(0);
	finishTime = $state(0);

	constructor() { }

	setIdle() {
		this.status = TimerStatus.IDLE;
	}

	setActive() {
		this.status = TimerStatus.ACTIVE;
	}

	setAlert() {
		this.status = TimerStatus.ALERT;
	}

	start(duration: number) {
		this.setActive();
		this.startTime = new Date().valueOf();
		this.finishTime = this.startTime + duration;
		this.timeoutId = setTimeout(() => {
			this.setAlert();
		}, duration);
	}

	cancel() {
		this.setIdle();
		clearTimeout(this.timeoutId);
	}
}

export const timerStore = new TimerStore();