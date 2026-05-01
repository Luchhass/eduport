import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Ödevler",
  "Eduport ödevler sayfası; deneme, görev, teslim tarihi ve ilerleme durumunu düzenli takip eder.",
);

export default function ExamsLayout({ children }) {
  return children;
}
