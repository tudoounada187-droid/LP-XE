import { useEffect, useRef, useState } from "react";
import { CircleHelp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { perguntasFrequentes } from "@/dados/perguntasFrequentes";
import { caminhoDoAsset } from "@/utilitarios/assets";
import { classes } from "@/utilitarios/classes";

export function PerguntasFrequentes() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  const [indiceDigitando, setIndiceDigitando] = useState<number | null>(null);
  const timeoutDigitacao = useRef<number | null>(null);
  const reduzirMovimento = useReducedMotion();

  useEffect(() => {
    return () => {
      if (timeoutDigitacao.current !== null) {
        window.clearTimeout(timeoutDigitacao.current);
      }
    };
  }, []);

  function selecionarPergunta(indice: number) {
    if (timeoutDigitacao.current !== null) {
      window.clearTimeout(timeoutDigitacao.current);
    }

    setIndiceAtivo(indice);
    setIndiceDigitando(indice);
    timeoutDigitacao.current = window.setTimeout(
      () => {
        setIndiceDigitando(null);
        timeoutDigitacao.current = null;
      },
      reduzirMovimento ? 260 : 880,
    );
  }

  return (
    <section id="faq" className="faq-section section-pad section-transition relative overflow-hidden">
      <div className="container-x relative z-10">
        <RevelarAoRolar className="faq-heading">
          <div className="faq-label">
            <CircleHelp aria-hidden="true" />
            <span>FAQ</span>
          </div>
          <h2>
            Perguntas
            <br />
            Frequentes
          </h2>
          <p>Ainda tem dúvidas? A gente responde.</p>
        </RevelarAoRolar>

        <RevelarAoRolar atraso={0.08} className="faq-board">
          <div className="faq-conversation" aria-label="Conversa de perguntas frequentes">
            {perguntasFrequentes.map((item, indice) => {
              return (
                <div key={item.pergunta} className="faq-message-turn">
                  <button
                    id={`faq-question-${indice}`}
                    type="button"
                    aria-pressed={indice === indiceAtivo}
                    aria-controls="faq-current-response"
                    className={classes("faq-question", indice === indiceAtivo && "is-active")}
                    onClick={() => selecionarPergunta(indice)}
                    onKeyDown={(evento) => {
                      if (evento.key !== "ArrowDown" && evento.key !== "ArrowUp") return;

                      evento.preventDefault();
                      const direcao = evento.key === "ArrowDown" ? 1 : -1;
                      const proximo = (indice + direcao + perguntasFrequentes.length) % perguntasFrequentes.length;
                      document.getElementById(`faq-question-${proximo}`)?.focus();
                    }}
                  >
                    {item.pergunta}
                  </button>
                </div>
              );
            })}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={indiceDigitando !== null ? `typing-${indiceAtivo}` : `answer-${indiceAtivo}`}
                id="faq-current-response"
                className={classes("faq-answer-row", indiceDigitando !== null && "is-typing")}
                role="status"
                aria-live="polite"
                initial={reduzirMovimento ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduzirMovimento ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: reduzirMovimento ? 0.12 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {indiceDigitando !== null ? (
                  <div className="faq-typing-bubble" aria-label="Digitando resposta">
                    <span />
                    <span />
                    <span />
                  </div>
                ) : (
                  <p>{perguntasFrequentes[indiceAtivo].resposta}</p>
                )}
                <span className="faq-answer-brand" aria-hidden="true">
                  <img src={caminhoDoAsset("/images/logo-xe-mark.svg")} alt="" />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
