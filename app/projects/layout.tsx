import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 