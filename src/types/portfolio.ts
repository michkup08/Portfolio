export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  content?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  techStack: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  roleType: 'work' | 'education';
  description: string;
  link?: string;
  linkText?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  titles: string[];
  bio: string;
  status: string;
  location: string;
  residence: string;
  email: string;
  socials: {
    linkedin?: string;
    github?: string;
    youtube?: string;
    tiktok?: string;
    discord?: string;
  };
  stats: {
    yearsExperience: number;
    completedSoftware: number;
  };
}
