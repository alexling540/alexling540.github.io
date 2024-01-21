<script lang="ts">
  import Entry from './Entry.svelte';

  import type { ExperienceEntry } from '$types/ExperienceEntry';

  export let entries: ExperienceEntry[];
</script>

<section>
  <header>
    <h2>Experience</h2>
  </header>

  <div class="grid">
    {#each entries as { title, company, start, end, description, stack }}
      <Entry
        {title}
        {company}
        {start}
        {end}
        descriptionParagraphs={description.paragraphs}
        descriptionPoints={description.points}
        {stack}
      />
    {/each}
  </div>
</section>

<style lang="css">
  .grid {
    display: grid;
    gap: 1.75em;
  }
</style>
