"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  School,
  Trophy,
  UserPlus,
  Users,
} from "lucide-react";

import { useRole } from "@/hooks/useRole";

export const roleData = {
  student: {
    label: "Öğrenci",
    title: "Can Yılmaz",
    subtitle: "YKS hazırlık",
    icon: GraduationCap,
    progress: 74,
  },
  educator: {
    label: "Öğretmen",
    title: "Ece Karaca",
    subtitle: "Matematik",
    icon: BrainCircuit,
    progress: 68,
  },
  institution: {
    label: "Okul",
    title: "Kuzey Akademi",
    subtitle: "Kurumsal",
    icon: Building2,
    progress: 82,
  },
};

export function getMenu(role) {
  const base = [
    { label: "Panel", path: "/dashboard", icon: LayoutDashboard },
  ];

  if (role === "student") {
    return [
      ...base,
      { label: "Ödevler", path: "/exams", icon: BookOpenCheck },
      { label: "Analiz", path: "/analysis", icon: BarChart3 },
      { label: "Sınıf", path: "/leaderboard", icon: Trophy },
      { label: "İletişim", path: "/support", icon: MessageCircle },
    ];
  }

  if (role === "institution") {
    return [
      ...base,
      { label: "Öğretmen", path: "/teachers", icon: UserPlus },
      { label: "Sınıflar", path: "/classes", icon: School },
      { label: "Kişiler", path: "/students", icon: Users },
      { label: "Rapor", path: "/analysis", icon: BarChart3 },
      { label: "İletişim", path: "/support", icon: MessageCircle },
    ];
  }

  return [
    ...base,
    { label: "Ödevler", path: "/exams", icon: BookOpenCheck },
    { label: "Öğrenciler", path: "/students", icon: Users },
    { label: "Analiz", path: "/analysis", icon: BarChart3 },
    { label: "Notlar", path: "/grading", icon: ClipboardCheck },
    { label: "İletişim", path: "/support", icon: MessageCircle },
  ];
}

export default function Sidebar() {
  const pathname = usePathname();
  const role = useRole();

  if (!role) return null;

  const meta = roleData[role] || roleData.student;
  const RoleIcon = meta.icon;
  const menu = getMenu(role);

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-[var(--sidebar-desktop)] p-[var(--shell-gap)] lg:block">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-white/70 bg-white/72 p-2 shadow-xl shadow-purple-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-[#1b1623]/95 dark:shadow-black/20 lg:rounded-[1.75rem] lg:p-3">
        <Link
          href="/dashboard"
          className="mb-3 flex items-center justify-center gap-3 rounded-[1.15rem] bg-[#9F58FF] p-2.5 text-white shadow-lg shadow-purple-300/25 dark:shadow-purple-950/20 lg:justify-start lg:px-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#7A40F2]">
            <RoleIcon size={20} />
          </span>
          <span className="hidden min-w-0 lg:block">
            <span className="block truncate text-sm font-black">YKS NETWORK</span>
            <span className="block truncate text-[10px] font-bold text-purple-100">
              {meta.label} alanı
            </span>
          </span>
        </Link>

        <nav className="grid gap-1.5">
          {menu.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.path ||
              (item.path === "/dashboard" && pathname.startsWith("/dashboard")) ||
              (item.path !== "/dashboard" && pathname.startsWith(item.path));

            return (
              <Link
                key={item.path}
                href={item.path}
                title={item.label}
                className={`flex h-11 items-center justify-center gap-3 rounded-2xl text-sm font-black transition-all lg:justify-start lg:px-3 ${
                  active
                    ? "bg-[#9F58FF] text-white shadow-lg shadow-purple-200/70 dark:shadow-purple-950/25"
                    : "text-zinc-500 hover:bg-white hover:text-[#7A40F2] dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                <Icon size={19} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto grid gap-2">
          <div className="hidden rounded-2xl bg-[#f2e7ff] p-3 dark:bg-[#2a2336] lg:block">
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
            <p className="mt-3 text-xs font-semibold leading-relaxed text-zinc-500 dark:text-zinc-300">
              Hedefler, ödevler ve bildirimler buradan yönetilir.
            </p>
          </div>

          <Link
            href="/profile"
            className="flex items-center justify-center gap-2 rounded-2xl bg-white/78 p-1.5 dark:bg-[#2a2336] lg:justify-start lg:p-2"
          >
            <div className="hidden min-w-0 items-center gap-2 lg:flex">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9F58FF] text-xs font-black text-white">
                {meta.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-black text-zinc-800">
                  {meta.title}
                </p>
                <p className="truncate text-[10px] font-bold text-zinc-400">
                  {meta.subtitle}
                </p>
              </div>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9F58FF] text-xs font-black text-white lg:hidden">
              {meta.title
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
