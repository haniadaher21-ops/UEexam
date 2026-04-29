// ============================================================
//  APP.JS — Logique navigation, QCM, dissertations, citations, stats
// ============================================================

// ---- ÉTAT GLOBAL -------------------------------------------
const state = {
  // QCM
  qcmQueue: [],
  qcmIndex: 0,
  qcmCorrect: 0,
  qcmWrong: 0,
  qcmAnswered: false,
  qcmMissed: [],          // questions ratées dans la session
  selectedThemes: new Set(),

  // Citations
  citQueue: [],
  citIndex: 0,
  citCorrect: 0,
  citWrong: 0,
  citAnswered: false,

  // Stats persistantes (localStorage)
  stats: loadStats(),
};

// ---- PERSISTANCE -------------------------------------------
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem("ue_stats")) || {
      total: 0, correct: 0, wrong: 0,
      byTheme: {},      // { themeId: { total, correct } }
      byQuestion: {},   // { questionIndex: { total, wrong } }
    };
  } catch { return { total: 0, correct: 0, wrong: 0, byTheme: {}, byQuestion: {} }; }
}

function saveStats() {
  localStorage.setItem("ue_stats", JSON.stringify(state.stats));
}

// ---- NAVIGATION --------------------------------------------
function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  document.getElementById("screen-" + name).classList.add("active");
  const btn = document.querySelector(`[data-screen="${name}"]`);
  if (btn) btn.classList.add("active");

  if (name === "stats") renderStats();
}

// ---- INITIALISATION ----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderPartsGrid();
  renderThemePills();
  renderDissertations();
  updateNavScore();
});

// ---- GRILLE DES 9 PARTIES (accueil) ------------------------
function renderPartsGrid() {
  const grid = document.getElementById("parts-grid");
  if (!grid) return;
  grid.innerHTML = THEMES.map(t => {
    const count = QUESTIONS.filter(q => q.theme === t.id).length;
    const s = state.stats.byTheme[t.id] || { total: 0, correct: 0 };
    const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
    return `
      <div class="part-card" onclick="quickStartTheme('${t.id}')">
        <span class="part-icon">${t.icon}</span>
        <div class="part-info">
          <strong>${t.label}</strong>
          <span>${count} questions</span>
        </div>
        ${pct !== null ? `<span class="part-pct ${pct >= 70 ? 'good' : pct >= 40 ? 'mid' : 'low'}">${pct}%</span>` : '<span class="part-pct none">–</span>'}
      </div>`;
  }).join("");
}

function quickStartTheme(themeId) {
  showScreen("qcm");
  state.selectedThemes.clear();
  state.selectedThemes.add(themeId);
  document.querySelectorAll(".theme-pill").forEach(p => {
    p.classList.toggle("selected", p.dataset.theme === themeId);
  });
  updateQCMCountLabel();
  startQCM();
}

// ---- THEME PILLS -------------------------------------------
function renderThemePills() {
  const container = document.getElementById("theme-pills");
  if (!container) return;

  // "Tout mélanger"
  const shuffleBtn = `<button class="theme-pill shuffle selected" data-theme="all" onclick="toggleTheme('all', this)">🔀 Tout mélanger</button>`;

  const pills = THEMES.map(t => {
    const count = QUESTIONS.filter(q => q.theme === t.id).length;
    return `<button class="theme-pill" data-theme="${t.id}" onclick="toggleTheme('${t.id}', this)">${t.icon} ${t.label} <small>(${count})</small></button>`;
  }).join("");

  container.innerHTML = shuffleBtn + pills;

  // Par défaut : tout sélectionné
  state.selectedThemes.add("all");
  updateQCMCountLabel();
}

function toggleTheme(id, el) {
  if (id === "all") {
    // Désélectionner tout le reste, cocher "all"
    state.selectedThemes.clear();
    state.selectedThemes.add("all");
    document.querySelectorAll(".theme-pill").forEach(p => {
      p.classList.toggle("selected", p.dataset.theme === "all");
    });
  } else {
    // Désélectionner "all"
    state.selectedThemes.delete("all");
    document.querySelector('[data-theme="all"]').classList.remove("selected");

    if (state.selectedThemes.has(id)) {
      state.selectedThemes.delete(id);
      el.classList.remove("selected");
    } else {
      state.selectedThemes.add(id);
      el.classList.add("selected");
    }

    // Si rien de sélectionné → remettre "all"
    if (state.selectedThemes.size === 0) {
      state.selectedThemes.add("all");
      document.querySelector('[data-theme="all"]').classList.add("selected");
    }
  }
  updateQCMCountLabel();
}

function selectAllThemes() {
  state.selectedThemes.clear();
  state.selectedThemes.add("all");
  document.querySelectorAll(".theme-pill").forEach(p => {
    p.classList.toggle("selected", p.dataset.theme === "all");
  });
  updateQCMCountLabel();
}

function updateQCMCountLabel() {
  const label = document.getElementById("qcm-count-label");
  if (!label) return;
  const count = getFilteredQuestions().length;
  label.textContent = `${count} question${count > 1 ? "s" : ""} sélectionnée${count > 1 ? "s" : ""}`;
}

function getFilteredQuestions() {
  if (state.selectedThemes.has("all")) return [...QUESTIONS];
  return QUESTIONS.filter(q => state.selectedThemes.has(q.theme));
}

// ---- QCM : DÉMARRAGE ---------------------------------------
function startQCM() {
  let pool = getFilteredQuestions();
  if (pool.length === 0) { showToast("Sélectionne au moins un thème !"); return; }

  // Mélange Fisher-Yates
  pool = shuffle(pool);

  state.qcmQueue = pool;
  state.qcmIndex = 0;
  state.qcmCorrect = 0;
  state.qcmWrong = 0;
  state.qcmMissed = [];

  document.getElementById("qcm-setup").classList.add("hidden");
  document.getElementById("qcm-game").classList.add("active");
  document.getElementById("qcm-results").style.display = "none";

  renderQuestion();
}

function renderQuestion() {
  const q = state.qcmQueue[state.qcmIndex];
  const total = state.qcmQueue.length;
  const idx = state.qcmIndex;
  state.qcmAnswered = false;

  // Barre de progression
  document.getElementById("qcm-progress-bar").style.width = `${(idx / total) * 100}%`;
  document.getElementById("qcm-counter").textContent = `Question ${idx + 1} / ${total}`;
  document.getElementById("qcm-score-live").textContent = `✅ ${state.qcmCorrect} / ❌ ${state.qcmWrong}`;

  // Thème tag
  const theme = THEMES.find(t => t.id === q.theme);
  document.getElementById("q-theme-tag").textContent = theme ? `${theme.icon} ${theme.label}` : "";

  // Texte question
  document.getElementById("q-text").textContent = q.question;

  // Options
  const grid = document.getElementById("options-grid");
  grid.innerHTML = q.options.map((opt, i) =>
    `<button class="option-btn" onclick="selectAnswer(${i})">${opt}</button>`
  ).join("");

  // Reset feedback
  const fb = document.getElementById("feedback-box");
  fb.className = "feedback-box";
  fb.style.display = "none";

  // Bouton suivant
  const btnNext = document.getElementById("btn-next");
  btnNext.disabled = true;
  btnNext.textContent = idx + 1 < total ? "Suivant →" : "Voir les résultats";
}

function selectAnswer(chosenIdx) {
  if (state.qcmAnswered) return;
  state.qcmAnswered = true;

  const q = state.qcmQueue[state.qcmIndex];
  const correct = q.answer;
  const isCorrect = chosenIdx === correct;

  // Colorer les boutons
  const btns = document.querySelectorAll(".option-btn");
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    else if (i === chosenIdx && !isCorrect) btn.classList.add("wrong");
  });

  // Animation
  const card = document.getElementById("question-card");
  card.classList.add(isCorrect ? "bounce" : "shake");
  setTimeout(() => card.classList.remove("bounce", "shake"), 400);

  // Feedback
  const fb = document.getElementById("feedback-box");
  fb.style.display = "block";
  fb.className = `feedback-box show ${isCorrect ? "correct-fb" : "wrong-fb"}`;
  document.getElementById("feedback-header").innerHTML = isCorrect
    ? "✅ Bonne réponse !"
    : `❌ Mauvaise réponse — La bonne réponse était : <em>${q.options[correct]}</em>`;
  document.getElementById("feedback-text").textContent = q.explanation;

  // Compteurs
  if (isCorrect) {
    state.qcmCorrect++;
  } else {
    state.qcmWrong++;
    state.qcmMissed.push(state.qcmIndex);
  }

  // Màj stats persistantes
  const qIdx = QUESTIONS.indexOf(q);
  if (qIdx !== -1) {
    updateQuestionStats(qIdx, q.theme, isCorrect);
  }

  document.getElementById("qcm-score-live").textContent = `✅ ${state.qcmCorrect} / ❌ ${state.qcmWrong}`;
  document.getElementById("btn-next").disabled = false;

  updateNavScore();
}

function updateQuestionStats(qIdx, themeId, isCorrect) {
  const s = state.stats;
  s.total++;
  if (isCorrect) s.correct++; else s.wrong++;

  if (!s.byTheme[themeId]) s.byTheme[themeId] = { total: 0, correct: 0 };
  s.byTheme[themeId].total++;
  if (isCorrect) s.byTheme[themeId].correct++;

  if (!s.byQuestion[qIdx]) s.byQuestion[qIdx] = { total: 0, wrong: 0 };
  s.byQuestion[qIdx].total++;
  if (!isCorrect) s.byQuestion[qIdx].wrong++;

  saveStats();
}

function nextQuestion() {
  state.qcmIndex++;
  if (state.qcmIndex >= state.qcmQueue.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  document.getElementById("qcm-game").classList.remove("active");
  const resultsDiv = document.getElementById("qcm-results");
  resultsDiv.style.display = "block";

  const total = state.qcmCorrect + state.qcmWrong;
  const pct = total > 0 ? Math.round((state.qcmCorrect / total) * 100) : 0;

  // Cercle de score
  const circle = document.getElementById("score-circle");
  circle.style.setProperty("--pct", pct);
  document.getElementById("score-inner").textContent = `${pct}%`;

  // Message
  let title, sub;
  if (pct >= 85) { title = "🏆 Excellent !"; sub = "Tu maîtrises parfaitement ce sujet."; }
  else if (pct >= 65) { title = "👍 Bien joué !"; sub = "Encore un peu de révision et tu y es."; }
  else if (pct >= 40) { title = "📚 Continue !"; sub = "Revois les questions ratées pour progresser."; }
  else { title = "💪 À retravailler"; sub = "N'hésite pas à relire ta fiche puis à recommencer."; }

  document.getElementById("results-title").textContent = title;
  document.getElementById("results-subtitle").textContent =
    `${state.qcmCorrect} bonnes réponses sur ${total} — ${sub}`;

  // Bouton "refaire les ratées"
  document.getElementById("btn-retry-missed").style.display =
    state.qcmMissed.length > 0 ? "inline-flex" : "none";

  // Liste des questions ratées
  const missed = document.getElementById("missed-questions");
  if (state.qcmMissed.length > 0) {
    const items = state.qcmMissed.map(i => {
      const q = state.qcmQueue[i];
      return `<div class="missed-item">
        <strong>❌ ${q.question}</strong>
        <span>✅ ${q.options[q.answer]}</span>
      </div>`;
    }).join("");
    missed.innerHTML = `<h4>🔍 Questions ratées</h4>${items}`;
  } else {
    missed.innerHTML = `<p style="color:var(--success);font-weight:600;text-align:center;padding:1rem">🎉 Aucune erreur — Score parfait !</p>`;
  }
}

function retryQCM() {
  document.getElementById("qcm-results").style.display = "none";
  startQCM();
}

function retryMissed() {
  if (state.qcmMissed.length === 0) return;
  const missedQuestions = state.qcmMissed.map(i => state.qcmQueue[i]);
  state.qcmQueue = shuffle(missedQuestions);
  state.qcmIndex = 0;
  state.qcmCorrect = 0;
  state.qcmWrong = 0;
  state.qcmMissed = [];

  document.getElementById("qcm-results").style.display = "none";
  document.getElementById("qcm-game").classList.add("active");
  renderQuestion();
}

function exitQCM() {
  document.getElementById("qcm-setup").classList.remove("hidden");
  document.getElementById("qcm-game").classList.remove("active");
  document.getElementById("qcm-results").style.display = "none";
  updateQCMCountLabel();
  showScreen("qcm");
}

// ---- DISSERTATIONS -----------------------------------------
function renderDissertations() {
  const grid = document.getElementById("dissertations-grid");
  if (!grid) return;

  grid.innerHTML = DISSERTATIONS.map((d, i) => `
    <div class="diss-card" id="diss-${i}">
      <div class="diss-header" onclick="toggleDiss(${i})">
        <div class="diss-number">${i + 1}</div>
        <div class="diss-title">${d.titre}</div>
        <span class="diss-arrow">▼</span>
      </div>
      <div class="diss-body">
        <div class="diss-intro">${d.intro}</div>
        <div class="plan-section">
          ${d.parties.map(p => `
            <div class="plan-part">
              <div class="plan-part-title">${p.titre}</div>
              ${p.sousparties.map(sp => `
                <div class="plan-sub">
                  <div class="plan-sub-title">${sp.titre}</div>
                  <ul>${sp.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
        ${d.citations && d.citations.length > 0 ? `
          <div class="divider"></div>
          <div style="font-weight:700;color:var(--eu-blue);margin-bottom:0.5rem">💬 Citations à mobiliser</div>
          ${d.citations.map(c => `<div class="citation-box"><em>${c}</em></div>`).join("")}
        ` : ""}
      </div>
    </div>
  `).join("");
}

function toggleDiss(i) {
  const card = document.getElementById(`diss-${i}`);
  card.classList.toggle("open");
}

// ---- CITATIONS GAME ----------------------------------------
function startCitations() {
  state.citQueue = shuffle([...CITATIONS]);
  state.citIndex = 0;
  state.citCorrect = 0;
  state.citWrong = 0;
  state.citAnswered = false;

  document.getElementById("citations-setup").classList.add("hidden");
  document.getElementById("citations-game").classList.add("active");
  document.getElementById("citations-results").style.display = "none";

  renderCitation();
}

function renderCitation() {
  const c = state.citQueue[state.citIndex];
  const total = state.citQueue.length;
  state.citAnswered = false;

  document.getElementById("cit-progress-bar").style.width =
    `${(state.citIndex / total) * 100}%`;
  document.getElementById("cit-counter").textContent =
    `Citation ${state.citIndex + 1} / ${total}`;
  document.getElementById("cit-score-live").textContent =
    `✅ ${state.citCorrect} / ❌ ${state.citWrong}`;

  document.getElementById("cit-text").textContent = `« ${c.quote} »`;
  document.getElementById("cit-context").textContent = c.context;

  // 4 options mélangées (bonne + 3 distracteurs)
  const options = shuffle([c.author, ...c.distractors]);
  const optContainer = document.getElementById("citation-options");
  optContainer.innerHTML = options.map(name =>
    `<button class="citation-opt-btn" onclick="selectCitation('${escapeName(name)}', '${escapeName(c.author)}')">${name}</button>`
  ).join("");

  // Reset feedback
  const fb = document.getElementById("citation-feedback");
  fb.className = "citation-feedback";
  fb.style.display = "none";

  document.getElementById("btn-cit-next").disabled = true;
  document.getElementById("btn-cit-next").textContent =
    state.citIndex + 1 < total ? "Suivant →" : "Voir les résultats";
}

function escapeName(name) {
  return name.replace(/'/g, "\\'");
}

function selectCitation(chosen, correct) {
  if (state.citAnswered) return;
  state.citAnswered = true;

  const isCorrect = chosen === correct;
  if (isCorrect) state.citCorrect++; else state.citWrong++;

  // Colorer les boutons
  document.querySelectorAll(".citation-opt-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim() === correct) btn.classList.add("correct");
    else if (btn.textContent.trim() === chosen && !isCorrect) btn.classList.add("wrong");
  });

  // Feedback
  const c = state.citQueue[state.citIndex];
  const fb = document.getElementById("citation-feedback");
  fb.style.display = "block";
  fb.className = `citation-feedback show ${isCorrect ? "correct-fb" : "wrong-fb"}`;
  document.getElementById("cit-who").innerHTML = isCorrect
    ? `✅ Correct — <strong>${correct}</strong>`
    : `❌ C'était <strong>${correct}</strong>`;
  document.getElementById("cit-detail").textContent = c.context;

  document.getElementById("cit-score-live").textContent =
    `✅ ${state.citCorrect} / ❌ ${state.citWrong}`;
  document.getElementById("btn-cit-next").disabled = false;

  updateNavScore();
}

function nextCitation() {
  state.citIndex++;
  if (state.citIndex >= state.citQueue.length) {
    showCitResults();
  } else {
    renderCitation();
  }
}

function showCitResults() {
  document.getElementById("citations-game").classList.remove("active");
  const resultsDiv = document.getElementById("citations-results");
  resultsDiv.style.display = "block";

  const total = state.citCorrect + state.citWrong;
  const pct = total > 0 ? Math.round((state.citCorrect / total) * 100) : 0;

  const circle = document.getElementById("cit-score-circle");
  circle.style.setProperty("--pct", pct);
  document.getElementById("cit-score-inner").textContent = `${pct}%`;

  let title;
  if (pct >= 85) title = "🏆 Tu connais tes sources !";
  else if (pct >= 60) title = "👍 Pas mal !";
  else title = "📚 Révise encore tes citations !";

  document.getElementById("cit-results-title").textContent = title;
  document.getElementById("cit-results-subtitle").textContent =
    `${state.citCorrect} bonnes réponses sur ${total}`;
}

function exitCitations() {
  document.getElementById("citations-setup").classList.remove("hidden");
  document.getElementById("citations-game").classList.remove("active");
  document.getElementById("citations-results").style.display = "none";
  showScreen("cit");
}

// ---- STATS -------------------------------------------------
function renderStats() {
  const s = state.stats;

  if (s.total === 0) {
    document.getElementById("stats-empty").style.display = "block";
    document.getElementById("stats-content").style.display = "none";
    return;
  }

  document.getElementById("stats-empty").style.display = "none";
  document.getElementById("stats-content").style.display = "block";

  document.getElementById("stat-total").textContent = s.total;
  document.getElementById("stat-correct").textContent = s.correct;
  document.getElementById("stat-wrong").textContent = s.wrong;
  const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  document.getElementById("stat-pct").textContent = `${pct}%`;

  // Stats par thème
  const themeRows = document.getElementById("theme-stats-rows");
  themeRows.innerHTML = THEMES.map(t => {
    const ts = s.byTheme[t.id] || { total: 0, correct: 0 };
    if (ts.total === 0) return "";
    const tPct = Math.round((ts.correct / ts.total) * 100);
    const colorClass = tPct >= 70 ? "low" : tPct >= 40 ? "medium" : "";
    return `
      <div class="hardest-item">
        <span class="miss-rate ${colorClass}">${tPct}%</span>
        <div>
          <div class="hardest-q-text">${t.icon} ${t.label}</div>
          <div class="hardest-q-theme">${ts.correct}/${ts.total} correctes</div>
        </div>
      </div>`;
  }).join("");

  // Questions les plus ratées
  const hardestRows = document.getElementById("hardest-rows");
  const entries = Object.entries(s.byQuestion)
    .filter(([, v]) => v.total > 0 && v.wrong > 0)
    .map(([idx, v]) => ({
      idx: parseInt(idx),
      missRate: Math.round((v.wrong / v.total) * 100),
      total: v.total,
    }))
    .sort((a, b) => b.missRate - a.missRate)
    .slice(0, 10);

  if (entries.length === 0) {
    hardestRows.innerHTML = `<p style="color:var(--success);padding:1rem;text-align:center">🎉 Aucune question systématiquement ratée !</p>`;
  } else {
    hardestRows.innerHTML = entries.map(e => {
      const q = QUESTIONS[e.idx];
      if (!q) return "";
      const theme = THEMES.find(t => t.id === q.theme);
      const colorClass = e.missRate >= 70 ? "" : e.missRate >= 40 ? "medium" : "low";
      return `
        <div class="hardest-item">
          <span class="miss-rate ${colorClass}">${e.missRate}%</span>
          <div style="flex:1">
            <div class="hardest-q-text">${q.question}</div>
            <div class="hardest-q-theme">${theme ? theme.icon + " " + theme.label : ""} · ${e.total} tentative${e.total > 1 ? "s" : ""}</div>
          </div>
        </div>`;
    }).join("");
  }
}

function resetStats() {
  if (!confirm("Réinitialiser toutes les statistiques ? Cette action est irréversible.")) return;
  state.stats = { total: 0, correct: 0, wrong: 0, byTheme: {}, byQuestion: {} };
  saveStats();
  renderStats();
  updateNavScore();
  renderPartsGrid();
  showToast("Stats réinitialisées");
}

// ---- SCORE NAVBAR ------------------------------------------
function updateNavScore() {
  const s = state.stats;
  const score = s.correct * 10;
  const el = document.getElementById("navbar-score");
  if (el) {
    el.textContent = `⭐ ${score} pts`;
    el.classList.add("pulse");
    setTimeout(() => el.classList.remove("pulse"), 400);
  }
}

// ---- TOAST -------------------------------------------------
function showToast(msg, gold = false) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show" + (gold ? " gold" : "");
  setTimeout(() => { t.className = "toast"; }, 2800);
}

// ---- UTILITAIRE : SHUFFLE ----------------------------------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- CSS DYNAMIQUE : PART CARDS & MISC --------------------
(function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .parts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 0.85rem;
    }
    .part-card {
      background: var(--white);
      border-radius: var(--radius);
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      cursor: pointer;
      box-shadow: var(--shadow);
      transition: var(--transition);
      border-left: 4px solid var(--eu-blue);
    }
    .part-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
    }
    .part-icon { font-size: 1.6rem; flex-shrink: 0; }
    .part-info { flex: 1; }
    .part-info strong { display: block; font-size: 0.9rem; color: var(--eu-blue); font-weight: 700; }
    .part-info span { font-size: 0.78rem; color: var(--gray-600); }
    .part-pct {
      font-size: 0.85rem;
      font-weight: 800;
      padding: 0.2rem 0.5rem;
      border-radius: 8px;
      min-width: 40px;
      text-align: center;
    }
    .part-pct.good { background: var(--success-bg); color: #065f46; }
    .part-pct.mid  { background: #fef3c7; color: #92400e; }
    .part-pct.low  { background: var(--error-bg); color: var(--error); }
    .part-pct.none { background: var(--gray-100); color: var(--gray-600); }
  `;
  document.head.appendChild(style);
})();
