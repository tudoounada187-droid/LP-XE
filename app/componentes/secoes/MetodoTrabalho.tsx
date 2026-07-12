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
  const quadroDeLeituraRef = useRef<number | null>(null);
  const [progressoDoProcesso, setProgressoDoProcesso] = useState(0);
  const [cardFinalLiberado, setCardFinalLiberado] = useState(false);

  useEffect(() => {
    const gatilhos = listaDeCards.current?.querySelectorAll<HTMLElement>("[data-process-index]");
    if (!gatilhos?.length) return;

    const atualizarDestinoPeloScroll = () => {
      quadroDeLeituraRef.current = null;
      const linhaDeAtivacao = window.scrollY + window.innerHeight * 0.5;
      const alturaDoCard = listaDeCards.current?.querySelector<HTMLElement>(".process-card-stack")?.offsetHeight ?? 0;
      const espacoDeLeitura = alturaDoCard * 0.75;
      const posicoes = Array.from(
        gatilhos,
        (gatilho) => gatilho.getBoundingClientRect().top + window.scrollY + espacoDeLeitura,
      );
      let progresso = 0;

      if (linhaDeAtivacao >= posicoes.at(-1)!) {
        progresso = etapasDoProcesso.length - 1;
      } else if (linhaDeAtivacao > posicoes[0]) {
        const indiceBase = posicoes.findIndex((posicao) => posicao > linhaDeAtivacao) - 1;
        const inicio = posicoes[indiceBase];
        const fim = posicoes[indiceBase + 1];
        progresso = indiceBase + (linhaDeAtivacao - inicio) / (fim - inicio);
      }

      setProgressoDoProcesso(progresso);
    };

    const agendarLeitura = () => {
      if (quadroDeLeituraRef.current !== null) return;
      quadroDeLeituraRef.current = window.requestAnimationFrame(atualizarDestinoPeloScroll);
    };

    atualizarDestinoPeloScroll();
    window.addEventListener("scroll", agendarLeitura, { passive: true });
    window.addEventListener("resize", agendarLeitura);

    return () => {
      window.removeEventListener("scroll", agendarLeitura);
      window.removeEventListener("resize", agendarLeitura);
      if (quadroDeLeituraRef.current !== null) window.cancelAnimationFrame(quadroDeLeituraRef.current);
    };
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

  const ultimoIndice = etapasDoProcesso.length - 1;
  const indiceBase = Math.min(ultimoIndice, Math.floor(progressoDoProcesso));
  const progressoDaTroca = indiceBase === ultimoIndice ? 0 : progressoDoProcesso - indiceBase;
  const indiceVisivel = progressoDaTroca >= 0.5 ? indiceBase + 1 : indiceBase;

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
          className={`process-cards-list${cardFinalLiberado && indiceBase === ultimoIndice ? " is-final-card-released" : ""}`}
        >
          <div className="process-card-stack">
            {etapasDoProcesso.map((etapa, indice) => {
              const eCardBase = indice === indiceBase;
              const eProximoCard = indice === indiceBase + 1 && indiceBase < ultimoIndice;
              const classeVisual = eCardBase
                ? "is-active is-scroll-current"
                : eProximoCard
                  ? "is-scroll-next"
                  : indice < indiceBase
                    ? "is-past"
                    : "is-future";
              const estiloDoCard = eCardBase
                ? {
                    zIndex: 3,
                    "--process-current-offset": `${-1.25 * progressoDaTroca}rem`,
                    "--process-current-scale": 1 - 0.01 * progressoDaTroca,
                  }
                : eProximoCard
                  ? {
                      zIndex: 4,
                      "--process-next-offset": `${(1 - progressoDaTroca) * 100}%`,
                      "--process-next-gap": `${(1 - progressoDaTroca) * 1.5}rem`,
                      "--process-next-scale": 0.985 + 0.015 * progressoDaTroca,
                      "--process-next-opacity": Math.min(1, progressoDaTroca * 4),
                    }
                  : { zIndex: 1 };

              return (
                <article
                  className={`process-card ${classeVisual}`}
                  key={etapa.titulo}
                  aria-hidden={indice !== indiceVisivel}
                  style={estiloDoCard as CSSProperties}
                >
                  <div className="process-card-copy">
                    <h3>{etapa.titulo}</h3>
                    <p>{etapa.descricao}</p>
                  </div>
                  <img src={caminhoDoAsset(etapa.imagem)} alt={etapa.alt} className="process-card-illustration" />
                </article>
              );
            })}
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
