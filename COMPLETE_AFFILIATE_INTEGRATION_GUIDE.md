# 🎯 Fiesta Bowl 2026 完整联盟计划接入指南

本指南涵盖您项目中所有已配置的联盟计划，按优先级和收益潜力排序。

---

## 📊 联盟计划概览

您的项目已配置 **11 个联盟链接**，分为 6 大类别：

| 类别 | 平台数量 | 预期收益 | 优先级 |
|------|---------|---------|--------|
| 🎫 **门票** | 2 | ⭐⭐⭐⭐⭐ | 最高 |
| 📺 **直播** | 4 | ⭐⭐⭐⭐ | 高 |
| 🏨 **住宿** | 3 | ⭐⭐⭐⭐⭐ | 最高 |
| 🅿️ **停车** | 1 | ⭐⭐⭐ | 中 |
| 💰 **博彩** | 1 | ⭐⭐⭐⭐⭐ | 最高 |
| 👕 **周边** | 2 | ⭐⭐⭐ | 中 |

---

# 一、🎫 门票类联盟计划（最高优先级）

## 1. StubHub 联盟计划

### 📋 基本信息
- **佣金模式**: CPS (按成交额分成)
- **佣金比例**: 通常 5-8% 的票价
- **Cookie 有效期**: 7-30 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-60)

### 🔗 接入平台
**Impact.com** (原 Impact Radius)

### 📝 申请步骤

#### Step 1: 注册 Impact.com
1. 访问 [Impact.com](https://impact.com)
2. 点击 "Become a Partner"
3. 填写基本信息：
   - 公司/个人名称
   - 网站: `https://fiestabowl2026.live`
   - 邮箱和联系方式
   - 税务信息（W-9 或 W-8BEN）

#### Step 2: 申请 StubHub 计划
1. 登录 Impact.com 仪表板
2. 搜索 "StubHub"
3. 点击 "Apply to Program"
4. 填写申请表：
   ```
   网站描述示例：
   "我们运营 Fiesta Bowl 2026 官方粉丝指南，为 Miami vs Ole Miss 
   比赛提供全面信息，包括门票购买指南、赛事分析和旅行建议。我们的
   目标受众是美国大学橄榄球粉丝，特别是计划前往亚利桑那州观看比赛
   的球迷。"
   
   推广计划：
   "我们将在首页英雄区、门票追踪器和比赛信息页面展示 StubHub 链接，
   预计每月可带来 500+ 点击量。"
   ```

#### Step 3: 获取追踪链接
批准后（通常 2-5 个工作日）：
1. 进入 StubHub 计划仪表板
2. 找到 "Get Links" 或 "Link Generator"
3. 创建追踪链接：
   - **目标 URL**: `https://www.stubhub.com/fiesta-bowl-tickets/performer/12345/`
   - **Campaign ID**: `fiesta_hero_tickets`
4. 复制您的 **Publisher ID** (类似 `sid=12345`)

#### Step 4: 配置到项目
更新 `.env.local`:
```bash
NEXT_PUBLIC_STUBHUB_AFFILIATE_ID=您的Publisher_ID
```

### 💡 优化建议
- 在门票价格旁边添加 "Best Price Guarantee" 标签
- 使用动态价格显示（如果可接入 API）
- 添加紧迫感："仅剩 XX 张票"

---

## 2. Vivid Seats 联盟计划

### 📋 基本信息
- **佣金模式**: CPS
- **佣金比例**: 8-12% (通常高于 StubHub)
- **Cookie 有效期**: 30 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-60)

### 🔗 接入平台
**Impact.com** 或 **CJ Affiliate**

### 📝 申请步骤

#### 通过 Impact.com 申请
1. 登录 Impact.com
2. 搜索 "Vivid Seats"
3. 申请流程同 StubHub

#### 通过 CJ Affiliate 申请
1. 访问 [CJ Affiliate](https://www.cj.com)
2. 注册为 Publisher
3. 搜索 "Vivid Seats" 并申请

#### 获取追踪参数
- 参数名称: `wsUser` 或 `affid`
- 示例: `https://www.vividseats.com/fiesta-bowl-tickets.html?wsUser=YOUR_ID`

#### 配置到项目
```bash
NEXT_PUBLIC_VIVID_SEATS_AFFILIATE_ID=您的wsUser_ID
```

### 💡 优化建议
- 与 StubHub 进行价格对比展示
- 突出 "110% Price Match Guarantee"
- 针对价格敏感用户

---

# 二、📺 直播类联盟计划（高优先级）

## 3. FuboTV 联盟计划

### 📋 基本信息
- **佣金模式**: CPA (按新订阅用户)
- **佣金金额**: $40-$80 每个新用户
- **Cookie 有效期**: 30 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-30)

### 🔗 接入平台
**Impact.com** 或 **Direct Program**

### 📝 申请步骤

#### Step 1: 访问 FuboTV 联盟页面
1. 搜索 "FuboTV Affiliate Program"
2. 或访问 Impact.com 搜索 "FuboTV"

#### Step 2: 填写申请
```
网站类型: 体育内容/赛事指南
目标受众: 美国体育迷，特别是大学橄榄球观众
推广策略: 在直播观看指南页面推广 FuboTV 免费试用
预计流量: 每月 1000+ 访问者
```

#### Step 3: 获取追踪链接
- 参数名称: `irad` (Impact Radius Affiliate ID)
- 示例: `https://www.fubo.tv/welcome?irad=YOUR_ID`

#### 配置到项目
```bash
NEXT_PUBLIC_FUBOTV_AFFILIATE_ID=您的irad_ID
```

### 💡 优化建议
- 突出 "7-Day Free Trial"
- 列出包含的频道（ESPN, ABC 等）
- 添加 "Watch on Any Device" 图标

---

## 4. Hulu + Live TV 联盟计划

### 📋 基本信息
- **佣金模式**: CPA
- **佣金金额**: $15-$30 每个新订阅
- **Cookie 有效期**: 30 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-30)

### 🔗 接入平台
**Rakuten Advertising** (原 LinkShare)

### 📝 申请步骤

#### Step 1: 注册 Rakuten Advertising
1. 访问 [Rakuten Advertising](https://rakutenadvertising.com)
2. 点击 "Join as a Publisher"
3. 完成注册流程

#### Step 2: 申请 Hulu 计划
1. 登录 Rakuten 仪表板
2. 搜索 "Hulu"
3. 申请 "Hulu + Live TV" 计划

#### Step 3: 获取追踪链接
- 参数名称: `cmp` 或 `affid`
- 示例: `https://www.hulu.com/live-tv?cmp=YOUR_ID`

#### 配置到项目
```bash
NEXT_PUBLIC_HULU_AFFILIATE_ID=您的cmp_ID
```

### 💡 优化建议
- 强调 "Hulu + Disney+ + ESPN+ Bundle"
- 适合移动观看的用户
- 添加设备兼容性图标

---

## 5. YouTube TV 联盟计划

### 📋 基本信息
- **佣金模式**: 目前 **无官方联盟计划**
- **替代方案**: 使用通用链接或考虑其他平台

### ⚠️ 当前状态
YouTube TV 目前没有公开的联盟计划。建议：
1. 保留链接作为用户服务
2. 重点推广 FuboTV 和 Hulu
3. 定期检查是否开放联盟计划

### 配置
```typescript
// 当前配置为直接链接，无追踪参数
'watch-youtube': {
    url: 'https://tv.youtube.com/welcome/',
    subId: 'fiesta_live_stream',
}
```

---

## 6. Sling TV 联盟计划

### 📋 基本信息
- **佣金模式**: CPA
- **佣金金额**: $20-$40 每个新订阅
- **Cookie 有效期**: 30 天
- **最低支付**: $50

### 🔗 接入平台
**Impact.com** 或 **CJ Affiliate**

### 📝 申请步骤
1. 在 Impact.com 或 CJ Affiliate 搜索 "Sling TV"
2. 申请流程同上述平台
3. 获取追踪链接

### 💡 优化建议
- 针对预算有限的用户
- 突出 "Starting at $40/month"
- 强调 "No Contract Required"

---

# 三、🏨 住宿类联盟计划（最高客单价）

## 7. Vrbo 联盟计划

### 📋 基本信息
- **佣金模式**: CPS
- **佣金比例**: 3-5% 的预订金额
- **平均订单价值**: $500-$2000
- **Cookie 有效期**: 7 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-60)

### 🔗 接入平台
**Expedia Group Affiliate Program** 或 **CJ Affiliate**

### 📝 申请步骤

#### Step 1: 注册 Expedia Group Affiliate Program
1. 访问 [Expedia Group Affiliate](https://www.expediagroup.com/affiliates)
2. 点击 "Join Now"
3. 填写申请表：
   ```
   网站类型: 旅游/赛事指南
   主要内容: 体育赛事旅行规划
   目标受众: 计划前往亚利桑那州观看 Fiesta Bowl 的球迷
   预计月访问量: [根据实际填写]
   ```

#### Step 2: 选择品牌
- ✅ Vrbo
- ✅ Hotels.com
- ✅ Expedia

#### Step 3: 获取追踪链接
- 参数名称: `affiliateId` 或 `semcid`
- 示例: `https://www.vrbo.com/search/keywords:glendale-arizona?affiliateId=YOUR_ID`

#### Step 4: 配置到项目
```bash
NEXT_PUBLIC_VRBO_AFFILIATE_ID=您的affiliateId
NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID=您的affiliateId
```

### 💡 优化建议
- 创建 "Near State Farm Stadium" 专题
- 展示房源照片（使用 Vrbo Widget）
- 添加 "Perfect for Game Day" 标签
- 突出 "Entire Home" 优势

---

## 8. Hotels.com 联盟计划

### 📋 基本信息
- **佣金模式**: CPS
- **佣金比例**: 4-6%
- **Cookie 有效期**: 7 天
- **最低支付**: $50

### 🔗 接入平台
**Expedia Group** 或 **CJ Affiliate**

### 📝 申请步骤
同 Vrbo，通过 Expedia Group Affiliate Program 统一管理

### 配置
```bash
# 使用相同的 Expedia Group Affiliate ID
NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID=您的affiliateId
```

---

## 9. Expedia 联盟计划

### 📋 基本信息
- **佣金模式**: CPS
- **佣金比例**: 
  - 酒店: 4-6%
  - 机票: 1-2%
  - 租车: 3-5%
  - 套餐: 5-8%
- **Cookie 有效期**: 7 天

### 💡 优化建议
- 推广 "Flight + Hotel" 套餐（更高佣金）
- 针对外州球迷
- 添加 "Book Together, Save More" CTA

---

# 四、🅿️ 停车类联盟计划

## 10. ParkWhiz 联盟计划

### 📋 基本信息
- **佣金模式**: CPA/CPS
- **佣金金额**: $2-$5 每次预订
- **Cookie 有效期**: 30 天
- **最低支付**: $50

### 🔗 接入平台
**Impact.com** 或 **ShareASale**

### 📝 申请步骤
1. 在 Impact.com 或 ShareASale 搜索 "ParkWhiz"
2. 申请计划
3. 获取追踪链接

### ⚠️ 当前状态
目前配置为直接链接，需要申请联盟计划后更新

### 💡 优化建议
- 这是 **冷门暴利点**
- 添加 "Reserve Parking Now" CTA
- 展示价格对比（提前预订 vs 现场购买）
- 突出 "Guaranteed Spot" 优势

---

# 五、💰 博彩类联盟计划（高收益）

## 11. DraftKings 联盟计划

### 📋 基本信息
- **佣金模式**: CPA 或 RevShare
- **CPA**: $100-$300 每个新用户
- **RevShare**: 25-40% NGR
- **Cookie 有效期**: 30 天
- **最低支付**: $75
- **支付周期**: 月结 (Net-30)

### 🔗 接入平台
**Income Access**

### 📝 详细申请步骤
请参考 [`DRAFTKINGS_AFFILIATE_GUIDE.md`](file:///f:/AI-DEV/fiestabowl2026-live/DRAFTKINGS_AFFILIATE_GUIDE.md)

### 配置
```bash
NEXT_PUBLIC_DRAFTKINGS_AFFILIATE_ID=您的wpsrc_ID
```

### 💡 优化建议
- 展示实时赔率
- 添加 "First Bet Insurance" 促销
- 包含负责任博彩声明
- 年龄限制警告（21+）

### ⚠️ 合规要求
- 必须添加联盟披露声明
- 包含负责任博彩信息
- 某些州可能需要许可证

---

# 六、👕 周边商品类联盟计划

## 12. Fanatics 联盟计划

### 📋 基本信息
- **佣金模式**: CPS
- **佣金比例**: 8-12%
- **Cookie 有效期**: 7 天
- **最低支付**: $50
- **支付周期**: 月结 (Net-30)

### 🔗 接入平台
**Impact.com** 或 **ShareASale**

### 📝 申请步骤

#### Step 1: 选择平台
- **Impact.com**: 更专业，报告更详细
- **ShareASale**: 更容易批准

#### Step 2: 申请 Fanatics 计划
1. 登录选择的平台
2. 搜索 "Fanatics"
3. 申请计划

#### Step 3: 获取追踪链接
创建两个专属链接：
- Miami Hurricanes 商品页
- Ole Miss Rebels 商品页

### ⚠️ 当前状态
目前配置为直接链接，需要申请后添加追踪参数

### 配置
```bash
NEXT_PUBLIC_FANATICS_AFFILIATE_ID=您的affiliate_ID
```

### 💡 优化建议
- 展示热门商品（球衣、帽子）
- 添加 "Show Your Team Spirit" CTA
- 赛前促销期重点推广
- 使用产品图片和价格

---

# 七、🚀 快速启动清单

## 立即行动（第 1 周）

### 1. 注册核心平台
- [ ] **Impact.com** - 最重要，覆盖 60% 的联盟计划
- [ ] **CJ Affiliate** - 备选平台
- [ ] **Rakuten Advertising** - 用于 Hulu

### 2. 申请高优先级计划（按顺序）
- [ ] **StubHub** - 门票（最高优先级）
- [ ] **Vivid Seats** - 门票
- [ ] **Vrbo/Expedia Group** - 住宿（高客单价）
- [ ] **FuboTV** - 直播
- [ ] **DraftKings** - 博彩（高佣金）

### 3. 准备申请材料
- [ ] 网站描述（英文，200-300 字）
- [ ] 推广计划说明
- [ ] 流量数据（如有）
- [ ] 税务表格（W-9 或 W-8BEN）

---

## 第 2 周：配置和测试

### 1. 获取所有 Affiliate ID
- [ ] 记录每个平台的 ID
- [ ] 创建追踪链接
- [ ] 测试链接是否正常工作

### 2. 更新环境变量
创建 `.env.local` 文件：
```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Affiliate Tracking IDs - 门票
NEXT_PUBLIC_STUBHUB_AFFILIATE_ID=your_stubhub_id
NEXT_PUBLIC_VIVID_SEATS_AFFILIATE_ID=your_vivid_seats_id

# Affiliate Tracking IDs - 直播
NEXT_PUBLIC_FUBOTV_AFFILIATE_ID=your_fubotv_id
NEXT_PUBLIC_HULU_AFFILIATE_ID=your_hulu_id

# Affiliate Tracking IDs - 住宿
NEXT_PUBLIC_VRBO_AFFILIATE_ID=your_vrbo_id
NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID=your_expedia_id

# Affiliate Tracking IDs - 博彩
NEXT_PUBLIC_DRAFTKINGS_AFFILIATE_ID=your_draftkings_id

# Affiliate Tracking IDs - 周边
NEXT_PUBLIC_FANATICS_AFFILIATE_ID=your_fanatics_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://fiestabowl2026.live

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://ocydfneykohffxulfkvw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jeWRmbmV5a29oZmZ4dWxma3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MzUxODEsImV4cCI6MjA4MzUxMTE4MX0.75-bdk7376LGBMMkHkcKTi4_UcnSK7XH7YFdGujt3Qs
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jeWRmbmV5a29oZmZ4dWxma3Z3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzkzNTE4MSwiZXhwIjoyMDgzNTExMTgxfQ.39Y1CpiRJk8H01wI_W-DSGYSx3U7S7Su8zNPhFE2kDY
```

### 3. 测试所有链接
```bash
# 启动开发服务器
npm run dev

# 测试每个链接
# 访问 http://localhost:3000/go/tickets-stubhub
# 访问 http://localhost:3000/go/watch-fubo
# 等等...
```

---

## 第 3-4 周：优化和监控

### 1. 添加合规声明
在网站底部添加：
```html
<p class="affiliate-disclosure">
  本网站包含联盟链接。如果您通过我们的链接购买或注册，
  我们可能会获得佣金，这不会影响您的费用。
</p>
```

### 2. 设置追踪和分析
- [ ] 配置 Google Tag Manager
- [ ] 设置转化追踪
- [ ] 监控点击率

### 3. 优化转化率
- [ ] A/B 测试不同的 CTA 文案
- [ ] 优化按钮位置
- [ ] 添加紧迫感元素

---

# 八、📊 收益预估

基于您的网站流量和转化率，这里是保守的收益预估：

## 假设条件
- 月访问量: 10,000
- 平均点击率: 5%
- 平均转化率: 2%

## 预估月收益

| 类别 | 点击数 | 转化数 | 单次佣金 | 月收益 |
|------|--------|--------|---------|--------|
| 门票 (StubHub/Vivid) | 200 | 10 | $15 | $150 |
| 直播 (FuboTV/Hulu) | 150 | 5 | $50 | $250 |
| 住宿 (Vrbo/Expedia) | 100 | 3 | $75 | $225 |
| 博彩 (DraftKings) | 50 | 2 | $150 | $300 |
| 周边 (Fanatics) | 50 | 5 | $10 | $50 |
| **总计** | **550** | **25** | - | **$975** |

### 🚀 增长潜力
- **赛季高峰期**（12月-1月）: 收益可能翻倍
- **SEO 优化后**: 流量增长 3-5 倍
- **社交媒体推广**: 额外 20-30% 流量

---

# 九、🎯 高级优化策略

## 1. 动态内容集成

### StubHub API 集成
```javascript
// 示例：实时显示票价
async function getTicketPrices() {
  const response = await fetch('https://api.stubhub.com/...')
  const data = await response.json()
  return data.minPrice // "Starting from $240"
}
```

### Vrbo Widget 嵌入
```html
<!-- Vrbo 提供的 HTML Widget -->
<div id="vrbo-widget" data-location="glendale-az"></div>
<script src="https://www.vrbo.com/widgets/..."></script>
```

## 2. 个性化推荐

根据用户行为推荐：
- 查看门票 → 推荐住宿
- 查看直播 → 推荐博彩
- 外州 IP → 重点推荐机票+酒店套餐

## 3. 邮件营销集成

收集邮箱后发送：
- 赛前 7 天：门票提醒
- 赛前 3 天：直播选项
- 赛前 1 天：停车和博彩

---

# 十、📞 支持和资源

## 联盟平台支持

### Impact.com
- 支持邮箱: support@impact.com
- 文档: https://impact.com/resources

### CJ Affiliate
- 支持邮箱: publishersupport@cj.com
- 文档: https://www.cj.com/resources

### Rakuten Advertising
- 支持邮箱: support@rakutenadvertising.com

## 税务信息

### 美国纳税人
填写 **W-9 表格**

### 非美国纳税人
填写 **W-8BEN 表格**（个人）或 **W-8BEN-E**（公司）

## 合规资源
- FTC 联盟披露指南: https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- 负责任博彩: https://www.ncpgambling.org

---

# 十一、❓ 常见问题

### Q1: 需要多长时间才能获得批准？
**A**: 通常 2-5 个工作日，某些平台可能需要 1-2 周。

### Q2: 可以同时推广竞争对手的产品吗？
**A**: 可以！同时推广 StubHub 和 Vivid Seats 是常见做法。

### Q3: 如果申请被拒绝怎么办？
**A**: 
- 检查网站内容是否完整
- 确保有足够的流量数据
- 等待 30 天后重新申请
- 联系平台支持寻求反馈

### Q4: Cookie 有效期是什么意思？
**A**: 用户点击您的链接后，在有效期内完成购买，您都能获得佣金。

### Q5: 需要支付任何费用吗？
**A**: 不需要！所有联盟计划都是免费加入的。

### Q6: 如何追踪收益？
**A**: 每个平台都提供仪表板，显示点击、转化和收益数据。

### Q7: 什么时候能收到付款？
**A**: 大多数平台是月结，通常在次月 30-60 天后支付。

---

# 十二、🎉 总结

您已经配置了一个完整的联盟营销生态系统！

## 下一步行动
1. ✅ 立即注册 Impact.com 和 CJ Affiliate
2. ✅ 申请前 5 个高优先级计划
3. ✅ 准备税务表格
4. ✅ 创建 `.env.local` 文件
5. ✅ 测试所有链接
6. ✅ 添加合规声明
7. ✅ 开始监控数据

## 需要帮助？
如果在申请或配置过程中遇到问题，随时联系我！

---

**祝您联盟营销成功！** 💰🎯🚀
