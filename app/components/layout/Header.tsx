import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre a XE" },
  { href: "#insights", label: "Insights" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current + 4;

      setIsScrolled(currentY > 56);

      if (currentY <= 56 || scrollingDown) {
        setIsExpanded(false);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearCloseTimer();
    };
  }, []);

  const isCompact = isScrolled && !isExpanded;

  const revealHeader = () => {
    clearCloseTimer();
    if (isScrolled) {
      setIsExpanded(true);
    }
  };

  const hideHeader = (clientX?: number, clientY?: number) => {
    clearCloseTimer();

    closeTimer.current = window.setTimeout(() => {
      if (typeof clientX === "number" && typeof clientY === "number") {
        const hoveredElement = document.elementFromPoint(clientX, clientY);

        if (hoveredElement && headerRef.current?.contains(hoveredElement)) {
          return;
        }
      }

      setIsExpanded(false);
    }, 90);
  };

  return (
    <motion.header
      ref={headerRef}
      className={cn("site-header", isCompact && "site-header--compact")}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="site-header-shell"
        onPointerEnter={revealHeader}
        onPointerMove={revealHeader}
        onPointerLeave={(event) => hideHeader(event.clientX, event.clientY)}
        onMouseEnter={revealHeader}
        onMouseMove={revealHeader}
        onMouseLeave={(event) => hideHeader(event.clientX, event.clientY)}
        onFocusCapture={revealHeader}
        onBlurCapture={() => hideHeader()}
      >
        <span className="site-header-wave" aria-hidden="true" />

        <a href="#top" className="site-header-brand" aria-label="XE Software - inicio">
          <img src="/images/logo-xe-mark.svg" alt="XE Software" className="h-12 w-auto" />
          <span className="hidden font-mono text-xs font-semibold uppercase text-ink md:inline">
            Software
          </span>
        </a>

        <nav className="site-header-nav" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-cta-wrap">
          <a href="#contato" className="site-header-cta">
            Começar um projeto
          </a>
        </div>
      </div>
    </motion.header>
  );
}
