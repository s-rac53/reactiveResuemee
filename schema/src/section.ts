import { DateRange } from './atoms';
import { Profile } from './basics';

export type WorkExperience = {
  id?: string;
  name: string;
  position: string;
  date?: string;
  url?: string;
  summary?: string;
  about?: string;
};

export type Education = {
  id?: string;
  institution: string;
  degree: string;
  score?: string;
  date?: string;
  url?: string;
  summary?: string;
  courses?: string[];
  dateofpassing?: string;
};

export type ProfessionalTraining = {
  id?: string;
  summary: string;
};

export type Skill = {
  id?: string;
  skills: string;
};

export type Project = {
  id?: string;
  summary: string;
};  

export type ECActivity = {
  id?: string;
  summary?: string;
};

export type VocationalTraining = {
  id?: string;
  date: string;
  company?: string;
  organization?: string;
};

export type EntranceExam = {
  id?: string;
  exam: string;
  entry: string;
};


export type Language = {
  id?: string;
  language: string;
  entry: string;
};

export type Interest = {
  id?: string;
  name: string;
};

export type Custom = {
  id?: string;
  title: string;
  subtitle?: string;
  date?: DateRange;
  url?: string;
  level?: string;
  levelNum?: number;
  summary?: string;
  keywords?: string[];
};

export type ListItem =
  | ECActivity
  | Education
  | EntranceExam
  | Interest
  | Language
  | Profile
  | ProfessionalTraining
  | Project
  | Skill
  | VocationalTraining
  | WorkExperience
  | Custom;

export type SectionType =
  | 'basic'
  | 'profiles'
  | 'education'
  | 'extracurricular'
  | 'entrance'
  | 'professional'
  | 'skills'
  | 'languages'
  | 'interests'
  | 'vocational'
  | 'projects'
  | 'custom'
  | 'work';

export type SectionPath = `sections.${string}`;

export type Section = {
  id?: string;
  name: string;
  type: SectionType;
  columns: number;
  visible: boolean;
  items: ListItem[];
  isDuplicated?: boolean;
};
