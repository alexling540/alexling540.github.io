<script lang="ts">
  import TwoColumnEntry from '$components/TwoColumnEntry.svelte';

  import { formatMonthAndYear } from '$lib/formatMonthAndYear';

  import type { MonthAndYear } from '$types/MonthAndYear';

  export let title: string;
  export let company: string;
  export let start: MonthAndYear;
  export let end: MonthAndYear | undefined = undefined;
  export let descriptionParagraphs: string[] = [];
  export let descriptionPoints: string[] = [];
  export let stack: string[] = [];
</script>

<TwoColumnEntry>
  <span slot="date">{formatMonthAndYear(start, '?')} &ndash; {formatMonthAndYear(end, 'Present')}</span>
  <div slot="info" class="info">
    <span class="position">
      <span class="title">{title}</span> &mdash; {company}
    </span>
    <div class="description">
      {#if descriptionParagraphs.length > 0}
        {#each descriptionParagraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
      {/if}
      {#if descriptionPoints.length > 0}
        <ul>
          {#each descriptionPoints as point}
            <li>{point}</li>
          {/each}
        </ul>
      {/if}
    </div>
    <ul class="stack">
      {#each stack as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
</TwoColumnEntry>

<style lang="css">
  .info {
    display: grid;
    grid-template-areas:
      'position'
      'description'
      'stack';
    row-gap: 0.25em;
  }

  .position {
    grid-area: position;
  }

  .title {
    font-weight: bold;
  }

  .description {
    grid-area: description;
  }

  .description > p {
    margin: 0.5em 0;
  }

  .description > ul {
    margin: 0.5em 0;
    padding-left: 1.3em;
  }

  ul.stack {
    grid-area: stack;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75em 1em;
    margin: 0;
    padding: 0;
    font-size: 0.85em;
  }

  ul.stack > li {
    display: inline;
  }
</style>
