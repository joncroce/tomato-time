<script lang="ts">
  import { timerStore as timer } from "../stores/timer.svelte";
  export let unlit: Boolean;
</script>

<svg
  data-timer-alert={timer.isAlert}
  data-unlit={unlit}
  class="colon"
  viewBox="0 0 40 240"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="20" cy="150" r="14.5" />
  <circle cx="20" cy="90" r="14.5" />
</svg>

<style>
  circle {
    fill: var(--color-secondary-light);
    fill-opacity: 1;
    stroke: var(--color-secondary-dark);
    stroke-opacity: 1;
    stroke-width: 2;
  }

  svg[data-unlit="true"] > circle {
    fill-opacity: 0.05;
    stroke-opacity: 0.05;
  }

  svg[data-timer-alert="true"] > circle {
    fill: var(--color-tertiary-light);
  }
</style>
