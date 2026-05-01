"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isHiddenPage = pathname === "/" || pathname === "/login";

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("app_theme") === "dark",
    );
  }, []);

  return (
    <>
      {!isHiddenPage && <Sidebar />}
      {!isHiddenPage && <MobileHeader />}

      <div
        className={`flex min-h-screen flex-1 flex-col transition-all duration-300 ${
          !isHiddenPage
            ? "pt-[var(--mobile-header-space)] lg:pl-[var(--sidebar-desktop)] lg:pt-0"
            : ""
        }`}
      >
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
