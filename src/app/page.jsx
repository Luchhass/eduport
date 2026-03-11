"use client";

import React from "react";
import {
  Zap,
  Target,
  Users,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 font-sans selection:bg-purple-100">
      {/* Navbar (Modern Floating) */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-zinc-200/60 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-5xl shadow-sm">
          <div className="text-xl font-black tracking-tighter">YKS NETWORK</div>
          <div className="flex gap-6 text-sm font-bold text-zinc-600">
            <a
              href="#features"
              className="hover:text-purple-600 transition-colors"
            >
              Özellikler
            </a>
            <a
              href="#about"
              className="hover:text-purple-600 transition-colors"
            >
              Hakkımızda
            </a>
          </div>
          <a
            href="/login"
            className="bg-zinc-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-all shadow-lg hover:scale-105"
          >
            Giriş Yap
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-200/30 rounded-full blur-[120px] -z-10" />

        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8 border border-purple-100">
          <Zap size={14} /> Eğitimde Yeni Nesil Veri Takibi
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter">
          Eğitimde{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
            Veri Devrimi
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Öğrencilerin çalışma verilerini, eğitmenlerin stratejilerini ve
          kurumların başarısını dijital dünyada tek bir platformda
          birleştiriyoruz.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="bg-purple-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-purple-700 shadow-xl shadow-purple-200 flex items-center gap-2 group"
          >
            Hemen Başla{" "}
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20 border-y border-zinc-100 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "240K+", label: "Çalışma Saati" },
            { val: "12K+", label: "Aktif Öğrenci" },
            { val: "88%", label: "Başarı Artışı" },
            { val: "450+", label: "Eğitmen Ağı" },
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-4xl font-black text-zinc-900 group-hover:text-purple-600 transition-colors">
                {stat.val}
              </div>
              <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Segmentler */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Öğrenci",
              desc: "Kişisel hedefler, canlı rekabet ve analizler.",
              icon: Target,
              color: "text-purple-600",
            },
            {
              title: "Eğitmen",
              desc: "Yapay zeka destekli performans raporları.",
              icon: BrainCircuit,
              color: "text-amber-600",
            },
            {
              title: "Kurum",
              desc: "Şeffaf kampüs ve başarı yönetimi.",
              icon: Award,
              color: "text-emerald-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-4xl bg-white border border-zinc-100 hover:border-purple-200 transition-all shadow-sm hover:shadow-xl group"
            >
              <div
                className={`mb-6 p-4 bg-zinc-50 rounded-2xl inline-block ${item.color}`}
              >
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-zinc-100 text-sm font-bold text-zinc-400">
        © 2026 YKS NETWORK. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
