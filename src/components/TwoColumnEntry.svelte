<div class="grid">
  <div class="date"><slot name="date" /></div>
  <div class="info">
    <slot name="info" />
  </div>
</div>

<style lang="css">
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1em;
    row-gap: 0.5em;
  }

  .date {
    grid-column: span 4;
    font-size: 0.95em;
  }

  .info {
    grid-column: span 4;
  }

  @media screen and (min-width: 480px) {
    .date {
      grid-column: span 1;
    }

    .info {
      grid-column: span 3;
    }
  }
</style>
