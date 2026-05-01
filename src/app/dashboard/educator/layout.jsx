import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Öğretmen Paneli",
  "Eduport öğretmen paneli; sınıf operasyonunu, öğrenci risklerini ve ödev katılımını yönetir.",
);

export default function EducatorDashboardLayout({ children }) {
  return children;
}
