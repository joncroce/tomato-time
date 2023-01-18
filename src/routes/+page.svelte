<script lang="ts">
	import Clock from '../components/Clock.svelte';
	import OptionsMenu from '../components/OptionsMenu.svelte';
</script>

<main>
	<OptionsMenu />
	<Clock />
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