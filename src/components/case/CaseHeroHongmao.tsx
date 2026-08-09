import { Link } from "react-router-dom";
import type {
  CaseEditorialHero,
  CaseEditorialHeroPillar,
  CaseStudy,
} from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldSoft = "text-[#C9A96E]/85";
const heroBg = "#0B1E19";
const barBg = "#E6E2D9";

type Props = {
  study: CaseStudy;
};

export function CaseHeroHongmao({ study }: Props) {
  const hero = study.editorialHero;
  if (!hero) return null;

  return (
    <header className="text-text-primary" style={{ backgroundColor: heroBg }}>
      {/* 上半 + 概览条合计正好一屏 */}
      <div className="relative flex h-[100svh] flex-col">
        {/* 上半主视觉：左文案 / 右图（图高 = 上半屏，靠右） */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-bg">
          {/* 右侧主图：高度铺满上半区，贴右 */}
          <div
            className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[64%]"
            aria-hidden
          >
            {hero.cover ? (
              <img
                src={hero.cover}
                alt=""
                className="h-full w-full object-cover object-[70%_40%] md:object-right md:object-[center_42%]"
              />
            ) : (
              <HeroPlaceholder />
            )}
            {/* 图片左缘黑色渐变，衔接到左侧底色 */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg from-[0%] via-bg/75 via-[18%] to-transparent to-[42%] md:from-bg md:via-bg/60 md:via-[12%] md:to-transparent md:to-[38%]" />
            {/* 底部轻阴影，衔接概览条 */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent to-[40%]" />
          </div>

          {/* 左栏文案 */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col px-6 pb-8 pt-14 md:px-10 md:pb-10 md:pt-14 lg:px-16 lg:pt-16">
            <div className="flex max-w-xl flex-col justify-start overflow-y-auto md:max-w-[24rem] lg:max-w-[28rem]">
              <Link
                to="/#work"
                className="mb-5 inline-flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-white md:mb-7"
              >
                <span aria-hidden>←</span> 返回核心项目
              </Link>

              <p
                className={`mb-3 text-[11px] uppercase tracking-[0.35em] ${gold} md:mb-4`}
              >
                Case Study
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                {hero.title}
              </h1>
              <p
                className={`mt-2 text-xl font-bold tracking-wide md:text-2xl lg:text-3xl ${gold} [font-family:'Heiti_SC','STHeiti','SimHei','PingFang_SC','Microsoft_YaHei',sans-serif]`}
              >
                {hero.subtitleZh}
              </p>
              <p
                className={`mt-2 max-w-xl text-[10px] uppercase tracking-[0.22em] ${goldSoft} md:mt-3 md:text-[11px]`}
              >
                {hero.subtitleEn}
              </p>

              <p className="mt-4 max-w-md text-sm leading-[1.85] text-white/75 md:mt-5 md:text-[15px]">
                {hero.body}
              </p>

              <div className="mt-5 h-px w-full max-w-sm bg-gradient-to-r from-[#C9A96E]/70 to-transparent md:mt-6" />

              <div
                className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] tracking-[0.12em] ${goldSoft} md:text-xs`}
              >
                <span>{hero.period}</span>
                <span className="hidden text-[#C9A96E]/40 sm:inline" aria-hidden>
                  |
                </span>
                <span>{hero.roleLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <OverviewBar hero={hero} />
      </div>
    </header>
  );
}

function OverviewBar({ hero }: { hero: CaseEditorialHero }) {
  return (
    <div
      className="relative z-20 shrink-0 border-t border-black/5"
      style={{ backgroundColor: barBg }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-6 py-5 sm:grid-cols-2 md:grid-cols-[minmax(9rem,11rem)_repeat(4,minmax(0,1fr))] md:items-start md:gap-4 md:px-10 md:py-6 lg:gap-6 lg:px-16">
        <div className="sm:col-span-2 md:col-span-1 md:pt-1">
          <p className="text-sm font-medium tracking-wide text-[#2A2A2A]">
            {hero.overviewTitleZh}
            <span className="mx-1.5 text-[#2A2A2A]/35">|</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#2A2A2A]/55">
              {hero.overviewTitleEn}
            </span>
          </p>
        </div>

        {hero.pillars.map((pillar) => (
          <PillarItem key={pillar.titleEn} pillar={pillar} />
        ))}
      </div>
    </div>
  );
}

function PillarItem({ pillar }: { pillar: CaseEditorialHeroPillar }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/55 text-[#8A7344]"
        aria-hidden
      >
        <PillarIcon id={pillar.icon} />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug text-[#1F1F1F]">
          {pillar.titleZh}{" "}
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#1F1F1F]/55">
            {pillar.titleEn}
          </span>
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-[#4A4A4A] md:text-xs">
          {pillar.body}
        </p>
      </div>
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0B1E19]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#1a4a3a_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_70%,#0f332a_0%,transparent_45%)]" />
      <div
        className="absolute right-[8%] top-[18%] select-none font-display text-[clamp(4rem,14vw,10rem)] leading-none tracking-[0.08em] text-white/[0.07] [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
      >
        东方
      </div>
    </div>
  );
}

function PillarIcon({ id }: { id: CaseEditorialHeroPillar["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "pen") {
    return (
      <svg {...common}>
        <path d="M12 19V11" />
        <path d="M8 19h8" />
        <path d="M14.5 4.5l3 3L10 15H7v-3L14.5 4.5z" />
      </svg>
    );
  }

  if (id === "cube") {
    return (
      <svg {...common}>
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M12 22V12" />
        <path d="M21 7l-9 5-9-5" />
      </svg>
    );
  }

  if (id === "tablet") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
