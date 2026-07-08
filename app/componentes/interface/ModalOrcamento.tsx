import { LockKeyhole, Mail, MessageSquare, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, useEffect } from "react";

type PropriedadesModalOrcamento = {
  aberto: boolean;
  aoFechar: () => void;
};

export function ModalOrcamento({ aberto, aoFechar }: PropriedadesModalOrcamento) {
  useEffect(() => {
    if (!aberto) {
      return;
    }

    const aoPressionarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        aoFechar();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", aoPressionarTecla);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", aoPressionarTecla);
    };
  }, [aberto, aoFechar]);

  function enviarSolicitacao(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = new FormData(evento.currentTarget);
    const contato = String(dados.get("contato") ?? "");
    const nome = String(dados.get("nome") ?? "");
    const projeto = String(dados.get("projeto") ?? "");
    const corpo = [
      `Contato: ${contato}`,
      nome ? `Nome ou empresa: ${nome}` : "",
      "",
      "O que preciso:",
      projeto,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:emanoelcandidolima@gmail.com?subject=${encodeURIComponent(
      "Solicitação de orçamento",
    )}&body=${encodeURIComponent(corpo)}`;
  }

  return (
    <AnimatePresence>
      {aberto ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/45 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-modal-orcamento"
          onMouseDown={aoFechar}
        >
          <motion.div
            className="relative max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-line bg-white p-6 shadow-[0_28px_90px_rgba(16,24,40,0.22)] md:p-10"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-line bg-white text-ink-soft transition hover:border-accent/40 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={aoFechar}
              aria-label="Fechar janela de orçamento"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <span className="gradient-rule h-1 w-24" aria-hidden="true" />
            <h2 id="titulo-modal-orcamento" className="mt-5 text-4xl font-black tracking-tight text-ink md:text-5xl">
              Solicitar orçamento
            </h2>
            <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-ink-soft md:text-base">
              Preencha seus dados e conte o que você precisa. Entraremos em contato com uma proposta personalizada.
            </p>

            <form className="mt-7 space-y-5" onSubmit={enviarSolicitacao}>
              <label className="block">
                <span className="text-sm font-bold text-ink">
                  Contato <span className="text-accent-2">*</span>
                </span>
                <span className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-ink-soft focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/15">
                  <Mail className="size-5" aria-hidden="true" />
                  <input
                    name="contato"
                    required
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm font-semibold text-ink outline-none placeholder:text-ink-soft/70"
                    placeholder="Seu e-mail ou WhatsApp"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-ink">
                  Nome ou empresa <span className="text-ink-soft">(opcional)</span>
                </span>
                <span className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl border border-line bg-white px-4 text-ink-soft focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/15">
                  <User className="size-5" aria-hidden="true" />
                  <input
                    name="nome"
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm font-semibold text-ink outline-none placeholder:text-ink-soft/70"
                    placeholder="Seu nome ou o nome da sua empresa"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-ink">
                  O que você quer? <span className="text-accent-2">*</span>
                </span>
                <span className="mt-2 flex items-start gap-3 rounded-2xl border border-line bg-white px-4 text-ink-soft focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/15">
                  <MessageSquare className="mt-3 size-5" aria-hidden="true" />
                  <textarea
                    name="projeto"
                    required
                    rows={4}
                    className="min-w-0 flex-1 resize-y bg-transparent py-3 text-sm font-semibold text-ink outline-none placeholder:text-ink-soft/70"
                    placeholder="Descreva seu projeto, objetivo e o que você precisa..."
                  />
                </span>
              </label>

              <button
                type="submit"
                className="brand-gradient inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(37,99,235,0.24)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Enviar solicitação
              </button>
            </form>

            <p className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-ink-soft">
              <LockKeyhole className="size-4" aria-hidden="true" />
              Seus dados estão seguros. Não compartilhamos suas informações.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
