<script lang="ts">
  import Category from './Category.svelte';

  export let languages: string[];
  export let libraries: string[];
  export let platforms: string[];
  export let tools: string[];
</script>

<section>
  <header>
    <h2>Skills</h2>
  </header>

  <div class="grid">
    <div>
      <Category header="Languages" list={languages} />
    </div>
    <div>
      <Category header="Libraries & Frameworks" list={libraries} />
    </div>
    <div>
      <Category header="Platforms" list={platforms} />
    </div>
    <div>
      <Category header="Tools" list={tools} />
    </div>
  </div>
</section>

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
