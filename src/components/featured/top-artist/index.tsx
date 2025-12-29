"use client";

import { useTopArtist } from "@/src/lib/hooks/artist/use-top-artist";
import { TrendingUp, Play } from "lucide-react";
import PlayButton from "../play-button";

export default function TopArtist() {
  const { data: artist, isLoading, isError } = useTopArtist();

  if (isLoading) {
    return (
      <div className="md:col-span-2 md:row-span-2 h-[450px] bg-zinc-900 animate-pulse rounded-[3rem]" />
    );
  }

  if (isError || !artist) {
    return (
      <div className="md:col-span-2 md:row-span-2 h-[450px] bg-zinc-900 rounded-[3rem] flex items-center justify-center border border-red-500/20">
        <p className="text-gray-500">
          Ops! Não conseguimos carregar o artista.
        </p>
      </div>
    );
  }

  return (
    <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600 to-blue-700 rounded-[3rem] p-10 flex flex-col justify-end relative overflow-hidden group shadow-2xl">
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <TrendingUp size={32} />
      </div>

      <p className="text-purple-200 font-bold mb-2 uppercase tracking-widest text-[10px]">
        Top Artista do Mês
      </p>

      <h2 className="text-6xl font-black mb-6 tracking-tighter italic">
        {artist.name}
      </h2>

      <div className="flex items-center gap-4">
        <PlayButton variant="primary" />
        <div className="flex flex-col">
          <span className="font-black text-xl leading-none">
            {artist.plays}
          </span>
          <span className="text-[10px] uppercase font-bold text-white/60 tracking-tighter">
            replays totais
          </span>
        </div>
      </div>
    </div>
  );
}
