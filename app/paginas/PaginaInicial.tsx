import { useCallback, useState } from "react";
import { Cabecalho } from "@/componentes/estrutura/Cabecalho";
import { Rodape } from "@/componentes/estrutura/Rodape";
import { ModalOrcamento } from "@/componentes/interface/ModalOrcamento";
import { DestaqueInicial } from "@/componentes/secoes/DestaqueInicial";
import { Projetos } from "@/componentes/secoes/Projetos";
import { Servicos } from "@/componentes/secoes/Servicos";
import { ChamadaProjetoTravado } from "@/componentes/secoes/ChamadaProjetoTravado";
import { MetodoTrabalho } from "@/componentes/secoes/MetodoTrabalho";
import { AntesDepois } from "@/componentes/secoes/AntesDepois";
import { PublicosAtendidos } from "@/componentes/secoes/PublicosAtendidos";
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
        <ChamadaProjetoTravado />
        <Servicos />
        <PublicosAtendidos />
        <AntesDepois />
        <Projetos />
        <MetodoTrabalho />
        <ChamadaFinal />
      </main>
      <Rodape aoSolicitarOrcamento={abrirModalOrcamento} />
      <ModalOrcamento aberto={modalOrcamentoAberto} aoFechar={fecharModalOrcamento} />
    </>
  );
}
