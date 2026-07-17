import { ChevronDown, MousePointer2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Fragment, useEffect, useState } from "react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";

const linhasTituloHero = [
  { texto: "Sites que passam confiança", corInicial: "#FFFFFF", corFinal: "#F0CAFF" },
  { texto: "e trazem mais orçamentos", corInicial: "#EE8FFF", corFinal: "#FFFFFF" },
] as const;

const tituloHero = linhasTituloHero.map(({ texto }) => texto).join(" ");

function interpolarCor(corInicial: string, corFinal: string, progresso: number) {
  const canaisIniciais = [1, 3, 5].map((posicao) => Number.parseInt(corInicial.slice(posicao, posicao + 2), 16));
  const canaisFinais = [1, 3, 5].map((posicao) => Number.parseInt(corFinal.slice(posicao, posicao + 2), 16));
  const canais = canaisIniciais.map((canal, indice) => Math.round(canal + (canaisFinais[indice] - canal) * progresso));

  return `rgb(${canais.join(", ")})`;
}

const demonstracoes = [
  {
    tipo: "profissional",
    etiqueta: "SITE PROFISSIONAL",
    titulo: "Autoridade que deixa claro por que escolher você.",
    destaque: "Atendimento que acompanha o seu ritmo.",
    indicadores: ["Confiança", "Clareza", "Contato"],
  },
  {
    tipo: "loja",
    etiqueta: "LOJA ONLINE",
    titulo: "Uma vitrine pronta para transformar interesse em pedido.",
    destaque: "Produtos, oferta e compra em um fluxo simples.",
    indicadores: ["Produtos", "Oferta", "Pedidos"],
  },
  {
    tipo: "sistema",
    etiqueta: "SISTEMA WEB",
    titulo: "Uma operação organizada para o negócio ganhar ritmo.",
    destaque: "Processos e informações no lugar certo.",
    indicadores: ["Rotina", "Equipe", "Gestão"],
  },
] as const;

type Demonstracao = (typeof demonstracoes)[number];

function ConteudoDaDemonstracao({ demonstracao }: { demonstracao: Demonstracao }) {
  if (demonstracao.tipo === "loja") {
    return (
      <div className="mock-store">
        <div className="mock-store-nav"><b>ATELIÊ</b><span>Novidades</span><span>Peças</span><i>3</i></div>
        <div className="mock-store-banner"><span>COLEÇÃO NOVA</span><strong>Escolhas que merecem estar em destaque.</strong><button type="button">Ver coleção</button></div>
        <div className="mock-store-products">
          <article><i /><b>Essencial</b><span>R$ 89</span></article>
          <article><i /><b>Seleção</b><span>R$ 124</span></article>
          <article><i /><b>Presente</b><span>R$ 148</span></article>
        </div>
      </div>
    );
  }

  if (demonstracao.tipo === "sistema") {
    return (
      <div className="mock-system">
        <aside><b>XE FLOW</b><span className="is-current">Visão geral</span><span>Pedidos</span><span>Clientes</span><span>Equipe</span></aside>
        <main>
          <div className="mock-system-heading"><span>SEGUNDA, 09:41</span><strong>Operação em ordem.</strong></div>
          <div className="mock-system-chart"><i /><i /><i /><i /><i /><i /></div>
          <div className="mock-system-status"><article><span>Em andamento</span><b>24</b></article><article><span>Concluídos</span><b>128</b></article></div>
          <div className="mock-system-list"><span><i /> Revisar pedido #483</span><span><i /> Retorno para novo contato</span></div>
        </main>
      </div>
    );
  }

  return (
    <div className="mock-professional">
      <div className="mock-professional-copy"><span>ESTRATÉGIA DIGITAL</span><strong>{demonstracao.titulo}</strong><i /><i /></div>
      <div className="mock-professional-profile"><div><span>CONSULTORIA</span><b>Decisões claras começam com uma boa conversa.</b><i /></div><em /></div>
      <div className="mock-professional-metrics">{demonstracao.indicadores.map((indicador) => <span key={indicador}><i /> {indicador}</span>)}</div>
    </div>
  );
}

export function DestaqueInicial() {
  const reduzirMovimento = useReducedMotion();
  const [demonstracaoAtiva, setDemonstracaoAtiva] = useState(0);
  const [carregandoDemonstracao, setCarregandoDemonstracao] = useState(false);

  useEffect(() => {
    if (reduzirMovimento) return undefined;

    let temporizadorDaTroca = 0;
    const intervalo = window.setInterval(() => {
      setCarregandoDemonstracao(true);
      temporizadorDaTroca = window.setTimeout(() => {
        setDemonstracaoAtiva((atual) => (atual + 1) % demonstracoes.length);
        setCarregandoDemonstracao(false);
      }, 720);
    }, 6800);

    return () => {
      window.clearInterval(intervalo);
      window.clearTimeout(temporizadorDaTroca);
    };
  }, [reduzirMovimento]);

  const demonstracao = demonstracoes[demonstracaoAtiva];
  return (
    <section id="top" className="hero-clean hero-amphora relative overflow-hidden px-4 pb-24 pt-28 md:pb-32 md:pt-36">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <motion.div
        className="container-x"
        initial="hidden"
        animate="visible"
        variants={animacaoEmSequencia}
      >
        <motion.div variants={animacaoEmSequencia} className="hero-clean-content">
          <motion.h1 aria-label={tituloHero}>
            {linhasTituloHero.map(({ texto, corInicial, corFinal }, indiceDaLinha) => {
              const atrasoDaLinha = linhasTituloHero
                .slice(0, indiceDaLinha)
                .reduce((total, linhaAnterior) => total + linhaAnterior.texto.length, 0);

              return (
                <span key={texto} className="hero-reference-title-line" aria-hidden="true">
                  {texto.split(" ").map((palavra, indiceDaPalavra, palavras) => {
                    const indiceInicialDaPalavra = palavras
                      .slice(0, indiceDaPalavra)
                      .reduce((total, palavraAnterior) => total + palavraAnterior.length + 1, 0);

                    return (
                      <Fragment key={`${palavra}-${indiceDaPalavra}`}>
                        {indiceDaPalavra > 0 ? " " : null}
                        <span className="hero-reference-word">
                          {Array.from(palavra).map((letra, indiceNaPalavra) => {
                            const indiceDaLetra = indiceInicialDaPalavra + indiceNaPalavra;
                            const progressoDaCor = texto.length > 1 ? indiceDaLetra / (texto.length - 1) : 0;

                            return (
                              <motion.span
                                key={`${letra}-${indiceDaLetra}`}
                                className="hero-reference-letter"
                                style={{ color: interpolarCor(corInicial, corFinal, progressoDaCor) }}
                                initial={reduzirMovimento ? false : { opacity: 0, y: "0.38em", filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                  duration: reduzirMovimento ? 0 : 0.46,
                                  delay: reduzirMovimento ? 0 : 0.05 + (atrasoDaLinha + indiceDaLetra) * 0.021,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                {letra}
                              </motion.span>
                            );
                          })}
                        </span>
                      </Fragment>
                    );
                  })}
                </span>
              );
            })}
          </motion.h1>

          <motion.p variants={aparecerSubindo}>
            Criamos sites, landing pages e sistemas sob medida para lojas, clínicas, escritórios e prestadores de serviço. Cada projeto segue um processo claro, com prazo definido e comunicação direta, para sua marca transmitir confiança e fechar mais orçamentos.
          </motion.p>

          <motion.div variants={aparecerSubindo} className="hero-reference-actions">
            <BotaoConversar href="#briefing" className="hero-reference-primary">
              <span>Começar um Projeto</span>
              <span className="hero-reference-primary-icon" aria-hidden="true">
                <svg className="hero-reference-primary-arrow" viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 19 19 5M8 5h11v11" />
                </svg>
              </span>
            </BotaoConversar>
            <a href="#projetos" className="hero-reference-secondary">
              Conheça nosso Trabalho
              <span className="hero-reference-chevron" aria-hidden="true">
                <ChevronDown />
                <ChevronDown />
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-amphora-visual"
          initial={reduzirMovimento ? { opacity: 1 } : { opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: reduzirMovimento ? 0.12 : 0.8, delay: reduzirMovimento ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="hero-browser-scene">
            <div className="hero-browser-depth" />
            <div className="hero-browser-window">
              <div className="hero-browser-bar">
                <span className="hero-browser-dots"><i /><i /><i /></span>
                <span className="hero-browser-address">sua-marca.com</span>
              </div>
              <div className="hero-browser-body">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={demonstracao.etiqueta}
                    className={`hero-browser-content hero-browser-content--${demonstracao.tipo}`}
                    initial={reduzirMovimento ? false : { opacity: 0, y: 10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={reduzirMovimento ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: reduzirMovimento ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ConteudoDaDemonstracao demonstracao={demonstracao} />
                  </motion.div>
                </AnimatePresence>
                <div className="hero-browser-cursor" aria-hidden="true">
                  <MousePointer2 strokeWidth={1.8} />
                  <span />
                </div>
                <AnimatePresence>
                  {carregandoDemonstracao ? (
                    <motion.div
                      className="hero-browser-loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.16 }}
                    >
                      <span /><span /><span />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
