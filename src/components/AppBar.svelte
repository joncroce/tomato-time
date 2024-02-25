<script lang="ts">
  import OptionsMenu from "./OptionsMenu.svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
</script>

<div class="app-bar">
  <div class="options-wrapper">
    <OptionsMenu />
  </div>
  <h1 class="app-name">Tomato Time</h1>
  <nav class="social-nav">
    <a href="https://github.com/joncroce/tomato-time">
      <GithubIcon width="100%" height="100%" />
    </a>
  </nav>
</div>

<style lang="postcss">
  .app-bar {
    height: 4rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    flex-basis: 4rem;
    padding: 8px;
  }

  .options-wrapper {
    align-self: self-start;
  }

  .app-name {
    text-align: center;
    font-size: 2.5rem;
    font-family: var(--font-mono);
    font-weight: 700;
    margin: 0;
  }

  .social-nav {
    height: 3rem;
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
  }

  .social-nav > a {
    display: inline-flex;
    color: var(--color-secondary-dark);
  }

  .social-nav > a:hover {
    color: var(--color-tertiary-darkest);
  }
</style>
