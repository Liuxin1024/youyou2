# 作品集待补齐 ToDo

按优先级逐步替换占位内容。完成一项可勾选。

---

## 第二屏 · 核心项目

- [ ] 替换 4 张项目真实封面图（去掉 Unsplash）
- [ ] 其余 3 个列表项标题改为真实中文案名，并补详情数据
- [x] 第一案例点击跳转二级页：`/work/ling-ling-jiu`（酃酃酒框架已搭）
- [ ] （可选）补项目一行说明：行业 + 交付类型

## 二级详情页 · 案例框架（数据驱动）

路由：`/work/:slug` · 数据：`src/data/cases.ts`

### 酃酃酒（ling-ling-jiu）— 内容待补

- [ ] CaseHero：封面换真实 KV / 主视觉
- [ ] CaseStrategy：可按需微调三步文案
- [ ] CaseSystem：补色彩板、字体样张、组件截图
- [ ] CaseShowcase 长图区：手机 Mockup + 公众号长图 / 动效
- [ ] CaseShowcase 动态网格：视频号 / GIF（注意体积与国内加载）
- [ ] CaseTakeaway：确认最终复盘文案
- [ ] 其余核心项目：在 `CASES` 追加数据并开放详情

### 结构说明（勿拆散）

1. 概览 CaseHero  
2. 策略 CaseStrategy  
3. 视觉系统 CaseSystem  
4. 落地 CaseShowcase  
5. 复盘 CaseTakeaway + 返回 / 上一个下一个

## 第三屏 · 能力范围

- [ ] 四条能力各自换成真实代表图（非 Unsplash）
- [ ] 按需微调能力名称与一句说明文案

## 第四屏 · 更多作品

- [ ] 替换 6 张视差卡片为真实作品图
- [ ] 作品标题改为中文
- [ ] （可选）加站酷 / 小红书作品集外链按钮

## 第五屏 · 数据背书

- [ ] 统计并填入真实数字：
  - [ ] 合作品牌数（数合作过的品牌名）
  - [ ] 视觉交付数（详情页 / 包装 / KV 等按「交付过」计）
  - [ ] 垂类行业数（如保健酒 / 护肤 / 酒饮 → 3）
- [ ] 或改为「合作品牌 Logo 墙」（有 Logo 时更有说服力）
- [ ] 更新 `src/components/Stats.tsx` 中的 `STATS`

> 不要用无法核对的「满意度 %」「虚高年限」。

## 第六屏 · 联系合作

- [ ] 真实联系方式（二选一或都要）：
  - [ ] 邮箱 + `mailto:`
  - [ ] 微信（文案或二维码方案）
- [ ] （可选）恢复社交链接 /「可接项目」状态行
- [ ] （可选）居中标题 `you you` 是否改为其他 slogan

## 全局 / 导航

- [ ] 导航中文化（Home / Work / Resume / Say hi → 首页 / 作品 / 关于或联系等）
- [ ] Logo 字母 `JA` 改为个人缩写或图形 Logo
- [x] 浏览器标题改为 you you
- [ ] Loading 轮播词是否改为中文（Design / Create / Inspire）
- [ ] Hero 眉题 `COLLECTION '26` 是否保留或改中文
- [x] Loading 已缩短至约 1 秒，并支持点击跳过
- [x] 字体已改为本地托管（去掉 Google Fonts）

## 背景视频（Mux）与占位图（Unsplash）说明

### Mux 背景视频是什么？
- Hero / Contact 里的动态背景，来自海外 Mux 流媒体（HLS）
- 国内加载偏慢，会拖慢首屏观感

**后续优化选项（择一）：**
- [ ] 换成自己压缩好的短 MP4（放 `public/video/`，约 2–5MB，循环静音）
- [ ] 首屏先显示静态封面图，视频延后加载 / Wi‑Fi 再播
- [ ] 国内弱网直接用静态氛围图，不做视频

### Unsplash 是什么？
- 免费图库网站；当前核心项目 / 能力范围 / 更多作品里的图都是临时占位图
- **不是你的作品**，等真实作品图到位后全部替换

- [ ] **替换掉现在用到的所有 Unsplash 图**（方案：下载真实作品图到本地，放 `public/images/`，逐个替换 URL）
  - [ ] 第二屏 核心项目 `SelectedWorks.tsx`（4 张）
  - [ ] 第三屏 能力范围 `Capabilities.tsx`（4 张）
  - [ ] 第四屏 更多作品 `Explorations.tsx`（6 张）
  - [ ] 二级详情页配图（见下方案例页）

## 内容资产

- [ ] 整理作品图：尺寸、压缩、命名规范
- [ ] 准备 3–5 个可公开讲的核心案例（客户允许范围）
- [ ] 若有简历 PDF，决定是否挂在导航「关于」

## 部署（第一期可做）

- [x] 远程仓库已关联：`git@github.com:Liuxin1024/youyou2.git`
- [x] Vercel 首次生产部署完成：`https://youyou2.vercel.app`
- [x] Vercel 已连接 GitHub：`Liuxin1024/youyou2`（push `main` 会自动部署）
- [x] 购买个人域名：`youyou.space`
- [x] 域名已绑定 Vercel：`youyou.space` / `www.youyou.space`（DNS 已验证通过）
- [x] 国内手机可打开 `https://youyou.space`（首开仍偏慢，性能优化进行中）
- [ ] 优化后复测国内首开体感（目标：Loading 更快、字体不卡）

## 图像与性能优化（等真实图片补齐后再做）

架构原则：列表缩略图与高清放大图彻底分离。

- [ ] 所有作品图上载前：TinyPNG / 脚本批量压缩
- [ ] 缩略图：400–600px，WebP，约 30–80KB；统一 `loading="lazy"`
- [ ] 高清图：1920px+，仅点击放大时异步加载
- [ ] 接入 Lightbox（PhotoSwipe 或 Yet Another React Lightbox）
  - 核心项目卡片
  - 能力范围代表图（如需放大）
  - 第四屏视差作品（已有简易 lightbox，可升级）
- [ ] （可选）本地 `public/images/` 目录规范：`thumbs/` + `full/`
- [ ] （可选）构建脚本：sharp / imagemin 批量出 WebP

---

**对应代码位置速查**

| ToDo 区块 | 文件 |
|-----------|------|
| 核心项目 | `src/components/SelectedWorks.tsx` |
| 能力范围 | `src/components/Capabilities.tsx` |
| 更多作品 | `src/components/Explorations.tsx` |
| 数据 | `src/components/Stats.tsx` |
| 联系 | `src/components/Contact.tsx` |
| 导航 | `src/components/Navbar.tsx` |
| 首屏文案 | `src/components/Hero.tsx` |
| 页面标题 | `index.html` |
| 开场加载 | `src/components/LoadingScreen.tsx` |
| 背景视频 | `src/components/HlsVideo.tsx` |
