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
          <div
            key={index}
            className="flex flex-col space-y-2 mb-5"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">{project.description[locale]}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Live</a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">GitHub</a>
              )}
              {project.telegram && (
                <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Telegram</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
