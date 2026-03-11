"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Lock,
  Mail,
  UserCircle,
  Users,
  ShieldCheck,
  TrendingUp,
  UserPlus,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. İstemci tarafı için localStorage
    localStorage.setItem("app_user_role", role);

    // 2. Sunucu (Middleware) tarafı için Cookie set et
    // 1 gün süreli, tüm sitede geçerli cookie
    document.cookie = `app_user_role=${role}; path=/; max-age=86400; SameSite=Lax`;

    // 3. Rol değişti eventini tetikle (Hook'ların güncellenmesi için)
    window.dispatchEvent(new Event("storage"));

    // 4. Dashboard'a yönlendir (Middleware araya girip doğru yere atacak)
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F0F2F9] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[40%] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-112.5 bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center z-10">
        <div className="w-16 h-16 bg-[#7A40F2] rounded-2xl flex items-center justify-center shadow-lg mb-6 rotate-3">
          {isRegister ? (
            <UserPlus className="text-white w-8 h-8" />
          ) : (
            <GraduationCap className="text-white w-8 h-8" />
          )}
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-zinc-800 tracking-tight">
            {isRegister ? "Hesap Oluştur" : "YKS NETWORK"}
          </h1>
          <p className="text-zinc-500 text-sm mt-2 flex items-center justify-center gap-2">
            <TrendingUp size={14} className="text-[#7A40F2]" />
            {isRegister
              ? "Sınav yolculuğuna ilk adımı at."
              : "Başarı seni bekliyor."}
          </p>
        </div>

        <div className="w-full bg-zinc-100/80 p-1 rounded-2xl flex gap-1 mb-6 border border-zinc-200/50">
          {[
            {
              id: "student",
              label: "Öğrenci",
              icon: <GraduationCap size={16} />,
            },
            {
              id: "educator",
              label: "Eğitimci",
              icon: <UserCircle size={16} />,
            },
            { id: "institution", label: "Kurum", icon: <Users size={16} /> },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRole(item.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                role === item.id
                  ? "bg-white text-[#7A40F2] shadow-sm"
                  : "text-zinc-400"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        <form className="w-full space-y-4" onSubmit={handleLogin}>
          <div className="relative group">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />
            <input
              type="email"
              placeholder="E-posta adresi"
              className="w-full pl-11 py-4 bg-white border border-zinc-100 rounded-2xl outline-none focus:border-[#7A40F2] transition-all text-sm"
              required
            />
          </div>

          <div className="relative group">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />
            <input
              type="password"
              placeholder="Şifre"
              className="w-full pl-11 py-4 bg-white border border-zinc-100 rounded-2xl outline-none focus:border-[#7A40F2] transition-all text-sm"
              required
            />
          </div>

          {role === "institution" && (
            <div className="relative animate-in fade-in">
              <ShieldCheck
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Kurum Erişim Kodu"
                className="w-full pl-11 py-4 bg-white border border-indigo-100 rounded-2xl outline-none text-sm"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#7A40F2] text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-[#6635D1] transition-all"
          >
            {isRegister ? "Hesabımı Oluştur" : "Sisteme Giriş Yap"}
          </button>
        </form>

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-6 text-xs font-bold text-[#7A40F2] hover:underline"
        >
          {isRegister
            ? "Zaten hesabınız var mı? Giriş yapın"
            : "Hesabınız yok mu? Kayıt olun"}
        </button>
      </div>
    </div>
  );
}
