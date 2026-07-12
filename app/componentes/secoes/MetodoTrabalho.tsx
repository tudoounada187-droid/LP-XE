import { Route } from "lucide-react";
import type { CSSProperties } from "react";
import { caminhoDoAsset } from "@/utilitarios/assets";

const etapasDoProcesso = [
  {
    titulo: "Onboarding",
    descricao: "Começamos entendendo o negócio, o momento atual e o resultado que precisa acontecer. Assim, todo o projeto nasce com direção.",
    imagem: "/images/process-onboarding.png",
    alt: "Equipe reunida para iniciar o projeto",
  },
  {
    titulo: "Definição do escopo",
    descricao: "Transformamos objetivos em prioridades claras: páginas, funcionalidades, conteúdo e uma sequência de entrega sem surpresa.",
    imagem: "/images/process-scope.png",
    alt: "Pessoa organizando o escopo do projeto em um quadro",
  },
  {
    titulo: "Briefing",
    descricao: "Reunimos referências, materiais e respostas que orientam o tom da marca, a oferta e as decisões da interface.",
    imagem: "/images/process-briefing.png",
    alt: "Duas pessoas conversando sobre um documento de briefing",
  },
  {
    titulo: "Execução",
    descricao: "Com a direção definida, criamos a experiência e desenvolvemos cada parte de forma responsiva, clara e preparada para uso real.",
    imagem: "/images/process-execution.png",
    alt: "Pessoa desenvolvendo uma interface no computador",
  },
  {
    titulo: "Atualizações durante a entrega",
    descricao: "Você acompanha os avanços importantes e participa das decisões que realmente precisam da sua visão, sem reuniões desnecessárias.",
    imagem: "/images/process-updates.png",
    alt: "Duas pessoas acompanhando atualizações em dispositivos",
  },
  {
    titulo: "Validação final",
    descricao: "Apresentamos o projeto completo, revisamos os últimos detalhes e deixamos tudo pronto para publicar ou colocar em operação.",
    imagem: "/images/process-validation.png",
    alt: "Prancheta representando a validação final do projeto",
  },
] as const;

export function MetodoTrabalho() {
  return (
    <section id="metodo" className="process-cards-section section-pad section-transition relative">
      <div className="section-wave-out wave-to-lavender" aria-hidden="true" />
      <div className="container-x relative z-10">
        <header className="process-cards-heading">
          <div className="section-icon-label">
            <Route aria-hidden="true" />
            <span>Processo</span>
          </div>
          <h2>Nosso processo</h2>
          <p>Uma sequência simples, com contexto, decisões claras e acompanhamento até a entrega final.</p>
        </header>

        <div className="process-cards-list">
          {etapasDoProcesso.map((etapa, indice) => (
            <div
              className="process-card-stage"
              key={etapa.titulo}
              style={{ zIndex: indice + 1 } as CSSProperties}
            >
              <article className="process-card">
                <div className="process-card-copy">
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.descricao}</p>
                </div>
                <img src={caminhoDoAsset(etapa.imagem)} alt={etapa.alt} className="process-card-illustration" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
