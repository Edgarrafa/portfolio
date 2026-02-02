'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerContainerFast } from '@/lib/animations';
import type { SkillCategory } from '@/types';
import { useLanguage } from '@/lib/i18n/context';

const categoryKeys: Record<SkillCategory, string> = {
  frontend: 'skills.categories.frontend',
  backend: 'skills.categories.backend',
  tools: 'skills.categories.tools',
  other: 'skills.categories.other',
};

const categoryColors: Record<SkillCategory, string> = {
  frontend: 'cyber-cyan',
  backend: 'cyber-pink',
  tools: 'cyber-purple',
  other: 'cyber-gray',
};

export default function Skills() {
  const { t } = useLanguage();
  const categories = Object.keys(categoryKeys) as SkillCategory[];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
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
            {t('skills.label')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" />
        </motion.div>
      </motion.div>

      {/* Skills Grid by Category */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            const color = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
              >
                {/* Category Header */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-4 mb-6"
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-${color}`}
                    style={{
                      boxShadow: `0 0 10px var(--color-${color}), 0 0 20px var(--color-${color})`,
                    }}
                  />
                  <h3 className="text-xl md:text-2xl font-bold font-mono text-cyber-white">
                    {t(categoryKeys[category])}
                  </h3>
                  <div className={`flex-1 h-px bg-gradient-to-r from-${color}/50 to-transparent`} />
                </motion.div>

                {/* Skills */}
                <motion.div
                  variants={staggerContainerFast}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          category === 'frontend'
                            ? '0 0 20px rgba(0, 217, 255, 0.5)'
                            : category === 'backend'
                            ? '0 0 20px rgba(255, 0, 110, 0.5)'
                            : '0 0 20px rgba(177, 0, 255, 0.5)',
                      }}
                      className="glass cyber-clip p-4 text-center group cursor-default"
                    >
                      {/* Icon Placeholder */}
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-${color}/10 border border-${color}/30 flex items-center justify-center group-hover:border-${color} transition-colors`}
                      >
                        <span className={`text-${color} text-2xl font-bold font-mono`}>
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-cyber-white text-sm font-medium truncate">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyber-pink/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
