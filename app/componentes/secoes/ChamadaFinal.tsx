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
  const [envioConfirmado, setEnvioConfirmado] = useState(false);
  const temporizadorEmailRef = useRef<number | null>(null);
  const temporizadorResetRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (temporizadorEmailRef.current) window.clearTimeout(temporizadorEmailRef.current);
      if (temporizadorResetRef.current) window.clearTimeout(temporizadorResetRef.current);
    };
  }, []);

  function enviarBriefing(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (envioConfirmado) return;

    const dados = new FormData(evento.currentTarget);
    const contato = String(dados.get("contato") ?? "");
    const nome = String(dados.get("nome") ?? "");
    const tipo = String(dados.get("tipo") ?? "");
    const orcamento = String(dados.get("orcamento") ?? "");
    const corpo = [
      `Contato: ${contato}`,
      `Nome ou empresa: ${nome}`,
      `Tipo de projeto: ${tipo}`,
      `Orçamento esperado: ${orcamento}`,
    ]
      .filter(Boolean)
      .join("\n");
    const email = `mailto:xesoftware.com.br@gmail.com?subject=${encodeURIComponent(
      "Briefing para página, site ou sistema",
    )}&body=${encodeURIComponent(corpo)}`;

    setEnvioConfirmado(true);
    temporizadorEmailRef.current = window.setTimeout(() => {
      window.location.href = email;
    }, 450);
    temporizadorResetRef.current = window.setTimeout(() => {
      setEnvioConfirmado(false);
    }, 2200);
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

            <button
              type="submit"
              className={`briefing-submit${envioConfirmado ? " is-approved" : ""}`}
              disabled={envioConfirmado}
              aria-label={envioConfirmado ? "Briefing pronto para envio" : "Enviar briefing por e-mail"}
            >
              <span key={envioConfirmado ? "aprovado" : "enviar"} className="briefing-submit-content">
                {envioConfirmado ? <Check aria-hidden="true" strokeWidth={3} /> : "Enviar"}
              </span>
            </button>
          </form>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
