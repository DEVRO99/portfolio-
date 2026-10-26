import {
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  color: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    color: '#3b82f6',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Three.js / R3F', level: 85 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST APIs', level: 93 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    color: '#06b6d4',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 82 },
      { name: 'Prisma ORM', level: 90 },
      { name: 'Supabase', level: 87 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    color: '#f59e0b',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS / Vercel', level: 88 },
      { name: 'Figma', level: 90 },
      { name: 'CI/CD', level: 86 },
    ],
  },
]
