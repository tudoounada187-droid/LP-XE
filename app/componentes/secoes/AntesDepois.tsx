import { CheckCircle2, XCircle } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";

const antes = [
  "Só Instagram ou WhatsApp para explicar tudo",
  "Pouca confiança antes da primeira conversa",
  "Informações espalhadas em posts, planilhas e mensagens",
  "Cliente precisa perguntar tudo no direct",
];

const depois = [
  "Página profissional com serviços claros",
  "Botão de orçamento e contato facilitado",
  "Mais credibilidade para quem compara opções",
  "Sistema ou formulário para organizar a rotina",
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

        <RevelarAoRolar atraso={0.08} className="before-after-board">
          <article className="before-after-panel before">
            <p className="font-mono text-xs font-semibold uppercase">Antes</p>
            <h3>Presença digital improvisada</h3>
            <div className="mt-6 grid gap-3">
              {antes.map((item) => (
                <div key={item} className="before-after-item">
                  <XCircle className="size-5" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="before-after-panel after">
            <p className="font-mono text-xs font-semibold uppercase">Depois</p>
            <h3>Experiência clara para pedir orçamento</h3>
            <div className="mt-6 grid gap-3">
              {depois.map((item) => (
                <div key={item} className="before-after-item">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
