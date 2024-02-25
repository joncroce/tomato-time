class CurrentTimeStore {
	value = $state<Date>();

	constructor() {
		this.value = new Date();

		setInterval(() => {
			this.value = new Date();
		}, 500);
	}
}

export const currentTimeStore = new CurrentTimeStore();