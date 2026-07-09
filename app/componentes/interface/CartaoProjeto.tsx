import { ArrowUpRight } from "lucide-react";

type Projeto = {
  nome: string;
  categoria: string;
  ano: string;
  problema: string;
  entrega: string;
  resultado: string;
  foco: string;
};

export function CartaoProjeto({
  projeto,
}: {
  projeto: Projeto;
}) {
  return (
    <article className="case-card group h-full rounded-card border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow-text">{projeto.categoria}</p>
          <h3 className="mt-4 text-2xl font-medium leading-tight">{projeto.nome}</h3>
        </div>
        <span className="case-year">{projeto.ano}</span>
      </div>
      <div className="mt-7 space-y-4">
        <div>
          <p className="eyebrow-text">Contexto</p>
          <p className="mt-2 leading-7 text-ink-soft">{projeto.problema}</p>
        </div>
        <div>
          <p className="eyebrow-text">Entrega</p>
          <p className="mt-2 leading-7 text-ink-soft">{projeto.entrega}</p>
        </div>
        <div>
          <p className="eyebrow-text">Resultado</p>
          <p className="mt-2 leading-7 text-ink-soft">{projeto.resultado}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <strong className="text-sm font-medium text-ink">{projeto.foco}</strong>
        <ArrowUpRight className="size-4 text-ink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
    </article>
  );
}
