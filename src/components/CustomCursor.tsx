import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CustomCursor() {
  const { x, y } = useMousePosition()
  const isTouch = useMediaQuery('(pointer: coarse)')
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isTouch) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor="pointer"]')
      setIsHovering(!!interactive)
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-neon-blue/60 pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-neon-blue pointer-events-none z-[9998]"
        animate={{ x: x - 3, y: y - 3 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 35, mass: 0.2 }}
      />
    </>
  )
}
