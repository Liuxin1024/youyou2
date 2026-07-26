# Portfolio Landing Page Design

**Date:** 2026-07-25  
**Status:** Approved  
**Content:** Option A — demo placeholder (Michael Smith)

## Goal

Single-page dark portfolio matching `demo.md`, for visual preview.

## Stack

React + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion + hls.js + react-router-dom + tailwindcss-animate

## Architecture

Componentized single page:

- `LoadingScreen` → gates main content
- `Navbar` (fixed pill)
- `Hero` (HLS video + CTAs)
- `SelectedWorks` (bento)
- `Journal`
- `Explorations` (ScrollTrigger parallax)
- `Stats`
- `Contact` / footer

Design tokens, fonts, and motion follow `demo.md` exactly. Unsplash images for project/journal/exploration placeholders.

## Out of scope (v1)

- Real CMS / routing to Work & Resume pages
- Light mode
- Personalized copy
