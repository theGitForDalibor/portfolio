/**
 * =========================================================================
 * PORTFOLIO_CONFIG - 个人技术主页集中式数据源
 * 遵循客观、克制、工程师风格的文案规范
 * =========================================================================
 */

const PORTFOLIO_CONFIG = {
  // 个人基本信息
  profile: {
    name: "Yang Yiming",
    alias: "Dalibor",
    badge: "Java Backend → AI Agent Engineering",
    title: "Engineering AI Agents on Solid Backend Foundations.",
    tagline: "基于多年 Java 与分布式后端工程经验，持续向 AI Agent Runtime、状态图编排与云端开发工作流延伸。",
    description: "不止于 LLM API 的调用与应用层集成，持续深入 Agent Runtime、Tool Calling、State Graph、Memory 以及端到端的云端工程实践。",
    location: "Beijing / Remote",
    statusText: "ALIBABA CLOUD ECS · LIVE",
    githubUsername: "theGitForDalibor",
    githubUrl: "https://github.com/theGitForDalibor",
    resumeUrl: "#contact",
    email: "contact@senguangai.cn"
  },

  // 核心定位要点（Core Perspective / 3 Pillars）
  pillars: [
    {
      title: "Backend Engineering Foundation",
      desc: "多年 Java / Spring Boot 微服务与分布式系统实践，积累并发控制、事务处理、服务通信与系统稳定性方面的工程经验。"
    },
    {
      title: "Agent Runtime & Tools",
      desc: "从模型调用进一步深入 Agent Runtime，探索运行循环、状态管理、Memory、RAG 与 Tool Calling，以及模型与外部系统之间的可靠交互。"
    },
    {
      title: "Cloud-Native Development Workflow",
      desc: "将云服务器、HTTPS、code-server 与 AI Coding Agent 结合，实践从浏览器访问、代码修改、测试验证到 Git 与容器交付的完整开发流程。"
    }
  ],

  // 个人技术演进路线 (Engineering Evolution)
  journey: [
    {
      phase: "01",
      title: "Java Backend & Microservices",
      desc: "Java、Spring Boot、微服务架构与企业级后端服务开发。"
    },
    {
      phase: "02",
      title: "Distributed Systems & Concurrency",
      desc: "并发控制、分布式协调、消息处理与数据可靠性等系统工程实践。"
    },
    {
      phase: "03",
      title: "Python & Async Foundations",
      desc: "Python、异步编程与 Agent 应用所需的基础运行环境与工程能力。"
    },
    {
      phase: "04",
      title: "LLM Fundamentals & Structured Output",
      desc: "理解 LLM 基本交互机制，实践 Prompt Engineering、上下文设计与结构化输出。"
    },
    {
      phase: "05",
      title: "RAG & Tool Calling",
      desc: "探索知识检索、Function Calling，以及模型与外部 API、数据库和系统工具之间的交互方式。"
    },
    {
      phase: "06",
      title: "Agent Engineering & Runtime Loops",
      desc: "从零实现 Framework-Free Agent，理解 Runtime Loop、Context、State、Memory、Tool Calling 与异常处理。"
    },
    {
      phase: "07",
      title: "LangChain & Ecosystem",
      desc: "通过 LangChain 学习 Agent 应用中的模块化抽象、工具集成、检索与链式执行。"
    },
    {
      phase: "08",
      title: "LangGraph & Stateful Orchestration",
      desc: "基于 LangGraph 探索 State Graph、条件路由、循环执行与 Human-in-the-loop 等状态化 Agent 模式。"
    },
    {
      phase: "09",
      title: "Practical AI Agent Applications",
      desc: "将 Agent Runtime 与工具系统应用于实际工程场景，探索 AI Agent 在开发工作流中的实际价值。"
    },
    {
      phase: "10",
      title: "Cloud AI Development Workflow",
      desc: "将 Browser、Agent、Cloud Workspace、Git 与 Docker 串联起来，形成个人云端 AI 开发工作流。"
    }
  ],

  // 核心项目列表 (Featured Projects)
  projects: [
    {
      id: "agentgraph",
      title: "AgentGraph",
      type: "LangGraph Agent Engineering Practice",
      status: "Active · Open Source",
      description: "用于系统学习与实践 LangGraph 的独立工程项目。在完成 Framework-Free Agent Runtime 实现后，进一步通过 LangGraph 探索 State Graph、节点编排、条件路由、循环执行与 Tool Calling 等 Agent 工程模式。",
      keyHighlights: [
        "State Graph 的状态定义与节点间流转",
        "条件路由、循环执行与流程终结",
        "Tool Calling 与多节点 Agent 流程编排"
      ],
      techStack: ["Python", "LangGraph", "Agent Runtime", "Graph Orchestration", "State", "Tool Calling", "Workflow"],
      githubUrl: "https://github.com/theGitForDalibor/AgentGraph",
      isPrimary: true
    },
    {
      id: "jarvisstudio",
      title: "JarvisStudio",
      type: "Personal AI Agent · Built from Scratch",
      status: "In Active Development",
      description: "从底层实现的个人 AI Agent 项目，用于深入探索 Agent Runtime、工具执行与交互式开发流程。整体交互形态与 Claude Code、Codex 等 Coding Agent 类似，并独立实现自己的 Runtime 与工具系统。",
      keyHighlights: [
        "独立实现 Agent Runtime Loop 与任务执行流程",
        "系统级工具集成：Shell、File、Git、HTTP",
        "Streaming、Session 与 Human-in-the-loop Approval",
        "持续探索 Memory、Workflow 与 Agent 应用能力"
      ],
      techStack: ["Python", "Agent Runtime", "Tool Calling", "Shell Tool", "Git Tool", "Streaming", "Human-in-the-loop", "Memory"],
      githubUrl: null, // 内部开发项目，无公开外部仓库链接
      isPrimary: true
    }
  ],

  // 个人云端 AI 开发工作流 (Personal Cloud AI Development Workflow)
  workflow: {
    title: "Personal Cloud AI Development Workflow",
    tagline: "Browser → Agent → Cloud Workspace → Git → Docker → Deploy",
    description: "通过 HTTPS 访问云端 code-server 工作区，在远程环境中运行 Claude Code、Codex 与 JarvisStudio。Agent 可以参与需求分析、代码修改、测试验证、Git 提交以及 Docker 构建，形成一套实际可用的个人云端开发工作流。",
    conceptStatement: "将开发环境迁移到云端，让 AI Agent 可以在远程工作区中参与代码修改、测试、版本控制与部署，同时保留人工审核与最终决策。",
    steps: [
      {
        icon: "monitor",
        step: "01",
        name: "Client Access",
        detail: "浏览器 / 移动端通过 HTTPS 访问云端开发环境，并由前置认证控制访问入口。"
      },
      {
        icon: "terminal",
        step: "02",
        name: "Remote Workspace",
        detail: "code-server 提供浏览器端开发环境，终端与工作区运行在云服务器上。"
      },
      {
        icon: "cpu",
        step: "03",
        name: "AI Agent Execution",
        detail: "Claude Code / Codex / JarvisStudio 在云端终端中运行，通过模型 API 执行代码分析、修改与工具调用。"
      },
      {
        icon: "folder",
        step: "04",
        name: "Workspace Verification",
        detail: "Agent 在工作区中读写代码并运行测试，通过实际执行结果验证修改。"
      },
      {
        icon: "git",
        step: "05",
        name: "Git & GitHub Sync",
        detail: "通过独立 SSH 密钥完成 Git 提交与 GitHub 仓库同步。"
      },
      {
        icon: "box",
        step: "06",
        name: "Docker Build & Deploy",
        detail: "通过 Docker / Compose 构建并运行应用，将验证后的代码进一步部署到云端。"
      }
    ],
    techComponents: [
      "Alibaba Cloud ECS",
      "Ubuntu Linux",
      "Caddy",
      "code-server",
      "Claude Code",
      "Codex CLI",
      "Docker",
      "Git",
      "GitHub"
    ]
  },

  // 技能矩阵 (按领域客观归类，无主观打星)
  skillCategories: [
    {
      name: "Backend & Systems",
      icon: "server",
      skills: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "Distributed Systems", "MySQL", "SQLite", "Redis", "RESTful APIs", "Concurrency"]
    },
    {
      name: "AI Agent Engineering",
      icon: "cpu",
      skills: ["Python", "Agent Runtime", "Tool Calling", "LangGraph", "LangChain", "State Graphs", "RAG", "Memory", "Workflow"]
    },
    {
      name: "AI Development",
      icon: "sparkles",
      skills: ["Claude Code", "OpenAI Codex CLI", "JarvisStudio", "Agent-assisted Development", "Automated Testing", "Refactoring"]
    },
    {
      name: "Cloud & DevOps",
      icon: "cloud",
      skills: ["Alibaba Cloud ECS", "Ubuntu Linux", "Docker", "Docker Compose", "Caddy", "HTTPS / TLS", "Git", "GitHub", "Shell"]
    }
  ],

  // 认证与资质 (Professional Credentials)
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Active Credential",
      badgeText: "AWS Certified",
      desc: "AWS 云基础认证，覆盖云计算基础、核心服务、安全、定价与基础架构等知识领域。"
    }
  ]
};
