import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function FinalCTA() {
  return (
    <section id="contato" className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x brand-card relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <div className="brand-wave opacity-60" aria-hidden="true" />
        <RevealOnScroll className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="font-mono text-sm text-ink-soft">Proximo passo</p>
            <h2 className="editorial-h2 mt-4 max-w-3xl">Pronto para o primeiro passo?</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white/90 p-4 shadow-[0_16px_35px_rgba(16,24,40,0.06)]">
                <p className="font-bold">Resposta rapida</p>
                <p className="mt-2 text-sm text-ink-soft">[Canal e SLA a definir]</p>
              </div>
              <div className="rounded-2xl border border-line bg-white/90 p-4 shadow-[0_16px_35px_rgba(16,24,40,0.06)]">
                <p className="font-bold">Proximos passos claros</p>
                <p className="mt-2 text-sm text-ink-soft">Diagnostico, escopo e decisao.</p>
              </div>
            </div>
            <Button href="mailto:[email-a-definir]" className="mt-6">
              Comecar conversa
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
