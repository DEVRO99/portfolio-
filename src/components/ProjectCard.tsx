import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/SocialIcons'
import type { Project } from '@/data/projects'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="glass rounded-[24px] overflow-hidden neon-glow-hover transition-all duration-500">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="flex items-center justify-center w-10 h-10 rounded-xl glass text-white hover:text-neon-blue transition-colors"
              data-cursor="pointer"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center justify-center w-10 h-10 rounded-xl glass text-white hover:text-neon-blue transition-colors"
              data-cursor="pointer"
            >
              <GitHubIcon size={18} />
            </a>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'px-3 py-1 text-xs font-medium rounded-lg',
                  'bg-white/5 text-text-secondary border border-white/5'
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
