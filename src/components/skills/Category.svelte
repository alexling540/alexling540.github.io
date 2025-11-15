<script lang="ts">
  interface Props {
    header: string;
    list: string[];
  }

  let { header, list }: Props = $props();
</script>

<section>
  <h3>{header}</h3>
  <ul>
    {#each list as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>

<style lang="css">
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em 1em;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    word-wrap: break-word;
  }
</style>
