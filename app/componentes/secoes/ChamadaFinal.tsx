import { type FormEvent, useEffect, useRef, useState } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { ListChecks, Mail, MessageSquare, User } from "lucide-react";

const tiposDeProjeto = [
  "Página profissional",
  "Site institucional",
  "Sistema sob medida",
  "Ainda não sei",
];

function enviarBriefing(evento: FormEvent<HTMLFormElement>) {
  evento.preventDefault();

  const dados = new FormData(evento.currentTarget);
  const contato = String(dados.get("contato") ?? "");
  const nome = String(dados.get("nome") ?? "");
  const tipo = String(dados.get("tipo") ?? "");
  const projeto = String(dados.get("projeto") ?? "");
  const corpo = [
    `Contato: ${contato}`,
    nome ? `Nome ou empresa: ${nome}` : "",
    tipo ? `Tipo de projeto: ${tipo}` : "",
    "",
    "Briefing:",
    projeto,
  ]
    .filter(Boolean)
    .join("\n");

  window.location.href = `mailto:emanoelcandidolima@gmail.com?subject=${encodeURIComponent(
    "Briefing para página, site ou sistema",
  )}&body=${encodeURIComponent(corpo)}`;
}

export function ChamadaFinal() {
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fecharAoClicarFora(evento: MouseEvent) {
      if (!menuRef.current?.contains(evento.target as Node)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", fecharAoClicarFora);
    return () => document.removeEventListener("mousedown", fecharAoClicarFora);
  }, []);

  return (
    <section id="briefing" className="briefing-section section-pad relative overflow-hidden">
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-10 lg:grid-cols-[0.82fr_0.72fr] lg:items-start">
          <div>
            <p className="eyebrow-text">Formulário</p>
            <h2 className="editorial-h2 mt-4 max-w-3xl text-white">
              Conte o que sua empresa precisa construir agora.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Não precisa chegar com escopo fechado. Basta contar se o objetivo é vender melhor,
              passar mais confiança, receber contatos mais preparados ou organizar uma rotina.
            </p>
          </div>

          <form className="briefing-form" onSubmit={enviarBriefing}>
            <label>
              <span>Contato *</span>
              <div>
                <Mail className="size-5" aria-hidden="true" />
                <input name="contato" required placeholder="Seu e-mail ou WhatsApp" />
              </div>
            </label>
            <label>
              <span>Nome ou empresa</span>
              <div>
                <User className="size-5" aria-hidden="true" />
                <input name="nome" placeholder="Quem está falando?" />
              </div>
            </label>
            <label>
              <span>Tipo de projeto</span>
              <div className="briefing-select-shell">
                <ListChecks className="size-5" aria-hidden="true" />
                <input type="hidden" name="tipo" value={tipoSelecionado} />
                <div
                  className={menuAberto ? "briefing-choice is-open" : "briefing-choice"}
                  ref={menuRef}
                  role="group"
                  aria-label="Tipo de projeto"
                >
                  <button
                    type="button"
                    className="briefing-choice-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={menuAberto}
                    onClick={() => setMenuAberto((aberto) => !aberto)}
                    onKeyDown={(evento) => {
                      if (evento.key === "Escape") {
                        setMenuAberto(false);
                      }
                    }}
                  >
                    {tipoSelecionado || "Escolha uma opção"}
                  </button>
                  {menuAberto ? (
                    <div className="briefing-choice-menu" role="listbox">
                      {tiposDeProjeto.map((tipo) => (
                        <button
                          key={tipo}
                          type="button"
                          className={tipo === tipoSelecionado ? "is-selected" : undefined}
                          role="option"
                          aria-selected={tipo === tipoSelecionado}
                          onClick={() => {
                            setTipoSelecionado(tipo);
                            setMenuAberto(false);
                          }}
                        >
                          {tipo}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </label>
            <label>
              <span>O que você quer resolver? *</span>
              <div className="items-start">
                <MessageSquare className="mt-3 size-5" aria-hidden="true" />
                <textarea
                  name="projeto"
                  required
                  rows={6}
                  placeholder="Exemplo: tenho uma loja, escritório ou consultório e quero uma página/site para explicar meu trabalho, passar confiança e receber contatos melhores."
                />
              </div>
            </label>
            <button type="submit" className="briefing-submit">
              Solicitar orçamento
            </button>
          </form>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
