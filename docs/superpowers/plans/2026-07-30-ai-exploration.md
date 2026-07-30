# AI辅助视觉创意探索 Implementation Plan

> **For agentic workers:** Execute inline in this session. Prefer small focused edits matching existing CaseShowcase patterns. Skip formal TDD (no component test harness for case pages). Do not commit unless the user asks.

**Goal:** Add the AI exploration screen to `/work/ling-ling-jiu` between 设计价值 and 设计复盘.

**Architecture:** Data-driven block on `CaseShowcase` via new `showcaseAi` field on `CaseStudy`.

**Tech Stack:** React + TypeScript + Tailwind (existing)

---

## Files

- Modify: `src/data/cases.ts` — types + ling-ling-jiu data
- Modify: `src/components/case/CaseShowcase.tsx` — `AiExplorationBlock`
- Modify: `src/pages/CaseStudy.tsx` — pass `showcaseAi`
- Modify: `docs/TODO.md` — mark item

## Task 1: Types + data

Add:

```ts
export type CaseShowcaseAi = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  concept: {
    index: string;
    title: string;
    englishTitle: string;
    body: string;
    keywordsLabel: string;
    keywords: string[];
    /** empty strings = placeholders; length drives grid */
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
    image?: string;
  };
  tools: {
    eyebrow: string;
    title: string;
    items: string[];
    note?: string;
  };
  quote: string;
};
```

Wire ling-ling-jiu copy from design doc. Tools: `["即梦", "ChatGPT", "Photoshop", "Illustrator"]`. Concept `imageCount: 6`.

## Task 2: UI block

In `CaseShowcase`, after `ValueBlock`, render `AiExplorationBlock` when `ai` prop set.

- Header cloned from ApplicationBlock pattern
- 3-col grid: concept (3×2 placeholders + pills) | workflow timeline | single tall placeholder
- Bottom: tools row (reuse CaseHero icon map where possible; PS/AI → letter mark) + gold quote

## Task 3: Page wire + TODO

Pass `ai={study.showcaseAi}` from CaseStudy. Update TODO checklist.

## Verify

`npm run build` (or existing dev server). Open `/work/ling-ling-jiu`, scroll past 数字内容应用 / 设计价值, confirm new screen before 设计复盘.
