import { useEffect, useState } from "react";
import type {
  CaseVisualApplicationScene,
  CaseVisualApplications as CaseVisualApplicationsData,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";

type Props = {
  data: CaseVisualApplicationsData;
};

function groupScenes(scenes: CaseVisualApplicationScene[]) {
  const rows: CaseVisualApplicationScene[][] = [];
  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    if (scene.span === "half") {
      const pair = [scene];
      if (scenes[i + 1]?.span === "half") {
        pair.push(scenes[i + 1]);
        i += 1;
      }
      rows.push(pair);
    } else {
      rows.push([scene]);
    }
  }
  return rows;
}

export function CaseVisualApplications({ data }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [first, second, third, fourth] = groupScenes(data.scenes);
  const firstScene = first?.[0];
  const scene02 = second?.[0];
  const scene03 = second?.[1];
  const scene04 = third?.[0];
  const scene05 = third?.[1];
  const scene06 = fourth?.[0];

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
    };
  }, [lightbox]);

  return (
    <section className="border-b border-stroke bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <header className="max-w-2xl">
          <p
            className={`mb-2.5 text-[11px] uppercase tracking-[0.28em] ${gold}`}
          >
            {data.eyebrow}
          </p>
          <h2 className="text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-[38em] text-[13px] leading-relaxed text-muted md:text-sm md:leading-[1.85]">
            {data.body}
          </p>
        </header>

        {firstScene && (
          <div className="mt-10 md:mt-12">
            <SceneCard scene={firstScene} onOpenImage={setLightbox} />
          </div>
        )}

        <div className="mt-[5px] flex flex-col gap-[5px] lg:flex-row lg:items-stretch">
          {scene02 && (
            <SceneCard
              scene={scene02}
              compact
              className="lg:min-w-0 lg:flex-[560]"
              onOpenImage={setLightbox}
            />
          )}
          {scene03 && (
            <SceneCard
              scene={scene03}
              compact
              tight
              className="lg:min-w-0 lg:flex-[520]"
              onOpenImage={setLightbox}
            />
          )}
        </div>

        <div className="mt-[5px] flex flex-col gap-[5px] lg:flex-row lg:items-stretch">
          {scene04 && (
            <SceneCard
              scene={scene04}
              compact
              tight
              className="lg:min-w-0 lg:flex-[3]"
              onOpenImage={setLightbox}
            />
          )}
          {scene05 && (
            <SceneCard
              scene={scene05}
              compact
              tight
              className="lg:min-w-0 lg:flex-[2]"
              onOpenImage={setLightbox}
            />
          )}
        </div>

        {scene06 && (
          <div className="mt-[5px]">
            <SceneCard
              scene={scene06}
              compact
              tight
              onOpenImage={setLightbox}
            />
          </div>
        )}
      </div>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={() => setLightbox(null)}
          aria-label="关闭大图"
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-[88vh] max-w-full object-contain shadow-2xl"
          />
        </button>
      )}
    </section>
  );
}

/** 01：整块卡片，左文右图，图片贴边不套内层卡片 */
function SceneCard({
  scene,
  onOpenImage,
  compact = false,
  tight = false,
  className = "",
}: {
  scene: CaseVisualApplicationScene;
  onOpenImage: (src: string) => void;
  compact?: boolean;
  tight?: boolean;
  className?: string;
}) {
  const count = scene.images.length;
  const imageGrid =
    count >= 4
      ? "grid-cols-2 sm:grid-cols-4"
      : count === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  if (compact) {
    return (
      <article
        className={`flex min-h-0 flex-col overflow-hidden rounded-2xl border border-[#C9A96E]/20 bg-black ${className}`}
      >
        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(9.5rem,11rem)_minmax(0,1fr)]">
          <div
            className={`relative self-center p-4 md:p-5 ${tight ? "md:pr-0" : ""}`}
          >
            <SceneCopy scene={scene} compact />
          </div>
          <div
            className={`min-h-0 items-center p-4 md:p-5 ${
              count === 2 ? "grid grid-cols-2 gap-2" : "flex"
            } ${tight ? "md:pl-1" : ""}`}
          >
            {scene.images.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => onOpenImage(src)}
                aria-label="点击查看大图"
                className="block w-full"
              >
                <img
                  src={src}
                  alt=""
                  className="mx-auto block h-auto w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-[#C9A96E]/20 bg-black">
      <div
        className={`grid grid-cols-1 ${
          compact ? "md:items-center" : "md:items-stretch"
        } ${
          compact
            ? "md:grid-cols-[minmax(10.5rem,0.4fr)_minmax(0,1fr)]"
            : "md:grid-cols-[minmax(14rem,0.28fr)_minmax(0,1fr)]"
        }`}
      >
        <div
          className={`relative p-4 md:p-5 ${
            scene.motif === "mountain" ? "pb-20 md:pb-5" : ""
          }`}
        >
          <SceneCopy scene={scene} compact={compact} />
          {scene.motif === "mountain" && (
            <MountainMotif className="pointer-events-none absolute bottom-3 right-3 w-[78%] max-w-[14rem] text-[#C9A96E]/45 sm:bottom-4 sm:right-4" />
          )}
        </div>
        <div
          className={`grid ${imageGrid} gap-2 p-4 md:p-5 ${compact ? "" : "md:h-full"}`}
        >
          {scene.images.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => onOpenImage(src)}
              aria-label="点击查看大图"
              className={`block w-full ${
                compact
                  ? ""
                  : "h-full min-h-[140px] sm:min-h-[160px]"
              }`}
            >
              <img
                src={src}
                alt=""
                className={`block w-full object-contain ${
                  compact ? "h-auto" : "h-full"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

function SceneCopy({
  scene,
  compact,
}: {
  scene: CaseVisualApplicationScene;
  compact?: boolean;
}) {
  return (
    <div className="relative z-[1]">
      <div className="flex items-baseline gap-x-3">
        <p
          className={`shrink-0 font-display leading-none tabular-nums ${gold} ${
            compact
              ? "text-[1.85rem] md:text-[2rem]"
              : "text-[2.35rem] md:text-4xl lg:text-[2.75rem]"
          }`}
        >
          {scene.index}
        </p>
        <h3 className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <span className="text-[15px] font-medium tracking-wide text-text-primary md:text-base">
            {scene.title}
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.16em] ${goldMuted} md:text-[10px]`}
          >
            {scene.englishTitle}
          </span>
        </h3>
      </div>
      <div className="mt-3 space-y-1 text-[12px] leading-relaxed text-muted md:mt-4 md:text-[13px]">
        {scene.bullets.map((b) => (
          <p key={b}>{b}</p>
        ))}
      </div>
    </div>
  );
}

function MountainMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path
        d="M10 72 C30 58 44 34 60 28 C76 22 90 40 104 34 C118 28 132 8 150 6 C168 4 182 24 198 30 C210 34 222 28 234 36"
        strokeWidth="1"
        opacity="0.32"
      />
      <path
        d="M6 82 C24 68 38 48 54 42 C72 34 86 52 100 48 C114 44 126 26 142 22 C160 17 174 36 190 42 C204 47 218 38 236 48"
        strokeWidth="1.15"
        opacity="0.5"
      />
      <path
        d="M4 90 C20 78 34 60 50 54 C66 46 80 62 96 58 C112 54 124 36 140 32 C158 27 172 46 188 52 C204 58 218 50 236 60"
        strokeWidth="1.3"
      />
      <path d="M60 28 C70 40 78 54 84 70" strokeWidth="0.7" opacity="0.28" />
      <path d="M150 6 C158 22 164 42 168 64" strokeWidth="0.7" opacity="0.28" />
      <path d="M54 42 C64 54 72 68 78 82" strokeWidth="0.75" opacity="0.38" />
      <path d="M142 22 C150 36 156 54 160 76" strokeWidth="0.75" opacity="0.38" />
      <path d="M50 54 C60 66 68 78 74 90" strokeWidth="0.85" opacity="0.5" />
      <path d="M140 32 C148 46 154 64 158 86" strokeWidth="0.85" opacity="0.5" />
      <path d="M96 58 C104 70 110 82 114 92" strokeWidth="0.7" opacity="0.35" />
      <path
        d="M18 84 C46 76 78 72 110 74 C144 76 180 82 220 78"
        strokeWidth="0.55"
        opacity="0.28"
      />
      <path
        d="M28 90 C60 84 96 82 130 84 C164 86 198 90 228 86"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}


