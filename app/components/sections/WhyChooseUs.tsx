import { motion } from "motion/react";
import { Clock3, Gem, Layers3 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { staggerContainer } from "@/components/animations/variants";
import { Counter } from "@/components/ui/Counter";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  {
    index: "01",
    title: "Tempo",
    question: "Voce precisa sair do ciclo de tentativa?",
    answer: "Trabalhamos com decisao documentada, checkpoints curtos e execucao concentrada.",
  },
  {
    index: "02",
    title: "Custo",
    question: "O barato ja saiu caro?",
    answer: "A especificacao vem antes do codigo para reduzir refacao invisivel e improviso.",
  },
  {
    index: "03",
    title: "Entrega",
    question: "Precisa de acabamento de produto?",
    answer: "Design, front-end e performance sao tratados como partes do mesmo sistema.",
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
          <SectionLabel>Por que nos escolher</SectionLabel>
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
          <Counter value={100} suffix="%" label="dos projetos com spec validada antes do codigo" />
          <Counter value={3} suffix="" label="[Formatos de contratacao a definir]" />
          <Counter value={1} suffix="" label="fundador full stack dedicado a qualidade" />
          <Counter value={0} suffix="" label="[Numero real de projetos a preencher]" />
        </div>
      </div>
    </section>
  );
}
