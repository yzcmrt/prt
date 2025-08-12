"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-2 mt-auto border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0D0208] fixed bottom-0 left-0 right-0 z-10 text-sm">
      <div className="max-w-[640px] mx-auto px-6 sm:px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <time className="text-[#1C1C1C] dark:text-[#D4D4D4]">© {YEAR}</time>
            <span className="text-neutral-400 dark:text-neutral-600">Built with Next.js & Vercel</span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
