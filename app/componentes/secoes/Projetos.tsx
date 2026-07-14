import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, FolderKanban } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { PreviewProjeto } from "@/componentes/projetos/PreviewProjeto";
import { projetos } from "@/dados/projetos";
import { classes } from "@/utilitarios/classes";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

export function Projetos() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [detalhesAbertos, setDetalhesAbertos] = useState(false);
  const [direcao, setDirecao] = useState(1);
  const reduzirMovimento = useReducedMotion();
  const projetoAtivo = projetos[indiceAtivo];

  function mudarProjeto(passo: number) {
    setDirecao(passo);
    setIndiceAtivo((indiceAtual) => (indiceAtual + passo + projetos.length) % projetos.length);
  }

  function lidarComTeclado(evento: KeyboardEvent<HTMLDivElement>) {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      mudarProjeto(-1);
    } else if (evento.key === "ArrowRight") {
      evento.preventDefault();
      mudarProjeto(1);
    }
  }

  const transicaoPainel = reduzirMovimento
    ? { duration: 0.12 }
    : { duration: 0.42, ease: easeEditorial };

  return (
    <section id="projetos" className="projects-showcase-section section-transition text-contrast-ink">
      <div className="section-wave-out wave-to-process" aria-hidden="true" />
      <div className="container-x projects-showcase-layout">
        <RevelarAoRolar className="projects-showcase-heading">
          <div className="section-icon-label"><FolderKanban aria-hidden="true" /><span>Projetos</span></div>
          <div>
            <h2>Projetos em movimento.</h2>
            <p>Do site ao sistema, acompanhe cada experiência em desktop.</p>
          </div>
        </RevelarAoRolar>

        <div className="projects-carousel" tabIndex={0} onKeyDown={lidarComTeclado} aria-label="Carrossel de projetos">
          <button type="button" className="project-arrow project-arrow-previous" onClick={() => mudarProjeto(-1)} aria-label="Projeto anterior">
            <ChevronLeft aria-hidden="true" />
          </button>

          <div className="projects-carousel-stage" aria-live="polite">
            <AnimatePresence initial={false} mode="wait" custom={direcao}>
              <motion.article
                key={projetoAtivo.nome}
                className="project-carousel-panel"
                initial={reduzirMovimento ? { opacity: 0 } : { opacity: 0, x: direcao * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduzirMovimento ? { opacity: 0 } : { opacity: 0, x: direcao * -18 }}
                transition={transicaoPainel}
              >
                <header>
                  <span>{projetoAtivo.categoria}</span>
                  <h3>{projetoAtivo.nome}</h3>
                </header>

                <button
                  type="button"
                  className={classes("project-device-stage", detalhesAbertos && "is-details-open")}
                  aria-expanded={detalhesAbertos}
                  aria-label={detalhesAbertos ? "Fechar detalhes do projeto" : "Ver detalhes do projeto"}
                  onClick={() => setDetalhesAbertos((abertos) => !abertos)}
                >
                  <PreviewProjeto tipo={projetoAtivo.preview} />
                  <div className="project-device-details" aria-hidden={!detalhesAbertos}>
                    <div className="project-carousel-summary">
                      <span>Descrição</span>
                      <p>{projetoAtivo.resultado}</p>
                    </div>

                    <div className="project-carousel-description">
                      <dl>
                        <div><dt>Problema</dt><dd>{projetoAtivo.problema}</dd></div>
                        <div><dt>Entrega</dt><dd>{projetoAtivo.entrega}</dd></div>
                        <div><dt>Foco</dt><dd>{projetoAtivo.foco}</dd></div>
                      </dl>
                    </div>
                    <span className="project-device-details-action">Clique novamente para voltar</span>
                  </div>
                </button>
              </motion.article>
            </AnimatePresence>
          </div>

          <button type="button" className="project-arrow project-arrow-next" onClick={() => mudarProjeto(1)} aria-label="Próximo projeto">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  );
}
