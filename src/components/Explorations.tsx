import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    title: "Form Study 01",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    rotate: -6,
  },
  {
    title: "Texture Lab",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    rotate: 4,
  },
  {
    title: "Light Play",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    rotate: -3,
  },
  {
    title: "Motion Frame",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339bbe3ca8?w=800&q=80",
    rotate: 7,
  },
  {
    title: "Color Drift",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd8f75aa4d?w=800&q=80",
    rotate: -5,
  },
  {
    title: "Shape Archive",
    image:
      "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    rotate: 3,
  },
] as const;

export function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<(typeof ITEMS)[number] | null>(
    null,
  );

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const left = colLeftRef.current;
    const right = colRightRef.current;
    if (!section || !content || !left || !right) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: content,
        pinSpacing: false,
      });

      gsap.fromTo(
        left,
        { y: 80 },
        {
          y: -320,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        right,
        { y: -40 },
        {
          y: -480,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const leftItems = ITEMS.filter((_, i) => i % 2 === 0);
  const rightItems = ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[300vh] bg-bg"
    >
      <div
        ref={contentRef}
        className="pointer-events-none relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            Explorations
          </span>
        </div>
        <h2 className="mb-4 text-3xl text-text-primary md:text-5xl">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="mb-8 max-w-md text-sm text-muted md:text-base">
          Experiments in form, texture, and motion — a living sketchbook.
        </p>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group relative inline-flex rounded-full"
        >
          <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
            Dribbble <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40 md:px-16">
          <div
            ref={colLeftRef}
            className="flex flex-col items-start gap-16 pt-[20vh] md:gap-24"
          >
            {leftItems.map((item) => (
              <Card
                key={item.title}
                item={item}
                onOpen={() => setLightbox(item)}
              />
            ))}
          </div>
          <div
            ref={colRightRef}
            className="flex flex-col items-end gap-16 pt-[40vh] md:gap-24"
          >
            {rightItems.map((item) => (
              <Card
                key={item.title}
                item={item}
                onOpen={() => setLightbox(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
          aria-label="Close lightbox"
        >
          <img
            src={lightbox.image}
            alt={lightbox.title}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain"
          />
        </button>
      )}
    </section>
  );
}

function Card({
  item,
  onOpen,
}: {
  item: (typeof ITEMS)[number];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="pointer-events-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface shadow-lg shadow-black/30 transition-transform hover:scale-[1.02]"
      style={{ transform: `rotate(${item.rotate}deg)` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
    </button>
  );
}
