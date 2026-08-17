export type ThemeMode = 'dark' | 'light';

export type ProjectCategory = 'All' | 'UI/UX' | 'Frontend' | 'WordPress' | 'Webflow' | 'React';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  categoryDisplay: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  featured: boolean;
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
  features?: string[];
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  number: string;
  title: string;
  iconName: string;
  description: string;
  skills: string[];
  gradient: string;
  accent: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ToolItem {
  name: string;
  category: 'Design' | 'Frontend' | 'CMS & No-Code' | 'Animation & Dev';
  icon: string;
  description: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  highlights: string[];
  skillsGained: string[];
}
