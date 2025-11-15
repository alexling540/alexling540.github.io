<script lang="ts">
  import TwoColumnEntry from '$components/TwoColumnEntry.svelte';

  import { formatMonthAndYear } from '$lib/formatMonthAndYear';

  import type { MonthAndYear } from '$types/MonthAndYear';

  interface Props {
    certification: string;
    start: MonthAndYear;
    end?: MonthAndYear | undefined;
    university: string;
    location: string;
  }

  let { certification, start, end = undefined, university, location }: Props = $props();
</script>

<TwoColumnEntry>
  {#snippet date()}
    <span>
      {formatMonthAndYear(start, '?')} &ndash; {formatMonthAndYear(end, 'Present')}
    </span>
  {/snippet}
  {#snippet info()}
    <div class="info">
      <span class="certification">{certification}</span>
      <span class="location">{university}, {location}</span>
    </div>
  {/snippet}
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
