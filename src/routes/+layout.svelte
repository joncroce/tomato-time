<script>
  import "../app.postcss";
</script>

<main>
  <slot />
</main>

<style lang="postcss">
  :global(svg.seven-segment, svg.colon) {
    width: 100%;
    height: 100%;
  }
  main {
    min-width: var(--min-width);
    width: 100vw;
    width: 100lvw;
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--color-primary-dark);
    overflow: auto;
  }
</style>
