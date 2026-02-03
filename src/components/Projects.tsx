'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function Projects() {
  const { t } = useLanguage();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 relative" aria-labelledby="projects-heading">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 mb-16"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-cyber-cyan font-mono text-sm mb-2">
            {t('projects.label')}
          </p>
          <h2 id="projects-heading" className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass cyber-clip h-full border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-colors">
                <div className="h-full p-6 flex flex-col">
                  {/* Featured Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-cyber-cyan/70" size={14} aria-hidden="true" />
                    <span className="text-cyber-cyan/70 text-xs font-mono uppercase tracking-wider">
                      {t('projects.featured')}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-40 mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-cyber-black to-cyber-black/80 border border-white/5" aria-hidden="true">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-3xl font-mono text-cyber-cyan/20 group-hover:text-cyber-cyan/35 transition-colors">
                        {`<${t(`projects.items.${project.id}.title`).charAt(0)} />`}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
                      {t(`projects.items.${project.id}.title`)}
                    </h3>
                    <p className="text-cyber-gray text-sm mb-4 line-clamp-3 leading-relaxed">
                      {t(`projects.items.${project.id}.description`)}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/10 text-cyber-gray text-xs hover:border-cyber-cyan/30 hover:text-cyber-cyan transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-cyber-gray hover:text-cyber-cyan hover:bg-cyber-cyan/5"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${t(`projects.items.${project.id}.title`)} on GitHub (opens in new tab)`}
                        >
                          <Github size={16} className="mr-2" aria-hidden="true" />
                          {t('projects.code')}
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-cyber-gray hover:text-cyber-cyan hover:bg-cyber-cyan/5"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${t(`projects.items.${project.id}.title`)} live demo (opens in new tab)`}
                        >
                          <ExternalLink size={16} className="mr-2" aria-hidden="true" />
                          {t('projects.live')}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold font-mono text-cyber-white mb-8 text-center"
          >
            {t('projects.otherTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass cyber-clip h-full p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-cyber-purple"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-gray hover:text-cyber-cyan transition-colors"
                          aria-label={`View ${t(`projects.items.${project.id}.title`)} on GitHub (opens in new tab)`}
                        >
                          <Github size={18} aria-hidden="true" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyber-gray hover:text-cyber-pink transition-colors"
                          aria-label={`View ${t(`projects.items.${project.id}.title`)} live demo (opens in new tab)`}
                        >
                          <ExternalLink size={18} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    {t(`projects.items.${project.id}.title`)}
                  </h4>
                  <p className="text-cyber-gray text-sm mb-4 line-clamp-2">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-cyber-gray font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
