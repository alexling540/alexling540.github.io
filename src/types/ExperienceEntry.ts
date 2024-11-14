import type { MonthAndYear } from './MonthAndYear';

export interface ExperienceEntry {
  title: string;
  company: string;
  start: MonthAndYear;
  end?: MonthAndYear;
  description: {
    paragraphs?: string[];
    points?: string[];
  };
  stack: string[];
}
