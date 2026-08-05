import type { CaseRoleScope, CaseRoleScopeItem } from "../../data/cases";

const gold = "text-[#C9A96E]";
const goldMuted = "text-[#C9A96E]/80";
const goldBorder = "border-[#C9A96E]/25";

type Props = {
  data: CaseRoleScope;
};

export function CaseRoleScope({ data }: Props) {
  return (
    <section className="border-b border-stroke bg-bg pb-6 pt-6 md:pb-8 md:pt-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        {/* —— 我的角色 —— */}
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-12 md:gap-8 lg:gap-10">
          <div className="md:col-span-5 lg:col-span-5">
            <p
              className={`mb-2 text-[11px] uppercase tracking-[0.35em] ${gold}`}
            >
              {data.eyebrow}
            </p>
            <h2 className="mb-3 text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl [font-family:'Songti_SC','STSong','SimSun','Noto_Serif_SC',serif]">
              {data.title}
            </h2>
            <p className="max-w-md text-sm leading-[1.75] text-muted md:text-[15px]">
              {data.description}
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-7">
            <MediaSlot
              src={data.image}
              aspect="aspect-[2/1] md:aspect-[21/9]"
              objectPosition="object-[center_22%]"
            />
          </div>
        </div>

        {/* —— 职责范围 —— */}
        <div className="mt-4 md:mt-5">
          <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 md:mb-6">
            <span className={`${gold} text-sm`} aria-hidden>
              ◆
            </span>
            <h3 className="text-xl text-text-primary md:text-2xl">
              {data.responsibilitiesTitle}
            </h3>
            <span
              className={`text-[11px] uppercase tracking-[0.28em] ${goldMuted}`}
            >
              {data.responsibilitiesEyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2.5 xl:gap-3">
            {data.items.map((item) => (
              <ResponsibilityCard key={item.index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsibilityCard({ item }: { item: CaseRoleScopeItem }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border ${goldBorder}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(201, 169, 110, 0.22) 0%, rgba(42, 34, 22, 0.92) 38%, rgba(18, 16, 12, 0.98) 72%, rgba(10, 10, 10, 1) 100%)",
      }}
    >
      <div className="flex items-start gap-3 px-4 pt-4 md:gap-3.5 md:px-5 md:pt-5">
        <span
          className={`shrink-0 pt-0.5 font-display text-3xl leading-none tabular-nums md:text-4xl ${gold}`}
          aria-hidden
        >
          {item.index}
        </span>
        <div className="min-w-0 pt-1">
          <h4
            className={`truncate text-[10px] font-medium uppercase tracking-[0.12em] whitespace-nowrap sm:text-[11px] ${gold}`}
            title={item.englishTitle}
          >
            {item.englishTitle}
          </h4>
          <p className="mt-1 text-sm text-text-primary md:text-[15px]">
            {item.chineseTitle}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <MediaSlot
          src={item.image}
          aspect="aspect-[1193/645]"
          fit="contain"
          rounded={false}
        />
      </div>

      <ul className="mt-4 flex flex-1 flex-col gap-2 px-4 pb-5 md:px-5 md:pb-6">
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-[12px] leading-snug text-muted md:text-[13px]"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A96E]" />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

function MediaSlot({
  src,
  aspect,
  objectPosition = "object-center",
  rounded = true,
  fit = "cover",
}: {
  src?: string;
  aspect: string;
  objectPosition?: string;
  /** false：左右贴齐父级（职责卡图片） */
  rounded?: boolean;
  fit?: "cover" | "contain";
}) {
  const radius = rounded ? "rounded-xl" : "rounded-none";
  const objectFit = fit === "contain" ? "object-contain" : "object-cover";

  if (src) {
    return (
      <div className={`${aspect} overflow-hidden ${radius} bg-black/30`}>
        <img
          src={src}
          alt=""
          className={`h-full w-full ${objectFit} ${objectPosition}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspect} flex items-center justify-center overflow-hidden border border-dashed border-white/10 bg-black/35 ${radius}`}
      aria-hidden
    >
      <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
        Image
      </span>
    </div>
  );
}
