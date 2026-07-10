import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";

export function DestaqueInicial() {
  return (
    <section id="top" className="hero-clean relative overflow-hidden px-4 pb-28 pt-28 md:pb-36 md:pt-32">
      <motion.div
        className="container-x"
        initial="hidden"
        animate="visible"
        variants={animacaoEmSequencia}
      >
        <motion.div variants={aparecerSubindo} className="hero-clean-content">
          <h1>Design e tecnologia para empresas que querem crescer de verdade.</h1>
          <p>
            Criamos sites, landing pages e sistemas com visual profissional, estratégia e performance
            para transformar visitantes em oportunidades.
          </p>
          <BotaoConversar href="#briefing" className="button-dark hero-main-cta">
            Vamos conversar
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </BotaoConversar>
        </motion.div>
      </motion.div>
      <div className="section-wave-out wave-to-dark hero-wave-out" aria-hidden="true" />
    </section>
  );
}
