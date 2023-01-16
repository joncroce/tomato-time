import { readable, type Subscriber } from 'svelte/store';

function parseTimeString(timeString: string) {
	return timeString
		.slice(0, 2)
		.concat(timeString.slice(3, 5))
		.split('')
		.map(Number);
}

export default function() {
	return readable([8, 8, 8, 8], (set: Subscriber<number[]>) => {
		const update = () => set(parseTimeString(new Date().toTimeString()));

		update();

		const interval = setInterval(update, 1000);

		return () => clearInterval(interval);
	});
}