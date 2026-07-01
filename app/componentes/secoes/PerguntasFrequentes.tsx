import { useState } from "react";
import { Acordeao } from "@/componentes/interface/Acordeao";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { perguntasFrequentes } from "@/dados/perguntasFrequentes";

export function PerguntasFrequentes() {
  const [indiceAberto, definirIndiceAberto] = useState(0);

  return (
    <section className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.55fr_1fr]">
        <RevelarAoRolar>
          <p className="font-mono text-sm text-ink-soft">FAQ.</p>
          <h2 className="editorial-h2 mt-4">Perguntas que aparecem antes de começar</h2>
          <span className="gradient-rule mt-6" />
          <p className="mt-6 leading-7 text-ink-soft">
            Respostas curtas para alinhar expectativa, processo e responsabilidade de entrega.
          </p>
        </RevelarAoRolar>
        <Acordeao
          itens={perguntasFrequentes}
          indiceAberto={indiceAberto}
          aoAlternar={(valor) => definirIndiceAberto(indiceAberto === valor ? -1 : valor)}
        />
      </div>
    </section>
  );
}
