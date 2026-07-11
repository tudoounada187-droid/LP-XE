import { Cabecalho } from "@/componentes/estrutura/Cabecalho";
import { Rodape } from "@/componentes/estrutura/Rodape";
import { BotaoConversar } from "@/componentes/interface/BotaoConversar";
import { DestaqueInicial } from "@/componentes/secoes/DestaqueInicial";
import { Projetos } from "@/componentes/secoes/Projetos";
import { Servicos } from "@/componentes/secoes/Servicos";
import { MetodoTrabalho } from "@/componentes/secoes/MetodoTrabalho";
import { PerguntasFrequentes } from "@/componentes/secoes/PerguntasFrequentes";
import { ChamadaFinal } from "@/componentes/secoes/ChamadaFinal";

export function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main className="brand-page">
        <DestaqueInicial />
        <Projetos />
        <Servicos />
        <MetodoTrabalho />
        <PerguntasFrequentes />
        <ChamadaFinal />
      </main>
      <BotaoConversar href="#briefing" className="mobile-quote-cta">
        <span>Vamos conversar</span>
      </BotaoConversar>
      <Rodape />
    </>
  );
}
