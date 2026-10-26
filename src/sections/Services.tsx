import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import { cn } from '@/utils/cn'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="End-to-end solutions tailored to bring your vision to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <GlassCard className="h-full group">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
                      'bg-gradient-to-br',
                      service.gradient
                    )}
                  >
                    <Icon size={28} className="text-text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
