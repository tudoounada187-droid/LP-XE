import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import type { TipoPreviewProjeto } from "@/dados/projetos";
import { caminhoDoAsset } from "@/utilitarios/assets";

type PropriedadesPreviewProjeto = {
  tipo: TipoPreviewProjeto;
};

const telasPibic = [
  { arquivo: "pibic-dashboard.png", nome: "Dashboard do professor", dashboard: true },
  { arquivo: "pibic-criar-caso.png", nome: "Criação de caso clínico" },
  { arquivo: "pibic-meus-casos.png", nome: "Meus casos" },
  { arquivo: "pibic-turmas.png", nome: "Turmas do professor" },
] as const;

const LARGURA_VIEWPORT_ADVOCACIA = 1728;
const ALTURA_VIEWPORT_ADVOCACIA = 1080;

function ApresentacaoAdvocacia() {
  const viewport = useRef<HTMLDivElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);
  const rolagem = useRef<number | null>(null);
  const reduzirMovimento = useReducedMotion();

  useEffect(() => () => {
    if (rolagem.current !== null) window.clearInterval(rolagem.current);
  }, []);

  useEffect(() => {
    const elemento = viewport.current;
    const pagina = iframe.current;
    if (!elemento || !pagina) return;

    function atualizarEscala() {
      if (!viewport.current || !iframe.current) return;
      const largura = viewport.current.clientWidth;
      const altura = viewport.current.clientHeight;
      const escala = Math.min(
        largura / LARGURA_VIEWPORT_ADVOCACIA,
        altura / ALTURA_VIEWPORT_ADVOCACIA,
      );
      iframe.current.style.transform = `scale(${escala})`;
      iframe.current.style.left = `${(largura - LARGURA_VIEWPORT_ADVOCACIA * escala) / 2}px`;
      iframe.current.style.top = `${(altura - ALTURA_VIEWPORT_ADVOCACIA * escala) / 2}px`;
    }

    atualizarEscala();
    const observador = new ResizeObserver(atualizarEscala);
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  function iniciarApresentacao() {
    if (reduzirMovimento || !iframe.current?.contentWindow) return;
    if (rolagem.current !== null) window.clearInterval(rolagem.current);

    const janela = iframe.current.contentWindow;
    let direcao = 1;
    let pausaAte = performance.now() + 1800;

    rolagem.current = window.setInterval(() => {
      const limite = Math.max(0, janela.document.documentElement.scrollHeight - janela.innerHeight);
      if (limite === 0 || performance.now() < pausaAte) return;

      janela.scrollBy(0, direcao * 2);

      if (janela.scrollY >= limite - 2) {
        direcao = -1;
        pausaAte = performance.now() + 1800;
      } else if (janela.scrollY <= 2) {
        direcao = 1;
        pausaAte = performance.now() + 1800;
      }
    }, 32);
  }

  return (
    <div ref={viewport} className="project-original-site-viewport">
      <iframe
        ref={iframe}
        className="project-original-site"
        src={caminhoDoAsset("previews/advocacia/index.html")}
        title="Apresentação local do site original H&C Advocacia Previdenciária"
        tabIndex={-1}
        onLoad={iniciarApresentacao}
      />
    </div>
  );
}

function GaleriaPibic() {
  const [indice, setIndice] = useState(0);
  const reduzirMovimento = useReducedMotion();

  useEffect(() => {
    if (reduzirMovimento) return;
    const intervalo = window.setInterval(() => setIndice((atual) => (atual + 1) % telasPibic.length), 3200);
    return () => window.clearInterval(intervalo);
  }, [reduzirMovimento]);

  const tela = telasPibic[indice];

  return (
    <div className="project-pibic-gallery">
      <img
        key={tela.arquivo}
        src={caminhoDoAsset(`images/projects/${tela.arquivo}`)}
        alt={tela.nome}
      />

      <span className="project-pibic-name-mask">Gabriel Soares</span>
      {"dashboard" in tela && tela.dashboard && (
        <>
          <span className="project-pibic-greeting-mask">Bem vindo, <strong>Gabriel!</strong></span>
          <div className="project-pibic-animated-chart" aria-hidden="true">
            {[42, 70, 33, 49, 45, 53, 39, 47].map((altura, barra) => (
              <i key={barra} style={{ "--bar-height": `${altura}%`, "--bar-delay": `${barra * 70}ms` } as CSSProperties} />
            ))}
          </div>
        </>
      )}

      <div className="project-pibic-progress" aria-label={`Tela ${indice + 1} de ${telasPibic.length}`}>
        {telasPibic.map((item) => <i key={item.arquivo} className={item.arquivo === tela.arquivo ? "is-active" : ""} />)}
      </div>
    </div>
  );
}

export function PreviewProjeto({ tipo }: PropriedadesPreviewProjeto) {
  return (
    <div className="device-mockup device-macbook">
      <img className="device-frame-image" src={caminhoDoAsset("images/device-macbook-pro.png")} alt="" />
      <div className="device-screen">
        {tipo === "advocacia" ? <ApresentacaoAdvocacia /> : <GaleriaPibic />}
      </div>
    </div>
  );
}
