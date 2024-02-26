<script lang="ts">
  import OptionsMenu from "./OptionsMenu.svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
</script>

<div class="app-bar">
  <OptionsMenu />

  <h1 class="app-name">Tomato Time</h1>

  <a class="github-link" href="https://github.com/joncroce/tomato-time">
    <GithubIcon width="100%" height="100%" />
  </a>
</div>

<style lang="postcss">
  .app-bar {
    padding: 8px;
    overflow-x: auto;
  }

  .app-name {
    text-align: center;
    font-size: 2.5rem;
    font-family: var(--font-mono);
    font-weight: 700;
    margin-block: 0;
    margin-inline: 5rem;
  }

  .github-link {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 3rem;
    color: var(--color-secondary-dark);
  }

  .github-link:hover {
    color: var(--color-tertiary-darkest);
  }
</style>
