import { caminhoDoAsset } from "@/utilitarios/assets";

const linksNavegacao = [
  { label: "Cenário", href: "#diagnostico" },
  { label: "Entregas", href: "#entregas" },
  { label: "Clientes", href: "#publicos" },
  { label: "Transformação", href: "#transformacao" },
  { label: "Cases", href: "#projetos" },
  { label: "Processo", href: "#metodo" },
  { label: "Briefing", href: "#briefing" },
];

const linksServicos = [
  "Página profissional",
  "Site institucional",
  "Sistema sob medida",
];

const linksRedes = [
  { label: "Instagram", href: "https://www.instagram.com/xe_software/" },
  { label: "GitHub", href: "https://github.com/EmanuelCandido" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emanuecandido" },
];

type PropriedadesRodape = {
  aoSolicitarOrcamento: () => void;
};

export function Rodape({ aoSolicitarOrcamento }: PropriedadesRodape) {
  return (
    <footer className="footer-editorial relative overflow-hidden py-14 md:py-20">
      <div className="container-x relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={caminhoDoAsset("/images/logo-xe-mark.svg")}
                alt="Logo da XE Software"
                loading="lazy"
                className="h-12 w-auto rounded-xl bg-white p-1"
              />
              <p className="font-mono text-xs font-semibold uppercase text-white/50">Software</p>
            </div>
            <p className="footer-wordmark mt-8">XE Software</p>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-2xl font-extrabold leading-tight md:text-3xl">
              Páginas, sites e sistemas para negócios que precisam ser levados a sério no digital.
            </p>
            <p className="mt-4 leading-7 text-white/60">
              A XE transforma oferta, reputação e rotina em uma experiência digital com objetivo,
              linguagem e caminho de contato claro.
            </p>
            <button
              type="button"
              onClick={aoSolicitarOrcamento}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-pill bg-white px-5 text-sm font-bold text-ink transition hover:bg-accent-soft"
            >
              Começar briefing
            </button>
          </div>
        </div>
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-white/50">Contato</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="https://www.instagram.com/xe_software/" className="footer-link">
                Instagram: @xe_software
              </a>
              <a href="mailto:emanoelcandidolima@gmail.com" className="footer-link">
                E-mail: emanoelcandidolima@gmail.com
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-white/50">Navegação</p>
            <div className="mt-4 space-y-2 text-sm">
              {linksNavegacao.map((item) => (
                <a key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-white/50">Serviços</p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              {linksServicos.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-white/50">Redes</p>
            <div className="mt-4 space-y-2 text-sm">
              {linksRedes.map((item) => (
                <a key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-white/40">© 2026 XE Software.</p>
      </div>
    </footer>
  );
}
