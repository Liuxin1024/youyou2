import { useEffect, useState } from "react";
import type {
  CaseStrategyStep,
  StrategyIconId,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";
/** 卡片灰底，用于图文渐变衔接 */
const cardBg = "rgb(18 18 18)";
const cardGradient = `linear-gradient(to right, ${cardBg} 0%, rgb(18 18 18 / 0.92) 16%, rgb(18 18 18 / 0.65) 32%, transparent 56%)`;
const cardGradientSoft = `linear-gradient(to right, ${cardBg} 0%, rgb(18 18 18 / 0.85) 20%, transparent 46%)`;

const ICON_SRC: Record<StrategyIconId, string> = {
  layers: "/icons/strategy/layers.svg",
  users: "/icons/strategy/users.svg",
  device: "/icons/strategy/device.svg",
  leaf: "/icons/strategy/leaf.svg",
  palette: "/icons/strategy/palette.svg",
  grid: "/icons/strategy/grid.svg",
  play: "/icons/strategy/play.svg",
  layout: "/icons/strategy/layout.svg",
  eye: "/icons/strategy/eye.svg",
  spark: "/icons/strategy/spark.svg",
  image: "/icons/strategy/image.svg",
  cube: "/icons/strategy/cube.svg",
  chart: "/icons/strategy/chart.svg",
  ai: "/icons/strategy/ai.svg",
  explore: "/icons/strategy/explore.svg",
  edit: "/icons/strategy/edit.svg",
  check: "/icons/strategy/check.svg",
};

type Props = {
  steps: CaseStrategyStep[];
  summary?: string;
  /** 右上角水印字，默认取案例中文名首字 */
  watermarkChar?: string;
};

function StrategyIcon({
  id,
  className = "h-6 w-6",
}: {
  id: StrategyIconId;
  className?: string;
}) {
  return <img src={ICON_SRC[id]} alt="" aria-hidden className={className} />;
}

function MediaPlaceholder({ hint }: { hint?: string }) {
  return (
    <div className="flex h-full min-h-[160px] w-full items-center justify-center">
      <p className={`px-4 text-center text-[10px] tracking-[0.18em] ${goldMuted} md:text-[11px]`}>
        {hint ?? "视觉占位 · 待补图"}
      </p>
    </div>
  );
}

function StepMedia({
  src,
  position = "center center",
  onOpen,
}: {
  src: string;
  position?: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="点击查看大图"
      className="relative block h-full min-h-[200px] w-full cursor-pointer self-stretch md:min-h-[220px]"
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      {/* 左→右渐变：与卡片灰底衔接 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: cardGradient }}
      />
    </button>
  );
}

function WorkflowPanel({ step }: { step: CaseStrategyStep }) {
  if (!step.workflow?.length) return null;

  return (
    <div className="relative flex h-full min-h-[180px] w-full items-center self-stretch px-4 md:min-h-[220px] md:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: cardGradientSoft }}
      />
      <ol className="relative z-[1] flex w-full items-start justify-between gap-0">
        {step.workflow.map((node, i) => (
          <li key={node.label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              {i > 0 ? (
                <span
                  aria-hidden
                  className={`mb-5 h-px flex-1 bg-[#C9A96E]/35`}
                />
              ) : (
                <span className="flex-1" />
              )}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/40 md:h-12 md:w-12">
                <StrategyIcon id={node.icon} className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              {i < step.workflow!.length - 1 ? (
                <span
                  aria-hidden
                  className={`mb-5 h-px flex-1 bg-[#C9A96E]/35`}
                />
              ) : (
                <span className="flex-1" />
              )}
            </div>
            <p
              className={`mt-2 text-center text-[10px] leading-snug tracking-wide ${goldMuted} md:text-[11px]`}
            >
              {node.label}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StepBody({ step }: { step: CaseStrategyStep }) {
  const hasBullets = Boolean(step.bullets?.length);
  const intro = hasBullets ? step.paragraphs.slice(0, 1) : step.paragraphs;
  const outro = hasBullets ? step.paragraphs.slice(1) : [];

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-3">
        <span
          className={`shrink-0 font-display text-xl italic tracking-wider ${gold} md:text-2xl`}
        >
          {step.index}
        </span>
        <h3 className="text-lg tracking-wide text-text-primary md:text-xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
          {step.title}
        </h3>
      </div>
      <p className={`mt-1.5 pl-9 text-xs md:pl-11 md:text-sm ${goldMuted}`}>
        {step.subtitle}
      </p>

      <div className="mt-2.5 space-y-1.5 pl-9 text-[13px] leading-relaxed text-muted md:pl-10 md:text-sm">
        {intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {hasBullets && (
        <div className="mt-2 pl-9 md:pl-10">
          <p className={`mb-0.5 text-[13px] md:text-sm ${goldMuted}`}>通过：</p>
          <p className="text-[13px] leading-relaxed text-muted md:text-sm">
            {step.bullets!.map((b, i) => (
              <span key={b}>
                {i > 0 && (
                  <span className={`${gold} mx-1.5`} aria-hidden>
                    ·
                  </span>
                )}
                {b}
              </span>
            ))}
          </p>
        </div>
      )}

      {outro.length > 0 && (
        <div className="mt-2 space-y-1.5 pl-9 text-[13px] leading-relaxed text-muted md:pl-10 md:text-sm">
          {outro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}

      {step.applications && step.applications.length > 0 && (
        <div className="mt-2.5 pl-9 md:pl-10">
          <p className={`mb-2 text-[13px] md:text-sm ${goldMuted}`}>
            应用方向包括：
          </p>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
            {step.applications.map((app) => (
              <li key={app.title} className="flex gap-2">
                <StrategyIcon id={app.icon} className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="text-[12px] text-text-primary md:text-[13px]">
                    {app.title}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-muted md:text-[11px]">
                    {app.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step.points && step.points.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 pl-9 md:gap-x-7 md:pl-10">
          {step.points.map((pt) => (
            <li key={pt.label} className="flex items-center gap-2">
              <StrategyIcon id={pt.icon} className="h-4 w-4 shrink-0 opacity-90" />
              <span className={`text-[11px] leading-snug ${goldMuted} md:text-xs`}>
                {pt.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CaseStrategy({ steps, summary, watermarkChar }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

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

  if (!steps.length) return null;

  const mark = watermarkChar?.slice(0, 1) || "酃";

  return (
    <section className="relative overflow-hidden border-b border-stroke">
      {/* —— 标题区：右图 + 左/底渐变，对齐设计稿与第一屏手法 —— */}
      <div className="relative min-h-[220px] overflow-hidden md:min-h-[280px] lg:min-h-[300px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src="/50945.JPG"
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[85%] object-cover object-[68%_42%] opacity-90 md:w-[62%] md:object-[60%_40%] lg:w-[55%]"
          />
          {/* 左侧渐变：托住标题文案 */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg from-[12%] via-bg/80 via-[38%] to-transparent to-[72%]" />
          {/* 底部渐变：衔接到下方步骤列表 */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg from-[5%] via-bg/55 via-[38%] to-transparent to-[72%]" />
          {/* 顶部轻渐变，避免边缘生硬 */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-transparent to-[40%]" />
        </div>

        {/* 水印叠在图上，极淡 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-2 top-6 z-[1] select-none text-[5.5rem] leading-none text-white/[0.07] md:right-10 md:top-8 md:text-[8rem] [font-family:'Songti_SC','STSong','SimSun',serif]"
        >
          {mark}
        </div>

        <div className="relative z-10 mx-auto flex h-full min-h-[220px] max-w-[1200px] flex-col justify-center px-6 py-10 md:min-h-[280px] md:px-10 md:py-14 lg:min-h-[300px] lg:px-16">
          <div className="mb-2.5 flex items-center gap-3">
            <span className={`h-px w-7 ${gold} bg-current`} />
            <span className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}>
              Strategy 策略
            </span>
          </div>
          <h2 className="max-w-xl text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            设计策略与视觉推导
          </h2>
          {summary && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">
              {summary}
            </p>
          )}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-10 md:px-10 md:pb-14 lg:px-16">
        <ol className="space-y-3 md:space-y-4">
          {steps.map((step) => (
            <li
              key={step.index}
              className="overflow-hidden rounded-xl bg-white/[0.045] md:rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
                  <StepBody step={step} />
                </div>

                <div className="relative w-full md:w-[46%] md:shrink-0 lg:w-[44%]">
                  {step.media ? (
                    <StepMedia
                      src={step.media}
                      position={step.mediaPosition}
                      onOpen={() => setLightbox(step.media!)}
                    />
                  ) : step.workflow?.length ? (
                    <WorkflowPanel step={step} />
                  ) : (
                    <MediaPlaceholder hint={step.mediaHint} />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 灯箱：复用 Explorations 同款居中放大 */}
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
