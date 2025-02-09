"use client";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import { useLanguage } from "../i18n/context";
import { metaData } from "../config";

export function Navbar() {
  const { translations } = useLanguage();

  const navItems = {
    "/": { name: translations.nav.home },
    "/projects": { name: translations.nav.projects },
    "/contact": { name: translations.nav.contact },
  };

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:opacity-80"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
