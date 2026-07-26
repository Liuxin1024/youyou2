import type { CaseSystemItem } from "../../data/cases";

type Props = {
  items: CaseSystemItem[];
};

export function CaseSystem({ items }: Props) {
  if (!items.length) return null;

  return (
    <section className="border-b border-stroke py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Visual System
            </span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl">
            视觉规范与组件库
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            规范与可复用资产——体现系统性，而非单张海报。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-stroke bg-surface/40"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-stroke/40 text-xs text-muted">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "视觉规范占位 · 待补图"
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-base text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
