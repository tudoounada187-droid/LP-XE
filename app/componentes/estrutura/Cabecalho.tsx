import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { caminhoDoAsset } from "@/utilitarios/assets";
import { classes } from "@/utilitarios/classes";

const linksNavegacao = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre a XE" },
  { href: "#insights", label: "Insights" },
];

export function Cabecalho() {
  const [rolouPagina, definirRolouPagina] = useState(false);
  const [cabecalhoExpandido, definirCabecalhoExpandido] = useState(false);
  const ultimoScrollY = useRef(0);
  const referenciaCabecalho = useRef<HTMLElement | null>(null);
  const temporizadorFechamento = useRef<number | null>(null);

  const limparTemporizadorFechamento = () => {
    if (temporizadorFechamento.current) {
      window.clearTimeout(temporizadorFechamento.current);
      temporizadorFechamento.current = null;
    }
  };

  useEffect(() => {
    ultimoScrollY.current = window.scrollY;

    const aoRolar = () => {
      const scrollAtual = window.scrollY;
      const rolandoParaBaixo = scrollAtual > ultimoScrollY.current + 4;

      definirRolouPagina(scrollAtual > 56);

      if (scrollAtual <= 56 || rolandoParaBaixo) {
        definirCabecalhoExpandido(false);
      }

      ultimoScrollY.current = scrollAtual;
    };

    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });

    return () => {
      window.removeEventListener("scroll", aoRolar);
      limparTemporizadorFechamento();
    };
  }, []);

  const estaCompacto = rolouPagina && !cabecalhoExpandido;

  const revelarCabecalho = () => {
    limparTemporizadorFechamento();
    if (rolouPagina) {
      definirCabecalhoExpandido(true);
    }
  };

  const esconderCabecalho = (clientX?: number, clientY?: number) => {
    limparTemporizadorFechamento();

    temporizadorFechamento.current = window.setTimeout(() => {
      if (typeof clientX === "number" && typeof clientY === "number") {
        const elementoSobMouse = document.elementFromPoint(clientX, clientY);

        if (elementoSobMouse && referenciaCabecalho.current?.contains(elementoSobMouse)) {
          return;
        }
      }

      definirCabecalhoExpandido(false);
    }, 90);
  };

  return (
    <motion.header
      ref={referenciaCabecalho}
      className={classes("site-header", estaCompacto && "site-header--compact")}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="site-header-shell"
        onPointerEnter={revelarCabecalho}
        onPointerMove={revelarCabecalho}
        onPointerLeave={(event) => esconderCabecalho(event.clientX, event.clientY)}
        onMouseEnter={revelarCabecalho}
        onMouseMove={revelarCabecalho}
        onMouseLeave={(event) => esconderCabecalho(event.clientX, event.clientY)}
        onFocusCapture={revelarCabecalho}
        onBlurCapture={() => esconderCabecalho()}
      >
        <span className="site-header-wave" aria-hidden="true" />

        <a href="#top" className="site-header-brand" aria-label="XE Software - inicio">
          <img src={caminhoDoAsset("/images/logo-xe-mark.svg")} alt="XE Software" className="h-12 w-auto" />
          <span className="hidden font-mono text-xs font-semibold uppercase text-ink md:inline">
            Software
          </span>
        </a>

        <nav className="site-header-nav" aria-label="Principal">
          {linksNavegacao.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-cta-wrap">
          <a href="#contato" className="site-header-cta">
            Começar um projeto
          </a>
        </div>
      </div>
    </motion.header>
  );
}
