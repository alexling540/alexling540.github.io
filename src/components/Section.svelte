<script lang="ts">
  interface Props {
    id?: string;
    header: string;
    content: import('svelte').Snippet;
  }

  let { id, header, content }: Props = $props();
</script>

<article aria-labelledby={id}>
  <h2 {id}>{header}</h2>
  {@render content()}
</article>
