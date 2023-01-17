<script lang="ts">
	import Colon from './Colon.svelte';
	import SevenSegment from "./SevenSegment.svelte";
	
	import currentTime from '../stores/time';

	let hhmm = currentTime();
</script>

<section>
	<SevenSegment digit={$hhmm[0] || null} /> <!-- Don't show leading 0 -->
	<SevenSegment digit={$hhmm[1]} />
	<Colon />
	<SevenSegment digit={$hhmm[2]} />
	<SevenSegment digit={$hhmm[3]} />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 23.5% 23.5% 6% 23.5% 23.5%;
		aspect-ratio: 600 / 240;
		width: 100%;
	}
</style>