<script lang="ts">
  import Icon from "@iconify/svelte";
  import {
    showLeadingZero,
    twentyFourHourMode,
    showProgressBar,
  } from "../stores/options";

  let optionsExpanded = false;
</script>

<section class="options" data-options-expanded={optionsExpanded}>
  <button
    class="open-close"
    on:click={() => (optionsExpanded = !optionsExpanded)}
  >
    <Icon width="100%" height="100%" icon="emojione-monotone:gear" />
  </button>
  <ul>
    <li>
      <button
        class="option"
        on:click={() => ($showLeadingZero = !$showLeadingZero)}
      >
        <Icon icon={$showLeadingZero ? "mdi:check-bold" : "mdi:cancel"} />
        Show Leading Zero
      </button>
    </li>
    <li>
      <button
        class="option"
        on:click={() => ($twentyFourHourMode = !$twentyFourHourMode)}
      >
        <Icon icon={$twentyFourHourMode ? "mdi:check-bold" : "mdi:cancel"} />
        24-Hour Mode
      </button>
    </li>
    <li>
      <button
        class="option"
        on:click={() => ($showProgressBar = !$showProgressBar)}
      >
        <Icon icon={$showProgressBar ? "mdi:check-bold" : "mdi:cancel"} />
        Show Progress Bar
      </button>
    </li>
  </ul>
</section>

<style>
  .options {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-self: flex-start;
    gap: 0.25rem;
    margin-block: 1rem;
    margin-inline: 1rem;
    border: 2px solid var(--color-secondary-dark);
    border-radius: 1rem;
    background-color: var(--color-primary-light);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin-block: 0;
  }

  .options[data-options-expanded="false"] > ul {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  button:hover {
    background-color: var(--color-primary-lighter);
  }

  button.open-close {
    width: 3rem;
    height: 3rem;
    align-self: flex-start;
    padding: 0.1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
  }

  button.option {
    justify-content: flex-start;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 1rem;
  }
</style>
