"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface SpotifyUser {
  display_name: string;
  images: { url: string }[];
  email: string;
}

interface AuthContextType {
  user: SpotifyUser | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SpotifyUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(
          "https://echofy-backend-tau.vercel.app/api/me",
          {
            credentials: "include",
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setUser(data);
          sessionStorage.setItem("echofy_user", JSON.stringify(data));
        } else if (res.status === 401) {
          handleAuthFailure();
        }
      } catch (error) {
        console.error("Erro ao validar sessão:", error);
        handleAuthFailure();
      } finally {
        setLoading(false);
      }
    };

    const handleAuthFailure = () => {
      setUser(null);
      sessionStorage.removeItem("echofy_user");
    };

    checkUser();
  }, []);

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("echofy_user");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
