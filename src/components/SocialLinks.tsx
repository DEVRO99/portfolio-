import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { cn } from '@/utils/cn'
import { GitHubIcon, LinkedInIcon, TwitterIcon, DribbbleIcon } from '@/components/SocialIcons'

const socialIcons = [
  { key: 'github' as const, icon: GitHubIcon, label: 'GitHub' },
  { key: 'linkedin' as const, icon: LinkedInIcon, label: 'LinkedIn' },
  { key: 'twitter' as const, icon: TwitterIcon, label: 'Twitter' },
  { key: 'dribbble' as const, icon: DribbbleIcon, label: 'Dribbble' },
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socialIcons.map(({ key, icon: Icon, label }, i) => (
        <motion.a
          key={key}
          href={personalInfo.social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -3, scale: 1.1 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl glass text-text-secondary hover:text-neon-blue hover:border-neon-blue/30 transition-colors duration-300"
        >
          <Icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  )
}
