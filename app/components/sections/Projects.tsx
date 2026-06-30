import { motion } from "motion/react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { staggerContainer } from "@/components/animations/variants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="section-pad section-transition relative overflow-hidden bg-bg">
      <span className="soft-orb -right-48 top-20 h-[34rem] w-[34rem] opacity-70" aria-hidden="true" />
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevealOnScroll className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-ink-soft">XE Software</p>
            <h2 className="editorial-h2 mt-3">Projetos.</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-soft md:justify-self-end">
            Soluções digitais criadas para comunicar melhor, facilitar processos e aproximar empresas
            dos seus clientes. <span className="placeholder-copy">[Cases públicos em organização]</span>
          </p>
        </RevealOnScroll>
        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
