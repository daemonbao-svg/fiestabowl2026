# 🎯 联盟计划快速参考表

## 一、所有联盟计划概览

| # | 平台 | 类别 | 接入平台 | 佣金模式 | 佣金金额/比例 | Cookie | 优先级 | 状态 |
|---|------|------|---------|---------|-------------|--------|--------|------|
| 1 | **StubHub** | 🎫 门票 | Impact.com | CPS | 5-8% | 7-30天 | ⭐⭐⭐⭐⭐ | 待申请 |
| 2 | **Vivid Seats** | 🎫 门票 | Impact/CJ | CPS | 8-12% | 30天 | ⭐⭐⭐⭐⭐ | 待申请 |
| 3 | **FuboTV** | 📺 直播 | Impact.com | CPA | $40-$80 | 30天 | ⭐⭐⭐⭐ | 待申请 |
| 4 | **Hulu** | 📺 直播 | Rakuten | CPA | $15-$30 | 30天 | ⭐⭐⭐⭐ | 待申请 |
| 5 | **YouTube TV** | 📺 直播 | 无 | - | - | - | ⭐⭐ | 无计划 |
| 6 | **Sling TV** | 📺 直播 | Impact/CJ | CPA | $20-$40 | 30天 | ⭐⭐⭐ | 待申请 |
| 7 | **Vrbo** | 🏨 住宿 | Expedia Group | CPS | 3-5% | 7天 | ⭐⭐⭐⭐⭐ | 待申请 |
| 8 | **Hotels.com** | 🏨 住宿 | Expedia Group | CPS | 4-6% | 7天 | ⭐⭐⭐⭐ | 待申请 |
| 9 | **Expedia** | 🏨 住宿 | Expedia Group | CPS | 4-8% | 7天 | ⭐⭐⭐⭐ | 待申请 |
| 10 | **ParkWhiz** | 🅿️ 停车 | Impact/ShareASale | CPA/CPS | $2-$5 | 30天 | ⭐⭐⭐ | 待申请 |
| 11 | **DraftKings** | 💰 博彩 | Income Access | CPA/RevShare | $100-$300 / 25-40% | 30天 | ⭐⭐⭐⭐⭐ | 待申请 |
| 12 | **Fanatics** | 👕 周边 | Impact/ShareASale | CPS | 8-12% | 7天 | ⭐⭐⭐ | 待申请 |

---

## 二、按接入平台分组

### Impact.com（最重要 - 优先注册）
✅ 覆盖 8 个联盟计划
- StubHub
- Vivid Seats
- FuboTV
- Sling TV
- ParkWhiz
- Fanatics
- （可能）其他

### CJ Affiliate（备选平台）
✅ 覆盖 4 个联盟计划
- Vivid Seats
- Sling TV
- Vrbo (通过 Expedia Group)
- Hotels.com

### Expedia Group Affiliate Program
✅ 覆盖 3 个住宿平台
- Vrbo
- Hotels.com
- Expedia

### Rakuten Advertising
✅ 专门用于
- Hulu + Live TV

### Income Access
✅ 专门用于
- DraftKings

### ShareASale（备选）
✅ 可选平台
- ParkWhiz
- Fanatics

---

## 三、申请优先级顺序

### 🔥 第一批（立即申请 - 第 1 周）
1. **Impact.com 账号注册** ← 最重要！
2. **StubHub**（门票 - 核心转化）
3. **Vrbo**（住宿 - 高客单价）
4. **DraftKings**（博彩 - 高佣金）

### 🚀 第二批（第 2 周）
5. **Vivid Seats**（门票备选）
6. **FuboTV**（直播主推）
7. **Hulu**（直播备选）
8. **Expedia/Hotels.com**（住宿补充）

### 📈 第三批（第 3-4 周）
9. **Fanatics**（周边商品）
10. **Sling TV**（直播低价选项）
11. **ParkWhiz**（停车 - 冷门暴利）

---

## 四、环境变量配置清单

### 当前已配置
```bash
# ✅ 已在代码中配置，等待 Affiliate ID
NEXT_PUBLIC_STUBHUB_AFFILIATE_ID=
NEXT_PUBLIC_VIVID_SEATS_AFFILIATE_ID=
NEXT_PUBLIC_FUBOTV_AFFILIATE_ID=
NEXT_PUBLIC_HULU_AFFILIATE_ID=
NEXT_PUBLIC_VRBO_AFFILIATE_ID=
NEXT_PUBLIC_EXPEDIA_AFFILIATE_ID=
NEXT_PUBLIC_DRAFTKINGS_AFFILIATE_ID=
```

### 需要添加
```bash
# ⚠️ 需要申请后添加
NEXT_PUBLIC_FANATICS_AFFILIATE_ID=
NEXT_PUBLIC_PARKWHIZ_AFFILIATE_ID=
NEXT_PUBLIC_SLING_AFFILIATE_ID=
```

---

## 五、预估收益对比

### 按单次转化价值排序

| 排名 | 平台 | 单次佣金 | 转化难度 | ROI 评分 |
|------|------|---------|---------|---------|
| 🥇 | **DraftKings** | $100-$300 | 中 | ⭐⭐⭐⭐⭐ |
| 🥈 | **Vrbo** | $50-$100 | 中 | ⭐⭐⭐⭐⭐ |
| 🥉 | **FuboTV** | $40-$80 | 低 | ⭐⭐⭐⭐⭐ |
| 4 | **Expedia** | $30-$60 | 中 | ⭐⭐⭐⭐ |
| 5 | **Sling TV** | $20-$40 | 低 | ⭐⭐⭐⭐ |
| 6 | **Hulu** | $15-$30 | 低 | ⭐⭐⭐ |
| 7 | **StubHub** | $10-$30 | 高 | ⭐⭐⭐⭐ |
| 8 | **Vivid Seats** | $15-$40 | 高 | ⭐⭐⭐⭐ |
| 9 | **Fanatics** | $5-$15 | 中 | ⭐⭐⭐ |
| 10 | **ParkWhiz** | $2-$5 | 低 | ⭐⭐⭐ |

---

## 六、月收益预估（保守估计）

### 假设：月访问量 10,000

| 类别 | 点击率 | 转化率 | 月转化数 | 平均佣金 | 月收益 |
|------|--------|--------|---------|---------|--------|
| 🎫 门票 | 2% | 5% | 10 | $20 | **$200** |
| 📺 直播 | 1.5% | 3% | 5 | $50 | **$250** |
| 🏨 住宿 | 1% | 3% | 3 | $75 | **$225** |
| 💰 博彩 | 0.5% | 4% | 2 | $150 | **$300** |
| 👕 周边 | 0.5% | 10% | 5 | $10 | **$50** |
| **总计** | - | - | **25** | - | **$1,025** |

### 🚀 增长潜力

| 场景 | 月访问量 | 预估月收益 |
|------|---------|-----------|
| 当前（保守） | 10,000 | $1,000 |
| SEO 优化后 | 30,000 | $3,000 |
| 赛季高峰期 | 50,000 | $5,000 |
| 社交媒体推广 | 100,000 | $10,000+ |

---

## 七、关键追踪参数

### 各平台参数名称

| 平台 | 参数名称 | 示例 |
|------|---------|------|
| StubHub | `sid` | `?sid=12345` |
| Vivid Seats | `wsUser` | `?wsUser=12345` |
| FuboTV | `irad` | `?irad=12345` |
| Hulu | `cmp` | `?cmp=12345` |
| Vrbo | `affiliateId` | `?affiliateId=12345` |
| Expedia | `semcid` | `?semcid=12345` |
| DraftKings | `wpsrc` | `?wpsrc=12345` |
| Fanatics | `affid` | `?affid=12345` |

---

## 八、支付信息对比

| 平台 | 最低支付 | 支付周期 | 支付方式 |
|------|---------|---------|---------|
| StubHub | $50 | Net-60 | PayPal, Wire, Check |
| Vivid Seats | $50 | Net-60 | PayPal, Wire |
| FuboTV | $50 | Net-30 | PayPal, Wire |
| Hulu | $50 | Net-30 | PayPal, Wire |
| Vrbo/Expedia | $50 | Net-60 | PayPal, Wire, Check |
| DraftKings | $75 | Net-30 | PayPal, Wire, Check |
| Fanatics | $50 | Net-30 | PayPal, Wire |

---

## 九、合规要求清单

### ✅ 必须添加的声明

#### 1. 联盟披露声明
```html
<div class="affiliate-disclosure">
  <p>📢 联盟披露：本网站包含联盟链接。如果您通过我们的链接购买或注册，
  我们可能会获得佣金，这不会影响您的费用。</p>
</div>
```

#### 2. 博彩相关声明（仅 DraftKings）
```html
<div class="gambling-disclaimer">
  <p>⚠️ 必须年满 21 岁才能参与体育博彩。</p>
  <p>🎲 请负责任地投注。如需帮助，请拨打 1-800-GAMBLER。</p>
</div>
```

#### 3. Cookie 政策
```html
<p>🍪 本网站使用 Cookie 来追踪联盟链接。继续使用即表示您同意我们的 Cookie 政策。</p>
```

---

## 十、测试链接清单

### 本地测试（开发环境）
```bash
# 启动开发服务器
npm run dev

# 测试所有链接
http://localhost:3000/go/tickets-stubhub
http://localhost:3000/go/tickets-vivid
http://localhost:3000/go/watch-fubo
http://localhost:3000/go/watch-hulu
http://localhost:3000/go/watch-sling
http://localhost:3000/go/vrbo
http://localhost:3000/go/hotels
http://localhost:3000/go/expedia
http://localhost:3000/go/parking
http://localhost:3000/go/bet-draftkings
http://localhost:3000/go/miami-gear
http://localhost:3000/go/olemiss-gear
```

### 生产环境测试
```bash
https://fiestabowl2026.live/go/tickets-stubhub
https://fiestabowl2026.live/go/watch-fubo
# ... 等等
```

---

## 十一、常见错误和解决方案

| 错误 | 原因 | 解决方案 |
|------|------|---------|
| `{"error":"Invalid affiliate link"}` | Affiliate ID 未配置 | 检查 `.env.local` 文件 |
| 链接不跳转 | 环境变量未加载 | 重启开发服务器 |
| 追踪不工作 | Cookie 被阻止 | 检查浏览器设置 |
| 佣金未记录 | 链接格式错误 | 验证追踪参数 |

---

## 十二、联系信息

### 平台支持邮箱

| 平台 | 支持邮箱 |
|------|---------|
| Impact.com | support@impact.com |
| CJ Affiliate | publishersupport@cj.com |
| Rakuten | support@rakutenadvertising.com |
| Expedia Group | affiliates@expediagroup.com |
| Income Access | support@incomeaccess.com |

---

## 十三、税务表格

### 美国纳税人
- 表格：**W-9**
- 下载：https://www.irs.gov/forms-pubs/about-form-w-9

### 非美国纳税人
- 个人：**W-8BEN**
- 公司：**W-8BEN-E**
- 下载：https://www.irs.gov/forms-pubs/about-form-w-8-ben

---

## 十四、快速行动步骤

### 今天就做（30 分钟）
- [ ] 注册 Impact.com 账号
- [ ] 准备网站描述文案
- [ ] 下载并填写税务表格

### 本周完成（2-3 小时）
- [ ] 申请前 4 个高优先级计划
- [ ] 创建 `.env.local` 文件
- [ ] 添加合规声明到网站

### 下周完成（1-2 小时）
- [ ] 申请剩余联盟计划
- [ ] 测试所有链接
- [ ] 设置 Google Analytics 追踪

---

## 十五、成功指标

### 第一个月目标
- ✅ 至少 5 个联盟计划获批
- ✅ 所有链接正常工作
- ✅ 获得第一笔佣金

### 第三个月目标
- ✅ 月收益达到 $500+
- ✅ 所有 11 个计划全部激活
- ✅ 点击率达到 3%+

### 第六个月目标
- ✅ 月收益达到 $2,000+
- ✅ 转化率优化到 5%+
- ✅ 建立稳定的被动收入

---

**祝您联盟营销成功！** 💰

如有任何问题，请随时查阅 [`COMPLETE_AFFILIATE_INTEGRATION_GUIDE.md`](file:///f:/AI-DEV/fiestabowl2026-live/COMPLETE_AFFILIATE_INTEGRATION_GUIDE.md) 获取详细信息。
