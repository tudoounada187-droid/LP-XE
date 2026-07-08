import { caminhoDoAsset } from "@/utilitarios/assets";

const linksNavegacao = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Insights", href: "#insights" },
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
    <footer className="relative overflow-hidden border-t border-line bg-white py-14">
      <span className="soft-orb -right-52 -top-52 h-[34rem] w-[34rem] opacity-60" aria-hidden="true" />
      <div className="container-x relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={caminhoDoAsset("/images/logo-xe-mark.svg")}
              alt="Logo da XE Software"
              loading="lazy"
              className="h-16 w-auto"
            />
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Software</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
                Sites, landing pages e sistemas sob medida para profissionais, empresas e negócios locais.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={aoSolicitarOrcamento}
            className="brand-gradient relative z-10 inline-flex min-h-11 items-center justify-center rounded-pill px-5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(37,99,235,0.2)]"
          >
            Solicitar orçamento
          </button>
        </div>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Contato</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="https://www.instagram.com/xe_software/" className="block transition hover:text-accent">
                Instagram: @xe_software
              </a>
              <a href="mailto:emanoelcandidolima@gmail.com" className="block transition hover:text-accent">
                E-mail: emanoelcandidolima@gmail.com
              </a>
              <a href="#contato" className="block transition hover:text-accent">
                WhatsApp: [a definir, caso queira divulgar]
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Navegação</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {linksNavegacao.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-accent">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Redes</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {linksRedes.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-accent">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-ink-soft">© 2026 XE Software.</p>
      </div>
    </footer>
  );
}
