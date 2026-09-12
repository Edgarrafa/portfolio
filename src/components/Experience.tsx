'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, timelineItemLeft, timelineItemRight } from '@/lib/animations';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function Experience() {
  const { t, tArray } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-32 relative" aria-labelledby="experience-heading">
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
            {t('experience.label')}
          </p>
          <h2 id="experience-heading" className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" aria-hidden="true" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const translatedRole = t(`experience.jobs.${exp.id}.role`);
              const translatedDescription = tArray(`experience.jobs.${exp.id}.description`);

              return (
                <motion.div
                  key={exp.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={isLeft ? timelineItemLeft : timelineItemRight}
                  className={`relative md:w-1/2 ${
                    isLeft ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                  } mb-12 md:mb-24`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:flex absolute top-0 ${
                      isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    } w-4 h-4 rounded-full bg-cyber-cyan border-4 border-cyber-black z-10`}
                    style={{ boxShadow: '0 0 10px #00d9ff' }}
                    aria-hidden="true"
                  />

                  {/* Mobile Timeline Dot */}
                  <div
                    className="md:hidden absolute left-5 top-0 w-3 h-3 rounded-full bg-cyber-cyan z-10"
                    style={{ boxShadow: '0 0 10px #00d9ff' }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className="glass cyber-clip p-6 md:p-8 ml-12 md:ml-0">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30" aria-hidden="true">
                        <Briefcase className="text-cyber-cyan" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-cyber-white mb-1">
                          {translatedRole}
                        </h3>
                        <p className="text-cyber-cyan font-mono">{exp.company}</p>
                        <p className="text-cyber-gray text-sm mt-1">{exp.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6" role="list">
                      {translatedDescription.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-cyber-gray text-sm"
                        >
                          <span className="text-cyber-cyan mt-1" aria-hidden="true">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="border-cyber-cyan/30 text-cyber-cyan text-xs hover:border-cyber-cyan transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
