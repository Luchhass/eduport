"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHiddenPage = pathname === "/" || pathname === "/login";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        {!isHiddenPage && <Sidebar />}

        <div
          className={`flex flex-col flex-1 min-h-screen bg-[#F0F2F5] transition-all duration-300 ${!isHiddenPage ? "lg:ml-64" : "ml-0"}`}
        >
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
