这份清单是 **Project Cash-Hub** 的“印钞机”。针对 2026 Fiesta Bowl (Miami vs. Ole Miss) 的特定受众，我将 Affiliate 资源分为 **核心支柱**、**高转化工具** 和 **周边增益** 三大类。

请研发团队在开发过程中，预留好对应的跳转接口或 Widget 嵌入位置。

---

# 2026 Fiesta Bowl 专属 Affiliate 资源清单

## 一、 核心支柱：门票与直播 (最高优先级)

这类资源的搜索意图最强，是 `fiestabowl2026.live` 的主要转化点。

| 平台名称 | 合作类型 | 适用场景 (Keywords) | 注册/接入平台 |
| --- | --- | --- | --- |
| **StubHub** | CPS (按成交额分成) | "Fiesta Bowl tickets", "last minute seats" | Impact Radius / ShareASale |
| **Vivid Seats** | CPS (通常返佣更高) | 价格敏感型用户 "cheap tickets" | Impact Radius |
| **FuboTV** | CPA (按新用户试用/订阅) | "Where to watch", "free live stream" | Impact Radius / Direct |
| **Hulu + Live TV** | CPA (单价稳定) | "ESPN streaming", "watch on mobile" | Rakuten Advertising |
| **Sling TV** | CPA | 针对低预算观赛群体 "low cost live tv" | Impact Radius |

---

## 二、 关键盈利点：住宿与旅行 (客单价最高)

针对关键词丛中的 **Vrbo** 以及跨州来看球的迈阿密/密西西比球迷。

| 平台名称 | 合作类型 | 适用场景 (Keywords) | 注册/接入平台 |
| --- | --- | --- | --- |
| **Vrbo** | CPS (3% - 5%) | "Vrbo near State Farm Stadium", "Miami fan house" | Expedia Group / CJ Affiliate |
| **Expedia** | CPS (酒店/租车) | "Hotels in Glendale AZ", "car rental Phoenix" | Expedia Group / CJ Affiliate |
| **Hotels.com** | CPS | 针对寻找比赛日酒店的用户 | CJ Affiliate |
| **ParkWhiz / SpotHero** | CPA/CPS | **冷门暴利点：** "parking at State Farm Stadium" | Impact Radius |

---

## 三、 情感与周边：球衣与博弈 (提高停留时长)

针对关键词中的 **Miami Hurricanes**, **Ole Miss Rebels**, **Hotty Toddy**。

| 平台名称 | 合作类型 | 适用场景 (Keywords) | 注册/接入平台 |
| --- | --- | --- | --- |
| **Fanatics** | CPS (10%+) | "Miami jersey", "Ole Miss Fiesta Bowl gear" | Impact Radius / ShareASale |
| **DraftKings / FanDuel** | CPA (单客极高) | "Miami vs Ole Miss prediction", "betting odds" | 需检查当地法律 (AZ 允许) |
| **Amazon Associates** | CPS | 尾门聚会用品 "tailgating gear", "cooler", "chairs" | Amazon Direct |

---

## 四、 研发对接建议 (Dev Integration Tips)

### 1. 链接屏蔽与重定向 (Link Cloaking)

为了 SEO 安全和易于统计，**严禁直接在页面使用原始 Affiliate 链接**。研发需建立重定向规则：

* `fiestabowl2026.live/go/watch`  -> 重定向至 FuboTV 追踪链接
* `miamivsolemiss.com/go/tickets` -> 重定向至 StubHub 追踪链接
* `miamivsolemiss.com/go/vrbo`    -> 重定向至 Vrbo 搜索结果页

### 2. 动态参数传递 (Sub-ID Tracking)

在配置链接时，要求研发务必传递 `Sub-ID` 或 `sid` 参数，以便区分流量来源：

* `...&subid=fiesta_live_top_banner` (来自 .live 站顶部)
* `...&subid=miami_prediction_bottom` (来自 .com 站预测页底部)

### 3. API 自动更新 (If Available)

* **StubHub API:** 如果研发能力够，接入 API 实时显示 "Starting from $240" 这种动态数字，点击率会翻倍。
* **Vrbo Widget:** 建议直接使用他们提供的 HTML Widget，转化率通常比单链接高。

---

## 五、 马上要做的行动清单

1. **立刻注册 Impact Radius 和 CJ Affiliate：** 这是体育和旅游类 Affiliate 的大本营，审核需要 24-48 小时。
2. **获取专属追踪 ID：** 为两个域名分别申请不同的 Site ID。
3. **准备 Banner 库：** 即使是 AI 自动生成的文章，也要在侧边栏手动配置几个高颜值的 **Miami vs Ole Miss** 专属优惠 Banner。

