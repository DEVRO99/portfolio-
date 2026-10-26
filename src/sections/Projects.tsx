import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectFilters } from '@/data/projects'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { cn } from '@/utils/cn'

export function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A selection of my recent work across web, mobile, and AI."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              data-cursor="pointer"
              className={cn(
                'px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                filter === f.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-blue-500/20'
                  : 'glass text-text-secondary hover:text-text-primary'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
