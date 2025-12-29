"use client";

import { useState } from "react";
import { Trophy, Play } from "lucide-react";
import Image from "next/image";
import { Period, Track } from "@/src/models";
import useTopTracks from "@/src/lib/hooks/track/use-top-tracks";
import Button from "../../ui/button";
import PlayButton from "../play-button";

export default function TopTracks() {
  const [period, setPeriod] = useState<Period>("week");

  // Consumindo os dados do TanStack Query
  const { data: topTracks, isLoading, isError } = useTopTracks();

  // Estado de carregamento (Skeleton simples)
  if (isLoading) {
    return (
      <div className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-8 border border-white/5 h-[600px] animate-pulse" />
    );
  }

  // Estado de erro ou sem dados
  if (isError || !topTracks) {
    return (
      <div className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-8 border border-white/5 flex items-center justify-center">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
          Erro ao carregar ranking
        </p>
      </div>
    );
  }

  return (
    <div className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-8 border border-white/5 flex flex-col h-full shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Trophy size={20} className="text-yellow-500" /> Top Hits
        </h3>

        <div className="flex bg-black/40 p-1 rounded-full border border-white/5">
          {(["week", "month", "year"] as const).map((p) => (
            <Button
              key={p}
              variant="toggle"
              size="sm"
              isActive={period === p}
              onClick={() => setPeriod(p)}
            >
              {p === "week" ? "Semana" : p === "month" ? "Mês" : "Ano"}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {/* Agora mapeamos 'topTracks' que vem da API */}
        {topTracks[period]?.map((track: Track, i: number) => (
          <div
            key={track.id}
            className="flex items-center justify-between group cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <span
                className={`text-xl font-black w-6 ${
                  i === 0 ? "text-yellow-500" : "text-zinc-700"
                }`}
              >
                {i + 1}
              </span>

              <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-colors shadow-lg">
                <Image
                  src={track.cover}
                  alt={track.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div>
                <p className="font-bold text-sm group-hover:text-purple-400 transition-colors line-clamp-1">
                  {track.title}
                </p>
                <p className="text-xs text-gray-500">{track.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs font-black">{track.plays}</p>
                <p className="text-[10px] text-gray-600 uppercase font-bold">
                  replays
                </p>
              </div>
              <PlayButton variant="list" />
            </div>
          </div>
        ))}
      </div>

      <Button variant="report" fullWidth className="mt-6 text-[10px]">
        Ver Relatório Completo
      </Button>
    </div>
  );
}
