import { Skill } from '@/types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'LANGUAGES', level: 90, color: '#3b82f6' },
  { name: 'TypeScript', category: 'LANGUAGES', level: 85, color: '#06b6d4' },
  { name: 'JavaScript', category: 'LANGUAGES', level: 90, color: '#eab308' },
  { name: 'Python', category: 'LANGUAGES', level: 75, color: '#f97316' },
  { name: 'C++', category: 'LANGUAGES', level: 70, color: '#8b5cf6' },
  { name: 'C', category: 'LANGUAGES', level: 65, color: '#64748b' },
  { name: 'SQL', category: 'LANGUAGES', level: 80, color: '#10b981' },
  { name: 'PHP', category: 'LANGUAGES', level: 60, color: '#a78bfa' },

  // Frontend
  { name: 'React.js', category: 'FRONTEND', level: 90, color: '#06b6d4' },
  { name: 'Next.js', category: 'FRONTEND', level: 82, color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'FRONTEND', level: 88, color: '#38bdf8' },
  { name: 'HTML / CSS', category: 'FRONTEND', level: 92, color: '#f97316' },
  { name: 'Framer Motion', category: 'FRONTEND', level: 75, color: '#a855f7' },

  // Backend
  { name: 'Node.js', category: 'BACKEND', level: 85, color: '#10b981' },
  { name: 'Express.js', category: 'BACKEND', level: 80, color: '#6b7280' },
  { name: 'Flask', category: 'BACKEND', level: 75, color: '#10b981' },
  { name: 'FastAPI', category: 'BACKEND', level: 70, color: '#10b981' },
  { name: 'WebSockets', category: 'BACKEND', level: 72, color: '#f59e0b' },

  // Databases
  { name: 'MongoDB', category: 'DATABASES', level: 85, color: '#10b981' },
  { name: 'PostgreSQL', category: 'DATABASES', level: 75, color: '#3b82f6' },
  { name: 'MySQL', category: 'DATABASES', level: 70, color: '#f97316' },

  // AI/ML
  { name: 'TensorFlow', category: 'AI_ML', level: 78, color: '#f97316' },
  { name: 'Scikit-Learn', category: 'AI_ML', level: 82, color: '#f97316' },
  { name: 'OpenCV', category: 'AI_ML', level: 80, color: '#5c3ee8' },
  { name: 'MediaPipe', category: 'AI_ML', level: 75, color: '#06b6d4' },
  { name: 'Pandas', category: 'AI_ML', level: 85, color: '#3b82f6' },
  { name: 'NumPy', category: 'AI_ML', level: 85, color: '#4f46e5' },
  { name: 'Matplotlib', category: 'AI_ML', level: 78, color: '#06b6d4' },
  { name: 'Seaborn', category: 'AI_ML', level: 75, color: '#20b2aa' },

  // Tools
  { name: 'Git / GitHub', category: 'TOOLS', level: 88, color: '#f97316' },
  { name: 'Docker', category: 'TOOLS', level: 65, color: '#06b6d4' },
  { name: 'Salesforce', category: 'TOOLS', level: 70, color: '#06b6d4' },
  { name: 'Razorpay API', category: 'TOOLS', level: 72, color: '#3b82f6' },
  { name: 'BeautifulSoup', category: 'TOOLS', level: 80, color: '#f59e0b' },
];

export const skillCategories = [
  { key: 'ALL', label: 'All' },
  { key: 'LANGUAGES', label: 'Languages' },
  { key: 'FRONTEND', label: 'Frontend' },
  { key: 'BACKEND', label: 'Backend' },
  { key: 'DATABASES', label: 'Databases' },
  { key: 'AI_ML', label: 'AI / ML' },
  { key: 'TOOLS', label: 'Tools' },
] as const;
