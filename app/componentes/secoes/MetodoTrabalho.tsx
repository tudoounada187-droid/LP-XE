import { Code2, FileText, Palette, Rocket, SlidersHorizontal } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { etapasMetodo, formatosMetodo } from "@/dados/metodoTrabalho";

const iconesEtapas = [FileText, Palette, Code2, Rocket, SlidersHorizontal];

export function MetodoTrabalho() {
  return (
    <section id="metodo" className="brand-dark section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-lavender" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <RevelarAoRolar>
          <p className="eyebrow-text">Processo</p>
          <h2 className="editorial-h2 mt-4">Da conversa inicial à primeira versão publicada</h2>
          <div className="mt-10 space-y-4">
            {formatosMetodo.map((formato) => (
              <article key={formato.titulo} className="process-note">
                <h3>{formato.titulo}</h3>
                <p>{formato.descricao}</p>
              </article>
            ))}
          </div>
        </RevelarAoRolar>
        <RevelarAoRolar atraso={0.1}>
          <div className="timeline-card">
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Linha do tempo</p>
            <div className="timeline-list">
              {etapasMetodo.map((etapa, indice) => {
                const Icone = iconesEtapas[indice];

                return (
                  <article key={etapa.titulo} className="timeline-step">
                    <span className="timeline-index">{String(indice + 1).padStart(2, "0")}</span>
                    <span className="timeline-icon">
                      <Icone className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{etapa.titulo}</h3>
                      <p>{etapa.descricao}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
