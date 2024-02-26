<script>
  import "../app.postcss";
</script>

<main>
  <slot />
</main>

<style lang="postcss">
  main {
    min-width: var(--min-width);
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100lvw;
    height: 100lvh;
    background-color: var(--color-primary-dark);
  }
</style>
