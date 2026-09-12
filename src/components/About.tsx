'use client';

import { useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/lib/i18n/context';
import { personalInfo } from '@/lib/data';

// Pre-compile keywords regex for performance
const keywords = [
  'React',
  'Next.js',
  'Node.js',
  'full-stack developer',
  'TypeScript',
  'JavaScript',
  'clean code',
  'digital experiences',
  'web applications',
  'open-source',
  'cybersecurity',
];
const keywordPattern = new RegExp(`(${keywords.join('|')})`, 'gi');

export default function About() {
  const { t, tArray } = useLanguage();
  const bio = tArray('about.bio');

  // Memoized keyword highlighting function
  const highlightKeywords = useCallback((text: string): React.ReactNode => {
    const parts = text.split(keywordPattern);
    return parts.map((part, i) =>
      keywordPattern.test(part) ? (
        <span key={i} className="text-cyber-cyan">
          {part}
        </span>
      ) : (
        part
      )
    );
  }, []);

  // Memoize highlighted bio paragraphs
  const highlightedBio = useMemo(() =>
    bio.map((paragraph, index) => ({
      key: index,
      content: highlightKeywords(paragraph),
    })),
    [bio, highlightKeywords]
  );

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="about-heading">
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
            {t('about.label')}
          </p>
          <h2 id="about-heading" className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Profile Image / Avatar */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInLeft}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden border border-cyber-cyan/30 bg-cyber-black">
              <Image
                src="/cyberpunk-avatar.jpeg"
                alt={`${personalInfo.name} - Full-Stack Developer`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />

              {/* Cyberpunk Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-cyan/10" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              {highlightedBio.map(({ key, content }) => (
                <motion.p
                  key={key}
                  variants={fadeInRight}
                  className="text-cyber-gray text-base md:text-lg leading-relaxed"
                >
                  {content}
                </motion.p>
              ))}
            </div>

            {/* Stats or Quick Facts */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"
            >
              <div className="glass cyber-clip p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-1">
                  5+
                </div>
                <div className="text-cyber-gray text-sm">{t('about.stats.yearsExperience')}</div>
              </div>
              <div className="glass cyber-clip p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyber-pink mb-1">
                  20+
                </div>
                <div className="text-cyber-gray text-sm">{t('about.stats.projectsCompleted')}</div>
              </div>
              <div className="glass cyber-clip p-4 text-center col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-cyber-purple mb-1">
                  10+
                </div>
                <div className="text-cyber-gray text-sm">{t('about.stats.happyClients')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  );
}
