import { Globe, Palette, Smartphone, Brain, Plug, type LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  gradient: string
}

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Building blazing-fast, scalable web applications with modern frameworks and best practices.',
    icon: Globe,
    features: ['React / Next.js', 'Performance Optimization', 'SEO Ready', 'Responsive Design'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'Creating intuitive, beautiful interfaces that delight users and drive engagement.',
    icon: Palette,
    features: ['Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile applications with native performance and seamless UX.',
    icon: Smartphone,
    features: ['React Native', 'Expo', 'App Store Deploy', 'Push Notifications'],
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description:
      'Integrating cutting-edge AI capabilities into your products for smarter experiences.',
    icon: Brain,
    features: ['LLM Integration', 'Chatbots', 'ML Pipelines', 'Automation'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'api',
    title: 'API Development',
    description:
      'Robust, well-documented APIs that power your applications and integrations.',
    icon: Plug,
    features: ['REST / GraphQL', 'Authentication', 'Rate Limiting', 'Documentation'],
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
]
