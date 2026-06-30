import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  title?: string;
  description?: string;
  answer?: string;
  tags?: string[];
  question?: string;
};

export function Accordion({
  items,
  openIndex,
  onToggle,
  contrast = false,
  numbered = false,
}: {
  items: AccordionItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  contrast?: boolean;
  numbered?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("overflow-hidden rounded-card border", contrast ? "border-white/10 bg-white/[0.04]" : "border-line bg-white shadow-card")}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const title = item.title ?? item.question;
        const body = item.description ?? item.answer;

        return (
          <div key={title} className={cn("px-5 py-5 md:px-7", index > 0 && (contrast ? "border-t border-white/10" : "border-t border-line"))}>
            <button
              className="flex min-h-11 w-full items-center justify-between gap-4 text-left"
              type="button"
              aria-expanded={isOpen}
              onClick={() => onToggle(index)}
            >
              <span className="flex items-start gap-4">
                {numbered ? (
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-pill font-mono text-xs font-semibold",
                      contrast ? "bg-white/10 text-contrast-ink" : "bg-accent-soft text-accent",
                    )}
                  >
                    ({String(index + 1).padStart(3, "0")})
                  </span>
                ) : null}
                <span
                  className={cn(
                    "text-lg font-bold md:text-2xl",
                    contrast ? "text-contrast-ink" : "text-ink",
                  )}
                >
                  {title}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-pill border",
                  contrast ? "border-white/15 bg-white/5 text-white" : "border-line bg-bg text-ink",
                )}
              >
                <Plus className="size-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-3xl pb-2 pt-4 pl-0 md:pl-20">
                    <p
                      className={cn(
                        "text-base leading-7",
                        contrast ? "text-contrast-ink-soft" : "text-ink-soft",
                      )}
                    >
                      {body}
                    </p>
                    {item.tags ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-pill border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-contrast-ink"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
