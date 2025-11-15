<script lang="ts">
  import Entry from './Entry.svelte';

  import type { ExperienceEntry } from '$types/ExperienceEntry';

  interface Props {
    entries: ExperienceEntry[];
  }

  let { entries }: Props = $props();
</script>

<article>
  <h2>Experience</h2>
  <div class="grid">
    {#each entries as { title, company, start, end, description, stack } (`${company}|${title}`)}
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
</article>

<style lang="css">
  .grid {
    display: grid;
    gap: 1.75em;
  }
</style>
