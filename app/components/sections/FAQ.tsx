import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { faq } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad section-transition relative overflow-hidden bg-bg">
      <div className="section-wave-out wave-to-white" aria-hidden="true" />
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-[0.55fr_1fr]">
        <RevealOnScroll>
          <p className="font-mono text-sm text-ink-soft">FAQ.</p>
          <h2 className="editorial-h2 mt-4">Perguntas que aparecem antes de comecar</h2>
          <span className="gradient-rule mt-6" />
          <p className="mt-6 leading-7 text-ink-soft">
            Respostas curtas para alinhar expectativa, processo e responsabilidade de entrega.
          </p>
        </RevealOnScroll>
        <Accordion
          items={faq}
          openIndex={openIndex}
          onToggle={(value) => setOpenIndex(openIndex === value ? -1 : value)}
        />
      </div>
    </section>
  );
}
