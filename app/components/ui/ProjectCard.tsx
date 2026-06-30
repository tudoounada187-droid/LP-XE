import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
}: {
  project: { name: string; category: string; year: string; image: string; tone: string };
}) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="group">
      <div className={cn("brand-card relative overflow-hidden rounded-card p-6", project.tone)}>
        <motion.img
          src={project.image}
          alt={`Mockup do projeto ${project.name}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-contain"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),rgba(212,90,242,0.08))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{project.category}</p>
        </div>
        <span className="rounded-pill bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent">{project.year}</span>
      </div>
    </article>
  );
}
