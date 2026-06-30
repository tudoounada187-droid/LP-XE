import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { assetPath } from "@/lib/assets";
import appCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "XE Software | Design e engenharia front-end para produtos digitais",
      },
      {
        name: "description",
        content:
          "Landing pages e sistemas web sob medida, unindo UI/UX design e engenharia front-end de alta performance.",
      },
      { property: "og:title", content: "XE Software" },
      {
        property: "og:description",
        content: "Design com proposito, codigo com performance e processo claro antes da execucao.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: assetPath("/images/og-cover.svg") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
