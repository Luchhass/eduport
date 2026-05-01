"use client";

import { BarChart3, Building2, School, Users } from "lucide-react";

const classes = [
  ["12-A", "34 öğrenci", "Ece Karaca", 88],
  ["12-B", "31 öğrenci", "Murat Deniz", 74],
  ["11-A", "29 öğrenci", "Selin Aksoy", 81],
  ["Mezun", "48 öğrenci", "Kerem Yıldız", 69],
];

export default function ClassesPage() {
  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div>
            <p className="page-kicker">Kurumsal</p>
            <h1 className="page-title mt-2">Sınıf genel kontrolü</h1>
            <p className="page-subtitle mt-3">
              Sınıfları, danışman öğretmenleri ve genel kullanım skorunu sade
              kurumsal görünümde izle.
            </p>
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-4">
          {[
            ["Sınıf", "42", School],
            ["Öğrenci", "1.248", Users],
            ["Kampüs", "4", Building2],
            ["Kullanım", "%96", BarChart3],
          ].map(([label, value, Icon]) => (
            <div key={label} className="widget widget-pad">
              <Icon className="mb-4 text-[#9F58FF]" size={24} />
              <p className="metric-mid">{value}</p>
              <p className="mt-1 text-xs font-black text-zinc-400">{label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="widget widget-pad">
            <p className="widget-title mb-4">Sınıf listesi</p>
            <div className="grid gap-2">
              {classes.map(([name, count, teacher, score]) => (
                <div key={name} className="rounded-[1.25rem] bg-white/76 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-black text-zinc-900">{name}</p>
                      <p className="text-xs font-bold text-zinc-400">
                        {count} • {teacher}
                      </p>
                    </div>
                    <span className="pill soft-pill">%{score}</span>
                  </div>
                  <div className="mini-bar">
                    <div
                      className="mini-bar-fill"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget-brand widget-pad">
            <p className="text-3xl font-black leading-tight">Kurum ritmi</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
              Yönetim tarafında hedef, öğretmen-sınıf eşleşmelerini güncel tutmak
              ve haftalık raporları takip etmek.
            </p>
            <div className="mt-6 flex h-48 items-end gap-2">
              {[54, 62, 58, 76, 84, 72, 90, 82].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-2xl bg-white/25"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}