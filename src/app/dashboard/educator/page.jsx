"use client";

import React from "react";
import {
  Target,
  Zap,
  AlertTriangle,
  BrainCircuit,
  BarChart3,
  Users,
  BookOpen,
  FileText,
} from "lucide-react";

export default function EducatorDashboard() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-zinc-900">
            Eğitmen Operasyon Paneli
          </h1>
          <p className="text-sm md:text-base text-zinc-500 font-medium">
            Sınıf risk yönetimi ve performans analitiği.
          </p>
        </div>
        <button className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 shadow-lg">
          <FileText size={18} /> Raporu İndir
        </button>
      </header>

      {/* Metrikler */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          {
            title: "Riskli Öğrenci",
            val: "7",
            icon: <AlertTriangle className="text-red-500" />,
            sub: "Acil müdahale",
          },
          {
            title: "Sınıf Ortalaması",
            val: "72.4",
            icon: <Target className="text-purple-600" />,
            sub: "Hedef: 80.0",
          },
          {
            title: "Müfredat Hızı",
            val: "%85",
            icon: <Zap className="text-amber-500" />,
            sub: "İlerleme",
          },
          {
            title: "Soru Analiz",
            val: "1.2K",
            icon: <BookOpen className="text-blue-500" />,
            sub: "Toplam soru",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-4xl shadow-sm border border-zinc-100"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
              {item.title}
            </h3>
            <p className="text-2xl md:text-3xl font-black text-zinc-800 mt-1">
              {item.val}
            </p>
            <p className="text-[10px] text-zinc-400 mt-1 font-bold">
              {item.sub}
            </p>
          </div>
        ))}
      </section>

      {/* Orta Bölüm: Analiz ve Müdahale */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        <div className="xl:col-span-2 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
          <h3 className="font-black text-lg md:text-xl text-zinc-800 mb-6 flex items-center gap-2">
            <BrainCircuit className="text-zinc-400" /> Konu Kavrama Analitiği
          </h3>
          <div className="space-y-6">
            {[
              { konu: "Fonksiyonlar", oran: 85 },
              { konu: "Modern Fizik", oran: 42 },
              { konu: "Tarih & İnkılap", oran: 78 },
              { konu: "Kimyasal Denge", oran: 55 },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <span className="w-24 md:w-32 text-[10px] md:text-xs font-bold text-zinc-600 truncate">
                  {d.konu}
                </span>
                <div className="flex-1 h-2 md:h-3 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${d.oran < 60 ? "bg-red-400" : "bg-purple-500"}`}
                    style={{ width: `${d.oran}%` }}
                  ></div>
                </div>
                <span className="text-xs font-black text-zinc-800 w-10 text-right">
                  %{d.oran}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-6 md:p-8 rounded-[2.5rem] text-white">
          <h3 className="font-black text-lg mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> Kritik Öğrenciler
          </h3>
          <div className="space-y-3">
            {[
              { name: "Ahmet K.", drop: "-%15" },
              { name: "Selin B.", drop: "-%12" },
              { name: "Caner E.", drop: "-%8" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-zinc-800 p-3 rounded-2xl"
              >
                <span className="font-bold text-sm">{s.name}</span>
                <span className="text-[10px] font-black text-red-400 bg-red-950 px-3 py-1 rounded-full">
                  {s.drop}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soru Analiz Paneli (Geri Geldi!) */}
      <section className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-zinc-100">
        <h3 className="font-black text-lg md:text-xl text-zinc-800 mb-6 flex items-center gap-2">
          <BarChart3 className="text-zinc-400" /> Sınıfın En Çok Yanlış Yaptığı
          Sorular
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { q: "Fizik - Optik (Soru 12)", rate: 68 },
            { q: "Matematik - Logaritma (Soru 5)", rate: 52 },
            { q: "Türkçe - Paragraf (Soru 21)", rate: 45 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex justify-between items-center"
            >
              <span className="text-xs md:text-sm font-bold text-zinc-700">
                {item.q}
              </span>
              <span className="text-[10px] font-black text-red-500 bg-red-100 px-3 py-1 rounded-full">
                %{item.rate} Hata
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
