"use client";

import React from "react";
import {
  Target,
  Zap,
  Clock,
  Users,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  TrendingUp,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-zinc-900">
            Merhaba, Can! 👋
          </h1>
          <p className="text-sm md:text-base text-zinc-500 font-medium">
            Hedeflerine ulaşmak için bugün harika bir gün.
          </p>
        </div>
        <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?u=${i}`}
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="arkadaş"
              />
            ))}
          </div>
          <span className="text-[10px] md:text-xs font-black text-zinc-600">
            142 arkadaşın çalışıyor
          </span>
        </div>
      </header>

      {/* Ana İstatistikler - Responsive Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-[#7A40F2] text-white p-6 md:p-8 rounded-[2.5rem] shadow-lg shadow-purple-200">
          <Target className="mb-4 opacity-80" size={32} />
          <h3 className="text-[10px] font-bold opacity-80 uppercase tracking-widest">
            Günlük Hedef
          </h3>
          <p className="text-3xl md:text-4xl font-black mt-2">78%</p>
          <p className="text-xs text-purple-200 mt-1 font-bold">
            Daha 1.5 saat lazım!
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
          <Zap className="text-amber-500 mb-4" size={32} />
          <h3 className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
            Odak Skoru
          </h3>
          <p className="text-3xl md:text-4xl font-black text-zinc-800 mt-2">
            92
          </p>
          <p className="text-xs text-zinc-400 mt-1 font-bold">
            Harika konsantrasyon!
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
          <Clock className="text-blue-500 mb-4" size={32} />
          <h3 className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
            Toplam Süre
          </h3>
          <p className="text-3xl md:text-4xl font-black text-zinc-800 mt-2">
            42s
          </p>
          <p className="text-xs text-zinc-400 mt-1 font-bold">
            Bu haftaki verim.
          </p>
        </div>
      </section>

      {/* Analitik Bölüm */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Grafik Bölümü */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-black text-lg md:text-xl text-zinc-800 flex items-center gap-2">
              <BarChart3 className="text-purple-600" /> Gelişim Grafiğin
            </h2>
            <button className="text-[10px] md:text-xs font-black text-purple-600 bg-purple-50 px-4 py-2 rounded-xl">
              Detaylı Rapor
            </button>
          </div>
          <div className="h-48 md:h-64 bg-zinc-50 rounded-4xl border border-dashed border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xs md:text-sm">
            [Haftalık Performans Grafiği - Recharts]
          </div>
        </div>

        {/* AI ve Planlama */}
        <div className="flex flex-col gap-6">
          <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-[2.5rem]">
            <BrainCircuit className="text-emerald-400 mb-4" size={32} />
            <h3 className="font-black text-lg">AI Analizi</h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-2">
              "Matematik çözme hızın %15 arttı. Bugün TYT denemesi için çok
              uygunsun!"
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 flex-1">
            <CalendarDays className="text-rose-500 mb-4" size={32} />
            <h3 className="font-black text-zinc-800 text-sm">
              Sınav Geri Sayımı
            </h3>
            <p className="text-3xl font-black text-rose-500 mt-2">82 Gün</p>
          </div>
        </div>
      </section>

      {/* Eksik Konu Tamamlama */}
      <section className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
        <h3 className="font-black text-lg md:text-xl text-zinc-800 mb-6 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" /> Tamamlaman Gereken
          Konular
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { konu: "Türev Limit", risk: "Yüksek", renk: "text-red-500" },
            { konu: "Optik", risk: "Orta", renk: "text-amber-500" },
            { konu: "Cümlede Anlam", risk: "Düşük", renk: "text-emerald-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-bold text-zinc-800">{item.konu}</p>
                <p className={`text-[10px] font-bold ${item.renk}`}>
                  Risk: {item.risk}
                </p>
              </div>
              <button className="bg-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-sm border border-zinc-100">
                Çalış
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
