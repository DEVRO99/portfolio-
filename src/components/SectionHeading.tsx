import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('text-center mb-16 md:mb-20', className)}
    >
      <span className="inline-block text-sm font-medium tracking-widest uppercase text-neon-blue mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </motion.div>
  )
}
