"use client";

import {
  AlertTriangle,
  BarChart3,
  Clock3,
  FileText,
  PieChart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { useRole } from "@/hooks/useRole";

export default function AnalysisPage() {
  const role = useRole();
  if (!role) return null;

  const isStudent = role === "student";
  const title =
    role === "institution"
      ? "Kurum raporları"
      : isStudent
        ? "Kişisel analiz"
        : "Sınıf analizi";

  const metrics = isStudent
    ? [
        ["Net ort.", "84.5", TrendingUp],
        ["Çözüm hızı", "48 sn", Clock3],
        ["Hakimiyet", "%78", PieChart],
      ]
    : role === "institution"
      ? [
          ["Aktif sınıf", "42", Users],
          ["Panel kullanımı", "%96", TrendingUp],
          ["Haftalık rapor", "18", FileText],
        ]
      : [
          ["Aktif öğrenci", "128", Users],
          ["Riskli", "7", AlertTriangle],
          ["Müfredat", "%82", Target],
        ];

  return (
    <div className="app-page">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">Analiz</p>
              <h1 className="page-title mt-2">{title}</h1>
              <p className="page-subtitle mt-3">
                Grafikler, konu durumları ve aksiyon listeleri tek yoğun ekranda.
              </p>
            </div>
            <button className="btn-primary">
              <FileText size={17} /> Rapor indir
            </button>
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          {metrics.map(([label, value, Icon]) => (
            <div key={label} className="widget widget-pad">
              <Icon className="mb-4 text-[#9F58FF]" size={24} />
              <p className="metric-mid">{value}</p>
              <p className="mt-2 text-xs font-black text-zinc-500">{label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-3 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="widget widget-pad">
            <div className="mb-4 flex items-center justify-between">
              <p className="widget-title">
                {isStudent ? "Performans trendi" : "Genel dağılım"}
              </p>
              <BarChart3 className="text-[#9F58FF]" size={22} />
            </div>
            <div className="flex h-60 items-end gap-2">
              {[40, 60, 55, 70, 85, 90, 88, 72, 78, 92, 81, 86].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-2xl ${
                      index === 9 ? "bg-[#9F58FF]" : "bg-[#e8d8ff]"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="widget-brand widget-pad">
            <AlertTriangle size={28} className="mb-4 text-purple-100" />
            <p className="text-2xl font-black">
              {isStudent ? "Odak listesi" : "Aksiyon listesi"}
            </p>
            <div className="mt-5 grid gap-2">
              {[
                isStudent
                  ? "Limit & süreklilik tekrarı"
                  : "Ahmet Yılmaz müdahale",
                isStudent ? "Optik kısa test" : "Modern fizik tekrar planı",
                isStudent ? "Paragraf süre hedefi" : "Ödev katılım bildirimi",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/15 p-3">
                  <p className="text-sm font-black">{item}</p>
                  <p className="text-xs font-bold text-purple-100">bugün</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="widget widget-pad">
          <p className="widget-title mb-4">
            {isStudent ? "Konu analizi" : "Takip tablosu"}
          </p>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{isStudent ? "Konu" : "Alan"}</th>
                  <th>Başarı</th>
                  <th>Hacim</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Fonksiyonlar",
                  "Optik",
                  "Tarih & İnkılap",
                  "Kimyasal Denge",
                ].map((item, index) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td className="font-black text-[#7A40F2]">
                      %{82 - index * 11}
                    </td>
                    <td>{124 - index * 18}</td>
                    <td>
                      <span
                        className={`pill ${
                          index === 1
                            ? "bg-amber-50 text-amber-600"
                            : "soft-pill"
                        }`}
                      >
                        {index === 1 ? "Tekrar" : "İyi"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}