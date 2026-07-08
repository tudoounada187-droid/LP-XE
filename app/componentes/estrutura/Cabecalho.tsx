import { motion } from "motion/react";

type PropriedadesCabecalho = {
  aoSolicitarOrcamento: () => void;
};

export function Cabecalho({ aoSolicitarOrcamento }: PropriedadesCabecalho) {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header-shell">
        <button type="button" className="site-header-cta" onClick={aoSolicitarOrcamento}>
          Solicitar orçamento
        </button>
      </div>
    </motion.header>
  );
}
