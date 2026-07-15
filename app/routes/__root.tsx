import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { caminhoDoAsset } from "@/utilitarios/assets";
import estilosGlobais from "@/estilos/globais.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "XE Software | Sites, landing pages e sistemas para vender melhor",
      },
      {
        name: "description",
        content:
          "Criamos sites, landing pages e sistemas sob medida para lojas, clínicas, escritórios e prestadores de serviço que querem passar confiança e receber mais orçamentos.",
      },
      { property: "og:title", content: "XE Software" },
      {
        property: "og:description",
        content:
          "Páginas profissionais, sites institucionais e sistemas sob medida com foco em clareza, confiança e conversão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: caminhoDoAsset("/images/og-cover.svg") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: caminhoDoAsset("/images/logo-xe-mark.svg") },
      { rel: "stylesheet", href: estilosGlobais },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
