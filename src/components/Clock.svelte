<script lang="ts">
	import Colon from './Colon.svelte';
	import SevenSegment from "./SevenSegment.svelte";
	import { showLeadingZero } from '../stores/options';
	import currentDateTime from '../stores/currentDateTime';
	
	const now = currentDateTime();

	const formatOptions: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h12',
	};

	const timeFormat = new Intl.DateTimeFormat('en-US', formatOptions);

	$: [hh, /* separator */, mm] = timeFormat.formatToParts($now).map(part => part.value);
</script>

<section>
	<SevenSegment digit={Number(hh[0]) > 0 || $showLeadingZero ? Number(hh[0]) : null} />
	<SevenSegment digit={Number(hh[1])} />
	<Colon />
	<SevenSegment digit={Number(mm[0])} />
	<SevenSegment digit={Number(mm[1])} />
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