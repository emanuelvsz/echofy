"use client";

import { useState } from "react";
import {
  X,
  Calendar,
  BarChart2,
  Zap,
  Heart,
  Clock,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useHistory } from "@/src/lib/hooks/track/use-track-history";

type Period = "daily" | "weekly" | "monthly" | "yearly" | "all";

const HistoryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [period, setPeriod] = useState<Period>("weekly");
  const { data, isLoading } = useHistory();

  if (!isOpen) return null;

  const currentTracks = data ? data[period] : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-white/10 w-full max-w-4xl h-[85vh] rounded-[32px] overflow-hidden flex flex-col shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
          <div>
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <BarChart2 className="text-[#00BA7C]" size={32} />
              Raio-X Musical
            </h2>
            <p className="text-zinc-400 mt-1">Sua jornada sonora detalhada</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-white/5 rounded-full transition-colors"
          >
            <X size={24} className="text-zinc-400" />
          </button>
        </div>

        <div className="flex gap-2 p-4 bg-zinc-900/30 overflow-x-auto no-scrollbar">
          {[
            { id: "daily", label: "Hoje", icon: Clock },
            { id: "weekly", label: "Semana", icon: Calendar },
            { id: "monthly", label: "Mês", icon: BarChart2 },
            { id: "yearly", label: "Ano", icon: Zap },
            { id: "all", label: "Sempre", icon: Heart },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setPeriod(item.id as Period)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                period === item.id
                  ? "bg-[#00BA7C] text-black scale-105"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="animate-spin text-[#00BA7C]" size={40} />
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">
                Mapeando sua vibe...
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
                    Status
                  </p>
                  <p className="text-xl font-bold text-white capitalize">
                    {period}
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
                    Músicas
                  </p>
                  <p className="text-xl font-bold text-white">
                    {currentTracks.length} faixas
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
                    Média de Energia
                  </p>
                  <p className="text-xl font-bold text-[#00BA7C]">
                    {currentTracks.length > 0
                      ? Math.round(
                          currentTracks.reduce(
                            (acc, t) => acc + (t.energy || 0),
                            0
                          ) / currentTracks.length
                        )
                      : 0}
                    %
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {currentTracks.map((track, index) => (
                  <div
                    key={`${track.id}-${index}`}
                    className="group bg-white/5 hover:bg-white/10 p-4 rounded-2xl flex items-center gap-6 transition-all border border-transparent hover:border-white/10"
                  >
                    <span className="text-2xl font-black text-zinc-700 group-hover:text-[#00BA7C] transition-colors w-8">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={track.cover}
                        alt={track.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold truncate text-lg">
                        {track.title}
                      </h4>
                      <p className="text-zinc-400 truncate">{track.artist}</p>
                    </div>

                    <div className="hidden md:flex items-center gap-8 px-4">
                      <div className="text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">
                          Energia
                        </p>
                        <div className="w-16 h-1.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{ width: `${track.energy}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">
                          Vibe
                        </p>
                        <p className="text-sm font-bold text-blue-400">
                          {track.vibe}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">
                          Lealdade
                        </p>
                        <span className="text-[10px] bg-[#00BA7C]/10 text-[#00BA7C] px-2 py-0.5 rounded border border-[#00BA7C]/20 uppercase font-black">
                          {track.loyalty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
