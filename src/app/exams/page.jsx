"use client";

import { useState } from "react";
import { BookOpenCheck, CalendarDays, Check, Plus, Trash2 } from "lucide-react";

import { useRole } from "@/hooks/useRole";

const initialWorks = [
  {
    id: 1,
    title: "TYT Matematik Denemesi",
    type: "Deneme",
    due: "10 Mayıs",
    solved: 34,
    total: 40,
    progress: 85,
  },
  {
    id: 2,
    title: "Fizik Optik Soru Seti",
    type: "Ödev",
    due: "12 Mayıs",
    solved: 8,
    total: 20,
    progress: 40,
  },
  {
    id: 3,
    title: "Paragraf Hız Çalışması",
    type: "Ödev",
    due: "14 Mayıs",
    solved: 18,
    total: 24,
    progress: 75,
  },
];

export default function ExamsPage() {
  const role = useRole();
  const canManage = role === "educator" || role === "institution";
  const [works, setWorks] = useState(initialWorks);

  if (!role) return null;

  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">Ödevler</p>
              <h1 className="page-title mt-2">Görev ve deneme akışı</h1>
              <p className="page-subtitle mt-3">
                Ödevleri, denemeleri ve katılım durumunu yoğun widget listesinde
                takip et.
              </p>
            </div>
            {canManage && (
              <button className="btn-primary">
                <Plus size={17} /> Yeni görev
              </button>
            )}
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1fr_0.35fr]">
          <div className="grid gap-3">
            {works.map((work) => (
              <article key={work.id} className="widget widget-pad">
                <div className="grid gap-3 lg:grid-cols-[1fr_16rem_auto] lg:items-center">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="icon-chip">
                      <BookOpenCheck size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-black text-zinc-800">
                        {work.title}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <span className="pill soft-pill">{work.type}</span>
                        <span className="pill bg-white text-zinc-500">
                          <CalendarDays size={13} /> {work.due}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-black text-zinc-500">
                      <span>
                        {work.solved}/{work.total} soru
                      </span>
                      <span className="text-[#7A40F2]">%{work.progress}</span>
                    </div>
                    <div className="mini-bar">
                      <div
                        className="mini-bar-fill"
                        style={{ width: `${work.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 lg:justify-end">
                    {!canManage && (
                      <button className="icon-button icon-button-white">
                        <Check size={17} />
                      </button>
                    )}
                    {canManage && (
                      <button
                        onClick={() =>
                          setWorks((prev) =>
                            prev.filter((item) => item.id !== work.id),
                          )
                        }
                        className="icon-button icon-button-white"
                      >
                        <Trash2 size={17} />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="widget-brand widget-pad">
            <p className="text-4xl font-black">
              {Math.round(
                works.reduce((total, item) => total + item.progress, 0) /
                  works.length,
              )}
              %
            </p>
            <p className="mt-2 text-sm font-bold text-purple-100">
              Genel ilerleme
            </p>
            <div className="mt-5 grid gap-2">
              {["Deneme", "Ödev", "Tekrar"].map((item, index) => (
                <div key={item} className="rounded-2xl bg-white/15 p-3">
                  <p className="text-sm font-black">{item}</p>
                  <p className="text-xs font-bold text-purple-100">
                    {index + 2} aktif görev
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}