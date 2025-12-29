"use client";

import { Instagram, Facebook, Linkedin, Github, Heart } from "lucide-react";
import LogoTitle from "../../ui/logo-title";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
    { icon: Github, href: "https://github.com", label: "Github" },
  ];

  return (
    <footer className="mt-12 border-t border-white/5 pt-12 pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <LogoTitle size="sm" as="h2" />
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
            Criado por{" "}
            <span className="text-purple-400 font-black">Emanuel Vilela</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 p-3 rounded-2xl border border-white/5 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:scale-110 transition-all shadow-lg"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/[0.02] pt-8 text-[10px] uppercase font-black tracking-widest text-zinc-600">
        <p>© {currentYear} Emanuel Vilela. Todos os direitos reservados.</p>
        <div className="flex items-center gap-1">
          Feito com{" "}
          <Heart size={10} className="text-purple-500 fill-purple-500" /> para
          amantes de música
        </div>
      </div>
    </footer>
  );
};

export default Footer;
