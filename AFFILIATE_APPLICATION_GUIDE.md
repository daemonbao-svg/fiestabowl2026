# Affiliate 平台申请指南 (Impact.com & CJ Affiliate)

本指南旨在帮助您在 **Impact.com** 和 **CJ Affiliate** 上顺利注册并获得 **StubHub**, **Vrbo**, **FuboTV** 等核心品牌的推广授权。

---

## 一、 Impact.com 申请教程 (StubHub, Vivid Seats, FuboTV, Fanatics)

Impact 是目前体育和票务类品牌最集中的平台。

### 1. 注册账号 (Join as a Partner)
*   访问 [Impact.com](https://impact.com/zh-hans/publishers/)，点击 **"Join as a Partner"**。
*   选择注册方式（可以使用邮箱或 Google 账号）。
*   在 **"Primary Business Model"** 中，选择 **"Content / Reviews"** 或 **"Comparison Shopping"**（对应您的票务比价功能）。

### 2. 设置“媒体属性” (Media Property) - **关键步骤**
*   在个人资料中，添加您的网站 `https://www.fiestabowl2026.live/`。
    *   **重要**：务必完成网站所有权验证（通过添加 Meta 标签或上传文件到 Vercel）。
*   **描述 (Description)**：用英文填写，例如：
    > "A dedicated fan guide and ticket comparison platform for the 2026 Fiesta Bowl. We provide real-time ticket inventory updates, streaming navigation, and travel logistics for football fans."

### 3. 加入品牌计划 (Join Brands)
*   登录后台，点击左侧菜单的 **"Brands" > "Find Brands"**。
*   搜索关键字：`StubHub`, `Vivid Seats`, `FuboTV`, `Fanatics`。
*   点击 **"Apply"**。在申请理由中注明：
    > "Targeting fans attending the 2026 Fiesta Bowl at State Farm Stadium. High-conversion intent traffic for tickets and streaming."

### 4. 获取 ID (SID)
*   获得审核通过后，进入品牌页面点击 **"Create Link"**。
*   生成的链接中通常包含 `sid=` 或 `u=` 后面的数字，这就是您的 **Affiliate ID**。

---

## 二、 CJ Affiliate 申请教程 (Vrbo, Expedia, Hotels.com)

CJ 是全球最大的联盟网络之一，度假租赁和酒店资源非常丰富。

### 1. 注册账号
*   访问 [CJ.com](https://www.cj.com/)，选择 **"Publishers" > "Sign Up"**。
*   填写公司信息和联系方式。

### 2. 创建“推广属性项目” (Promotional Property)
*   在 **"Account" > "Promotional Properties"** 中点击 **"Create Property"**。
*   **Property Type**：选择 **"Website"**。
*   **Value Proposition**：描述您的网站如何通过 Fiesta Bowl 吸引流量。
*   **Target Audience**：选择 **"Travel"** 和 **"Sports Fans"**。

### 3. 定向申请品牌
*   点击 **"Advertisers"**，搜索 `Vrbo` 或 `Expedia`。
*   CJ 通常对网站质量有一定要求。如果您的网站已经上线且内容充实（目前已上线），通过率会很高。
*   找到品牌后点击 **"Apply to Program"**。

### 4. 获取 Tracking ID (PID)
*   在 CJ 中，这通常称为 **PID (Property ID)**。
*   在 "Account" 页面可以看到您的 Property 列表，旁边的 ID 即为填入环境变量的值。

---

## 三、 提高申请通过率的 5 个技巧

1.  **网站必须在线**：不要在开发环境下申请。审核员会点击链接检查您的 `www.fiestabowl2026.live` 是否真的能用。
2.  **英文描述**：虽然是中文用户，但这两个平台的审核员主要是英文母语者。请务必使用准确的英文填写 Profile。
3.  **强调垂直领域**：强调您只针对 "2026 Fiesta Bowl" 这个特定高价值事件，这比说“我做一个通用体育站”更容易通过。
4.  **放置测试链接**：在申请期间，确保网站上的按钮点击后能正常追踪。
5.  **隐私政策**：确保您的网站页脚（Footer）有 "Privacy Policy" 或类似内容（目前您的代码中已有基本结构，建议添加一个简单的隐私声明页面）。

---

## 四、 环境变量配置速查表

获得 ID 后，请在 Vercel 后台添加以下变量：

| 平台 | 对应环境变量 | 说明 |
| :--- | :--- | :--- |
| Impact | `NEXT_PUBLIC_STUBHUB_AFFILIATE_ID` | StubHub 的 Tracking ID |
| CJ | `NEXT_PUBLIC_VRBO_AFFILIATE_ID` | Vrbo 的 Property ID |
| ... | ... | 其他依此类推 |
