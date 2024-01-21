<script lang="ts">
  export let header: string;
  export let paragraphs: string[];
</script>

<section>
  <header>
    <h1>{header}</h1>
  </header>

  {#each paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
</section>

<style lang="css">
  @media screen {
    h1::after {
      content: '%';
      color: #242424;
      background-color: #e3e3e3;
    }
  }

  @media screen and (prefers-color-scheme: light) {
    h1::after {
      color: #ffffff;
      background-color: #213547;
    }
  }
</style>
