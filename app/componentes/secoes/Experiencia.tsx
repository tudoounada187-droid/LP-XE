import { Letreiro } from "@/componentes/interface/Letreiro";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { tecnologias } from "@/dados/tecnologias";

export function Experiencia() {
  return (
    <section className="section-pad section-transition relative overflow-hidden bg-white">
      <span className="soft-orb -right-56 top-16 h-[38rem] w-[38rem] opacity-60" aria-hidden="true" />
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-sm text-ink-soft">Experiência</p>
            <h2 className="editorial-h2 mt-4">
              A XE Software nasce com foco em soluções digitais sob medida para profissionais, empresas e negócios locais
            </h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="text-lg leading-8 text-ink-soft md:justify-self-end">
            A atuação une visão de Engenharia de Software, desenvolvimento web, design de interface
            e construção de páginas profissionais.{" "}
            <span className="placeholder-copy">
              [Adicionar números reais de projetos/clientes quando houver autorização para divulgar]
            </span>
          </p>
        </RevelarAoRolar>
        <div className="mt-12">
          <Letreiro itens={tecnologias} />
        </div>
      </div>
    </section>
  );
}
