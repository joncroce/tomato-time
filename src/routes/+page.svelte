<script lang="ts">
  import Clock from "../components/Clock.svelte";
  import Timer from "../components/Timer.svelte";
  import { onMount } from "svelte";
  import { optionsStore } from "../stores/options.svelte";
  import AppBar from "../components/AppBar.svelte";

  onMount(() => {
    optionsStore.initialize();
  });
</script>

<noscript
  ><span>Please enable JavaScript and refresh the page to use Tomato Time</span
  ></noscript
>
{#if optionsStore.initialized}
  <AppBar />
  <Clock />
  <Timer />
{/if}

<style lang="postcss">
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
