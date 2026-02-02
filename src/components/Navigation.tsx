'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import LanguageToggle from './LanguageToggle';

const navTranslationKeys: Record<string, string> = {
  home: 'nav.home',
  about: 'nav.about',
  experience: 'nav.experience',
  projects: 'nav.projects',
  skills: 'nav.skills',
  contact: 'nav.contact',
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl font-bold font-mono text-cyber-cyan hover:text-glow-cyan transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'<CD />'}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Language Toggle */}
            <LanguageToggle />

            <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'relative py-2 text-sm font-medium transition-colors',
                    activeSection === item.href.replace('#', '')
                      ? 'text-cyber-cyan'
                      : 'text-cyber-gray hover:text-cyber-white'
                  )}
                >
                  {t(navTranslationKeys[item.href.replace('#', '')])}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-cyan"
                      style={{
                        boxShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff',
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            </ul>
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cyber-cyan"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        'block py-3 px-4 rounded-lg transition-all',
                        activeSection === item.href.replace('#', '')
                          ? 'text-cyber-cyan bg-cyber-cyan/10 border-l-2 border-cyber-cyan'
                          : 'text-cyber-gray hover:text-cyber-white hover:bg-white/5'
                      )}
                    >
                      {t(navTranslationKeys[item.href.replace('#', '')])}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
