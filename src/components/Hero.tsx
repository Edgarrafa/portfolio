'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Hero() {
  const { t, language } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.tagline');

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
  }, [fullText, language]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-name"
    >
      {/* Particles Background */}
      <ParticlesBackground className="absolute inset-0 z-0" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid z-0" aria-hidden="true" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 container mx-auto px-4 md:px-6 text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-cyber-cyan font-mono text-sm md:text-base mb-4"
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name with Glitch Effect */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h1
            id="hero-name"
            data-text={personalInfo.name}
            className="glitch text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-cyber-white tracking-tighter"
          >
            {personalInfo.name}
          </h1>
        </motion.div>

        {/* Typing Tagline */}
        <motion.div
          variants={fadeInUp}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-cyber-gray font-mono">
            {typedText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-cyber-cyan ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => scrollToSection('#projects')}
            className="neon-button bg-cyber-cyan text-cyber-black font-bold px-8 py-6 text-lg hover:bg-cyber-cyan/90 border-none"
          >
            {t('hero.viewProjects')}
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 px-8 py-6 text-lg"
          >
            {t('hero.getInTouch')}
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.ul
          variants={fadeInUp}
          className="flex items-center justify-center gap-6"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-cyber-cyan/60 hover:text-cyber-cyan transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            {t('hero.scroll')}
          </span>
          <ChevronDown className="scroll-indicator" size={24} />
        </motion.button>
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />
    </section>
  );
}
