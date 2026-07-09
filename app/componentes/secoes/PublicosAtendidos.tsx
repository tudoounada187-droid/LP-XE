import { BriefcaseBusiness, HeartPulse, MessageCircleQuestion, Scale, Store } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { RotuloSecao } from "@/componentes/interface/RotuloSecao";

const publicos = [
  {
    titulo: "Lojas e marcas locais",
    descricao: "Páginas para apresentar produtos, coleções, promoções e diferenciais antes do cliente chamar no WhatsApp.",
    duvida: "A pessoa viu no Instagram, mas ainda não sabe se compra.",
    icone: Store,
  },
  {
    titulo: "Advogados e consultores",
    descricao: "Sites com linguagem sóbria, áreas de atuação, trajetória, canais de contato e sinais de credibilidade.",
    duvida: "O cliente precisa sentir segurança antes de marcar uma conversa.",
    icone: Scale,
  },
  {
    titulo: "Nutricionistas e clínicas",
    descricao: "Presença digital para explicar atendimentos, especialidades, método de trabalho e próximos passos.",
    duvida: "O paciente quer entender como funciona antes de agendar.",
    icone: HeartPulse,
  },
  {
    titulo: "Prestadores de serviço",
    descricao: "Landing pages e sistemas simples para organizar pedidos, orçamentos, cadastros e acompanhamento.",
    duvida: "O negócio cresceu e a rotina ficou espalhada demais.",
    icone: BriefcaseBusiness,
  },
];

export function PublicosAtendidos() {
  return (
    <section id="publicos" className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-8 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <div>
            <RotuloSecao>Para quem</RotuloSecao>
            <h2 className="editorial-h2 mt-4">A página precisa parecer feita para o cliente certo</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft lg:justify-self-end">
            Uma página profissional não empilha blocos bonitos. Ela organiza as dúvidas que impedem
            o contato: o que você faz, para quem é, por que confiar e qual é o próximo passo.
          </p>
        </RevelarAoRolar>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {publicos.map((publico, indice) => {
            const Icone = publico.icone;

            return (
              <RevelarAoRolar key={publico.titulo} atraso={indice * 0.04} className="audience-card">
                <div className="audience-icon">
                  <Icone className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="audience-question">
                    <MessageCircleQuestion className="size-4" aria-hidden="true" />
                    <span>{publico.duvida}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight text-ink">{publico.titulo}</h3>
                  <p className="mt-3 leading-7 text-ink-soft">{publico.descricao}</p>
                </div>
              </RevelarAoRolar>
            );
          })}
        </div>
      </div>
    </section>
  );
}
