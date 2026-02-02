'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/lib/i18n/context';

export default function About() {
  const { t, tArray } = useLanguage();
  const bio = tArray('about.bio');

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto" />
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
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Holographic Border Effect */}
              <div className="holo-border rounded-lg p-1">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-cyber-black">
                  {/* Avatar Image */}
                  <Image
                    src="/cyberpunk-avatar.jpeg"
                    alt="Profile Avatar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />

                  {/* Cyberpunk Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-cyber-pink/15 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-transparent" />

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 cyber-grid opacity-20" />

                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-8 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent animate-[scanline-move_4s_linear_infinite]" />
                  </div>

                  {/* Vignette Effect */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" />
                </div>
              </div>

              {/* Floating Decorations */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 w-16 h-16 border-2 border-cyber-cyan/30 rounded-lg"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-cyber-pink/30 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 -right-10 w-4 h-4 bg-cyber-purple rounded-full"
                style={{
                  boxShadow: '0 0 20px #b100ff',
                }}
              />
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
              {bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInRight}
                  className="text-cyber-gray text-base md:text-lg leading-relaxed"
                >
                  {highlightKeywords(paragraph)}
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

function highlightKeywords(text: string): React.ReactNode {
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

  let result: React.ReactNode[] = [text];

  keywords.forEach((keyword) => {
    result = result.flatMap((part) => {
      if (typeof part !== 'string') return part;

      const regex = new RegExp(`(${keyword})`, 'gi');
      const parts = part.split(regex);

      return parts.map((p, i) =>
        regex.test(p) ? (
          <span key={`${keyword}-${i}`} className="text-cyber-cyan">
            {p}
          </span>
        ) : (
          p
        )
      );
    });
  });

  return result;
}
