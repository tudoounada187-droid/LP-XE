import { motion } from "motion/react";
import { caminhoDoAsset } from "@/utilitarios/assets";

type PropriedadesCabecalho = {
  aoSolicitarOrcamento: () => void;
};

const linksNavegacao = [
  { label: "Entregas", href: "#entregas" },
  { label: "Clientes", href: "#publicos" },
  { label: "Transformação", href: "#transformacao" },
  { label: "Cases", href: "#projetos" },
  { label: "Processo", href: "#metodo" },
];

export function Cabecalho({ aoSolicitarOrcamento }: PropriedadesCabecalho) {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header-shell">
        <a href="#top" className="site-header-brand" aria-label="Voltar ao início">
          <img src={caminhoDoAsset("/images/logo-xe-mark.svg")} alt="" className="h-8 w-auto" />
          <span>XE Software</span>
        </a>
        <nav className="site-header-nav" aria-label="Navegação principal">
          {linksNavegacao.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button type="button" className="site-header-cta" onClick={aoSolicitarOrcamento}>
          Enviar briefing
        </button>
      </div>
    </motion.header>
  );
}
