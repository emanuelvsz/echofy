"use client";

import { useAuth } from "@/src/providers/auth-provider";
import Button from "../../ui/button";
import LogoTitle from "../../ui/logo-title";
import Image from "next/image";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <LogoTitle size="md" />
        <div className="mt-1">
          <p className="text-gray-500 font-medium">
            Bem-vindo de volta,{" "}
            <span className="text-[#00BA7C]">
              {user?.display_name || "usuário"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user?.images?.[0] && (
          <div className="relative w-10 h-10">
            <Image
              src={user.images[0].url}
              alt="Profile"
              fill
              className="rounded-full border border-gray-700 object-cover"
              sizes="40px"
            />
          </div>
        )}
        <Button variant="outline">Meu Perfil</Button>
      </div>
    </header>
  );
};

export default Header;
