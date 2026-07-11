import { motion, useReducedMotion } from "motion/react";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";
import { caminhoDoAsset } from "@/utilitarios/assets";

const linksNavegacao = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#entregas" },
  { label: "Processo", href: "#metodo" },
  { label: "FAQ", href: "#faq" },
];

export function Cabecalho() {
  const reduzirMovimento = useReducedMotion();

  return (
    <motion.header
      className="site-header"
      initial={reduzirMovimento ? false : { opacity: 0, y: -28, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: reduzirMovimento ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header-shell">
        <a href="#top" className="site-header-brand" aria-label="Voltar ao início">
          <img src={caminhoDoAsset("/images/logo-xe-mark-light.svg")} alt="" className="h-8 w-auto" />
        </a>
        <nav className="site-header-nav" aria-label="Navegação principal">
          {linksNavegacao.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <BotaoConversar href="#briefing" className="site-header-cta">
          <span className="site-header-cta-light" aria-hidden="true" />
          <span className="site-header-cta-text">Vamos conversar</span>
        </BotaoConversar>
      </div>
    </motion.header>
  );
}
