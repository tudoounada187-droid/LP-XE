import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { etapasMetodo, formatosMetodo } from "@/dados/metodoTrabalho";

export function MetodoTrabalho() {
  return (
    <section id="metodo" className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <RevelarAoRolar>
          <p className="font-mono text-sm text-ink-soft">Processo</p>
          <h2 className="editorial-h2 mt-4">Da conversa inicial à primeira versão publicada</h2>
          <span className="gradient-rule mt-6" />
          <div className="mt-10 space-y-4">
            {formatosMetodo.map((formato) => (
              <article key={formato.titulo} className="brand-card rounded-[1.35rem] p-5">
                <span className="gradient-rule h-1 w-10" />
                <h3 className="mt-4 text-xl font-bold">{formato.titulo}</h3>
                <p className="mt-2 leading-7 text-ink-soft">{formato.descricao}</p>
              </article>
            ))}
          </div>
        </RevelarAoRolar>
        <RevelarAoRolar atraso={0.1}>
          <div className="brand-card rounded-card p-6">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(218,221,230,0.8)]">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Fluxo base</p>
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-accent" />
                  <span className="size-3 rounded-full bg-accent-2" />
                  <span className="size-3 rounded-full bg-line" />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {etapasMetodo.map((etapa, indice) => (
                  <div key={etapa} className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4">
                    <span className="brand-gradient grid size-8 place-items-center rounded-pill font-mono text-xs font-semibold text-white">{String(indice + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{etapa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
