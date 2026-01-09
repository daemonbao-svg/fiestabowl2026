这份 PRD 专门针对 **方案 2（高价值转化/工具站）** 编写。与方案 5 的“流量灌水”不同，方案 2 的核心是**功能性（Utility）**和**转化率（Conversion）**。它的目标是将方案 5 引流过来的用户，通过极佳的工具体验转化为订单。

---

# 产品需求文档 (PRD)：Fiesta Bowl 观赛助手与转化引擎

**项目代号：** Project Cash-Hub
**适用域名：** `miamivsolemiss.com` (核心)、`fiestabowl2026.live` (转化插件页)
**版本：** v1.0 (2026年1月8日版)

---

## 1. 产品概述与目标

打造一个专注于 2026 Fiesta Bowl 观赛体验的“功能型”落地站。

* **核心目标：** 最大化门票 (Affiliate)、住宿 (Vrbo)、直播订阅 (CPA) 的转化率。
* **核心策略：** “极简交互 -> 强信任感 -> 一键跳转”。

---

## 2. 核心功能模块 (Functional Modules)

### 2.1 智能直播/转播导航 (Live Stream Selector)

* **功能描述：** 根据用户需求，动态展示所有合法的观看路径。
* **开发需求：**
* **渠道分流：** 区分 TV (ESPN, ABC)、Web (Hulu, Fubo, YouTube TV) 和 Radio。
* **优惠提示：** 自动标注“Free Trial Available”字样吸引点击。
* **时区转换器：** 自动检测用户本地时间，将 2026 Fiesta Bowl 的 Kickoff Time (今晚/明日) 转换为本地时间。



### 2.2 住宿与场馆深度聚合 (The Travel Hub)

* **功能描述：** 针对关键词 *Vrbo*, *State Farm Stadium*, *where is fiesta bowl played* 的落地页。
* **开发需求：**
* **Vrbo 动态入口：** 嵌入 Vrbo 搜索挂件，预设地点为 "Glendale, AZ"，预设日期为比赛日前后 3 天。
* **场馆周边热图：** 使用 Google Maps API 标注 State Farm Stadium 周边的停车场、校友聚会酒吧（Fan Bars）。



### 2.3 实时票价监控器 (Real-time Ticket Tracker)

* **功能描述：** 实时展示二级市场（StubHub, Vivid Seats）的入场价。
* **开发需求：**
* **价格预警：** 标注“Price dropping”或“Selling fast”增强紧迫感。
* **CTA 按钮：** 显著的“Check Availability”按钮，带有 Affiliate 追踪参数。



### 2.4 互动博弈看板 (Fan Betting Widget)

* **功能描述：** 增加用户停留时长和参与感。
* **开发需求：**
* **民意调查：** “Who covers the spread?” (Miami -2.5 vs Ole Miss)。
* **实时赔率表：** 展示 Moneyline, Spread, O/U。



---

## 3. 页面布局与原型建议 (UI/UX)

### 3.1 首页“首屏” (Hero Section) 设计逻辑

1. **左侧：** 巨大的比分/倒计时看板 + 两校 Logo。
2. **右侧：** 三个快捷按钮（快速通道）：
* [Get Last Minute Tickets] (红色，闪烁)
* [Watch Live on FuboTV] (绿色)
* [Find Hotels/Vrbo] (蓝色)



### 3.2 浮动动作条 (Sticky Conversion Bar)

* **移动端：** 屏幕底部常驻一个半透明条，显示：“Tickets from $XXX - Buy Now”。

---

## 4. 技术实施细节 (Technical Specs)

### 4.1 转化跟踪 (Tracking)

* **需求：** 必须配置 **GTM (Google Tag Manager)**，追踪每一个点击出站的动作。
* **归因：** 记录用户是从 `fiestabowl2026.live` 跳过来的，还是直接访问 `miamivsolemiss.com`。

### 4.2 性能要求 (Performance)

* **核心指标：** 考虑到比赛日手机网络拥堵，页面必须极致轻量化。
* **技术：** 禁用繁重脚本，所有 Affiliate 链接通过后端重定向（Cloaking）以保护权重，如 `/go/tickets`。

---

## 5. 变现挂件集成 (Monetization Integration)

| 模块 | 接入平台 (推荐) | 嵌入方式 |
| --- | --- | --- |
| **门票** | StubHub / Ticketmaster | API 或 静态链接 + Banner |
| **酒店** | Vrbo / Expedia | Affiliate 搜索框 Widget |
| **直播** | FuboTV / Hulu | 文字链接 + 优惠码说明 |

---

## 6. 研发特别附件：API 与静态化建议

1. **数据准实时化：** 不需要秒级更新，但比分和票价建议每 15-30 分钟通过 Cron Job 更新一次。
2. **静态化路径：** 整个方案 2 建议做成 **SSG (Static Site Generation)**，仅比分部分使用客户端 JS 异步加载。这样即使瞬间涌入 10 万人，服务器也不会宕机。

---

## 7. 下一步交付物 (Final Deliverables)

为了让开发人员更高效，我建议接下来的动作是：

1. **提供 301 重定向逻辑：** 如何让方案 5 的流量精准落到方案 2 的特定模块。
2. **提供具体的“转场页面”设计：** 当用户搜索“Where to watch”时，点击后的第一个 landing 页面。

