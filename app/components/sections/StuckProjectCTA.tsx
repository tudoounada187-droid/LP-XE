import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";

const symptoms = [
  "Perfil profissional, mas sem página de apoio",
  "Serviço bom, mas apresentação confusa",
  "Cliente interessado, mas sem caminho claro de contato",
  "Processos manuais demais no dia a dia",
  "Site antigo, pesado ou pouco profissional",
];

const idealFor = [
  "criar uma landing page ligada ao Instagram",
  "apresentar serviços de forma profissional",
  "validar uma oferta digital",
  "criar um MVP web",
  "organizar cadastros, agendamentos ou rotinas internas",
];

export function StuckProjectCTA() {
  return (
    <section className="brand-dark brand-dark-soft section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <RevealOnScroll>
          <p className="font-mono text-sm text-contrast-ink-soft">Projeto travado?</p>
          <h2 className="editorial-h2 mt-4 max-w-3xl">
            Sua ideia ainda não virou uma presença digital profissional?
          </h2>
          <span className="gradient-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-contrast-ink-soft">
            Ajudamos a transformar uma ideia solta em uma página, site ou sistema com estrutura,
            visual e objetivo claro.
          </p>
          <Button href="#contato" variant="accent" className="mt-8">
            Destravar meu projeto
          </Button>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} className="grid gap-4">
          <div className="rounded-card border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <h3 className="font-mono text-sm text-contrast-ink-soft">Sintomas</h3>
            <ul className="mt-5 space-y-3">
              {symptoms.map((item) => (
                <li key={item} className="flex items-center gap-3 text-contrast-ink">
                  <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <h3 className="font-mono text-sm text-contrast-ink-soft">Parceira ideal para</h3>
            <ul className="mt-5 space-y-3">
              {idealFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-contrast-ink">
                  <CheckCircle2 className="size-4 text-accent-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="rounded-card bg-white p-6 text-ink shadow-card">
            <p>"[Depoimento real a definir]"</p>
            <footer className="mt-5 text-sm text-ink-soft">[Nome do cliente] · [Cargo/empresa]</footer>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  );
}
