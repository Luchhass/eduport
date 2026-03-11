"use client";

import React, { useState } from "react";
import { Trash2, Save, BookOpen, ChevronRight } from "lucide-react";

export default function EducatorDashboard() {
  const [selectedCourse, setSelectedCourse] = useState("Matematik");

  // Örnek Veri Seti - Sınıf Performans Verileri
  const [performanceData, setPerformanceData] = useState([
    { id: 1, name: "Caner Vural", net: 32, basari: 85, trend: "+2.1" },
    { id: 2, name: "Zeynep Koç", net: 28, basari: 75, trend: "+0.5" },
    { id: 3, name: "Mert Demir", net: 15, basari: 40, trend: "-1.2" },
    { id: 4, name: "Ayşe Yılmaz", net: 25, basari: 68, trend: "+1.0" },
    { id: 5, name: "Kerem Aksoy", net: 38, basari: 95, trend: "+0.8" },
    { id: 6, name: "Deniz Yıldız", net: 20, basari: 55, trend: "-0.5" },
  ]);

  const deleteRow = (id) =>
    setPerformanceData(performanceData.filter((row) => row.id !== id));

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Ders Seçim Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-800">
            Ders Performans Yönetimi
          </h1>
          <p className="text-slate-400 font-medium text-sm">
            Tüm sınıfın notlarını tek bir panelden düzenle.
          </p>
        </div>
        <div className="relative">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="appearance-none bg-slate-50 font-bold p-4 pr-10 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#7A40F2] cursor-pointer"
          >
            <option>Matematik</option>
            <option>Türkçe</option>
            <option>Fizik</option>
            <option>Kimya</option>
          </select>
          <ChevronRight
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none rotate-90"
            size={16}
          />
        </div>
      </div>

      {/* Analitik Tablo */}
      <div className="bg-white rounded-4xl border border-slate-100 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
            <BookOpen className="text-[#7A40F2]" /> {selectedCourse} - Sınıf Not
            Tablosu
          </h2>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg">
            {performanceData.length} ÖĞRENCİ LİSTELENDİ
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] uppercase font-black text-slate-400 tracking-widest border-b border-slate-100">
                <th className="pb-4">Öğrenci Adı</th>
                <th className="pb-4">Net Sayısı</th>
                <th className="pb-4">Başarı %</th>
                <th className="pb-4">Trend</th>
                <th className="pb-4 text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {performanceData.map((row) => (
                <tr key={row.id} className="text-sm">
                  <td className="py-5 font-bold text-slate-800">{row.name}</td>
                  <td className="py-5">
                    <input
                      type="number"
                      defaultValue={row.net}
                      className="w-20 p-2 bg-slate-50 rounded-lg border border-slate-200 font-bold text-center focus:border-[#7A40F2] outline-none"
                    />
                  </td>
                  <td className="py-5 font-bold text-[#7A40F2]">
                    %{row.basari}
                  </td>
                  <td
                    className={`py-5 font-bold ${row.trend.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {row.trend}
                  </td>
                  <td className="py-5 text-center">
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kaydet Butonu */}
        <div className="mt-8 flex justify-end">
          <button className="flex items-center gap-2 bg-[#7A40F2] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#6533cc] shadow-lg shadow-purple-200 transition-all">
            <Save size={18} /> Tüm Değişiklikleri Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}
