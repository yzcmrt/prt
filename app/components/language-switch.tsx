"use client";
import { useLanguage } from '../i18n/context';

export const LanguageSwitch = () => {
  const { locale, changeLocale } = useLanguage();

  return (
    <button
      onClick={() => changeLocale(locale === 'tr' ? 'en' : 'tr')}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 ml-4"
      aria-label="Change language"
    >
      {locale === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}; 