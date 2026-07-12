import { type FormEvent } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";

const tiposDeProjeto = [
  "Landing Page",
  "Site profissional",
  "Loja virtual",
  "Sistema sob medida",
];

const faixasDeOrcamento = [
  "Ainda estou definindo",
  "Até R$ 3 mil",
  "De R$ 3 mil a R$ 8 mil",
  "Acima de R$ 8 mil",
];

function enviarBriefing(evento: FormEvent<HTMLFormElement>) {
  evento.preventDefault();

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

  window.location.href = `mailto:emanoelcandidolima@gmail.com?subject=${encodeURIComponent(
    "Briefing para página, site ou sistema",
  )}&body=${encodeURIComponent(corpo)}`;
}

export function ChamadaFinal() {
  return (
    <section id="briefing" className="briefing-section relative overflow-hidden">
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

            <button type="submit" className="briefing-submit">
              Enviar
            </button>
          </form>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
