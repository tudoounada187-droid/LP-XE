import { Code2, FileText, Palette, Rocket, Route, SlidersHorizontal } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { etapasMetodo, formatosMetodo } from "@/dados/metodoTrabalho";
import { classes } from "@/utilitarios/classes";

const iconesEtapas = [FileText, Palette, Code2, Rocket, SlidersHorizontal];

export function MetodoTrabalho() {
  const reduzirMovimento = useReducedMotion();
  const jornadaRef = useRef<HTMLDivElement>(null);
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const { scrollYProgress } = useScroll({
    target: jornadaRef,
    offset: ["start 74%", "end 54%"],
  });
  const progressoSuave = useSpring(scrollYProgress, { stiffness: 46, damping: 22, mass: 0.92, restDelta: 0.0005 });
  const alturaRevelada = useTransform(progressoSuave, [0, 1], [0, 1000]);

  useMotionValueEvent(progressoSuave, "change", (progresso) => {
    const proximaEtapa = Math.min(etapasMetodo.length - 1, Math.round(progresso * (etapasMetodo.length - 1)));
    setIndiceAtivo((etapaAtual) => (etapaAtual === proximaEtapa ? etapaAtual : proximaEtapa));
  });

  return (
    <section id="metodo" className="process-route-section section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-lavender" aria-hidden="true" />
      <div className="container-x relative z-10">
        <div className="process-amphora-panel process-journey-panel">
          <header className="process-route-heading process-journey-heading">
            <div className="section-icon-label">
              <Route aria-hidden="true" />
              <span>Processo</span>
            </div>
            <h2>Do primeiro contexto <em>à entrega que entra em movimento.</em></h2>
            <p>Role para acompanhar cada decisão, entrega e ponto de validação até a publicação.</p>
          </header>

          <div ref={jornadaRef} className="process-journey" role="list" aria-label="Etapas do processo">
            <svg className="process-journey-path" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="process-journey-gradient" x1="18" x2="82" y1="0" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3C3BFF" />
                  <stop offset="52%" stopColor="#7776FF" />
                  <stop offset="100%" stopColor="#A460FF" />
                </linearGradient>
                <mask id="process-journey-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="1000">
                  <motion.rect
                    x="0"
                    y="0"
                    width="100"
                    height={reduzirMovimento ? 1000 : alturaRevelada}
                    fill="#FFFFFF"
                  />
                </mask>
              </defs>
              <path className="process-journey-path-base" d="M47 0 C69 88 72 170 46 250 C23 322 25 407 48 480 C71 553 72 638 47 710 C24 783 27 890 46 1000 L54 1000 C35 890 34 783 57 710 C82 638 81 553 58 480 C35 407 34 322 57 250 C82 170 81 88 53 0 Z" />
              <path className="process-journey-path-glow" mask="url(#process-journey-reveal)" d="M47 0 C69 88 72 170 46 250 C23 322 25 407 48 480 C71 553 72 638 47 710 C24 783 27 890 46 1000 L54 1000 C35 890 34 783 57 710 C82 638 81 553 58 480 C35 407 34 322 57 250 C82 170 81 88 53 0 Z" />
              <path className="process-journey-path-active" mask="url(#process-journey-reveal)" d="M47 0 C69 88 72 170 46 250 C23 322 25 407 48 480 C71 553 72 638 47 710 C24 783 27 890 46 1000 L54 1000 C35 890 34 783 57 710 C82 638 81 553 58 480 C35 407 34 322 57 250 C82 170 81 88 53 0 Z" />
            </svg>

            {etapasMetodo.map((etapa, indice) => {
              const Icone = iconesEtapas[indice];
              const estaAtiva = indice === indiceAtivo;

              return (
                <article key={etapa.titulo} role="listitem" className={classes("process-journey-stop", indice % 2 ? "is-right" : "is-left", estaAtiva && "is-active")}>
                  <motion.span
                    className="process-journey-node"
                    animate={{ scale: estaAtiva ? 1 : 0.78, opacity: estaAtiva ? 1 : 0.58 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.6 }}
                  >
                    <Icone aria-hidden="true" />
                  </motion.span>
                  <motion.div
                    className="process-journey-bubble"
                    initial={reduzirMovimento ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: reduzirMovimento ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="process-journey-kicker">Etapa {String(indice + 1).padStart(2, "0")}</span>
                    <h3>{etapa.titulo}</h3>
                    <p>{etapa.descricao}</p>
                    <strong><span>Entrega</span>{etapa.resultado}</strong>
                  </motion.div>
                </article>
              );
            })}
          </div>

          <div className="process-journey-principles">
            {formatosMetodo.map((formato, indice) => (
              <article key={formato.titulo}>
                <span>{String(indice + 1).padStart(2, "0")}</span>
                <h3>{formato.titulo}</h3>
                <p>{formato.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
