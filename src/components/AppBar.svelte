<script lang="ts">
  import OptionsMenu from "./OptionsMenu.svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
</script>

<div class="app-bar">
  <OptionsMenu />

  <img class="logo" src="/TomatoTimeLogo.svg" alt="Tomato Time Logo" />

  <a class="github-link" href="https://github.com/joncroce/tomato-time">
    <GithubIcon width="100%" height="100%" />
  </a>
</div>

<style lang="postcss">
  .app-bar {
    padding-block-start: 8px;
    display: grid;
    place-items: center;
  }

  .logo {
    max-width: calc(100vw - 10rem);
    height: 4rem;
  }

  .github-link {
    position: fixed;
    top: 8px;
    right: 8px;
    height: 3rem;
    color: var(--color-secondary-dark);
  }

  .github-link:hover {
    color: var(--color-tertiary-darkest);
  }
</style>
