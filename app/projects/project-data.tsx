export interface Project {
  title: string;
  year: number;
  description: {
    en: string;
    tr: string;
  };
  url: string;
  github?: string;
  telegram?: string;
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
    github: "https://github.com/yzcmrt/bs-product",
  },
  {
    title: "Telegram Mini App 2024",
    year: 2024,
    description: {
      en: "Telegram mini app frontend",
      tr: "Telegram mini uygulama arayüzü"
    },
    url: "https://lunark.vercel.app/",
    telegram: "https://t.me/AstralisCoin_Bot",
    github: "https://github.com/yzcmrt/template"
  },
  {
    title: "Telegram Mini App 2025",
    year: 2025,
    description: {
      en: "Telegram mini app frontend",
      tr: "Telegram mini uygulama arayüzü",
    },
    url: "https://template-orpin-delta.vercel.app/",
    telegram: "https://t.me/loremipsumcoinbot",
    github: "https://github.com/yzcmrt/lunark",
  },
  {
    title: "Restorant Bulucu",
    year: 2025,
    description: {
      en: "Restaurant finder focused on Istanbul with detailed search",
      tr: "İstanbul özelinde detaylı restoran arama",
    },
    url: "https://rest-lovat-delta.vercel.app/",
    github: "https://github.com/yzcmrt/rest",
  },
];
