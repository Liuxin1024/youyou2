import type {
  CaseEditorialStrategy,
  CaseEditorialStrategyElement,
  CaseEditorialStrategyKeyword,
  CaseEditorialStrategyStep,
  CaseEditorialStrategyStyle,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";
const goldBorder = "border-[#C9A96E]/30";

type Props = {
  data: CaseEditorialStrategy;
};

/** 鸿茅药酒 · 设计策略第二屏（框架 + 占位） */
export function CaseHongmaoStrategy({ data }: Props) {
  return (
    <section className="border-b border-stroke bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* 设计策略 + 设计思路：尽量合占一屏，内容紧凑不硬撑 */}
        <div className="flex min-h-[100svh] flex-col justify-center gap-6 py-6 md:gap-7 md:py-7 lg:gap-8">
          {/* 上：设计策略文案 + 右侧主图（按内容高度，图完整显示） */}
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center md:col-span-5 lg:col-span-4">
              <h2
                className={`text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl ${gold} [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]`}
              >
                {data.title}
              </h2>
              <p
                className={`mt-1.5 text-[10px] uppercase tracking-[0.28em] ${goldMuted}`}
              >
                DESIGN STRATEGY
              </p>
              <p className="mt-3 max-w-md text-sm leading-[1.75] text-muted md:mt-4 md:text-[14px] md:leading-[1.8]">
                {data.body}
              </p>
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <MediaPlaceholder
                src={data.heroImage}
                className="w-full"
                label="策略主视觉占位"
              />
            </div>
          </div>

          {/* 中：设计思路 + 核心关键词 */}
          <div className="grid shrink-0 grid-cols-1 gap-6 border-t border-[#C9A96E]/20 pt-5 md:grid-cols-12 md:gap-6 md:pt-6 lg:gap-8">
            <div className="md:col-span-7 lg:col-span-8">
              <SectionHeading
                title={data.thinkingTitle}
                titleEn={data.thinkingTitleEn}
              />
              <div className="mt-5 flex items-start justify-between gap-1 md:mt-6 md:gap-2">
                {data.steps.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex min-w-0 flex-1 items-start"
                  >
                    <ThinkingStep step={step} />
                    {i < data.steps.length - 1 && (
                      <div
                        className={`mt-[2.1rem] hidden shrink-0 px-0.5 text-xs md:mt-[2.35rem] md:block md:px-1 ${goldMuted}`}
                        aria-hidden
                      >
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-[#C9A96E]/20 md:col-span-5 md:border-l md:pl-6 lg:col-span-4 lg:pl-8">
              <SectionHeading
                title={data.keywordsTitle}
                titleEn={data.keywordsTitleEn}
              />
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-5 md:mt-5">
                {data.keywords.map((kw) => (
                  <KeywordItem key={kw.en} item={kw} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 视觉元素提炼 */}
        <div className="border-t border-[#C9A96E]/20 py-8 md:py-10">
          <SectionHeading
            title={data.elementsTitle}
            titleEn={data.elementsTitleEn}
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 lg:grid-cols-4 lg:gap-5">
            {data.elements.map((el) => (
              <ElementCard key={el.title} item={el} />
            ))}
          </div>
        </div>

        {/* 风格定位 */}
        <div className="relative overflow-hidden border-t border-[#C9A96E]/20 pb-8 pt-8 md:pb-10 md:pt-10">
          <SectionHeading
            title={data.stylesTitle}
            titleEn={data.stylesTitleEn}
          />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-8 lg:grid-cols-4 lg:gap-8">
            {data.styles.map((style) => (
              <StyleItem key={style.title} item={style} />
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -right-4 hidden h-40 w-40 opacity-[0.08] md:block lg:h-52 lg:w-52"
          >
            <CraneSilhouette />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  titleEn,
}: {
  title: string;
  titleEn: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className={`text-lg md:text-xl ${gold}`}>{title}</h3>
      <span className={`text-[10px] uppercase tracking-[0.24em] ${goldMuted}`}>
        {titleEn}
      </span>
    </div>
  );
}

function ThinkingStep({ step }: { step: CaseEditorialStrategyStep }) {
  return (
    <div className="flex w-full min-w-0 flex-col items-center text-center">
      <div
        className={`flex aspect-square w-[min(100%,4.75rem)] flex-col items-center justify-center rounded-full border ${goldBorder} bg-[#141414] md:w-[min(100%,5.25rem)]`}
      >
        <p className={`text-[12px] font-medium leading-tight md:text-[13px] ${gold}`}>
          {step.title}
        </p>
        <p className="mt-0.5 text-[8px] uppercase tracking-[0.12em] text-muted">
          {step.subtitle}
        </p>
      </div>
      <p className="mt-2 max-w-[8rem] text-[10px] leading-relaxed text-white/70 md:mt-2.5 md:text-[11px]">
        {step.body}
      </p>
    </div>
  );
}

function KeywordItem({ item }: { item: CaseEditorialStrategyKeyword }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-white/80"
        aria-hidden
      >
        <KeywordIcon id={item.icon} />
      </span>
      <div className="min-w-0">
        <p className={`text-[13px] ${gold}`}>{item.zh}</p>
        <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-muted">
          {item.en}
        </p>
      </div>
    </div>
  );
}

function ElementCard({ item }: { item: CaseEditorialStrategyElement }) {
  const count = item.images?.length ?? item.thumbCount ?? 3;
  const thumbs = item.images?.length
    ? item.images
    : Array.from({ length: count }, () => undefined as string | undefined);

  return (
    <div className="flex flex-col items-center rounded-2xl bg-[#161616] px-4 py-5 text-center md:px-5 md:py-6">
      <p className={`text-sm font-medium ${gold}`}>{item.title}</p>
      <p className="mt-1.5 text-[11px] text-muted">{item.subtitle}</p>

      <div className="mt-5 flex items-center justify-center gap-2.5">
        {thumbs.map((src, i) => (
          <div
            key={`${item.title}-${i}`}
            className={`h-12 w-12 overflow-hidden rounded-full border ${goldBorder} bg-[#0f0f0f] sm:h-14 sm:w-14`}
          >
            {src ? (
              <img src={src} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[9px] text-muted/45">
                {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full">
        <div className="flex h-full w-full">
          {item.colors.map((color) => (
            <span
              key={color}
              className="h-full flex-1"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StyleItem({ item }: { item: CaseEditorialStrategyStyle }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${goldBorder} text-[#C9A96E]`}
        aria-hidden
      >
        <StyleIcon id={item.icon} />
      </span>
      <div className="min-w-0">
        <p className={`text-sm font-medium ${gold}`}>{item.title}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-muted md:text-xs">
          {item.body}
        </p>
      </div>
    </div>
  );
}

function MediaPlaceholder({
  src,
  className,
  label,
}: {
  src?: string;
  className?: string;
  label: string;
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <img
          src={src}
          alt=""
          className="h-auto w-full object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed ${goldBorder} bg-white/[0.03] ${className ?? ""}`}
    >
      <div className="px-4 text-center">
        <p className={`text-[11px] uppercase tracking-[0.2em] ${goldMuted}`}>
          IMAGE
        </p>
        <p className="mt-2 text-xs text-muted/60">{label}</p>
      </div>
    </div>
  );
}

function KeywordIcon({
  id,
}: {
  id: CaseEditorialStrategyKeyword["icon"];
}) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "mountain") {
    // 东方美学 · 叠嶂山峰
    return (
      <svg {...common}>
        <path d="M2 19l6.5-11 3.5 5.5L15 8l7 11H2z" />
        <path d="M9.5 13.5L12 18" opacity="0.55" />
      </svg>
    );
  }

  if (id === "sun") {
    // 节气文化 · 十二芒太阳
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" />
        <path d="M5.2 5.2l1.5 1.5M17.3 17.3l1.5 1.5M5.2 18.8l1.5-1.5M17.3 6.7l1.5-1.5" />
        <path d="M12 6.2v1.2M12 16.6v1.2M6.2 12h1.2M16.6 12h1.2" opacity="0.7" />
      </svg>
    );
  }

  if (id === "scroll") {
    // 文化传承 · 展开书卷
    return (
      <svg {...common}>
        <path d="M4 6.5c0-.8.7-1.5 1.5-1.5H11v14H5.5A1.5 1.5 0 014 17.5v-11z" />
        <path d="M20 6.5c0-.8-.7-1.5-1.5-1.5H13v14h5.5a1.5 1.5 0 001.5-1.5v-11z" />
        <path d="M12 5v14" />
      </svg>
    );
  }

  if (id === "vessel") {
    // 匠心工艺 · 传统器物
    return (
      <svg {...common}>
        <path d="M7 8h10l-.8 1.6c-.4.8-.6 1.7-.6 2.6V16a3 3 0 01-3 3h-1.2a3 3 0 01-3-3v-3.8c0-.9-.2-1.8-.6-2.6L7 8z" />
        <path d="M8.5 8V6.5A1.5 1.5 0 0110 5h4a1.5 1.5 0 011.5 1.5V8" />
        <path d="M9.5 12.5h5" opacity="0.55" />
      </svg>
    );
  }

  if (id === "leaf") {
    // 自然养生 · 对称叶片
    return (
      <svg {...common}>
        <path d="M12 20V9" />
        <path d="M12 11c-2.8-1.2-5.5-.4-7.2 2.2 2.6 1.5 5.2 1.4 7.2-.2z" />
        <path d="M12 11c2.8-1.2 5.5-.4 7.2 2.2-2.6 1.5-5.2 1.4-7.2-.2z" />
        <path d="M12 15c-2.2-.6-4.2.1-5.5 1.8 2 1 4 .9 5.5-.2z" opacity="0.7" />
        <path d="M12 15c2.2-.6 4.2.1 5.5 1.8-2 1-4 .9-5.5-.2z" opacity="0.7" />
      </svg>
    );
  }

  // 品牌识别 · 瓶型剪影
  return (
    <svg {...common}>
      <path d="M10 3.5h4v2.2c0 .6.2 1.1.5 1.5l.7.9c.5.6.8 1.4.8 2.2V19a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 19v-8.7c0-.8.3-1.6.8-2.2l.7-.9c.3-.4.5-.9.5-1.5V3.5z" />
      <path d="M9.5 4.8h5" opacity="0.55" />
      <path d="M10 12.5h4" opacity="0.45" />
    </svg>
  );
}

function StyleIcon({ id }: { id: CaseEditorialStrategyStyle["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "mountain") {
    return (
      <svg {...common}>
        <path d="M3 18l6-10 4 6 2-3 6 7H3z" />
      </svg>
    );
  }
  if (id === "crane") {
    return (
      <svg {...common}>
        <path d="M4 14c3-1 5-4 7-4s3 2 5 3c2 1 4 1 4 1" />
        <path d="M11 10c1-3 3-5 6-6" />
      </svg>
    );
  }
  if (id === "lotus") {
    return (
      <svg {...common}>
        <path d="M12 19c-4-3-6-6-6-9a6 6 0 0112 0c0 3-2 6-6 9z" />
        <path d="M12 10v9" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 14c2-2 4-3 6-2s3 3 6 2 4-3 4-3" />
      <path d="M4 10c2-2 4-3 6-2s3 3 6 2 4-3 4-3" />
    </svg>
  );
}

function CraneSilhouette() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      className="h-full w-full text-[#C9A96E]"
    >
      <path d="M20 70c18-8 30-28 42-28 8 0 14 10 26 16 10 5 20 6 28 4-10 6-22 8-34 4-14-5-20-14-28-12-10 2-18 12-34 16z" />
      <path d="M62 42c6-14 16-24 32-28-8 10-12 20-14 30" />
    </svg>
  );
}
