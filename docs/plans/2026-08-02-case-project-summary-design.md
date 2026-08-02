# 项目总结收尾屏 · Design

**Date:** 2026-08-02  
**Status:** Approved  
**Route:** `/work/ling-ling-jiu`  
**Reference:** `docs/51274.PNG`（只要上 + 下，不要中间「我的设计方法」整带）

## Goal

为酃酃酒案例页增加最后一屏：上半「项目总结」+ 下半品牌收尾行；其后保留案例导航。

## Decisions

| Topic | Choice |
|-------|--------|
| Scope | 仅 `ling-ling-jiu` |
| Architecture | 新建 `CaseSummary`；有 `projectSummary` 时替代 `CaseTakeaway` |
| Top background | `/08.jpeg` + 左侧可读性渐变 |
| Bottom background | 纯深色；`closing.backgroundImage` 预留后期 |
| Middle band | 不做 |
| Footer nav | 左「返回核心项目」可跳转；右「下一个项目」仅文案无路由 |

## Content

- Eyebrow: `07 PROJECT SUMMARY`
- Title: 项目总结
- Subtitle: 从品牌内容到数字体验的视觉升级
- Body: 围绕酃酃酒品牌数字传播场景……有效连接。
- Brand mark: `LINGLINGJIU` / `酃·东方米酒`
- Closing: 酃酃酒 + LINGLINGJIU；三行金句（两行英 + 一行中）

## Out of scope

- DESIGN APPROACH / MY ROLE / DESIGN OUTPUT
- 底部山水背景图（后期补）
- 下一个项目的真实路由
