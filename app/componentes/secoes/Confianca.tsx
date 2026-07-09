import { BadgeCheck, Gauge, Globe2, MessageCircle, Smartphone, Wrench } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";

const selos = [
  {
    titulo: "Layout responsivo",
    descricao: "Experiência pensada para celular, tablet e desktop.",
    icone: Smartphone,
  },
  {
    titulo: "Site rápido",
    descricao: "Código leve, páginas objetivas e boa base técnica.",
    icone: Gauge,
  },
  {
    titulo: "Design profissional",
    descricao: "Visual moderno sem perder clareza comercial.",
    icone: BadgeCheck,
  },
  {
    titulo: "WhatsApp no caminho",
    descricao: "Chamadas de contato nos pontos certos da página.",
    icone: MessageCircle,
  },
  {
    titulo: "Domínio orientado",
    descricao: "Apoio para publicação, domínio e próximos passos.",
    icone: Globe2,
  },
  {
    titulo: "Ajustes iniciais",
    descricao: "Revisão da entrega para corrigir detalhes antes do uso.",
    icone: Wrench,
  },
];

export function Confianca() {
  return (
    <section className="section-pad section-transition relative overflow-hidden bg-white text-ink">
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <RotuloSecao>Confiança</RotuloSecao>
            <h2 className="editorial-h2 mt-4">Detalhes que fazem a página parecer profissional</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft lg:justify-self-end">
            O visitante precisa sentir que o negócio é organizado. Por isso, cada entrega combina
            visual, texto, velocidade, responsividade e caminhos claros de contato.
          </p>
        </RevelarAoRolar>

        <div className="trust-grid">
          {selos.map((selo, indice) => {
            const Icone = selo.icone;

            return (
              <RevelarAoRolar key={selo.titulo} atraso={indice * 0.035} className="trust-card">
                <Icone className="size-6" aria-hidden="true" />
                <h3>{selo.titulo}</h3>
                <p>{selo.descricao}</p>
              </RevelarAoRolar>
            );
          })}
        </div>
      </div>
    </section>
  );
}
