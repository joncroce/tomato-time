<script lang="ts">
	import Icon from '@iconify/svelte';
	import { showLeadingZero, twentyFourHourMode, blinkingColon } from '../stores/options';

	let optionsExpanded = false;

	function toggleOptionsExpanded() {
		optionsExpanded = !optionsExpanded;
	}
</script>

<section class="options" data-options-expanded={optionsExpanded}>
	<button class="open-close" on:click={toggleOptionsExpanded}><Icon icon="mdi:cog" /></button>
	<ul>
		<li>
			<button class="option" on:click={() => $showLeadingZero = !$showLeadingZero}>
				<Icon icon={$showLeadingZero ? "mdi:check-bold" : "mdi:cancel"} />
				Show Leading Zero
			</button>
		</li>
		<li>
			<button class="option" on:click={() => $twentyFourHourMode = !$twentyFourHourMode}>
				<Icon icon={$twentyFourHourMode ? "mdi:check-bold" : "mdi:cancel"} />
				24-Hour Mode
			</button>
		</li>
		<li>
			<button class="option" on:click={() => $blinkingColon = !$blinkingColon}>
				<Icon icon={$blinkingColon ? "mdi:check-bold" : "mdi:cancel"} />
				Blinking Colon
			</button>
		</li>
	</ul>
</section>

<style>
	.options {
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-self: flex-start;
		align-items: stretch;
		gap: 0.25rem;
		margin-block: 1rem;
		margin-inline: 1rem;
		border: 2px solid oklch(10% 0.19 145);
		border-radius: 1rem;
		background-color: oklch(60% 0.15 30);
	}

	.options[data-options-expanded=false] > ul {
		display: none;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 0;
		margin-block: 0;
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
		align-self: flex-start;
		padding: 0;
		font-size: 2.5rem;
		color: oklch(15% 0.19 145);
	}

	button.option {
		justify-content: flex-start;
		width: 100%;
		font-size: 1.5rem;
		font-weight: 700;
		border-radius: 1rem;
	}

	button.option:hover {
		background-color: oklch(100% 0.19 35 / 0.1);
	}
</style>