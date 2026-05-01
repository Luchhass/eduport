export const siteConfig = {
  name: "Eduport",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eduport.app",
  description:
    "Eduport, öğrenci hedeflerini, ödev akışını, sınıf performansını ve okul operasyonlarını tek panelde toplayan modern eğitim takip platformudur.",
};

export function createPageMetadata(title, description) {
  const pageDescription = description || siteConfig.description;
  const fullTitle = `${siteConfig.name} | ${title}`;

  return {
    title,
    description: pageDescription,
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: pageDescription,
    },
  };
}
