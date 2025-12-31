"use client";

import { Music, Users, Sparkles } from "lucide-react";
import Button from "../../ui/button";
import LogoTitle from "../../ui/logo-title";

export default function LoginView() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? "";
  const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI ?? "";

  const SCOPES = [
    "user-top-read",
    "user-read-recently-played",
    "user-library-read",
    "user-read-private",
    "user-read-email",
  ].join(" ");

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES)}`;

  const handleLogin = () => {
    if (!CLIENT_ID || !REDIRECT_URI) {
      console.error("Configurações do Spotify ausentes no .env");
      return;
    }
    window.location.href = AUTH_URL;
  };

  console.log("REDIRECT_URI:", REDIRECT_URI);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3E2A47] blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-md w-full">
        <LogoTitle size="lg" />
        <p className="text-gray-400 font-medium mb-12 leading-relaxed">
          Descubra sua frequência sonora, compare seu gosto com amigos e
          mergulhe nos seus dados musicais.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: Music, label: "Stats" },
            { icon: Users, label: "Social" },
            { icon: Sparkles, label: "Vibes" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="p-3 bg-zinc-900 rounded-2xl border border-white/5">
                <item.icon size={20} className="text-purple-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant="spotify"
          size="xl"
          fullWidth
          onClick={handleLogin}
          className="gap-3"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.222.363-.694.475-1.055.253-2.812-1.718-6.352-2.105-10.518-1.152-.415.096-.83-.16-.926-.575-.096-.415.16-.83.575-.926 4.562-1.042 8.468-.6 11.666 1.35.362.222.474.694.258 1.05zm1.47-3.253c-.28.455-.878.6-1.334.32-3.22-1.977-8.127-2.548-11.932-1.394-.51.156-1.053-.134-1.21-.644-.156-.51.134-1.053.644-1.21 4.356-1.322 9.775-.68 13.52 1.616.455.28.6.878.312 1.312zm.127-3.41c-3.86-2.292-10.23-2.504-13.916-1.385-.593.18-1.22-.154-1.4-.747-.18-.593.154-1.22.747-1.4 4.234-1.285 11.274-1.033 15.705 1.6 1.107.658 1.483 2.067.825 3.174-.657 1.108-2.066 1.483-3.16 1.358z" />
          </svg>
          ENTRAR COM SPOTIFY
        </Button>

        <p className="mt-8 text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em]">
          Não armazenamos suas senhas.
        </p>
      </div>
    </div>
  );
}
