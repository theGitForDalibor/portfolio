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
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
  ];

  container.innerHTML = PORTFOLIO_CONFIG.pillars.map((item, idx) => `
    <div class="card pillar-card">
      <div>
        <div class="pillar-icon-box">
          ${icons[idx % icons.length]}
        </div>
        <h3 class="pillar-title">${item.title}</h3>
        <p class="pillar-desc">${item.desc}</p>
      </div>
      <div class="pillar-footer">
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
    <div class="journey-item">
      <span class="journey-badge">PHASE ${item.phase}</span>
      <h4 class="journey-title">${item.title}</h4>
      <p class="journey-desc">${item.desc}</p>
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
      <li class="insights-item">
        <span class="insights-dot">•</span>
        <span>${h}</span>
      </li>
    `).join("");

    const tagsHtml = proj.techStack.map(t => `
      <span class="tag-pill">${t}</span>
    `).join("");

    const actionHtml = isGithubAvailable ? `
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>访问 GitHub 仓库</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    ` : `
      <div class="btn btn-secondary" style="cursor: default;">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--amber); display: inline-block;"></span>
        <span>${proj.status}</span>
      </div>
    `;

    return `
      <div class="card project-card">
        <div>
          <div class="project-header">
            <div>
              <div class="project-type-tag">${proj.type}</div>
              <h3 class="project-title">${proj.title}</h3>
            </div>
            <span class="status-badge ${isGithubAvailable ? 'status-badge-green' : 'status-badge-slate'}">
              ${isGithubAvailable ? 'OPEN SOURCE' : 'ACTIVE IN-DEV'}
            </span>
          </div>

          <p class="project-desc">${proj.description}</p>

          <div class="insights-box">
            <div class="insights-title">Key Engineering Insights:</div>
            <ul class="insights-list">
              ${highlightsHtml}
            </ul>
          </div>
        </div>

        <div>
          <div class="tags-row">
            ${tagsHtml}
          </div>

          <div class="project-card-footer">
            ${actionHtml}
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim);">ID: #${proj.id.toUpperCase()}</span>
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
      <div class="workflow-step-box">
        <div class="step-num">STEP ${step.step}</div>
        <div class="step-title">${step.name}</div>
        <div class="step-detail">${step.detail}</div>
      </div>
    `).join("");
  }

  const techContainer = document.getElementById("workflow-tech-container");
  if (techContainer && workflow.techComponents) {
    techContainer.innerHTML = workflow.techComponents.map(item => `
      <span class="tag-pill" style="color: var(--cyan); border-color: rgba(56, 189, 248, 0.3);">${item}</span>
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
      <div class="card skill-category-card">
        <div class="skill-cat-title">${cat.name}</div>
        <div class="skill-tags-wrapper">
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
    <div class="card cert-card">
      <div class="cert-logo-box">AWS</div>
      <div>
        <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
          <div class="cert-card-title">${cert.name}</div>
          <span class="status-badge status-badge-green">${cert.badgeText}</span>
        </div>
        <div class="cert-meta">${cert.issuer} • ${cert.date}</div>
        <div class="cert-desc">${cert.desc}</div>
      </div>
    </div>
  `).join("");
}

// 8. Interactive Features: Navigation, Clipboard Copy & Toast
function initInteractions() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });
  }

  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
      const email = PORTFOLIO_CONFIG.profile?.email || "contact@senguangai.cn";
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`已复制邮箱: ${email}`);
        }).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    });
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(`已复制邮箱: ${text}`);
    } catch (err) {
      showToast(`邮箱: ${text}`);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
}
