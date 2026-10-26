import { Building2, Rocket, Briefcase, GraduationCap, type LucideIcon } from 'lucide-react'

export interface ExperienceItem {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  icon: LucideIcon
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Senior Full Stack Developer',
    company: 'TechVision Inc.',
    period: '2022 — Present',
    description:
      'Leading a team of 5 developers building enterprise SaaS platforms. Architected microservices handling 1M+ daily requests. Reduced page load times by 60% through performance optimization.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    icon: Building2,
  },
  {
    id: 'exp-2',
    title: 'Frontend Developer',
    company: 'Creative Labs',
    period: '2019 — 2022',
    description:
      'Developed responsive web applications for Fortune 500 clients. Created a component library used across 15+ projects. Mentored junior developers and conducted code reviews.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Figma'],
    icon: Briefcase,
  },
  {
    id: 'exp-3',
    title: 'Full Stack Developer',
    company: 'StartupHub',
    period: '2018 — 2019',
    description:
      'Built MVPs and prototypes for 10+ early-stage startups. Implemented CI/CD pipelines and automated testing. Contributed to open-source projects.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
    icon: Rocket,
  },
  {
    id: 'exp-4',
    title: 'Computer Science Degree',
    company: 'Stanford University',
    period: '2014 — 2018',
    description:
      'Graduated with honors. Specialized in Software Engineering and HCI. Published research on web performance optimization.',
    technologies: ['Algorithms', 'Systems', 'HCI', 'ML'],
    icon: GraduationCap,
  },
]
