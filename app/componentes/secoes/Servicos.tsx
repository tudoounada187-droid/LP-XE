import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { BotaoServico, PreviaServico } from "@/componentes/interface/ServicoInterativo";
import { DetalheServico } from "@/componentes/servicos/DetalheServico";
import { servicos } from "@/dados/servicos";
import type { Servico } from "@/dados/servicos";
import { caminhoDoAsset } from "@/utilitarios/assets";

export function Servicos() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [indiceEmHoverDesktop, setIndiceEmHoverDesktop] = useState<number | null>(null);
  const [servicoDetalhado, setServicoDetalhado] = useState<Servico | null>(null);
  const [direcao, setDirecao] = useState<1 | -1>(1);
  const indiceAtivoRef = useRef(0);
  const referenciasDesktop = useRef<Array<HTMLButtonElement | null>>([]);
  const referenciasMobile = useRef<Array<HTMLButtonElement | null>>([]);
  const ultimoGatilho = useRef<HTMLButtonElement | null>(null);
  const servicoAtivo = servicos[indiceAtivo];

  useEffect(() => {
    const imagens = servicos.map((servico) => {
      const imagem = new Image();
      imagem.src = caminhoDoAsset(servico.image);
      return imagem;
    });

    return () => imagens.forEach((imagem) => (imagem.src = ""));
  }, []);

  function ativarServico(novoIndice: number) {
    if (novoIndice === indiceAtivoRef.current) return;

    setDirecao(novoIndice > indiceAtivoRef.current ? 1 : -1);
    indiceAtivoRef.current = novoIndice;
    setIndiceAtivo(novoIndice);
  }

  function ativarServicoNoDesktop(indice: number) {
    setIndiceEmHoverDesktop(indice);
    ativarServico(indice);
  }

  function abrirDetalhes(servico: Servico, gatilho: HTMLButtonElement) {
    ultimoGatilho.current = gatilho;
    setServicoDetalhado(servico);
  }

  const fecharDetalhes = useCallback(() => {
    setServicoDetalhado(null);
    window.requestAnimationFrame(() => ultimoGatilho.current?.focus());
  }, []);

  const selecionarServicoDetalhado = useCallback((servico: Servico) => {
    setServicoDetalhado(servico);
  }, []);

  function navegarComTeclado(
    evento: KeyboardEvent<HTMLButtonElement>,
    indice: number,
    referencias: RefObject<Array<HTMLButtonElement | null>>,
  ) {
    let proximoIndice: number | null = null;

    if (evento.key === "ArrowDown" || evento.key === "ArrowRight") {
      proximoIndice = (indice + 1) % servicos.length;
    } else if (evento.key === "ArrowUp" || evento.key === "ArrowLeft") {
      proximoIndice = (indice - 1 + servicos.length) % servicos.length;
    } else if (evento.key === "Home") {
      proximoIndice = 0;
    } else if (evento.key === "End") {
      proximoIndice = servicos.length - 1;
    }

    if (proximoIndice !== null) {
      evento.preventDefault();
      ativarServico(proximoIndice);
      referencias.current?.[proximoIndice]?.focus();
    }
  }

  return (
    <section id="entregas" className="services-showcase section-pad section-transition relative overflow-hidden">
      <div className="section-wave-out wave-to-dark" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevelarAoRolar className="services-showcase-heading">
          <div className="services-label">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M6.75 12.7509V6.00086C6.75 5.58686 7.08637 5.25049 7.50037 5.25049H11.25V12.7509"
                stroke="currentColor"
                strokeWidth="1.00125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 5.25038V3.00037C11.25 2.58637 11.5864 2.25 12.0004 2.25H14.9996C15.4136 2.25 15.75 2.58637 15.75 3.00037V12.0004C15.75 12.4144 15.4136 12.7496 14.9996 12.7496H3.00037C2.58637 12.7496 2.25 12.4144 2.25 12.0004V9C2.25 8.586 2.58637 8.24963 3.00037 8.24963H6.75"
                stroke="currentColor"
                strokeWidth="1.00125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25 15.75H15.75"
                stroke="currentColor"
                strokeWidth="1.00125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Serviços</span>
          </div>
          <h2>O digital certo para cada momento do seu negócio.</h2>
          <p>
            Da primeira presença profissional a uma operação mais eficiente, criamos o formato que melhor
            resolve o seu próximo passo.
          </p>
        </RevelarAoRolar>

        <div className="services-showcase-desktop">
          <div className="service-selector-list" role="tablist" aria-label="Serviços da XE Software" aria-orientation="vertical">
            {servicos.map((servico, indice) => (
              <BotaoServico
                key={servico.id}
                servico={servico}
                ativo={indice === indiceEmHoverDesktop}
                focavel={indice === (indiceEmHoverDesktop ?? 0)}
                indice={indice}
                variante="desktop"
                referencia={(elemento) => {
                  referenciasDesktop.current[indice] = elemento;
                }}
                aoAtivar={() => ativarServicoNoDesktop(indice)}
                aoDesativar={() => setIndiceEmHoverDesktop(null)}
                aoAbrirDetalhes={(gatilho) => abrirDetalhes(servico, gatilho)}
                aoNavegar={(evento, indiceAtual) => navegarComTeclado(evento, indiceAtual, referenciasDesktop)}
              />
            ))}
          </div>
          <div
            id="service-panel-desktop"
            role="tabpanel"
            aria-labelledby={`service-tab-desktop-${servicoAtivo.id}`}
          >
            <PreviaServico servico={servicoAtivo} direcao={direcao} />
          </div>
        </div>

        <div className="services-showcase-mobile" role="tablist" aria-label="Serviços da XE Software">
          {servicos.map((servico, indice) => {
            const ativo = indice === indiceAtivo;

            return (
              <div key={servico.id} className="service-mobile-row">
                <BotaoServico
                  servico={servico}
                  ativo={ativo}
                  focavel={ativo}
                  indice={indice}
                  variante="mobile"
                  referencia={(elemento) => {
                    referenciasMobile.current[indice] = elemento;
                  }}
                  aoAtivar={() => ativarServico(indice)}
                  aoDesativar={() => undefined}
                  aoAbrirDetalhes={(gatilho) => abrirDetalhes(servico, gatilho)}
                  aoNavegar={(evento, indiceAtual) => navegarComTeclado(evento, indiceAtual, referenciasMobile)}
                />
                <AnimatePresence initial={false}>
                  {ativo ? (
                    <motion.div
                      id={`service-panel-mobile-${servico.id}`}
                      role="tabpanel"
                      aria-labelledby={`service-tab-mobile-${servico.id}`}
                      className="service-mobile-preview"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <PreviaServico servico={servico} direcao={direcao} />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      {servicoDetalhado ? (
        <DetalheServico
          servico={servicoDetalhado}
          outrosServicos={servicos.filter((servico) => servico.id !== servicoDetalhado.id)}
          aoFechar={fecharDetalhes}
          aoSelecionarServico={selecionarServicoDetalhado}
        />
      ) : null}
    </section>
  );
}
