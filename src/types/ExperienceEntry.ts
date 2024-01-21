export interface ExperienceEntry {
  title: string;
  company: string;
  start: number;
  end?: number;
  description: {
    paragraphs?: string[];
    points?: string[];
  };
  stack: string[];
}
