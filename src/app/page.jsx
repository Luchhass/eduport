"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  GraduationCap,
  LineChart,
  LockKeyhole,
  Play,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const metricCards = [
  { title: "Aktif Öğrenci", value: "12.4K", sub: "+18% bu ay", icon: Users },
  { title: "Tamamlanan Ödev", value: "88%", sub: "kurum ortalaması", icon: CheckCircle2 },
  { title: "Haftalık Çalışma", value: "240K", sub: "toplam dakika", icon: BarChart3 },
];

const roles = [
  {
    title: "Öğrenci",
    text: "Hedef, ödev, konu eksiği ve sınıf sıralaması kompakt panellerde.",
    icon: GraduationCap,
  },
  {
    title: "Öğretmen",
    text: "Sınıf analizi, riskli öğrenciler ve not işlemleri tek akışta.",
    icon: BrainCircuit,
  },
  {
    title: "Okul",
    text: "Öğretmen listesi, sınıf kontrolü ve kurum özetleri sade tutulur.",
    icon: Building2,
  },
];

function MiniDashboard() {
  return (
    <div className="widget widget-pad relative h-full overflow-hidden">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#9F58FF]/15 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="page-kicker">Canlı akademik akış</p>
          <h2 className="mt-2 text-3xl font-black leading-none text-zinc-950">
            Kontrol paneli
          </h2>
        </div>
        <div className="flex gap-2">
          <span className="icon-button icon-button-white">
            <Bell size={17} />
          </span>
          <span className="icon-button icon-button-white">
            <LineChart size={17} />
          </span>
        </div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
        {metricCards.map((item) => (
          <div key={item.title} className="rounded-[1.35rem] bg-white/82 p-4">
            <div className="mb-4 flex items-center justify-between">
              <item.icon size={20} className="text-[#9F58FF]" />
              <ArrowUpRight size={16} className="text-zinc-400" />
            </div>
            <p className="metric-mid">{item.value}</p>
            <p className="mt-1 text-sm font-black text-zinc-700">{item.title}</p>
            <p className="mt-1 text-xs font-bold text-zinc-400">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-3 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[1.35rem] bg-white/82 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="widget-title">Performans grafiği</p>
              <p className="text-xs font-bold text-zinc-400">Son 8 hafta</p>
            </div>
            <span className="pill soft-pill">+%6.8</span>
          </div>
          <div className="flex h-40 items-end gap-2">
            {[18, 24, 28, 38, 64, 72, 84, 68, 76, 91, 58, 70].map(
              (height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-2xl ${
                    index === 8 ? "bg-[#9F58FF]" : "bg-[#e7d6ff]"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
        </div>

        <div className="rounded-[1.35rem] bg-[#9F58FF] p-4 text-white">
          <BrainCircuit size={28} className="mb-4 text-purple-100" />
          <p className="text-xl font-black leading-tight">AI öneri</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-purple-100">
            Optik tekrarını kısa bloklara böl, matematik hızını deneme ile koru.
          </p>
          <button className="mt-5 w-full rounded-full bg-white py-3 text-sm font-black text-[#7A40F2]">
            Planı görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="public-shell">
      <aside className="public-rail">
        <Link
          href="/"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9F58FF] text-white shadow-lg shadow-purple-200"
        >
          <BrainCircuit size={24} />
        </Link>
        <div className="grid gap-2">
          <a href="#overview" className="icon-button icon-button-white">
            <BarChart3 size={17} />
          </a>
          <a href="#roles" className="icon-button icon-button-white">
            <Users size={17} />
          </a>
          <a href="#security" className="icon-button icon-button-white">
            <LockKeyhole size={17} />
          </a>
        </div>
        <Link href="/login" className="icon-button icon-button-brand">
          <ArrowUpRight size={18} />
        </Link>
      </aside>

      <main className="public-content">
        <section className="mx-auto grid min-h-screen max-w-7xl gap-4 px-4 py-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:px-6">
          <div className="dense-stack lg:h-full">
            <div className="widget widget-pad lg:flex-1">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9F58FF] text-white lg:hidden">
                    <BrainCircuit size={24} />
                  </span>
                  <div>
                    <p className="page-kicker">YKS NETWORK</p>
                    <p className="mt-1 text-sm font-bold text-zinc-500">
                      Öğrenci, öğretmen ve okul için tek uygulama
                    </p>
                  </div>
                </div>
                <Link href="/login" className="btn-primary">
                  Giriş Yap
                </Link>
              </div>

              <h1 className="page-title max-w-3xl">
                Eğitim takibini modern bir widget paneline dönüştür.
              </h1>
              <p className="page-subtitle mt-5 max-w-2xl">
                Boş rapor sayfaları yerine hedefleri, ödevleri, sınıf durumunu
                ve kurum kontrolünü yoğun ama okunabilir bir uygulama arayüzünde
                topla.
              </p>

              <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                <Link href="/login" className="btn-primary">
                  Uygulamaya gir <ArrowUpRight size={18} />
                </Link>
                <a href="#overview" className="btn-soft">
                  <Play size={17} /> Paneli incele
                </a>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-3 sm:grid-cols-3">
              {[
                ["+6.8%", "Başarı büyümesi"],
                ["92", "Odak skoru"],
                ["42s", "Haftalık süre"],
              ].map(([value, label]) => (
                <div key={label} className="widget widget-tight h-full">
                  <p className="metric-mid">{value}</p>
                  <p className="mt-2 text-xs font-black text-zinc-500">{label}</p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-8 flex-1 rounded-full ${
                          index === 5 ? "bg-[#9F58FF]" : "bg-[#eadbff]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="overview" className="dense-stack">
            <MiniDashboard />
          </div>
        </section>

        <section id="roles" className="mx-auto max-w-7xl px-4 pb-4 lg:px-6">
          <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="widget-brand widget-pad">
              <p className="text-3xl font-black leading-tight">
                Her rol kendi kontrol paneline girer.
              </p>
              <p className="mt-4 text-sm font-semibold leading-7 text-purple-100">
                Öğrenci tarafı öğrenme odaklı, öğretmen tarafı operasyon odaklı,
                okul tarafı ise sade kurum yönetimi odaklı tutulur.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {roles.map((item) => (
                <div key={item.title} className="widget widget-pad">
                  <span className="icon-chip mb-5">
                    <item.icon size={20} />
                  </span>
                  <p className="widget-title">{item.title}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="mx-auto grid max-w-7xl gap-3 px-4 pb-6 lg:grid-cols-4 lg:px-6">
          {[
            ["Sınıf Durumu", "Sıralama, çalışma ve rekabet tek yerde.", Trophy],
            ["Ödev Akışı", "Görev, deneme ve katılım yoğun kartlarla.", BookOpenCheck],
            ["Kurum Kontrolü", "Öğretmen ve sınıflar sade kurumsal yapıda.", Building2],
            ["Güvenli Giriş", "Öğrenci, öğretmen ve okul rol ayrımı.", LockKeyhole],
          ].map(([title, text, Icon]) => (
            <div key={title} className="widget widget-pad">
              <Icon className="mb-4 text-[#9F58FF]" size={24} />
              <p className="font-black text-zinc-900">{title}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-500">
                {text}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
