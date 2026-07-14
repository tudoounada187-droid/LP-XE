export type Servico = {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
};

export const servicos: Servico[] = [
  {
    id: "landing-pages",
    number: "01.",
    title: "Landing Pages",
    image: "/images/service-landing-page.svg",
    alt: "Prévia de uma landing page comercial com chamada principal e indicadores de resultado",
  },
  {
    id: "sites-profissionais",
    number: "02.",
    title: "Sites Profissionais",
    image: "/images/service-professional-site.svg",
    alt: "Prévia de um site profissional com apresentação, serviços e depoimentos",
  },
  {
    id: "loja-virtual",
    number: "03.",
    title: "Loja Virtual",
    image: "/images/service-online-store.svg",
    alt: "Prévia de uma loja virtual com vitrine de produtos, categorias e carrinho de compras",
  },
  {
    id: "sistemas-sob-medida",
    number: "04.",
    title: "Sistemas Sob Medida",
    image: "/images/service-custom-system.svg",
    alt: "Prévia de um sistema sob medida com painel, métricas e gestão de tarefas",
  },
];
