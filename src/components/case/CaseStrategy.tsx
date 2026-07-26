import type { CaseStrategyStep } from "../../data/cases";

type Props = {
  steps: CaseStrategyStep[];
};

export function CaseStrategy({ steps }: Props) {
  if (!steps.length) return null;

  return (
    <section className="border-b border-stroke py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Strategy
            </span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl">
            设计策略与视觉推导
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            为什么这么设计？审美与逻辑从哪来——用三步推导建立可信度。
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-stroke bg-surface/40 p-6 md:p-8"
            >
              <span className="mb-4 block font-display text-3xl italic text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-lg text-text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
