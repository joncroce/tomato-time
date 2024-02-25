<script lang="ts">
  import Colon from "./Colon.svelte";
  import SevenSegment from "./SevenSegment.svelte";
  import { optionsStore as options } from "../stores/options.svelte";
  import { currentTimeStore as currentTime } from "../stores/currentTime.svelte";
  import { timerStore as timer } from "../stores/timer.svelte";

  let formatOptions = $derived({
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: options.twentyFourHourMode ? "h24" : "h12",
  });
  let timeFormat = $derived(
    new Intl.DateTimeFormat(
      "en-US",
      formatOptions as Intl.DateTimeFormatOptions
    )
  );
  let [hh /* colon */, , mm /* colon */, , ss] = $derived(
    timeFormat.formatToParts(currentTime.value).map((part) => part.value)
  );
  let unlit = $derived(timer.isAlert && Boolean(Number(ss) % 2));
</script>

<section>
  <SevenSegment
    {unlit}
    digit={Number(hh[0]) > 0 || options.showLeadingZero ? Number(hh[0]) : null}
  />
  <SevenSegment {unlit} digit={Number(hh[1])} />
  <Colon {unlit} />
  <SevenSegment {unlit} digit={Number(mm[0])} />
  <SevenSegment {unlit} digit={Number(mm[1])} />
</section>

<style>
  section {
    display: grid;
    flex-grow: 1;
    grid-template-columns: 23.5% 23.5% 6% 23.5% 23.5%;
    aspect-ratio: 600 / 240;
    width: 100%;
  }
</style>
