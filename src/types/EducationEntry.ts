import type { MonthAndYear } from './MonthAndYear';

export interface EducationEntry {
  certification: string;
  start: MonthAndYear;
  end?: MonthAndYear;
  university: string;
  location: string;
}
