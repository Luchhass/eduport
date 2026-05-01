"use client";

import { useState } from "react";
import { Award, ChevronDown, Flame, Trophy, Users } from "lucide-react";

const students = [
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
];

export default function LeaderboardPage() {
  const [sortType, setSortType] = useState("nets");
  const sorted = [...students].sort((a, b) => b[sortType] - a[sortType]);

  const value = (student) => {
    if (sortType === "questions") return `${student.questions} soru`;
    if (sortType === "studyTime") return `${student.studyTime} dk`;
    return `${student.nets} net`;
  };

  return (
    <div className="app-page-narrow">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">Sınıf durumu</p>
              <h1 className="page-title mt-2">Liderlik tablosu</h1>
              <p className="page-subtitle mt-3">
                Sınıf sıralamanı, sıradaki rakibini ve çalışma temposunu gör.
              </p>
            </div>
            <label className="relative w-full sm:w-72">
              <select
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
                className="input-field appearance-none px-4 pr-10"
              >
                <option value="nets">Net ortalaması</option>
                <option value="questions">Soru sayısı</option>
                <option value="studyTime">Çalışma süresi</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={17}
              />
            </label>
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          <div className="widget-brand widget-pad md:col-span-1">
            <Trophy size={34} className="mb-5 text-purple-100" />
            <p className="text-5xl font-black">#12</p>
            <p className="mt-2 text-sm font-bold text-purple-100">Sınıf sıran</p>
          </div>
          <div className="widget widget-pad md:col-span-2">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Rakip", "Zeynep Koç", Users],
                ["Fark", "+40 XP", Flame],
                ["Haftalık", "+3 sıra", Award],
              ].map(([label, val, Icon]) => (
                <div key={label} className="rounded-2xl bg-white/76 p-4">
                  <Icon className="mb-3 text-[#9F58FF]" size={22} />
                  <p className="metric-mid">{val}</p>
                  <p className="mt-1 text-xs font-black text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="widget widget-pad">
          <div className="grid gap-2">
            {sorted.map((student, index) => (
              <div
                key={student.id}
                className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-[1.25rem] bg-white/76 p-3"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl font-black ${
                    index === 0
                      ? "bg-amber-100 text-amber-600"
                      : index === 1
                        ? "bg-purple-100 text-[#7A40F2]"
                        : index === 2
                          ? "bg-pink-100 text-pink-500"
                          : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {index < 3 ? <Award size={21} /> : `#${index + 1}`}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-black text-zinc-800">
                    {student.name}
                  </p>
                  <p
                    className={`text-xs font-black ${
                      student.status === "Çalışıyor"
                        ? "text-emerald-500"
                        : "text-zinc-400"
                    }`}
                  >
                    {student.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-black text-zinc-900">{value(student)}</p>
                  <p className="text-xs font-bold text-zinc-400">performans</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}