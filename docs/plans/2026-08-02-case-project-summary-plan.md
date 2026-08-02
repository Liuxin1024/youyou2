# Case Project Summary Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Add top+bottom closing screen for ling-ling-jiu case study only.

**Architecture:** Optional `projectSummary` on `CaseStudy` → `CaseSummary` component; wire in `CaseStudy` page; soften `CaseFooterNav` next placeholder.

**Tech Stack:** React, TypeScript, Tailwind, existing case gold tokens (`#C9A96E`)

---

### Task 1: Data types + ling-ling-jiu content

**Files:**
- Modify: `src/data/cases.ts`

- [x] Add `CaseProjectSummary` type and optional `projectSummary` on `CaseStudy`
- [x] Fill content for `ling-ling-jiu` from design doc

### Task 2: CaseSummary component

**Files:**
- Create: `src/components/case/CaseSummary.tsx`

- [x] Top section with `/08.jpeg`, left copy, top-right brand mark
- [x] Bottom closing row on solid dark; optional bg image later
- [x] Match case gold / Songti patterns from CaseHero / CaseShowcase

### Task 3: Page + footer wiring

**Files:**
- Modify: `src/pages/CaseStudy.tsx`
- Modify: `src/components/case/CaseFooterNav.tsx`

- [x] Render `CaseSummary` when `projectSummary` present, else `CaseTakeaway`
- [x] When `next` is null, show non-link「下一个项目 →」

### Task 4: Verify

- [x] Dev server / typecheck; visual check `/work/ling-ling-jiu`
