// BEASTO AI — Main Application Controller

let currentView = null;
let currentMuscle = null;
let currentDomain = null;
let currentLevel = 'intermediate';
let searchQuery = '';

// ─── Initialize App ───────────────────────────────────────────────────────────
// Scripts are at bottom of <body>, so DOMContentLoaded may have already fired.
// Use readyState check to handle both cases safely.
function initApp() {
  // buildSidebar and showDashboard MUST come first:
  // showDashboard() injects #muscleGrid into the DOM — other calls depend on it.
  buildSidebar();
  showDashboard();   // showDashboard() internally calls buildMuscleGrid()
  setupSearch();
  setupLevelSelector();
  setupMobileHandlers();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebarNav');
  const domainItems = DOMAINS.map(d => `
    <li class="nav-item" data-domain="${d.id}" onclick="showDomain('${d.id}')">
      <span class="nav-icon">${d.icon}</span>
      <span class="nav-label">${d.name}</span>
    </li>
  `).join('');

  nav.innerHTML = `
    <li class="nav-item nav-section-label">KNOWLEDGE DOMAINS</li>
    ${domainItems}
  `;
}

// ─── Muscle Grid on Dashboard ─────────────────────────────────────────────────
function buildMuscleGrid() {
  const grid = document.getElementById('muscleGrid');
  const groups = {
    upper: { label: 'Upper Body', muscles: [] },
    arms: { label: 'Arms', muscles: [] },
    lower: { label: 'Lower Body', muscles: [] },
    core: { label: 'Core', muscles: [] },
  };

  Object.values(MUSCLES).forEach(m => {
    if (groups[m.group]) groups[m.group].muscles.push(m);
  });

  let html = '';
  Object.entries(groups).forEach(([key, group]) => {
    if (group.muscles.length === 0) return;
    html += `<div class="muscle-section-label">${group.label}</div>`;
    html += `<div class="muscles-row">`;
    group.muscles.forEach(m => {
      html += `
        <button class="muscle-card" onclick="showMuscle('${m.id}')" data-muscle="${m.id}">
          <div class="muscle-icon">${m.icon}</div>
          <div class="muscle-name">${m.name}</div>
          <div class="muscle-tag">${m.group.toUpperCase()}</div>
        </button>
      `;
    });
    html += `</div>`;
  });

  grid.innerHTML = html;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function showDashboard() {
  setActiveNav(null);
  currentView = 'dashboard';
  const main = document.getElementById('mainContent');
  main.innerHTML = `
    <div class="dashboard-hero">
      <div class="hero-badge">EVIDENCE-BASED FITNESS SCIENCE</div>
      <h1 class="hero-title">BEASTO <span class="hero-accent">AI</span></h1>
      <p class="hero-subtitle">Elite fitness intelligence. No bro-science. Just science.</p>
      <div class="hero-stats">
        <div class="stat"><span class="stat-num">15</span><span class="stat-label">Knowledge Domains</span></div>
        <div class="stat"><span class="stat-num">${Object.keys(MUSCLES).length}</span><span class="stat-label">Muscle Groups</span></div>
        <div class="stat"><span class="stat-num">50+</span><span class="stat-label">Exercises</span></div>
        <div class="stat"><span class="stat-num">3</span><span class="stat-label">Calculators</span></div>
      </div>
    </div>

    <div class="section-header">
      <h2>SELECT YOUR TARGET MUSCLE</h2>
      <p>Get a complete science-backed breakdown — anatomy, exercises, progression, and programming.</p>
    </div>
    <div id="muscleGrid" class="muscle-grid-container"></div>

    <div class="section-header" style="margin-top:4rem;">
      <h2>EXPLORE KNOWLEDGE DOMAINS</h2>
      <p>Deep-dive into 15 areas of fitness science — from hypertrophy to sleep optimization.</p>
    </div>
    <div class="domain-quick-grid">
      ${DOMAINS.map(d => `
        <button class="domain-quick-card" onclick="showDomain('${d.id}')" style="--accent:${d.color}">
          <span class="dqc-icon">${d.icon}</span>
          <span class="dqc-name">${d.name}</span>
          <span class="dqc-tag">${d.tagline}</span>
        </button>
      `).join('')}
    </div>
  `;

  buildMuscleGrid();
  animateCards();
}

// ─── Muscle View ──────────────────────────────────────────────────────────────
function showMuscle(id) {
  const m = MUSCLES[id];
  if (!m) return;
  currentMuscle = m;
  currentView = 'muscle';
  setActiveNav(null);

  const main = document.getElementById('mainContent');
  main.innerHTML = `
    <div class="content-header">
      <button class="back-btn" onclick="showDashboard()">← Back</button>
      <div class="content-title-row">
        <span class="content-icon">${m.icon}</span>
        <div>
          <h1 class="content-title">${m.name}</h1>
          <div class="level-selector" id="levelSelector">
            <button class="level-btn ${currentLevel === 'beginner' ? 'active' : ''}" onclick="setLevel('beginner')">Beginner</button>
            <button class="level-btn ${currentLevel === 'intermediate' ? 'active' : ''}" onclick="setLevel('intermediate')">Intermediate</button>
            <button class="level-btn ${currentLevel === 'advanced' ? 'active' : ''}" onclick="setLevel('advanced')">Advanced</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sections-wrapper">
      ${renderSection1(m)}
      ${renderSection2(m)}
      ${renderSection3(m)}
      ${renderSection4(m)}
      ${renderSection5(m)}
      ${renderSection6(m)}
    </div>
  `;

  main.scrollTop = 0;
  animateCards();
}

function renderSection1(m) {
  const o = m.overview;
  return `
    <div class="content-section section-1">
      <div class="section-tag">SECTION 1</div>
      <h2>Muscle Overview</h2>
      <div class="overview-grid">
        <div class="overview-card"><div class="ov-label">Origin</div><div class="ov-value">${o.origin}</div></div>
        <div class="overview-card"><div class="ov-label">Insertion</div><div class="ov-value">${o.insertion}</div></div>
        <div class="overview-card"><div class="ov-label">Primary Function</div><div class="ov-value">${o.primaryFunction}</div></div>
        <div class="overview-card"><div class="ov-label">Secondary Function</div><div class="ov-value">${o.secondaryFunction}</div></div>
        <div class="overview-card full"><div class="ov-label">Why It Matters: Aesthetics</div><div class="ov-value">${o.aesthetic}</div></div>
        <div class="overview-card full"><div class="ov-label">Why It Matters: Function</div><div class="ov-value">${o.functional}</div></div>
      </div>
    </div>
  `;
}

function renderSection2(m) {
  const exHtml = m.exercises.map((ex, i) => `
    <div class="exercise-card" style="animation-delay:${i * 0.08}s">
      <div class="ex-header">
        <div class="ex-rank">#${i + 1}</div>
        <div class="ex-info">
          <h3 class="ex-name">${ex.name}</h3>
          <div class="ex-region">${ex.region}</div>
        </div>
        <div class="ex-stars">${'★'.repeat(Math.round(ex.effectiveness / 2))}${'☆'.repeat(5 - Math.round(ex.effectiveness / 2))}</div>
      </div>
      <div class="ex-body">
        <div class="ex-block">
          <div class="ex-block-title">Setup</div>
          <p>${ex.setup}</p>
        </div>
        <div class="ex-block">
          <div class="ex-block-title">Execution</div>
          <ol>${ex.execution.map(s => `<li>${s}</li>`).join('')}</ol>
        </div>
        <div class="ex-two-col">
          <div class="ex-block">
            <div class="ex-block-title">⚠️ Common Mistakes</div>
            <ul>${ex.mistakes.map(e => `<li>${e}</li>`).join('')}</ul>
          </div>
          <div class="ex-block">
            <div class="ex-block-title">🎯 Form Cues</div>
            <ul class="cues-list">${ex.cues.map(c => `<li>"${c}"</li>`).join('')}</ul>
          </div>
        </div>
        <div class="rep-ranges">
          <div class="rep-block hypertrophy"><div class="rep-label">Hypertrophy</div><div class="rep-val">${ex.reps.hypertrophy}</div></div>
          <div class="rep-block strength"><div class="rep-label">Strength</div><div class="rep-val">${ex.reps.strength}</div></div>
          <div class="rep-block endurance"><div class="rep-label">Endurance</div><div class="rep-val">${ex.reps.endurance}</div></div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="content-section section-2">
      <div class="section-tag">SECTION 2</div>
      <h2>Best Exercises — Ranked by Effectiveness</h2>
      <div class="exercises-list">${exHtml}</div>
    </div>
  `;
}

function renderSection3(m) {
  const hw = m.homeWorkout;
  return `
    <div class="content-section section-3">
      <div class="section-tag">SECTION 3</div>
      <h2>Home Workout Alternatives</h2>
      <div class="home-grid">
        <div class="home-card">
          <div class="home-card-icon">🏠</div>
          <h3>Minimal Equipment</h3>
          <p>${hw.minimal}</p>
        </div>
        <div class="home-card">
          <div class="home-card-icon">🤸</div>
          <h3>Bodyweight</h3>
          <ul>${hw.bodyweight.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
        <div class="home-card">
          <div class="home-card-icon">🎽</div>
          <h3>Resistance Band</h3>
          <ul>${hw.resistanceBand.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderSection4(m) {
  const p = m.progression;
  return `
    <div class="content-section section-4">
      <div class="section-tag">SECTION 4</div>
      <h2>Beginner → Advanced Progression Plan</h2>
      <div class="progression-track">
        <div class="prog-step beginner ${currentLevel === 'beginner' ? 'active' : ''}">
          <div class="prog-badge">BEGINNER</div>
          <p>${p.beginner}</p>
        </div>
        <div class="prog-arrow">→</div>
        <div class="prog-step intermediate ${currentLevel === 'intermediate' ? 'active' : ''}">
          <div class="prog-badge">INTERMEDIATE</div>
          <p>${p.intermediate}</p>
        </div>
        <div class="prog-arrow">→</div>
        <div class="prog-step advanced ${currentLevel === 'advanced' ? 'active' : ''}">
          <div class="prog-badge">ADVANCED</div>
          <p>${p.advanced}</p>
        </div>
      </div>
    </div>
  `;
}

function renderSection5(m) {
  const s = m.science;
  return `
    <div class="content-section section-5">
      <div class="section-tag">SECTION 5</div>
      <h2>Science Insight</h2>
      <div class="science-grid">
        <div class="sci-card">
          <div class="sci-icon">⚙️</div>
          <h3>Mechanical Tension</h3>
          <p>${s.mechanicalTension}</p>
        </div>
        <div class="sci-card">
          <div class="sci-icon">🔬</div>
          <h3>Stretch-Mediated Hypertrophy</h3>
          <p>${s.stretchHypertrophy}</p>
        </div>
        <div class="sci-card">
          <div class="sci-icon">📐</div>
          <h3>Muscle Length Bias</h3>
          <p>${s.muscleLengthBias}</p>
        </div>
        <div class="sci-card">
          <div class="sci-icon">⚖️</div>
          <h3>Stability vs Free Weight</h3>
          <p>${s.stabilityAnalysis}</p>
        </div>
      </div>
    </div>
  `;
}

function renderSection6(m) {
  const prog = m.programming;
  return `
    <div class="content-section section-6">
      <div class="section-tag">SECTION 6</div>
      <h2>Programming Suggestion</h2>
      <div class="prog-cards">
        <div class="prog-info-card">
          <div class="prog-info-icon">📅</div>
          <div class="prog-info-label">Training Frequency</div>
          <div class="prog-info-val">${prog.frequency}</div>
        </div>
        <div class="prog-info-card">
          <div class="prog-info-icon">📊</div>
          <div class="prog-info-label">Weekly Volume</div>
          <div class="prog-info-val">${prog.volume}</div>
        </div>
        <div class="prog-info-card full">
          <div class="prog-info-icon">🗂️</div>
          <div class="prog-info-label">Recommended Splits</div>
          <div class="prog-info-val">${prog.split}</div>
        </div>
      </div>
    </div>
  `;
}

// ─── Domain View ──────────────────────────────────────────────────────────────
function showDomain(id) {
  const domain = DOMAINS.find(d => d.id === id);
  if (!domain) return;
  currentDomain = domain;
  currentView = 'domain';
  setActiveNav(id);

  const main = document.getElementById('mainContent');

  if (domain.isCalculator) {
    main.innerHTML = `
      <div class="content-header">
        <button class="back-btn" onclick="showDashboard()">← Back</button>
        <div class="content-title-row">
          <span class="content-icon">${domain.icon}</span>
          <div>
            <h1 class="content-title">${domain.name}</h1>
            <p class="content-desc">${domain.tagline}</p>
          </div>
        </div>
      </div>
      <div id="calcContainer"></div>
    `;
    const container = document.getElementById('calcContainer');
    if (domain.calculatorType === 'macros') {
      renderMacroCalculator(container);
    } else if (domain.calculatorType === 'calories') {
      renderCalorieCalculator(container);
    }
    return;
  }

  main.innerHTML = `
    <div class="content-header">
      <button class="back-btn" onclick="showDashboard()">← Back</button>
      <div class="content-title-row">
        <span class="content-icon" style="color:${domain.color}">${domain.icon}</span>
        <div>
          <h1 class="content-title">${domain.name}</h1>
          <p class="content-desc">${domain.tagline}</p>
        </div>
      </div>
    </div>
    <div class="domain-sections">
      ${domain.sections.map((section, i) => `
        <div class="domain-section fade-in" style="animation-delay:${i * 0.1}s">
          <div class="ds-number">0${i + 1}</div>
          <h2 class="ds-title">${section.title}</h2>
          <div class="ds-content">${formatDomainContent(section.content)}</div>
        </div>
      `).join('')}
    </div>
  `;

  main.scrollTop = 0;
  animateCards();
}

function formatDomainContent(raw) {
  // Convert markdown-style to HTML
  let html = raw
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^(#{1,3})\s+(.+)$/gm, (_, h, t) => `<h${h.length + 2}>${t}</h${h.length + 2}>`)
    .replace(/^(\|.+\|)$/gm, m => m) // tables passthrough
    .replace(/✅ /g, '<span class="check">✅</span> ')
    .replace(/❌ /g, '<span class="cross">❌</span> ')
    .replace(/⚠️ /g, '<span class="warn">⚠️</span> ')
    .replace(/💡 /g, '<span class="tip">💡</span> ');

  // Table detection and conversion
  const lines = html.split('\n');
  const result = [];
  let inTable = false;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) { inTable = true; tableRows = []; }
      if (line.includes('---')) continue; // separator row
      const cells = line.slice(1, -1).split('|').map(c => c.trim());
      tableRows.push(cells);
    } else {
      if (inTable) {
        result.push(renderTable(tableRows));
        inTable = false; tableRows = [];
      }
      if (line.startsWith('- ')) {
        // gather consecutive list items
        let li = `<ul class="domain-list"><li>${line.slice(2)}</li>`;
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
          i++;
          li += `<li>${lines[i].trim().slice(2)}</li>`;
        }
        li += '</ul>';
        result.push(li);
      } else if (/^\d+\. /.test(line)) {
        let li = `<ol class="domain-list"><li>${line.replace(/^\d+\. /, '')}</li>`;
        while (i + 1 < lines.length && /^\d+\. /.test(lines[i + 1].trim())) {
          i++;
          li += `<li>${lines[i].trim().replace(/^\d+\. /, '')}</li>`;
        }
        li += '</ol>';
        result.push(li);
      } else if (line === '') {
        result.push('<br>');
      } else {
        result.push(`<p>${line}</p>`);
      }
    }
  }
  if (inTable) result.push(renderTable(tableRows));

  return result.join('');
}

function renderTable(rows) {
  if (rows.length === 0) return '';
  const header = rows[0].map(c => `<th>${c}</th>`).join('');
  const body = rows.slice(1).map(row =>
    `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`
  ).join('');
  return `<div class="table-wrap"><table class="sci-table"><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`;
}

// ─── Search ───────────────────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ''; results.style.display = 'none'; return; }

    const matches = [];
    Object.values(MUSCLES).forEach(m => {
      if (m.name.toLowerCase().includes(q)) {
        matches.push({ type: 'muscle', label: m.name, icon: m.icon, id: m.id });
      }
      m.exercises.forEach(ex => {
        if (ex.name.toLowerCase().includes(q)) {
          matches.push({ type: 'exercise', label: `${ex.name} (${m.name})`, icon: '🏋️', id: m.id });
        }
      });
    });
    DOMAINS.forEach(d => {
      if (d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q)) {
        matches.push({ type: 'domain', label: d.name, icon: d.icon, id: d.id });
      }
    });

    if (matches.length === 0) {
      results.innerHTML = '<div class="sr-empty">No results found</div>';
    } else {
      results.innerHTML = matches.slice(0, 8).map(m => `
        <div class="sr-item" onclick="handleSearchClick('${m.type}','${m.id}')">
          <span class="sr-icon">${m.icon}</span>
          <span class="sr-label">${m.label}</span>
          <span class="sr-type">${m.type}</span>
        </div>
      `).join('');
    }
    results.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      results.style.display = 'none';
    }
  });
}

window.handleSearchClick = function (type, id) {
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchInput').value = '';
  if (type === 'muscle' || type === 'exercise') showMuscle(id);
  if (type === 'domain') showDomain(id);
};

// ─── Level Selector ───────────────────────────────────────────────────────────
function setupLevelSelector() { }

window.setLevel = function (level) {
  currentLevel = level;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.level-btn`).forEach(b => {
    if (b.textContent.toLowerCase() === level) b.classList.add('active');
  });
  document.querySelectorAll('.prog-step').forEach(s => s.classList.remove('active'));
  const activeStep = document.querySelector(`.prog-step.${level}`);
  if (activeStep) activeStep.classList.add('active');
};

// ─── Navigation Helpers ───────────────────────────────────────────────────────
function setActiveNav(id) {
  document.querySelectorAll('.nav-item[data-domain]').forEach(el => {
    el.classList.toggle('active', el.dataset.domain === id);
  });
}

window.showDashboard = showDashboard;
window.showMuscle = showMuscle;
window.showDomain = showDomain;

// ─── Mobile Sidebar ───────────────────────────────────────────────────────────
function setupMobileHandlers() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggle) toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  if (overlay) overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}

// ─── Animations ───────────────────────────────────────────────────────────────
function animateCards() {
  const cards = document.querySelectorAll('.muscle-card, .domain-quick-card, .exercise-card, .content-section, .domain-section');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 40 + 50);
  });
}

function animateEntrance() {
  document.body.classList.add('loaded');
}
