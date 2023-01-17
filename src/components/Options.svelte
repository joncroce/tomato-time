<script lang="ts">
	import Icon from '@iconify/svelte';
	import { showLeadingZero, twentyFourHourMode } from '../stores/options';

	let optionsExpanded = false;

	function toggleOptionsExpanded() {
		optionsExpanded = !optionsExpanded;
	}
</script>

<section class="options" data-options-expanded={optionsExpanded}>
	<button class="open-close" on:click={toggleOptionsExpanded}><Icon icon="mdi:cog" /></button>
	<button class="option" on:click={() => $showLeadingZero = !$showLeadingZero}>
		<Icon icon={$showLeadingZero ? "mdi:check-bold" : "mdi:cancel"} />
		Show Leading Zero
	</button>
	<button class="option" on:click={() => $twentyFourHourMode = !$twentyFourHourMode}>
		<Icon icon={$twentyFourHourMode ? "mdi:check-bold" : "mdi:cancel"} />
		24-Hour Mode
	</button>
</section>

<style>
	.options {
		display: flex;
		align-self: flex-end;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: stretch;
		margin-block: 1rem;
		margin-inline: 1rem;
		border: 2px solid oklch(10% 0.19 145);
		border-radius: 1rem;
		background-color: oklch(100% 0.19 35 / 0.12);
	}

	.options[data-options-expanded=true] {
		align-self: stretch;
	}

	.options[data-options-expanded=false] > button:not(:first-of-type) {
		display: none;
	}

	button {
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
	}

	button:hover {
		color: oklch(0% 0.19 145);
		cursor: pointer;
	}

	button.open-close {
		padding: 0;
		font-size: 2.5rem;
		color: oklch(15% 0.19 145);
	}

	button.option {
		margin-inline: 1rem;
		font-size: 1.5rem;
		font-weight: 700;
		border-width: 0px 2px;
		border-style: solid;
	}

	button.option:hover {
		background-color: oklch(100% 0.19 35 / 0.1);
	}
</style>