import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { MagneticButton } from '@/components/MagneticButton'
import { TypingText } from '@/components/TypingText'
import { scrollToSection } from '@/utils/cn'
import { SceneErrorBoundary } from '@/three/SceneErrorBoundary'

const HeroScene = lazy(() =>
  import('@/three/Scene').then((m) => ({ default: m.HeroScene }))
)

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <SceneErrorBoundary>
          <Suspense fallback={<div className="w-full h-full bg-bg" />}>
            <HeroScene className="w-full h-full" />
          </Suspense>
        </SceneErrorBoundary>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/60 to-bg z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-secondary mb-6"
            >
              <Sparkles size={14} className="text-neon-blue" />
              Available for freelance work
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-text-secondary mb-6 h-10">
              <TypingText
                texts={[
                  personalInfo.title,
                  'UI/UX Designer',
                  'Creative Developer',
                  'Problem Solver',
                ]}
              />
            </div>

            <p className="text-text-secondary text-lg leading-relaxed max-w-lg mb-8">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <MagneticButton onClick={() => scrollToSection('projects')} size="lg">
                View Projects
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </MagneticButton>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-neon-blue transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
