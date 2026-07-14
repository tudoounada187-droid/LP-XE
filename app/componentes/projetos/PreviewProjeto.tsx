import type { TipoPreviewProjeto } from "@/dados/projetos";
import { caminhoDoAsset } from "@/utilitarios/assets";

export type TipoDispositivo = "macbook" | "iphone";

type PropriedadesPreviewProjeto = {
  tipo: TipoPreviewProjeto;
  dispositivo: TipoDispositivo;
};

function TelaLanding() {
  return (
    <div className="mock-screen mock-screen-landing">
      <nav><strong>XE<span>.</span></strong><i /><i /><i /><b>Conversar</b></nav>
      <div className="mock-landing-hero">
        <div>
          <small>SOLUÇÕES DIGITAIS</small>
          <h4>Ideias que viram experiências.</h4>
          <span />
          <b>Começar projeto</b>
        </div>
        <figure><i /><i /><i /></figure>
      </div>
      <footer><span /><span /><span /></footer>
    </div>
  );
}

function TelaDashboard() {
  return (
    <div className="mock-screen mock-screen-dashboard">
      <aside><strong>CL</strong><i className="is-active" /><i /><i /><i /></aside>
      <main>
        <header><div><small>VISÃO GERAL</small><h4>Casos clínicos</h4></div><b>+ Novo caso</b></header>
        <div className="mock-dashboard-metrics"><span /><span /><span /></div>
        <div className="mock-dashboard-table">
          <header><span>CASO</span><span>ETAPA</span><span>STATUS</span></header>
          {[0, 1, 2].map((linha) => (
            <div key={linha}><span><i /><b /></span><span><i /><i /><i /></span><em className={linha === 1 ? "is-pending" : ""} /></div>
          ))}
        </div>
      </main>
    </div>
  );
}

function TelaNegocioLocal() {
  return (
    <div className="mock-screen mock-screen-local">
      <nav><strong>LOCAL</strong><span>Serviços&nbsp;&nbsp; Sobre&nbsp;&nbsp; Contato</span></nav>
      <main>
        <div><small>PERTO DE VOCÊ</small><h4>Seu negócio,<br />bem apresentado.</h4><b>Agendar conversa</b></div>
        <figure><i /><i /><i /></figure>
      </main>
      <footer><span>Atendimento direto</span><span>Serviços claros</span><span>Contato fácil</span></footer>
    </div>
  );
}

function TelaProjeto({ tipo }: { tipo: TipoPreviewProjeto }) {
  if (tipo === "dashboard") return <TelaDashboard />;
  if (tipo === "negocio-local") return <TelaNegocioLocal />;
  return <TelaLanding />;
}

export function PreviewProjeto({ tipo, dispositivo }: PropriedadesPreviewProjeto) {
  const moldura = dispositivo === "macbook"
    ? caminhoDoAsset("images/device-macbook-pro.png")
    : caminhoDoAsset("images/device-iphone-11-pro-max.png");

  return (
    <div className={`device-mockup device-${dispositivo}`} aria-hidden="true">
      <img className="device-frame-image" src={moldura} alt="" />
      <div className="device-screen"><TelaProjeto tipo={tipo} /></div>
      {dispositivo === "iphone" && (
        <span className="device-iphone-notch"><i /><b /></span>
      )}
    </div>
  );
}
