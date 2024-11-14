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
    title: 'Software Developer III',
    company: 'Paycom',
    start: {
      year: 2022,
      month: Month.MAY
    },
    description: {
      points: [
        `Rewrote 2 existing legacy PHP configuration wizards in React consuming data from a PHP REST API server`,
        `Created an interface for users to view their time sheet calculations in greater detail`,
        `Extended a pay calculation system to allow for more customization of payouts for certain time, integrating 
          modern PHP with legacy code`,
        `Collaborated on improving an existing system to allow for customized calculations and filtering`,
        `Enhanced an existing overtime calculation system to allow user defined constants`,
        `Worked on preventing XSS exploits by patching legacy code`
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
        `As a team of 4 interns, designed and built the frontend and backend of a social media website`
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
