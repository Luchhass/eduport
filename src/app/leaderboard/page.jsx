"use client";

import React, { useState } from "react";
import { Trophy, TrendingUp, Award } from "lucide-react";

export default function LeaderboardPage() {
  const [sortType, setSortType] = useState("nets"); // 'nets', 'questions', 'studyTime'

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ayşe Demir",
      nets: 112,
      questions: 450,
      studyTime: 320,
      status: "Çalışıyor",
    },
    {
      id: 2,
      name: "Ali Yılmaz",
      nets: 108,
      questions: 410,
      studyTime: 280,
      status: "Mola",
    },
    {
      id: 3,
      name: "Caner Vural",
      nets: 95,
      questions: 380,
      studyTime: 350,
      status: "Çalışıyor",
    },
    {
      id: 4,
      name: "Zeynep Koç",
      nets: 92,
      questions: 350,
      studyTime: 290,
      status: "Çalışıyor",
    },
    {
      id: 5,
      name: "Mert Demir",
      nets: 85,
      questions: 310,
      studyTime: 210,
      status: "Mola",
    },
    {
      id: 6,
      name: "Deniz Yıldız",
      nets: 78,
      questions: 290,
      studyTime: 240,
      status: "Çalışıyor",
    },
  ]);

  const sortedData = [...students].sort((a, b) => b[sortType] - a[sortType]);

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-slate-900">Sınıf Sıralaması</h1>
        <p className="text-slate-500 font-medium">
          Sınıf arkadaşlarının performansını takip et.
        </p>
      </div>

      {/* MOTİVASYON KUTUCUKLARI (Ekledim) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#7A40F2] p-8 rounded-4xl text-white flex items-center justify-between shadow-xl shadow-purple-200">
          <div>
            <p className="text-purple-200 font-bold uppercase text-[10px]">
              SIRALAMAN
            </p>
            <h2 className="text-4xl font-black">#12</h2>
          </div>
          <Trophy size={48} className="text-purple-300 opacity-50" />
        </div>
        <div className="bg-white p-8 rounded-4xl border border-slate-100 flex items-center shadow-sm">
          <div className="flex items-center gap-4">
            <TrendingUp className="text-emerald-500" size={32} />
            <div>
              <p className="text-slate-400 font-bold uppercase text-[10px]">
                SIRADAKİ RAKİBİN
              </p>
              <h2 className="text-xl font-black text-slate-800">
                Zeynep Koç{" "}
                <span className="text-slate-400 font-normal">(+40 XP)</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Kontrol Paneli */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-4xl border border-slate-100 shadow-sm gap-4">
        <h2 className="font-black text-slate-800 flex items-center gap-2">
          <Trophy className="text-[#7A40F2]" /> Sıralama Kriteri:
        </h2>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-slate-50 font-bold p-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#7A40F2] w-full sm:w-auto cursor-pointer"
        >
          <option value="nets">Net Ortalamasına Göre</option>
          <option value="questions">Soru Çözme Sayısına Göre</option>
          <option value="studyTime">Ders Çalışma Süresine Göre</option>
        </select>
      </div>

      {/* Sıralama Tablosu */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        {sortedData.map((student, i) => (
          <div
            key={student.id}
            className={`flex items-center p-6 border-b border-slate-50 hover:bg-slate-50 transition-all ${i < 3 ? "bg-slate-50/80" : ""}`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center font-black text-lg rounded-2xl mr-4 ${i === 0 ? "bg-yellow-100 text-yellow-600" : i === 1 ? "bg-slate-100 text-slate-500" : i === 2 ? "bg-orange-100 text-orange-600" : "text-slate-400"}`}
            >
              {i < 3 ? <Award size={24} /> : `#${i + 1}`}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-lg">
                {student.name}
              </h3>
              <div
                className={`text-[10px] font-black uppercase ${student.status === "Çalışıyor" ? "text-emerald-500" : "text-slate-400"}`}
              >
                • {student.status}
              </div>
            </div>

            <div className="text-right">
              <p className="font-black text-slate-900 text-lg">
                {sortType === "nets" && `${student.nets} Net`}
                {sortType === "questions" && `${student.questions} Soru`}
                {sortType === "studyTime" && `${student.studyTime} Dakika`}
              </p>
              <p className="text-[10px] text-slate-400 uppercase font-black">
                {sortType === "nets"
                  ? "Başarı"
                  : sortType === "questions"
                    ? "Hacim"
                    : "Verimlilik"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
