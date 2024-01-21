<script lang="ts">
  export let gitHub: string;
  export let linkedIn: string;

  const linkedInUrl: string = `https://www.linkedin.com/in/${linkedIn}`;
  const gitHubUrl: string = `https://www.github.com/${gitHub}`;
</script>

<footer>
  <div class="break">&#65374;</div>
  <ul>
    <li>
      <a href={linkedInUrl} class="no-print">LinkedIn</a>
      <a href={linkedInUrl} class="print-only">{linkedInUrl}</a>
    </li>
    <li>
      <a href={gitHubUrl} class="no-print">GitHub</a>
      <a href={gitHubUrl} class="print-only">{gitHubUrl}</a>
    </li>
  </ul>
</footer>

<style lang="css">
  .break {
    text-align: center;
    margin: 2em 0;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  li {
    display: inline;
  }

  .no-print {
    display: inline-block;
  }

  .print-only {
    display: none;
  }

  @media print {
    .no-print {
      display: none;
    }

    .print-only {
      display: inline-block;
    }

    li {
      display: block;
    }
  }
</style>
