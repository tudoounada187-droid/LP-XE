import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, HeartPulse, Scale, Store } from "lucide-react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { caminhoDoAsset } from "@/utilitarios/assets";

const sinaisHero = [
  "Oferta clara para quem chega pelo Instagram",
  "Confiança antes da primeira conversa",
  "Contato preparado pelo WhatsApp ou e-mail",
];

export function DestaqueInicial() {
  return (
    <section id="top" className="relative overflow-hidden px-2 pb-8 pt-24 md:pt-28">
      <motion.div
        className="hero-panel relative mx-auto min-h-[calc(100vh-8rem)] max-w-[1240px] overflow-hidden px-5 py-8 text-ink md:px-10 md:py-10"
        initial="hidden"
        animate="visible"
        variants={animacaoEmSequencia}
      >
        <div className="relative z-10 grid min-h-[calc(100vh-14rem)] items-center gap-10 lg:grid-cols-[1fr_0.76fr]">
          <motion.div variants={aparecerSubindo} className="max-w-5xl">
            <div className="flex items-center gap-4">
              <img
                src={caminhoDoAsset("/images/logo-xe-mark.svg")}
                alt="XE Software"
                className="h-14 w-auto"
              />
              <div className="h-12 w-px bg-line" />
              <p className="font-mono text-xs font-semibold uppercase text-ink-soft">
                Landing pages, sites e sistemas
              </p>
            </div>
            <div className="mt-12">
              <p className="font-mono text-xs font-semibold uppercase text-accent">XE Software</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] text-ink md:text-6xl xl:text-7xl">
                Páginas, sites e sistemas que fazem seu negócio parecer confiável no digital.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft md:text-lg md:leading-8">
                A XE Software cria presença digital para lojas, escritórios, clínicas, consultórios
                e prestadores de serviço que precisam vender melhor, apresentar autoridade e organizar
                processos sem depender só das redes sociais.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {sinaisHero.map((sinal) => (
                  <div key={sinal} className="hero-signal">
                    <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                    <span>{sinal}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#briefing"
                  className="inline-flex min-h-12 items-center gap-2 rounded-pill bg-accent px-5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(30,91,184,0.18)] transition hover:-translate-y-0.5 hover:bg-accent-dark"
                >
                  Quero minha página ou sistema
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#entregas"
                  className="inline-flex min-h-12 items-center rounded-pill border border-line bg-white px-5 text-sm font-extrabold text-ink transition hover:border-accent/40 hover:text-accent"
                >
                  Ver formatos
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={aparecerSubindo} className="hero-proof-board" aria-label="Exemplos de negócios atendidos">
            <div className="hero-proof-media">
              <img src={caminhoDoAsset("/images/hero-chat.svg")} alt="" loading="eager" />
            </div>
            <div className="hero-proof-content">
              <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Projetos para negócios reais</p>
              <div className="mt-5 grid gap-3">
                <div className="audience-pill">
                  <Store className="size-5" aria-hidden="true" />
                  <span>Loja que quer vender com mais contexto</span>
                </div>
                <div className="audience-pill">
                  <Scale className="size-5" aria-hidden="true" />
                  <span>Advogado que precisa passar seriedade</span>
                </div>
                <div className="audience-pill">
                  <HeartPulse className="size-5" aria-hidden="true" />
                  <span>Nutricionista ou clínica que precisa orientar o paciente</span>
                </div>
              </div>
              <div className="hero-chat-bubble">
                "O cliente entende o que você faz antes de perguntar preço."
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
