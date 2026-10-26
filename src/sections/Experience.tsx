import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/SectionHeading'
import { viewportConfig } from '@/utils/animations'

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Journey"
          description="A timeline of my professional growth and achievements."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg shadow-blue-500/20"
                  >
                    <Icon size={14} className="text-white" />
                  </motion.div>

                  <div className="glass rounded-[24px] p-6 md:p-8 neon-glow-hover transition-shadow duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                        <p className="text-neon-blue text-sm">{item.company}</p>
                      </div>
                      <span className="text-text-muted text-xs font-mono bg-white/5 px-3 py-1 rounded-lg">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-text-muted border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
