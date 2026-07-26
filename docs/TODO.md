# 作品集待补齐 ToDo

按优先级逐步替换占位内容。完成一项可勾选。

---

## 第二屏 · 核心项目

- [ ] 替换 4 张项目真实封面图
- [ ] 项目标题改为真实中文案名（现为 Automotive Motion 等英文占位）
- [ ] 决定卡片点击行为：详情页 / 外链 / 仅悬停预览
- [ ] （可选）补项目一行说明：行业 + 交付类型

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
- [ ] 社交链接换成真实主页（只保留真正维护的 2–3 个）：
  - [ ] 小红书
  - [ ] 抖音
  - [ ] 视频号
  - [ ] 站酷 / Behance
- [ ] 确认「可接项目」状态文案是否与当前档期一致
- [ ] （可选）跑马灯 slogan 按个人定位再改一版

## 全局 / 导航

- [ ] 导航中文化（Home / Work / Resume / Say hi → 首页 / 作品 / 关于或联系等）
- [ ] Logo 字母 `JA` 改为个人缩写或图形 Logo
- [ ] 浏览器标题 `index.html`：改为 you you 相关
- [ ] Loading 轮播词是否改为中文（Design / Create / Inspire）
- [ ] Hero 眉题 `COLLECTION '26` 是否保留或改中文
- [ ] 替换 / 确认 Hero & Contact 背景 HLS 视频是否继续用 Mux 演示源

## 内容资产

- [ ] 整理作品图：尺寸、压缩、命名规范
- [ ] 准备 3–5 个可公开讲的核心案例（客户允许范围）
- [ ] 若有简历 PDF，决定是否挂在导航「关于」

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
