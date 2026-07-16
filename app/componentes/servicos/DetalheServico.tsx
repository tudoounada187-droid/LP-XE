import { useEffect, useRef } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import type { Servico } from "@/dados/servicos";
import { caminhoDoAsset } from "@/utilitarios/assets";

type DetalheServicoProps = {
  servico: Servico;
  outrosServicos: Servico[];
  aoFechar: () => void;
  aoSelecionarServico: (servico: Servico) => void;
};

const seletoresFocaveis =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function DetalheServico({
  servico,
  outrosServicos,
  aoFechar,
  aoSelecionarServico,
}: DetalheServicoProps) {
  const painelRef = useRef<HTMLElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const reduzirMovimento = useReducedMotion();
  const tituloId = `titulo-detalhe-${servico.id}`;

  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function fecharComEscape(evento: globalThis.KeyboardEvent) {
      if (evento.key === "Escape") aoFechar();
    }

    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [aoFechar]);

  useEffect(() => {
    painelRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.requestAnimationFrame(() => tituloRef.current?.focus());
  }, [servico.id]);

  function manterFocoNoPainel(evento: ReactKeyboardEvent<HTMLElement>) {
    if (evento.key !== "Tab" || !painelRef.current) return;

    const elementos = Array.from(
      painelRef.current.querySelectorAll<HTMLElement>(seletoresFocaveis),
    ).filter((elemento) => !elemento.hasAttribute("disabled"));

    if (!elementos.length) return;

    const primeiro = elementos[0];
    const ultimo = elementos[elementos.length - 1];

    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primeiro.focus();
    }
  }

  const metadados = [
    ["Ideal para", servico.publicoAlvo],
    ["A partir de", servico.precoInicial],
    ["Prazo", servico.prazo],
    ["Disponibilidade", servico.disponibilidade],
  ];

  return createPortal(
    <div className="service-detail-layer">
      <motion.div
        className="service-detail-backdrop"
        aria-hidden="true"
        onClick={aoFechar}
        initial={reduzirMovimento ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduzirMovimento ? 0 : 0.24 }}
      />

      <motion.article
        ref={painelRef}
        className="service-detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        aria-describedby={`visao-geral-${servico.id}`}
        onKeyDown={manterFocoNoPainel}
        initial={reduzirMovimento ? false : { opacity: 0, y: "4%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduzirMovimento ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="service-detail-topbar">
          <button type="button" className="service-detail-close" onClick={aoFechar} aria-label="Fechar detalhes do serviço">
            <X aria-hidden="true" />
          </button>
        </div>

        <header className="service-detail-hero section-pad">
          <div className="container-x">
            <div className="services-label service-detail-label">
              <span>SERVIÇOS</span>
            </div>
            <p className="service-detail-number">{servico.number}</p>
            <h1 ref={tituloRef} id={tituloId} tabIndex={-1}>{servico.title}</h1>

            <dl className="service-detail-meta">
              {metadados.map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt>{rotulo}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="container-x service-detail-cover-wrap">
          <img className="service-detail-cover" src={caminhoDoAsset(servico.image)} alt={servico.alt} />
        </div>

        <main className="service-detail-content">
          <RevelarAoRolar className="container-x service-detail-section service-detail-overview">
            <p className="service-detail-eyebrow">Visão geral</p>
            <div id={`visao-geral-${servico.id}`} className="service-detail-prose">
              {servico.visaoGeral.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}
            </div>
          </RevelarAoRolar>

          <RevelarAoRolar className="service-detail-included">
            <div className="container-x service-detail-section">
              <p className="service-detail-eyebrow">O que está incluído</p>
              <h2>Uma entrega completa, pronta para funcionar.</h2>
              <ul className="service-detail-checklist">
                {servico.incluidos.map((item) => (
                  <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </RevelarAoRolar>

          <div className="container-x service-detail-process-grid">
            <RevelarAoRolar className="service-detail-process-card">
              <span>01</span>
              <h2>Descoberta &amp; Pesquisa</h2>
              <p>{servico.descobertaTexto}</p>
            </RevelarAoRolar>
            <RevelarAoRolar className="service-detail-process-card" atraso={0.08}>
              <span>02</span>
              <h2>Aplicação &amp; Lançamento</h2>
              <p>{servico.lancamentoTexto}</p>
            </RevelarAoRolar>
          </div>

          <RevelarAoRolar className="service-detail-approach">
            <div className="container-x service-detail-approach-inner">
              <p className="service-detail-eyebrow">Nossa abordagem</p>
              <p>{servico.abordagemTexto}</p>
            </div>
          </RevelarAoRolar>

          <div className="container-x service-detail-back-row">
            <button type="button" onClick={aoFechar} className="service-detail-back-link" aria-label="Voltar à lista de serviços">
              <ArrowLeft aria-hidden="true" /> Voltar aos Serviços
            </button>
          </div>

          <section className="service-detail-related section-pad">
            <div className="container-x">
              <RevelarAoRolar className="service-detail-related-heading">
                <p className="service-detail-eyebrow">Continue explorando</p>
                <h2>Outros serviços da XE</h2>
              </RevelarAoRolar>
              <div className="service-detail-related-grid">
                {outrosServicos.map((outroServico) => (
                  <button
                    type="button"
                    key={outroServico.id}
                    className="service-detail-related-card"
                    onClick={() => aoSelecionarServico(outroServico)}
                    aria-label={`Ver detalhes de ${outroServico.title}`}
                  >
                    <img src={caminhoDoAsset(outroServico.image)} alt="" loading="lazy" />
                    <span>{outroServico.number}</span>
                    <strong>{outroServico.title}</strong>
                    <ArrowRight aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </section>

        </main>
      </motion.article>
    </div>,
    document.body,
  );
}
