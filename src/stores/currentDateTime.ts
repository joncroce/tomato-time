import { readable, type Subscriber } from 'svelte/store';

export default function() {
	return readable(new Date(), (set: Subscriber<Date>) => {
		const update = () => set(new Date());

		update();

		const interval = setInterval(update, 500);

		return () => clearInterval(interval);
	});
}