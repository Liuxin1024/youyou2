import { useEffect, useState } from "react";
import type {
  CaseVisualStrategy as CaseVisualStrategyData,
  CaseVisualStrategyItem,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/70";

/** 与项目背景卡统一的暗金渐变 */
const cardGradient =
  "linear-gradient(135deg, rgba(201, 169, 110, 0.22) 0%, rgba(42, 34, 22, 0.92) 38%, rgba(18, 16, 12, 0.98) 72%, rgba(10, 10, 10, 1) 100%)";

type Props = {
  data: CaseVisualStrategyData;
};

export function CaseVisualStrategy({ data }: Props) {
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

  return (
    <section className="border-b border-stroke bg-bg py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* —— 上：图靠右，高度随左侧文案盒子 —— */}
        <div className="relative">
          {data.image && (
            <img
              src={data.image}
              alt=""
              className="pointer-events-none absolute bottom-0 right-0 top-0 h-full w-auto max-w-[58%] object-contain object-right"
            />
          )}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-bg from-[8%] via-bg/65 via-[40%] to-transparent to-[68%]"
          />
          <div className="relative z-[1] flex max-w-[min(100%,420px)] flex-col justify-center py-8 md:py-10">
            <p className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}>
              {data.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-text-primary md:mb-5 md:text-4xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
              {data.title}
            </h2>
            <div className="mb-3 md:mb-4">
              <h3 className="text-base text-text-primary md:text-lg">
                {data.sectionTitle}
              </h3>
              <p
                className={`mt-1 text-[10px] uppercase tracking-[0.22em] ${goldMuted}`}
              >
                {data.sectionEyebrow}
              </p>
              <div
                aria-hidden
                className="mt-2.5 h-px w-full max-w-sm bg-gradient-to-r from-[#C9A96E]/55 to-transparent"
              />
            </div>
            <p className="max-w-md text-sm leading-[1.85] text-muted md:text-[15px]">
              {data.sectionBody}
            </p>
          </div>
        </div>

        {/* —— 中：五个优化方向 —— */}
        <div className="mt-12 md:mt-14">
          {(data.directionTitle || data.directionEyebrow) && (
            <div className="mb-6 md:mb-8">
              {data.directionEyebrow && (
                <p
                  className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}
                >
                  {data.directionEyebrow}
                </p>
              )}
              {data.directionTitle && (
                <h3 className="text-3xl font-bold text-text-primary md:text-4xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                  {data.directionTitle}
                </h3>
              )}
            </div>
          )}

          <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
            {/* subgrid：五卡上/中/下三行横对齐 */}
            <div className="grid min-w-[880px] grid-cols-5 gap-x-4 gap-y-0 md:min-w-0 md:gap-x-4 lg:gap-x-5 xl:gap-x-6">
              {data.items.map((item) => (
                <StrategyColumn
                  key={item.index}
                  item={item}
                  onOpenImage={setLightbox}
                />
              ))}
            </div>
          </div>
        </div>
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

function splitTitleByComma(title: string): [string, string] | null {
  const i = title.search(/[，,]/);
  if (i < 0) return null;
  return [title.slice(0, i + 1), title.slice(i + 1).trim()];
}

function StrategyColumn({
  item,
  onOpenImage,
}: {
  item: CaseVisualStrategyItem;
  onOpenImage: (src: string) => void;
}) {
  const titleLines = splitTitleByComma(item.title);

  return (
    <article
      className="row-span-3 grid grid-rows-subgrid overflow-hidden rounded-xl"
      style={{ background: cardGradient }}
    >
      {/* 上：序号 + 标题 */}
      <div className="px-3 pb-3 pt-3.5 md:px-3.5 md:pb-3 md:pt-4">
        <p
          className={`mb-1.5 text-2xl tabular-nums leading-none ${goldMuted} md:text-[1.75rem] lg:text-3xl`}
        >
          {item.index}
        </p>
        <h4 className="min-h-[2.75em] text-sm font-medium leading-snug text-text-primary md:text-[15px] lg:text-base">
          {titleLines ? (
            <>
              <span className="block">{titleLines[0]}</span>
              <span className="block">{titleLines[1]}</span>
            </>
          ) : (
            item.title
          )}
        </h4>
        <p
          className={`mt-1 text-[9px] uppercase tracking-[0.12em] ${gold}`}
          title={item.englishTitle}
        >
          {item.englishTitle}
        </p>
      </div>

      {/* 中：图片通栏 */}
      <div className="aspect-square overflow-hidden bg-black/25">
        {item.image ? (
          <button
            type="button"
            onClick={() => onOpenImage(item.image!)}
            aria-label="点击查看大图"
            className="block h-full w-full cursor-pointer text-left"
          >
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </button>
        ) : (
          <div
            className="flex h-full items-center justify-center border border-dashed border-white/10"
            aria-hidden
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Image
            </span>
          </div>
        )}
      </div>

      {/* 下：要点 */}
      <ul className="flex flex-col gap-1.5 px-3 py-3 md:px-3.5 md:py-3.5">
        {item.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-1.5 text-base leading-snug text-muted md:text-[14px]"
          >
            <span className="mt-[0.4em] h-1 w-1 shrink-0 rounded-full bg-[#C9A96E]" />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
