"use client";

import {
  AlertTriangle,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  ClipboardCheck,
  FileText,
  Target,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Aktif öğrenci", value: "128", sub: "6 sınıf", icon: Users },
  { label: "Riskli öğrenci", value: "7", sub: "müdahale", icon: AlertTriangle },
  { label: "Ödev katılımı", value: "88%", sub: "+4%", icon: BookOpenCheck },
  { label: "Sınıf ort.", value: "72.4", sub: "hedef 80", icon: Target },
];

export default function EducatorDashboard() {
  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="widget widget-pad">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="page-kicker">Öğretmen paneli</p>
                <h1 className="page-title mt-2">Sınıf operasyon merkezi</h1>
                <p className="page-subtitle mt-3">
                  Risk, katılım, not ve konu kavrama durumunu yoğun panellerde
                  yönet.
                </p>
              </div>
              <button className="btn-primary">
                <FileText size={17} /> Rapor
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
            <BrainCircuit size={30} className="mb-5 text-purple-100" />
            <p className="text-2xl font-black leading-tight">Sınıf içgörüsü</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
              Modern Fizik ve Kimyasal Denge başlıklarında düşüş var. 7 öğrenciye
              kısa müdahale planı öneriliyor.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">4</p>
                <p className="text-xs font-bold text-purple-100">kritik konu</p>
              </div>
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-2xl font-black">31</p>
                <p className="text-xs font-bold text-purple-100">
                  cevap bekler
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1fr_0.9fr_0.8fr]">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title">Konu kavrama</p>
              <BarChart3 className="text-[#9F58FF]" size={22} />
            </div>
            <div className="grid gap-3">
              {[
                ["Fonksiyonlar", 85],
                ["Modern Fizik", 42],
                ["Tarih & İnkılap", 78],
                ["Kimyasal Denge", 55],
              ].map(([name, value]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm font-black text-zinc-700">
                    <span>{name}</span>
                    <span>%{value}</span>
                  </div>
                  <div className="mini-bar">
                    <div
                      className={`h-full rounded-full ${
                        value < 60 ? "bg-amber-400" : "bg-[#9F58FF]"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title">Kritik öğrenciler</p>
              <AlertTriangle className="text-amber-500" size={22} />
            </div>
            <div className="grid gap-2">
              {[
                ["Ahmet K.", "-%15", "Matematik"],
                ["Selin B.", "-%12", "Fizik"],
                ["Caner E.", "-%8", "Kimya"],
                ["Mert D.", "-%7", "Paragraf"],
              ].map(([name, drop, subject]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white/76 p-3"
                >
                  <div>
                    <p className="text-sm font-black text-zinc-800">{name}</p>
                    <p className="text-xs font-bold text-zinc-400">{subject}</p>
                  </div>
                  <span className="pill bg-red-50 text-red-500">{drop}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="widget widget-pad">
            <p className="widget-title mb-4">Hızlı işlemler</p>
            <div className="grid gap-2">
              {[
                [ClipboardCheck, "Not girişi"],
                [BookOpenCheck, "Ödev oluştur"],
                [Zap, "Müdahale planı"],
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