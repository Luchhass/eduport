"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, Save, Trash2 } from "lucide-react";

const initialRows = [
  { id: 1, name: "Caner Vural", net: 32, success: 85, trend: "+2.1" },
  { id: 2, name: "Zeynep Koç", net: 28, success: 75, trend: "+0.5" },
  { id: 3, name: "Mert Demir", net: 15, success: 40, trend: "-1.2" },
  { id: 4, name: "Ayşe Yılmaz", net: 25, success: 68, trend: "+1.0" },
  { id: 5, name: "Kerem Aksoy", net: 38, success: 95, trend: "+0.8" },
];

export default function GradingPage() {
  const [course, setCourse] = useState("Matematik");
  const [rows, setRows] = useState(initialRows);

  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">Notlar</p>
              <h1 className="page-title mt-2">Sınav sonuç işlemleri</h1>
              <p className="page-subtitle mt-3">
                Ders seç, netleri düzenle ve sınıf başarısını hızlıca takip et.
              </p>
            </div>
            <label className="relative w-full sm:w-64">
              <select
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                className="input-field appearance-none px-4 pr-10"
              >
                <option>Matematik</option>
                <option>Türkçe</option>
                <option>Fizik</option>
                <option>Kimya</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={17}
              />
            </label>
          </div>
        </section>

        <section className="grid gap-3 xl:grid-cols-[1fr_0.35fr]">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title flex items-center gap-2">
                <BookOpen className="text-[#9F58FF]" size={22} /> {course} tablosu
              </p>
              <span className="pill soft-pill">{rows.length} öğrenci</span>
            </div>

            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Öğrenci</th>
                    <th>Net</th>
                    <th>Başarı</th>
                    <th>Trend</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.name}</td>
                      <td>
                        <input
                          type="number"
                          defaultValue={row.net}
                          className="w-20 rounded-full border border-purple-100 bg-white px-3 py-2 text-center font-black outline-none focus:border-[#9F58FF]"
                        />
                      </td>
                      <td className="font-black text-[#7A40F2]">
                        %{row.success}
                      </td>
                      <td
                        className={
                          row.trend.startsWith("+")
                            ? "font-black text-emerald-500"
                            : "font-black text-red-500"
                        }
                      >
                        {row.trend}
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            setRows((prev) =>
                              prev.filter((item) => item.id !== row.id),
                            )
                          }
                          className="icon-button icon-button-white"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="widget-brand widget-pad">
            <p className="text-5xl font-black">72.4</p>
            <p className="mt-2 text-sm font-bold text-purple-100">
              Sınıf ortalaması
            </p>
            <div className="mt-5 grid gap-2">
              {["En yüksek: 95", "Riskli: 2", "Eksik giriş: 0"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/15 p-3 text-sm font-black"
                >
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-full bg-white py-3 text-sm font-black text-[#7A40F2]">
              <Save className="mr-2 inline" size={16} /> Kaydet
            </button>
          </aside>
        </section>
      </div>
    </div>
  );
}