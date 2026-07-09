import { RotuloSecao } from "@/componentes/interface/RotuloSecao";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { servicos } from "@/dados/servicos";

export function Servicos() {
  return (
    <section id="entregas" className="section-pad section-transition relative overflow-hidden bg-white text-ink">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-8 md:grid-cols-[0.7fr_1fr]">
          <div>
            <RotuloSecao>O que fazemos</RotuloSecao>
            <h2 className="editorial-h2 mt-4">Soluções digitais com estratégia, clareza e acabamento profissional.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft">
            Página, site e sistema têm responsabilidades diferentes. Um prepara a venda, outro sustenta
            reputação e o terceiro transforma rotina em ferramenta.
          </p>
        </RevelarAoRolar>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {servicos.map((servico, indice) => (
            <article key={servico.titulo} className="service-tile">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-semibold text-ink-soft">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-8 text-2xl font-medium leading-tight">{servico.titulo}</h3>
              <p className="mt-3 font-mono text-xs font-semibold uppercase text-accent">{servico.indicado}</p>
              <p className="mt-4 leading-7 text-ink-soft">{servico.descricao}</p>
              <a href="#briefing" className="mt-8 inline-flex text-sm font-medium text-ink hover:text-accent-dark">
                Quero avaliar esse formato
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
