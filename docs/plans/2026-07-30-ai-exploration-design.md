# AI辅助视觉创意探索 · Design

**Date:** 2026-07-30  
**Status:** Approved  
**Route:** `/work/ling-ling-jiu`  
**Placement:** After 数字内容应用 + 设计价值 · Before 设计复盘

## Goal

Add the next CaseShowcase screen: AI-assisted visual creative exploration, matching reference `docs/51257.PNG` layout intent while following the **数字内容应用** header typography (no section number `06`).

## Decisions

| Topic | Choice |
|-------|--------|
| Architecture | Extend `CaseShowcase` with `AiExplorationBlock` + `showcaseAi` data |
| Tools | 即梦 / ChatGPT / Photoshop / Illustrator (docx) |
| Column 03 | Single vertical image placeholder; no category labels |
| Images | Empty dark placeholders; data fields reserved for later `src` |
| Quote art | Omit landscape illustration for now (quote text only) |

## Content (from docx)

- **Eyebrow:** AI-ENHANCED DESIGN PROCESS  
- **Title:** AI辅助视觉创意探索  
- **Intro:** 在品牌视觉设计过程中，引入AI工具辅助创意探索与视觉验证。通过快速生成不同视觉方向，提高概念探索效率，并结合设计判断完成视觉优化与商业化表达。  
- **01 概念探索:** 从抽象想法到视觉方向验证；关键词：米酒文化、年轻消费场景、光影氛围、情绪化表达；6 格竖图占位  
- **02 创意流程:** 品牌需求分析 → 关键词提炼 → AI视觉探索 → 方案筛选优化 → 设计深化落地  
- **03 应用延展:** 将AI探索转化为品牌视觉资产 + 单张竖图占位  
- **Tools:** 即梦、ChatGPT、Photoshop、Illustrator  
- **Quote:** AI是创意的放大器，而设计师的思考，决定了最终的价值  

## Visual rules

- Header: gold eyebrow + white Songti title + gold muted subtitle (same as ApplicationBlock)
- Gold accents `#C9A96E`, dark section, max-width 1280
- Three-column desktop grid; stack on mobile
- Keyword pills; vertical workflow with gold circle icons + arrows

## Out of scope

- Real AI exploration images  
- Photoshop / Illustrator brand SVG assets (text/label fallback OK)  
- Quote mountain line-art  
- Separate page component  
