import { Play, TrendingUp } from "lucide-react";

const TopArtist = () => {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600 to-[#3E2A47] rounded-[3rem] p-10 flex flex-col justify-end relative overflow-hidden group shadow-2xl">
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <TrendingUp size={32} />
      </div>
      <p className="text-purple-200 font-bold mb-2 uppercase tracking-widest text-xs">
        Top Artista
      </p>
      <h2 className="text-6xl font-black mb-6 tracking-tighter">
        Kendrick Lamar
      </h2>
      <div className="flex items-center gap-4">
        <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition-transform">
          <Play fill="black" size={20} />
        </button>
        <span className="font-bold text-lg text-white/80">142 reproduções</span>
      </div>
    </div>
  );
};

export default TopArtist;
