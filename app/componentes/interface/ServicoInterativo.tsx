import type { KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Servico } from "@/dados/servicos";
import { caminhoDoAsset } from "@/utilitarios/assets";
import { classes } from "@/utilitarios/classes";

const transicaoImagem = {
  duration: 0.62,
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

function SetaServico() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 3L22 12L13 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PreviaServico({
  servico,
  direcao = 1,
  className,
}: {
  servico: Servico;
  direcao?: 1 | -1;
  className?: string;
}) {
  const reduzirMovimento = useReducedMotion();
  const imagem = caminhoDoAsset(servico.image);

  return (
    <div className={classes("service-preview", className)} aria-live="polite">
      <AnimatePresence initial={false} mode="popLayout" custom={direcao}>
        {reduzirMovimento ? (
          <motion.img
            key={servico.id}
            src={imagem}
            alt={servico.alt}
            className="service-preview-reduced"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
        ) : (
          <motion.img
            key={servico.id}
            src={imagem}
            alt={servico.alt}
            className="service-preview-slide"
            custom={direcao}
            variants={{
              entrar: (sentido: 1 | -1) => ({ y: sentido > 0 ? "100%" : "-100%" }),
              centro: { y: "0%" },
              sair: (sentido: 1 | -1) => ({ y: sentido > 0 ? "-100%" : "100%" }),
            }}
            initial="entrar"
            animate="centro"
            exit="sair"
            transition={transicaoImagem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function BotaoServico({
  servico,
  ativo,
  focavel,
  indice,
  variante,
  referencia,
  aoAtivar,
  aoDesativar,
  aoAbrirDetalhes,
  aoNavegar,
}: {
  servico: Servico;
  ativo: boolean;
  focavel: boolean;
  indice: number;
  variante: "desktop" | "mobile";
  referencia: (elemento: HTMLButtonElement | null) => void;
  aoAtivar: () => void;
  aoDesativar: () => void;
  aoAbrirDetalhes: (elemento: HTMLButtonElement) => void;
  aoNavegar: (evento: KeyboardEvent<HTMLButtonElement>, indice: number) => void;
}) {
  const painel = variante === "desktop" ? "service-panel-desktop" : `service-panel-mobile-${servico.id}`;

  return (
    <button
      ref={referencia}
      id={`service-tab-${variante}-${servico.id}`}
      type="button"
      role="tab"
      aria-selected={ativo}
      aria-expanded={variante === "mobile" ? ativo : undefined}
      aria-haspopup="dialog"
      aria-controls={painel}
      tabIndex={focavel ? 0 : -1}
      className={classes("service-selector-item", ativo && "is-active")}
      onMouseEnter={aoAtivar}
      onMouseLeave={aoDesativar}
      onFocus={aoAtivar}
      onBlur={aoDesativar}
      onClick={(evento) => aoAbrirDetalhes(evento.currentTarget)}
      onKeyDown={(evento) => aoNavegar(evento, indice)}
    >
      <span className="service-selector-copy">
        <span className="service-selector-number">{servico.number}</span>
        <span className="service-selector-title">{servico.title}</span>
      </span>
      <span className="service-selector-arrow" aria-hidden="true">
        <SetaServico />
      </span>
      <span className="service-selector-line" aria-hidden="true" />
    </button>
  );
}
