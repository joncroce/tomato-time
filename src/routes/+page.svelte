<script lang="ts">
  import OptionsMenu from "../components/OptionsMenu.svelte";
  import Clock from "../components/Clock.svelte";
  import Timer from "../components/Timer.svelte";
  import { onMount } from "svelte";
  import { optionsStore } from "../stores/options.svelte";

  onMount(() => {
    optionsStore.initialize();
  });
</script>

<main>
  <noscript
    ><span
      >Please enable JavaScript and refresh the page to use Tomato Time</span
    ></noscript
  >
  {#if optionsStore.initialized}
    <OptionsMenu />
    <Clock />
    <Timer />
  {/if}
</main>

<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100lvw;
    height: 100lvh;
    background-color: var(--color-primary-dark);
  }

  :global(svg.seven-segment, svg.colon) {
    width: 100%;
    height: 100%;
  }

  noscript {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 3rem;

    span {
      padding: 0.25em 0.5em;
      border: 2px solid var(--color-tertiary-dark);
      border-radius: 2em;
      background-color: var(--color-primary-lighter);
      color: var(--color-secondary-dark);
    }
  }
</style>
