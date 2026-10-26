import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '@/data/portfolio'
import { SocialLinks } from '@/components/SocialLinks'
import { scrollToSection } from '@/utils/cn'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AM.</h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences with passion, precision, and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(1, 6).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-text-secondary hover:text-neon-blue text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
              Connect
            </h4>
            <SocialLinks />
            <p className="text-text-muted text-sm mt-4">{personalInfo.email}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-text-muted text-sm flex items-center gap-1">
            © {currentYear} {personalInfo.name}. Made with
            <Heart size={14} className="text-red-400 inline" />
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-muted text-xs font-mono"
          >
            Designed & Built by Alex Morgan
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
