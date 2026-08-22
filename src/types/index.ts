export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  concepts: string[];
  github: string;
  liveDemo?: string;
  color: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}
