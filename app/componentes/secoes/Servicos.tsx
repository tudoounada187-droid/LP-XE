import { useState } from "react";
import { Acordeao } from "@/componentes/interface/Acordeao";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { servicos } from "@/dados/servicos";

export function Servicos() {
  const [indiceAberto, definirIndiceAberto] = useState(0);

  return (
    <section id="servicos" className="brand-dark section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-8 md:grid-cols-[0.7fr_1fr]">
          <div>
            <RotuloSecao claro>Serviços ({servicos.length})</RotuloSecao>
            <h2 className="editorial-h2 mt-4">Serviços.</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-2xl text-lg leading-8 text-contrast-ink-soft">
            Atuamos na criação de páginas, sistemas e experiências digitais sob medida para quem
            precisa sair do improviso e ter uma presença online mais profissional.
          </p>
        </RevelarAoRolar>
        <div className="mt-12">
          <Acordeao
            itens={servicos}
            indiceAberto={indiceAberto}
            aoAlternar={(indice) => definirIndiceAberto(indiceAberto === indice ? -1 : indice)}
            contraste
          />
        </div>
      </div>
    </section>
  );
}
