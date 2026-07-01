import { Botao } from "@/componentes/interface/Botao";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { CheckCircle2 } from "lucide-react";
import { parceriaIdeal, sintomasProjetoTravado } from "@/dados/chamadaProjetoTravado";

export function ChamadaProjetoTravado() {
  return (
    <section className="brand-dark brand-dark-soft section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <RevelarAoRolar>
          <p className="font-mono text-sm text-contrast-ink-soft">Projeto travado?</p>
          <h2 className="editorial-h2 mt-4 max-w-3xl">
            Sua ideia ainda não virou uma presença digital profissional?
          </h2>
          <span className="gradient-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-contrast-ink-soft">
            Ajudamos a transformar uma ideia solta em uma página, site ou sistema com estrutura,
            visual e objetivo claro.
          </p>
          <Botao href="#contato" variante="destaque" className="mt-8">
            Falar sobre meu projeto
          </Botao>
        </RevelarAoRolar>
        <RevelarAoRolar atraso={0.1} className="grid gap-4">
          <div className="rounded-card border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <h3 className="font-mono text-sm text-contrast-ink-soft">Sintomas</h3>
            <ul className="mt-5 space-y-3">
              {sintomasProjetoTravado.map((item) => (
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
              {parceriaIdeal.map((item) => (
                <li key={item} className="flex items-center gap-3 text-contrast-ink">
                  <CheckCircle2 className="size-4 text-accent-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
