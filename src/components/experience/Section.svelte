<script lang="ts">
  import Entry from './Entry.svelte';

  import type { ExperienceEntry } from '$types/ExperienceEntry';
  import Section from '$components/Section.svelte';

  interface Props {
    entries: ExperienceEntry[];
  }

  let { entries }: Props = $props();
</script>

<Section id="experience" header="Experience">
  {#snippet content()}
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
  {/snippet}
</Section>

<style lang="css">
  .grid {
    display: grid;
    gap: 1.75em;
  }
</style>
