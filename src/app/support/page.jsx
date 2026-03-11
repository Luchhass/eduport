"use client";

import React, { useState } from "react";
import {
  BrainCircuit,
  Send,
  MessageCircle,
  Clock,
  Trash2,
  ShieldCheck,
  User,
} from "lucide-react";
// Hook importu
import { useRole } from "@/hooks/useRole";

export default function OwlSupportPage() {
  const role = useRole(); // Dinamik rol yönetimi
  const [newQuestion, setNewQuestion] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Ali Yılmaz",
      question: "AYT Fizik Optik testindeki 4. sorunun mantığını anlayamadım.",
      status: "Cevaplandı",
      reply: "Optikteki kırılma kuralını hatırlaman gerekiyor.",
    },
    {
      id: 2,
      sender: "Caner Vural",
      question: "TYT Matematik programında bir değişikliğe gitmeli miyim?",
      status: "Bekliyor",
      reply: null,
    },
  ]);

  // Rol yüklenene kadar bekle
  if (!role) return null;

  // EĞİTMEN İŞLEMLERİ
  const handleReply = (id) => {
    setMessages(
      messages.map((m) =>
        m.id === id
          ? { ...m, status: "Cevaplandı", reply: replyInputs[id] }
          : m,
      ),
    );
    setReplyInputs({ ...replyInputs, [id]: "" });
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  // ÖĞRENCİ İŞLEMLERİ
  const sendQuestion = () => {
    if (!newQuestion.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: "Sen",
      question: newQuestion,
      status: "Bekliyor",
      reply: null,
    };
    setMessages([newMsg, ...messages]);
    setNewQuestion("");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Baykuş Desteği</h1>
          <p className="text-slate-500 font-medium">
            {role === "student"
              ? "Eğitmenine sorunu ilet."
              : "Öğrencilerin destek taleplerini yönet."}
          </p>
        </div>
        {role === "educator" && (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl font-black text-xs uppercase">
            <ShieldCheck size={16} /> Eğitmen Paneli
          </div>
        )}
      </div>

      {/* SADECE ÖĞRENCİ GÖRÜR */}
      {role === "student" && (
        <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:border-[#7A40F2] mb-4 h-32"
            placeholder="Sorunu buraya yaz..."
          />
          <button
            onClick={sendQuestion}
            className="flex items-center gap-2 bg-[#7A40F2] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#6533cc]"
          >
            <Send size={18} /> Soruyu Gönder
          </button>
        </div>
      )}

      {/* MESAJ LİSTESİ */}
      <div className="space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 text-[#7A40F2] rounded-full flex items-center justify-center font-black text-xl">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{msg.sender}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Destek Talebi
                  </p>
                </div>
              </div>

              {/* SADECE EĞİTMEN SİLEBİLİR */}
              {role === "educator" && (
                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl mb-6 font-medium text-slate-700">
              {msg.question}
            </div>

            {/* SADECE EĞİTMEN YANITLAYABİLİR */}
            {role === "educator" && !msg.reply && (
              <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                <input
                  onChange={(e) =>
                    setReplyInputs({ ...replyInputs, [msg.id]: e.target.value })
                  }
                  className="flex-1 p-3 bg-transparent outline-none text-sm"
                  placeholder="Yanıtını yaz..."
                />
                <button
                  onClick={() => handleReply(msg.id)}
                  className="bg-[#7A40F2] text-white px-6 rounded-xl font-bold text-sm"
                >
                  Yanıtla
                </button>
              </div>
            )}

            {/* YANIT */}
            {msg.reply && (
              <div className="flex gap-4 ml-8 border-l-4 border-[#7A40F2] pl-6">
                <div className="text-[#7A40F2] pt-1">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#7A40F2] uppercase mb-1">
                    Eğitmen Yanıtı
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {msg.reply}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
