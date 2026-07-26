import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HlsVideo } from "./HlsVideo";

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
] as const;

export function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeText = Array.from({ length: 10 }, () => "BUILDING THE FUTURE • ").join(
    "",
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0">
        <HlsVideo flipped />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 overflow-hidden md:mb-24">
          <div
            ref={marqueeRef}
            className="flex w-max whitespace-nowrap font-display text-5xl italic text-text-primary/90 md:text-7xl lg:text-8xl"
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        <div className="mb-20 flex flex-col items-center px-6 text-center md:mb-28">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
            Get in touch
          </p>
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative inline-flex rounded-full"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative rounded-full border border-stroke bg-bg/80 px-8 py-4 text-lg text-text-primary backdrop-blur-md md:text-2xl">
              hello@michaelsmith.com
            </span>
          </a>
        </div>

        <footer className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition-colors hover:text-text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for projects
          </div>
        </footer>
      </div>
    </section>
  );
}
