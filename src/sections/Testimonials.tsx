import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setCurrent((prev) => {
        const next = prev + dir
        if (next < 0) return testimonials.length - 1
        if (next >= testimonials.length) return 0
        return next
      })
    },
    []
  )

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [paginate])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Trusted by teams and founders worldwide."
        />

        <div className="relative">
          <Quote
            size={48}
            className="absolute -top-4 left-0 text-neon-blue/10 pointer-events-none"
          />

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass text-text-secondary hover:text-neon-blue transition-colors"
              data-cursor="pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-gradient-to-r from-neon-blue to-neon-purple'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass text-text-secondary hover:text-neon-blue transition-colors"
              data-cursor="pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
