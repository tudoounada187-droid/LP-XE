export type TipoPreviewProjeto = "advocacia" | "barbearia";

export type Projeto = {
  nome: string;
  categoria: string;
  ano: string;
  problema: string;
  entrega: string;
  resultado: string;
  foco: string;
  preview: TipoPreviewProjeto;
  url?: string;
};

export const projetos = [
  {
    nome: "H&C Advocacia Previdenciária",
    categoria: "Site institucional / Advocacia",
    ano: "2026",
    problema: "Apresentar serviços previdenciários com clareza, autoridade e uma navegação acolhedora.",
    entrega: "Site institucional responsivo com conteúdo estratégico e caminhos diretos para contato.",
    resultado: "O escritório ganhou um canal digital único, com cada área de atuação explicada em linguagem simples e caminho direto até o contato.",
    foco: "Autoridade e conversão",
    preview: "advocacia",
  },
  {
    nome: "Sistema de Gestão para Barbearia",
    categoria: "Sistema de gestão / Barbearia",
    ano: "2026",
    problema: "Centralizar o controle de agendamentos, catálogo de serviços e fluxo financeiro em um único sistema simples de usar.",
    entrega: "Painel com agenda semanal, catálogo de serviços editável, configuração de horários de atendimento e dashboard financeiro completo.",
    resultado: "Proprietários de barbearia passam a gerenciar agenda, serviços e faturamento em um só painel, sem depender de cadernos ou planilhas soltas.",
    foco: "Gestão de barbearias",
    preview: "barbearia",
  },
] satisfies readonly Projeto[];
