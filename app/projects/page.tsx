"use client";
import Link from "next/link";
import { projects } from "./project-data";
import { useLanguage } from '../i18n/context';

export default function Projects() {
  const { translations, locale } = useLanguage();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{translations.projects.title}</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description[locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
