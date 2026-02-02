'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGES, LANGUAGE_LABELS } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const { language, setLanguage, isInitialized } = useLanguage();

  if (!isInitialized) {
    return (
      <div className="flex rounded-full bg-white/5 border border-white/10 p-0.5">
        {LANGUAGES.map((lang) => (
          <div
            key={lang}
            className="px-3 py-1.5 text-xs font-mono text-cyber-gray/50"
          >
            {LANGUAGE_LABELS[lang]}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex rounded-full bg-white/5 border border-cyber-cyan/20 p-0.5 backdrop-blur-sm">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            'relative px-3 py-1.5 text-xs font-mono rounded-full transition-colors',
            language === lang
              ? 'text-cyber-black'
              : 'text-cyber-gray hover:text-cyber-cyan'
          )}
          aria-label={`Switch to ${lang === 'en' ? 'English' : 'Spanish'}`}
          aria-pressed={language === lang}
        >
          {language === lang && (
            <motion.span
              layoutId="language-indicator"
              className="absolute inset-0 bg-cyber-cyan rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)',
              }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{LANGUAGE_LABELS[lang]}</span>
        </button>
      ))}
    </div>
  );
}
