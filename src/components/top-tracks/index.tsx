"use client";

import { useState } from "react";
import { Trophy, Play } from "lucide-react";
import Image from "next/image"; 
import { TopHitsData, Period, Track } from "@/src/models";

const DATA: TopHitsData = {
  week: [
    {
      id: 1,
      title: "Not Like Us",
      artist: "Kendrick Lamar",
      plays: "142",
      cover: "https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad",
    },
    {
      id: 2,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      plays: "98",
      cover: "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5",
    },
    {
      id: 3,
      title: "Million Dollar Baby",
      artist: "Tommy Richman",
      plays: "85",
      cover: "https://i.scdn.co/image/ab67616d0000b273210733c8f23a7172e6ef5705",
    },
  ],
  month: [
    {
      id: 1,
      title: "Euphoria",
      artist: "Kendrick Lamar",
      plays: "520",
      cover: "https://i.scdn.co/image/ab67616d0000b2737587213b1be294ac4000f648",
    },
    {
      id: 2,
      title: "Pink+White",
      artist: "Frank Ocean",
      plays: "410",
      cover: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    },
  ],
  year: [
    {
      id: 1,
      title: "Starboy",
      artist: "The Weeknd",
      plays: "2.4k",
      cover: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      plays: "1.9k",
      cover: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    },
  ],
};

export default function TopTracks() {
  const [period, setPeriod] = useState<Period>("week");

  return (
    <div className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-8 border border-white/5 flex flex-col h-full shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Trophy size={20} className="text-yellow-500" /> Top Hits
        </h3>

        <div className="flex bg-black/40 p-1 rounded-full border border-white/5">
          {(["week", "month", "year"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-tighter font-black transition-all ${
                period === p
                  ? "bg-white text-black"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {p === "week" ? "Semana" : p === "month" ? "Mês" : "Ano"}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {DATA[period].map((track: Track, i: number) => (
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
              <button className="opacity-0 group-hover:opacity-100 bg-white p-2.5 rounded-full transition-all hover:scale-110 shadow-lg">
                <Play size={14} fill="black" className="text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-4 bg-zinc-800/50 border border-white/5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all text-gray-400">
        Ver Relatório Completo
      </button>
    </div>
  );
}