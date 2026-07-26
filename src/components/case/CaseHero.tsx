import { Link } from "react-router-dom";
import type { CaseStudy } from "../../data/cases";

type Props = {
  study: CaseStudy;
};

export function CaseHero({ study }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-stroke">
      <div className="absolute inset-0">
        <img
          src={study.cover}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:px-16">
        <Link
          to="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text-primary"
        >
          <span aria-hidden>←</span> 返回核心项目
        </Link>

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
          Case Study
        </p>
        <h1 className="mb-3 font-display text-4xl italic text-text-primary md:text-6xl lg:text-7xl">
          {study.title}
        </h1>
        <p className="mb-8 max-w-2xl text-base text-muted md:text-lg">
          {study.subtitle}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {study.keywords.map((k) => (
            <span
              key={k}
              className="rounded-full border border-stroke bg-surface/60 px-3 py-1 text-xs text-muted"
            >
              {k}
            </span>
          ))}
        </div>

        <p className="mb-2 text-xs tracking-[0.2em] text-muted">角色</p>
        <p className="mb-8 max-w-2xl text-sm text-text-primary md:text-base">
          {study.role}
        </p>

        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {study.summary}
        </p>
      </div>
    </header>
  );
}
