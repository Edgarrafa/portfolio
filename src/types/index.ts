export interface PersonalInfo {
  name: string;
  email: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  duration: string;
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';

export interface NavItem {
  href: string;
}
