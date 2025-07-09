import type { EducationEntry } from '$types/EducationEntry';
import type { ExperienceEntry } from '$types/ExperienceEntry';
import { Month } from '$types/Month';
import type { Skills } from '$types/Skills';

const header: string = 'hello, world';

const intro: string[] = [
  `I'm Alex, a full stack developer working at Paycom. Most of my work experience is with PHP in an MVC framework, with 
  more emphasis on backend.`,
  `Most of my hobbyist programming is spent on learning frontend frameworks to keep up with the industry and writing 
  scripts to automate tedious tasks.`
];

const skills: Skills = {
  languages: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Java', 'Python', 'Lua', 'C'],
  libraries: ['React.js', 'Next.js', 'Vue.js', 'jQuery', 'Svelte', 'SvelteKit', 'Spring Boot'],
  platforms: ['Firebase', 'Vercel', 'Supabase'],
  tools: ['Git']
};

const experience: ExperienceEntry[] = [
  {
    title: 'Software Developer IV',
    company: 'Paycom',
    start: {
      year: 2022,
      month: Month.MAY
    },
    description: {
      points: [
        `Rewrote setup pages to improve the client experience by reducing UI latency and enabling immediate display of 
          setup changes. This was part of a top executive’s project in 2024, and completed on an accelerated timeline of
           5 months while simultaneously learning React and Couchbase`,
        `Developed a feature in the time card view to display detailed pay calculations by shift and date, facilitating 
          easy verification for hourly employees`,
        `Enhanced functionality in the shift system to allow clients to programmatically determine pay calculations for 
          overlapping shifts, a high-priority client request`,
        `Introduced flexibility in the holiday payout system, enabling clients to apply custom formulas based on 
          historical pay`,
        `Extended the existing deferred overtime calculation system to accommodate different rate multipliers in 
          compliance with state-specific laws`,
        `Collaborated on a new system allowing employees to attest their time with client-defined attestation messages`
      ]
    },
    stack: ['PHP', 'MySQL', 'React', 'TypeScript', 'JavaScript', 'jQuery']
  },
  {
    title: 'Software Development Intern',
    company: 'Paycom',
    start: {
      year: 2021,
      month: Month.MAY
    },
    end: {
      year: 2021,
      month: Month.AUGUST
    },
    description: {
      paragraphs: [
        `Voted as one of the top internship projects by the internship committee, which included the CFO and the 
          Director of Software Development`,
        `Designed a responsive social media website using Material UI components and following Material UI guidelines 
          inside of Figma`,
        `Built the website in React and PHP with typical social media features such as an infinite scroll feed, profile 
          pages, creating and interacting with text posts, and friends`
      ]
    },
    stack: ['React', 'PHP', 'MySQL', 'Socket.IO']
  }
];

const education: EducationEntry[] = [
  {
    certification: 'Bachelors of Science in Computer Science',
    start: {
      year: 2018,
      month: Month.AUGUST
    },
    end: {
      year: 2022,
      month: Month.MAY
    },
    university: 'Texas A&M University',
    location: 'College Station, TX'
  }
];

const linkedIn: string = 'alexander-ling-6b8a28178';
const gitHub: string = 'alexling540';

export { header, intro, skills, experience, education, linkedIn, gitHub };
