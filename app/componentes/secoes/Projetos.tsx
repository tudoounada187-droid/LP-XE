import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, FolderKanban, Laptop, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { PreviewProjeto, type TipoDispositivo } from "@/componentes/projetos/PreviewProjeto";
import { projetos } from "@/dados/projetos";
import { classes } from "@/utilitarios/classes";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

const dispositivos = [
  { id: "macbook", nome: "MacBook", Icone: Laptop },
  { id: "imac", nome: "iMac", Icone: Monitor },
  { id: "ipad", nome: "iPad", Icone: Tablet },
  { id: "iphone", nome: "iPhone", Icone: Smartphone },
] satisfies ReadonlyArray<{ id: TipoDispositivo; nome: string; Icone: typeof Laptop }>;

export function Projetos() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [dispositivoAtivo, setDispositivoAtivo] = useState<TipoDispositivo>("macbook");
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
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x projects-showcase-layout">
        <RevelarAoRolar className="projects-showcase-heading">
          <div className="section-icon-label"><FolderKanban aria-hidden="true" /><span>Projetos</span></div>
          <div>
            <h2>Projetos em diferentes telas.</h2>
            <p>Escolha o dispositivo e navegue pelos cases.</p>
          </div>
        </RevelarAoRolar>

        <div className="device-selector" role="group" aria-label="Escolher mockup do dispositivo">
          {dispositivos.map(({ id, nome, Icone }) => (
            <button
              key={id}
              type="button"
              aria-pressed={dispositivoAtivo === id}
              className={classes("device-selector-button", dispositivoAtivo === id && "is-active")}
              onClick={() => setDispositivoAtivo(id)}
            >
              <Icone aria-hidden="true" />
              <span>{nome}</span>
            </button>
          ))}
        </div>

        <div className="projects-carousel" tabIndex={0} onKeyDown={lidarComTeclado} aria-label="Carrossel de projetos">
          <button type="button" className="project-arrow project-arrow-previous" onClick={() => mudarProjeto(-1)} aria-label="Projeto anterior">
            <ChevronLeft aria-hidden="true" />
          </button>

          <div className="projects-carousel-stage" aria-live="polite">
            <AnimatePresence initial={false} mode="wait" custom={direcao}>
              <motion.article
                key={`${projetoAtivo.nome}-${dispositivoAtivo}`}
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

                <div className="project-device-stage">
                  <PreviewProjeto tipo={projetoAtivo.preview} dispositivo={dispositivoAtivo} />
                </div>

                <div className="project-carousel-description">
                  <p>{projetoAtivo.resultado}</p>
                  <dl>
                    <div><dt>Problema</dt><dd>{projetoAtivo.problema}</dd></div>
                    <div><dt>Entrega</dt><dd>{projetoAtivo.entrega}</dd></div>
                    <div><dt>Foco</dt><dd>{projetoAtivo.foco}</dd></div>
                  </dl>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button type="button" className="project-arrow project-arrow-next" onClick={() => mudarProjeto(1)} aria-label="Próximo projeto">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="project-carousel-progress" aria-label={`Projeto ${indiceAtivo + 1} de ${projetos.length}`}>
          <span>{String(indiceAtivo + 1).padStart(2, "0")}</span>
          <i><b style={{ width: `${((indiceAtivo + 1) / projetos.length) * 100}%` }} /></i>
          <span>{String(projetos.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
