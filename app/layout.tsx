import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";
import { LanguageProvider } from './i18n/context';
import { MatrixBackground } from "./components/matrix-intro";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  alternates: {
    languages: {
      en: metaData.baseUrl,
      tr: metaData.baseUrl,
    },
  },
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.title,
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    type: "website",
  },
};

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable, 'dark')}
      suppressHydrationWarning
    >
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 pb-16">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('theme-preference') || 'dark';
                var d = document.documentElement;
                d.classList.remove('light','dark');
                d.classList.add(s);
                var l = localStorage.getItem('preferred-locale') || 'en';
                d.lang = l;
              } catch (e) {}
            `,
          }}
        />
        <LanguageProvider>
          <ThemeProvider>
            <MatrixBackground />
            <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
