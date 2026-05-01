import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Okul Paneli",
  "Eduport okul paneli; öğretmen, sınıf, öğrenci ve kurumsal rapor akışını kompakt biçimde izler.",
);

export default function InstitutionDashboardLayout({ children }) {
  return children;
}
