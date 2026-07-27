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

  return (
    <header className="bg-bg">
      {/* —— 顶部主视觉 —— */}
      <div className="relative min-h-[52vh] overflow-hidden md:min-h-[58vh]">
        <div className="absolute inset-0">
          <img
            src={study.cover}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
        </div>

        {/* 右侧水印大字 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[7rem] leading-none text-white/[0.04] md:block lg:text-[10rem]"
        >
          {study.title}
        </div>

        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-end px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-32 lg:px-16">
          <Link
            to="/#work"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-text-primary"
          >
            <span aria-hidden>←</span> 返回核心项目
          </Link>

          <p className={`mb-5 text-[11px] uppercase tracking-[0.35em] ${gold}`}>
            Case Study
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-text-primary md:text-7xl lg:text-8xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
            {study.title}
          </h1>
          <p
            className={`mt-2 text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl ${gold} [font-family:'Heiti_SC','STHeiti','SimHei','PingFang_SC','Microsoft_YaHei',sans-serif]`}
          >
            {overview.englishName}
          </p>
          <p className="mt-5 max-w-xl text-base text-text-primary/90 md:text-lg">
            {overview.positioning}
          </p>
        </div>
      </div>

      {/* —— 四关键词支柱（与下方内容同宽） —— */}
      <div className="mx-auto mt-6 max-w-[1200px] px-6 md:mt-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-stroke/80 bg-stroke/40 md:grid-cols-4">
          {overview.pillars.map((pillar, i) => (
            <div
              key={pillar}
              className="flex items-start gap-2.5 bg-bg px-3 py-4 sm:items-center sm:gap-3 sm:px-5 sm:py-5 md:px-6 md:py-6"
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
      </div>

      {/* —— 双栏：角色 / AI · 项目背景（等高拉伸） —— */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-5 px-6 py-8 md:grid-cols-12 md:gap-6 md:px-10 md:py-12 lg:px-16">
        {/* 左栏：整体拉满右栏高度，Role 吃掉多余空间 */}
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
              {overview.roleDuties.map((duty) => (
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
        </div>

        {/* 右栏 */}
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
            {overview.background.map((para) => {
              const text = typeof para === "string" ? para : para.text;
              const bold = typeof para === "object" && para.bold;
              return (
                <p
                  key={text.slice(0, 24)}
                  className={`text-sm leading-[1.85] md:text-[15px] ${
                    bold ? "font-semibold text-text-primary" : "text-muted"
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

              {/* 移动端横向滑动；桌面均匀铺开 */}
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
    </header>
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
