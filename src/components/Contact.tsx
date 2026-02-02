'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6 mb-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-cyber-cyan font-mono text-sm mb-2">
            {t('contact.label')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto mb-6" />
          <p className="text-cyber-gray max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="max-w-2xl mx-auto">
          {/* Email - Primary CTA */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg glass border border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-mono">{personalInfo.email}</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-sm font-mono text-cyber-gray text-center mb-4 uppercase tracking-wider">
              {t('contact.connect')}
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Github;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-cyber-gray hover:text-cyber-white hover:border-white/20 hover:bg-white/5 transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Resume Download */}
          {personalInfo.resumeUrl && (
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Button
                asChild
                variant="outline"
                className="border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-cyan/50"
              >
                <a href={personalInfo.resumeUrl} download>
                  <Download size={16} className="mr-2" />
                  {t('contact.downloadResume')}
                </a>
              </Button>
            </motion.div>
          )}

          {/* Availability Status */}
          <motion.div
            variants={fadeInUp}
            className="glass cyber-clip p-6 text-center max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-cyber-white font-medium">
                {t('contact.available')}
              </span>
            </div>
            <p className="text-cyber-gray text-sm">
              {t('contact.availableText')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" />
    </section>
  );
}
