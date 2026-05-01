import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Öğrenciler",
  "Eduport öğrenciler sayfası; portfolyo, çalışma temposu ve ders kırılımını takip eder.",
);

export default function StudentsLayout({ children }) {
  return children;
}
