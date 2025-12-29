"use client";

const DayVibeCard = () => {
  return (
    <div className="group relative overflow-hidden bg-emerald-500 md:col-span-2 p-8 rounded-[2.5rem] flex items-center justify-between shadow-lg shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-500/40">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-emerald-400/30" />
      <div className="absolute left-1/2 top-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl transition-all duration-1000 group-hover:-translate-y-10 group-hover:opacity-100 opacity-0" />

      <div className="relative z-10">
        <h3 className="text-sm font-black text-emerald-950/40 uppercase tracking-[0.3em] mb-1">
          Vibe do Dia
        </h3>
        <p className="text-3xl font-black text-emerald-950 italic tracking-tighter leading-tight">
          &quot;Energia máxima para codar&quot;
        </p>
      </div>

      <div className="relative z-10 text-7xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
        <span className="relative inline-block">
          🔥
          <span className="absolute inset-0 blur-lg bg-orange-400/0 group-hover:bg-orange-400/40 rounded-full transition-all duration-500 -z-10" />
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default DayVibeCard;
