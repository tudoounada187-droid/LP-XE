import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { clientLogos } from "@/data/clients";
import { testimonials } from "@/data/testimonials";

export function Experience() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = testimonials[index];

  useEffect(() => {
    if (paused || reduceMotion || testimonials.length < 2) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 6000);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section className="section-pad section-transition relative overflow-hidden bg-white">
      <span className="soft-orb -right-56 top-16 h-[38rem] w-[38rem] opacity-60" aria-hidden="true" />
      <div className="section-wave-out wave-to-bg" aria-hidden="true" />
      <div className="container-x relative z-10">
        <RevealOnScroll className="grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-sm text-ink-soft">Experiencia.</p>
            <h2 className="editorial-h2 mt-4">+[N] projetos entregues</h2>
            <span className="gradient-rule mt-6" />
          </div>
          <p className="text-lg leading-8 text-ink-soft md:justify-self-end">
            <span className="placeholder-copy">[Numeros e depoimentos reais a preencher]</span>
          </p>
        </RevealOnScroll>
        <div className="mt-12">
          <Marquee items={clientLogos} />
        </div>
        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            >
              <TestimonialCard testimonial={current} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Abrir depoimento ${dotIndex + 1}`}
                  className={`relative z-10 min-h-11 min-w-11 rounded-pill border transition ${dotIndex === index ? "brand-gradient border-transparent shadow-[0_12px_24px_rgba(37,99,235,0.18)]" : "border-line bg-white"}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Depoimento anterior"
                className="grid size-11 place-items-center rounded-pill border border-line bg-white shadow-[0_12px_28px_rgba(16,24,40,0.06)] transition hover:border-accent/40 hover:text-accent"
                onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Proximo depoimento"
                className="grid size-11 place-items-center rounded-pill border border-line bg-white shadow-[0_12px_28px_rgba(16,24,40,0.06)] transition hover:border-accent/40 hover:text-accent"
                onClick={() => setIndex((index + 1) % testimonials.length)}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
