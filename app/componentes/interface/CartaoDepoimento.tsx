export function CartaoDepoimento({
  depoimento,
}: {
  depoimento: { citacao: string; nome: string; cargo: string; avatar: string };
}) {
  return (
    <figure className="brand-card rounded-card p-6 md:p-8">
      <div className="grid size-12 place-items-center rounded-pill bg-accent-soft font-mono text-sm font-semibold text-accent">
        {depoimento.avatar}
      </div>
      <blockquote className="mt-8 text-xl font-medium leading-8 text-ink md:text-2xl">
        "{depoimento.citacao}"
      </blockquote>
      <figcaption className="mt-8">
        <p className="font-medium">{depoimento.nome}</p>
        <p className="text-sm text-ink-soft">{depoimento.cargo}</p>
      </figcaption>
    </figure>
  );
}
