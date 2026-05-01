// app/dashboard/layout.jsx

import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Panel",
  "Eduport panel alanı; role göre öğrenci, öğretmen veya okul dashboard ekranını açar.",
);

export default function DashboardLayout({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
