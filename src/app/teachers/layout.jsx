import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Öğretmenler",
  "Eduport öğretmenler sayfası; öğretmen ekleme, branş takibi ve aktiflik durumunu yönetir.",
);

export default function TeachersLayout({ children }) {
  return children;
}
