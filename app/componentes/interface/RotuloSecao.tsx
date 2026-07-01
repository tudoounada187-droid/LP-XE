import { classes } from "@/utilitarios/classes";

export function RotuloSecao({
  children,
  claro = false,
}: {
  children: React.ReactNode;
  claro?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-1 w-9 rounded-pill brand-gradient" aria-hidden="true" />
      <p
        className={classes(
          "font-mono text-xs font-semibold uppercase",
          claro ? "text-contrast-ink-soft" : "text-ink-soft",
        )}
      >
        {children}
      </p>
    </div>
  );
}
