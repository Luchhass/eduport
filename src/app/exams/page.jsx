"use client";

import React, { useState } from "react";
import { BookOpen, CheckSquare, Calendar, Trash2, Plus, X } from "lucide-react";
// Hook importu
import { useRole } from "@/hooks/useRole";

export default function WorkManagementPage() {
  const role = useRole();
  const isEducator = role === "educator";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workList, setWorkList] = useState([
    {
      id: 1,
      type: "deneme",
      title: "TYT Matematik Denemesi",
      dueDate: "2026-03-10",
      progress: 85,
      total: 40,
      solved: 34,
      status: "Yayında",
    },
    {
      id: 2,
      type: "odev",
      title: "Fizik - Optik Soru Çözümü",
      dueDate: "2026-03-08",
      progress: 40,
      total: 20,
      solved: 8,
      status: "Tamamlandı",
    },
  ]);

  // Rol yüklenene kadar bekle
  if (!role) return null;

  const toggleStatus = (id) => {
    setWorkList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Tamamlandı" ? "Yayında" : "Tamamlandı",
            }
          : item,
      ),
    );
  };

  const deleteWork = (id) =>
    setWorkList(workList.filter((work) => work.id !== id));

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-900">Çalışma Takibi</h1>
          <p className="text-zinc-500 font-medium">
            Süreçlerini ve başarı durumunu buradan yönet.
          </p>
        </div>
        {isEducator && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#7A40F2] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#6533cc] shadow-lg transition-all"
          >
            <Plus size={20} /> Yeni Görev Tanımla
          </button>
        )}
      </div>

      {/* Görev Listesi */}
      <div className="grid gap-4">
        {workList.map((work) => {
          const isDone = work.status === "Tamamlandı";
          return (
            <div
              key={work.id}
              className={`bg-white p-6 rounded-[2.5rem] border transition-all ${isDone ? "border-emerald-200" : "border-zinc-100 shadow-sm"}`}
            >
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {!isEducator && (
                    <button
                      onClick={() => toggleStatus(work.id)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isDone ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"}`}
                    >
                      <CheckSquare size={20} />
                    </button>
                  )}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${work.type === "deneme" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`}
                  >
                    {work.type === "deneme" ? (
                      <BookOpen size={24} />
                    ) : (
                      <CheckSquare size={24} />
                    )}
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${isDone ? "text-emerald-800" : "text-zinc-800"}`}
                    >
                      {work.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {work.dueDate}
                      </span>
                      <span>• {work.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full lg:max-w-xs">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-zinc-500 uppercase">
                      {work.solved}/{work.total} Soru
                    </span>
                    <span className="text-[10px] font-black text-purple-600">
                      %{work.progress}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${work.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-6 xl:border-l xl:pl-8 border-zinc-100">
                  {isEducator ? (
                    <>
                      <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase">
                          Katılım
                        </p>
                        <p className="font-black text-zinc-700">28/35</p>
                      </div>
                      <button
                        onClick={() => deleteWork(work.id)}
                        className="text-red-400 hover:text-red-600 p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </>
                  ) : (
                    <div
                      className={`px-5 py-3 rounded-2xl text-xs font-black ${isDone ? "text-emerald-600 bg-emerald-50" : "text-zinc-400 bg-zinc-50"}`}
                    >
                      {isDone ? "Tamamlandı" : "Bekliyor"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal - Eğitmen Özel */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-zinc-800">
                Yeni Görev Tanımla
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              <input
                type="text"
                className="w-full p-4 bg-zinc-50 rounded-2xl border border-zinc-200 outline-none"
                placeholder="Görev Başlığı"
                required
              />
              <button className="w-full bg-[#7A40F2] text-white py-4 rounded-2xl font-bold hover:bg-[#6533cc] transition-all">
                Kaydet ve Yayınla
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
