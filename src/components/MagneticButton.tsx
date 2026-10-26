import { type ReactNode, type Ref } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'

type MagneticButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  className?: string
} & Omit<HTMLMotionProps<'button'>, 'children'>

const variants = {
  primary:
    'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  secondary:
    'glass text-text-primary border border-white/10 hover:border-white/20 hover:bg-white/5',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className,
  ...props
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticEffect({ strength: 0.25 })

  return (
    <motion.button
      ref={magnetic ? (ref as Ref<HTMLButtonElement>) : undefined}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
