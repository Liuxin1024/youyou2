import type {
  CaseContextCompare,
  CaseContextIssue,
  CaseProjectContext as CaseProjectContextData,
} from "../../data/cases";

const gold = "text-[#C9A96E]";

const cardGradient =
  "linear-gradient(135deg, rgba(201, 169, 110, 0.22) 0%, rgba(42, 34, 22, 0.92) 38%, rgba(18, 16, 12, 0.98) 72%, rgba(10, 10, 10, 1) 100%)";

type Props = {
  data: CaseProjectContextData;
};

export function CaseProjectContext({ data }: Props) {
  const heroImage = data.images?.[0];
  const { challenge } = data;

  return (
    <section className="border-b border-stroke bg-bg pb-5 pt-6 md:pb-5 md:pt-8 lg:pb-5 lg:pt-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* —— 项目背景 —— */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[2fr_3fr] lg:gap-8 xl:gap-10">
          <div className="flex min-h-[400px] flex-col">
            <p
              className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}
            >
              {data.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-text-primary md:mb-5 md:text-4xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
              {data.title}
            </h2>
            <div
              aria-hidden
              className="mb-5 h-px w-full max-w-md bg-gradient-to-r from-[#C9A96E]/70 to-transparent"
            />
            <p className={`mb-4 text-[30px] leading-snug ${gold}`}>
              {data.subtitle}
            </p>
            <div className="mb-6 flex flex-col gap-3">
              {data.intro.map((para) => (
                <p
                  key={para.slice(0, 20)}
                  className="text-sm leading-[1.85] text-muted md:text-[15px]"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:gap-3.5">
              {data.issues.map((issue) => (
                <IssueCard key={issue.title} issue={issue} />
              ))}
            </div>
          </div>

          {/* 右侧随左侧等高；至少 400px，多出的从上方裁 */}
          <div className="min-h-[400px] overflow-hidden rounded-xl">
            {heroImage ? (
              <img
                src={heroImage}
                alt=""
                className="h-full w-full object-cover object-[center_bottom]"
              />
            ) : (
              <div
                className="flex h-full min-h-[400px] items-center justify-center border border-dashed border-white/10 bg-black/35"
                aria-hidden
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Image
                </span>
              </div>
            )}
          </div>
        </div>

        {/* —— 设计挑战 —— */}
        <div className="mt-5 grid grid-cols-1 items-stretch gap-6 border-t border-stroke/80 pt-5 md:mt-5 md:pt-5 lg:grid-cols-[2fr_3fr] lg:gap-8 xl:gap-10">
          <div className="flex min-h-[280px] flex-col">
            <div className="pt-10 md:pt-12">
              <p className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}>
                {challenge.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-text-primary md:text-3xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
                {challenge.title}
              </h3>
            </div>
            <div className="flex flex-1 items-center">
              <ChallengeBody text={challenge.body} />
            </div>
          </div>

          {challenge.before && challenge.after ? (
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
              <CompareCard data={challenge.before} />
              <CompareCard data={challenge.after} />
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[38%] z-[1] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C9A96E] text-white shadow-lg sm:flex"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          ) : (
            <div className="min-h-[280px] overflow-hidden rounded-xl">
              {challenge.image ? (
                <img
                  src={challenge.image}
                  alt=""
                  className="h-full w-full object-cover object-[center_bottom]"
                />
              ) : (
                <div
                  className="flex h-full min-h-[280px] items-center justify-center border border-dashed border-white/10 bg-black/35"
                  aria-hidden
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                    Image
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ChallengeBody({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <p className={`max-w-md text-xl leading-[1.75] md:text-2xl md:leading-[1.7] ${gold}`}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

function IssueCard({ issue }: { issue: CaseContextIssue }) {
  return (
    <div
      className="flex h-full flex-col items-center gap-2.5 rounded-xl px-3 py-3.5 text-center sm:px-3.5 sm:py-4"
      style={{ background: cardGradient }}
    >
      <IssueIcon icon={issue.icon} />
      <div>
        <p className="text-[13px] leading-snug text-text-primary md:text-sm">
          {issue.title}
        </p>
        {issue.subtitle && (
          <p className="mt-1 text-[12px] leading-snug text-muted md:text-[13px]">
            {issue.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function IssueIcon({ icon }: { icon?: CaseContextIssue["icon"] }) {
  const common =
    "flex h-10 w-10 shrink-0 items-center justify-center text-[#C9A96E]";
  if (icon === "grid") {
    return (
      <span className={common} aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      </span>
    );
  }
  if (icon === "drop") {
    return (
      <span className={common} aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M12 3c3.5 4.5 6 7.8 6 11a6 6 0 11-12 0c0-3.2 2.5-6.5 6-11z" />
        </svg>
      </span>
    );
  }
  return (
    <span className={common} aria-hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 8h16M4 12h16M4 16h10" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    </span>
  );
}

function CompareCard({ data }: { data: CaseContextCompare }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl"
      style={{ background: cardGradient }}
    >
      <div className="aspect-[4/5] overflow-hidden bg-black/25">
        {data.image ? (
          <img
            src={data.image}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center border border-dashed border-white/10"
            aria-hidden
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Image
            </span>
          </div>
        )}
      </div>

      <ul className="mt-3.5 flex flex-col gap-1.5 px-3.5 pb-4 md:px-4 md:pb-5">
        {data.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-[12px] leading-snug text-muted md:text-[13px]"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A96E]" />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
