<script lang="ts">
  import { page } from "$app/stores";
  import SevenSegment from "../components/SevenSegment.svelte";

  $: errorStatusDigits = $page.status.toString().split("").map(Number);
</script>

<svelte:head>
  <title>Tomato Time | Error!</title>
</svelte:head>

<a href="/" class="title">
  <img class="logo" src="/TomatoTimeLogo.svg" alt="Tomato Time Logo" />
</a>

<div class="error">
  <div class="error-digits">
    {#each errorStatusDigits as digit}
      <SevenSegment {digit} />
    {/each}
  </div>
  <span>Error: {$page.error?.message}</span>
  <a href="/" class="home-link">Return Home</a>
</div>

<style lang="postcss">
  .title {
    display: block;
    margin-block: 1rem;
    margin-inline: auto;

    .logo {
      height: 3rem;
    }
  }

  .home-link {
    color: var(--color-tertiary-darkest);
  }
  .home-link:hover {
    color: var(--color-tertiary-dark);
  }

  .error {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    height: calc(100% - 5rem);
    font-size: 3.5rem;
  }

  .error-digits {
    aspect-ratio: 1.75;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-height: calc(100dvh - 16rem);
  }
</style>
