<script lang="ts">
  import TwoColumnEntry from '$components/TwoColumnEntry.svelte';

  import { formatDateMs } from '$lib/formatDateMs';

  export let certification: string;
  export let start: number;
  export let end: number | undefined = undefined;
  export let university: string;
  export let location: string;
</script>

<TwoColumnEntry>
  <span slot="date">
    {formatDateMs(start, '?')} &ndash; {formatDateMs(end, 'Present')}
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
