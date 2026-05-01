import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Analiz",
  "Eduport analiz sayfası; performans, çalışma süresi ve konu ilerlemesini okunabilir widgetlarla gösterir.",
);

export default function AnalysisLayout({ children }) {
  return children;
}
