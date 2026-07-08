import { useCallback, useState } from "react";
import { Cabecalho } from "@/componentes/estrutura/Cabecalho";
import { Rodape } from "@/componentes/estrutura/Rodape";
import { ModalOrcamento } from "@/componentes/interface/ModalOrcamento";
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
  const [modalOrcamentoAberto, setModalOrcamentoAberto] = useState(false);
  const abrirModalOrcamento = useCallback(() => setModalOrcamentoAberto(true), []);
  const fecharModalOrcamento = useCallback(() => setModalOrcamentoAberto(false), []);

  return (
    <>
      <Cabecalho aoSolicitarOrcamento={abrirModalOrcamento} />
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
        <ChamadaFinal aoSolicitarOrcamento={abrirModalOrcamento} />
      </main>
      <Rodape aoSolicitarOrcamento={abrirModalOrcamento} />
      <ModalOrcamento aberto={modalOrcamentoAberto} aoFechar={fecharModalOrcamento} />
    </>
  );
}
