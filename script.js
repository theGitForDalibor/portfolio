/**
 * =========================================================================
 * script.js - Portfolio Dynamic Renderer & Vanilla Interactions
 * Driven purely by PORTFOLIO_CONFIG from portfolio-data.js.
 * Zero external libraries, lightning-fast rendering.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PORTFOLIO_CONFIG === "undefined") {
    console.error("PORTFOLIO_CONFIG is not loaded. Check portfolio-data.js.");
    return;
  }

  initHeaderAndProfile();
  renderPillars();
  renderJourney();
  renderProjects();
  renderWorkflow();
  renderSkills();
  renderCertifications();
  initInteractions();
});

// 1. Header and Profile Setup
function initHeaderAndProfile() {
  const { profile } = PORTFOLIO_CONFIG;
  if (!profile) return;

  const badgeEl = document.getElementById("hero-badge-text");
  if (badgeEl && profile.badge) {
    badgeEl.textContent = profile.badge;
  }

  const navGithub = document.getElementById("nav-github-link");
  if (navGithub && profile.githubUrl) {
    navGithub.href = profile.githubUrl;
  }

  const heroGithub = document.getElementById("hero-github-btn");
  if (heroGithub && profile.githubUrl) {
    heroGithub.href = profile.githubUrl;
    const span = heroGithub.querySelector("span");
    if (span) span.textContent = `github.com/${profile.githubUsername}`;
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// 2. Render Core Perspectives / Pillars
function renderPillars() {
  const container = document.getElementById("pillars-container");
  if (!container || !PORTFOLIO_CONFIG.pillars) return;

  const icons = [
    `<svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    `<svg class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    `<svg class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`
  ];

  container.innerHTML = PORTFOLIO_CONFIG.pillars.map((item, idx) => `
    <div class="card p-6 flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        <div class="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
          ${icons[idx % icons.length]}
        </div>
        <h3 class="text-base font-bold text-white tracking-tight">${item.title}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">${item.desc}</p>
      </div>
      <div class="pt-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
        DIMENSION 0${idx + 1}
      </div>
    </div>
  `).join("");
}

// 3. Render Engineering Journey (Timeline)
function renderJourney() {
  const container = document.getElementById("journey-container");
  if (!container || !PORTFOLIO_CONFIG.journey) return;

  container.innerHTML = PORTFOLIO_CONFIG.journey.map(item => `
    <div class="journey-item flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="journey-phase-badge">PHASE ${item.phase}</span>
          <span class="text-[11px] font-mono text-slate-500">MILESTONE</span>
        </div>
        <h4 class="text-sm font-semibold text-slate-100">${item.title}</h4>
        <p class="text-xs text-slate-400 mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

// 4. Render Featured Projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !PORTFOLIO_CONFIG.projects) return;

  container.innerHTML = PORTFOLIO_CONFIG.projects.map(proj => {
    const isGithubAvailable = Boolean(proj.githubUrl && proj.githubUrl !== "#");

    const highlightsHtml = proj.keyHighlights.map(h => `
      <li class="flex items-start gap-2 text-xs text-slate-300">
        <span class="text-cyan-400 mt-0.5">•</span>
        <span>${h}</span>
      </li>
    `).join("");

    const tagsHtml = proj.techStack.map(t => `
      <span class="tag-pill">${t}</span>
    `).join("");

    const actionHtml = isGithubAvailable ? `
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs px-4 py-2 flex items-center gap-2 group-hover:shadow-md transition-all">
        <span>访问 GitHub 仓库</span>
        <svg class="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      </a>
    ` : `
      <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-2 rounded bg-slate-950/80 border border-slate-800">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>${proj.status}</span>
      </div>
    `;

    return `
      <div class="card p-6 md:p-8 project-card group relative">
        <div>
          <div class="project-card-header flex items-start justify-between gap-4">
            <div>
              <div class="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">${proj.type}</div>
              <h3 class="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">${proj.title}</h3>
            </div>
            <span class="px-2.5 py-1 rounded text-[10px] font-mono font-medium ${isGithubAvailable ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60' : 'bg-slate-800 text-slate-300 border border-slate-700'}">
              ${isGithubAvailable ? 'OPEN SOURCE' : 'ACTIVE IN-DEV'}
            </span>
          </div>

          <p class="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
            ${proj.description}
          </p>

          <div class="space-y-2 mb-6 p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div class="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Key Engineering Insights:</div>
            <ul class="space-y-1.5">
              ${highlightsHtml}
            </ul>
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagsHtml}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
            ${actionHtml}
            <span class="text-[11px] font-mono text-slate-500">ID: #${proj.id.toUpperCase()}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 5. Render Cloud AI Development Workflow
function renderWorkflow() {
  const { workflow } = PORTFOLIO_CONFIG;
  if (!workflow) return;

  const stepsContainer = document.getElementById("workflow-steps-container");
  if (stepsContainer && workflow.steps) {
    stepsContainer.innerHTML = workflow.steps.map(step => `
      <div class="workflow-step flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3 text-xs font-mono">
            <span class="text-cyan-400 font-bold">STEP ${step.step}</span>
            <span class="w-2 h-2 rounded-full bg-slate-700"></span>
          </div>
          <div class="text-sm font-semibold text-white">${step.name}</div>
          <div class="text-xs text-slate-400 mt-1 leading-relaxed">${step.detail}</div>
        </div>
      </div>
    `).join("");
  }

  const techContainer = document.getElementById("workflow-tech-container");
  if (techContainer && workflow.techComponents) {
    techContainer.innerHTML = workflow.techComponents.map(item => `
      <span class="tag-pill text-cyan-300 border-cyan-900/50 bg-cyan-950/20">${item}</span>
    `).join("");
  }
}

// 6. Render Skills Categories
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !PORTFOLIO_CONFIG.skillCategories) return;

  container.innerHTML = PORTFOLIO_CONFIG.skillCategories.map(cat => {
    const badgesHtml = cat.skills.map(s => `
      <span class="tag-pill">${s}</span>
    `).join("");

    return `
      <div class="card p-5 space-y-4">
        <div class="pb-3 border-b border-slate-800">
          <h3 class="text-sm font-bold text-white tracking-wide">${cat.name}</h3>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${badgesHtml}
        </div>
      </div>
    `;
  }).join("");
}

// 7. Render Certifications
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container || !PORTFOLIO_CONFIG.certifications) return;

  container.innerHTML = PORTFOLIO_CONFIG.certifications.map(cert => `
    <div class="card p-6 flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-center justify-center text-amber-400 flex-shrink-0 font-bold font-mono text-sm">
        AWS
      </div>
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <h3 class="text-base font-bold text-white">${cert.name}</h3>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-800/40">
            ${cert.badgeText}
          </span>
        </div>
        <div class="text-xs font-mono text-slate-400">${cert.issuer} • ${cert.date}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${cert.desc}</p>
      </div>
    </div>
  `).join("");
}

// 8. Interactive Features: Navigation, Clipboard Copy & Toast
function initInteractions() {
  // Mobile drawer toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close drawer when any mobile link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Copy email interaction
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
      const email = PORTFOLIO_CONFIG.profile?.email || "contact@senguangai.cn";
      
      navigator.clipboard.writeText(email).then(() => {
        showToast(`已复制邮箱: ${email}`);
      }).catch(() => {
        // Fallback for older browsers
        showToast(`邮箱: ${email}`);
      });
    });
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.remove("translate-y-20", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
      toast.classList.remove("translate-y-0", "opacity-100");
      toast.classList.add("translate-y-20", "opacity-0");
    }, 2800);
  }
}
