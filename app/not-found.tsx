"use client";
import { useLanguage } from './i18n/context';

export default function NotFound() {
  const { translations } = useLanguage();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        {translations.notFound.title}
      </h1>
      <p className="mb-4">
        {translations.notFound.message}
      </p>
    </section>
  );
}
