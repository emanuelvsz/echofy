import { useState, useEffect } from "react";

interface Track {
  id: string;
  title: string;
  artist: string;
  plays: string;
  cover: string;
  energy: number;
  vibe: string;
  loyalty: string;
}

interface HistoryData {
  daily: Track[];
  weekly: Track[];
  monthly: Track[];
  yearly: Track[];
  all: Track[];
}

export function useHistory() {
  const [data, setData] = useState<HistoryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "https://echofy-backend-tau.vercel.app/track/history",
          {
            credentials: "include",
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!response.ok) throw new Error("Falha ao carregar histórico");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return { data, isLoading, error };
}
