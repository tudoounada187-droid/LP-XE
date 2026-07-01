import { motion, useReducedMotion } from "motion/react";
import { classes } from "@/utilitarios/classes";

export function CartaoProjeto({
  projeto,
}: {
  projeto: { nome: string; categoria: string; ano: string; imagem: string; tom: string };
}) {
  const reduzirMovimento = useReducedMotion();

  return (
    <article className="group">
      <div className={classes("brand-card relative overflow-hidden rounded-card p-6", projeto.tom)}>
        <motion.img
          src={projeto.imagem}
          alt={`Mockup do projeto ${projeto.nome}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-contain"
          whileHover={reduzirMovimento ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),rgba(212,90,242,0.08))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{projeto.nome}</h3>
          <p className="mt-1 text-sm text-ink-soft">{projeto.categoria}</p>
        </div>
        <span className="rounded-pill bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent">{projeto.ano}</span>
      </div>
    </article>
  );
}
