"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LineChart,
  LogOut,
  Menu,
  X,
  BrainCircuit,
  BookOpenCheck,
  Database,
  Trophy,
} from "lucide-react";

// Hook importu
import { useRole } from "@/hooks/useRole";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const role = useRole(); // Hook ile dinamik rol çekimi
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Rol henüz yüklenmediyse boş render
  if (!role) return null;

  const getMenuItems = (role) => {
    const commonItems = [
      {
        label: "Akademik Panel",
        path: "/dashboard",
        icon: <LayoutDashboard size={22} />,
        desc: "Genel Özet",
      },
    ];

    if (role === "student") {
      return [
        ...commonItems,
        {
          label: "Ödevler",
          path: "/exams",
          icon: <BookOpenCheck size={22} />,
          desc: "Deneme & Sınavlar",
        },
        {
          label: "Gelişim Raporları",
          path: "/analysis",
          icon: <LineChart size={22} />,
          desc: "Kör Uçuşuna Son",
        },
        {
          label: "Liderlik Tablosu",
          path: "/leaderboard",
          icon: <Trophy size={22} />,
          desc: "Sıralama & Rekabet",
        },
        {
          label: "İletişim",
          path: "/support",
          icon: <BrainCircuit size={22} />,
          desc: "Eğitmen Desteği",
        },
      ];
    } else {
      return [
        ...commonItems,
        {
          label: "Ödevler",
          path: "/exams",
          icon: <BookOpenCheck size={22} />,
          desc: "Müfredat Takibi",
        },
        {
          label: "Öğrenci Listesi",
          path: "/students",
          icon: <Users size={22} />,
          desc: "Öğrenci Portfolyosu",
        },
        {
          label: "Gelişim Raporları",
          path: "/analysis",
          icon: <LineChart size={22} />,
          desc: "Performans Takibi",
        },
        {
          label: "Sınav & Sonuç İşlemleri",
          path: "/grading",
          icon: <Database size={22} />,
          desc: "Not Girişi & Listeleme",
        },
        {
          label: "İletişim",
          path: "/support",
          icon: <BrainCircuit size={22} />,
          desc: "Rehberlik Kanalı",
        },
      ];
    }
  };

  const menuItems = getMenuItems(role);

  const handleLogout = () => {
    localStorage.removeItem("app_user_role");
    router.push("/");
  };

  const NavContent = ({ mobile = false }) => (
    <>
      <div
        className={`flex items-center gap-3 px-2 ${mobile ? "mb-8" : "mb-10"}`}
      >
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
          <BrainCircuit size={28} className="text-[#7A40F2]" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white">
            YKS NETWORK
          </span>
          <span className="text-[10px] font-bold text-purple-200 uppercase tracking-[0.2em]">
            {role === "student" ? "ÖĞRENCİ PANELİ" : "EĞİTMEN PANELİ"}
          </span>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item, i) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              key={i}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group flex items-center gap-4 p-4 rounded-[1.8rem] transition-all duration-300 ${isActive ? "bg-white text-[#7A40F2] shadow-xl scale-[1.02]" : "text-purple-100 hover:bg-white/10"}`}
            >
              <div className={isActive ? "text-[#7A40F2]" : "text-purple-300"}>
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm">{item.label}</span>
                <span
                  className={`text-[9px] font-medium opacity-70 ${isActive ? "text-purple-400" : "text-purple-200"}`}
                >
                  {item.desc}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 flex flex-col gap-4">
        <div className="bg-white/10 p-5 rounded-[1.8rem] border border-white/5">
          <span className="text-[10px] font-bold text-purple-200 uppercase mb-2 block">
            {role === "student" ? "ÖDEV TAMAMLAMA" : "ÖDEV TAMAMLAMA ORANI"}
          </span>
          <div className="flex justify-between items-end">
            <div className="text-2xl font-black text-white">
              {role === "student" ? "74%" : "88%"}
            </div>
            <span className="text-[10px] font-bold text-purple-300 mb-1">
              {role === "student" ? "Hedefe yakın" : "Sınıf Ortalaması"}
            </span>
          </div>
          <div className="w-full h-1.5 bg-purple-900/30 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full ${role === "student" ? "bg-amber-400" : "bg-emerald-400"}`}
              style={{ width: role === "student" ? "74%" : "88%" }}
            />
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-purple-200 hover:text-white p-2 text-xs font-bold uppercase tracking-widest cursor-pointer w-full"
        >
          <LogOut size={16} /> <span>Çıkış Yap</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden lg:flex h-screen p-6 fixed top-0 left-0 z-50 w-80">
        <aside className="w-full bg-[#7A40F2] p-8 text-white flex flex-col rounded-[2.5rem] shadow-2xl shadow-purple-500/20 h-full">
          <NavContent />
        </aside>
      </div>

      <div className="lg:hidden fixed top-0 left-0 w-full z-100 p-4">
        <div className="bg-[#7A40F2] rounded-3xl p-4 flex justify-between items-center shadow-xl border border-white/10">
          <span className="font-black text-white ml-2">YKS NETWORK</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-white/10 rounded-xl text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#7A40F2] z-[-1] p-6 pt-28 flex flex-col">
            <NavContent mobile={true} />
          </div>
        )}
      </div>
    </>
  );
}
