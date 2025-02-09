"use client";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitch } from "./language-switch";
import { useLanguage } from "../i18n/context";

export function Navbar() {
  const { translations } = useLanguage();

  const navItems = {
    "/": { name: translations.nav.home },
    "/projects": { name: translations.nav.projects },
    "/contact": { name: translations.nav.contact },
  };

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex justify-center items-center">
        <div className="flex gap-4 items-center">
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
