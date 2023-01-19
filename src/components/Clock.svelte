<script lang="ts">
	import Colon from './Colon.svelte';
	import SevenSegment from "./SevenSegment.svelte";
	import { showLeadingZero, twentyFourHourMode } from '../stores/options';
	import currentDateTime from '../stores/currentDateTime';
	import { status, TimerStatus} from '../stores/timerStatus';
	
	const now = currentDateTime();

	$: formatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hourCycle: $twentyFourHourMode ? 'h24' : 'h12',
	};
	$: timeFormat = new Intl.DateTimeFormat('en-US', formatOptions as Intl.DateTimeFormatOptions);
	$: [hh, /* colon */, mm, /* colon */, ss] = timeFormat.formatToParts($now).map(part => part.value);
	$: unlit = $status === TimerStatus.ALERT && Boolean(Number(ss) % 2);
</script>

<section>
	<SevenSegment unlit={unlit} digit={Number(hh[0]) > 0 || $showLeadingZero ? Number(hh[0]) : null} />
	<SevenSegment unlit={unlit} digit={Number(hh[1])} />
	<Colon unlit={unlit} />
	<SevenSegment unlit={unlit} digit={Number(mm[0])} />
	<SevenSegment unlit={unlit} digit={Number(mm[1])} />
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