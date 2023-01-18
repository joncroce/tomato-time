<script lang="ts">
	import currentDateTime from '../stores/currentDateTime';
	import { blinkingColon } from '../stores/options';

	const now = currentDateTime();

	$: ss = $now.getSeconds();
	$: on = Boolean(!$blinkingColon || ss % 2);
</script>

<svg data-lit={on} class="colon" viewBox="0 0 40 240" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="20" cy="150" r="14.5" />
	<circle cx="20" cy="90" r="14.5" />
</svg>

<style>
	svg[data-lit=false] > circle {
		fill: oklch(50% 0.19 145 / 0.05);
		stroke: oklch(10% 0.19 145 / 0.05);
	}
</style>