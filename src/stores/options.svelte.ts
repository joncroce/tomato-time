export enum Option {
	SHOW_LEADING_ZERO = "SHOW_LEADING_ZERO",
	SHOW_PROGRESS_BAR = "SHOW_PROGRESS_BAR",
	TWENTY_FOUR_HOUR_MODE = "TWENTY_FOUR_HOUR_MODE"
}

function getOptionFromLocalStorage(option: Option) {
	return localStorage.getItem(option);
}

function setOptionToLocalStorage(option: Option, value: boolean) {
	localStorage.setItem(option, JSON.stringify(value));
}

const defaultOptions = new Map<string, boolean>(
	[
		[Option.SHOW_LEADING_ZERO, false],
		[Option.SHOW_PROGRESS_BAR, true],
		[Option.TWENTY_FOUR_HOUR_MODE, false]
	]
);

class OptionsStore {
	showLeadingZero = $state<boolean>(defaultOptions.get(Option.SHOW_LEADING_ZERO)!);
	showProgressBar = $state<boolean>(defaultOptions.get(Option.SHOW_PROGRESS_BAR)!);
	twentyFourHourMode = $state<boolean>(defaultOptions.get(Option.TWENTY_FOUR_HOUR_MODE)!);
	initialized = $state(false);

	constructor() {
	}

	initialize() {
		const storedShowLeadingZero = getOptionFromLocalStorage(Option.SHOW_LEADING_ZERO);
		if (storedShowLeadingZero) {
			this.showLeadingZero = JSON.parse(storedShowLeadingZero);
		}
		const storedShowProgressBar = getOptionFromLocalStorage(Option.SHOW_PROGRESS_BAR);
		if (storedShowProgressBar) {
			this.showProgressBar = JSON.parse(storedShowProgressBar);
		}

		const storedTwentyFourHourMode = getOptionFromLocalStorage(Option.TWENTY_FOUR_HOUR_MODE);
		if (storedTwentyFourHourMode) {
			this.twentyFourHourMode = JSON.parse(storedTwentyFourHourMode);
		}

		this.initialized = true;
	}

	toggle(option: Option) {
		switch (option) {
			case Option.SHOW_LEADING_ZERO:
				this.showLeadingZero = !this.showLeadingZero;
				setOptionToLocalStorage(option, this.showLeadingZero);
				break;
			case Option.SHOW_PROGRESS_BAR:
				this.showProgressBar = !this.showProgressBar;
				setOptionToLocalStorage(option, this.showProgressBar);
				break;
			case Option.TWENTY_FOUR_HOUR_MODE:
				this.twentyFourHourMode = !this.twentyFourHourMode;
				setOptionToLocalStorage(option, this.twentyFourHourMode);
				break;
		}
	}
}

export const optionsStore = new OptionsStore();