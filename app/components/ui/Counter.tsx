import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/components/animations/useCountUp";

export function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, inView);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={ref} className="brand-card rounded-[1.6rem] p-6">
      <p className="gradient-text font-mono text-4xl font-semibold md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{label}</p>
    </div>
  );
}
