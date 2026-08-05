import type {
  CaseVisualStrategy as CaseVisualStrategyData,
  CaseVisualStrategyItem,
  CaseVisualStrategyPillar,
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
  return (
    <section className="border-b border-stroke bg-bg py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* —— 上：文案左 + 平衡图右 —— */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}>
              {data.eyebrow}
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary md:text-4xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
              {data.title}
            </h2>
            <div className="mb-4">
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

          {data.balance && (
            <div className="lg:col-span-7">
              <BalanceDiagram balance={data.balance} />
            </div>
          )}
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
            <div className="grid min-w-[880px] grid-cols-5 gap-x-4 gap-y-0 md:min-w-0 md:gap-x-3 lg:gap-x-5">
              {data.items.map((item) => (
                <StrategyColumn key={item.index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BalanceDiagram({
  balance,
}: {
  balance: NonNullable<CaseVisualStrategyData["balance"]>;
}) {
  return (
    <div className="flex items-start justify-between gap-1 pt-2 sm:gap-2 md:gap-1 lg:pt-0">
      <BalanceNode pillar={balance.left} icon="shield" />
      <ChevronPair className="mt-[2.1rem] sm:mt-[2.35rem]" />
      <BalanceCore center={balance.center} />
      <ChevronPair className="mt-[2.1rem] sm:mt-[2.35rem]" />
      <BalanceNode pillar={balance.right} icon="person" />
    </div>
  );
}

function ChevronPair({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`shrink-0 text-base tracking-tighter sm:text-lg ${goldMuted} ${className}`}
    >
      ››
    </span>
  );
}

function BalanceNode({
  pillar,
  icon,
}: {
  pillar: CaseVisualStrategyPillar;
  icon: "shield" | "person";
}) {
  return (
    <div className="flex w-[28%] max-w-[150px] flex-col items-center text-center">
      <span
        className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A96E]/45 text-[#C9A96E] sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-hidden
      >
        {icon === "shield" ? (
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
            <path d="M12 9v6M9 12h6" />
          </svg>
        ) : (
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 19c0-3.2 3-5.2 7-5.2s7 2 7 5.2" />
          </svg>
        )}
      </span>
      <p className="text-[13px] text-text-primary sm:text-sm">{pillar.title}</p>
      <p className={`mt-1 text-[10px] leading-relaxed ${goldMuted}`}>
        {pillar.tags.join(" | ")}
      </p>
      {pillar.points && pillar.points.length > 0 && (
        <ul className="mt-2.5 flex flex-col gap-0.5">
          {pillar.points.map((p) => (
            <li key={p} className="text-[11px] leading-snug text-muted/85">
              · {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BalanceCore({
  center,
}: {
  center: NonNullable<CaseVisualStrategyData["balance"]>["center"];
}) {
  return (
    <div className="flex w-[36%] max-w-[210px] flex-col items-center text-center">
      <div className="flex aspect-square w-full max-w-[180px] flex-col items-center justify-center rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/08 px-3 py-4 sm:max-w-[190px] sm:px-4">
        <p className="text-lg font-bold text-text-primary [font-family:'Songti_SC','STSong','SimSun',serif] sm:text-xl">
          {center.brand}
        </p>
        <p className={`mt-0.5 text-[10px] tracking-[0.22em] ${gold}`}>
          {center.brandEn}
        </p>
        <p className={`mt-2.5 text-[11px] ${goldMuted}`}>{center.label}</p>
      </div>
      <p className="mt-3 max-w-[10.5rem] text-[11px] leading-snug text-muted sm:text-xs">
        {center.thesis}
      </p>
    </div>
  );
}

function splitTitleByComma(title: string): [string, string] | null {
  const i = title.search(/[，,]/);
  if (i < 0) return null;
  return [title.slice(0, i + 1), title.slice(i + 1).trim()];
}

function StrategyColumn({ item }: { item: CaseVisualStrategyItem }) {
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
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
          />
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
