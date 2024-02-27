<script lang="ts">
  import { timerStore as timer } from "../stores/timer.svelte";
  import { optionsStore as options } from "../stores/options.svelte";
  import AlarmClockIcon from "../components/icons/AlarmClockIcon.svelte";
  import StopIcon from "./icons/StopIcon.svelte";
  import PlayIcon from "./icons/PlayIcon.svelte";
  import PauseIcon from "./icons/PauseIcon.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  const MIN_DURATION_MINUTES = 1;
  const MAX_DURATION_MINUTES = 999;
  const DEFAULT_DURATION_MINUTES = 20;

  let durationMinutesInput = $state(String(DEFAULT_DURATION_MINUTES));
  let durationMs = $derived(parseInt(durationMinutesInput) * 60_000);

  let timerStatus = $derived.by(() => timer.getStatus());

  let startButtonText = $derived.by(() => {
    if (timer.isIdle || timer.isAlert) {
      return "Start";
    } else if (timer.isActive) {
      return "Pause";
    } else if (timer.isPaused) {
      return "Resume";
    }
  });

  function handleStartButtonClick() {
    if (timer.isIdle || timer.isAlert) {
      timer.start(durationMs);
    } else if (timer.isActive) {
      timer.pause();
    } else if (timer.isPaused) {
      timer.resume();
    }
  }

  function handleStopButtonClick() {
    if (!timer.isIdle) {
      timer.stop();
    }
  }

  function allowOnlyNumberKeys(event: KeyboardEvent) {
    if (!/^\d*/.test(event.key)) {
      event.preventDefault();
    }
  }

  function clampInputValue(input: string): string {
    let inputAsNumber = input.length ? parseInt(input) : MIN_DURATION_MINUTES;
    if (inputAsNumber < MIN_DURATION_MINUTES) {
      inputAsNumber = MIN_DURATION_MINUTES;
    } else if (inputAsNumber > MAX_DURATION_MINUTES) {
      inputAsNumber = MAX_DURATION_MINUTES;
    }

    return String(inputAsNumber);
  }

  function handlePaste(event: ClipboardEvent) {
    event.preventDefault();
    const text = event.clipboardData?.getData("text") ?? "";
    const filteredText = text.replace(/[^\d]/g, "");
    const clampedValue = clampInputValue(filteredText);
    durationMinutesInput = clampedValue;
  }

  function handleBlur() {
    durationMinutesInput = clampInputValue(durationMinutesInput);
  }
</script>

<section class="timer">
  <div class="form-wrapper">
    <form on:submit|preventDefault class="adjust-duration">
      <label for="duration">
        <span>Minutes</span>
        <input
          id="duration"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          min={MIN_DURATION_MINUTES}
          max={MAX_DURATION_MINUTES}
          step="1"
          disabled={!timer.isIdle}
          bind:value={durationMinutesInput}
          on:keydown={allowOnlyNumberKeys}
          on:paste={handlePaste}
          on:blur={handleBlur}
        /></label
      >
    </form>
  </div>
  <div class="icon-wrapper">
    <AlarmClockIcon />
  </div>
  <div class="controls">
    <button
      data-action="start"
      data-timer-status={timerStatus}
      on:click={handleStartButtonClick}
    >
      <span>
        {#if timer.isActive}
          <PauseIcon />
        {:else}
          <PlayIcon />
        {/if}
        {startButtonText}
      </span>
    </button>

    <button
      disabled={timer.isIdle}
      data-action="stop"
      data-timer-status={timerStatus}
      on:click={handleStopButtonClick}
    >
      <span>
        <StopIcon />
        Stop
      </span>
    </button>
  </div>
</section>
<ProgressBar
  value={timer.progress}
  show={options.showProgressBar && !timer.isIdle}
/>

<style>
  .timer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-block-end: var(--progress-bar-height);
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
    padding-inline: 0.5rem;

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
    padding-inline: 0.5rem;

    @media (min-width: 480px) {
      align-items: flex-start;
    }
  }

  button[data-action] {
    width: 10rem;
    aspect-ratio: 4;
    clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
    padding: 0;
    display: grid;
    place-items: center;
    background-color: var(--color-secondary-dark);
    border: 0;
    font-size: 1.5rem;
    font-family: var(--font-mono);
    color: var(--color-secondary-dark);
  }

  button[data-action] > span {
    width: calc(100% - 0.6rem);
    height: calc(100% - 0.6rem);
    clip-path: polygon(
      8.5% 0,
      91.5% 0,
      99.5% 50%,
      91.5% 100%,
      8.5% 100%,
      0.5% 50%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
  }

  button[data-action="start"][data-timer-status="IDLE"] > span {
    background-color: var(--color-secondary-lighter);
  }

  button[data-action="start"][data-timer-status="ACTIVE"] > span {
    background-color: var(--color-secondary-lighter);
  }

  button[data-action="start"][data-timer-status="PAUSED"] > span {
    background-color: var(--color-tertiary-light);
  }

  button[data-action="start"][data-timer-status="ALERT"] > span {
    background-color: var(--color-secondary-lighter);
  }

  button[data-action="stop"] > span {
    background-color: var(--color-primary-light);
  }

  button[disabled] {
    background-color: #333;
  }

  button[disabled] > span {
    background-color: #ccca;
    cursor: not-allowed;
    color: #444;
    /* border-color: #333; */
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    font-size: min(10rem, 25vw);
    grid-area: icon;
  }

  /* Hide browser default number input controls */

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  input[type="number"][disabled] {
    cursor: not-allowed;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
