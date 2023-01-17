<script lang="ts">
	import Clock from '../components/Clock.svelte';
</script>

<main>
	<Clock />
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

	:global(svg.seven-segment, svg.colon) {
		width: 100%;
		height: 100%;
	}

	:global(svg.seven-segment > path) {
		fill: oklch(50% 0.19 145 / 0.05);
		stroke: oklch(10% 0.19 145 / 0.05);
		stroke-width: 2;
	}
	
	:global(svg.seven-segment > path[data-segment-on=true]) {		
		stroke: oklch(10% 0.19 145);
		fill: oklch(50% 0.19 145);
	}

	:global(svg.colon > circle) {
		stroke-width: 2;		
		stroke: oklch(10% 0.19 145);
		fill: oklch(50% 0.19 145);
	}
</style>