"use client";

import { Mail, Plus, ShieldCheck, UserPlus, Users } from "lucide-react";

const teachers = [
  ["Ece Karaca", "Matematik", "6 sınıf", "Aktif"],
  ["Murat Deniz", "Fizik", "4 sınıf", "Aktif"],
  ["Selin Aksoy", "Türkçe", "5 sınıf", "Davet"],
  ["Kerem Yıldız", "Kimya", "3 sınıf", "Aktif"],
];

export default function TeachersPage() {
  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">Kurumsal</p>
              <h1 className="page-title mt-2">Öğretmen yönetimi</h1>
              <p className="page-subtitle mt-3">
                Öğretmenleri ekle, branşlarını ve sınıf eşleşmelerini kontrol et.
              </p>
            </div>
            <button className="btn-primary">
              <Plus size={17} /> Öğretmen ekle
            </button>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="widget-brand widget-pad">
            <UserPlus size={30} className="mb-5 text-purple-100" />
            <p className="text-3xl font-black leading-tight">
              Yeni davet oluştur
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-purple-100">
              Kurum hesabına öğretmen eklemek için e-posta daveti gönder.
            </p>
            <div className="mt-5 grid gap-2">
              <input
                className="h-12 rounded-full border border-white/20 bg-white/15 px-4 text-sm font-bold outline-none placeholder:text-purple-100"
                placeholder="ogretmen@okul.com"
              />
              <button className="rounded-full bg-white py-3 text-sm font-black text-[#7A40F2]">
                Davet gönder
              </button>
            </div>
          </div>

          <div className="widget widget-pad">
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Toplam", "86", Users],
                ["Aktif", "74", ShieldCheck],
                ["Davet", "12", Mail],
              ].map(([label, value, Icon]) => (
                <div key={label} className="rounded-2xl bg-white/76 p-4">
                  <Icon className="mb-3 text-[#9F58FF]" size={22} />
                  <p className="metric-mid">{value}</p>
                  <p className="text-xs font-black text-zinc-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Öğretmen</th>
                    <th>Branş</th>
                    <th>Sınıf</th>
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map(([name, branch, classes, status]) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{branch}</td>
                      <td>{classes}</td>
                      <td>
                        <span
                          className={`pill ${
                            status === "Aktif"
                              ? "bg-emerald-50 text-emerald-600"
                              : "soft-pill"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}