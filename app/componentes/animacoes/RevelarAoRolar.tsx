import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { aparecerSubindo } from "./variantes";

type PropriedadesRevelarAoRolar = {
  children: ReactNode;
  className?: string;
  atraso?: number;
};

export function RevelarAoRolar({ children, className, atraso = 0 }: PropriedadesRevelarAoRolar) {
  const reduzirMovimento = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={
        reduzirMovimento
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0 } },
            }
          : {
              hidden: aparecerSubindo.hidden,
              visible: {
                ...aparecerSubindo.visible,
                transition: { ...aparecerSubindo.visible.transition, delay: atraso },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
