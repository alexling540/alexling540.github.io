<script lang="ts">
  import Section from '$components/Section.svelte';

  import Category from './Category.svelte';

  interface Props {
    languages: string[];
    libraries: string[];
    platforms: string[];
    tools: string[];
  }

  let { languages, libraries, platforms, tools }: Props = $props();
</script>

<Section id="skills" header="Skills">
  {#snippet content()}
    <div class="grid">
      <div>
        <Category id="language" header="Languages" list={languages} />
      </div>
      <div>
        <Category id="libraries" header="Libraries & Frameworks" list={libraries} />
      </div>
      <div>
        <Category id="platforms" header="Platforms" list={platforms} />
      </div>
      <div>
        <Category id="tools" header="Tools" list={tools} />
      </div>
    </div>
  {/snippet}
</Section>

<style lang="css">
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75em;
  }

  .grid > div {
    grid-column: span 2;
  }

  @media screen and (min-width: 480px) {
    .grid > div {
      grid-column: span 1;
    }
  }
</style>
