import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Sınıflar",
  "Eduport sınıf kontrol sayfası; sınıf akışını, öğrenci yoğunluğunu ve genel durumu takip eder.",
);

export default function ClassesLayout({ children }) {
  return children;
}
