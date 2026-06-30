import { motion } from "motion/react";
import { Clock3, Gem, Layers3 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { staggerContainer } from "@/components/animations/variants";
import { Counter } from "@/components/ui/Counter";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    index: "01",
    title: "Presença digital",
    question: "Seu perfil passa confiança, mas ainda não tem uma página profissional?",
    answer:
      "Criamos páginas ligadas ao seu perfil para apresentar seus serviços com mais clareza e facilitar o contato dos clientes.",
  },
  {
    index: "02",
    title: "Clareza",
    question: "Sua oferta é boa, mas o cliente não entende rápido o que você faz?",
    answer:
      "Organizamos texto, visual e estrutura para que sua solução seja compreendida sem confusão.",
  },
  {
    index: "03",
    title: "Sob medida",
    question: "Você precisa de algo mais específico do que um modelo pronto?",
    answer:
      "Criamos sites, landing pages e sistemas adaptados ao contexto do seu negócio, com foco no que realmente precisa ser entregue.",
  },
];

const icons = [Clock3, Gem, Layers3];

export function WhyChooseUs() {
  return (
    <section id="sobre" className="section-pad section-transition relative overflow-hidden bg-white">
      <span className="soft-orb -left-52 top-10 h-[38rem] w-[38rem] opacity-60" aria-hidden="true" />
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevealOnScroll>
          <SectionLabel>Por que escolher a XE Software</SectionLabel>
          <h2 className="editorial-h2 mt-4 max-w-3xl">Quando contratar a XE Software faz sentido</h2>
          <span className="gradient-rule mt-6" />
        </RevealOnScroll>
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
        >
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={reason.index}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                className="brand-card rounded-card p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-accent-soft">
                  <Icon className="outline-icon size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-bold">{reason.title}</h3>
                <p className="mt-4 font-semibold">{reason.question}</p>
                <p className="mt-3 leading-7 text-ink-soft">{reason.answer}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <div className="mt-16 grid gap-4 md:grid-cols-4">
          <Counter value={3} suffix="" label="frentes principais: sites, landing pages e sistemas" />
          <Counter value={2026} suffix="" label="ano de estruturação e expansão da XE Software" />
          <Counter value={1} suffix="" label="equipe enxuta com atendimento direto e foco em qualidade" />
          <Counter value={100} suffix="%" label="das entregas pensadas para celular, clareza e contato fácil" />
        </div>
      </div>
    </section>
  );
}
