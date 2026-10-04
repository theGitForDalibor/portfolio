# Personal Engineering Portfolio

> **Yang Yiming (Dalibor)** — Java Backend Engineer → AI Agent Engineering
> 
> *Building practical AI Agents on solid backend foundations & cloud-native workflows.*

---

## 🌟 核心理念与技术定位

* **架构哲学**：视觉高级、大气现代、架构极简（纯静态、零编译步骤、零外部复杂依赖）。
* **技术定位**：基于多年 Java / 分布式系统工程经验，向 AI Agent 运行时（Agent Runtime）、LangGraph 状态图编排、系统级 Tool Calling 与自动化云端开发流深度延伸。
* **低维护成本**：全站内容（项目、技能、时间线、联系方式）统一由 `portfolio-data.js` 驱动，新增或修改项目只需修改配置文件中的一个 JSON 对象，无需修改 HTML 标签。

---

## 📂 项目结构

```text
portfolio/
├── index.html           # 语义化 HTML5 骨架与 SEO Meta 结构
├── style.css            # 现代暗黑系样式表 (Linear / Vercel 风格)
├── portfolio-data.js    # 集中式数据源 (修改项目、技能只需改这里)
├── script.js            # 原生轻量渲染与交互逻辑 (无外部框架)
├── favicon.svg          # 矢量图标
├── robots.txt           # 搜索引擎爬虫配置
├── sitemap.xml          # 静态站点地图
└── README.md            # 项目说明与维护指南
```

---

## 🛠️ 如何维护与更新内容

当你需要新增项目、调整技能或修改链接时，**只需打开 `portfolio-data.js`**：

1. **新增 / 编辑项目**：
   在 `PORTFOLIO_CONFIG.projects` 数组中添加或修改项目对象：
   ```javascript
   {
     id: "new-project",
     title: "Project Name",
     type: "Category / Subtitle",
     status: "Active / Released",
     description: "简洁克制的工程化描述...",
     keyHighlights: [
       "亮点 1",
       "亮点 2"
     ],
     techStack: ["Python", "LangGraph", "..."],
     githubUrl: "https://github.com/theGitForDalibor/your-repo"
   }
   ```
2. **更新技能矩阵**：修改 `PORTFOLIO_CONFIG.skillCategories`。
3. **更新成长路线**：修改 `PORTFOLIO_CONFIG.journey`。

---

## 🚀 部署方式

因为是 100% 静态网站（HTML + CSS + JS），可以在任何平台秒级部署：

### 方式 1：部署到当前阿里云 ECS
直接通过现有的 Caddy 进行静态托管，例如在 `/etc/caddy/Caddyfile` 中配置静态文件服务。

### 方式 2：GitHub Pages（一键免费托管）
1. 在 GitHub 上新建仓库（如 `theGitForDalibor.github.io` 或 `portfolio`）。
2. 将本目录代码推送到 GitHub `main` 分支。
3. 在仓库 `Settings -> Pages` 选择 `Deploy from a branch` -> `main` 即可全网访问。

### 方式 3：Vercel / Cloudflare Pages / Netlify
直接关联 GitHub 仓库，Build Command 留空，Publish Directory 设为 `./`，自动享受全球 CDN 加速。
