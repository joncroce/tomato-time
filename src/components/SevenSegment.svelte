<script lang="ts">
	export let digit: number | null;

	/* Segment numbering
	*   --0--
	*  |     |
	*  5     1
	*  |     |
	*   --6--
	*  |     |
	*  4     2
	*  |     |
	*   --3--
	**/

	const digitToSegmentMap = [
		[1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 0, 0, 0, 0],
		[1, 1, 0, 1, 1, 0, 1],
		[1, 1, 1, 1, 0, 0, 1],
		[0, 1, 1, 0, 0, 1, 1],
		[1, 0, 1, 1, 0, 1, 1],
		[1, 0, 1, 1, 1, 1, 1],
		[1, 1, 1, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 0, 1, 1],
	];

	function getSegmentStatus(segmentNumber: number): string {
		if (digit === null) { 
			return 'off' 
		}
		return ['off', 'on'][digitToSegmentMap[digit][segmentNumber]];
	}
</script>

<svg class="seven-segment" viewBox="0 0 140 240" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path class="{getSegmentStatus(0)}" d="M110 6H30L20 16L30 26H110L120 16L110 6Z"/>
	<path class="{getSegmentStatus(1)}" d="M112 28V108L122 118L132 108V28L122 18L112 28Z"/>
	<path class="{getSegmentStatus(2)}" d="M112 132V212L122 222L132 212V132L122 122L112 132Z"/>
	<path class="{getSegmentStatus(3)}" d="M110 214H30L20 224L30 234H110L120 224L110 214Z"/>
	<path class="{getSegmentStatus(4)}" d="M8 132L8 212L18 222L28 212L28 132L18 122L8 132Z"/>
	<path class="{getSegmentStatus(5)}" d="M8 28L8 108L18 118L28 108L28 28L18 18L8 28Z"/>
	<path class="{getSegmentStatus(6)}" d="M110 110H30L20 120L30 130H110L120 120L110 110Z"/>
</svg>