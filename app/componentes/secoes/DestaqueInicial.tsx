import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";

const tituloHero = "Design e tecnologia para empresas que querem crescer de verdade.";

export function DestaqueInicial() {
  const reduzirMovimento = useReducedMotion();

  return (
    <section id="top" className="hero-clean relative overflow-hidden px-4 pb-28 pt-28 md:pb-36 md:pt-32">
      <motion.div
        className="container-x"
        initial="hidden"
        animate="visible"
        variants={animacaoEmSequencia}
      >
        <motion.div variants={animacaoEmSequencia} className="hero-clean-content">
          <h1 aria-label={tituloHero}>
            {reduzirMovimento
              ? tituloHero
              : tituloHero.split(" ").map((palavra, indiceDaPalavra, palavras) => {
                  const indiceInicial = palavras
                    .slice(0, indiceDaPalavra)
                    .reduce((total, palavraAnterior) => total + palavraAnterior.length, 0);

                  return (
                    <Fragment key={`${palavra}-${indiceDaPalavra}`}>
                      <span className="hero-word" aria-hidden="true">
                        {Array.from(palavra).map((letra, indiceDaLetra) => (
                          <motion.span
                            key={`${letra}-${indiceDaLetra}`}
                            className="hero-letter"
                            initial={{ opacity: 0, y: "0.38em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                              duration: 0.46,
                              delay: 0.05 + (indiceInicial + indiceDaLetra) * 0.021,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            {letra}
                          </motion.span>
                        ))}
                      </span>
                      {indiceDaPalavra < palavras.length - 1 ? " " : null}
                    </Fragment>
                  );
                })}
          </h1>
          <motion.p variants={aparecerSubindo}>
            Criamos sites, landing pages e sistemas com visual profissional, estratégia e performance
            para transformar visitantes em oportunidades.
          </motion.p>
          <motion.div variants={aparecerSubindo}>
            <BotaoConversar href="#briefing" className="button-dark hero-main-cta">
              Vamos conversar
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </BotaoConversar>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="section-wave-out wave-to-dark hero-wave-out" aria-hidden="true" />
    </section>
  );
}
