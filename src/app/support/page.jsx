"use client";

import { useState } from "react";
import {
  BrainCircuit,
  MessageCircle,
  Send,
  ShieldCheck,
  Trash2,
  UserRound,
} from "lucide-react";

import { useRole } from "@/hooks/useRole";

const seedMessages = [
  {
    id: 1,
    sender: "Ali Yılmaz",
    question: "AYT Fizik Optik testindeki 4. sorunun mantığını anlayamadım.",
    status: "Cevaplandı",
    reply: "Kırılma kuralını açıya göre tekrar kurman gerekiyor.",
  },
  {
    id: 2,
    sender: "Caner Vural",
    question: "TYT Matematik programında değişikliğe gitmeli miyim?",
    status: "Bekliyor",
    reply: "",
  },
  {
    id: 3,
    sender: "Ayşe Demir",
    question: "Paragraf süre hedefim kaç dakika olmalı?",
    status: "Bekliyor",
    reply: "",
  },
];

export default function SupportPage() {
  const role = useRole();
  const canReply = role === "educator" || role === "institution";
  const [messages, setMessages] = useState(seedMessages);
  const [question, setQuestion] = useState("");
  const [replyInputs, setReplyInputs] = useState({});

  if (!role) return null;

  const sendQuestion = () => {
    if (!question.trim()) return;
    setMessages((prev) => [
      {
        id: Date.now(),
        sender: "Sen",
        question,
        status: "Bekliyor",
        reply: "",
      },
      ...prev,
    ]);
    setQuestion("");
  };

  const reply = (id) => {
    const value = replyInputs[id]?.trim();
    if (!value) return;
    setMessages((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Cevaplandı", reply: value } : item,
      ),
    );
    setReplyInputs((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="app-page-narrow">
      <div className="dense-stack">
        <section className="widget widget-pad">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="page-kicker">İletişim</p>
              <h1 className="page-title mt-2">Destek talepleri</h1>
              <p className="page-subtitle mt-3">
                Öğrenci soruları ve öğretmen yanıtları kompakt akışta tutulur.
              </p>
            </div>
            {canReply && (
              <span className="pill brand-pill">
                <ShieldCheck size={14} /> Yetkili
              </span>
            )}
          </div>
        </section>

        {role === "student" && (
          <section className="widget widget-pad">
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="text-[#9F58FF]" size={22} />
              <p className="widget-title">Yeni soru</p>
            </div>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="min-h-28 w-full resize-none rounded-[1.25rem] border border-white bg-white/76 p-4 text-sm font-semibold outline-none focus:border-[#9F58FF]"
              placeholder="Sorunu yaz..."
            />
            <button onClick={sendQuestion} className="btn-primary mt-3">
              <Send size={17} /> Gönder
            </button>
          </section>
        )}

        <section className="grid gap-3">
          {messages.map((message) => (
            <article key={message.id} className="widget widget-pad">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="icon-chip">
                    <UserRound size={18} />
                  </span>
                  <div>
                    <p className="font-black text-zinc-800">{message.sender}</p>
                    <p className="text-xs font-bold text-zinc-400">
                      {message.status}
                    </p>
                  </div>
                </div>
                {canReply && (
                  <button
                    onClick={() =>
                      setMessages((prev) =>
                        prev.filter((item) => item.id !== message.id),
                      )
                    }
                    className="icon-button icon-button-white"
                  >
                    <Trash2 size={17} />
                  </button>
                )}
              </div>

              <div className="rounded-2xl bg-white/76 p-4 text-sm font-semibold leading-6 text-zinc-700">
                {message.question}
              </div>

              {canReply && !message.reply && (
                <div className="mt-3 flex flex-col gap-2 rounded-2xl bg-white/60 p-2 sm:flex-row">
                  <input
                    value={replyInputs[message.id] || ""}
                    onChange={(event) =>
                      setReplyInputs((prev) => ({
                        ...prev,
                        [message.id]: event.target.value,
                      }))
                    }
                    className="input-field px-4"
                    placeholder="Yanıt yaz..."
                  />
                  <button
                    onClick={() => reply(message.id)}
                    className="btn-primary"
                  >
                    Yanıtla
                  </button>
                </div>
              )}

              {message.reply && (
                <div className="mt-3 flex gap-3 rounded-2xl bg-[#f2e7ff] p-4">
                  <BrainCircuit
                    className="shrink-0 text-[#7A40F2]"
                    size={22}
                  />
                  <div>
                    <p className="text-xs font-black uppercase text-[#7A40F2]">
                      Yanıt
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-zinc-700">
                      {message.reply}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}