import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";

const transformacoes = [
  {
    antes: "O cliente vê um post, gosta, mas não encontra uma explicação completa.",
    depois: "A página apresenta oferta, benefícios, provas, dúvidas e chamada para contato.",
  },
  {
    antes: "O escritório ou consultório depende de rede social para parecer confiável.",
    depois: "O site organiza atuação, diferenciais, método, canais e sinais de credibilidade.",
  },
  {
    antes: "Informação importante fica espalhada entre planilhas, conversas e anotações.",
    depois: "O fluxo vira uma interface para cadastrar, consultar, acompanhar e decidir.",
  },
];

export function AntesDepois() {
  return (
    <section id="transformacao" className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <RotuloSecao>Antes e depois</RotuloSecao>
            <h2 className="editorial-h2 mt-4">Do contato confuso ao caminho claro</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft lg:justify-self-end">
            A estética precisa trabalhar junto com conteúdo e função: reduzir dúvidas, melhorar a
            percepção de valor e deixar o próximo passo óbvio.
          </p>
        </RevelarAoRolar>

        <div className="mt-12 grid gap-4">
          {transformacoes.map((item, indice) => (
            <RevelarAoRolar key={item.antes} atraso={indice * 0.05} className="before-after-row">
              <div>
                <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Antes</p>
                <p className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.antes}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase text-accent">Depois</p>
                <p className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.depois}</p>
              </div>
            </RevelarAoRolar>
          ))}
        </div>
      </div>
    </section>
  );
}
