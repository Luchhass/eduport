import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Notlar",
  "Eduport notlar sayfası; sınav sonucu, net dağılımı ve değerlendirme işlemlerini toplar.",
);

export default function GradingLayout({ children }) {
  return children;
}
