import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { caminhoDoAsset } from "@/utilitarios/assets";
import estilosGlobais from "@/estilos/globais.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "XE Software | Sites, landing pages e sistemas sob medida",
      },
      {
        name: "description",
        content:
          "Criamos sites, landing pages e sistemas web sob medida para profissionais, empresas e lojas locais que querem melhorar presença digital, atrair clientes e organizar processos.",
      },
      { property: "og:title", content: "XE Software" },
      {
        property: "og:description",
        content:
          "Soluções digitais sob medida com design profissional, código organizado e foco em clareza, confiança e conversão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: caminhoDoAsset("/images/og-cover.svg") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: estilosGlobais }],
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
