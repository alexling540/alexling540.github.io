<script lang="ts">
  interface Props {
    header: string;
    paragraphs: string[];
  }

  let { header, paragraphs }: Props = $props();
</script>

<section>
  <h1>{header}</h1>
  {#each paragraphs as paragraph (paragraph)}
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
