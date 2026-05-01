"use client";

import { useState } from "react";
import { BarChart3, Clock3, Target, UserRound, X } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Ali Yılmaz",
    className: "12-B",
    avg: 88,
    net: 342,
    hours: 124,
    trend: "+12",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    className: "12-B",
    avg: 92,
    net: 385,
    hours: 145,
    trend: "+8",
  },
  {
    id: 3,
    name: "Caner Vural",
    className: "12-A",
    avg: 74,
    net: 290,
    hours: 98,
    trend: "-3",
  },
  {
    id: 4,
    name: "Mert Demir",
    className: "Mezun",
    avg: 81,
    net: 318,
    hours: 110,
    trend: "+4",
  },
];

export default function StudentsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <p className="page-kicker">Kişiler</p>
          <h1 className="page-title mt-2">Öğrenci portfolyosu</h1>
          <p className="page-subtitle mt-3">
            Öğrencileri kompakt kartlar üzerinden takip et, detayları modalda aç.
          </p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() => setSelected(student)}
              className="widget widget-pad text-left transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9F58FF] text-lg font-black text-white">
                  {student.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </span>
                <span className="pill soft-pill">%{student.avg}</span>
              </div>
              <p className="font-black text-zinc-900">{student.name}</p>
              <p className="mt-1 text-xs font-bold text-zinc-400">
                {student.className}
              </p>
              <div className="mt-4 mini-bar">
                <div
                  className="mini-bar-fill"
                  style={{ width: `${student.avg}%` }}
                />
              </div>
            </button>
          ))}
        </section>

        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 p-3 backdrop-blur-sm">
            <div className="widget widget-pad max-h-[92vh] w-full max-w-4xl overflow-y-auto">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="page-kicker">Öğrenci detay</p>
                  <h2 className="mt-2 text-4xl font-black text-zinc-950">
                    {selected.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-zinc-500">
                    {selected.className}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="icon-button icon-button-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                {[
                  ["Başarı", `%${selected.avg}`, BarChart3],
                  ["Toplam net", selected.net, Target],
                  ["Çalışma", `${selected.hours}s`, Clock3],
                  ["Trend", selected.trend, UserRound],
                ].map(([label, value, Icon]) => (
                  <div key={label} className="rounded-2xl bg-white/76 p-4">
                    <Icon className="mb-3 text-[#9F58FF]" size={22} />
                    <p className="metric-mid">{value}</p>
                    <p className="mt-1 text-xs font-black text-zinc-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="rounded-[1.35rem] bg-white/76 p-4">
                  <p className="widget-title mb-3">Ders kırılımı</p>
                  {["Matematik", "Fizik", "Türkçe", "Kimya"].map(
                    (lesson, index) => (
                      <div key={lesson} className="mb-3 last:mb-0">
                        <div className="mb-2 flex justify-between text-sm font-black">
                          <span>{lesson}</span>
                          <span className="text-[#7A40F2]">
                            %{88 - index * 9}
                          </span>
                        </div>
                        <div className="mini-bar">
                          <div
                            className="mini-bar-fill"
                            style={{ width: `${88 - index * 9}%` }}
                          />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="rounded-[1.35rem] bg-[#9F58FF] p-4 text-white">
                  <p className="widget-title !text-white">Eğitmen notu</p>
                  <textarea
                    className="mt-3 min-h-36 w-full resize-none rounded-2xl border border-white/15 bg-white/15 p-4 text-sm font-semibold outline-none placeholder:text-purple-100"
                    placeholder="Gözlem ekle..."
                  />
                  <button className="mt-3 w-full rounded-full bg-white py-3 text-sm font-black text-[#7A40F2]">
                    Notu kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}