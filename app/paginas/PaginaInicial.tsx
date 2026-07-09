import { Cabecalho } from "@/componentes/estrutura/Cabecalho";
import { Rodape } from "@/componentes/estrutura/Rodape";
import { DestaqueInicial } from "@/componentes/secoes/DestaqueInicial";
import { Projetos } from "@/componentes/secoes/Projetos";
import { Servicos } from "@/componentes/secoes/Servicos";
import { MetodoTrabalho } from "@/componentes/secoes/MetodoTrabalho";
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
        <ChamadaFinal />
      </main>
      <a href="#briefing" className="mobile-quote-cta">
        Quero um orçamento
      </a>
      <Rodape />
    </>
  );
}
