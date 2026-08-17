# Homepage Meteor Sky Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Add a fixed Canvas night sky on the homepage that shows through transparent section gaps, with inset Hero/Contact video so stars appear at the edges.

**Architecture:** One `MeteorSky` sibling of `<main>` (after loading). Canvas 2D draws cool-white stars and occasional blue-tailed meteors. Section `bg-bg` removed except Stats. Hero/Contact video uses a radial mask (treatment C).

**Tech Stack:** React, TypeScript, Canvas 2D, existing Tailwind tokens (`#89AACC`, `#4E85BF`)

---

### Task 1: MeteorSky component

**Files:**
- Create: `src/components/MeteorSky.tsx`

- [x] Fixed canvas, `pointer-events-none`, `aria-hidden`, `z-0`
- [ ] ~120 stars (60 if width < 768), cool white, light twinkle
- [ ] At most 2 meteors, 3–7s gap, top-right → bottom-left, blue tail
- [ ] Pause on `document.hidden`; no meteors / no twinkle when `prefers-reduced-motion`
- [ ] DPR capped at 2; skip loop if `getContext` is null

### Task 2: Mount on Index

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] After loading, render `MeteorSky` as sibling of `main`
- [ ] Give `main` `relative z-10` so content stays above the sky

### Task 3: Video treatment C + CSS masks

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Contact.tsx`

- [ ] Add `.video-sky-mask` and `.video-sky-mask-contact`
- [ ] Hero: video ~75–80% of viewport, radial fade, no opaque bottom `from-bg` wash
- [ ] Contact: heavier dim + edge fade; drop section `bg-bg`

### Task 4: Transparent section backgrounds

**Files:**
- Modify: `src/components/SelectedWorks.tsx`
- Modify: `src/components/Capabilities.tsx`
- Modify: `src/components/Explorations.tsx`

- [ ] Remove `bg-bg` from those sections; leave cards / Stats `bg-surface` unchanged

### Task 5: Verify

- [ ] `pnpm run build` passes
- [ ] Visual: stars in gaps on screens 2–3; Hero corners show sky; cards stay opaque; clicks still work
