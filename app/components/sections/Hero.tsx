import { motion, useReducedMotion } from "motion/react";
import { fadeUp, staggerContainer } from "@/components/animations/variants";
import { assetPath } from "@/lib/assets";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden px-2 pb-8 pt-24 md:pt-28">
      <span className="soft-orb -right-32 top-10 h-96 w-96" aria-hidden="true" />
      <span className="soft-orb -left-40 top-48 h-[34rem] w-[34rem] opacity-70" aria-hidden="true" />
      <motion.div
        className="brand-card relative mx-auto min-h-[calc(100vh-8rem)] max-w-[1240px] overflow-hidden rounded-[2.5rem] px-5 py-8 text-ink md:px-10 md:py-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full border border-white bg-[radial-gradient(circle,#fff_0%,#F1F2F6_52%,transparent_53%)] opacity-90" />
        <div className="brand-wave" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[calc(100vh-14rem)] flex-col">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <img
              src={assetPath("/images/logo-xe-mark.svg")}
              alt="XE Software"
              className="h-14 w-auto"
            />
            <div className="h-12 w-px bg-line" />
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">
              Software
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.34fr)] xl:items-end">
            <div>
              <span className="gradient-rule mb-6" />
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-ink md:text-5xl xl:text-6xl">
                Design e tecnologia que despertam desejo, inspiram confiança e destravam crescimento.
              </h1>
            </div>
            <p className="max-w-sm text-lg font-medium leading-8 text-ink-soft xl:justify-self-end">
              Somos especialistas em criar e refinar produtos digitais com visão estratégica,
              execução afiada e foco total na experiência.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-auto grid gap-8 pt-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"
          >
            <div>
              <p className="max-w-2xl text-xl font-medium leading-8 text-ink">
              Presença digital, produto e interface trabalhando juntos para gerar confiança e crescimento.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato" className="brand-gradient relative z-10 inline-flex min-h-12 items-center justify-center rounded-pill px-6 text-sm font-bold text-white shadow-[0_16px_38px_rgba(37,99,235,0.22)] transition-transform hover:scale-[1.02]">
                  Diagnosticar meu produto
                </a>
                <a href="#projetos" className="inline-flex min-h-12 items-center justify-center rounded-pill border border-line bg-white px-6 text-sm font-bold text-ink transition hover:border-accent/40 hover:text-accent">
                  Ver projetos
                </a>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-line bg-white/88 p-6 shadow-card">
              <p className="text-sm font-bold leading-tight">Para empresas que querem</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                crescer, escalar, reposicionar e entregar mais valor através do digital.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {["Design", "Front-end", "Produto"].map((item) => (
                  <span key={item} className="rounded-2xl bg-accent-soft px-3 py-2 text-xs font-bold text-accent">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
