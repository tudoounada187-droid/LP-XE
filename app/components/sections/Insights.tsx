import { insights } from "@/data/insights";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Insights() {
  return (
    <section id="insights" className="section-pad section-transition relative overflow-hidden bg-white">
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevealOnScroll>
          <p className="font-mono text-sm text-ink-soft">Insights</p>
          <h2 className="editorial-h2 mt-4">Conteudo e bastidores</h2>
          <span className="gradient-rule mt-6" />
        </RevealOnScroll>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <article key={item.title} className="brand-card rounded-card p-6 transition-transform duration-300 hover:-translate-y-1">
              <p className="font-mono text-xs font-semibold uppercase text-ink-soft">{item.date}</p>
              <h3 className="mt-10 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink-soft">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
