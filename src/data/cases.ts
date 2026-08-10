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
  /** 中间「优化思路」列；缺省则不渲染（如鸿茅） */
  process?: {
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

/** 一行一文案 + 左右双图 */
export type CaseShowcaseApplicationRow = {
  index: string;
  title: string;
  englishTitle: string;
  body?: string;
  /** 两张图各自底部说明；与 images 一一对应 */
  captions?: [string?, string?];
  /** 两张图；缺省 / 空字符串用占位 */
  images?: [string?, string?];
};

export type CaseShowcaseApplication = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  /** 经典双卡布局（每卡一文案一图） */
  blocks?: CaseShowcaseApplicationBlock[];
  /** 一行一文案对应两张图 */
  rows?: CaseShowcaseApplicationRow[];
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

/** 项目总结收尾屏 */
export type CaseProjectSummary = {
  /** 大号序号，如 06 */
  index?: string;
  eyebrow: string;
  title: string;
  /** 价值小标题，如「项目价值总结」 */
  valueTitle?: string;
  subtitle: string;
  /** 副标英文，紧跟 subtitle 下方 */
  subtitleEn?: string;
  /** 正文；字符串或分段 */
  body: string | string[];
  brandMarkEn: string;
  brandMark: string;
  /** 竖排品牌标（娇本设计图） */
  brandMarkVertical?: boolean;
  /** split：左文右图（默认）；stack：上文下图，图片完整展示 */
  layout?: "split" | "stack";
  /** 右侧/下方配图；缺省为占位 */
  backgroundImage?: string;
  closing?: {
    logo: string;
    logoEn: string;
    line1?: string;
    line2?: string;
    line3?: string;
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
  /** 定位下的补充说明（可选，字号小于 positioning） */
  positioningDesc?: string;
  /** 四个关键词支柱 */
  pillars: string[];
  /** 底栏样式：cards=项目1毛玻璃格；icons=圆形图标条（设计图混合） */
  pillarLayout?: "cards" | "icons";
  /** 以下 Role / 背景区块字段；缺省则只渲染主视觉 */
  roleTitle?: string;
  roleDesc?: string;
  roleDuties?: string[];
  /** 项目背景段落；可标 bold */
  background?: Array<string | { text: string; bold?: boolean }>;
  aiTools?: string[];
  /** 品牌大事件时间线 */
  milestones?: CaseMilestone[];
};

/** 角色 + 职责范围屏（娇本等；不含顶栏概述 / 底栏工具） */
export type CaseRoleScopeItem = {
  index: string;
  englishTitle: string;
  chineseTitle: string;
  /** 缺省则深色占位 */
  image?: string;
  bullets: string[];
};

export type CaseRoleScope = {
  eyebrow: string;
  title: string;
  description: string;
  /** 角色区右侧大图；缺省占位 */
  image?: string;
  responsibilitiesEyebrow: string;
  responsibilitiesTitle: string;
  items: CaseRoleScopeItem[];
};

/** 项目背景 + 设计挑战（娇本职责范围下一屏） */
export type CaseContextIssue = {
  title: string;
  /** 第二行文案（横排卡片用） */
  subtitle?: string;
  /** 可选图标 id，组件内映射 */
  icon?: "layers" | "grid" | "drop";
};

export type CaseContextCompare = {
  eyebrow: string;
  title: string;
  /** 缺省占位 */
  image?: string;
  bullets: string[];
};

export type CaseContextKeyword = {
  en: string;
  zh: string;
};

export type CaseProjectContext = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  issuesIntro?: string;
  issues: CaseContextIssue[];
  /** 右上图区；缺省占位。优先用第一张铺满右侧与左栏等高 */
  images?: string[];
  challenge: {
    eyebrow: string;
    title: string;
    /** 挑战主文案；可用「」标注强调词 */
    body: string;
    keywordsLabel?: string;
    keywords: CaseContextKeyword[];
    /** 下半屏右侧图 */
    image?: string;
    before?: CaseContextCompare;
    after?: CaseContextCompare;
  };
};

/** 视觉策略屏（PAGE 03） */
export type CaseVisualStrategyPillar = {
  title: string;
  tags: string[];
  /** 圆标下方补充要点 */
  points?: string[];
};

export type CaseVisualStrategyItem = {
  index: string;
  title: string;
  englishTitle: string;
  body?: string;
  bullets: string[];
  /** 缺省占位 */
  image?: string;
};

export type CaseVisualStrategy = {
  eyebrow: string;
  title: string;
  lead: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionBody: string;
  /** 五列区小标题 */
  directionEyebrow?: string;
  directionTitle?: string;
  /** 右侧配图；有则优先于 balance 示意 */
  image?: string;
  /** 中轴三角：医研 — 核心 — 年轻美学 */
  balance?: {
    left: CaseVisualStrategyPillar;
    center: { brand: string; brandEn: string; label: string; thesis: string };
    right: CaseVisualStrategyPillar;
  };
  items: CaseVisualStrategyItem[];
  keywordsEyebrow: string;
  keywordsTitle: string;
  keywords: CaseContextKeyword[];
};

/** 项目3等：编辑式第一屏（深绿主视觉 + 米色概览条） */
export type CaseEditorialHeroPillar = {
  titleZh: string;
  titleEn: string;
  body: string;
  icon: "pen" | "cube" | "tablet" | "leaf";
};

export type CaseEditorialHero = {
  eyebrow: string;
  projectIndex: string;
  projectLabel: string;
  title: string;
  subtitleZh: string;
  subtitleEn: string;
  body: string;
  period: string;
  roleLabel: string;
  brandName: string;
  brandTagline: string;
  /** 主视觉背景；缺省为深绿占位 */
  cover?: string;
  /** 右下角叠加小图（如产品包装） */
  productImage?: string;
  overviewTitleZh: string;
  overviewTitleEn: string;
  pillars: CaseEditorialHeroPillar[];
};

/** 项目3 · 设计策略第二屏 */
export type CaseEditorialStrategyStep = {
  title: string;
  subtitle: string;
  body: string;
};

export type CaseEditorialStrategyKeyword = {
  en: string;
  zh: string;
  icon: "mountain" | "sun" | "scroll" | "vessel" | "leaf" | "bottle";
};

export type CaseEditorialStrategyElement = {
  title: string;
  subtitle: string;
  /** 圆形缩略图；缺省占位 */
  images?: string[];
  /** 占位圆点数，默认 3 */
  thumbCount?: number;
  /** 底部色带，如 ["#2F5D4A", "#C9A96E"] */
  colors: string[];
};

export type CaseEditorialStrategyStyle = {
  title: string;
  body: string;
  icon: "mountain" | "crane" | "lotus" | "cloud";
};

export type CaseEditorialStrategy = {
  topBarLeft: string;
  topBarRight: string;
  title: string;
  body: string;
  /** 右上大图；缺省占位 */
  heroImage?: string;
  sectionIndex: string;
  thinkingTitle: string;
  thinkingTitleEn: string;
  steps: CaseEditorialStrategyStep[];
  keywordsTitle: string;
  keywordsTitleEn: string;
  keywords: CaseEditorialStrategyKeyword[];
  elementsTitle: string;
  elementsTitleEn: string;
  elements: CaseEditorialStrategyElement[];
  stylesTitle: string;
  stylesTitleEn: string;
  styles: CaseEditorialStrategyStyle[];
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
  /** 编辑式第一屏（与 overview 二选一；有则走 CaseHeroHongmao） */
  editorialHero?: CaseEditorialHero;
  /** 鸿茅等：设计策略第二屏 */
  editorialStrategy?: CaseEditorialStrategy;
  /** 我的角色 + 职责范围（独立一屏） */
  roleScope?: CaseRoleScope;
  /** 项目背景 + 设计挑战 */
  projectContext?: CaseProjectContext;
  /** 视觉策略屏 */
  visualStrategy?: CaseVisualStrategy;
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
  /** 鸿茅等：多场景视觉应用（上文下图） */
  visualApplications?: CaseProjectSummary;
  /** 有则渲染 CaseSummary，替代通用 takeaway 复盘块 */
  projectSummary?: CaseProjectSummary;
  takeaway: string;
  /** 列表卡片用 */
  span: "md:col-span-7" | "md:col-span-5" | "md:col-span-12";
  aspect: "aspect-[16/10]" | "aspect-[16/5]" | "aspect-[4/5]";
  /** 列表封面 object-position，默认 center */
  coverPosition?: string;
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
  {
    slug: "jiaoben",
    title: "娇本",
    subtitle: "医研护肤品牌视觉升级",
    cover: "/10.JPG",
    role: "视觉设计师",
    keywords: ["医研背书", "安全有效", "温和亲肤", "肌肤自信"],
    summary:
      "本项目围绕品牌视觉优化、产品视觉表达以及数字内容建设展开，探索医研品牌在新时代消费环境下的视觉升级路径。",
    overview: {
      englishName: "JIAOBEN",
      positioning: "医研护肤品牌视觉升级",
      positioningDesc:
        "本项目围绕品牌视觉优化、产品视觉表达以及数字内容建设展开，探索医研品牌在新时代消费环境下的视觉升级路径。",
      pillarLayout: "icons",
      pillars: ["医研背书", "安全有效", "温和亲肤", "肌肤自信"],
    },
    roleScope: {
      eyebrow: "MY ROLE",
      title: "视觉设计师",
      description:
        "负责娇本品牌数字视觉体系建设与商业内容设计，参与品牌视觉升级、新品视觉探索及多渠道视觉落地。",
      image: "/11.png",
      responsibilitiesEyebrow: "RESPONSIBILITIES",
      responsibilitiesTitle: "职责范围",
      items: [
        {
          index: "01",
          englishTitle: "BRAND VISUAL",
          chineseTitle: "品牌视觉升级",
          image: "/12.JPG",
          bullets: [
            "参与新品 Logo 视觉设计",
            "参与原产品包装升级方向优化",
            "建立品牌视觉表达规范",
            "输出品牌视觉延展物料",
          ],
        },
        {
          index: "02",
          englishTitle: "DIGITAL CONTENT",
          chineseTitle: "数字内容设计",
          image: "/13.JPG",
          bullets: [
            "负责公众号视觉内容设计",
            "从 0-1 参与视频号内容视觉搭建",
            "设计达人探店内容视觉体系",
            "输出多平台视觉内容模板",
          ],
        },
        {
          index: "03",
          englishTitle: "COMMERCIAL DESIGN",
          chineseTitle: "商业视觉应用",
          image: "/14.JPG",
          bullets: [
            "电商详情页视觉设计",
            "产品宣传海报与主图设计",
            "活动物料设计及视觉延展",
            "产品拍摄方案视觉策划",
          ],
        },
        {
          index: "04",
          englishTitle: "AI VISUAL EXPLORATION",
          chineseTitle: "AI 视觉探索",
          image: "/15.JPG",
          bullets: [
            "利用 AI 辅助品牌概念探索",
            "产品场景与氛围视觉创意验证",
            "快速生成多方向视觉提案",
            "提升视觉探索效率与可能性",
          ],
        },
      ],
    },
    projectContext: {
      eyebrow: "PROJECT BACKGROUND",
      title: "项目背景",
      subtitle: "从医研专业到年轻美学表达",
      intro: [
        "娇本作为医研护肤品牌，拥有专业研发背景与医学背书。",
        "但随着消费人群年轻化以及数字内容传播方式变化，原有视觉表达存在：",
      ],
      issues: [
        {
          title: "品牌专业感较强",
          subtitle: "但情绪连接不足",
          icon: "layers",
        },
        {
          title: "产品信息完整",
          subtitle: "但视觉传播效率有限",
          icon: "grid",
        },
        {
          title: "医学属性明显",
          subtitle: "但缺少年轻消费者认同感",
          icon: "drop",
        },
      ],
      images: ["/23.jpg"],
      challenge: {
        eyebrow: "DESIGN CHALLENGE",
        title: "设计挑战",
        body: "如何在保持「专业、安全、有效」\n品牌基因的基础上，\n建立更符合年轻消费市场的视觉语言？",
        keywordsLabel: "视觉关键词：",
        keywords: [
          { en: "MEDICAL", zh: "专业医学感" },
          { en: "SAFETY", zh: "安全信任感" },
          { en: "PURE", zh: "纯净护肤感" },
          { en: "MODERN", zh: "现代女性审美" },
          { en: "CONFIDENCE", zh: "肌肤自信" },
        ],
        before: {
          eyebrow: "BEFORE",
          title: "旧有视觉印象",
          image: "/24.png",
          bullets: [
            "医学感强，距离感高",
            "视觉风格偏传统",
            "缺乏情感价值连接",
          ],
        },
        after: {
          eyebrow: "AFTER",
          title: "目前视觉方向",
          image: "/25.png",
          bullets: [
            "专业可信，亲和温暖",
            "视觉语言更现代轻盈",
            "建立与年轻消费者的情感连接",
          ],
        },
      },
    },
    visualStrategy: {
      eyebrow: "VISUAL STRATEGY",
      title: "视觉策略",
      lead: "在保留医研品牌信任感的基础上，建立更符合年轻消费者认知的视觉语言。",
      sectionEyebrow: "VISUAL SYSTEM OPTIMIZATION STRATEGY",
      sectionTitle: "视觉体系优化策略",
      sectionBody:
        "视觉优化围绕「专业可信」与「现代美学」之间的平衡展开，通过视觉语言重构、产品表达优化以及数字内容适配，提升品牌在多元消费场景中的识别度与传播效率。",
      directionEyebrow: "VISUAL DIRECTION",
      directionTitle: "视觉优化方向",
      image: "/27.png",
      items: [
        {
          index: "01",
          title: "弱化医疗感，强化品牌亲和力",
          englishTitle: "SOFTEN MEDICAL TONE",
          image: "/28.png",
          bullets: ["柔和光影", "简洁构图", "高级留白"],
        },
        {
          index: "02",
          title: "建立统一产品视觉语言",
          englishTitle: "UNIFIED PRODUCT VISUALS",
          image: "/19.png",
          bullets: ["色彩体系", "产品构图", "光影风格"],
        },
        {
          index: "03",
          title: "强化产品价值具象表达",
          englishTitle: "VISUALIZE PRODUCT BENEFITS",
          image: "/20.png",
          bullets: ["成分视觉化", "使用场景表达", "产品质感呈现"],
        },
        {
          index: "04",
          title: "优化情绪表达，增强用户连接",
          englishTitle: "ENHANCE EMOTIONAL CONNECTION",
          image: "/21.png",
          bullets: ["生活场景", "肌肤状态", "日常自信"],
        },
        {
          index: "05",
          title: "适配多渠道内容传播",
          englishTitle: "ADAPT TO MULTIPLE CHANNELS",
          image: "/22.png",
          bullets: ["多触点应用", "电商与新媒体", "活动传播延展"],
        },
      ],
      keywordsEyebrow: "KEYWORDS",
      keywordsTitle: "视觉关键词",
      keywords: [
        { en: "PURE", zh: "纯净" },
        { en: "SAFE", zh: "安全" },
        { en: "SCIENTIFIC", zh: "科学" },
        { en: "LIGHT", zh: "轻盈" },
        { en: "CONFIDENT", zh: "自信" },
      ],
    },
    showcaseApplication: {
      eyebrow: "VISUAL COMMUNICATION RESULTS",
      title: "品牌数字内容应用",
      subtitle: "将品牌视觉策略延展至数字传播场景，建立统一、高效的内容表达体系。",
      intro:
        "围绕品牌传播需求，将产品价值、品牌理念与用户沟通场景进行视觉转译，覆盖公众号、电商内容及社交传播等多个数字触点，提升品牌认知与内容体验。",
      rows: [
        {
          index: "01",
          title: "品牌宣传海报 & 公众号首屏内容",
          englishTitle: "BRAND POSTERS & WECHAT OFFICIAL ACCOUNT VISUAL",
          body: "围绕品牌核心价值，建立统一的视觉传播语言。针对品牌活动、新品推广及日常内容传播需求，对宣传海报与公众号首屏进行视觉优化。",
          images: ["/2.1.jpg", "/2.2.jpg"],
        },
        {
          index: "02",
          title: "公众号长图文详情展示",
          englishTitle: "WECHAT LONG-FORM CONTENT DESIGN",
          body: "通过内容结构优化，将产品卖点转化为用户可理解的信息体验。针对公众号深度内容传播场景，对长图文内容进行模块化设计。",
          images: ["/2.3.jpg", "/2.4.jpg"],
        },
        {
          index: "03",
          title: "产品视觉与场景延展",
          englishTitle: "PRODUCT VISUAL & SCENE EXTENSION",
          body: "根据平台营销节点（618、双11、年货节等）进行主题视觉策划，将产品卖点、优惠信息与场景化内容结合，形成适用于天猫、京东等电商渠道的活动视觉资产。",
          images: ["/2.5.jpg", "/2.6.jpg"],
        },
        {
          index: "04",
          title: "电商详情页视觉设计",
          englishTitle: "E-COMMERCE DETAIL PAGE DESIGN",
          body: "通过梳理产品核心卖点、功能优势与用户关注点，将品牌故事、产品信息、使用场景转化为结构化视觉内容，提升页面阅读效率与购买转化体验。",
          images: ["/详情页1.jpg", "/详情页2.jpg"],
        },
        {
          index: "05",
          title: "详情页视觉延展",
          englishTitle: "Detail Page Visual Extension",
          body: "延续详情页视觉语言，补充卖点图与场景表达，强化产品认知与转化链路。",
          images: ["/详情页3.jpg", "/详情页4.jpg"],
        },
      ],
    },
    strategy: [],
    takeaway: "",
    projectSummary: {
      index: "06",
      eyebrow: "PROJECT SUMMARY",
      title: "项目总结",
      subtitle: "从品牌视觉优化，到数字内容生态构建",
      body: [
        "本项目围绕娇本品牌年轻化传播需求，对品牌视觉语言进行重新梳理与延展。",
        "通过品牌视觉升级、新媒体内容体系建设、电商视觉优化以及 AI 辅助创意探索，逐步建立从品牌认知到用户触达的完整视觉链路。",
        "在保持品牌专业属性与医研背景的基础上，探索更加年轻、清晰、高效的数字化视觉表达方式。",
      ],
      brandMark: "肌肤自信 / 源自娇本",
      brandMarkEn: "MEDICAL RESEARCH SKINCARE BRAND",
      brandMarkVertical: true,
      backgroundImage: "/29.JPG",
    },
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    coverPosition: "object-[85%_30%]",
  },
  {
    slug: "hongmao-yaojiu",
    title: "鸿茅药酒",
    subtitle: "东方文化品牌插画体系设计",
    cover: "/30.jpg",
    role: "插画设计师",
    keywords: ["插画创作", "包装应用", "品宣物料", "文化传递"],
    summary:
      "本项目以东方文化为根基，围绕品牌历史与养生理念，构建一套可延展的插画视觉体系，并落地于包装、品宣与文化传播场景。",
    editorialHero: {
      eyebrow: "PORTFOLIO DESIGN WORKS",
      projectIndex: "03",
      projectLabel: "PROJECT THREE",
      title: "鸿茅药酒",
      subtitleZh: "东方文化品牌 插画体系设计",
      subtitleEn: "ORIENTAL CULTURAL BRAND ILLUSTRATION SYSTEM DESIGN",
      body: "本项目以东方文化为根基，深入挖掘品牌历史与养生理念，构建一套兼具叙事性与延展性的插画视觉体系。通过山水、祥瑞与器物符号的现代表达，强化中华老字号的文化辨识度，并服务于包装、品宣与多场景传播。",
      period: "2020 - 2021",
      roleLabel: "插画设计师 / ILLUSTRATOR",
      brandName: "鸿茅药酒",
      brandTagline: "始于1739 · 中华老字号",
      cover: "/30.jpg",
      productImage: "/31.png",
      overviewTitleZh: "项目概览",
      overviewTitleEn: "PROJECT OVERVIEW",
      pillars: [
        {
          titleZh: "插画创作",
          titleEn: "ILLUSTRATION DESIGN",
          body: "东方符号与叙事插画，构建品牌视觉体系",
          icon: "pen",
        },
        {
          titleZh: "包装应用",
          titleEn: "PACKAGING DESIGN",
          body: "瓶贴、礼盒与产品包装视觉延展",
          icon: "cube",
        },
        {
          titleZh: "品宣物料",
          titleEn: "PROMOTIONAL MATERIAL",
          body: "海报、折页等品牌传播物料设计",
          icon: "tablet",
        },
        {
          titleZh: "文化传递",
          titleEn: "CULTURAL COMMUNICATION",
          body: "东方养生文化与品牌价值表达",
          icon: "leaf",
        },
      ],
    },
    editorialStrategy: {
      topBarLeft: "PROJECT 03 | 鸿茅药酒品牌插画体系设计",
      topBarRight: "DESIGN STRATEGY",
      title: "设计策略",
      body: "以东方文化为根基，从品牌历史与养生理念中提炼视觉语言，构建可延展的插画体系，让老字号在当代传播中持续传递文化价值与品牌温度。",
      heroImage: "/32.png",
      sectionIndex: "02",
      thinkingTitle: "设计思路",
      thinkingTitleEn: "DESIGN THINKING",
      steps: [
        {
          title: "文化挖掘",
          subtitle: "CULTURE",
          body: "梳理品牌历史与东方养生语境",
        },
        {
          title: "元素提炼",
          subtitle: "ELEMENT",
          body: "提取山水、祥瑞与器物符号",
        },
        {
          title: "视觉转译",
          subtitle: "VISUAL",
          body: "转化为当代插画视觉语言",
        },
        {
          title: "应用延展",
          subtitle: "EXTEND",
          body: "落地包装、品宣与传播物料",
        },
      ],
      keywordsTitle: "核心关键词",
      keywordsTitleEn: "KEYWORDS",
      keywords: [
        { en: "ORIENTAL AESTHETICS", zh: "东方美学", icon: "mountain" },
        { en: "SOLAR TERMS CULTURE", zh: "节气文化", icon: "sun" },
        { en: "CULTURAL HERITAGE", zh: "文化传承", icon: "scroll" },
        { en: "CRAFTSMANSHIP", zh: "匠心工艺", icon: "vessel" },
        { en: "NATURAL WELLNESS", zh: "自然养生", icon: "leaf" },
        { en: "BRAND IDENTITY", zh: "品牌识别", icon: "bottle" },
      ],
      elementsTitle: "视觉元素提炼",
      elementsTitleEn: "VISUAL ELEMENT EXTRACTION",
      elements: [
        {
          title: "自然意象",
          subtitle: "山水 / 花草 / 云雾",
          images: ["/ju1.png", "/ju2.png", "/ju3.png"],
          colors: ["#1B3A2F", "#3D6B5A", "#C9A96E"],
        },
        {
          title: "中药材元素",
          subtitle: "草本植物 / 药材纹理",
          images: ["/ju4.png", "/ju5.png", "/ju6.png"],
          colors: ["#C4A574", "#8B1E1E", "#E8D5B5"],
        },
        {
          title: "传统文化符号",
          subtitle: "亭台楼阁 / 纹样 / 器物",
          images: ["/ju7.png", "/ju8.png", "/ju9.png"],
          colors: ["#8B1E1E", "#2F6B6B", "#C9A96E"],
        },
        {
          title: "品牌元素",
          subtitle: "鸿茅药酒 / 色彩基因",
          images: ["/ju10.png", "/ju11.png"],
          colors: ["#8B1E1E", "#C9A96E"],
        },
      ],
      stylesTitle: "风格定位",
      stylesTitleEn: "STYLE POSITIONING",
      styles: [
        {
          title: "国风插画",
          body: "以东方插画语言构建品牌气质",
          icon: "mountain",
        },
        {
          title: "色彩典雅",
          body: "墨绿、朱红与暗金奠定调性",
          icon: "crane",
        },
        {
          title: "构图叙事",
          body: "山水叙事强化品牌故事感",
          icon: "lotus",
        },
        {
          title: "健康养生",
          body: "传递东方养生文化与信任感",
          icon: "cloud",
        },
      ],
    },
    // 文案/手机长图暂沿用结构占位，后续可继续替换
    showcaseEvolution: {
      eyebrow: "ILLUSTRATION SYSTEM",
      title: "插画体系应用",
      subtitle: "围绕鸿茅药酒东方养生文化定位",
      intro: [
        "提炼山水、草木、节气、人文等视觉元素，建立统一的品牌插画资产体系，",
        "并延展至包装、宣传物料及线上传播场景。",
      ],
      before: {
        label: "HERITAGE SERIES",
        title: "历史产地与酿造工艺",
        body: "以草原水源、道地药材与古法酿造为叙事主线，将鸿茅药酒近三百年的产地记忆与工艺传承转译为可延展的插画长图。",
        points: [
          "草原地貌与好水好药的产地气质",
          "六十七味道地药材的视觉呈现",
          "名医智慧与古法工艺的场景叙事",
          "由民间走入宫廷的品牌传承脉络",
        ],
        phone: "/L1.jpg",
      },
      after: {
        label: "SOLAR TERMS",
        title: "节气插画系列",
        body: "围绕东方养生与时令节律，以统一插画语言演绎二十四节气场景，形成可连续输出的节气视觉资产。",
        points: [
          "节气主题与山水物候的视觉对应",
          "统一构图与色彩体系便于系列延展",
          "适配海报、社媒与品宣多场景投放",
          "强化东方养生文化的品牌识别",
        ],
        phone: "/L2.jpg",
      },
    },
    strategy: [],
    takeaway: "",
    visualApplications: {
      eyebrow: "MULTI-SCENARIO VISUAL APPLICATIONS",
      title: "多场景视觉应用",
      subtitle: "",
      body: "将品牌插画体系延展至产品包装、宣传物料及营销传播场景，实现从视觉创作到商业落地的完整应用链路。",
      brandMark: "鸿茅药酒",
      brandMarkEn: "HONGMAO YAOJIU",
      layout: "stack",
      backgroundImage: "/33.png",
    },
    projectSummary: {
      eyebrow: "PROJECT SUMMARY",
      title: "项目总结",
      subtitle: "让传统文化成为品牌资产",
      subtitleEn: "Turning Eastern Culture Into Brand Value",
      body: [
        "通过东方文化元素的重新提炼与视觉转译，",
        "建立了一套具有品牌辨识度的插画体系。",
        "从节气主题、产品包装到传播物料，",
        "插画成为连接传统文化与现代消费者的重要视觉语言。",
      ],
      brandMark: "鸿茅药酒",
      brandMarkEn: "HONGMAO YAOJIU",
      backgroundImage: "/34.JPG",
      closing: {
        logo: "鸿茅药酒",
        logoEn: "HONGMAO YAOJIU",
        line1:
          "From Cultural Heritage to Brand Value — Building a Contemporary Visual System for Eastern Brands",
        line3: "从文化符号到品牌资产，建立东方品牌视觉表达的新方式。",
      },
    },
    span: "md:col-span-12",
    aspect: "aspect-[16/5]",
    coverPosition: "object-center",
  },
];

/** 已开放详情页的案例（有 overview / editorialHero / strategy 即可进入） */
export function getPublishedCases() {
  return CASES.filter(
    (c) =>
      Boolean(c.overview) ||
      Boolean(c.editorialHero) ||
      c.strategy.length > 0,
  );
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
