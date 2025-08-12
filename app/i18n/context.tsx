"use client";
import React, { createContext, useContext, useState } from 'react';
import { en } from './locales/en';
import { tr } from './locales/tr';

type Locale = 'en' | 'tr';
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  translations: Translations;
  changeLocale: (locale: Locale) => void;
}

const translations = {
  en,
  tr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('preferred-locale', newLocale);
      }
    } catch {}
  };

  React.useEffect(() => {
    try {
      const saved = typeof localStorage !== 'undefined' ? (localStorage.getItem('preferred-locale') as Locale | null) : null;
      if (saved === 'en' || saved === 'tr') {
        setLocale(saved);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = saved;
        }
      } else {
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'en';
        }
      }
    } catch {}
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        translations: translations[locale],
        changeLocale,
      }}
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