import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard } from '@/components/GlassCard'
import { SocialLinks } from '@/components/SocialLinks'
import { MagneticButton } from '@/components/MagneticButton'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={staggerItem}
                  className="flex items-center gap-4 glass rounded-[24px] p-5 hover:border-neon-blue/30 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs mb-0.5">{info.label}</p>
                    <p className="text-text-primary text-sm font-medium">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            <motion.div variants={staggerItem}>
              <p className="text-text-muted text-sm mb-3">Follow me</p>
              <SocialLinks iconSize={18} />
            </motion.div>

            <motion.div variants={staggerItem}>
              <GlassCard className="!p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-neon-blue mx-auto mb-2" />
                    <p className="text-text-secondary text-sm">{personalInfo.location}</p>
                    <p className="text-text-muted text-xs mt-1">Map placeholder</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <GlassCard>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-text-secondary text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <MagneticButton type="submit" size="lg" className="w-full md:w-auto">
                    <Send size={18} />
                    Send Message
                  </MagneticButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
