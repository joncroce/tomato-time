<script>
  import "../app.postcss";
</script>

<main>
  <slot />
</main>

<style lang="postcss">
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
