<script lang="ts">
  export let value: number | undefined;
  export let show: boolean;
</script>

<progress {value} data-show={show} />

<style lang="postcss">
  progress {
    /* RESETS */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--progress-bar-height);
    border-radius: 0px;
  }

  progress[data-show="true"] {
    color: var(--color-primary-dark);
    background-color: var(--color-primary-lighter);
  }
  progress[data-show="true"]::-webkit-progress-bar {
    background-color: var(--color-primary-lighter);
  }
  progress[data-show="true"]::-webkit-progress-value {
    background-color: var(--color-tertiary-dark);
  }
  progress[data-show="true"]::-moz-progress-bar {
    background-color: var(--color-tertiary-dark);
  }

  progress[data-show="false"] {
    color: var(--color-primary-dark);
    background-color: var(--color-primary-dark);
  }
  progress[data-show="false"]::-webkit-progress-bar {
    background-color: var(--color-primary-dark);
  }
  progress[data-show="false"]::-webkit-progress-value {
    background-color: var(--color-primary-dark);
  }
  progress[data-show="false"]::-moz-progress-bar {
    background-color: var(--color-primary-dark);
  }
</style>
