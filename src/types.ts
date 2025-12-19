export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  image: string; // URL for external logo or empty string for default icon
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  grade?: string;
  place?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}