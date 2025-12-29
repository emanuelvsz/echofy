import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const logoTitleVariants = cva(
  "font-black tracking-tighter italic pl-2 -ml-2 pr-4",
  {
    variants: {
      size: {
        sm: "text-2xl bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent leading-relaxed",
        md: "text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 leading-relaxed",
        lg: "text-6xl mb-4 leading-tight",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface Props extends VariantProps<typeof logoTitleVariants> {
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

const LogoTitle = ({ size, className, as: Tag = "h1" }: Props) => {
  return (
    <Tag className={cn(logoTitleVariants({ size, className }))}>ECHOFY</Tag>
  );
};

export default LogoTitle;
