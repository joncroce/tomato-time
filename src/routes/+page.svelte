<script lang="ts">
	import OptionsMenu from '../components/OptionsMenu.svelte';
	import Clock from '../components/Clock.svelte';
	import Timer from '../components/Timer.svelte';
</script>

<main>
	<OptionsMenu />
	<Clock />
	<Timer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100vw;
		height: 100vh;
		background-color: var(--color-primary-dark);
	}

	:global(svg.seven-segment, svg.colon) {
		width: 100%;
		height: 100%;
	}
</style>