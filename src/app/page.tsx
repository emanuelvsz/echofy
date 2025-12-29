"use client";

import { useState } from "react";
import { Music, Users, Calendar } from "lucide-react";
import StatCard from "../components/stat-card";
import TopTracks from "../components/top-tracks";
import { FriendActivity } from "../components/friend-activity";
import Header from "../components/header";
import TopArtist from "../components/top-artist";
import LoginView from "../components/login-view";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 max-w-7xl mx-auto">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TopArtist />
        <TopTracks />

        <StatCard
          title="Música em Loop"
          value="Not Like Us"
          icon={Music}
          color="bg-zinc-900"
        />

        <StatCard
          title="Amigos Online"
          value="12 ativos"
          icon={Users}
          color="bg-zinc-900"
        />

        <div className="bg-emerald-500 md:col-span-2 p-8 rounded-[2.5rem] flex items-center justify-between shadow-lg shadow-emerald-500/20">
          <div>
            <h3 className="text-sm font-black text-emerald-950/50 uppercase tracking-widest">
              Vibe do Dia
            </h3>
            <p className="text-2xl font-black text-emerald-950 italic">
              &quot;Energia máxima para codar&quot;
            </p>
          </div>
          <div className="text-6xl drop-shadow-lg">🔥</div>
        </div>

        <div className="bg-orange-500 p-8 rounded-[2.5rem] flex flex-col justify-between text-orange-950 shadow-lg shadow-orange-500/20">
          <Calendar size={32} strokeWidth={2.5} />
          <div>
            <h3 className="text-2xl font-black leading-none">Histórico</h3>
            <p className="text-sm font-bold opacity-70 mt-2">
              Explorar passado →
            </p>
          </div>
        </div>

        <FriendActivity />
      </div>
    </main>
  );
}
