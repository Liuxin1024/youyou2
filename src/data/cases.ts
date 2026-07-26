export type CaseStrategyStep = {
  title: string;
  body: string;
};

export type CaseSystemItem = {
  title: string;
  body: string;
  /** 占位图，后续替换为本地资源 */
  image?: string;
};

export type CaseShowcaseBlock = {
  kind: "longform" | "motion-grid";
  title: string;
  body: string;
  callouts?: string[];
  /** 占位媒体，后续替换 */
  media?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  role: string;
  keywords: string[];
  summary: string;
  strategy: CaseStrategyStep[];
  system: CaseSystemItem[];
  showcase: CaseShowcaseBlock[];
  takeaway: string;
  /** 列表卡片用 */
  span: "md:col-span-7" | "md:col-span-5";
  aspect: "aspect-[16/10]" | "aspect-[4/5]";
};

/**
 * 核心案例数据。后续新案例只需往 CASES 追加一条。
 * 封面/配图目前多为 Unsplash 占位，见 docs/TODO.md。
 */
export const CASES: CaseStudy[] = [
  {
    slug: "ling-ling-jiu",
    title: "酃酃酒",
    subtitle: "Ling Ling Jiu · 现代东方米酒品牌视觉与全渠道内容重构",
    cover:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1400&q=80",
    role: "创意设计师（全权主导公众号内容传播、动态视觉及视频号视觉产出）",
    keywords: ["日系简约", "新东方美学", "社媒长图动效", "品牌视觉一致性"],
    summary:
      "酃酒拥有千年宫廷文化底蕴，但在面对年轻消费群体时，需要摆脱老气感。本次设计以「日系简约 + 现代东方」的视觉语汇，重新诠释古酒风雅，并通过动态组件与长图叙事，搭建多渠道统一的视觉传播体系。",
    strategy: [
      {
        title: "品牌痛点",
        body: "传统黄酒 / 米酒视觉过于沉闷，缺乏现代社媒（公众号 / 视频号）的呼吸感与传播力。",
      },
      {
        title: "视觉策略",
        body: "留白与留香：借鉴日系极简的「留白」艺术，结合传统米酒的微醺感，打造极具呼吸感的版式；提取琥珀酒色、清透米白与低饱和自然色，建立优雅、无负担的视觉基调。",
      },
      {
        title: "动态表达",
        body: "引入轻量化动态组件，让静态的长图与海报「活起来」，提升公众号用户的停留时长与阅读体验。",
      },
    ],
    system: [
      {
        title: "色彩与字体规范",
        body: "标准字排版层级（Headline / Subtitle / Body）与规范色块。",
      },
      {
        title: "社媒动态组件库",
        body: "动态图标、微光特效、流动液体元件、引导点击的 GIF 元素等。",
      },
      {
        title: "视频号视觉框架",
        body: "动态封面模板、片头片尾 Packaging、统一的字幕与画框规范。",
      },
    ],
    showcase: [
      {
        kind: "longform",
        title: "微信公众号故事化长图",
        body: "网页端以手机比例容器呈现长图叙事节奏；右侧说明设计亮点。动效与真图后续补齐。",
        callouts: [
          "动态组件应用：酒滴、微醺汽泡、渐隐文字，引导阅读节奏",
          "信息层级：将「千年贡酒」历史文化转化为轻量化图文板块",
        ],
        media: [],
      },
      {
        kind: "motion-grid",
        title: "视频号与社媒动态视觉",
        body: "2–3 个无声视频 / GIF 动画网格占位，展示动态封面与流媒体视觉统一性。",
        media: [],
      },
    ],
    takeaway:
      "通过将日系极简质感引入传统米酒品牌，结合公众号长图与动态组件的交互设计，为酃酃酒建立了具备高辨识度的全渠道视觉资产，实现了品牌文化向现代社媒语言的成功转化。",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  // 其余三个列表位仍用占位，暂无详情页
  {
    slug: "urban-architecture",
    title: "Urban Architecture",
    subtitle: "占位案例 · 待补充",
    cover:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    role: "待补充",
    keywords: ["占位"],
    summary: "此案例详情页尚未搭建，仅作列表占位。",
    strategy: [],
    system: [],
    showcase: [],
    takeaway: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "human-perspective",
    title: "Human Perspective",
    subtitle: "占位案例 · 待补充",
    cover:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    role: "待补充",
    keywords: ["占位"],
    summary: "此案例详情页尚未搭建，仅作列表占位。",
    strategy: [],
    system: [],
    showcase: [],
    takeaway: "",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    subtitle: "占位案例 · 待补充",
    cover:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    role: "待补充",
    keywords: ["占位"],
    summary: "此案例详情页尚未搭建，仅作列表占位。",
    strategy: [],
    system: [],
    showcase: [],
    takeaway: "",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

/** 已开放详情页的案例（strategy 非空视为可进入） */
export function getPublishedCases() {
  return CASES.filter((c) => c.strategy.length > 0);
}

export function getCaseBySlug(slug: string) {
  return CASES.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string) {
  const published = getPublishedCases();
  const index = published.findIndex((c) => c.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: published[index - 1] ?? null,
    next: published[index + 1] ?? null,
  };
}
