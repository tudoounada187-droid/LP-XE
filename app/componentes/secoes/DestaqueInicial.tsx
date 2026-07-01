import { motion } from "motion/react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { caminhoDoAsset } from "@/utilitarios/assets";

const entregasHero = [
  {
    titulo: "Presença profissional",
    descricao: "Uma página clara, moderna e preparada para apresentar seu negócio.",
    icone: "/images/hero-monitor.svg",
  },
  {
    titulo: "Contato mais fácil",
    descricao: "Botões, formulários e chamadas diretas para WhatsApp ou orçamento.",
    icone: "/images/hero-chat.svg",
  },
  {
    titulo: "Soluções sob medida",
    descricao: "Sistemas simples ou completos para melhorar a rotina da empresa.",
    icone: "/images/hero-puzzle.svg",
  },
];

export function DestaqueInicial() {
  return (
    <section id="top" className="relative overflow-hidden px-2 pb-8 pt-24 md:pt-28">
      <span className="soft-orb -right-32 top-10 h-96 w-96" aria-hidden="true" />
      <span className="soft-orb -left-40 top-48 h-[34rem] w-[34rem] opacity-70" aria-hidden="true" />
      <motion.div
        className="brand-card relative mx-auto min-h-[calc(100vh-8rem)] max-w-[1240px] overflow-hidden rounded-[2.5rem] px-5 py-8 text-ink md:px-10 md:py-10"
        initial="hidden"
        animate="visible"
        variants={animacaoEmSequencia}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full border border-white bg-[radial-gradient(circle,#fff_0%,#F1F2F6_52%,transparent_53%)] opacity-90" />
        <div className="brand-wave" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[calc(100vh-14rem)] flex-col">
          <motion.div variants={aparecerSubindo} className="flex items-center gap-4">
            <img
              src={caminhoDoAsset("/images/logo-xe-mark.svg")}
              alt="XE Software"
              className="h-14 w-auto"
            />
            <div className="h-12 w-px bg-line" />
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">
              Software
            </p>
          </motion.div>

          <motion.div variants={aparecerSubindo} className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.34fr)] xl:items-end">
            <div>
              <span className="gradient-rule mb-6" />
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-ink md:text-5xl xl:text-6xl">
                Sites, landing pages e sistemas para empresas que querem crescer no digital
              </h1>
            </div>
          </motion.div>

          <motion.div
            variants={aparecerSubindo}
            className="mt-auto pt-10"
          >
            <div className="rounded-[1.75rem] border border-line bg-white/92 p-6 shadow-card backdrop-blur-xl md:p-7">
              <p className="text-xl font-extrabold leading-tight md:text-2xl">
                O que entregamos além de um site bonito
              </p>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-ink-soft md:text-base">
                Mais do que um site ou sistema, entregamos soluções que geram resultados para o seu negócio.
              </p>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {entregasHero.map(({ titulo, descricao, icone }) => (
                  <article
                    key={titulo}
                    className="flex items-center gap-4 rounded-[1.25rem] border border-line bg-white/82 p-4 text-left shadow-[0_14px_34px_rgba(16,24,40,0.05)]"
                  >
                    <span className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-2xl">
                      <img
                        src={caminhoDoAsset(icone)}
                        alt=""
                        aria-hidden="true"
                        className="size-20 object-contain"
                      />
                    </span>
                    <span>
                      <strong className="block text-sm font-extrabold text-ink md:text-base">
                        {titulo}
                      </strong>
                      <span className="mt-1 block text-sm font-medium leading-6 text-ink-soft">
                        {descricao}
                      </span>
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
