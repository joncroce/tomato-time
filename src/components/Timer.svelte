<script lang="ts">
	import Icon from '@iconify/svelte';
	import currentDateTime from '../stores/currentDateTime';
	import { showProgressBar } from '../stores/options';

	const now = currentDateTime();

	let duration = 8;
	let active = false;
	let interval: NodeJS.Timer;
	let startTime: number;
	let finishTime: number;
	let finished = false;
  
	function start() {
		finished = false;
		active = true;
		startTime = $now.valueOf();
		finishTime = startTime + duration * 60_000;
		interval = setTimeout(() => {
			alert();
		}, duration * 60_000);
	}

	function cancel() {
		finished = false;
		active = false;
		clearTimeout(interval);
	}

	function alert() {
		console.log("TIMER DONE!")
		active = false;
		finished = true;
	}

	$: progress = !$showProgressBar || (!active && !finished) 
		? 0 
		: finished 
			? 1 
			: ($now.valueOf() - startTime) / (finishTime - startTime);
</script>

<section class="timer">
	<form on:submit|preventDefault class="adjust-duration">
		<label for="duration">
			<span>Duration</span>
			<input id="duration" type="number" min=1 max=90 step=1 value={duration} />
			<span>(minutes)</label>
	</form>
	<div class="icon-wrapper">
		<Icon class="icon" icon="emojione-monotone:timer-clock" />
	</div>
	<div class="start-stop">
		<button data-timer-active={active} on:click={() => !active ? start() : cancel()}>{!active ? 'Start' : 'Cancel'}</button>
	</div>
</section>
{#if $showProgressBar}
<progress value={progress} />
{/if}

<style>
	.timer {
		flex-basis: 25vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	form {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
		font-family: monospace;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		font-size: 1.4rem;
		font-weight: 700;
	}

	input {
		width: 4ch;
		font-size: 2rem;
		text-align: center;
		font-family: inherit;
		font-weight: 700;
		border-width: 2px;
		border-radius: 2px;
		border-style: solid;
		border-color: var(--color-secondary-dark);
		background-color: var(--color-primary-lighter);
	}

	.start-stop {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}

	button {
		font-size: 2rem;
		font-family: monospace;
		width: 10ch;
		border: var(--color-secondary-dark);
		border-width: 4px;
		border-style: solid;
		border-radius: 1rem;
		padding-inline: 1em;
		background-color: var(--color-secondary-light);
	}

	button[data-timer-active=true] {
		background-color: var(--color-primary-lighter);
	}

	.icon-wrapper {
		display: flex;
		font-size: 10rem;
	}

	progress { 
		width: 100%;
		border-radius: 0px;
	}

	progress::-webkit-progress-bar {
		background-color: var(--color-primary-lighter);
	}

	progress::-webkit-progress-value {
		background-color: oklch(41.14% 0.189 328.36);
	}

	/* Hide browser default number input controls */

	input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0; 
	}

	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
	}
</style>