<script lang="ts">
  import Colon from '../components/Colon.svelte';
	import SevenSegment from "../components/SevenSegment.svelte";
</script>

<main>
	<section class="clock">
		<SevenSegment />
		<SevenSegment />
		<Colon />
		<SevenSegment />
		<SevenSegment />
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

	:global(svg) {
		width: 100%;
		height: 100%;
	}

	:global(svg > *) {
		stroke-width: 2;
		stroke: oklch(10% 0.19 145);
		fill: oklch(50% 0.19 145);
	}
</style>