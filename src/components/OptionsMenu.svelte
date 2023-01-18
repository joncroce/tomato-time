<script lang="ts">
	import Icon from '@iconify/svelte';
	import { showLeadingZero, twentyFourHourMode, blinkingColon } from '../stores/options';

	let optionsExpanded = false;
</script>

<section class="options" data-options-expanded={optionsExpanded}>
	<button class="open-close" on:click={() => optionsExpanded = !optionsExpanded}>
		<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 20L9 5L5 9L20 20ZM20 20L17 2L23 2L20 20ZM20 20L17 38H23L20 20ZM20 20L9 34L5 30L20 20ZM20 20L31 5L35 9L20 20ZM20 20L2 17V23L20 20ZM20 20L31 34L35 30L20 20ZM20 20L38 23V17L20 20Z" />
			<circle cx="20" cy="20" r="3.5" />
		</svg>
	</button>
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
		border: 2px solid var(--color-secondary-dark);
		border-radius: 1rem;
		background-color: var(--color-primary-light);
	}
	
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 0;
		margin-block: 0;
	}

	.options[data-options-expanded=false] > ul {
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
		background-color: var(--color-primary-lighter);
	}

	button.open-close {
		width: 4rem;
		height: 4rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-self: flex-start;
		padding: 0;
		background-color: transparent;
		border: none;
		cursor: pointer;
		border-radius: 1rem;
	}
	
	button.open-close > svg > path {
		fill: var(--color-secondary-light);
		stroke: var(--color-secondary-dark);
		stroke-width: 1;
		stroke-opacity: 0.65;
		fill-opacity: 0.65;
	}
	
	button.open-close > svg > circle {
		stroke: var(--color-secondary-dark);
		stroke-width: 1;
		stroke-opacity: 0.65;
		fill: var(--color-primary-light);
	}
	
	.options[data-options-expanded=true] > button.open-close > svg > circle, 
	button.open-close:hover > svg > circle {
		fill: var(--color-primary-dark);
	}
	
	.options[data-options-expanded=true] > button.open-close > svg > path, 
	button.open-close:hover > svg > path {
		stroke-opacity: 1;
		fill-opacity: 1;
	}
	
	button.option {
		justify-content: flex-start;
		width: 100%;
		font-size: 1.5rem;
		font-weight: 700;
		border-radius: 1rem;
	}
</style>