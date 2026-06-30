import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-1 w-9 rounded-pill brand-gradient" aria-hidden="true" />
      <p
        className={cn(
          "font-mono text-xs font-semibold uppercase",
          light ? "text-contrast-ink-soft" : "text-ink-soft",
        )}
      >
        {children}
      </p>
    </div>
  );
}
