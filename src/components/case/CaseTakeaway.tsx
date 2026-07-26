type Props = {
  text: string;
};

export function CaseTakeaway({ text }: Props) {
  if (!text) return null;

  return (
    <section className="border-b border-stroke py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Takeaway
            </span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl">设计复盘</h2>
        </div>
        <blockquote className="max-w-3xl border-l border-stroke pl-6 font-display text-xl italic leading-relaxed text-text-primary/90 md:pl-8 md:text-2xl">
          {text}
        </blockquote>
      </div>
    </section>
  );
}
