import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import { personalInfo, stats, education, aboutExperience } from '@/data/portfolio'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { CountUp } from '@/components/CountUp'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Passionate About Building"
          description="Turning ideas into elegant, high-performance digital products."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-[32px] blur-2xl" />
              <div className="relative glass rounded-[24px] overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {personalInfo.tagline}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              With over 6 years of experience in full-stack development, I specialize in
              creating immersive web experiences that combine cutting-edge 3D graphics with
              intuitive user interfaces. My work sits at the intersection of engineering
              excellence and creative design.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through technical
              writing and mentorship.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <GlassCard className="text-center !p-5">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-text-muted text-xs">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={20} className="text-neon-blue" />
              <h4 className="text-lg font-semibold">Experience Highlights</h4>
            </div>
            <div className="space-y-4">
              {aboutExperience.map((exp) => (
                <GlassCard key={exp.title} className="!p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-text-primary text-sm">{exp.title}</h5>
                    <span className="text-text-muted text-xs whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-neon-blue text-xs mb-2">{exp.company}</p>
                  <p className="text-text-secondary text-sm">{exp.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-neon-purple" />
              <h4 className="text-lg font-semibold">Education</h4>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <GlassCard key={edu.degree} className="!p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-text-primary text-sm">{edu.degree}</h5>
                    <span className="text-text-muted text-xs">{edu.year}</span>
                  </div>
                  <p className="text-neon-purple text-xs mb-2">{edu.school}</p>
                  <p className="text-text-secondary text-sm">{edu.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
