import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import { cn } from '@/utils/cn'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const current = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0]

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building modern digital products."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="pointer"
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300',
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-text-primary border border-white/10'
                    : 'glass text-text-secondary hover:text-text-primary'
                )}
              >
                <Icon size={16} style={{ color: cat.color }} />
                {cat.title}
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GlassCard className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <current.icon size={28} style={{ color: current.color }} />
              </motion.div>
              <h3 className="text-xl font-semibold">{current.title} Skills</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {current.skills.map((skill) => (
                <motion.div key={skill.name} variants={staggerItem}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                    <span className="text-sm text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={viewportConfig}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${current.color}, ${current.color}88)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div key={cat.id} variants={staggerItem}>
                <GlassCard
                  hover
                  onClick={() => setActiveCategory(cat.id)}
                  className="text-center !p-6 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <Icon size={32} style={{ color: cat.color }} />
                    <span className="text-sm font-medium text-text-secondary">{cat.title}</span>
                  </motion.div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
