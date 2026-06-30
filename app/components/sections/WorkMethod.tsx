import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const methods = [
  ["Escopo fechado", "Projeto com entrega definida, prazo claro e criterios objetivos de aceite."],
  ["Escopo aberto", "Descoberta e construcao iterativa quando ainda ha incerteza relevante."],
  ["Parceria continua", "Evolucao recorrente para produtos que precisam de melhoria constante."],
];

export function WorkMethod() {
  return (
    <section className="section-pad section-transition relative overflow-hidden bg-bg">
      <span className="soft-orb -left-48 top-0 h-[34rem] w-[34rem] opacity-50" aria-hidden="true" />
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <RevealOnScroll>
          <p className="font-mono text-sm text-ink-soft">Metodo</p>
          <h2 className="editorial-h2 mt-4">Metodo claro, adaptado ao seu contexto</h2>
          <span className="gradient-rule mt-6" />
          <div className="mt-10 space-y-4">
            {methods.map(([title, body], index) => (
              <article key={title} className="brand-card rounded-[1.35rem] p-5">
                <span className="gradient-rule h-1 w-10" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-ink-soft">{body}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="brand-card rounded-card p-6">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(218,221,230,0.8)]">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-accent" />
                <span className="size-3 rounded-full bg-accent-2" />
                <span className="size-3 rounded-full bg-line" />
              </div>
              <div className="mt-8 space-y-3">
                {["Diagnostico", "Spec validada", "Design", "Front-end", "Entrega"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4">
                    <span className="brand-gradient grid size-8 place-items-center rounded-pill font-mono text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
