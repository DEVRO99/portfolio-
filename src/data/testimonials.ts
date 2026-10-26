export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechVision Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content:
      'Alex is an exceptional developer who consistently delivers high-quality work. Their ability to translate complex requirements into elegant solutions is remarkable. A true asset to any team.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'Creative Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content:
      'Working with Alex was a game-changer for our product. They brought fresh ideas and technical expertise that elevated our entire platform. Highly recommend for any ambitious project.',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Emily Rodriguez',
    role: 'Founder & CEO',
    company: 'StartupHub',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content:
      'Alex helped us build our MVP in record time without compromising quality. Their attention to detail and user-centric approach made all the difference in our launch success.',
    rating: 5,
  },
  {
    id: 't-4',
    name: 'David Park',
    role: 'Design Director',
    company: 'Lumina Studio',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content:
      'The perfect blend of design sensibility and technical prowess. Alex understands that great products need both beautiful interfaces and rock-solid engineering underneath.',
    rating: 5,
  },
]
