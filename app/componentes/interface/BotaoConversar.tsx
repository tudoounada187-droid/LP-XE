import {
  type AnchorHTMLAttributes,
  type AnimationEvent,
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

type BotaoConversarProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function BotaoConversar({ className = "", onPointerEnter, onAnimationEnd, ...props }: BotaoConversarProps) {
  const timeoutDaAnimacao = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutDaAnimacao.current !== null) {
        window.clearTimeout(timeoutDaAnimacao.current);
      }
    };
  }, []);

  function dispararOnda(evento: PointerEvent<HTMLAnchorElement>) {
    onPointerEnter?.(evento);
    const elemento = evento.currentTarget;

    if (elemento.classList.contains("is-gradient-running")) {
      return;
    }

    elemento.classList.add("is-gradient-running");
    timeoutDaAnimacao.current = window.setTimeout(() => {
      elemento.classList.remove("is-gradient-running");
      timeoutDaAnimacao.current = null;
    }, 860);
  }

  function finalizarOnda(evento: AnimationEvent<HTMLAnchorElement>) {
    onAnimationEnd?.(evento);

    if (evento.animationName === "cta-brand-wave") {
      if (timeoutDaAnimacao.current !== null) {
        window.clearTimeout(timeoutDaAnimacao.current);
        timeoutDaAnimacao.current = null;
      }

      evento.currentTarget.classList.remove("is-gradient-running");
    }
  }

  return (
    <a
      {...props}
      className={className}
      onPointerEnter={dispararOnda}
      onAnimationEnd={finalizarOnda}
    />
  );
}
