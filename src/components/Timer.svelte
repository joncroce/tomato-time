<script lang="ts">
  import Icon from "@iconify/svelte";
  import { currentTimeStore as currentTime } from "../stores/currentTime.svelte";
  import { timerStore as timer } from "../stores/timer.svelte";
  import { optionsStore as options } from "../stores/options.svelte";

  let duration = $state(1);

  let progress = $derived(
    !options.showProgressBar || timer.isIdle
      ? 0
      : timer.isAlert
        ? 1
        : (currentTime.value!.valueOf() - timer.startTime) /
          (timer.finishTime - timer.startTime)
  );
</script>

<section class="timer">
  <form on:submit|preventDefault class="adjust-duration">
    <label for="duration">
      <span>Duration</span>
      <input
        id="duration"
        type="number"
        min="1"
        max="90"
        step="1"
        value={duration}
        disabled={timer.isActive}
        on:change={({ currentTarget }) =>
          (duration = currentTarget.valueAsNumber)}
      />
      <span>(minutes)</span></label
    >
  </form>
  <div class="icon-wrapper">
    <Icon class="icon" icon="emojione-monotone:timer-clock" />
  </div>
  <div class="start-stop">
    <button
      data-timer-active={timer.isActive}
      data-timer-alert={timer.isAlert}
      on:click={() => {
        timer.isIdle ? timer.start(duration * 60_000) : timer.cancel();
      }}
    >
      {timer.isIdle ? "Start" : timer.isAlert ? "Reset" : "Cancel"}
    </button>
  </div>
</section>
{#if options.showProgressBar}
  <progress data-timer-idle={timer.isIdle} value={progress} />
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

  button[data-timer-active="true"] {
    background-color: var(--color-primary-lighter);
  }

  button[data-timer-alert="true"] {
    background-color: var(--color-tertiary-light);
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

  progress[data-timer-idle="true"]::-webkit-progress-bar {
    background-color: var(--color-primary-dark);
  }

  progress::-webkit-progress-value {
    background-color: var(--color-tertiary-dark);
  }

  /* Hide browser default number input controls */

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
