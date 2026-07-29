import type {
  CaseShowcaseEvolution,
  CaseShowcaseProcessStep,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/75";
const goldBorder = "border-[#C9A96E]/30";

const PROCESS_ICONS: Record<CaseShowcaseProcessStep["icon"], string> = {
  layers: "/icons/strategy/layers.svg",
  leaf: "/icons/strategy/leaf.svg",
  device: "/icons/strategy/device.svg",
};

type Props = {
  evolution?: CaseShowcaseEvolution;
};

export function CaseShowcase({ evolution }: Props) {
  if (!evolution) return null;

  return (
    <section className="relative overflow-hidden border-b border-stroke py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* —— 标题区：无 04 —— */}
        <header className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
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
            <div className="shrink-0 text-left md:text-right">
              {evolution.period && (
                <p className={`text-sm tracking-wide ${gold}`}>{evolution.period}</p>
              )}
              {evolution.periodNote && (
                <p className="mt-1 text-xs text-muted">{evolution.periodNote}</p>
              )}
            </div>
          )}
        </header>

        {/*
          五列竖屏（桌面）：
          1 原视觉状态 | 2 手机长图 | 3 优化思路 | 4 手机长图 | 5 优化后视觉表达
          五个盒子统一固定高度
        */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,0.65fr)_minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-2.5 xl:gap-3">
          {/* 1 · BEFORE 文案 */}
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

          {/* 2 · BEFORE 手机框 */}
          <div className="h-[480px] overflow-hidden md:h-[520px] lg:h-[560px]">
            <PhoneFrame src={evolution.before.phone} hint="原视觉长图 · 待补" />
          </div>

          {/* 3 · PROCESS */}
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
                <li
                  key={step.index}
                  className="flex w-full flex-col items-center"
                >
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

          {/* 4 · AFTER 手机框 */}
          <div className="h-[480px] overflow-hidden md:h-[520px] lg:h-[560px]">
            <PhoneFrame src={evolution.after.phone} hint="优化后长图 · 待补" />
          </div>

          {/* 5 · AFTER 文案 */}
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
      </div>
    </section>
  );
}

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

/** 手机框：高度对齐左右文案盒；长图在框内滚动，不撑高整行 */
function PhoneFrame({ src, hint }: { src?: string; hint: string }) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0a0a0a] p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <div className="mx-auto mb-1.5 h-1 w-10 shrink-0 rounded-full bg-white/15" />
        <div className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain rounded-[1rem] bg-white/[0.04] [-webkit-overflow-scrolling:touch]">
          {src ? (
            <img
              src={src}
              alt=""
              className="block w-full max-w-none"
              draggable={false}
            />
          ) : (
            <div className="flex h-full min-h-[200px] items-center justify-center px-3 text-center">
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
