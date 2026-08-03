import { Link } from "react-router-dom";
import type { CaseStudy } from "../../data/cases";

/** 案例页金色强调，对齐设计稿东方轻奢调 */
const gold = "text-[#C9A96E]";
const goldBorder = "border-[#C9A96E]/25";
const goldMuted = "text-[#C9A96E]/80";

const AI_TOOL_ICONS: Record<string, string> = {
  Midjourney: "/icons/ai/midjourney.svg",
  即梦: "/icons/ai/jimeng.svg",
  "Chat GPT": "/icons/ai/openai.svg",
  可灵: "/icons/ai/keling.svg",
};

type Props = {
  study: CaseStudy;
};

export function CaseHero({ study }: Props) {
  const overview = study.overview;
  if (!overview) return null;

  const showDetail =
    Boolean(overview.roleTitle) &&
    Boolean(overview.background?.length) &&
    Boolean(overview.roleDuties?.length);
  const pillarLayout = overview.pillarLayout ?? "cards";

  return (
    <header className="bg-bg">
      {/* —— 第一屏主视觉：文案左上 + 关键词条沉底，同层背景图 —— */}
      <div className="relative flex min-h-[560px] flex-col overflow-hidden bg-bg md:min-h-0 md:h-[min(62vw,720px)]">
        <div className="absolute inset-0">
          <img
            src={study.cover}
            alt=""
            className={`h-full w-full object-cover ${pillarLayout === "icons"
                ? "object-[72%_28%] md:object-[68%_30%]"
                : "object-[center_28%]"
              }`}
          />
          {/* 左侧渐变：保证标题区可读 */}
          <div
            className={
              pillarLayout === "icons"
                ? "absolute inset-0 bg-gradient-to-r from-bg from-[6%] via-bg/65 via-[24%] to-transparent to-[45%]"
                : "absolute inset-0 bg-gradient-to-r from-bg from-[8%] via-bg/70 via-[36%] to-transparent to-[70%]"
            }
          />
          {/* 底部渐变：托住关键词条 */}
          <div
            className={
              pillarLayout === "icons"
                ? "absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent to-[35%]"
                : "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent to-[55%]"
            }
          />
        </div>

        {/* 右侧品牌 logo / 水印（无水印且非 icons 布局时才用大号标题字） */}
        {study.watermark ? (
          <img
            src={study.watermark}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-4 top-[42%] hidden w-[140px] -translate-y-1/2 select-none opacity-[0.22] md:block md:right-8 md:w-[180px] lg:right-12 lg:w-[220px]"
          />
        ) : pillarLayout === "cards" ? (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 top-[40%] hidden -translate-y-1/2 select-none font-display text-[7rem] leading-none text-white/[0.04] md:block lg:text-[10rem]"
          >
            {study.title}
          </div>
        ) : null}

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-1 flex-col px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-14 lg:px-16 lg:pb-12 lg:pt-16">
          {/* 左上文案 */}
          <div className="flex flex-col justify-start">
            <Link
              to="/#work"
              className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-text-primary md:mb-8"
            >
              <span aria-hidden>←</span> 返回核心项目
            </Link>

            <p
              className={`mb-4 text-[11px] uppercase tracking-[0.35em] ${gold} md:mb-5`}
            >
              Case Study
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-text-primary md:text-6xl lg:text-7xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
              {study.title}
            </h1>
            <p
              className={`mt-2 text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl ${gold} [font-family:'Heiti_SC','STHeiti','SimHei','PingFang_SC','Microsoft_YaHei',sans-serif]`}
            >
              {overview.englishName}
            </p>
            <p
              className={`mt-4 max-w-xl text-text-primary/90 md:mt-5 ${pillarLayout === "icons"
                  ? "text-xl md:text-2xl lg:text-3xl"
                  : "text-base md:text-lg"
                }`}
            >
              {overview.positioning}
            </p>
            {overview.positioningDesc && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:mt-4 md:text-base">
                {overview.positioningDesc}
              </p>
            )}
          </div>

          {/* 关键词条：沉在第一屏左侧（icons）或通栏（cards） */}
          <div className="mt-auto pt-10">
            {pillarLayout === "icons" ? (
              <div className="flex max-w-md flex-wrap gap-5 sm:gap-7 md:gap-8">
                {overview.pillars.map((pillar, i) => (
                  <div
                    key={pillar}
                    className="flex w-[4.25rem] flex-col items-center gap-2.5 text-center sm:w-[5rem]"
                  >
                    <PillarCircleIcon index={i} />
                    <span
                      className={`text-[11px] leading-snug sm:text-xs md:text-sm ${goldMuted}`}
                    >
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:grid-cols-4">
                {overview.pillars.map((pillar, i) => (
                  <div
                    key={pillar}
                    className="flex items-start gap-2.5 bg-bg/55 px-3 py-4 sm:items-center sm:gap-3 sm:px-5 sm:py-5 md:px-6 md:py-5"
                  >
                    <PillarIcon index={i} />
                    <span
                      className={`text-xs leading-snug sm:text-sm md:text-[15px] ${goldMuted}`}
                    >
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* —— 双栏：角色 / AI · 项目背景（等高拉伸） —— */}
      {showDetail && (
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-5 px-6 py-8 md:grid-cols-12 md:gap-6 md:px-10 md:py-12 lg:px-16">
          <div className="flex min-h-0 flex-col gap-5 md:col-span-5 md:h-full">
            <div
              className={`flex flex-1 flex-col rounded-2xl border ${goldBorder} bg-surface/50 p-6 md:p-8`}
            >
              <div className="mb-4 flex items-center gap-2">
                <RoleIcon />
                <span className={`text-[11px] uppercase tracking-[0.3em] ${gold}`}>
                  Role
                </span>
              </div>
              <h2 className="mb-3 text-xl text-text-primary md:text-2xl">
                {overview.roleTitle}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {overview.roleDesc}
              </p>
              <p className={`mb-3 text-xs tracking-[0.15em] ${gold}`}>
                主要工作内容
              </p>
              <ul className="flex flex-1 flex-col gap-2">
                {overview.roleDuties!.map((duty) => (
                  <li
                    key={duty}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A96E]" />
                    {duty}
                  </li>
                ))}
              </ul>
            </div>

            {overview.aiTools && overview.aiTools.length > 0 && (
              <div
                className={`shrink-0 rounded-2xl border ${goldBorder} bg-surface/50 p-6 md:p-8`}
              >
                <p className={`mb-5 text-[11px] uppercase tracking-[0.3em] ${gold}`}>
                  AI Tools
                </p>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                  {overview.aiTools.map((tool) => {
                    const iconSrc = AI_TOOL_ICONS[tool];
                    return (
                      <div
                        key={tool}
                        className="flex min-w-0 flex-col items-center gap-2"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/35 bg-bg/70 sm:h-12 sm:w-12 md:h-14 md:w-14">
                          {iconSrc ? (
                            <img
                              src={iconSrc}
                              alt={tool}
                              width={28}
                              height={28}
                              className="h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7"
                            />
                          ) : (
                            <span className={`text-sm ${gold}`}>{tool[0]}</span>
                          )}
                        </span>
                        <span className="w-full truncate text-center text-[10px] leading-tight text-muted sm:text-[11px] md:text-xs">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div
            className={`flex h-full min-h-0 flex-col rounded-2xl border ${goldBorder} bg-surface/50 p-6 md:col-span-7 md:p-8 lg:p-10`}
          >
            <p className={`mb-3 text-[11px] uppercase tracking-[0.3em] ${gold}`}>
              Project Background
            </p>
            <h2 className="mb-6 text-xl text-text-primary md:text-2xl">
              项目背景
            </h2>
            <div className="mb-10 flex flex-col gap-5">
              {overview.background!.map((para) => {
                const text = typeof para === "string" ? para : para.text;
                const bold = typeof para === "object" && para.bold;
                return (
                  <p
                    key={text.slice(0, 24)}
                    className={`text-sm leading-[1.85] md:text-[15px] ${bold ? "font-semibold text-text-primary" : "text-muted"
                      }`}
                  >
                    {text}
                  </p>
                );
              })}
            </div>

            {overview.milestones && overview.milestones.length > 0 && (
              <div className="mt-auto border-t border-stroke/80 pt-8">
                <p className="mb-8 text-sm">
                  <span className={`tracking-[0.2em] ${gold}`}>
                    BRAND MILESTONES
                  </span>{" "}
                  <span className="text-text-primary">品牌大事件（节选）</span>
                </p>

                <div className="-mx-1 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch]">
                  <div className="relative min-w-[560px] px-1 sm:min-w-[640px] md:min-w-0">
                    <div className="absolute left-3 right-3 top-[7px] h-px bg-[#C9A96E]/35 md:left-4 md:right-4" />
                    <ol className="relative grid grid-cols-6 gap-1.5 sm:gap-2">
                      {overview.milestones.map((m) => (
                        <li
                          key={m.date + m.label}
                          className="flex flex-col items-center text-center"
                        >
                          <span className="relative z-[1] mb-3 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#C9A96E] bg-bg sm:mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]" />
                          </span>
                          <p className="mb-1 text-[10px] font-medium tabular-nums text-text-primary sm:mb-1.5 sm:text-[11px] md:text-xs">
                            {m.date}
                          </p>
                          <p className="max-w-[6.5rem] text-[10px] leading-snug text-muted sm:max-w-[7.5rem] sm:text-[11px] md:text-xs">
                            {m.label}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function PillarCircleIcon({ index }: { index: number }) {
  const common =
    "flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A96E]/55 text-[#C9A96E] sm:h-14 sm:w-14";
  const iconClass = "h-[82%] w-[82%]";
  if (index === 0) {
    // 医研背书 · shield + cross
    return (
      <span className={common} aria-hidden>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className={iconClass}
        >
          <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      </span>
    );
  }
  if (index === 1) {
    // 安全有效 · molecule
    return (
      <span className={common} aria-hidden>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className={iconClass}
        >
          <circle cx="7" cy="7" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="9" cy="17" r="2.2" />
          <circle cx="16" cy="16" r="1.6" />
          <path d="M8.7 8.7l6.6-.7M8.5 15.2l6.2-5.8M10.8 16.2l3.8-.8" />
        </svg>
      </span>
    );
  }
  if (index === 2) {
    // 温和亲肤 · leaf
    return (
      <span className={common} aria-hidden>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className={iconClass}
        >
          <path d="M5 14c0-6 5-10 13-10-1 7-4 13-10 13-1.8 0-3-.7-3-3z" />
          <path d="M9 15c2-2 4.5-4.5 7-6" />
        </svg>
      </span>
    );
  }
  // 肌肤自信 · profile
  return (
    <span className={common} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        className={iconClass}
      >
        <path d="M12 4c2.8 0 5 2.4 5 5.5S15.5 15 12.5 15h-1C9 15 7 12.8 7 9.5S9.2 4 12 4z" />
        <path d="M8.5 14.5c-1.2.8-2 2-2 3.5 0 1.2.6 2 2.5 2h6c2 0 2.5-.8 2.5-2 0-1.3-.6-2.4-1.5-3.2" />
      </svg>
    </span>
  );
}

function PillarIcon({ index }: { index: number }) {
  const common =
    "mt-0.5 h-7 w-7 shrink-0 rounded-full border border-[#C9A96E]/35 flex items-center justify-center text-[#C9A96E] sm:mt-0 sm:h-8 sm:w-8";
  if (index === 0) {
    return (
      <span className={common} aria-hidden>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5" />
        </svg>
      </span>
    );
  }
  if (index === 1) {
    return (
      <span className={common} aria-hidden>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      </span>
    );
  }
  if (index === 2) {
    return (
      <span className={common} aria-hidden>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      </span>
    );
  }
  return (
    <span className={common} aria-hidden>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
      </svg>
    </span>
  );
}

function RoleIcon() {
  return (
    <span className={`${gold}`} aria-hidden>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
      </svg>
    </span>
  );
}
