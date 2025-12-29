import { Play } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const playButtonVariants = cva(
  "bg-white flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 shadow-xl",
  {
    variants: {
      variant: {
        primary: "p-4",
        list: "p-2.5 opacity-0 group-hover:opacity-100 shadow-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof playButtonVariants> {}

const PlayButton = ({ variant, className, ...props }: Props) => {
  const iconSize = variant === "list" ? 14 : 20;

  return (
    <button
      className={cn(playButtonVariants({ variant, className }))}
      {...props}
    >
      <Play size={iconSize} fill="black" className="text-black" />
    </button>
  );
};

export default PlayButton;
