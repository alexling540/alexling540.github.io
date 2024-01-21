<script lang="ts">
  import Entry from './Entry.svelte';

  import type { EducationEntry } from '$types/EducationEntry';

  export let entries: EducationEntry[];
</script>

<section>
  <header>
    <h2>Education</h2>
  </header>

  {#each entries as { certification, start, end, university, location }}
    <Entry {certification} {start} {end} {university} {location} />
  {/each}
</section>
