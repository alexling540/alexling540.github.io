<script lang="ts">
  import IntroSection from '$components/introduction/Section.svelte';
  import SkillsSection from '$components/skills/Section.svelte';
  import ExperienceSection from '$components/experience/Section.svelte';
  import EducationSection from '$components/education/Section.svelte';
  import Footer from '$components/footer/Footer.svelte';

  import { header, intro, skills, experience, education, linkedIn, gitHub } from '../data';

  import '../app.css';

  const { languages, libraries, platforms, tools } = skills;
</script>

<main>
  <IntroSection {header} paragraphs={intro} />
  <SkillsSection {languages} {libraries} {platforms} {tools} />
  <ExperienceSection entries={experience} />
  <EducationSection entries={education} />
  <Footer {gitHub} {linkedIn} />
</main>
