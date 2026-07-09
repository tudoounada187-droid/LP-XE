import { type FormEvent } from "react";
import { RevelarAoRolar } from "@/componentes/animacoes/RevelarAoRolar";
import { Mail, MessageSquare, User } from "lucide-react";

function enviarBriefing(evento: FormEvent<HTMLFormElement>) {
  evento.preventDefault();

  const dados = new FormData(evento.currentTarget);
  const contato = String(dados.get("contato") ?? "");
  const nome = String(dados.get("nome") ?? "");
  const projeto = String(dados.get("projeto") ?? "");
  const corpo = [
    `Contato: ${contato}`,
    nome ? `Nome ou empresa: ${nome}` : "",
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
  return (
    <section id="briefing" className="briefing-section section-pad relative overflow-hidden">
      <div className="container-x relative z-10">
        <RevelarAoRolar className="grid gap-10 lg:grid-cols-[0.82fr_0.72fr] lg:items-start">
          <div>
            <p className="font-mono text-sm text-white/55">Briefing direto</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] text-white md:text-6xl">
              Conte o que precisa vender, apresentar ou organizar.
            </h2>
            <span className="gradient-rule mt-6" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Não precisa chegar com escopo fechado. Basta contar se o objetivo é vender melhor,
              passar mais confiança, receber contatos mais preparados ou organizar uma rotina.
            </p>
            <div className="mt-10 rounded-[1rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="font-mono text-xs font-semibold uppercase text-white/45">O que você precisa?</p>
              <p className="mt-3 text-xl font-extrabold leading-tight text-white">
                Página profissional · Site institucional · Sistema sob medida
              </p>
            </div>
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
            <button type="submit">Enviar briefing</button>
            <p>Resposta por e-mail com recomendação de formato, prioridade inicial e próximos passos.</p>
          </form>
        </RevelarAoRolar>
      </div>
    </section>
  );
}
