import {
  type AnchorHTMLAttributes,
  type AnimationEvent,
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

type BotaoConversarProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function BotaoConversar({
  className = "",
  onPointerEnter,
  onPointerDown,
  onAnimationEnd,
  ...props
}: BotaoConversarProps) {
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

    if (evento.animationName === "cta-brand-wave" || evento.animationName === "mobile-cta-white-wave") {
      if (timeoutDaAnimacao.current !== null) {
        window.clearTimeout(timeoutDaAnimacao.current);
        timeoutDaAnimacao.current = null;
      }

      evento.currentTarget.classList.remove("is-gradient-running");
    }
  }

  function dispararOndaBranca(evento: PointerEvent<HTMLAnchorElement>) {
    onPointerDown?.(evento);

    const elemento = evento.currentTarget;

    if (!elemento.classList.contains("mobile-quote-cta") || elemento.classList.contains("is-white-wave-running")) {
      return;
    }

    elemento.classList.add("is-white-wave-running");
    timeoutDaAnimacao.current = window.setTimeout(() => {
      elemento.classList.remove("is-white-wave-running");
      timeoutDaAnimacao.current = null;
    }, 720);
  }

  return (
    <a
      {...props}
      className={className}
      onPointerEnter={dispararOnda}
      onPointerDown={dispararOndaBranca}
      onAnimationEnd={finalizarOnda}
    />
  );
}
