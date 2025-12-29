"use client";

import { useState } from "react";
import { Music, Users, Calendar, ArrowRight } from "lucide-react";
import StatCard from "../components/ui/stat-card";
import TopTracks from "../components/featured/top-tracks";
import Header from "../components/layout/header";
import TopArtist from "../components/featured/top-artist";
import LoginView from "../components/auth/login-view";
import Footer from "../components/layout/footer";
import HistoryCard from "../components/featured/history-card";
import DayVibeCard from "../components/featured/day-vibe-card";

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
        <DayVibeCard />

        <HistoryCard />
        {/* <FriendActivity /> */}
      </div>
      <Footer />
    </main>
  );
}
