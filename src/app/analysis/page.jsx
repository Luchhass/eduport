"use client";

import React from "react";
import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Users,
  BookOpen,
  Target,
  GraduationCap,
  Clock,
  PieChart,
} from "lucide-react";
// Hook importu
import { useRole } from "@/hooks/useRole";

export default function AnalysisPage() {
  const role = useRole();
  const isStudent = role === "student";

  // Rol henüz yüklenmediyse bekle
  if (!role) return null;

  // Veri Setleri
  const studentMetrics = [
    {
      label: "Net Ortalaması",
      value: "84.5",
      change: "+4.2",
      icon: <TrendingUp size={20} />,
    },
    {
      label: "Soru Çözüm Hızı",
      value: "48 sn",
      change: "-5 sn",
      icon: <Clock size={20} />,
    },
    {
      label: "Konu Hakimiyeti",
      value: "%78",
      change: "+3%",
      icon: <PieChart size={20} />,
    },
  ];

  const educatorMetrics = [
    {
      label: "Aktif Öğrenci",
      value: "128",
      trend: "stabil",
      icon: <Users size={20} />,
    },
    {
      label: "Riskli Öğrenci",
      value: "7",
      trend: "acil",
      icon: <AlertTriangle size={20} />,
    },
    {
      label: "Müfredat İlerleme",
      value: "%82",
      trend: "pozitif",
      icon: <Target size={20} />,
    },
  ];

  const metrics = isStudent ? studentMetrics : educatorMetrics;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Üst Bilgi */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">
            {isStudent ? "Kişisel Gelişim Paneli" : "Sınıf Analitik Kontrol"}
          </h1>
          <p className="text-slate-500 font-medium">
            {isStudent
              ? "Veriye dayalı başarı tahminleme."
              : "Öğrenci risk yönetimi ve sınıf takibi."}
          </p>
        </div>
        <button className="bg-[#7A40F2] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#6335c9] transition-all shadow-lg">
          Detaylı Raporu İndir
        </button>
      </header>

      {/* İstatistik Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-50 text-[#7A40F2] p-4 rounded-2xl">
                {m.icon}
              </div>
              <div>
                <div className="text-2xl font-black text-slate-800">
                  {m.value}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            </div>
            {m.change && (
              <div className="text-xs font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                {m.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Grafik ve Analiz Alanı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="font-black text-xl mb-6 flex items-center gap-2 text-slate-800">
              <BarChart3 className="text-[#7A40F2]" />
              {isStudent ? "Performans Trendi" : "Sınıf Not Dağılımı"}
            </h3>
            <div className="h-64 flex items-end gap-4 w-full bg-slate-50 rounded-2xl p-4">
              <div className="w-full h-full border-b-2 border-l-2 border-slate-200 flex items-end gap-2">
                {[40, 60, 55, 70, 85, 90, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#7A40F2]/20 rounded-t-xl hover:bg-[#7A40F2]/40 transition-all"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aksiyon/Uyarı Paneli */}
        <div className="space-y-6">
          <div
            className={`p-8 rounded-[2.5rem] text-white ${isStudent ? "bg-[#7A40F2]" : "bg-red-500"}`}
          >
            <h3 className="font-black text-xl mb-4 flex items-center gap-2">
              <AlertTriangle /> {isStudent ? "Odak Noktası" : "Acil Müdahale"}
            </h3>
            <p className="text-white/80 text-sm mb-6 font-medium">
              {isStudent
                ? "Zayıf olduğun konulara yönelik 3 temel adım:"
                : "Performans düşüşü yaşayan öğrenciler:"}
            </p>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all cursor-pointer"
                >
                  <div className="font-bold text-sm">
                    {isStudent
                      ? "Limit & Süreklilik Tekrarı"
                      : "Öğrenci: Ahmet Yılmaz"}
                  </div>
                  <div className="text-[10px] opacity-70 mt-1">
                    {isStudent ? "Konu hakimiyeti: %45" : "Düşüş trendi: -%12"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detaylı Tablo Alanı */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-xl mb-6 text-slate-800">
          {isStudent ? "Detaylı Konu Analizi" : "Öğrenci Müfredat Takibi"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 text-xs font-bold uppercase border-b border-slate-100">
                <th className="pb-4">
                  {isStudent ? "Konu Adı" : "Öğrenci Adı"}
                </th>
                <th className="pb-4">Başarı Oranı</th>
                <th className="pb-4">
                  {isStudent ? "Soru Sayısı" : "Katılım Oranı"}
                </th>
                <th className="pb-4">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {["Fonksiyonlar", "Optik", "Tarih & İnkılap"].map((konu, i) => (
                <tr key={i} className="text-sm font-bold text-slate-700">
                  <td className="py-4">{konu}</td>
                  <td className="py-4 text-[#7A40F2]">{80 - i * 15}%</td>
                  <td className="py-4 text-slate-500">124</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] ${i === 1 ? "bg-red-50 text-red-500" : "bg-slate-100"}`}
                    >
                      {i === 1 ? "Müdahale Gerekli" : "İyi"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
