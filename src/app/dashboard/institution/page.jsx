"use client";

import {
  BarChart3,
  Building2,
  FileText,
  School,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";

const metrics = [
  { label: "Kayıtlı öğrenci", value: "1.248", sub: "4 kampüs", icon: Users },
  { label: "Öğretmen", value: "86", sub: "aktif", icon: UserPlus },
  { label: "Sınıf", value: "42", sub: "takipte", icon: School },
  { label: "Rapor", value: "18", sub: "bu hafta", icon: FileText },
];

export default function InstitutionDashboard() {
  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="grid gap-3 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="widget widget-pad">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="page-kicker">Okul paneli</p>
                <h1 className="page-title mt-2">Kurumsal kontrol alanı</h1>
                <p className="page-subtitle mt-3">
                  Öğretmen, sınıf, öğrenci ve kurum raporlarını sade bir yönetim
                  akışında takip et.
                </p>
              </div>
              <button className="btn-primary">
                <FileText size={17} /> Kurum raporu
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] bg-white/76 p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="icon-chip">
                      <item.icon size={18} />
                    </span>
                    <span className="text-xs font-black text-zinc-400">
                      {item.sub}
                    </span>
                  </div>
                  <p className="metric-mid">{item.value}</p>
                  <p className="mt-2 text-xs font-black text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="widget-brand widget-pad">
            <Building2 size={30} className="mb-5 text-purple-100" />
            <p className="text-2xl font-black leading-tight">Yönetim özeti</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
              4 kampüste panel kullanımı stabil. Öğretmen ekleme ve sınıf
              eşleştirme akışları hazır tutuluyor.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">12</p>
                <p className="text-xs font-bold text-purple-100">yeni kayıt</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">96%</p>
                <p className="text-xs font-bold text-purple-100">sistem aktif</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title">Kampüs kullanımı</p>
              <BarChart3 className="text-[#9F58FF]" size={22} />
            </div>
            <div className="flex h-48 items-end gap-2">
              {[62, 70, 58, 76, 84, 80, 90, 74, 86, 92, 78, 88].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-2xl ${
                      index === 9 ? "bg-[#9F58FF]" : "bg-[#e8d8ff]"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="widget widget-pad">
            <p className="widget-title mb-4">Sınıf genel kontrolü</p>
            <div className="grid gap-2">
              {[
                ["12-A", "Matematik", 88],
                ["12-B", "Fizik", 74],
                ["11-A", "TYT", 81],
                ["Mezun", "Genel", 69],
              ].map(([name, branch, score]) => (
                <div key={name} className="rounded-2xl bg-white/76 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-zinc-800">{name}</p>
                      <p className="text-xs font-bold text-zinc-400">{branch}</p>
                    </div>
                    <span className="font-black text-[#7A40F2]">%{score}</span>
                  </div>
                  <div className="mini-bar">
                    <div
                      className="mini-bar-fill"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget widget-pad">
            <p className="widget-title mb-4">Kurumsal işlemler</p>
            <div className="grid gap-2">
              {[
                [UserPlus, "Öğretmen ekle"],
                [School, "Sınıf oluştur"],
                [ShieldCheck, "Yetki kontrolü"],
              ].map(([Icon, label]) => (
                <button
                  key={label}
                  className="flex items-center justify-between rounded-2xl bg-white/76 p-3 text-left text-sm font-black text-zinc-700"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="text-[#9F58FF]" /> {label}
                  </span>
                  <span className="text-[#9F58FF]">→</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}