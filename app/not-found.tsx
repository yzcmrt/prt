"use client";
import { useLanguage } from './i18n/context';

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - {locale === 'tr' ? 'Sayfa bulunamadı' : 'Page not found'}
      </h1>
      <p className="mb-4">
        {locale === 'tr' 
          ? 'Ups! Aradığınız sayfa mevcut değil.'
          : "Oops! The page you're looking for doesn't seem to exist."}
      </p>
    </section>
  );
}
