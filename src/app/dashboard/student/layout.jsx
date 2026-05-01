import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Öğrenci Paneli",
  "Eduport öğrenci paneli; hedefleri, ödevleri, çalışma akışını ve sınıf durumunu tek ekranda toplar.",
);

export default function StudentDashboardLayout({ children }) {
  return children;
}
