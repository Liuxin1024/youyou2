import type { CaseShowcaseBlock } from "../../data/cases";

type Props = {
  blocks: CaseShowcaseBlock[];
};

export function CaseShowcase({ blocks }: Props) {
  if (!blocks.length) return null;

  return (
    <section className="border-b border-stroke py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Execution
            </span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl">
            核心落地作品展示
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            动效、长图与视频素材位已预留，具体媒体后续补齐。
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {blocks.map((block) =>
            block.kind === "longform" ? (
              <LongformBlock key={block.title} block={block} />
            ) : (
              <MotionGridBlock key={block.title} block={block} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function LongformBlock({ block }: { block: CaseShowcaseBlock }) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-5">
        <div className="mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-[2rem] border border-stroke bg-surface/50">
          <div className="flex h-full items-center justify-center px-6 text-center text-xs text-muted">
            手机长图 / Mockup 占位
            <br />
            滚动叙事后续接入
          </div>
        </div>
      </div>
      <div className="md:col-span-7 md:pt-4">
        <h3 className="mb-3 text-2xl text-text-primary">{block.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted">{block.body}</p>
        {block.callouts && block.callouts.length > 0 && (
          <ul className="flex flex-col gap-3">
            {block.callouts.map((c) => (
              <li
                key={c}
                className="rounded-2xl border border-stroke bg-surface/30 px-4 py-3 text-sm text-muted"
              >
                <span className="mr-2 text-text-primary">·</span>
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function MotionGridBlock({ block }: { block: CaseShowcaseBlock }) {
  return (
    <div>
      <h3 className="mb-3 text-2xl text-text-primary">{block.title}</h3>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
        {block.body}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex aspect-[9/16] items-center justify-center rounded-3xl border border-stroke bg-surface/40 text-xs text-muted"
          >
            视频 / GIF 占位 {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
