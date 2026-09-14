'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { useLanguage } from '@/lib/i18n/context';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-cyber-black min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-cyber-cyan/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-cyber-gray text-sm font-mono">
            <span className="text-cyber-cyan">{'<'}</span>
            {` ${t('footer.designedWith')} `}
            <span className="text-cyber-pink">{'♥'}</span>
            {' '}
            <span className="text-cyber-cyan">{'/>'}</span>
          </p>
          <p className="text-cyber-gray/60 text-xs mt-2">
            © {"2026"} EDGAR_GALVAN. {t('footer.allRights')}
          </p>
        </div>
      </footer>
    </div>
  );
}
