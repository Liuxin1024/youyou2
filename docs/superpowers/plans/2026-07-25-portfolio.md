# Portfolio Landing Page Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Build a dark single-page portfolio matching `demo.md` for visual preview.

**Architecture:** Vite React TS app with section components; Tailwind design tokens; GSAP + Framer Motion for motion; hls.js for Mux HLS video.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS v3, GSAP ScrollTrigger, Framer Motion, hls.js, react-router-dom, tailwindcss-animate

---

## File Structure

- `src/index.css` — CSS vars, keyframes, utilities
- `src/App.tsx` — router + Index page
- `src/pages/Index.tsx` — loading gate + sections
- `src/components/LoadingScreen.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/HlsVideo.tsx`
- `src/components/SelectedWorks.tsx`
- `src/components/Journal.tsx`
- `src/components/Explorations.tsx`
- `src/components/Stats.tsx`
- `src/components/Contact.tsx`
- `tailwind.config.js` — theme extensions
- `src/lib/utils.ts` — cn helper if needed

### Task 1: Scaffold & theme

- [ ] Vite + deps + Tailwind + fonts + CSS variables

### Task 2: Loading + Hero + Nav

- [ ] LoadingScreen, HlsVideo, Navbar, Hero with GSAP entrance

### Task 3: Content sections

- [ ] SelectedWorks, Journal, Explorations, Stats, Contact

### Task 4: Wire & verify

- [ ] Index page, smooth scroll anchors, `npm run dev` check
