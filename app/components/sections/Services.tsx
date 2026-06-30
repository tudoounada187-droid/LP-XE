import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { services } from "@/data/services";

export function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="servicos" className="brand-dark section-pad section-transition relative overflow-hidden text-contrast-ink">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevealOnScroll className="grid gap-8 md:grid-cols-[0.7fr_1fr]">
          <div>
            <SectionLabel light>Servicos ({services.length})</SectionLabel>
            <h2 className="editorial-h2 mt-4">Servicos.</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="max-w-2xl text-lg leading-8 text-contrast-ink-soft">
            Atuamos onde estrategia, interface e engenharia precisam conversar sem ruido.
          </p>
        </RevealOnScroll>
        <div className="mt-12">
          <Accordion
            items={services}
            openIndex={openIndex}
            onToggle={(index) => setOpenIndex(openIndex === index ? -1 : index)}
            contrast
          />
        </div>
      </div>
    </section>
  );
}
