import { assetPath } from "@/lib/assets";

const nav = ["Projetos", "Servicos", "Sobre", "Insights"];
const socials = ["Instagram", "GitHub", "LinkedIn"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-white py-14">
      <span className="soft-orb -right-52 -top-52 h-[34rem] w-[34rem] opacity-60" aria-hidden="true" />
      <div className="container-x relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={assetPath("/images/logo-xe-mark.svg")}
              alt="Logo da XE Software"
              loading="lazy"
              className="h-16 w-auto"
            />
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Software</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">Design, engenharia front-end e produtos digitais sob medida.</p>
            </div>
          </div>
          <a href="#contato" className="brand-gradient relative z-10 inline-flex min-h-11 items-center justify-center rounded-pill px-5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(37,99,235,0.2)]">
            Começar um projeto
          </a>
        </div>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Contato</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:[email-a-definir]" className="block transition hover:text-accent">
                [email a definir]
              </a>
              <a href="#contato" className="block transition hover:text-accent">
                [WhatsApp a definir]
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Navegacao</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-accent">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-ink-soft">Redes</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {socials.map((item) => (
                <a key={item} href="#contato" className="transition hover:text-accent">
                  {item}
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
