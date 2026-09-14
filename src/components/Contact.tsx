'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Github, Linkedin, Twitter, Mail, Download, Copy, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const secondaryLinkClass =
  'border-white/10 bg-transparent text-cyber-gray hover:text-cyber-white hover:border-cyber-cyan/40 hover:bg-white/5';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the mailto button still works
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative" aria-labelledby="contact-heading">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container mx-auto px-4 md:px-6"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="text-cyber-cyan font-mono text-sm mb-2">
            {t('contact.label')}
          </p>
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto mb-6" aria-hidden="true" />
          <p className="text-cyber-gray max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Terminal Card */}
        <motion.div
          variants={fadeInUp}
          className="max-w-2xl mx-auto glass cyber-clip border border-cyber-cyan/20"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-cyan/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-cyber-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyber-purple" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyber-cyan" />
              </div>
              <span className="font-mono text-xs text-cyber-gray">contact.sh</span>
            </div>
            <div className="flex items-center gap-2" role="status">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="font-mono text-xs text-green-400">{t('contact.status')}</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-10 text-center">
            <p className="font-mono text-sm text-cyber-cyan/70 mb-6" aria-hidden="true">
              $ ping edgar --channel email
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href={`mailto:${personalInfo.email}`}
                className="h-12 px-6 text-base font-bold bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan hover:border-glow-cyan"
              >
                <Mail size={18} aria-hidden="true" />
                {t('contact.emailMe')}
              </Button>
              <Button
                variant="outline"
                onClick={copyEmail}
                aria-label={t('contact.copy')}
                className="h-12 px-6 text-base font-mono border-cyber-cyan/30 text-cyber-cyan hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10"
              >
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                <span aria-live="polite">{copied ? t('contact.copied') : personalInfo.email}</span>
              </Button>
            </div>

            <div className="h-px my-8 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" aria-hidden="true" />

            {/* Secondary Links */}
            <ul className="flex flex-wrap justify-center gap-3" role="list">
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Github;
                return (
                  <li key={link.name}>
                    <Button
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className={secondaryLinkClass}
                      aria-label={`${link.name} (opens in new tab)`}
                    >
                      <Icon size={16} aria-hidden="true" />
                      {link.name}
                    </Button>
                  </li>
                );
              })}
              {personalInfo.resumeUrl && (
                <li>
                  <Button
                    href={personalInfo.resumeUrl}
                    download
                    variant="outline"
                    size="sm"
                    className={secondaryLinkClass}
                  >
                    <Download size={16} aria-hidden="true" />
                    {t('contact.resume')}
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" aria-hidden="true" />
    </section>
  );
}
