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
  languages: ['TypeScript', 'JavaScript', 'PHP', 'SQL', 'Java', 'Python', 'Lua', 'C'],
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
        `Redeveloped legacy PHP setup pages into a fast, interactive React application, delivering the project in 4 
          months instead of the planned 12 months to meet executive priorities. Implemented a configurable sandbox mode 
          allowing clients to preview pay impacting changes before saving edits, increasing visibility in setups, 
          reducing errors, and earning strong client praise.`,
        `Implemented detailed pay calculation display within the time card view, enabling transparent wage validation 
          for employees.`,
        `Developed overlapping shift pay functionality within the new shift system, significantly simplifying the setup 
          of 6% of clients using the new system and resolving a major blocker that enabled the final 5% of clients to 
          transition from the legacy system.`,
        `Engineered a configurable holiday pay system leveraging historical payroll data, allowing clients to define 
          custom pay rules and enabling successful expansion into the Canadian market.`,
        `Enhanced the existing deferred overtime calculation system to support variable rate multipliers, ensuring 
          compliance with state-specific labor laws.`
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
        `Built an internal social media platform using React, PHP, MySQL, and Socket.IO, integrating employee profiles 
          with existing accounts in the company's payroll system.`,
        `Designed a user-friendly, responsive UI with Material UI components using Figma.`,
        `Developed infinite scroll feeds, profile pages, text posts with likes and comments, friend management, and a 
          real-time chat, delivering a fully featured social experience.`,
        `Recognized as one of the top internship projects by the internship committee, led by the CFO and the Director 
          of Software Development.`
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
