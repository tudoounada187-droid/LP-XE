import { Code2, FileText, Palette, Rocket, Route, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Fragment, useState } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { etapasMetodo, formatosMetodo } from "@/dados/metodoTrabalho";
import { classes } from "@/utilitarios/classes";

const iconesEtapas = [FileText, Palette, Code2, Rocket, SlidersHorizontal];
const easeEditorial = [0.22, 1, 0.36, 1] as const;

export function MetodoTrabalho() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const reduzirMovimento = useReducedMotion();
  const etapaAtiva = etapasMetodo[indiceAtivo];
  const progresso = `${(indiceAtivo / (etapasMetodo.length - 1)) * 84}%`;

  function mudarEtapa(indice: number) {
    setIndiceAtivo(indice);
  }

  function navegarEntreEtapas(indice: number, direcao: number) {
    const proximo = (indice + direcao + etapasMetodo.length) % etapasMetodo.length;
    mudarEtapa(proximo);
    document.getElementById(`process-step-${proximo}`)?.focus();
  }

  return (
    <section id="metodo" className="process-route-section section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-lavender" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="process-route-heading">
          <div className="section-icon-label">
            <Route aria-hidden="true" />
            <span>Processo</span>
          </div>
          <h2>Da conversa inicial à primeira versão publicada</h2>
          <p>Cada etapa reduz incertezas e deixa o próximo movimento claro até a publicação.</p>
        </RevelarAoRolar>

        <RevelarAoRolar atraso={0.08}>
          <div className="process-route" role="tablist" aria-label="Etapas do processo" style={{ "--route-progress": progresso } as React.CSSProperties}>
            {etapasMetodo.map((etapa, indice) => {
              const Icone = iconesEtapas[indice];
              const estaAtiva = indice === indiceAtivo;

              return (
                <Fragment key={etapa.titulo}>
                  <button
                    id={`process-step-${indice}`}
                    type="button"
                    role="tab"
                    aria-selected={estaAtiva}
                    aria-controls="process-active-detail"
                    className={classes("process-route-step", estaAtiva && "is-active")}
                    onClick={() => mudarEtapa(indice)}
                    onMouseEnter={() => mudarEtapa(indice)}
                    onKeyDown={(evento) => {
                      if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
                        evento.preventDefault();
                        navegarEntreEtapas(indice, 1);
                      }

                      if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
                        evento.preventDefault();
                        navegarEntreEtapas(indice, -1);
                      }
                    }}
                  >
                    <span className="process-route-number">{String(indice + 1).padStart(2, "0")}</span>
                    <span className="process-route-node"><Icone aria-hidden="true" /></span>
                    <strong>{etapa.titulo}</strong>
                  </button>

                  {estaAtiva ? (
                    <AnimatePresence initial={false}>
                      <motion.article
                        key={etapa.titulo}
                        className="process-detail process-detail-mobile"
                        initial={reduzirMovimento ? { opacity: 0 } : { opacity: 0, y: 12, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: reduzirMovimento ? 0.12 : 0.34, ease: easeEditorial }}
                      >
                        <p>Saída da etapa</p>
                        <h3>{etapa.titulo}</h3>
                        <span>{etapa.descricao}</span>
                        <strong>{etapa.resultado}</strong>
                      </motion.article>
                    </AnimatePresence>
                  ) : null}
                </Fragment>
              );
            })}
          </div>

          <AnimatePresence initial={false} mode="wait">
            <motion.article
              key={etapaAtiva.titulo}
              id="process-active-detail"
              role="tabpanel"
              aria-labelledby={`process-step-${indiceAtivo}`}
              className="process-detail process-detail-desktop"
              initial={reduzirMovimento ? { opacity: 0 } : { opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduzirMovimento ? 0.12 : 0.36, ease: easeEditorial }}
            >
              <p>Etapa {String(indiceAtivo + 1).padStart(2, "0")}</p>
              <h3>{etapaAtiva.titulo}</h3>
              <span>{etapaAtiva.descricao}</span>
              <strong>{etapaAtiva.resultado}</strong>
            </motion.article>
          </AnimatePresence>
        </RevelarAoRolar>

        <RevelarAoRolar atraso={0.12} className="process-principles">
          {formatosMetodo.map((formato, indice) => (
            <article key={formato.titulo}>
              <span>{String(indice + 1).padStart(2, "0")}</span>
              <h3>{formato.titulo}</h3>
              <p>{formato.descricao}</p>
            </article>
          ))}
        </RevelarAoRolar>
      </div>
    </section>
  );
}
