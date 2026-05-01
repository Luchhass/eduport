import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Sınıf Durumu",
  "Eduport sınıf durumu sayfası; liderlik tablosu, rakip ve haftalık sıralama bilgisini gösterir.",
);

export default function LeaderboardLayout({ children }) {
  return children;
}
