export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: 'web' | 'mobile' | 'ai' | 'design'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'nebula-dashboard',
    title: 'Nebula Dashboard',
    description:
      'A real-time analytics dashboard with 3D data visualizations, built for enterprise clients to monitor KPIs and business metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    technologies: ['React', 'Three.js', 'D3.js', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web',
    featured: true,
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness App',
    description:
      'Cross-platform fitness tracking app with AI-powered workout recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    technologies: ['React Native', 'Expo', 'Firebase', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'cipher-ai',
    title: 'Cipher AI Assistant',
    description:
      'Intelligent code assistant powered by LLMs, helping developers write, review, and optimize code faster.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    technologies: ['Next.js', 'OpenAI', 'Python', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true,
  },
  {
    id: 'lumina-design',
    title: 'Lumina Design System',
    description:
      'Comprehensive design system with 200+ components, tokens, and documentation for consistent UI development.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    technologies: ['Figma', 'Storybook', 'React', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'design',
    featured: true,
  },
  {
    id: 'vault-finance',
    title: 'Vault Finance',
    description:
      'Secure fintech platform for personal finance management with real-time market data and portfolio tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web',
    featured: false,
  },
  {
    id: 'echo-social',
    title: 'Echo Social',
    description:
      'Next-generation social platform with ephemeral content, AR filters, and privacy-first architecture.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
    technologies: ['React Native', 'GraphQL', 'Redis', 'WebRTC'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile',
    featured: false,
  },
]

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI' },
  { id: 'design', label: 'Design' },
]
