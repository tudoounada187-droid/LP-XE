import { motion } from "motion/react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { CartaoProjeto } from "@/componentes/interface/CartaoProjeto";
import { projetos } from "@/dados/projetos";

export function Projetos() {
  return (
    <section id="projetos" className="brand-dark section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="eyebrow-text">Projetos</p>
            <h2 className="editorial-h2 mt-3">Trabalhos pensados para gerar confiança e conversão.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-contrast-ink-soft md:justify-self-end">
            Os exemplos abaixo mostram formatos de entrega possíveis, com telas simuladas e uma
            explicação prática do problema, da solução e do resultado esperado.
          </p>
        </RevelarAoRolar>
        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={animacaoEmSequencia}
        >
          {projetos.map((projeto) => (
            <motion.div key={projeto.nome} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <CartaoProjeto projeto={projeto} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
