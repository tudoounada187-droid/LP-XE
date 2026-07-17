export type Servico = {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
  publicoAlvo: string;
  precoInicial: string;
  prazo: string;
  disponibilidade: string;
  visaoGeral: string[];
  incluidos: string[];
  descobertaTexto: string;
  lancamentoTexto: string;
  abordagemTexto: string;
};

export const servicos: Servico[] = [
  {
    id: "landing-pages",
    number: "01.",
    title: "Landing Pages",
    image: "/images/projeto-advocacia.png",
    alt: "Projeto de landing page para escritório de advocacia exibido em um tablet",
    publicoAlvo:
      "Negócios com campanha de tráfego pago, Instagram ou WhatsApp que precisam transformar visitas em pedidos de orçamento.",
    precoInicial: "R$ 1.200",
    prazo: "1–2 semanas",
    disponibilidade: "Vagas abertas",
    visaoGeral: [
      "A landing page existe para uma única missão: transformar cliques em contato. Trabalhamos a estrutura de argumentação, a prova social e a chamada para ação para que cada visitante saiba exatamente o que fazer a seguir.",
      "O resultado é uma experiência objetiva, sem distrações ou caminhos de saída desnecessários, construída para apresentar sua oferta com clareza e gerar oportunidades reais.",
    ],
    incluidos: [
      "Copy orientado a conversão",
      "Estrutura de prova social com depoimentos, resultados e selos",
      "Botão de WhatsApp e/ou formulário integrado",
      "Design responsivo mobile-first",
      "Otimização de velocidade de carregamento",
      "SEO on-page básico",
      "Integração com Google Analytics e Meta Pixel",
      "Uma rodada de ajustes pós-entrega",
    ],
    descobertaTexto:
      "Começamos entendendo sua oferta, seu público e as objeções mais comuns que impedem o “sim”. Esse diagnóstico se transforma no roteiro da página antes de qualquer decisão visual.",
    lancamentoTexto:
      "Com a estrutura validada, entramos em design e desenvolvimento. Na entrega, conectamos o domínio, testamos a página em diferentes dispositivos e configuramos o rastreio das conversões.",
    abordagemTexto:
      "Equilibramos velocidade de entrega com boas práticas de conversão. Cada elemento da página existe para responder a uma dúvida real do seu cliente e conduzi-lo ao próximo passo.",
  },
  {
    id: "loja-virtual",
    number: "02.",
    title: "E-commerce",
    image: "/images/projeto-petshop.png",
    alt: "Projeto de e-commerce de pet shop exibido em um notebook",
    publicoAlvo:
      "Marcas e pequenos negócios que querem vender online com catálogo, carrinho e pagamento próprios.",
    precoInicial: "R$ 3.500",
    prazo: "4–5 semanas",
    disponibilidade: "Vagas abertas",
    visaoGeral: [
      "Uma loja virtual precisa apresentar bem o produto e remover qualquer obstáculo entre o “quero” e o “comprei”. Construímos a experiência considerando toda a jornada, da vitrine ao checkout.",
      "A navegação facilita a descoberta dos produtos, enquanto o processo de compra reduz dúvidas e abandono de carrinho. Do outro lado, você recebe uma operação simples de administrar.",
    ],
    incluidos: [
      "Catálogo com categorias e variações de produto",
      "Carrinho e checkout otimizados para conversão",
      "Integração com cartão, Pix e/ou boleto",
      "Cálculo de frete integrado",
      "Painel para gestão de produtos, estoque e pedidos",
      "Notificações automáticas de pedido",
      "Design responsivo mobile-first",
      "SEO on-page básico para produtos",
    ],
    descobertaTexto:
      "Mapeamos seu catálogo, as formas de pagamento e envio desejadas e como sua equipe pretende gerenciar estoque e pedidos no dia a dia.",
    lancamentoTexto:
      "Construímos catálogo, checkout e painel administrativo, testamos o fluxo de compra de ponta a ponta, incluindo pagamento real, e acompanhamos os primeiros pedidos após a publicação.",
    abordagemTexto:
      "Cada etapa do checkout é tratada como um ponto onde a venda pode ser perdida. Por isso, simplificamos ao máximo o caminho entre adicionar ao carrinho e receber a confirmação da compra.",
  },
  {
    id: "sistemas-sob-medida",
    number: "03.",
    title: "Sistemas Sob Medida",
    image: "/images/projeto-sistema.png",
    alt: "Projeto de sistema de gestão exibido em um notebook",
    publicoAlvo:
      "Empresas com processos internos que já não cabem em planilhas ou ferramentas prontas.",
    precoInicial: "Sob consulta",
    prazo: "4–8 semanas",
    disponibilidade: "Sob análise de escopo",
    visaoGeral: [
      "Sistemas sob medida resolvem o que nenhuma ferramenta pronta resolve sozinha: o jeito específico como o seu negócio funciona. Mapeamos a operação real para transformar gargalos em um fluxo digital claro.",
      "Construímos somente o que é necessário para apoiar a rotina, organizar informações e dar visibilidade às decisões, sem funcionalidades genéricas sobrando.",
    ],
    incluidos: [
      "Workshop de descoberta do processo atual",
      "Modelagem de dados sob medida",
      "Painel administrativo com papéis de usuário",
      "Integrações com pagamentos, WhatsApp ou APIs externas",
      "Deploy e configuração do ambiente",
      "Treinamento da equipe",
      "Suporte no período pós-lançamento",
    ],
    descobertaTexto:
      "Entendemos o fluxo real de trabalho: quem faz o quê, onde estão os gargalos e quais decisões o sistema precisa apoiar diariamente.",
    lancamentoTexto:
      "Desenvolvemos em ciclos curtos, entregando partes funcionais ao longo do projeto. No lançamento, treinamos a equipe e acompanhamos os primeiros dias de uso real.",
    abordagemTexto:
      "Começamos pelo problema, não pela tecnologia. Só depois de compreender o processo escolhemos a arquitetura mais simples que atende à necessidade real, sem complexidade desnecessária.",
  },
];
