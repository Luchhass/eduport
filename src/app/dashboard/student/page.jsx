"use client";

import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  Target,
  Trophy,
} from "lucide-react";

const stats = [
  { label: "Günlük hedef", value: "78%", sub: "+12 soru", icon: Target },
  { label: "Odak skoru", value: "92", sub: "yüksek", icon: Flame },
  { label: "Haftalık süre", value: "42s", sub: "6 gün aktif", icon: Clock3 },
  { label: "Sıralama", value: "#12", sub: "+3 sıra", icon: Trophy },
];

const topics = [
  ["Optik", 42, "Riskli"],
  ["Türev", 58, "Tekrar"],
  ["Paragraf", 76, "İyi"],
  ["Kimya Denge", 64, "Orta"],
];

export default function StudentDashboard() {
  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="grid gap-3 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="widget widget-pad">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="page-kicker">Öğrenci paneli</p>
                <h1 className="page-title mt-2">Bugünkü akademik akış</h1>
                <p className="page-subtitle mt-3">
                  Hedef, ödev, eksik konu ve sınıf durumun tek ekranda.
                </p>
              </div>
              <span className="pill brand-pill">
                <CalendarDays size={14} /> 82 gün kaldı
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] bg-white/76 p-4"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="icon-chip">
                      <item.icon size={18} />
                    </span>
                    <span className="text-xs font-black text-emerald-500">
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
            <BrainCircuit size={30} className="mb-5 text-purple-100" />
            <p className="text-2xl font-black leading-tight">AI çalışma özeti</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
              Matematik hızın iyi. Bugün optik tekrarını 25 dakikalık iki blokla
              toparla, ardından kısa TYT denemesi çöz.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">34</p>
                <p className="text-xs font-bold text-purple-100">soru kaldı</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">2</p>
                <p className="text-xs font-bold text-purple-100">risk konusu</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[0.95fr_1.05fr_0.75fr]">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title">Ödev akışı</p>
              <BookOpenCheck className="text-[#9F58FF]" size={22} />
            </div>
            <div className="grid gap-2">
              {[
                ["TYT Matematik Denemesi", "34/40", 85],
                ["Fizik Optik Testi", "8/20", 40],
                ["Paragraf Hız Seti", "18/24", 75],
              ].map(([title, count, progress]) => (
                <div key={title} className="rounded-2xl bg-white/76 p-3">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="truncate text-sm font-black text-zinc-800">
                      {title}
                    </p>
                    <span className="text-xs font-black text-[#7A40F2]">
                      {count}
                    </span>
                  </div>
                  <div className="mini-bar">
                    <div
                      className="mini-bar-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="widget-title">Haftalık performans</p>
                <p className="text-xs font-bold text-zinc-400">
                  Net ve süre dengesi
                </p>
              </div>
              <BarChart3 className="text-[#9F58FF]" size={22} />
            </div>
            <div className="flex h-48 items-end gap-2">
              {[38, 46, 52, 41, 66, 74, 82, 72, 88, 64, 78, 92].map(
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
            <p className="widget-title mb-4">Konu durumu</p>
            <div className="grid gap-2">
              {topics.map(([name, progress, status]) => (
                <div key={name} className="rounded-2xl bg-white/76 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-black text-zinc-800">
                      {name}
                    </span>
                    <span className="text-xs font-black text-zinc-400">
                      {status}
                    </span>
                  </div>
                  <div className="mini-bar">
                    <div
                      className={`h-full rounded-full ${
                        progress < 55 ? "bg-amber-400" : "bg-[#9F58FF]"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-3 lg:grid-cols-3">
          {[
            ["Bugünün planı", "2 tekrar, 1 deneme, 1 destek sorusu", CheckCircle2],
            ["Sınıf hedefi", "İlk 10 için 40 XP kaldı", Trophy],
            ["Yaklaşan deneme", "Cumartesi 10:00 TYT genel", CalendarDays],
          ].map(([title, text, Icon]) => (
            <div key={title} className="widget widget-pad">
              <Icon className="mb-4 text-[#9F58FF]" size={24} />
              <p className="widget-title">{title}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-500">
                {text}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}