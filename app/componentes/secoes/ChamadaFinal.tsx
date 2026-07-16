import { type FormEvent, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";

const tiposDeProjeto = [
  "Landing Page",
  "Sites/E-commerce",
  "Sistema sob medida",
];

const faixasDeOrcamento = [
  "Ainda estou definindo",
  "Até R$ 3 mil",
  "De R$ 3 mil a R$ 8 mil",
  "Acima de R$ 8 mil",
];

export function ChamadaFinal() {
  const [estadoEnvio, setEstadoEnvio] = useState<"inativo" | "enviando" | "aprovado" | "erro">("inativo");
  const temporizadorResetRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (temporizadorResetRef.current) window.clearTimeout(temporizadorResetRef.current);
    };
  }, []);

  async function enviarBriefing(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (estadoEnvio === "enviando" || estadoEnvio === "aprovado") return;

    const dados = new FormData(evento.currentTarget);
    dados.set("_subject", "Novo briefing pelo site XE Software");
    dados.set("_template", "table");
    dados.set("_captcha", "true");
    dados.set("_honey", "");
    setEstadoEnvio("enviando");

    try {
      const resposta = await fetch("https://formsubmit.co/ajax/xesoftware.com.br@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: dados,
      });

      if (!resposta.ok) throw new Error("Não foi possível enviar o briefing.");

      setEstadoEnvio("aprovado");
      temporizadorResetRef.current = window.setTimeout(() => {
        setEstadoEnvio("inativo");
      }, 2200);
    } catch {
      setEstadoEnvio("erro");
      temporizadorResetRef.current = window.setTimeout(() => {
        setEstadoEnvio("inativo");
      }, 2600);
    }
  }

  return (
    <section id="briefing" className="briefing-section relative">
      <div className="briefing-wave-in" aria-hidden="true" />
      <div className="briefing-glows" aria-hidden="true">
        <span className="briefing-glow briefing-glow-32" />
        <span className="briefing-glow briefing-glow-31" />
        <span className="briefing-glow briefing-glow-30" />
        <span className="briefing-glow briefing-glow-29" />
      </div>
      <div className="container-x briefing-layout relative z-10">
        <RevelarAoRolar className="briefing-grid">
          <div className="briefing-copy">
            <p className="briefing-kicker">Vamos criar algo juntos</p>
            <h2>
              Seu próximo projeto<br />
              começa com uma<br />
              boa conversa
            </h2>
            <p>
              Conte o que você precisa e quais resultados deseja alcançar. A XE transforma suas
              ideias em uma experiência digital pensada para fortalecer sua marca e gerar novas
              oportunidades.
            </p>
          </div>

          <form className="briefing-form" onSubmit={enviarBriefing}>
            <label className="sr-only" htmlFor="briefing-nome">
              Seu nome
            </label>
            <input id="briefing-nome" name="nome" required placeholder="Seu nome" />

            <label className="sr-only" htmlFor="briefing-contato">
              E-mail ou WhatsApp
            </label>
            <input id="briefing-contato" name="contato" required placeholder="E-mail ou WhatsApp" />

            <label className="sr-only" htmlFor="briefing-tipo">
              Tipo de projeto
            </label>
            <select id="briefing-tipo" name="tipo" defaultValue={tiposDeProjeto[0]}>
              {tiposDeProjeto.map((tipo) => (
                <option key={tipo}>{tipo}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="briefing-orcamento">
              Orçamento esperado
            </label>
            <select id="briefing-orcamento" name="orcamento" defaultValue="">
              <option value="" disabled>
                Orçamento esperado
              </option>
              {faixasDeOrcamento.map((faixa) => (
                <option key={faixa}>{faixa}</option>
              ))}
            </select>

            <input className="briefing-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <button
              type="submit"
              className={`briefing-submit${estadoEnvio === "aprovado" ? " is-approved" : ""}${estadoEnvio === "erro" ? " has-error" : ""}`}
              disabled={estadoEnvio === "enviando" || estadoEnvio === "aprovado"}
              aria-label={estadoEnvio === "aprovado" ? "Briefing enviado com sucesso" : "Enviar briefing por e-mail"}
            >
              <span key={estadoEnvio} className="briefing-submit-content">
                {estadoEnvio === "aprovado" ? <Check aria-hidden="true" strokeWidth={3} /> : estadoEnvio === "enviando" ? "Enviando..." : estadoEnvio === "erro" ? "Tente novamente" : "Enviar"}
              </span>
            </button>
          </form>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
