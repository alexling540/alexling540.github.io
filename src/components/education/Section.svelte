<script lang="ts">
  import Entry from './Entry.svelte';

  import type { EducationEntry } from '$types/EducationEntry';

  interface Props {
    entries: EducationEntry[];
  }

  let { entries }: Props = $props();
</script>

<article>
  <h2>Education</h2>
  {#each entries as { certification, start, end, university, location } (`${university}|${certification}`)}
    <Entry {certification} {start} {end} {university} {location} />
  {/each}
</article>
