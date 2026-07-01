import { useEffect, useRef, useState } from "react";

export function usarContagem(valorFinal: number, visivel: boolean, duracao = 1600) {
  const [valor, definirValor] = useState(0);
  const jaExecutou = useRef(false);

  useEffect(() => {
    if (!visivel || jaExecutou.current) return;
    jaExecutou.current = true;

    const inicio = performance.now();
    const atualizar = (agora: number) => {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      const suavizado = 1 - Math.pow(1 - progresso, 3);
      definirValor(Math.round(valorFinal * suavizado));
      if (progresso < 1) requestAnimationFrame(atualizar);
    };

    requestAnimationFrame(atualizar);
  }, [duracao, visivel, valorFinal]);

  return valor;
}
