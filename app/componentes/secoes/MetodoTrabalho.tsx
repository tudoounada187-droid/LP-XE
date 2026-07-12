import { Route } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
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
  const listaDeCards = useRef<HTMLDivElement>(null);
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [direcaoDeEntrada, setDirecaoDeEntrada] = useState<"forward" | "backward" | null>(null);
  const [cardFinalLiberado, setCardFinalLiberado] = useState(false);

  useEffect(() => {
    const gatilhos = listaDeCards.current?.querySelectorAll<HTMLElement>("[data-process-index]");
    if (!gatilhos?.length) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            const proximoIndice = Number((entrada.target as HTMLElement).dataset.processIndex);

            setIndiceAtivo((indiceAtual) => {
              if (proximoIndice === indiceAtual) return indiceAtual;

              setDirecaoDeEntrada(proximoIndice > indiceAtual ? "forward" : "backward");
              return proximoIndice;
            });
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0.01 },
    );

    gatilhos.forEach((gatilho) => observador.observe(gatilho));
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const limiteDaSecao = listaDeCards.current?.querySelector<HTMLElement>(".process-release-sentinel");
    if (!limiteDaSecao) return;

    const observador = new IntersectionObserver(
      ([entrada]) => setCardFinalLiberado(entrada.isIntersecting),
      { rootMargin: "0px 0px -32% 0px", threshold: 0 },
    );

    observador.observe(limiteDaSecao);
    return () => observador.disconnect();
  }, []);

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

        <div
          ref={listaDeCards}
          className={`process-cards-list${cardFinalLiberado && indiceAtivo === etapasDoProcesso.length - 1 ? " is-final-card-released" : ""}`}
        >
          <div className="process-card-stack">
            {etapasDoProcesso.map((etapa, indice) => (
              <article
                className={`process-card ${indice === indiceAtivo ? "is-active" : indice < indiceAtivo ? "is-past" : "is-future"}${indice === indiceAtivo && direcaoDeEntrada ? ` is-entering-${direcaoDeEntrada}` : ""}`}
                key={etapa.titulo}
                aria-hidden={indice !== indiceAtivo}
                style={{ zIndex: indice === indiceAtivo ? 3 : 2 } as CSSProperties}
              >
                <div className="process-card-copy">
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.descricao}</p>
                </div>
                <img src={caminhoDoAsset(etapa.imagem)} alt={etapa.alt} className="process-card-illustration" />
              </article>
            ))}
          </div>

          <div className="process-scroll-triggers" aria-hidden="true">
            {etapasDoProcesso.map((etapa, indice) => (
              <div key={etapa.titulo} className="process-scroll-trigger" data-process-index={indice} />
            ))}
          </div>
          <div className="process-release-sentinel" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
