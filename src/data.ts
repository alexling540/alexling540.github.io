import type { EducationEntry } from '$types/EducationEntry';
import type { ExperienceEntry } from '$types/ExperienceEntry';
import type { Skills } from '$types/Skills';

const header: string = 'hello, world';

const intro: string[] = [
  `I'm Alex, a full stack developer working at Paycom. Most of my work experience is with PHP in an MVC framework, with 
  more emphasis on backend.`,
  `Most of my hobbyist programming is spent on learning frontend frameworks to keep up with the industry and writing 
  scripts to automate tedius tasks.`
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
    start: Date.UTC(2022, 4),
    description: {
      points: [
        `Enhanced an existing deferred overtime calculation system to be more flexible`,
        `Collaborated on improving an existing system to allow for customized calculations and filtering`,
        `Worked on preventing XSS exploits by patching legacy code`
      ]
    },
    stack: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'React']
  },
  {
    title: 'Software Development Intern',
    company: 'Paycom',
    start: Date.UTC(2021, 4),
    end: Date.UTC(2021, 7),
    description: {
      paragraphs: [
        `As a team of 4 interns, designed and built the frontend and backend of a social media website.`
      ]
    },
    stack: ['React', 'PHP', 'MySQL', 'Socket.IO']
  }
];

const education: EducationEntry[] = [
  {
    certification: 'BS in Computer Science',
    start: Date.UTC(2018, 7),
    end: Date.UTC(2022, 4),
    university: 'Texas A&M University',
    location: 'College Station, TX'
  }
];

const linkedIn: string = 'alexander-ling-6b8a28178';
const gitHub: string = 'alexling540';

export { header, intro, skills, experience, education, linkedIn, gitHub };
