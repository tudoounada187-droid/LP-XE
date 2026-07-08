import { Botao } from "@/componentes/interface/Botao";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";

type PropriedadesChamadaFinal = {
  aoSolicitarOrcamento: () => void;
};

export function ChamadaFinal({ aoSolicitarOrcamento }: PropriedadesChamadaFinal) {
  return (
    <section id="contato" className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x brand-card relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <div className="brand-wave opacity-60" aria-hidden="true" />
        <RevelarAoRolar className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="font-mono text-sm text-ink-soft">Próximo passo</p>
            <h2 className="editorial-h2 mt-4 max-w-3xl">Pronto para tirar sua ideia do papel?</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white/90 p-4 shadow-[0_16px_35px_rgba(16,24,40,0.06)]">
                <p className="font-bold">Resposta pelo direct</p>
                <p className="mt-2 text-sm text-ink-soft">Orçamentos e primeiros contatos pelo Instagram da XE Software.</p>
              </div>
              <div className="rounded-2xl border border-line bg-white/90 p-4 shadow-[0_16px_35px_rgba(16,24,40,0.06)]">
                <p className="font-bold">Próximos passos claros</p>
                <p className="mt-2 text-sm text-ink-soft">Diagnóstico, escopo e decisão.</p>
              </div>
            </div>
            <Botao tipo="botao" onClick={aoSolicitarOrcamento} className="mt-6">
              Falar sobre meu projeto
            </Botao>
          </div>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
