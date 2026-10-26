import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import { GlassCard } from '@/components/GlassCard'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      <blockquote className="text-text-secondary leading-relaxed mb-6 flex-1 text-sm md:text-base">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-text-primary text-sm">{testimonial.name}</p>
          <p className="text-text-muted text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </GlassCard>
  )
}
