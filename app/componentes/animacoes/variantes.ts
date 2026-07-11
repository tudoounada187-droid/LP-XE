import type { Variants } from "motion/react";

const saidaSuave = [0.22, 1, 0.36, 1] as const;

export const aparecerSubindo = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: saidaSuave },
  },
} satisfies Variants;

export const animacaoEmSequencia = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} satisfies Variants;
