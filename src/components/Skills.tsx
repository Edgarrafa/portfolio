'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerContainerFast } from '@/lib/animations';
import type { SkillCategory } from '@/types';

const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
  other: 'Other',
};

// Static class mappings to prevent Tailwind purging
const categoryStyles: Record<SkillCategory, {
  dotClass: string;
  lineClass: string;
  iconClass: string;
  textClass: string;
}> = {
  frontend: {
    dotClass: 'bg-cyber-cyan',
    lineClass: 'from-cyber-cyan/50 to-transparent',
    iconClass: 'bg-cyber-cyan/10 border-cyber-cyan/30 group-hover:border-cyber-cyan',
    textClass: 'text-cyber-cyan',
  },
  backend: {
    dotClass: 'bg-cyber-pink',
    lineClass: 'from-cyber-pink/50 to-transparent',
    iconClass: 'bg-cyber-pink/10 border-cyber-pink/30 group-hover:border-cyber-pink',
    textClass: 'text-cyber-pink',
  },
  tools: {
    dotClass: 'bg-cyber-purple',
    lineClass: 'from-cyber-purple/50 to-transparent',
    iconClass: 'bg-cyber-purple/10 border-cyber-purple/30 group-hover:border-cyber-purple',
    textClass: 'text-cyber-purple',
  },
  other: {
    dotClass: 'bg-cyber-gray',
    lineClass: 'from-cyber-gray/50 to-transparent',
    iconClass: 'bg-cyber-gray/10 border-cyber-gray/30 group-hover:border-cyber-gray',
    textClass: 'text-cyber-gray',
  },
};

export default function Skills() {
  const categories = useMemo(() => Object.keys(categoryLabels) as SkillCategory[], []);

  // Memoize skills filtering per category
  const skillsByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = skills.filter((s) => s.category === category);
      return acc;
    }, {} as Record<SkillCategory, typeof skills>);
  }, [categories]);

  return (
    <section id="skills" className="py-20 md:py-32 relative" aria-labelledby="skills-heading">
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
            {'// TECH.STACK'}
          </p>
          <h2 id="skills-heading" className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Skills Grid by Category */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category];
            if (categorySkills.length === 0) return null;

            const styles = categoryStyles[category];

            return (
              <motion.div
                key={category}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                role="region"
                aria-labelledby={`${category}-heading`}
              >
                {/* Category Header */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-4 mb-6"
                >
                  <div
                    className={`w-3 h-3 rounded-full ${styles.dotClass}`}
                    aria-hidden="true"
                  />
                  <h3 id={`${category}-heading`} className="text-xl md:text-2xl font-bold font-mono text-cyber-white">
                    {categoryLabels[category]}
                  </h3>
                  <div className={`flex-1 h-px bg-gradient-to-r ${styles.lineClass}`} aria-hidden="true" />
                </motion.div>

                {/* Skills */}
                <motion.ul
                  variants={staggerContainerFast}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                  role="list"
                  aria-label={categoryLabels[category]}
                >
                  {categorySkills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="glass cyber-clip p-4 text-center group cursor-default"
                    >
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-lg border flex items-center justify-center transition-colors ${styles.iconClass}`}
                        aria-hidden="true"
                      >
                        <span className={`${styles.textClass} text-2xl font-bold font-mono`}>
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-cyber-white text-sm font-medium truncate">
                        {skill.name}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyber-pink/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  );
}
