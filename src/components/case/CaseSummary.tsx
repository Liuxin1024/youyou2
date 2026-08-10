import type { CaseProjectSummary } from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";

type Props = {
  data: CaseProjectSummary;
};

/**
 * 项目总结收尾屏。
 * split（默认）：左文右图。
 * stack（鸿茅）：文案单独一行，图片完整展示在下方；标题结构对齐插画体系应用。
 */
export function CaseSummary({ data }: Props) {
  const paragraphs = Array.isArray(data.body)
    ? data.body.filter(Boolean)
    : data.body
      ? [data.body]
      : [];
  const vertical = data.brandMarkVertical;
  const stacked = data.layout === "stack";

  if (stacked) {
    return (
      <section className="border-b border-stroke bg-bg">
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            <header className="max-w-2xl">
              <div className="mb-2.5">
                <span
                  className={`text-[11px] uppercase tracking-[0.28em] ${gold}`}
                >
                  {data.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl tracking-tight text-text-primary md:text-[1.85rem] lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className={`mt-2 text-sm md:text-base ${goldMuted}`}>
                  {data.subtitle}
                </p>
              )}
              {data.subtitleEn && (
                <p className={`mt-2 text-sm md:text-base ${goldMuted}`}>
                  {data.subtitleEn}
                </p>
              )}
              {paragraphs.length > 0 && (
                <div className="mt-4 space-y-2 text-[13px] leading-relaxed text-muted md:text-sm">
                  {paragraphs.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
              )}
            </header>

            <div className="w-full overflow-hidden">
              {data.backgroundImage ? (
                <img
                  src={data.backgroundImage}
                  alt=""
                  className="block h-auto w-full object-contain"
                />
              ) : (
                <ImagePlaceholder className="aspect-[16/9] w-full" />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-stroke">
      <div className="relative flex min-h-[520px] flex-col overflow-hidden bg-bg md:min-h-[600px] lg:min-h-[640px]">
        {/* 右侧产品视觉 */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[62%] md:w-[58%] lg:w-[56%]">
          {data.backgroundImage ? (
            <img
              src={data.backgroundImage}
              alt=""
              className="h-full w-full object-cover object-[68%_center]"
            />
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-bg from-[0%] via-bg/85 via-[18%] to-transparent to-[48%] sm:from-bg sm:via-bg/70 sm:via-[22%] sm:to-transparent sm:to-[52%]" />
          <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-bg/50 to-transparent" />
        </div>

        {/* 右上竖排品牌标 */}
        {vertical && (
          <div className="pointer-events-none absolute right-5 top-10 z-[2] hidden text-right sm:right-8 sm:top-12 sm:block md:right-10 lg:right-14 lg:top-14">
            <p
              className="text-[15px] leading-relaxed tracking-[0.2em] text-text-primary md:text-base lg:text-lg [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif] [writing-mode:vertical-rl]"
            >
              {data.brandMark}
            </p>
            <p
              className={`mt-4 text-[9px] uppercase tracking-[0.22em] text-white/70 md:text-[10px] [writing-mode:vertical-rl]`}
            >
              {data.brandMarkEn}
            </p>
          </div>
        )}

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pb-12 pt-14 md:px-10 md:pb-14 md:pt-16 lg:px-16 lg:pb-16 lg:pt-20">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem]">
              <div className="mb-6 flex items-start gap-4 md:mb-7 md:gap-5">
                {data.index && (
                  <span
                    className={`shrink-0 font-display text-5xl leading-none tabular-nums md:text-6xl lg:text-[4.25rem] ${gold}`}
                    aria-hidden
                  >
                    {data.index}
                  </span>
                )}
                <div className="pt-1 md:pt-2">
                  <h2 className="text-2xl font-bold leading-tight text-text-primary md:text-3xl lg:text-[2.1rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                    {data.title}
                  </h2>
                  <p
                    className={`mt-1.5 text-[11px] uppercase tracking-[0.32em] ${gold} md:text-xs`}
                  >
                    {data.eyebrow}
                  </p>
                </div>
              </div>

              {data.valueTitle && (
                <h3 className="text-lg text-text-primary md:text-xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                  {data.valueTitle}
                </h3>
              )}

              {data.subtitle && (
                <p className="mt-2 text-base leading-snug text-text-primary/90 md:mt-2.5 md:text-lg">
                  {data.subtitle}
                </p>
              )}
              {data.subtitleEn && (
                <p
                  className={`mt-1.5 text-[11px] uppercase tracking-[0.18em] md:text-xs ${gold}`}
                >
                  {data.subtitleEn}
                </p>
              )}

              {paragraphs.length > 0 && (
                <div className="mt-6 flex flex-col gap-4 md:mt-7 md:gap-4.5">
                  {paragraphs.map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="text-[14px] leading-[1.9] text-muted md:text-[15px]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {!vertical && (
              <div className="hidden shrink-0 pt-0.5 text-right sm:block">
                <p
                  className={`text-[10px] uppercase tracking-[0.3em] ${gold} md:text-[11px]`}
                >
                  {data.brandMarkEn}
                </p>
                <p className="mt-1.5 text-sm tracking-wide text-text-primary/85 md:text-[15px] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                  {data.brandMark}
                </p>
              </div>
            )}
          </div>

          {data.closing &&
            (data.closing.line1 || data.closing.line2 || data.closing.line3) && (
              <div className="mt-auto max-w-[22rem] pt-16 md:max-w-[26rem] md:pt-20 lg:max-w-[28rem]">
                <div className={`mb-5 h-px w-10 ${gold} bg-current opacity-60`} />
                {data.closing.line1 && (
                  <p
                    className={`font-display text-[13px] uppercase leading-relaxed tracking-[0.06em] md:text-[15px] md:tracking-[0.08em] ${gold}`}
                  >
                    {data.closing.line1}
                  </p>
                )}
                {data.closing.line2 && (
                  <p
                    className={`mt-1 font-display text-[13px] uppercase leading-relaxed tracking-[0.06em] md:text-[15px] md:tracking-[0.08em] ${gold}`}
                  >
                    {data.closing.line2}
                  </p>
                )}
                {data.closing.line3 && (
                  <p
                    className={`leading-relaxed text-text-primary/70 md:text-[16px] ${
                      data.closing.line1 || data.closing.line2
                        ? "mt-3 text-[16px] text-text-primary/50"
                        : "text-[15px] md:text-base"
                    }`}
                  >
                    {data.closing.line3}
                  </p>
                )}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-[#C9A96E]/30 bg-white/[0.03] ${className}`}
    >
      <div className="px-4 text-center">
        <p className={`text-[11px] uppercase tracking-[0.2em] ${goldMuted}`}>
          IMAGE
        </p>
        <p className="mt-2 text-xs text-muted/60">项目总结配图 · 待补</p>
      </div>
    </div>
  );
}
