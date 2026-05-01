"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Check,
  GraduationCap,
  LogOut,
  Mail,
  Moon,
  Save,
  SlidersHorizontal,
  SunMedium,
  Target,
  UserRound,
} from "lucide-react";

import { useRole } from "@/hooks/useRole";

const roleLabels = {
  student: "Öğrenci",
  educator: "Öğretmen",
  institution: "Okul",
};

export default function ProfilePage() {
  const role = useRole();
  const router = useRouter();
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("app_theme") === "dark" ? "dark" : "light";
  });
  const [alerts, setAlerts] = useState([true, true, false]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("app_theme", theme);
  }, [theme]);

  const user = useMemo(() => {
    if (role === "educator") {
      return ["Ece Karaca", "Matematik öğretmeni", "EK"];
    }
    if (role === "institution") {
      return ["Kuzey Akademi", "Kurumsal hesap", "KA"];
    }
    return ["Can Yılmaz", "YKS öğrencisi", "CY"];
  }, [role]);

  if (!role) return null;

  const handleLogout = () => {
    localStorage.removeItem("app_user_role");
    document.cookie = "app_user_role=; path=/; max-age=0; SameSite=Lax";
    window.dispatchEvent(new Event("storage"));
    router.push("/");
  };

  return (
    <div className="app-page dense-stack dark:text-zinc-100">
      <section className="grid gap-3 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
        <aside className="widget-brand widget-pad h-fit">
          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-[1.6rem] bg-white text-3xl font-black text-[#7A40F2]">
              {user[2]}
            </div>
            <div>
              <p className="text-2xl font-black">{user[0]}</p>
              <p className="mt-1 text-sm font-semibold text-purple-100">
                {user[1]}
              </p>
              <span className="pill mt-4 bg-white/15 text-white">
                {roleLabels[role]}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
            {[
              ["Haftalık hedef", "42 saat"],
              ["Aktif plan", role === "institution" ? "Kurum kontrol" : "TYT + AYT"],
              ["Tema", theme === "dark" ? "Koyu" : "Açık"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/14 p-3">
                <p className="text-xs font-bold text-purple-100">{label}</p>
                <p className="mt-1 text-lg font-black">{value}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="dense-grid">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="page-kicker">Ayarlar</p>
                <h1 className="mt-2 text-4xl font-black leading-none text-zinc-950">
                  Profil ve kişiselleştirme
                </h1>
              </div>
              <button className="btn-primary">
                <Save size={17} /> Kaydet
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <label>
                <span className="tiny-label mb-2 block">Ad / kurum</span>
                <input className="input-field px-4" defaultValue={user[0]} />
              </label>
              <label>
                <span className="tiny-label mb-2 block">Rol</span>
                <div className="input-field flex items-center gap-2 px-4">
                  <GraduationCap size={18} className="text-[#9F58FF]" />
                  {roleLabels[role]}
                </div>
              </label>
              <label>
                <span className="tiny-label mb-2 block">E-posta</span>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    className="input-field px-4 pl-11"
                    defaultValue="panel@yksnetwork.com"
                  />
                </div>
              </label>
              <label>
                <span className="tiny-label mb-2 block">Ana hedef</span>
                <div className="relative">
                  <Target
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    className="input-field px-4 pl-11"
                    defaultValue={
                      role === "institution" ? "Kurum yönetimi" : "Haftalık hedef"
                    }
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div className="widget widget-pad">
              <div className="mb-4 flex items-center gap-2">
                <SlidersHorizontal className="text-[#9F58FF]" size={22} />
                <p className="widget-title">Tema</p>
              </div>
              <div className="grid gap-2">
                {[
                  ["light", "Açık", SunMedium],
                  ["dark", "Koyu", Moon],
                ].map(([id, label, Icon]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTheme(id)}
                    className={`flex items-center justify-between rounded-2xl p-3 text-sm font-black ${
                      theme === id
                        ? "bg-[#f2e7ff] text-[#7A40F2] dark:!bg-[#9F58FF] dark:!text-white"
                        : "bg-white/70 dark:bg-[#2a2336] dark:text-zinc-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={17} /> {label}
                    </span>
                    {theme === id && <Check size={17} />}
                  </button>
                ))}
              </div>
            </div>

            <div className="widget widget-pad">
              <div className="mb-4 flex items-center gap-2">
                <UserRound className="text-[#9F58FF]" size={22} />
                <p className="widget-title">Rol alanı</p>
              </div>
              <div className="rounded-2xl bg-[#f2e7ff] p-4 dark:bg-[#2a2336]">
                <p className="metric-mid">{roleLabels[role]}</p>
                <p className="mt-2 text-sm font-semibold text-zinc-500 dark:text-zinc-300">
                  Menü ve dashboard bu role göre düzenlenir.
                </p>
              </div>
            </div>
          </div>

          <div className="widget widget-pad">
            <div className="mb-4 flex items-center gap-2">
              <Bell className="text-[#9F58FF]" size={22} />
              <p className="widget-title">Bildirimler</p>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              {["Ödev hatırlatma", "Haftalık rapor", "Destek yanıtı"].map(
                (label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() =>
                      setAlerts((prev) =>
                        prev.map((item, i) => (i === index ? !item : item)),
                      )
                    }
                    className="flex items-center justify-between rounded-2xl bg-white/76 p-3 text-sm font-black text-zinc-700 dark:bg-[#2a2336] dark:text-zinc-100"
                  >
                    {label}
                    <span
                      className={`flex h-6 w-11 items-center rounded-full p-1 ${
                        alerts[index] ? "bg-[#9F58FF]" : "bg-zinc-300"
                      }`}
                    >
                      <span
                        className={`h-4 w-4 rounded-full bg-white transition-transform ${
                          alerts[index] ? "translate-x-5" : ""
                        }`}
                      />
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>
        </section>
      </section>

      <section className="widget widget-pad flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="widget-title">Oturum</p>
          <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-300">
            Çıkış yapınca rol bilgisi temizlenir ve giriş ekranına dönersin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="btn-danger"
        >
          <LogOut size={17} /> Çıkış yap
        </button>
      </section>
    </div>
  );
}
