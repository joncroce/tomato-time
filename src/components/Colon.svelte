<script lang="ts">
	import currentDateTime from '../stores/currentDateTime';
	import { blinkingColon } from '../stores/options';

	const now = currentDateTime();

	$: ss = $now.getSeconds();
	$: lit = Boolean(!$blinkingColon || ss % 2);
</script>

<svg data-lit={lit} class="colon" viewBox="0 0 40 240" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="20" cy="150" r="14.5" />
	<circle cx="20" cy="90" r="14.5" />
</svg>

<style>
	circle {
		fill: var(--color-secondary-light);
		fill-opacity: 0.05;
		stroke: var(--color-secondary-dark);
		stroke-opacity: 0.05;
		stroke-width: 2;
	}

	svg[data-lit=true] > circle {
		fill-opacity: 1;
		stroke-opacity: 1;
	}
</style>