import { motion } from "motion/react";
import { Clock3, Gem, Layers3 } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { Contador } from "@/componentes/interface/Contador";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";
import { metricasEscolha, motivosEscolha } from "@/dados/motivosEscolha";

const icones = [Clock3, Gem, Layers3];

export function PorQueEscolher() {
  return (
    <section id="sobre" className="section-pad section-transition relative overflow-hidden bg-white">
      <span className="soft-orb -left-52 top-10 h-[38rem] w-[38rem] opacity-60" aria-hidden="true" />
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar>
          <RotuloSecao>Por que escolher a XE Software</RotuloSecao>
          <h2 className="editorial-h2 mt-4 max-w-3xl">Quando contratar a XE Software faz sentido</h2>
          <span className="gradient-rule mt-6" />
        </RevelarAoRolar>
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={animacaoEmSequencia}
        >
          {motivosEscolha.map((motivo, indice) => {
            const Icone = icones[indice];
            return (
              <motion.article
                key={motivo.indice}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                className="brand-card rounded-card p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-accent-soft">
                  <Icone className="outline-icon size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-bold">{motivo.titulo}</h3>
                <p className="mt-4 font-semibold">{motivo.pergunta}</p>
                <p className="mt-3 leading-7 text-ink-soft">{motivo.resposta}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {metricasEscolha.map((metrica) => (
            <Contador key={metrica.rotulo} valor={metrica.valor} sufixo={metrica.sufixo} rotulo={metrica.rotulo} />
          ))}
        </div>
      </div>
    </section>
  );
}
