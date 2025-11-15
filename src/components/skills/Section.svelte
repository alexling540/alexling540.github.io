<script lang="ts">
  import Category from './Category.svelte';

  interface Props {
    languages: string[];
    libraries: string[];
    platforms: string[];
    tools: string[];
  }

  let { languages, libraries, platforms, tools }: Props = $props();
</script>

<article aria-labelledby="skills">
  <h2 id="skills">Skills</h2>
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
</article>

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
