"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";

const storageKey = 'theme-preference';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Sayfa yüklendiğinde mevcut temayı hemen uygula, flash patlamasını önle
  React.useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) || 'dark';
    document.documentElement.classList.add(savedTheme);
    
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <div className="theme-init">{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isChanging, setIsChanging] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setIsChanging(true);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Tema değişimini yerel depolamaya kaydet
    localStorage.setItem(storageKey, newTheme);
    
    // Temayı değiştir ve animasyonlarla uyumlu hale getir
    setTheme(newTheme);
    
    // Animasyonların sorunsuz çalışması için kısa bir gecikme ekle
    setTimeout(() => {
      setIsChanging(false);
    }, 300);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleThemeChange}
      className={`flex items-center justify-center transition-opacity duration-300 hover:opacity-90 ${isChanging ? 'pointer-events-none' : ''}`}
      aria-label="Toggle theme"
      disabled={isChanging}
    >
      <FaCircleHalfStroke className={`h-[14px] w-[14px] ${isChanging ? 'animate-pulse' : ''}`} />
    </button>
  );
};