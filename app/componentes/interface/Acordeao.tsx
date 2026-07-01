import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { classes } from "@/utilitarios/classes";

type ItemAcordeao = {
  titulo?: string;
  descricao?: string;
  resposta?: string;
  tags?: string[];
  pergunta?: string;
};

export function Acordeao({
  itens,
  indiceAberto,
  aoAlternar,
  contraste = false,
  numerado = false,
}: {
  itens: ItemAcordeao[];
  indiceAberto: number | null;
  aoAlternar: (indice: number) => void;
  contraste?: boolean;
  numerado?: boolean;
}) {
  const reduzirMovimento = useReducedMotion();

  return (
    <div className={classes("overflow-hidden rounded-card border", contraste ? "border-white/10 bg-white/[0.04]" : "border-line bg-white shadow-card")}>
      {itens.map((item, indice) => {
        const estaAberto = indiceAberto === indice;
        const titulo = item.titulo ?? item.pergunta;
        const corpo = item.descricao ?? item.resposta;

        return (
          <div key={titulo} className={classes("px-5 py-5 md:px-7", indice > 0 && (contraste ? "border-t border-white/10" : "border-t border-line"))}>
            <button
              className="flex min-h-11 w-full items-center justify-between gap-4 text-left"
              type="button"
              aria-expanded={estaAberto}
              onClick={() => aoAlternar(indice)}
            >
              <span className="flex items-start gap-4">
                {numerado ? (
                  <span
                    className={classes(
                      "grid size-8 shrink-0 place-items-center rounded-pill font-mono text-xs font-semibold",
                      contraste ? "bg-white/10 text-contrast-ink" : "bg-accent-soft text-accent",
                    )}
                  >
                    ({String(indice + 1).padStart(3, "0")})
                  </span>
                ) : null}
                <span
                  className={classes(
                    "text-lg font-bold md:text-2xl",
                    contraste ? "text-contrast-ink" : "text-ink",
                  )}
                >
                  {titulo}
                </span>
              </span>
              <motion.span
                animate={{ rotate: estaAberto ? 45 : 0 }}
                transition={{ duration: reduzirMovimento ? 0 : 0.2 }}
                className={classes(
                  "grid size-11 shrink-0 place-items-center rounded-pill border",
                  contraste ? "border-white/15 bg-white/5 text-white" : "border-line bg-bg text-ink",
                )}
              >
                <Plus className="size-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {estaAberto ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduzirMovimento ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-3xl pb-2 pt-4 pl-0 md:pl-20">
                    <p
                      className={classes(
                        "text-base leading-7",
                        contraste ? "text-contrast-ink-soft" : "text-ink-soft",
                      )}
                    >
                      {corpo}
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
