import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "İletişim",
  "Eduport iletişim sayfası; destek taleplerini ve öğrenci-öğretmen yanıt akışını düzenler.",
);

export default function SupportLayout({ children }) {
  return children;
}
