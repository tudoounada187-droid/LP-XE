import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FolderKanban } from "lucide-react";
import { useState } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { projetos } from "@/dados/projetos";
import { classes } from "@/utilitarios/classes";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

export function Projetos() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const reduzirMovimento = useReducedMotion();
  const projetoAtivo = projetos[indiceAtivo];

  function mudarProjeto(indice: number) {
    setIndiceAtivo(indice);
  }

  function navegarEntreProjetos(indice: number, direcao: number) {
    const proximo = (indice + direcao + projetos.length) % projetos.length;
    mudarProjeto(proximo);
    document.getElementById(`project-selector-${proximo}`)?.focus();
  }

  return (
    <section id="projetos" className="projects-dossier-section section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="projects-dossier-heading">
          <div className="section-icon-label">
            <FolderKanban aria-hidden="true" />
            <span>Projetos</span>
          </div>
          <h2>Trabalhos pensados para gerar confiança e conversão.</h2>
          <p>
            Os exemplos abaixo mostram formatos de entrega possíveis, com telas simuladas e uma explicação prática do problema,
            da solução e do resultado esperado.
          </p>
        </RevelarAoRolar>

        <RevelarAoRolar atraso={0.08} className="project-dossier">
          <div className="project-selector" role="tablist" aria-label="Selecionar projeto">
            {projetos.map((projeto, indice) => (
              <button
                key={projeto.nome}
                id={`project-selector-${indice}`}
                type="button"
                role="tab"
                aria-selected={indice === indiceAtivo}
                aria-controls="project-dossier-stage"
                className={classes("project-selector-button", indice === indiceAtivo && "is-active")}
                onClick={() => mudarProjeto(indice)}
                onMouseEnter={() => mudarProjeto(indice)}
                onKeyDown={(evento) => {
                  if (evento.key === "ArrowDown" || evento.key === "ArrowRight") {
                    evento.preventDefault();
                    navegarEntreProjetos(indice, 1);
                  }

                  if (evento.key === "ArrowUp" || evento.key === "ArrowLeft") {
                    evento.preventDefault();
                    navegarEntreProjetos(indice, -1);
                  }
                }}
              >
                <span>{String(indice + 1).padStart(2, "0")}</span>
                <strong>{projeto.nome}</strong>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>

          <AnimatePresence initial={false} mode="wait">
            <motion.article
              key={projetoAtivo.nome}
              id="project-dossier-stage"
              role="tabpanel"
              aria-labelledby={`project-selector-${indiceAtivo}`}
              className={`project-stage project-stage-${indiceAtivo}`}
              initial={reduzirMovimento ? { opacity: 0 } : { opacity: 0, x: 16, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={reduzirMovimento ? { opacity: 0 } : { opacity: 0, x: -12, filter: "blur(4px)" }}
              transition={{ duration: reduzirMovimento ? 0.12 : 0.4, ease: easeEditorial }}
            >
              <header className="project-stage-header">
                <span>{projetoAtivo.categoria}</span>
                <span>{projetoAtivo.ano}</span>
              </header>
              <h3>{projetoAtivo.nome}</h3>

              <div className="project-schematic" aria-hidden="true">
                <span className="project-schematic-grid" />
                <span className="project-schematic-frame" />
                <span className="project-schematic-panel project-schematic-panel-a" />
                <span className="project-schematic-panel project-schematic-panel-b" />
                <span className="project-schematic-line project-schematic-line-a" />
                <span className="project-schematic-line project-schematic-line-b" />
                <span className="project-schematic-signal">0{indiceAtivo + 1}</span>
              </div>

              <dl className="project-dossier-details">
                <div>
                  <dt>Problema</dt>
                  <dd>{projetoAtivo.problema}</dd>
                </div>
                <div>
                  <dt>Entrega</dt>
                  <dd>{projetoAtivo.entrega}</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>{projetoAtivo.resultado}</dd>
                </div>
              </dl>
            </motion.article>
          </AnimatePresence>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
