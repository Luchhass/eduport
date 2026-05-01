"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const roles = [
  {
    id: "student",
    label: "Öğrenci",
    title: "Hedef ve ödev paneli",
    icon: GraduationCap,
  },
  {
    id: "educator",
    label: "Öğretmen",
    title: "Sınıf operasyonu",
    icon: UserRound,
  },
  {
    id: "institution",
    label: "Okul",
    title: "Kurumsal kontrol",
    icon: Building2,
  },
];

const dummyCredentials = {
  student: {
    email: "ogrenci@yksnetwork.test",
    password: "demo1234",
  },
  educator: {
    email: "ogretmen@yksnetwork.test",
    password: "demo1234",
  },
  institution: {
    email: "okul@yksnetwork.test",
    password: "demo1234",
    accessCode: "OKUL-DEMO",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [isRegister, setIsRegister] = useState(false);
  const credentials = dummyCredentials[role];

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("app_user_role", role);
    document.cookie = `app_user_role=${role}; path=/; max-age=86400; SameSite=Lax`;
    window.dispatchEvent(new Event("storage"));
    router.push("/dashboard");
  };

  return (
    <div className="public-shell">
      <aside className="public-rail">
        <Link href="/" className="icon-button icon-button-white">
          <ArrowLeft size={18} />
        </Link>
        <div className="grid gap-2">
          <span className="icon-button icon-button-brand">
            <BrainCircuit size={18} />
          </span>
          <span className="icon-button icon-button-white">
            <ShieldCheck size={18} />
          </span>
        </div>
        <span className="icon-button icon-button-white">
          <BarChart3 size={18} />
        </span>
      </aside>

      <main className="public-content flex min-h-screen items-center px-4 py-4 lg:px-6">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <section className="widget-brand widget-pad flex flex-col justify-between">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-sm font-black text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#7A40F2]">
                    <BrainCircuit size={22} />
                  </span>
                  YKS NETWORK
                </Link>
                <Link href="/" className="btn-soft !min-h-10 !bg-white/15 !text-white">
                  Geri
                </Link>
              </div>

              <p className="text-4xl font-black leading-tight sm:text-5xl">
                Rolünü seç, kendi uygulama alanına gir.
              </p>
              <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-purple-100">
                Öğrenci, öğretmen ve okul girişleri ayrı panel düzenleriyle
                çalışır. Aynı veri dili, farklı iş akışı.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {roles.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-[1.35rem] border p-4 ${
                    role === item.id
                      ? "border-white bg-white text-zinc-900"
                      : "border-white/15 bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        role === item.id
                          ? "bg-[#f1e5ff] text-[#7A40F2]"
                          : "bg-white/15 text-white"
                      }`}
                    >
                      <item.icon size={19} />
                    </span>
                    <div>
                      <p className="font-black">{item.label}</p>
                      <p
                        className={`text-xs font-bold ${
                          role === item.id ? "text-zinc-500" : "text-purple-100"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="widget widget-pad">
            <div className="mb-5">
              <p className="page-kicker">Giriş</p>
              <h1 className="mt-2 text-4xl font-black leading-none text-zinc-950">
                {isRegister ? "Hesap oluştur" : "Panele giriş yap"}
              </h1>
              <p className="mt-3 text-sm font-semibold text-zinc-500">
                Seçtiğin role göre dashboard otomatik açılır.
              </p>
            </div>

            <div className="mb-4 grid gap-2 md:grid-cols-3">
              {roles.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={`rounded-[1.25rem] border p-3 text-left transition-all ${
                    role === item.id
                      ? "border-purple-200 bg-[#f2e7ff]"
                      : "border-white bg-white/70 hover:border-purple-100"
                  }`}
                >
                  <item.icon className="mb-3 text-[#9F58FF]" size={22} />
                  <p className="text-sm font-black text-zinc-900">{item.label}</p>
                  <p className="mt-1 text-xs font-bold text-zinc-400">
                    {item.title}
                  </p>
                </button>
              ))}
            </div>

            <form className="grid gap-3" onSubmit={handleLogin}>
              <label className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  key={`email-${role}`}
                  type="email"
                  className="input-field px-4 pl-11"
                  placeholder="E-posta adresi"
                  defaultValue={credentials.email}
                  required
                />
              </label>

              <label className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  key={`password-${role}`}
                  type="password"
                  className="input-field px-4 pl-11"
                  placeholder="Şifre"
                  defaultValue={credentials.password}
                  required
                />
              </label>

              {role === "institution" && (
                <label className="relative">
                  <Users
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    key={`access-${role}`}
                    className="input-field px-4 pl-11"
                    placeholder="Okul erişim kodu"
                    defaultValue={credentials.accessCode}
                    required
                  />
                </label>
              )}

              <button className="btn-primary mt-1 w-full">
                {isRegister ? "Hesabı oluştur" : "Giriş yap"}
                <ArrowRight size={18} />
              </button>
            </form>

            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="mt-5 rounded-full bg-white px-4 py-3 text-sm font-black text-[#7A40F2]"
            >
              {isRegister
                ? "Zaten hesabın var mı? Giriş yap"
                : "Hesabın yok mu? Kayıt ol"}
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
