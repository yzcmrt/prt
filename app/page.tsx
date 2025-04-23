"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { socialLinks } from "./config";
import { useLanguage } from './i18n/context';
import { CVDownload } from './components/cv-download';
import { useTheme } from "next-themes";

export default function Page() {
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Tema değişiminde animasyonları kontrol etmek için
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [theme]);
  
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center">
      <div className="text-center space-y-8">
        <h1 className={`text-4xl md:text-6xl font-bold tracking-tight animate-title ${isAnimating ? 'opacity-0' : ''}`}>
          {translations.home.title} <span className={`animate-gradient ${isAnimating ? 'opacity-0' : ''}`}>Mert</span>
        </h1>
        
        <p className={`text-lg md:text-xl animate-fade-in ${isAnimating ? 'opacity-0' : 'opacity-1'}`}>
          {translations.home.subtitle}
        </p>
        
        <div className={`space-y-4 animate-fade-in ${isAnimating ? 'opacity-0' : 'opacity-1'}`} style={{ animationDelay: !isAnimating ? '0.5s' : '0s' }}>
          <p className="prose prose-neutral dark:prose-invert">
            {translations.home.description}
          </p>
        </div>

        <CVDownload />
      </div>
    </section>
  );
}
