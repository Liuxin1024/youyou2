import { useEffect, useState } from "react";
import type {
  CaseShowcaseAi,
  CaseShowcaseApplication,
  CaseShowcaseApplicationBlock,
  CaseShowcaseApplicationRow,
  CaseShowcaseEvolution,
  CaseShowcaseProcessStep,
  CaseShowcaseValue,
  CaseShowcaseValueItem,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";
const goldBorder = "border-[#C9A96E]/30";

const PROCESS_ICONS: Record<CaseShowcaseProcessStep["icon"], string> = {
  layers: "/icons/strategy/layers.svg",
  leaf: "/icons/strategy/leaf.svg",
  device: "/icons/strategy/device.svg",
};

const AI_TOOL_ICONS: Record<string, string> = {
  Midjourney: "/icons/ai/midjourney.svg",
  即梦: "/icons/ai/jimeng.svg",
  "Chat GPT": "/icons/ai/openai.svg",
  ChatGPT: "/icons/ai/openai.svg",
  可灵: "/icons/ai/keling.svg",
};

type Props = {
  evolution?: CaseShowcaseEvolution;
  application?: CaseShowcaseApplication;
  value?: CaseShowcaseValue;
  ai?: CaseShowcaseAi;
};

export function CaseShowcase({ evolution, application, value, ai }: Props) {
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

  if (!evolution && !application && !value && !ai) return null;

  return (
    <section className="relative overflow-hidden border-b border-stroke py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {evolution && <EvolutionBlock evolution={evolution} />}
        {application && (
          <ApplicationBlock
            data={application}
            onOpenImage={setLightbox}
            stacked={Boolean(evolution)}
          />
        )}
        {value && <ValueBlock data={value} />}
        {ai && <AiExplorationBlock data={ai} onOpenImage={setLightbox} />}
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

/* ───────────────── 上半：品牌数字视觉升级 ───────────────── */

function EvolutionBlock({ evolution }: { evolution: CaseShowcaseEvolution }) {
  return (
    <>
      <header className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-2.5 flex items-center gap-3">
            <span className={`h-px w-7 ${gold} bg-current`} />
            <span className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}>
              {evolution.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {evolution.title}
          </h2>
          <p className={`mt-2 text-sm md:text-base ${goldMuted}`}>
            {evolution.subtitle}
          </p>
          {evolution.intro.length > 0 && (
            <div className="mt-4 space-y-2 text-[13px] leading-relaxed text-muted md:text-sm">
              {evolution.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
        </div>

        {(evolution.period || evolution.periodNote) && (
          <div className="shrink-0 text-left md:pt-1 md:text-right">
            {evolution.period && (
              <p className={`text-sm tracking-wide ${gold}`}>{evolution.period}</p>
            )}
            {evolution.periodNote && (
              <p className="mt-1 text-xs text-muted">{evolution.periodNote}</p>
            )}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,0.65fr)_minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-2.5 xl:gap-3">
        <article className="flex h-[480px] flex-col overflow-y-auto rounded-xl bg-white/[0.045] px-2.5 py-4 md:h-[520px] md:rounded-2xl md:px-3 md:py-5 lg:h-[560px]">
          <ColumnLabel
            en={evolution.before.label}
            zh={evolution.before.title}
            size="lg"
          />
          <p className="mt-6 text-[14px] leading-relaxed text-muted md:mt-7 md:text-[15px]">
            {evolution.before.body}
          </p>
          <ul className="mt-6 space-y-4 md:mt-7 md:space-y-5">
            {evolution.before.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2">
                <StatusIcon kind="x" />
                <span className="text-[13px] leading-snug text-muted md:text-[14px]">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <div className="h-[480px] overflow-hidden md:h-[520px] lg:h-[560px]">
          <PhoneFrame src={evolution.before.phone} hint="原视觉长图 · 待补" />
        </div>

        <article className="flex h-[480px] flex-col overflow-y-auto rounded-xl bg-white/[0.045] px-2 py-4 sm:col-span-2 md:h-[520px] md:rounded-2xl md:px-2.5 md:py-5 lg:col-span-1 lg:h-[560px]">
          <ColumnLabel
            en={evolution.process.label}
            zh={evolution.process.title}
            center
          />
          <p
            className={`mt-3 text-center text-[12px] leading-snug md:text-[13px] ${gold}`}
          >
            {evolution.process.thesis}
          </p>
          <ol className="mt-5 flex flex-1 flex-col items-center justify-center gap-0">
            {evolution.process.steps.map((step, i) => (
              <li key={step.index} className="flex w-full flex-col items-center">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border ${goldBorder}`}
                  >
                    <img
                      src={PROCESS_ICONS[step.icon]}
                      alt=""
                      aria-hidden
                      className="h-6 w-6"
                    />
                  </div>
                  <p className={`text-[10px] tracking-wider ${goldMuted}`}>
                    {step.index}
                  </p>
                  <p className="text-[12px] text-text-primary md:text-[13px]">
                    {step.label}
                  </p>
                </div>
                {i < evolution.process.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="my-2 h-5 w-px border-l border-dashed border-[#C9A96E]/40"
                  />
                )}
              </li>
            ))}
          </ol>
        </article>

        <div className="h-[480px] overflow-hidden md:h-[520px] lg:h-[560px]">
          <PhoneFrame src={evolution.after.phone} hint="优化后长图 · 待补" />
        </div>

        <article className="flex h-[480px] flex-col overflow-y-auto rounded-xl bg-white/[0.045] px-2.5 py-4 md:h-[520px] md:rounded-2xl md:px-3 md:py-5 lg:h-[560px]">
          <ColumnLabel
            en={evolution.after.label}
            zh={evolution.after.title}
            size="lg"
          />
          <p className="mt-6 text-[14px] leading-relaxed text-muted md:mt-7 md:text-[15px]">
            {evolution.after.body}
          </p>
          <ul className="mt-6 space-y-4 md:mt-7 md:space-y-5">
            {evolution.after.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2">
                <StatusIcon kind="check" />
                <span className="text-[13px] leading-snug text-muted md:text-[14px]">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}

/* ───────────────── 下半：数字内容应用 ───────────────── */

function ApplicationBlock({
  data,
  onOpenImage,
  stacked = false,
}: {
  data: CaseShowcaseApplication;
  onOpenImage: (src: string) => void;
  /** 叠在进化区下方时加顶部分隔 */
  stacked?: boolean;
}) {
  const rows = data.rows;
  const blocks = data.blocks ?? [];
  const wechatBlocks = blocks.filter((b) => b.kind === "wechat");
  const secondaryBlocks = blocks.filter((b) => b.kind !== "wechat");

  return (
    <div
      className={
        stacked
          ? "mt-16 border-t border-stroke/60 pt-12 md:mt-20 md:pt-16"
          : undefined
      }
    >
      <header className="mb-8 md:mb-10">
        <div className="mb-2.5 flex items-center gap-3">
          <span className={`h-px w-7 ${gold} bg-current`} />
          <span className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}>
            {data.eyebrow}
          </span>
        </div>
        <h2 className="text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
          {data.title}
        </h2>
        <p className={`mt-2 text-sm md:text-base ${goldMuted}`}>{data.subtitle}</p>
        {data.intro && (
          <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-muted md:text-sm">
            {data.intro}
          </p>
        )}
      </header>

      {rows && rows.length > 0 ? (
        <div className="flex flex-col gap-10 md:gap-14">
          {rows.map((row) => (
            <ApplicationRow
              key={row.index}
              row={row}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      ) : (
        <>
          {wechatBlocks.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
              {wechatBlocks.map((block) => (
                <ApplicationCard
                  key={block.index}
                  block={block}
                  onOpenImage={onOpenImage}
                />
              ))}
            </div>
          )}

          {secondaryBlocks.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:gap-6">
              {secondaryBlocks.map((block) => (
                <ApplicationCard
                  key={block.index}
                  block={block}
                  onOpenImage={onOpenImage}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ApplicationRow({
  row,
  onOpenImage,
}: {
  row: CaseShowcaseApplicationRow;
  onOpenImage: (src: string) => void;
}) {
  const images = [row.images?.[0], row.images?.[1]];

  return (
    <article className="flex flex-col">
      <div className="mb-3 flex items-baseline gap-2 md:mb-4">
        <span className={`font-display text-lg italic ${gold}`}>{row.index}</span>
        <div>
          <h3 className="text-base text-text-primary md:text-lg [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {row.title}
          </h3>
          <p className={`text-[10px] uppercase tracking-[0.18em] ${goldMuted}`}>
            {row.englishTitle}
          </p>
        </div>
      </div>
      {row.body && (
        <p className="mb-4 max-w-3xl text-[12px] leading-relaxed text-muted md:mb-5 md:text-[13px]">
          {row.body}
        </p>
      )}

      {/* 双图：位置与原先一行两卡的图区一致；底注跟图走 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl bg-white/[0.04]">
            {src ? (
              <button
                type="button"
                onClick={() => onOpenImage(src)}
                aria-label="点击查看大图"
                className="relative block w-full cursor-pointer overflow-hidden bg-black/20 text-left"
              >
                <img src={src} alt="" className="block h-auto w-full" />
              </button>
            ) : (
              <div
                className="flex aspect-[16/10] items-center justify-center border border-dashed border-white/10 bg-black/35"
                aria-hidden
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Image
                </span>
              </div>
            )}
            {row.captions?.[i] && (
              <p className="border-t border-white/[0.06] bg-black/25 px-3 py-2.5 text-center text-[11px] leading-snug text-muted md:text-xs">
                {row.captions[i]}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

function ApplicationCard({
  block,
  className = "",
  onOpenImage,
}: {
  block: CaseShowcaseApplicationBlock;
  className?: string;
  onOpenImage?: (src: string) => void;
}) {
  return (
    <article className={`flex flex-col ${className}`}>
      <div className="mb-3 flex items-baseline gap-2">
        <span className={`font-display text-lg italic ${gold}`}>{block.index}</span>
        <div>
          <h3 className="text-base text-text-primary md:text-lg [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {block.title}
          </h3>
          <p className={`text-[10px] uppercase tracking-[0.18em] ${goldMuted}`}>
            {block.englishTitle}
          </p>
        </div>
      </div>
      {block.body && (
        <p className="mb-3 text-[12px] leading-relaxed text-muted md:text-[13px]">
          {block.body}
        </p>
      )}

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-white/[0.04]">
        {block.cover ? (
          <button
            type="button"
            onClick={() => onOpenImage?.(block.cover!)}
            aria-label="点击查看大图"
            className="relative w-full cursor-pointer overflow-hidden bg-black/20 text-left"
          >
            <img
              src={block.cover}
              alt=""
              className="block h-auto w-full"
            />
          </button>
        ) : (
          <div className="flex-1 p-3 md:p-4">
            {block.kind === "wechat" && <WechatMedia block={block} />}
            {block.kind === "video" && (
              <ThumbGrid block={block} cols={3} aspect="video" />
            )}
            {block.kind === "marketing" && (
              <ThumbGrid block={block} cols={4} aspect="poster" />
            )}
          </div>
        )}
        <p className="border-t border-white/[0.06] bg-black/25 px-3 py-2.5 text-center text-[11px] leading-snug text-muted md:text-xs">
          {block.caption}
        </p>
      </div>
    </article>
  );
}

function WechatMedia({ block }: { block: CaseShowcaseApplicationBlock }) {
  const stripCount = block.stripCount ?? block.strips?.length ?? 4;
  const strips = block.strips ?? Array.from({ length: stripCount }, () => "");

  return (
    <div className="flex h-[300px] items-stretch gap-2.5 md:h-[360px] lg:h-[400px]">
      <div className="h-full w-[36%] max-w-[180px] shrink-0">
        <PhoneFrame src={block.phone} hint="公众号长图" compact />
      </div>
      <div className="flex min-w-0 flex-1 gap-2">
        {strips.map((src, i) => (
          <div
            key={i}
            className="flex min-w-0 flex-1 overflow-hidden rounded-md bg-black/30"
          >
            {src ? (
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-1">
                <span className={`text-center text-[9px] leading-tight ${goldMuted}`}>
                  长图
                  <br />
                  {i + 1}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ThumbGrid({
  block,
  cols,
  aspect,
}: {
  block: CaseShowcaseApplicationBlock;
  cols: number;
  aspect: "video" | "poster";
}) {
  const count = block.thumbCount ?? block.thumbs?.length ?? cols * 2;
  const thumbs = block.thumbs ?? Array.from({ length: count }, () => "");
  const aspectClass = aspect === "video" ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <div
      className="grid gap-1.5"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {thumbs.map((src, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-md bg-black/35 ${aspectClass}`}
        >
          {src ? (
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <PlayMark />
          </div>
        </div>
      ))}
    </div>
  );
}

function PlayMark() {
  return (
    <span
      aria-hidden
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-black/30"
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3 translate-x-px fill-white/90">
        <path d="M3.5 2.2v7.6L10 6 3.5 2.2Z" />
      </svg>
    </span>
  );
}

/* ───────────────── 设计价值 ───────────────── */

function ValueBlock({ data }: { data: CaseShowcaseValue }) {
  return (
    <div
      className={`mt-12 rounded-xl border ${goldBorder} px-4 py-5 md:mt-16 md:rounded-2xl md:px-6 md:py-6`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="shrink-0 lg:w-[140px]">
          <p className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}>
            {data.eyebrow}
          </p>
          <h3 className={`mt-1 text-lg md:text-xl ${gold} [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]`}>
            {data.title}
          </h3>
        </div>
        <ul className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {data.items.map((item) => (
            <li key={item.title} className="flex items-start gap-2.5">
              <ValueIcon icon={item.icon} />
              <div>
                <p className="text-[13px] text-text-primary md:text-sm">{item.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted md:text-xs">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ValueIcon({ icon }: { icon: CaseShowcaseValueItem["icon"] }) {
  const path =
    icon === "brand"
      ? "M24 10c-4 0-7 3.2-7 7.2 0 2.4 1.2 4.5 3 5.7V34h8V22.9c1.8-1.2 3-3.3 3-5.7C31 13.2 28 10 24 10Zm-3 26h6v2h-6v-2Z"
      : icon === "read"
        ? "M10 14h10v20H10V14Zm18 0h10v20H28V14ZM14 18h2v2h-2v-2Zm18 0h2v2h-2v-2ZM14 23h6v1.5h-6V23Zm18 0h6v1.5h-6V23ZM14 28h5v1.5h-5V28Zm18 0h5v1.5h-5V28Z"
        : icon === "culture"
          ? "M24 8l12 6v8c0 8-5.5 14-12 16-6.5-2-12-8-12-16v-8l12-6Zm0 4.2L15 16.5v5.3c0 5.8 3.8 10.4 9 12.2 5.2-1.8 9-6.4 9-12.2v-5.3L24 12.2Z"
          : "M12 14h16l6 6v14H12V14Zm16 1.5V22h6.5L28 15.5ZM16 26h12v1.5H16V26Zm0 4h8v1.5h-8V30Z";

  return (
    <span
      aria-hidden
      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${goldBorder}`}
    >
      <svg viewBox="0 0 48 48" className="h-5 w-5" fill="#C9A96E">
        <path d={path} />
      </svg>
    </span>
  );
}

/* ───────────────── AI辅助视觉创意探索 ───────────────── */

function AiExplorationBlock({
  data,
  onOpenImage,
}: {
  data: CaseShowcaseAi;
  onOpenImage: (src: string) => void;
}) {
  const conceptImages =
    data.concept.images ??
    Array.from({ length: data.concept.imageCount ?? 6 }, () => "");

  return (
    <div className="mt-16 border-t border-stroke/60 pt-12 md:mt-20 md:pt-16">
      <header className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 max-w-2xl flex-1">
          <div className="mb-2.5 flex items-center gap-3">
            <span className={`h-px w-7 ${gold} bg-current`} />
            <span className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}>
              {data.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {data.title}
          </h2>
          <p className={`mt-2 text-sm md:text-base ${goldMuted}`}>{data.subtitle}</p>
          <p className="mt-3 text-[13px] leading-relaxed text-muted md:text-sm">
            {data.intro}
          </p>
        </div>

        {(data.brandMark || data.brandMarkEn) && (
          <div className="shrink-0 text-left md:pt-1 md:text-right">
            {data.brandMarkEn && (
              <p className={`text-[11px] uppercase tracking-[0.28em] ${goldMuted}`}>
                {data.brandMarkEn}
              </p>
            )}
            {data.brandMark && (
              <p
                className={`mt-1 text-sm tracking-wide text-text-primary md:text-base [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]`}
              >
                {data.brandMark}
              </p>
            )}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_auto_auto] lg:gap-x-5 lg:gap-y-3">
        {/* 01 概念探索 */}
        <article className="flex flex-col lg:row-span-3 lg:grid lg:grid-rows-subgrid">
          <AiColumnHeading
            index={data.concept.index}
            title={data.concept.title}
            english={data.concept.englishTitle}
          />
          <p className="mt-3 text-[12px] leading-relaxed text-muted lg:mt-0 md:text-[13px]">
            {data.concept.body}
          </p>
          <div className="mt-4 flex min-h-0 flex-col lg:mt-0">
            {conceptImages.length === 1 && conceptImages[0] ? (
              <button
                type="button"
                onClick={() => onOpenImage(conceptImages[0])}
                aria-label="点击查看大图"
                className="block w-full shrink-0 cursor-pointer overflow-hidden rounded-xl bg-black/20 text-left"
              >
                <img
                  src={conceptImages[0]}
                  alt=""
                  className="aspect-[1366/1801] w-full object-contain object-top"
                />
              </button>
            ) : (
              <div className="grid shrink-0 grid-cols-3 gap-2">
                {conceptImages.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] overflow-hidden rounded-md bg-black/35"
                  >
                    {src ? (
                      <button
                        type="button"
                        onClick={() => onOpenImage(src)}
                        aria-label="点击查看大图"
                        className="h-full w-full cursor-pointer"
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* 02 创意流程 */}
        <article className="flex flex-col lg:row-span-3 lg:grid lg:grid-rows-subgrid">
          <AiColumnHeading
            index={data.workflow.index}
            title={data.workflow.title}
            english={data.workflow.englishTitle}
          />
          <p className="mt-3 text-[12px] leading-relaxed text-muted lg:mt-0 md:text-[13px]">
            {data.workflow.body ?? ""}
          </p>
          <ol className="mt-5 flex min-h-0 flex-1 flex-col justify-between gap-1 lg:mt-0">
            {data.workflow.steps.map((step, i) => (
              <li key={step.label} className="flex min-h-0 flex-1 gap-3">
                <div className="flex w-9 shrink-0 flex-col items-center">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${goldBorder} text-[11px] ${gold}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < data.workflow.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="my-1 w-px flex-1 border-l border-dashed border-[#C9A96E]/40"
                    />
                  )}
                </div>
                <div className="min-w-0 pt-1.5">
                  <p className="text-[13px] text-text-primary md:text-sm">
                    {step.label}
                  </p>
                  {step.body && (
                    <p className="mt-0.5 text-[11px] leading-snug text-muted md:text-xs">
                      {step.body}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </article>

        {/* 03 应用延展 · 媒体区高度 = 01 图 + 关键词 */}
        <article className="flex flex-col lg:row-span-3 lg:grid lg:grid-rows-subgrid">
          <AiColumnHeading
            index={data.application.index}
            title={data.application.title}
            english={data.application.englishTitle}
          />
          <p className="mt-3 text-[12px] leading-relaxed text-muted lg:mt-0 md:text-[13px]">
            {data.application.body}
          </p>
          <div className="mt-4 min-h-0 self-stretch overflow-hidden rounded-xl bg-black/35 lg:mt-0 lg:h-full">
            {data.application.image ? (
              <button
                type="button"
                onClick={() => onOpenImage(data.application.image!)}
                aria-label="点击查看大图"
                className="block h-full w-full cursor-pointer text-left"
              >
                <img
                  src={data.application.image}
                  alt=""
                  className="aspect-[1366/1801] h-full w-full object-contain object-top"
                />
              </button>
            ) : (
              <div className="flex h-full min-h-[280px] w-full items-center justify-center px-3 text-center">
                <p className={`text-[11px] leading-snug ${goldMuted}`}>
                  应用延展竖图
                  <br />
                  待补
                </p>
              </div>
            )}
          </div>
        </article>
      </div>

      {/* 底部：工具 + 金句（整块右侧背景） */}
      <div className="relative mt-10 overflow-hidden border-t border-stroke/50 pt-8 md:mt-12 md:pt-10">
        {data.quoteBackground && (
          <img
            src={data.quoteBackground}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] max-w-[720px] object-contain object-right-bottom opacity-45 md:w-[58%]"
          />
        )}
        <div className="relative z-[1] grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10">
          <div>
            <p className={`text-[10px] uppercase tracking-[0.22em] ${goldMuted}`}>
              {data.tools.eyebrow}
            </p>
            <h3
              className={`mt-1 text-base md:text-lg ${gold} [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]`}
            >
              {data.tools.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-5 md:gap-6">
              {data.tools.items.map((tool) => (
                <li key={tool} className="flex flex-col items-center gap-2">
                  <AiToolMark name={tool} />
                  <span className="text-[11px] text-muted">{tool}</span>
                </li>
              ))}
            </ul>
            {data.tools.note && (
              <p className="mt-3 text-[11px] leading-relaxed text-muted md:text-xs">
                {data.tools.note}
              </p>
            )}
          </div>
          <blockquote className="flex min-h-[140px] items-center border-t border-stroke/40 pt-6 md:min-h-[160px] md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p
              className={`max-w-[36em] text-base leading-relaxed md:text-lg lg:text-xl ${gold} [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]`}
            >
              “{data.quote}”
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function AiColumnHeading({
  index,
  title,
  english,
}: {
  index: string;
  title: string;
  english: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-display text-lg italic ${gold}`}>{index}</span>
      <div>
        <h3 className="text-base text-text-primary md:text-lg [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
          {title}
        </h3>
        <p className={`text-[10px] uppercase tracking-[0.18em] ${goldMuted}`}>
          {english}
        </p>
      </div>
    </div>
  );
}

function AiToolMark({ name }: { name: string }) {
  const src = AI_TOOL_ICONS[name];
  if (src) {
    return (
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border ${goldBorder} bg-white/[0.03]`}
      >
        <img src={src} alt="" className="h-5 w-5 object-contain" />
      </span>
    );
  }

  const initial =
    name === "Photoshop" ? "Ps" : name === "Illustrator" ? "Ai" : name.slice(0, 2);

  return (
    <span
      aria-hidden
      className={`flex h-11 w-11 items-center justify-center rounded-full border ${goldBorder} bg-white/[0.03] text-[11px] tracking-wide ${gold}`}
    >
      {initial}
    </span>
  );
}

/* ───────────────── 共用 ───────────────── */

function ColumnLabel({
  en,
  zh,
  center,
  size = "md",
}: {
  en: string;
  zh: string;
  center?: boolean;
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <div className={center ? "text-center" : undefined}>
      <p
        className={`uppercase tracking-[0.22em] ${gold} ${
          isLg ? "text-[12px] md:text-[13px]" : "text-[10px] md:text-[11px]"
        }`}
      >
        {en}
      </p>
      <h3
        className={`mt-1 text-text-primary [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif] ${
          isLg ? "text-[17px] md:text-lg" : "text-[15px] md:text-base"
        }`}
      >
        {zh}
      </h3>
    </div>
  );
}

function StatusIcon({ kind }: { kind: "x" | "check" }) {
  if (kind === "x") {
    return (
      <span
        aria-hidden
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${goldBorder}`}
      >
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
          <path
            d="M3 3l6 6M9 3L3 9"
            stroke="#C9A96E"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${goldBorder}`}
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
        <path
          d="M2.5 6.2l2.4 2.4 4.6-4.8"
          stroke="#C9A96E"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PhoneFrame({
  src,
  hint,
  compact,
}: {
  src?: string;
  hint: string;
  compact?: boolean;
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div
        className={`flex h-full min-h-0 flex-col overflow-hidden border border-white/15 bg-[#0a0a0a] shadow-[0_12px_40px_rgba(0,0,0,0.45)] ${
          compact ? "rounded-[1rem] p-1" : "rounded-[1.35rem] p-1.5"
        }`}
      >
        <div
          className={`mx-auto shrink-0 rounded-full bg-white/15 ${
            compact ? "mb-1 h-0.5 w-7" : "mb-1.5 h-1 w-10"
          }`}
        />
        <div className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain rounded-[0.85rem] bg-white/[0.04] [-webkit-overflow-scrolling:touch]">
          {src ? (
            <img
              src={src}
              alt=""
              className="block w-full max-w-none"
              draggable={false}
            />
          ) : (
            <div className="flex h-full min-h-[120px] items-center justify-center px-2 text-center">
              <p className={`text-[10px] leading-snug tracking-wide ${goldMuted}`}>
                {hint}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
