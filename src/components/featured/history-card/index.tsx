import { ArrowRight, Calendar } from "lucide-react";

interface Props {
  onClick?: () => void; // Adicionamos a prop de clique
}

const HistoryCard = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-orange-500 p-8 rounded-[2.5rem] flex flex-col items-start gap-4 text-orange-950 shadow-lg shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/40 hover:brightness-105"
    >
      <Calendar
        size={32}
        strokeWidth={2.5}
        className="-ml-1 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 origin-top-left"
      />

      <div>
        <h3 className="text-3xl font-black leading-none tracking-tighter">
          Histórico
        </h3>
        <div className="flex items-center gap-3 mt-3 text-sm font-bold opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:gap-5">
          <p className="uppercase tracking-wider">Explorar passado</p>
          <ArrowRight
            size={18}
            className="transition-transform duration-500 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
