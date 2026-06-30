import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "dark" | "accent" | "light";
  target?: string;
  rel?: string;
};

export function Button({ children, className, variant = "dark", ...props }: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const variants = {
    dark: "bg-ink text-white hover:bg-[#17181C]",
    accent: "brand-gradient text-white shadow-[0_16px_38px_rgba(37,99,235,0.2)]",
    light: "border border-line bg-white text-ink hover:border-accent/40 hover:text-accent",
  };

  return (
    <motion.a
      className={cn(
        "group relative z-10 inline-flex min-h-12 items-center gap-2 rounded-pill px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className,
      )}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.a>
  );
}
