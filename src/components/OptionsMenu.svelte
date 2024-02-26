<script lang="ts">
  import { optionsStore as options, Option } from "../stores/options.svelte";
  import OptionsIcon from "../components/icons/OptionsIcon.svelte";
  import CheckboxIcon from "./icons/CheckboxIcon.svelte";
  let optionsExpanded = $state(false);
</script>

<section class="options" data-options-expanded={optionsExpanded}>
  <button
    class="options-menu-toggle"
    on:click={() => {
      optionsExpanded = !optionsExpanded;
    }}
  >
    <OptionsIcon width="100%" height="100%" />
  </button>
  <ul>
    <li>
      <button
        class="option"
        on:click={() => {
          options.toggle(Option.SHOW_PROGRESS_BAR);
        }}
      >
        <CheckboxIcon checked={options.showProgressBar} />
        Show Progress Bar
      </button>
    </li>
    <li>
      <button
        class="option"
        on:click={() => {
          options.toggle(Option.TWENTY_FOUR_HOUR_MODE);
        }}
      >
        <CheckboxIcon checked={options.twentyFourHourMode} />
        24-Hour Mode
      </button>
    </li>
    <li>
      <button
        class="option"
        on:click={() => {
          options.toggle(Option.SHOW_LEADING_ZERO);
        }}
      >
        <CheckboxIcon checked={options.showLeadingZero} />
        Show Leading Zero
      </button>
    </li>
  </ul>
</section>

<style>
  .options {
    position: absolute;
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    gap: 0.25rem;
    isolation: isolate;
    z-index: 1;
    border: 4px solid var(--color-secondary-dark);
    border-radius: 1rem;
    background-color: var(--color-primary-light);
  }

  .options:has(.open-close:hover),
  .options[data-options-expanded="true"] {
    border-color: var(--color-tertiary-darkest);
    background-color: var(--color-primary-lighter);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0.25em;
    margin-block: 0;
    gap: 0.25em;
  }

  .options[data-options-expanded="false"] {
    justify-content: center;
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
    gap: 0.125rem;
  }

  button:hover {
    color: var(--color-tertiary-darkest);
  }

  .options-menu-toggle {
    width: 3rem;
    height: 3rem;
    align-self: flex-start;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
  }

  button.option {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 1.25rem;
    font-weight: 700;
    border-radius: 1rem;
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1;
  }
</style>
