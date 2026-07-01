import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Letreiro } from "@/componentes/interface/Letreiro";
import { CartaoDepoimento } from "@/componentes/interface/CartaoDepoimento";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { tecnologias } from "@/dados/tecnologias";
import { depoimentos } from "@/dados/depoimentos";

export function Experiencia() {
  const [indice, definirIndice] = useState(0);
  const [pausado, definirPausado] = useState(false);
  const reduzirMovimento = useReducedMotion();
  const depoimentoAtual = depoimentos[indice];

  useEffect(() => {
    if (pausado || reduzirMovimento || depoimentos.length < 2) return;
    const temporizador = window.setInterval(() => definirIndice((valor) => (valor + 1) % depoimentos.length), 6000);
    return () => window.clearInterval(temporizador);
  }, [pausado, reduzirMovimento]);

  return (
    <section className="section-pad section-transition relative overflow-hidden bg-white">
      <span className="soft-orb -right-56 top-16 h-[38rem] w-[38rem] opacity-60" aria-hidden="true" />
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-sm text-ink-soft">Experiência.</p>
            <h2 className="editorial-h2 mt-4">
              A XE Software nasce com foco em soluções digitais sob medida para profissionais, empresas e negócios locais.
            </h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="text-lg leading-8 text-ink-soft md:justify-self-end">
            A atuação une visão de Engenharia de Software, desenvolvimento web, design de interface
            e construção de páginas profissionais.{" "}
            <span className="placeholder-copy">
              [Adicionar números reais de projetos/clientes quando houver autorização para divulgar]
            </span>
          </p>
        </RevelarAoRolar>
        <div className="mt-12">
          <Letreiro itens={tecnologias} />
        </div>
        <div
          className="mt-12"
          onMouseEnter={() => definirPausado(true)}
          onMouseLeave={() => definirPausado(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={indice}
              initial={{ opacity: 0, x: reduzirMovimento ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduzirMovimento ? 0 : -40 }}
              transition={{ duration: reduzirMovimento ? 0 : 0.35 }}
            >
              <CartaoDepoimento depoimento={depoimentoAtual} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              {depoimentos.map((item, indiceBotao) => (
                <button
                  key={item.nome}
                  type="button"
                  aria-label={`Abrir depoimento ${indiceBotao + 1}`}
                  className={`relative z-10 min-h-11 min-w-11 rounded-pill border transition ${indiceBotao === indice ? "brand-gradient border-transparent shadow-[0_12px_24px_rgba(37,99,235,0.18)]" : "border-line bg-white"}`}
                  onClick={() => definirIndice(indiceBotao)}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Depoimento anterior"
                className="grid size-11 place-items-center rounded-pill border border-line bg-white shadow-[0_12px_28px_rgba(16,24,40,0.06)] transition hover:border-accent/40 hover:text-accent"
                onClick={() => definirIndice((indice - 1 + depoimentos.length) % depoimentos.length)}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                className="grid size-11 place-items-center rounded-pill border border-line bg-white shadow-[0_12px_28px_rgba(16,24,40,0.06)] transition hover:border-accent/40 hover:text-accent"
                onClick={() => definirIndice((indice + 1) % depoimentos.length)}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
