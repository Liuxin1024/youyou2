# 首页夜空流星 Design

**Date:** 2026-08-17  
**Status:** Approved  
**Route:** `/`（仅首页 `Index`）  
**Case study pages:** 不做

## Goal

在首页黑色背景上加一层「星空底 + 偶尔流星」的氛围，贯穿整页滚动。流星只出现在深色留白里，不盖住作品卡片和照片，也不影响原有布局与点击。

## Decisions

| Topic | Choice |
|-------|--------|
| Technique | Canvas 2D + `requestAnimationFrame`，不引入粒子库、不用 GIF/视频/SVG 当流星引擎 |
| Layer | 视口 `fixed` 装饰层；`pointer-events: none`；`z-index` 低于内容与导航（导航保持 `z-50`） |
| Visibility | 方案 A：夜空只从透明留白透出；卡片 / 封面 / 按钮保持不透明 |
| Hero video | 先试 C：视频不满屏、边缘淡到透明，四周黑边露星空；不理想再退回满屏视频（方案 A） |
| Sky content | 静止冷白星星 + 偶尔 1～2 道光带品牌蓝拖尾的流星 |
| Scope | 仅首页；案例详情不共用 |

## Architecture

星空挂在 `Index` 里、与 `<main>` 平级，不塞进某一屏。Loading 播完后随 `main` 一起出现；Loading 本身保持纯黑。

```
Index
├── MeteorSky          ← fixed canvas，pointer-events: none
└── main               ← relative，叠在天空之上
    ├── Hero           ← 视频缩到中心 + 边缘遮罩（C）；不满意改回满屏
    ├── SelectedWorks  ← section 背景透明，卡片不透明
    ├── Capabilities   ← 同上
    ├── Explorations   ← 同上
    ├── Stats          ← 保留 bg-surface，作为夜空中的不透明条带
    ├── Contact        ← 视频更重压暗 + 边缘淡出，四周仍能见星空
    └── BackToTop
```

`body` 已是近黑（`--bg`）。各内容 section 去掉不透明 `bg-bg` 后，Canvas 从留白透出。Stats 故意保留实底，避免数字区叠星空发脏。

不把 canvas 做成整篇文档那么高：用 `position: fixed` 钉在视口，滚动时天空仍在窗口里。

## Component: `MeteorSky`

单文件组件，仅首页引用一次。一张全屏 canvas，`aria-hidden`。

**Stars**

- 冷白，大小与透明度随机；启动时铺好，之后基本不动，允许极轻闪烁
- 默认约 120 颗；视口宽度小于 768px 时减半

**Meteors**

- 同时最多 2 道；随机间隔约 3～7 秒一道
- 方向统一：从右上划向左下
- 头部偏白，拖尾带现有强调色 `#89AACC` / `#4E85BF`
- 不是流星雨

可抽一组常量（数量、间隔、Hero 视频占比），方便试完微调，不必改逻辑。

## Hero / Contact video (C, then possibly A)

Hero 现有 `HlsVideo` 保留，改容器而不是片源：

- 视频约占视口 70～80%，居中
- 边缘径向遮罩淡到透明，让固定星空从四周露出
- 标题、角色文案、按钮仍在内容层，可点

Contact 同样有底层视频：压暗比 Hero 更重，边缘同样淡出，避免末屏把天空整块吃掉。

退回 A 时：只把 Hero（必要时 Contact）视频容器改回现在的满屏铺满。`MeteorSky` 和后面几屏的透明底不用动——第一屏重新被视频盖住，流星从第二屏留白才看见。C 与 A 的差异只在视频布局，不需要功能开关。

## Lifecycle & degradation

- `prefers-reduced-motion: reduce`：不画流星，只留静止星星
- `document.hidden`：停 rAF，可见后再画
- resize：重算 canvas 尺寸；`devicePixelRatio` 封顶 2
- canvas 初始化失败：整层不渲染，页面功能与黑底照常
- 从案例页返回首页：组件重挂即可，不做全局持久层

## Out of scope

- 案例详情页星空
- 鼠标跟随、点击出流星
- Three.js / 3D 场景
- 用 GIF、Lottie、循环视频做流星
- Loading 屏上的星星
- Stats 改成透明叠星空
- 多套主题或运行时开关（C→A 用改布局完成）
