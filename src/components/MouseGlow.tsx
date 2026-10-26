import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function MouseGlow() {
  const { x, y } = useMousePosition()
  const isTouch = useMediaQuery('(pointer: coarse)')

  if (isTouch) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      animate={{ x: x - 300, y: y - 300 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 0.5 }}
    >
      <div
        className="w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
