'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { personalInfo, experiences } from '@/lib/data';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';
import { Github, Linkedin, Twitter } from 'lucide-react';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

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

// split() with a capture group puts the matched keywords at odd indices
function highlightKeywords(text: string): React.ReactNode {
  return text.split(keywordPattern).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-cyber-cyan">
        {part}
      </span>
    ) : (
      part
    )
  );
}

const fullText = 'Full-Stack Developer | Building Digital Futures';

const bio = [
  "I'm a full-stack developer with a passion for crafting immersive digital experiences. I specialize in building high-performance web applications using modern technologies like React, Next.js, and Node.js.",
  'With a keen eye for optimization and a love for clean code, I transform complex problems into elegant solutions. I thrive in the intersection of pragmatism and technology.',
  "When I'm not coding, you'll find me exploring new technologies, watching Anime, or gaming.",
];

const latestJob = experiences[0];
const facts = [
  { label: 'Experience', value: '6+ years', color: 'text-cyber-cyan' },
  { label: 'Latest Role', value: `${latestJob.role} @ ${latestJob.company}`, color: 'text-cyber-pink' },
  { label: 'Core Stack', value: 'React · TypeScript · Next.js', color: 'text-cyber-purple' },
  { label: 'Status', value: 'Open to full-time roles · Available immediately', color: 'text-green-400', live: true },
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
      aria-labelledby="hero-name"
    >
      {/* Particles Background */}
      <ParticlesBackground className="absolute inset-0 z-0" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid z-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Intro Text */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              className="text-cyber-cyan font-mono text-sm md:text-base mb-4"
            >
              {'// INITIALIZING DEVELOPER PROFILE...'}
            </motion.p>

            {/* Name with Glitch Effect */}
            <motion.div variants={fadeInUp} className="mb-4">
              <h1
                id="hero-name"
                data-text={personalInfo.name}
                className="glitch text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cyber-white tracking-tighter"
              >
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Typing Tagline */}
            <motion.div
              variants={fadeInUp}
              className="min-h-12 md:min-h-14 flex items-center justify-center lg:justify-start mb-6"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-cyber-gray font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-5 md:h-7 bg-cyber-cyan ml-1 align-middle animate-pulse" />
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fadeInUp}
              className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto lg:mx-0 mb-8"
              aria-hidden="true"
            />

            {/* Bio */}
            <div className="space-y-4 mb-10">
              {bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="text-cyber-gray text-base md:text-lg leading-relaxed"
                >
                  {highlightKeywords(paragraph)}
                </motion.p>
              ))}
            </div>

            {/* Quick Facts */}
            <motion.dl
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left"
            >
              {facts.map(({ label, value, color, live }) => (
                <div key={label} className="glass cyber-clip px-4 py-3">
                  <dt className={`font-mono text-xs uppercase tracking-widest mb-1 ${color}`}>
                    {`> ${label}`}
                  </dt>
                  <dd className="flex items-center gap-2 text-cyber-white font-medium">
                    {live && (
                      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                      </span>
                    )}
                    {value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* Social Links */}
            <motion.ul
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-6"
              role="list"
              aria-label="Social links"
            >
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Github;
                return (
                  <li key={link.name}>
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan hover:border-glow-cyan transition-all inline-block"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${link.name} (opens in new tab)`}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </motion.a>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Avatar */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="lg:col-span-5 order-first lg:order-last"
          >
            <div className="relative max-w-[16rem] lg:max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-cyber-cyan/30 bg-cyber-black">
                <Image
                  src="/cyberpunk-avatar.jpeg"
                  alt={`${personalInfo.name} - Full-Stack Developer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 384px"
                  priority
                />

                {/* Cyberpunk Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-cyan/10" />
              </div>

              {/* HUD Frame Corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyber-cyan" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyber-pink" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyber-pink" aria-hidden="true" />

              {/* ID Caption */}
              <p className="mt-6 text-center font-mono text-xs text-cyber-cyan/70 tracking-widest">
                {'// ID'}: {personalInfo.name}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  );
}
