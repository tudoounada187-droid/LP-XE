import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";
import { classes } from "@/utilitarios/classes";

type PropriedadesBase = {
  children: ReactNode;
  className?: string;
  variante?: "escuro" | "destaque" | "claro";
};

type PropriedadesBotao =
  | (PropriedadesBase & {
      tipo?: "link";
      href: string;
      target?: string;
      rel?: string;
    })
  | (PropriedadesBase & {
      tipo: "botao";
      onClick: MouseEventHandler<HTMLButtonElement>;
    });

export function Botao(props: PropriedadesBotao) {
  const { children, className, variante = "escuro" } = props;
  const reduzirMovimento = useReducedMotion();
  const variantes = {
    escuro: "bg-ink text-white hover:bg-[#17181C]",
    destaque: "brand-gradient text-white shadow-[0_16px_38px_rgba(37,99,235,0.2)]",
    claro: "border border-line bg-white text-ink hover:border-accent/40 hover:text-accent",
  };

  if (props.tipo === "botao") {
    return (
      <motion.button
        type="button"
        className={classes(
          "group relative z-10 inline-flex min-h-12 items-center gap-2 rounded-pill px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
          variantes[variante],
          className,
        )}
        whileHover={reduzirMovimento ? undefined : { scale: 1.02 }}
        whileTap={reduzirMovimento ? undefined : { scale: 0.98 }}
        onClick={props.onClick}
      >
        <span>{children}</span>
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </motion.button>
    );
  }

  return (
    <motion.a
      className={classes(
        "group relative z-10 inline-flex min-h-12 items-center gap-2 rounded-pill px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variantes[variante],
        className,
      )}
      whileHover={reduzirMovimento ? undefined : { scale: 1.02 }}
      whileTap={reduzirMovimento ? undefined : { scale: 0.98 }}
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span>{children}</span>
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.a>
  );
}
