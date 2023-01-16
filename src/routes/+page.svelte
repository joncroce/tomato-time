<script lang="ts">
  import Colon from '../components/Colon.svelte';
	import SevenSegment from "../components/SevenSegment.svelte";
	import time from '../stores/time';

	let hhmm = time();

</script>

<main>
	<section class="clock">
		<SevenSegment digit={$hhmm[0] || null} /> <!-- Don't show leading 0 -->
		<SevenSegment digit={$hhmm[1]} />
		<Colon />
		<SevenSegment digit={$hhmm[2]} />
		<SevenSegment digit={$hhmm[3]} />
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: stretch;
		width: 100vw;
		height: 100vh;
		background-color: oklch(50% 0.19 35);
	}

	.clock {
		display: grid;
		grid-template-columns: 23.5% 23.5% 6% 23.5% 23.5%;
	}

	:global(svg.seven-segment, svg.colon) {
		width: 100%;
		height: 100%;
	}

	:global(svg.seven-segment > path, svg.colon > circle) {
		stroke-width: 2;
		stroke: oklch(10% 0.19 145);
	}

	:global(svg.seven-segment > path.on, svg.colon > circle) {
		fill: oklch(50% 0.19 145);
	}

	:global(svg.seven-segment > path.off) {
		fill: oklch(50% 0.19 145 / 0.05);
		stroke: oklch(10% 0.19 145 / 0.05);
	}
</style>