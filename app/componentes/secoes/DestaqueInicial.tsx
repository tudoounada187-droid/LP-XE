import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Fragment, useEffect, useState } from "react";
import { aparecerSubindo, animacaoEmSequencia } from "@/componentes/animacoes/variantes";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";

const tituloHero = "Presença digital que faz seu negócio avançar.";
const palavrasEmDestaque = 3;

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
          <h1 aria-label={tituloHero}>
            {reduzirMovimento
              ? tituloHero
              : tituloHero.split(" ").map((palavra, indiceDaPalavra, palavras) => {
                  const indiceInicial = palavras
                    .slice(0, indiceDaPalavra)
                    .reduce((total, palavraAnterior) => total + palavraAnterior.length, 0);

                  return (
                    <Fragment key={`${palavra}-${indiceDaPalavra}`}>
                      <span className={`hero-word ${indiceDaPalavra < palavrasEmDestaque ? "hero-word-accent" : ""}`} aria-hidden="true">
                        {Array.from(palavra).map((letra, indiceDaLetra) => (
                          <motion.span
                            key={`${letra}-${indiceDaLetra}`}
                            className="hero-letter"
                            initial={{ opacity: 0, y: "0.38em", filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                              duration: 0.46,
                              delay: 0.05 + (indiceInicial + indiceDaLetra) * 0.021,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            {letra}
                          </motion.span>
                        ))}
                      </span>
                      {indiceDaPalavra < palavras.length - 1 ? " " : null}
                    </Fragment>
                  );
                })}
          </h1>

          <motion.div variants={aparecerSubindo} className="hero-amphora-proof">
            <span className="hero-proof-dot" aria-hidden="true" />
            Sites, landing pages e sistemas para negócios em movimento.
          </motion.div>

          <motion.p variants={aparecerSubindo}>
            Criamos sites, landing pages e sistemas com visual profissional, estratégia e performance
            para transformar visitantes em oportunidades.
          </motion.p>

          <motion.div variants={aparecerSubindo}>
            <BotaoConversar href="#briefing" className="button-dark hero-main-cta">
              Vamos conversar
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </BotaoConversar>
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
