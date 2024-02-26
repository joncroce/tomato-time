<script lang="ts">
  import { currentTimeStore as currentTime } from "../stores/currentTime.svelte";
  import { timerStore as timer } from "../stores/timer.svelte";
  import { optionsStore as options } from "../stores/options.svelte";
  import AlarmClockIcon from "../components/icons/AlarmClockIcon.svelte";

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
  <div class="form-wrapper">
    <form on:submit|preventDefault class="adjust-duration">
      <label for="duration">
        <span>Minutes</span>
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
        /></label
      >
    </form>
  </div>
  <div class="icon-wrapper">
    <AlarmClockIcon />
  </div>
  <div class="controls">
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
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "icon controls"
      "duration controls";
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 480px) {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr auto 1fr;
      grid-template-areas: "duration icon controls";
      justify-content: space-evenly;
      align-items: center;
    }
  }

  .form-wrapper {
    grid-area: duration;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding-inline: 1rem;

    @media (min-width: 480px) {
      justify-content: flex-end;
    }
  }

  form {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-family: var(--font-mono);
  }

  label {
    justify-self: right;
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

  .controls {
    grid-area: controls;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-inline: 1rem;

    @media (min-width: 480px) {
      align-items: flex-start;
    }
  }

  button {
    font-size: 2rem;
    font-family: var(--font-mono);
    width: 8ch;
    border: var(--color-secondary-dark);
    border-width: 4px;
    border-style: solid;
    border-radius: 1rem;
    padding-inline: 0.5em;
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
    justify-content: center;
    font-size: min(10rem, 25vw);
    grid-area: icon;
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
