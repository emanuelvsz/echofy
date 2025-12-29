import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 font-black",
  {
    variants: {
      variant: {
        spotify:
          "bg-[#1DB954] hover:bg-[#1ed760] text-black shadow-xl shadow-green-500/20 rounded-full uppercase",
        report:
          "bg-zinc-800/50 border border-white/5 text-gray-400 hover:bg-white hover:text-black rounded-2xl uppercase tracking-[0.2em]",
        outline:
          "bg-zinc-900 border border-white/10 text-white hover:bg-white hover:text-black rounded-full",
        toggle: "rounded-full text-[10px] uppercase tracking-tighter",
      },
      size: {
        sm: "px-4 py-1.5",
        md: "px-6 py-2",
        lg: "py-4 px-8",
        xl: "py-5 px-10",
      },
      isActive: {
        true: "bg-white text-black",
        false: "text-gray-500 hover:text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  variant,
  size,
  isActive,
  fullWidth,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, isActive, fullWidth, className })
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
