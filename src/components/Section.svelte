<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    id?: string;
    header: string;
    content: Snippet;
  }

  let { id, header, content }: Props = $props();
</script>

<article aria-labelledby={id}>
  <h2 {id}>{header}</h2>
  {@render content()}
</article>
