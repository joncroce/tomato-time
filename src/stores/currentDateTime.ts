import { readable, type Subscriber } from 'svelte/store';

export default function() {
	return readable(new Date(), (set: Subscriber<Date>) => {
		const update = () => set(new Date());

		update();

		const interval = setInterval(update, 1000);

		return () => clearInterval(interval);
	});
}