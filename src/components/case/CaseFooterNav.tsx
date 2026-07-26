import { Link } from "react-router-dom";
import type { CaseStudy } from "../../data/cases";

type Props = {
  prev: CaseStudy | null;
  next: CaseStudy | null;
};

export function CaseFooterNav({ prev, next }: Props) {
  return (
    <footer className="py-12 md:py-16">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
        <Link
          to="/#work"
          className="text-sm text-muted transition-colors hover:text-text-primary"
        >
          ← 返回核心项目
        </Link>

        <div className="flex flex-wrap gap-4">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="text-sm text-muted transition-colors hover:text-text-primary"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span className="text-sm text-muted/40">已是第一个案例</span>
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="text-sm text-muted transition-colors hover:text-text-primary"
            >
              {next.title} →
            </Link>
          ) : (
            <span className="text-sm text-muted/40">更多案例待补充</span>
          )}
        </div>
      </div>
    </footer>
  );
}
