import { Cabecalho } from "@/componentes/estrutura/Cabecalho";
import { Rodape } from "@/componentes/estrutura/Rodape";
import { DestaqueInicial } from "@/componentes/secoes/DestaqueInicial";
import { Projetos } from "@/componentes/secoes/Projetos";
import { Servicos } from "@/componentes/secoes/Servicos";
import { PorQueEscolher } from "@/componentes/secoes/PorQueEscolher";
import { ChamadaProjetoTravado } from "@/componentes/secoes/ChamadaProjetoTravado";
import { MetodoTrabalho } from "@/componentes/secoes/MetodoTrabalho";
import { Experiencia } from "@/componentes/secoes/Experiencia";
import { PerguntasFrequentes } from "@/componentes/secoes/PerguntasFrequentes";
import { Conteudos } from "@/componentes/secoes/Conteudos";
import { ChamadaFinal } from "@/componentes/secoes/ChamadaFinal";

export function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main className="brand-page">
        <DestaqueInicial />
        <Projetos />
        <Servicos />
        <PorQueEscolher />
        <ChamadaProjetoTravado />
        <MetodoTrabalho />
        <Experiencia />
        <PerguntasFrequentes />
        <Conteudos />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  );
}
