/**
 * =========================================================================
 * PORTFOLIO_CONFIG - 个人主页集中式数据源
 * 以后新增、修改项目或技术栈时，只需修改本文件对应字段，无需变动 HTML 页面结构。
 * =========================================================================
 */

const PORTFOLIO_CONFIG = {
  // 个人基本信息
  profile: {
    name: "Yang Yiming",
    alias: "Dalibor",
    badge: "Java Backend → AI Agent Engineering",
    title: "Engineering AI Agents on Solid Backend Foundations.",
    tagline: "基于多年 Java 与分布式后端工程沉淀，向 AI Agent 运行时、状态图编排与自动化云端工作流深度延伸。",
    location: "Beijing / Remote",
    statusText: "Ready for Agent & Backend Engineering",
    githubUsername: "theGitForDalibor",
    githubUrl: "https://github.com/theGitForDalibor",
    resumeUrl: "#contact", // 可替换为实际简历链接或 PDF 地址
    email: "contact@senguangai.cn" // 预留联系邮箱
  },

  // 核心定位要点（突出差异化优势）
  pillars: [
    {
      title: "Backend Engineering Grounding",
      desc: "多年 Java / Spring Boot 微服务与高并发分布式经验，天然具备并发控制、事务状态、网络通信与系统稳定性的底层敏锐度。"
    },
    {
      title: "Deep Agent Runtime & Tools",
      desc: "超越单纯 API 调用层。深入探索 Agent Runtime 循环、状态持久化、内存机制、RAG 以及安全可控的系统级 Tool Calling。"
    },
    {
      title: "Cloud-Native Development Workflow",
      desc: "实践以云服务器、安全网关、code-server 和自主 AI 编码 Agent 为核心的全流程云端工作区，实现代码编辑到容器化交付的闭环。"
    }
  ],

  // 个人技术路线时间轴 (Engineering Journey)
  journey: [
    {
      phase: "01",
      title: "Java Backend & Microservices",
      desc: "深耕 Java、Spring Boot、分布式微服务架构与企业级高可用服务构建。"
    },
    {
      phase: "02",
      title: "Distributed Systems & Concurrency",
      desc: "攻克分布式锁、多线程并发安全、高吞吐消息流与持久化可靠性设计。"
    },
    {
      phase: "03",
      title: "Python & Algorithmic Foundations",
      desc: "掌握 Python 生态与现代异步并发，打通数据分析与机器学习基础设施桥梁。"
    },
    {
      phase: "04",
      title: "LLM Fundamentals & Structured Output",
      desc: "深入 Transformer / LLM 核心交互范式，掌握精准 Prompt Engineering 与结构化输出控制。"
    },
    {
      phase: "05",
      title: "RAG & Deterministic Tool Calling",
      desc: "实现知识库语义检索与 Function Calling，建立模型与外部 API / 数据库的确定性交互桥梁。"
    },
    {
      phase: "06",
      title: "Agent Engineering & Runtime Loops",
      desc: "从底层实现 Framework-Free 原生 Agent 运行时循环、上下文管理、状态存储与异常恢复。"
    },
    {
      phase: "07",
      title: "LangChain & Ecosystem Integrations",
      desc: "系统学习并应用 LangChain 提示词模板、输出解析器、检索链与模块化工具抽象。"
    },
    {
      phase: "08",
      title: "LangGraph & Stateful Graph Orchestration",
      desc: "基于 LangGraph 构建生产级复杂状态机图结构，实现条件分支路由、循环迭代与人在回路机制。"
    },
    {
      phase: "09",
      title: "Practical AI Agent Applications",
      desc: "将 Agent 理论落地为解决实际工程问题的应用产品，探索真实开发场景中的协作潜能。"
    },
    {
      phase: "10",
      title: "Cloud AI Development Workflow",
      desc: "构建属于个人的 Browser → Agent → Cloud Workspace → Git → Docker 全链路端到端闭环。"
    }
  ],

  // 核心项目列表 (Featured Projects)
  projects: [
    {
      id: "agentgraph",
      title: "AgentGraph",
      type: "LangGraph Agent Engineering Learning Project",
      status: "Active / Engineering Practice",
      description: "用于系统化深度掌握 LangGraph 的独立工程探索项目。在完成原生 framework-free Agent 实现后，进一步运用 LangGraph 理解生产级 Agent 状态机设计、多节点图拓扑编排、确定性条件路由与工具调用的工程解法。",
      keyHighlights: [
        "生产级 State Graph 状态定义与增量更新流转",
        "条件分支路由、循环纠错与确定性终结策略",
        "动态 Tool Calling 与多轮推理图拓扑编排"
      ],
      techStack: ["Python", "LangGraph", "Agent Runtime", "Graph Orchestration", "State", "Tool Calling", "Workflow"],
      githubUrl: "https://github.com/theGitForDalibor/AgentGraph",
      isPrimary: true
    },
    {
      id: "jarvisstudio",
      title: "JarvisStudio",
      type: "Personal AI Agent (Built from Scratch)",
      status: "In Active Development",
      description: "从底层自研的个人专属 AI Agent，与 Claude Code、Codex 属于同级交互形态。专注于深度探索 Agent Runtime 架构与实用化工具执行，内建系统级 Shell、文件系统、Git、HTTP 工具链，支持长会话记忆、流式交互与 Human-in-the-loop 安全审核控制。",
      keyHighlights: [
        "独立原生 Agent 循环，非外部 Gateway 拼装",
        "系统级安全工具调用 (Shell, File, Git, HTTP)",
        "支持 Streaming 流式输出与人类介入审核 (Approval)"
      ],
      techStack: ["Python", "Agent Runtime", "Tool Calling", "Shell Tool", "Git Tool", "Streaming", "Human-in-the-loop", "Memory"],
      githubUrl: null, // 内部核心项目，暂无公开外部链接
      isPrimary: true
    }
  ],

  // 个人云端 AI 开发工作流 (Cloud AI Development Workflow)
  workflow: {
    title: "Personal Cloud AI Development Workflow",
    tagline: "Browser → Agent → Cloud Workspace → Git → Docker → Deploy",
    description: "这是我实际在用的个人云端开发基础设施。摆脱对单一物理笔记本的依赖，通过安全 HTTPS + 认证网关连入阿里云云端工作区，调度 Claude Code、Codex 与 JarvisStudio 自主完成从需求分析、代码修改、pytest 验证到 Git 提交与 Docker 镜像交付的完整闭环。",
    steps: [
      {
        icon: "monitor",
        step: "01",
        name: "Client Access",
        detail: "浏览器 / 移动端通过 Caddy HTTPS (:443) 与前置基本认证安全穿透"
      },
      {
        icon: "terminal",
        step: "02",
        name: "IDE & PTY Guard",
        detail: "code-server 运行于 127.0.0.1，系统级 PTY 会话离线保持 3 小时以上不断线"
      },
      {
        icon: "cpu",
        step: "03",
        name: "AI Agent Execution",
        detail: "Claude Code / Codex / JarvisStudio 在宿主机终端调用国内直连 LLM API 执行任务"
      },
      {
        icon: "folder",
        step: "04",
        name: "Workspace Verification",
        detail: "Agent 在独立工作区自主读写代码，运行本地 pytest 单元测试确保质量"
      },
      {
        icon: "git",
        step: "05",
        name: "Git & GitHub Sync",
        detail: "使用隔离的 ed25519 密钥安全完成 Git commit 并推送到专属 GitHub 仓库"
      },
      {
        icon: "box",
        step: "06",
        name: "Docker Build & Deploy",
        detail: "容器化自动构建镜像，完成云端服务运行与健康探针全流程闭环"
      }
    ],
    techComponents: [
      "Alibaba Cloud ECS (Ubuntu)",
      "Caddy (HTTPS + Basic Auth)",
      "code-server 4.140",
      "Claude Code & Codex CLI",
      "Docker 29 & Compose",
      "Git & GitHub Deploy Keys"
    ]
  },

  // 技能矩阵 (按领域清晰分类，拒绝粗糙打星)
  skillCategories: [
    {
      name: "Backend & Systems",
      icon: "server",
      skills: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "Distributed Systems", "MySQL / SQLite", "Redis", "RESTful APIs", "Concurrency Programming"]
    },
    {
      name: "AI Agent Engineering",
      icon: "cpu",
      skills: ["Python", "Agent Runtime", "Tool Calling", "LangGraph", "LangChain", "State Graphs", "RAG", "Memory Systems", "Workflow Orchestration"]
    },
    {
      name: "AI Development & Agents",
      icon: "sparkles",
      skills: ["Claude Code", "OpenAI Codex CLI", "JarvisStudio", "Agent-assisted Pair Programming", "Automated TDD Refactoring"]
    },
    {
      name: "Cloud & DevOps",
      icon: "cloud",
      skills: ["Alibaba Cloud ECS", "Ubuntu Linux", "Docker & Docker Compose", "Caddy Server", "HTTPS / TLS", "Git & GitHub", "Shell Scripting"]
    }
  ],

  // 认证与资质 (Certifications)
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Active Credential",
      badgeText: "AWS Certified",
      desc: "具备云概念、安全合规、核心服务架构以及云端账单与运维支持的系统化能力认证。"
    }
  ]
};
