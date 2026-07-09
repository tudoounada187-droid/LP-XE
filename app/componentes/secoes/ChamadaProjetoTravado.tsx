import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { ArrowRight } from "lucide-react";

const problemas = [
  {
    titulo: "O cliente pergunta tudo no direct",
    descricao: "Preço, prazo, funcionamento, forma de atendimento e próximos passos precisam ser explicados toda vez.",
    acao: "Página de venda",
  },
  {
    titulo: "A presença não passa a mesma qualidade",
    descricao: "A empresa entrega bem, mas o digital ainda parece improvisado para quem está comparando opções.",
    acao: "Site institucional",
  },
  {
    titulo: "A rotina ficou manual demais",
    descricao: "Pedidos, cadastros, atendimentos e conferências repetidas já tomam mais tempo do que deveriam.",
    acao: "Sistema sob medida",
  },
];

export function ChamadaProjetoTravado() {
  return (
    <section id="diagnostico" className="brand-dark brand-dark-soft section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar>
          <p className="font-mono text-sm text-contrast-ink-soft">Leitura do cenário</p>
          <h2 className="editorial-h2 mt-4 max-w-4xl">
            Antes do layout, a pergunta certa: o que impede a confiança?
          </h2>
          <span className="gradient-rule mt-6" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-contrast-ink-soft">
            Uma página profissional combina texto, seções, ícones, imagens, provas e chamadas de ação
            para fazer o visitante entender valor antes de pedir orçamento, marcar consulta ou comprar.
          </p>
        </RevelarAoRolar>

        <RevelarAoRolar atraso={0.1} className="mt-12 grid gap-4 lg:grid-cols-3">
          {problemas.map((problema) => (
            <article key={problema.titulo} className="problem-card">
              <p className="font-mono text-xs font-semibold uppercase text-white/45">{problema.acao}</p>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight">{problema.titulo}</h3>
              <p className="mt-4 leading-7 text-contrast-ink-soft">{problema.descricao}</p>
              <a href="#entregas" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-white">
                Ver formato indicado
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </RevelarAoRolar>
      </div>
    </section>
  );
}
