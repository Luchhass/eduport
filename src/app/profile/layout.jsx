import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Profil",
  "Eduport profil sayfası; hesap bilgilerini, tema seçimini, bildirimleri ve oturum ayarlarını yönetir.",
);

export default function ProfileLayout({ children }) {
  return children;
}
