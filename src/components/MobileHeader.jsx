"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { getMenu, roleData } from "@/components/Sidebar";
import { useRole } from "@/hooks/useRole";

export default function MobileHeader() {
  const pathname = usePathname();
  const role = useRole();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!role) return null;

  const meta = roleData[role] || roleData.student;
  const RoleIcon = meta.icon;
  const menu = getMenu(role);

  return (
    <div className="lg:hidden">
      {open && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-purple-950/12 backdrop-blur-[6px] dark:bg-black/28"
        />
      )}

      <header
        className={`fixed inset-x-3 top-3 z-50 overflow-hidden rounded-[1.45rem] bg-white/82 shadow-2xl shadow-purple-200/35 backdrop-blur-2xl transition-all duration-300 dark:bg-[#1b1623]/92 dark:shadow-black/35 ${
          open ? "h-[calc(100dvh-1.5rem)]" : "h-[4.15rem]"
        }`}
      >
        <div className="flex h-[4.15rem] items-center justify-between px-3">
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-2.5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#9F58FF] text-white shadow-lg shadow-purple-300/35">
              <RoleIcon size={21} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black text-zinc-950 dark:text-white">
                YKS NETWORK
              </span>
              <span className="block truncate text-[11px] font-bold text-zinc-500 dark:text-zinc-300">
                {meta.label} alanı
              </span>
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1e7ff] text-[#7A40F2] shadow-sm transition-colors dark:bg-[#2a2336] dark:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`flex h-[calc(100%-4.15rem)] flex-col px-3 pb-3 transition-opacity duration-200 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <nav className="grid gap-2 pt-1">
            {menu.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.path ||
                (item.path === "/dashboard" &&
                  pathname.startsWith("/dashboard")) ||
                (item.path !== "/dashboard" && pathname.startsWith(item.path));

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex h-12 items-center gap-3 rounded-2xl px-3 text-sm font-black transition-all ${
                    active
                      ? "bg-[#9F58FF] text-white shadow-lg shadow-purple-200/50 dark:shadow-purple-950/20"
                      : "bg-[#f4ecff] text-zinc-700 hover:bg-[#efe1ff] dark:bg-[#362d46] dark:text-zinc-100"
                  }`}
                >
                  <Icon size={19} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto grid gap-2">
            <div className="rounded-2xl bg-[#f4ecff] p-3 dark:bg-[#362d46]">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-wide text-zinc-500 dark:text-zinc-300">
                  Haftalık akış
                </p>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-[#7A40F2] dark:bg-white/10 dark:text-white">
                  {meta.progress}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/80 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-[#9F58FF]"
                  style={{ width: `${meta.progress}%` }}
                />
              </div>
            </div>

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-[#f4ecff] p-2.5 dark:bg-[#362d46]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9F58FF] text-xs font-black text-white">
                {meta.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-black text-zinc-900 dark:text-white">
                  {meta.title}
                </p>
                <p className="truncate text-xs font-bold text-zinc-500 dark:text-zinc-300">
                  {meta.subtitle}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
