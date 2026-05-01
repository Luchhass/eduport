import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import AppShell from "@/components/AppShell";
import { siteConfig } from "@/lib/metadata";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Eğitim Takip Platformu`,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: [
    "Eduport",
    "YKS takip",
    "öğrenci paneli",
    "öğretmen paneli",
    "okul yönetimi",
    "eğitim analitiği",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Eğitim Takip Platformu`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Eğitim Takip Platformu`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${geistMono.variable} flex min-h-screen overflow-x-hidden antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
