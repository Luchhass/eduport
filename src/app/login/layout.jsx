import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Giriş",
  "Eduport giriş sayfası; öğrenci, öğretmen ve okul rolüyle ilgili panele hızlı geçiş sağlar.",
);

export default function LoginLayout({ children }) {
  return children;
}
