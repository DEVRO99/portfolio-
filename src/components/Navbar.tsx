import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, personalInfo } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/utils/cn'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(navLinks.map((l) => l.id))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('hero')}
          className="text-xl font-bold gradient-text tracking-tight"
          data-cursor="pointer"
        >
          AM.
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              data-cursor="pointer"
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                activeSection === link.id
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.cvUrl}
            download
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
            data-cursor="pointer"
          >
            <Download size={16} />
            CV
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            data-cursor="pointer"
            className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl glass"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    'text-left px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    activeSection === link.id
                      ? 'text-text-primary bg-white/5'
                      : 'text-text-secondary'
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 px-4 py-3 text-text-secondary"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
