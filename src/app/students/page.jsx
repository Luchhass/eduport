"use client";

import React, { useState } from "react";
import {
  X,
  Clock,
  Target,
  BookOpen,
  BarChart3,
  TrendingUp,
  Award,
  Edit3,
} from "lucide-react";

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students] = useState([
    {
      id: 1,
      name: "Ali Yılmaz",
      class: "8-B",
      avg: "88",
      totalNet: 342,
      studyHours: 124,
      trend: "+12",
      strength: "Matematik",
    },
    {
      id: 2,
      name: "Ayşe Demir",
      class: "8-B",
      avg: "92",
      totalNet: 385,
      studyHours: 145,
      trend: "+8",
      strength: "Türkçe",
    },
    {
      id: 3,
      name: "Caner Vural",
      class: "8-A",
      avg: "74",
      totalNet: 290,
      studyHours: 98,
      trend: "-3",
      strength: "Fizik",
    },
  ]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Öğrenciler</h1>
        <p className="text-slate-500 font-medium">
          Sınıf genelini kartlar üzerinden takip et.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            onClick={() => setSelectedStudent(student)}
            className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-purple-50 text-[#7A40F2] rounded-3xl flex items-center justify-center font-black text-2xl mb-4">
              {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h3 className="font-black text-lg text-slate-800">
              {student.name}
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 mb-6">
              {student.class}
            </p>
            <div className="mt-auto w-full pt-4 border-t border-slate-50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500">
                Başarı:{" "}
                <strong className="text-emerald-500">%{student.avg}</strong>
              </span>
              <div className="bg-slate-50 p-2 rounded-full group-hover:bg-[#7A40F2] group-hover:text-white">
                <BookOpen size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-10 w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  {selectedStudent.name}
                </h2>
                <div className="flex gap-2 mt-2">
                  <span className="bg-purple-100 text-[#7A40F2] px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {selectedStudent.class}
                  </span>
                  <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
                    En İyi: {selectedStudent.strength}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Analitik Detaylar */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Ort. Başarı",
                  val: "%" + selectedStudent.avg,
                  icon: BarChart3,
                },
                {
                  label: "Toplam Net",
                  val: selectedStudent.totalNet,
                  icon: Target,
                },
                {
                  label: "Çalışma (sa)",
                  val: selectedStudent.studyHours,
                  icon: Clock,
                },
                {
                  label: "Trend",
                  val: selectedStudent.trend,
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-3xl">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <item.icon size={16} />{" "}
                    <span className="text-[10px] font-bold uppercase">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Detay Tablosu ve Not Alanı */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-slate-100 rounded-3xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 text-[10px] font-bold uppercase">
                        Ders
                      </th>
                      <th className="p-4 text-[10px] font-bold uppercase">
                        Net
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Matematik", "Fizik", "Türkçe", "Kimya"].map((d, i) => (
                      <tr key={i} className="border-t border-slate-50">
                        <td className="p-4 font-bold text-slate-700">{d}</td>
                        <td className="p-4 font-black text-[#7A40F2]">
                          85/100
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl text-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Edit3 size={16} /> Eğitmen Notu
                </h4>
                <textarea
                  className="w-full h-32 bg-slate-800 rounded-2xl p-4 text-sm focus:outline-none"
                  placeholder="Bu öğrenci hakkında gözlemlerini yaz..."
                ></textarea>
                <button className="w-full mt-4 bg-[#7A40F2] py-3 rounded-xl font-bold">
                  Notu Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
