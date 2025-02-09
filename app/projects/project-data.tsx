export interface Project {
  title: string;
  year: number;
  description: {
    en: string;
    tr: string;
  };
  url: string;
}

export const projects: Project[] = [
  {
    title: "Bull Scan",
    year: 2024,
    description: {
      en: "Tracking system for coins in the sui network",
      tr: "Sui ağındaki coinler için takip sistemi"
    },
    url: "https://bs-product.vercel.app/",
  },
  {
    title: "Telegram Mini App",
    year: 2024,
    description: {
      en: "Telegram mini app frontend",
      tr: "Telegram mini uygulama arayüzü"
    },
    url: "https://lunark.vercel.app/",
  },
];
