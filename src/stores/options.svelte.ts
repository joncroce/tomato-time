export enum Option {
	SHOW_LEADING_ZERO,
	SHOW_PROGRESS_BAR,
	TWENTY_FOUR_HOUR_MODE
}

class OptionsStore {
	showLeadingZero = $state<boolean>(false);
	showProgressBar = $state<boolean>(true);
	twentyFourHourMode = $state<boolean>(false);

	constructor() { }

	toggle(option: Option) {
		switch (option) {
			case Option.SHOW_LEADING_ZERO:
				this.showLeadingZero = !this.showLeadingZero;
				break;
			case Option.SHOW_PROGRESS_BAR:
				this.showProgressBar = !this.showProgressBar;
				break;
			case Option.TWENTY_FOUR_HOUR_MODE:
				this.twentyFourHourMode = !this.twentyFourHourMode;
				break;
		}
	}
}

export const optionsStore = new OptionsStore();