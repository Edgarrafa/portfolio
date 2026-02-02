export type Language = 'en' | 'es';

export const LANGUAGES: Language[] = ['en', 'es'];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
};

export const STORAGE_KEY = 'portfolio-language';

export const DEFAULT_LANGUAGE: Language = 'en';
