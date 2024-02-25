<script lang="ts">
  import CheckboxCheckedIcon from "./CheckboxCheckedIcon.svelte";
  import CheckboxUncheckedIcon from "./CheckboxUncheckedIcon.svelte";

  export let checked: boolean;
</script>

{#if checked}
  <CheckboxCheckedIcon {...$$props} />
{:else}
  <CheckboxUncheckedIcon {...$$props} />
{/if}
