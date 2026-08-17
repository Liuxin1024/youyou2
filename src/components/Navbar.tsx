import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#capabilities" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const syncFromScroll = () => {
      setScrolled(window.scrollY > 100);

      const marker = window.innerHeight * 0.32;
      let current: (typeof LINKS)[number]["label"] = "Home";

      for (const link of LINKS) {
        const id = link.href.slice(1);
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= marker) {
          current = link.label;
        }
      }

      setActive(current);
    };

    syncFromScroll();
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", syncFromScroll);
    return () => {
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", syncFromScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow",
          scrolled && "shadow-md shadow-black/10",
        )}
      >
        <a
          href="#home"
          onClick={() => setActive("Home")}
          className="group relative flex h-9 w-9 items-center justify-center"
          aria-label="Home"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary transition-transform duration-300 group-hover:scale-110">
            JA
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div className="flex items-center">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm",
                active === link.label
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href="mailto:231030208@qq.com"
          className="group relative ml-0.5 inline-flex items-center"
        >
          <span className="accent-gradient-border absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:animate-gradient-shift group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-muted backdrop-blur-md transition-colors group-hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
