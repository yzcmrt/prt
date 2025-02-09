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
    <small className="block lg:mt-24 mt-16">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap">
          <time className="text-[#1C1C1C] dark:text-[#D4D4D4]">© {YEAR}</time>
          <span className="text-neutral-400 dark:text-neutral-600 text-sm">
            Built with Next.js & Vercel · Powered by cursor.ai · Thanks to 
            <a 
              href="https://github.com/1msirius" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-600 text-sm"
            >
              @1msirius
            </a>
          </span>
        </div>
        <SocialLinks />
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}
