import { motion } from "motion/react";

export function Cabecalho() {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header-shell">
        <a href="#contato" className="site-header-cta">
          Solicitar orçamento
        </a>
      </div>
    </motion.header>
  );
}
