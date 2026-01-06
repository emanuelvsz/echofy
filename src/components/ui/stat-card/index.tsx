import Image from "next/image";

interface Props {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  cover?: string;
}

const StatCard = ({ title, value, icon: Icon, color, cover }: Props) => (
  <div
    className={`relative overflow-hidden p-6 rounded-3xl ${color} flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer border border-white/10 shadow-xl min-h-[160px]`}
  >
    {cover && (
      <>
        <div className="absolute inset-0 z-0">
          <Image
            src={cover}
            alt="Background cover"
            fill
            className="object-cover opacity-50 grayscale-[0.5] brightness-[0.4]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
      </>
    )}

    <div className="relative z-10 flex justify-between items-start">
      <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm">
        {title}
      </span>
    </div>

    <div className="relative z-10 mt-8">
      <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">
        {value}
      </h3>
    </div>
  </div>
);

export default StatCard;
