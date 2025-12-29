interface Props {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: Props) => (
  <div
    className={`p-6 rounded-3xl ${color} flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer border border-white/10 shadow-xl`}
  >
    <div className="flex justify-between items-start">
      <div className="p-2 bg-white/20 rounded-xl">
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
        {title}
      </span>
    </div>
    <div className="mt-8">
      <h3 className="text-2xl font-black text-white">{value}</h3>
    </div>
  </div>
);

export default StatCard;
