import type { CaseProjectSummary } from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";

type Props = {
  data: CaseProjectSummary;
};

/**
 * 项目总结收尾屏：左文右图，左下沉底金句。
 * 层级：eyebrow → 标题 → 副标 → 正文（弱）→ 底部分隔 + 收尾语（强收束）
 */
export function CaseSummary({ data }: Props) {
  const { closing } = data;

  return (
    <section className="border-b border-stroke">
      <div className="relative flex min-h-[480px] flex-col overflow-hidden bg-bg md:min-h-[560px] lg:min-h-[620px]">
        {/* 右侧视觉 */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[58%] md:w-[55%] lg:w-[52%]">
          <img
            src={data.backgroundImage}
            alt=""
            className="h-full w-full object-cover object-[center_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/20 to-transparent sm:from-bg/90 sm:via-bg/25" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-bg/25 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pb-10 pt-14 md:px-10 md:pb-12 md:pt-16 lg:px-16 lg:pb-14 lg:pt-20">
          {/* 顶栏：左标题簇 / 右品牌标 */}
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem]">
              <div className="mb-3.5 flex items-center gap-3">
                <span className={`h-px w-7 ${gold} bg-current`} />
                <span
                  className={`text-[10px] uppercase tracking-[0.32em] ${gold} md:text-[11px]`}
                >
                  {data.eyebrow}
                </span>
              </div>

              <h2 className="text-[2rem] leading-tight tracking-tight text-text-primary md:text-[2.5rem] lg:text-[2.75rem] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                {data.title}
              </h2>

              <p
                className={`mt-3 text-[15px] leading-snug md:mt-3.5 md:text-base ${goldMuted}`}
              >
                {data.subtitle}
              </p>

              {/* 正文：信息层，字号与对比度刻意压低，不抢标题 */}
              <p className="mt-5 max-w-[22rem] text-[16px] leading-[1.85] text-text-primary/55 md:mt-6 md:max-w-[26rem] md:text-[16px] md:leading-[1.95] lg:max-w-[28rem]">
                {data.body}
              </p>
            </div>

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
          </div>

          {/* 左下收束：原下屏三行文案 */}
          <div className="mt-auto max-w-[22rem] pt-16 md:max-w-[26rem] md:pt-20 lg:max-w-[28rem]">
            <div className={`mb-5 h-px w-10 ${gold} bg-current opacity-60`} />
            <p
              className={`font-display text-[13px] uppercase leading-relaxed tracking-[0.06em] md:text-[15px] md:tracking-[0.08em] ${gold}`}
            >
              {closing.line1}
            </p>
            <p
              className={`mt-1 font-display text-[13px] uppercase leading-relaxed tracking-[0.06em] md:text-[15px] md:tracking-[0.08em] ${gold}`}
            >
              {closing.line2}
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-text-primary/50 md:text-[16px]">
              {closing.line3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
