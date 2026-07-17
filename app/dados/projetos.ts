export type TipoPreviewProjeto = "advocacia" | "pibic";

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
    nome: "PIBIC — Casos Clínicos",
    categoria: "Sistema educacional / Saúde",
    ano: "2026",
    problema: "Centralizar a criação, organização e avaliação de casos clínicos em um único fluxo.",
    entrega: "Dashboards para professores, gestão de casos, turmas e acompanhamento de desempenho.",
    resultado: "Professores passam a acompanhar turmas, casos e desempenho em um só lugar, sem depender de planilhas soltas.",
    foco: "Gestão acadêmica",
    preview: "pibic",
    url: "https://www.figma.com/design/0orbQZ8ymayjvTkyWfEkFu/PIBIC?node-id=114-624",
  },
] satisfies readonly Projeto[];
