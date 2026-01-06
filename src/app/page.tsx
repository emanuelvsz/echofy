"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Music, Users } from "lucide-react";
import StatCard from "../components/ui/stat-card";
import TopTracks from "../components/featured/top-tracks";
import Header from "../components/layout/header";
import TopArtist from "../components/featured/top-artist";
import Footer from "../components/layout/footer";
import HistoryCard from "../components/featured/history-card";
import DayVibeCard from "../components/featured/day-vibe-card";
import { useAuth } from "../providers/auth-provider";
import { useOnLoopTrack } from "../lib/hooks/track/use-on-loop-track";
import HistoryModal from "../components/featured/history-modal";

export default function HomePage() {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { user, loading } = useAuth();
  const { data: onLoopTrack, isLoading: isLoadingLoop } = useOnLoopTrack();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <p className="animate-pulse">Sintonizando sua vibe...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 max-w-7xl mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TopArtist />
        <TopTracks />

        <StatCard
          title="Música em Loop"
          value={
            isLoadingLoop ? "Carregando..." : onLoopTrack?.title || "Sem dados"
          }
          icon={Music}
          color="bg-zinc-900"
          cover={onLoopTrack?.cover}
        />
        <StatCard
          title="Amigos Online"
          value="12 ativos"
          icon={Users}
          color="bg-zinc-900"
        />
        <DayVibeCard />
        <HistoryCard onClick={() => setIsHistoryOpen(true)} />
      </div>
      <Footer />
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </main>
  );
}
