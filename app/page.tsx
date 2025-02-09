"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import { useLanguage } from './i18n/context';

export default function Page() {
  const { translations } = useLanguage();
  
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-title">
          {translations.home.title} <span className="animate-gradient">İsminiz</span>
        </h1>
        
        <p className="text-lg md:text-xl animate-fade-in opacity-0">
          {translations.home.subtitle}
        </p>
        
        <div className="space-y-4 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          <p className="prose prose-neutral dark:prose-invert">
            {translations.home.description}
          </p>
        </div>
      </div>
    </section>
  );
}
