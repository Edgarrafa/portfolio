'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Language, DEFAULT_LANGUAGE, STORAGE_KEY } from './index';
import en from './translations/en.json';
import es from './translations/es.json';

type Translations = typeof en;

const translations: Record<Language, Translations> = { en, es };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  isInitialized: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'en' || stored === 'es')) {
      setLanguageState(stored);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[language], key);
      if (typeof value === 'string') {
        return value;
      }
      return key;
    },
    [language]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(translations[language], key);
      if (Array.isArray(value)) {
        return value;
      }
      return [];
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, tArray, isInitialized }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
