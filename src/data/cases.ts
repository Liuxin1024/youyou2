export type StrategyIconId =
  | "layers"
  | "users"
  | "device"
  | "leaf"
  | "palette"
  | "grid"
  | "play"
  | "layout"
  | "eye"
  | "spark"
  | "image"
  | "cube"
  | "chart"
  | "ai"
  | "explore"
  | "edit"
  | "check";

export type CaseStrategyPoint = {
  label: string;
  icon: StrategyIconId;
};

export type CaseStrategyApplication = {
  title: string;
  body: string;
  icon: StrategyIconId;
};

export type CaseStrategyWorkflowStep = {
  label: string;
  icon: StrategyIconId;
};

export type CaseStrategyStep = {
  index: string;
  title: string;
  subtitle: string;
  /** 正文段落，文档为准 */
  paragraphs: string[];
  /** 「通过：」下列点 */
  bullets?: string[];
  /** 图标要点文案 */
  points?: CaseStrategyPoint[];
  /** AI 应用方向（含说明） */
  applications?: CaseStrategyApplication[];
  /** AI 流程节点 */
  workflow?: CaseStrategyWorkflowStep[];
  /** 右侧配图 */
  media?: string;
  /** object-position，如 center / 60% 40% */
  mediaPosition?: string;
  /** cover 裁切铺满；contain 尽量完整展示（宽图推荐） */
  mediaFit?: "cover" | "contain";
  /** 无 media 时的占位说明 */
  mediaHint?: string;
};

export type CaseShowcaseProcessStep = {
  index: string;
  label: string;
  /** 复用策略区 icon id，或本地路径 */
  icon: "layers" | "leaf" | "device";
};

export type CaseShowcaseEvolution = {
  eyebrow: string;
  title: string;
  subtitle: string;
  period?: string;
  periodNote?: string;
  /** 区块导语，文档为准 */
  intro: string[];
  before: {
    label: string;
    title: string;
    body: string;
    points: string[];
    /** 手机框内长图，后续补 */
    phone?: string;
  };
  process: {
    label: string;
    title: string;
    thesis: string;
    steps: CaseShowcaseProcessStep[];
  };
  after: {
    label: string;
    title: string;
    body: string;
    points: string[];
    /** 手机框内长图，后续补 */
    phone?: string;
  };
};

export type CaseShowcaseApplicationBlock = {
  index: string;
  title: string;
  englishTitle: string;
  body?: string;
  /** 底部说明条 */
  caption: string;
  kind: "wechat" | "video" | "marketing";
  /** 单图铺满（有则不再用手机+长图条） */
  cover?: string;
  /** 公众号主手机长图 */
  phone?: string;
  /** 旁侧长图条数 / 素材 */
  strips?: string[];
  stripCount?: number;
  /** 视频号 / 物料缩略图 */
  thumbs?: string[];
  thumbCount?: number;
};

export type CaseShowcaseApplication = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  blocks: CaseShowcaseApplicationBlock[];
};

export type CaseShowcaseValueItem = {
  title: string;
  body: string;
  icon: "brand" | "read" | "culture" | "spread";
};

export type CaseShowcaseValue = {
  eyebrow: string;
  title: string;
  items: CaseShowcaseValueItem[];
};

/** 落地展示 · AI辅助视觉创意探索 */
export type CaseShowcaseAi = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  /** 右上角品牌标语，如「酿 · 东方米酒」 */
  brandMark?: string;
  /** 品牌标语上方英文，如 LINGLINGJIU */
  brandMarkEn?: string;
  concept: {
    index: string;
    title: string;
    englishTitle: string;
    body: string;
    keywordsLabel: string;
    keywords: string[];
    /** 有则用图；空字符串 / 缺省用占位。默认 6 格 */
    images?: string[];
    imageCount?: number;
  };
  workflow: {
    index: string;
    title: string;
    englishTitle: string;
    body?: string;
    steps: { label: string; body?: string }[];
  };
  application: {
    index: string;
    title: string;
    englishTitle: string;
    body: string;
    /** 单张竖图；空则占位 */
    image?: string;
  };
  tools: {
    eyebrow: string;
    title: string;
    items: string[];
    note?: string;
  };
  quote: string;
  /** 金句区背景图 */
  quoteBackground?: string;
};

/** 项目总结收尾屏（设计图上+下；中间「我的设计方法」不做） */
export type CaseProjectSummary = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  brandMarkEn: string;
  brandMark: string;
  backgroundImage: string;
  closing: {
    logo: string;
    logoEn: string;
    line1: string;
    line2: string;
    line3: string;
    /** 后期补山水底图；缺省为纯深色 */
    backgroundImage?: string;
  };
};

/** @deprecated 旧落地块结构 */
export type CaseShowcaseBlock = {
  kind: "longform" | "motion-grid";
  title: string;
  body: string;
  callouts?: string[];
  media?: string[];
};

/** 详情页第一屏（概览区）——文案以文档为准 */
export type CaseMilestone = {
  date: string;
  label: string;
};

export type CaseOverview = {
  englishName: string;
  /** 项目定位 / 副标题 */
  positioning: string;
  /** 四个关键词支柱 */
  pillars: string[];
  roleTitle: string;
  roleDesc: string;
  roleDuties: string[];
  /** 项目背景段落；可标 bold */
  background: Array<string | { text: string; bold?: boolean }>;
  aiTools: string[];
  /** 品牌大事件时间线 */
  milestones?: CaseMilestone[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  /** 第一屏右侧水印 / logo */
  watermark?: string;
  role: string;
  keywords: string[];
  summary: string;
  /** 第一屏完整结构；已发布案例必填 */
  overview?: CaseOverview;
  /** 策略屏导语 */
  strategySummary?: string;
  strategy: CaseStrategyStep[];
  /** 落地展示 · 品牌数字视觉升级（设计图上半） */
  showcaseEvolution?: CaseShowcaseEvolution;
  /** 落地展示 · 数字内容应用（设计图下半） */
  showcaseApplication?: CaseShowcaseApplication;
  /** 落地展示 · 设计价值 */
  showcaseValue?: CaseShowcaseValue;
  /** 落地展示 · AI辅助视觉创意探索 */
  showcaseAi?: CaseShowcaseAi;
  /** 有则渲染 CaseSummary，替代通用 takeaway 复盘块 */
  projectSummary?: CaseProjectSummary;
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
    subtitle: "东方米酒品牌视觉体系建设与数字内容创新",
    cover: "/50795.PNG",
    watermark: "/case/ling-ling-jiu-mark.png",
    role: "创意设计师",
    keywords: [
      "东方文化视觉转译",
      "品牌视觉体系建设",
      "数字内容传播设计",
      "AI辅助视觉创作",
    ],
    summary:
      "本案例以品牌视觉体系建设、新媒体内容传播及数字视觉表达为核心，呈现传统东方酒文化在现代消费语境下的视觉探索。",
    overview: {
      englishName: "LingLingJiu",
      positioning: "东方米酒品牌视觉体系建设与数字内容创新",
      pillars: [
        "东方文化视觉转译",
        "品牌视觉体系建设",
        "数字内容传播设计",
        "AI辅助视觉创作",
      ],
      roleTitle: "创意设计师",
      roleDesc:
        "负责酃酃酒品牌视觉内容体系建设，围绕品牌定位进行视觉语言探索与数字传播设计。",
      roleDuties: [
        "品牌视觉延展设计",
        "新媒体内容视觉输出",
        "动态视觉设计",
        "视频内容视觉包装",
        "AI辅助视觉创作探索",
      ],
      background: [
        "酃酃酒源于拥有千年历史的酃酒文化，以东方米酒为核心定位，探索传统酿造文化与现代消费趋势之间的新连接。",
        "随着年轻消费群体与数字传播渠道的发展，品牌需要建立更符合当代审美的视觉表达方式，将传统文化资产转化为年轻化、数字化的品牌内容。",
        {
          text: "本项目围绕品牌视觉体系、新媒体传播内容及动态视觉表达展开设计，通过东方文化符号与现代视觉语言结合，构建适用于多渠道传播的品牌视觉体验。",
          bold: true,
        },
      ],
      aiTools: ["Midjourney", "即梦", "Chat GPT", "可灵"],
      milestones: [
        { date: "2022.05.18", label: "品牌创立" },
        { date: "2023.06.16", label: "全球首发上市" },
        { date: "2023.11", label: "全球独立站上线" },
        { date: "2024.05", label: "亮相 ProWine Singapore" },
        { date: "2025.01", label: "「十六度」上新 获高新技术企业认证" },
        { date: "2026.01", label: "荣膺「2025年度消费创新引领奖」" },
      ],
    },
    strategySummary:
      "从品牌文化、产品升级与数字传播场景出发，探索传统米酒品牌年轻化视觉表达路径。",
    strategy: [
      {
        index: "01",
        title: "品牌挑战",
        subtitle: "传统文化如何适应新的消费场景",
        paragraphs: [
          "酃酃酒承载千年酃酒文化，同时面向年轻消费市场进行品牌升级。",
          "在保持东方米酒文化基因的基础上，品牌需要建立更符合数字传播环境的视觉表达方式，让传统文化内容更容易被年轻用户理解与接受。",
        ],
        points: [
          { label: "传统文化底蕴深厚", icon: "layers" },
          { label: "年轻消费群体崛起", icon: "users" },
          { label: "数字传播环境变化", icon: "device" },
        ],
        media: "/50946.JPG",
        mediaPosition: "center center",
      },
      {
        index: "02",
        title: "视觉策略",
        subtitle: "东方文化 × 现代审美 × 内容传播",
        // 第一段引言；有 bullets 时其余段落排在「通过」列表之后（与文档一致）
        paragraphs: [
          "围绕酃酃酒「东方米酒」的品牌属性，从传统酿造文化中提取自然、克制、雅致的视觉感受。",
          "建立适用于品牌内容传播的视觉语言。",
          "同时结合不同传播场景，对视觉元素进行灵活应用，提高品牌内容输出的一致性。",
        ],
        bullets: [
          "留白式版面结构",
          "低饱和色彩体系",
          "东方元素视觉转译",
          "品牌视觉模块化延展",
        ],
        points: [
          { label: "东方美学提取", icon: "leaf" },
          { label: "低饱和色彩体系", icon: "palette" },
          { label: "视觉模块化延展", icon: "grid" },
        ],
        media: "/50947.JPG",
        mediaPosition: "center center",
      },
      {
        index: "03",
        title: "数字内容表达",
        subtitle: "从静态视觉到动态传播",
        paragraphs: [
          "针对公众号、视频号等数字内容渠道，对品牌视觉资产进行动态化延展。",
          "让品牌故事以更具互动性的方式呈现，提高数字内容的阅读体验与传播效率。",
        ],
        bullets: [
          "轻量级动态效果",
          "内容节奏设计",
          "图文结构优化",
          "视觉信息层级整理",
        ],
        points: [
          { label: "轻量级动效设计", icon: "play" },
          { label: "内容结构优化", icon: "layout" },
          { label: "提升阅读体验", icon: "eye" },
        ],
        media: "/50955.PNG",
        mediaPosition: "center center",
        mediaFit: "contain",
      },
      {
        index: "04",
        title: "AI辅助创意探索",
        subtitle: "AI赋能视觉创意流程",
        paragraphs: [
          "在品牌内容设计过程中，引入 AI 工具辅助视觉探索，将人工设计经验与智能生成能力结合。",
        ],
        applications: [
          {
            title: "概念方向探索",
            body: "通过 AI 快速生成不同视觉方向，辅助前期创意发散。",
            icon: "spark",
          },
          {
            title: "场景氛围构建",
            body: "利用 AI 探索产品场景、品牌氛围及视觉情绪表达。",
            icon: "image",
          },
          {
            title: "视觉元素延展",
            body: "辅助生成品牌内容中的视觉素材，提高设计迭代效率。",
            icon: "cube",
          },
          {
            title: "动态内容测试",
            body: "结合 AI 视频工具进行视觉动态效果探索。",
            icon: "chart",
          },
        ],
        workflow: [
          { label: "AI生成概念", icon: "ai" },
          { label: "多方案探索", icon: "explore" },
          { label: "人工优化", icon: "edit" },
          { label: "落地应用", icon: "check" },
        ],
      },
    ],
    showcaseEvolution: {
      eyebrow: "DIGITAL VISUAL UPGRADE",
      title: "品牌数字视觉升级",
      subtitle: "从信息展示到沉浸式文化体验的升级",
      period: "2025.07 — Present",
      periodNote: "新媒体视觉设计",
      intro: [
        "针对品牌公众号内容传播需求，对原有品牌文化内容进行视觉优化。",
        "通过东方文化视觉转译、信息层级调整以及内容叙事优化，将传统文化内容转化为更符合数字阅读场景的品牌体验。",
      ],
      before: {
        label: "BEFORE",
        title: "原视觉状态",
        body: "原有内容以品牌文化介绍和产品信息传递为核心，通过大量文字与历史资料建立品牌认知。",
        points: [
          "信息密度较高，阅读节奏较弱",
          "视觉元素缺少统一的品牌语言",
          "文化内容与产品体验之间连接不足",
          "用户情绪感受和浏览停留空间有限",
        ],
        phone: "/yuan.jpg",
      },
      process: {
        label: "DESIGN THINKING",
        title: "优化思路",
        thesis: "从「信息展示」转向「品牌叙事」",
        steps: [
          { index: "01", label: "内容结构优化", icon: "layers" },
          { index: "02", label: "东方视觉语言建立", icon: "leaf" },
          { index: "03", label: "数字阅读体验优化", icon: "device" },
        ],
      },
      after: {
        label: "AFTER",
        title: "优化后视觉表达",
        body: "通过重新设计内容结构与视觉语言，将传统酿酒文化转化为更具现代传播力的数字内容。",
        points: [
          "建立统一的品牌视觉调性",
          "提升文化内容的阅读吸引力",
          "强化东方米酒的品牌认知",
          "增强公众号内容传播表现力",
        ],
        phone: "/xian.jpg",
      },
    },
    showcaseApplication: {
      eyebrow: "CONTENT APPLICATION",
      title: "数字内容应用",
      subtitle: "多场景视觉落地，持续输出品牌价值",
      intro: "以实际传播场景为基础，持续输出品牌数字内容视觉资产。",
      blocks: [
        {
          index: "01",
          title: "微信公众号内容设计",
          englishTitle: "WeChat Official Account Design",
          body: "围绕品牌故事、产品内容及营销节点进行视觉设计。",
          caption: "建立统一视觉风格，提高阅读体验与品牌认知",
          kind: "wechat",
          cover: "/01.png",
        },
        {
          index: "02",
          title: "电商详情页设计",
          englishTitle: "E-commerce Detail Page Design",
          body: "围绕品牌故事、产品内容及营销节点进行视觉设计。",
          caption: "建立统一视觉风格，提高阅读体验与品牌认知",
          kind: "wechat",
          cover: "/02.png",
        },
        {
          index: "03",
          title: "视频号视觉包装",
          englishTitle: "Short Video Visual Design",
          body: "建立品牌视频号内容视觉模板，并完成多期达人探店内容输出。",
          caption: "统一视觉语言，强化品牌识别与系列感",
          kind: "video",
          cover: "/03.png",
        },
        {
          index: "04",
          title: "品牌传播物料",
          englishTitle: "Marketing Visual Assets",
          body: "覆盖产品推广、节日营销、品牌活动与社交媒体传播。",
          caption: "多场景延展应用，提升品牌传播效率",
          kind: "marketing",
          cover: "/04.png",
        },
      ],
    },
    showcaseValue: {
      eyebrow: "DESIGN VALUE",
      title: "设计价值",
      items: [
        {
          title: "品牌调性统一",
          body: "建立东方米酒视觉识别体系",
          icon: "brand",
        },
        {
          title: "阅读体验提升",
          body: "优化信息层级与视觉节奏",
          icon: "read",
        },
        {
          title: "文化价值传递",
          body: "将传统文化转化为现代视觉语言",
          icon: "culture",
        },
        {
          title: "传播效率提升",
          body: "提高内容吸引力与用户互动",
          icon: "spread",
        },
      ],
    },
    showcaseAi: {
      eyebrow: "AI-ENHANCED DESIGN PROCESS",
      title: "AI辅助视觉创意探索",
      subtitle: "AI赋能视觉创意流程",
      intro:
        "在品牌视觉设计过程中，引入AI工具辅助创意探索与视觉验证。通过快速生成不同视觉方向，提高概念探索效率，并结合设计判断完成视觉优化与商业化表达。",
      brandMarkEn: "LINGLINGJIU",
      brandMark: "酿 · 东方米酒",
      concept: {
        index: "01",
        title: "概念探索",
        englishTitle: "CONCEPT EXPLORATION",
        body: "从抽象想法到视觉方向验证。利用AI快速探索不同视觉语言，辅助建立品牌视觉方向。",
        keywordsLabel: "KEYWORDS 关键词",
        keywords: ["米酒文化", "年轻消费场景", "光影氛围", "情绪化表达"],
        images: ["/05.png"],
      },
      workflow: {
        index: "02",
        title: "创意流程",
        englishTitle: "AI WORKFLOW",
        body: "通过AI工具提高视觉探索效率，同时结合人工设计判断完成方案深化。",
        steps: [
          { label: "品牌需求分析", body: "梳理品牌定位与传播目标" },
          { label: "关键词提炼", body: "提炼视觉方向与情绪词" },
          { label: "AI视觉探索", body: "多方向快速生成与验证" },
          { label: "方案筛选优化", body: "结合设计判断收敛方向" },
          { label: "设计深化落地", body: "人工深化并商业化表达" },
        ],
      },
      application: {
        index: "03",
        title: "应用延展",
        englishTitle: "VISUAL APPLICATION",
        body: "将AI探索转化为品牌视觉资产。",
        image: "/06.png",
      },
      tools: {
        eyebrow: "AI TOOLS",
        title: "使用工具",
        items: ["即梦", "ChatGPT", "Photoshop", "Illustrator"],
      },
      quote: "AI是创意的放大器，而设计师的思考，决定了最终的价值",
      quoteBackground: "/09.PNG",
    },
    projectSummary: {
      eyebrow: "07 PROJECT SUMMARY",
      title: "项目总结",
      subtitle: "从品牌内容到数字体验的视觉升级",
      body: "围绕酃酃酒品牌数字传播场景，优化内容表达方式，建立符合年轻消费者阅读习惯的视觉体系，实现品牌文化传递、内容传播与商业转化的有效连接。",
      brandMarkEn: "LINGLINGJIU",
      brandMark: "酃·东方米酒",
      backgroundImage: "/08.jpeg",
      closing: {
        logo: "酃酃酒",
        logoEn: "LINGLINGJIU",
        line1: "DESIGN IS NOT ONLY ABOUT VISUALS,",
        line2: "IT IS ABOUT BUILDING CONNECTIONS.",
        line3: "设计不仅是视觉表达，更是连接品牌与用户的方式。",
      },
    },
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
