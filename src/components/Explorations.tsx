import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    title: "AI Study 01",
    image: "/ai1.jpg",
    rotate: -6,
  },
  {
    title: "AI Study 02",
    image: "/ai2.jpg",
    rotate: 4,
  },
  {
    title: "AI Study 03",
    image: "/ai3.jpg",
    rotate: -3,
  },
  {
    title: "AI Study 04",
    image: "/ai4.jpg",
    rotate: 7,
  },
  {
    title: "AI Study 05",
    image: "/40.jpg",
    rotate: -10,
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
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<(typeof ITEMS)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      ScrollTrigger.refresh();
    };
  }, [lightbox]);

  useEffect(() => {
    const section = sectionRef.current;
    const left = colLeftRef.current;
    const right = colRightRef.current;
    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        left,
        { y: 80 },
        {
          y: -320,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
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
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const images = section.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh);
    });
    requestAnimationFrame(refresh);

    return () => {
      images.forEach((img) => img.removeEventListener("load", refresh));
      ctx.revert();
    };
  }, []);

  const leftItems = ITEMS.filter((_, i) => i % 2 === 0);
  const rightItems = ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[200vh]"
    >
      <div className="pointer-events-none sticky top-0 z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            更多作品
          </span>
        </div>
        <h2 className="mb-4 text-3xl text-text-primary md:text-5xl">
          AI视觉探索
        </h2>
        <p className="mb-8 max-w-lg text-sm text-muted md:text-base">
          探索 AI 驱动的视觉创作与设计表达，从概念构思、风格探索到画面生成，尝试将
          AI 转化为创意工具，拓展视觉设计的可能性。
        </p>
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
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-[100] cursor-zoom-out overflow-y-auto bg-black/85"
          onClick={() => setLightbox(null)}
        >
          <div className="flex min-h-full justify-center px-4 py-10 md:px-8 md:py-14">
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="h-auto w-full max-w-5xl rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
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
