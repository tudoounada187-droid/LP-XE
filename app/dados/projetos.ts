export type TipoPreviewProjeto = "landing" | "dashboard" | "negocio-local";

export type Projeto = {
  nome: string;
  categoria: string;
  ano: string;
  problema: string;
  entrega: string;
  resultado: string;
  foco: string;
  preview: TipoPreviewProjeto;
};

export const projetos = [
  {
    nome: "XE Software",
    categoria: "Marca própria / Página comercial",
    ano: "2026",
    problema: "Apresentar páginas, sites e sistemas sem parecer que a empresa faz apenas software web.",
    entrega: "Página com promessa, segmentos, formatos, transformação, exemplos e briefing direto.",
    resultado: "O visitante entende que pode pedir desde uma página profissional até um sistema sob medida.",
    foco: "Confiança comercial",
    preview: "landing",
  },
  {
    nome: "Fluxo para casos clínicos",
    categoria: "Sistema sob medida / Saúde",
    ano: "2026",
    problema: "Organizar cadastros, casos, perguntas e etapas em uma experiência única e rastreável.",
    entrega: "Interface administrativa, estrutura de dados e base para evolução do processo.",
    resultado: "O trabalho ganha sequência, histórico e menos dependência de controle paralelo.",
    foco: "Sistema sob medida",
    preview: "dashboard",
  },
  {
    nome: "Página para negócio local",
    categoria: "Modelo comercial / Página de venda",
    ano: "2026",
    problema: "Receber interessados de Instagram, indicação ou WhatsApp sem uma apresentação profissional própria.",
    entrega: "Estrutura de oferta, serviços, diferenciais, dúvidas, imagens de apoio e chamada para conversa.",
    resultado: "O contato chega mais preparado porque a página já explicou valor, confiança e próximo passo.",
    foco: "Contato preparado",
    preview: "negocio-local",
  },
] satisfies readonly Projeto[];
