<script lang="ts">
  import Entry from './Entry.svelte';

  import type { EducationEntry } from '$types/EducationEntry';
  import Section from '$components/Section.svelte';

  interface Props {
    entries: EducationEntry[];
  }

  let { entries }: Props = $props();
</script>

<Section id="education" header="Education">
  {#snippet content()}
    {#each entries as { certification, start, end, university, location } (`${university}|${certification}`)}
      <Entry {certification} {start} {end} {university} {location} />
    {/each}
  {/snippet}
</Section>
