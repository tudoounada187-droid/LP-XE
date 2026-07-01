import { useEffect, useRef, useState } from "react";
import { usarContagem } from "@/componentes/animacoes/usarContagem";

export function Contador({
  valor,
  sufixo,
  rotulo,
}: {
  valor: number;
  sufixo?: string;
  rotulo: string;
}) {
  const referencia = useRef<HTMLDivElement>(null);
  const [visivel, definirVisivel] = useState(false);
  const contagem = usarContagem(valor, visivel);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento || visivel) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          definirVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [visivel]);

  return (
    <div ref={referencia} className="brand-card rounded-[1.6rem] p-6">
      <p className="gradient-text font-mono text-4xl font-semibold md:text-5xl">
        {contagem}
        {sufixo}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{rotulo}</p>
    </div>
  );
}
