<script lang="ts">
  import TwoColumnEntry from '$components/TwoColumnEntry.svelte';

  import { formatMonthAndYear } from '$lib/formatMonthAndYear';

  import type { MonthAndYear } from '$types/MonthAndYear';

  export let certification: string;
  export let start: MonthAndYear;
  export let end: MonthAndYear | undefined = undefined;
  export let university: string;
  export let location: string;
</script>

<TwoColumnEntry>
  <span slot="date">
    {formatMonthAndYear(start, '?')} &ndash; {formatMonthAndYear(end, 'Present')}
  </span>
  <div slot="info" class="info">
    <span class="certification">{certification}</span>
    <span class="location">{university}, {location}</span>
  </div>
</TwoColumnEntry>

<style lang="css">
  .info {
    display: grid;
    grid-template-areas:
      'certification'
      'location';
    row-gap: 0.25em;
  }

  .certification {
    grid-area: certification;
    font-weight: bold;
  }

  .location {
    grid-area: location;
  }
</style>
