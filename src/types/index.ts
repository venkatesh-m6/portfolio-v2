export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'IN_PROGRESS';
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'INTERNSHIP' | 'HACKATHON' | 'PROJECT' | 'RESEARCH';
  description: string[];
  logo?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'LANGUAGES' | 'FRONTEND' | 'BACKEND' | 'AI_ML' | 'TOOLS' | 'DATABASES';
  level: number;
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}
