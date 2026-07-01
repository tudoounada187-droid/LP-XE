import { classes } from "@/utilitarios/classes";

export function Letreiro({ itens, contraste = false }: { itens: string[]; contraste?: boolean }) {
  const repeticao = [...itens, ...itens];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track flex w-max gap-4 py-4">
        {repeticao.map((item, indice) => (
          <div
            key={`${item}-${indice}`}
            className={classes(
              "grid h-20 min-w-44 place-items-center rounded-[1.4rem] border px-8 font-mono text-sm font-semibold transition duration-300 hover:-translate-y-1",
              contraste
                ? "border-white/10 bg-white/[0.05] text-contrast-ink-soft hover:text-white"
                : "border-line bg-white text-ink-soft shadow-[0_14px_35px_rgba(16,24,40,0.06)] hover:text-ink",
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
