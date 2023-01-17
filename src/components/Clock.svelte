<script lang="ts">
	import Colon from './Colon.svelte';
	import SevenSegment from "./SevenSegment.svelte";
	
	import currentTime from '../stores/time';
	import { showLeadingZero } from '../stores/options';

	let hhmm = currentTime();
</script>

<section>
	<SevenSegment digit={$hhmm[0] > 0 || $showLeadingZero ? $hhmm[0] : null} />
	<SevenSegment digit={$hhmm[1]} />
	<Colon />
	<SevenSegment digit={$hhmm[2]} />
	<SevenSegment digit={$hhmm[3]} />
</section>

<style>
	section {
		display: grid;
		flex-grow: 1;
		grid-template-columns: 23.5% 23.5% 6% 23.5% 23.5%;
		aspect-ratio: 600 / 240;
		width: 100%;
	}
</style>