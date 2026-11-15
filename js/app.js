/* ============================================================
   SimASSP — Logique applicative
   ============================================================ */
(function () {
  "use strict";
  const D = window.SIM_DATA;

  // ---------- ÉTAT ----------
  const STATE = {
    view: "accueil",
    scenario: null,
    stepIndex: 0,
    score: 0,
    answers: [],
    autoeval: {},
    progression: loadProgression(),
    teacherAuth: false
  };

  function loadProgression() {
    try { return JSON.parse(localStorage.getItem("simassp_progress") || "{}"); }
    catch (e) { return {}; }
  }
  function saveProgression() {
    localStorage.setItem("simassp_progress", JSON.stringify(STATE.progression));
  }
  function getLevel(compId) { return STATE.progression[compId] || 0; }
  function setLevel(compId, level) { STATE.progression[compId] = level; saveProgression(); }

  // ---------- NAVIGATION ----------
  const views = ["accueil","parcours","scenarios","autoeval","dashboard","enseignant"];
  function showView(name) {
    if (!views.includes(name)) name = "accueil";
    STATE.view = name;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("view--active"));
    const el = document.getElementById("view-" + name);
    if (el) el.classList.add("view--active");
    document.querySelectorAll(".nav__btn").forEach(b => {
      b.classList.toggle("nav__btn--active", b.dataset.nav === name);
    });
    // rendu à la demande
    if (name === "parcours") renderParcours();
    if (name === "scenarios") renderScenarios();
    if (name === "autoeval") renderAutoeval();
    if (name === "dashboard") renderDashboard();
    if (name === "enseignant") renderTeacher();
    if (name === "accueil") renderAccueil();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelectorAll("[data-nav]").forEach(b => {
    b.addEventListener("click", () => showView(b.dataset.nav));
  });
  document.getElementById("navToggle").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("nav--open");
  });

  // ---------- ACCUEIL ----------
  function renderAccueil() {
    // blocs
    const grid = document.getElementById("blocsGrid");
    grid.innerHTML = D.BLOCS.map(b => `
      <div class="bloc-card" style="border-left-color:${b.color}" onclick="showView('parcours')">
        <div class="bloc-card__head">
          <span class="bloc-card__emoji">${b.emoji}</span>
          <span class="bloc-card__code">${b.code}</span>
        </div>
        <div class="bloc-card__title">${b.title}</div>
        <div class="bloc-card__desc">${b.desc}</div>
        <div class="bloc-card__comps">
          ${D.COMPETENCES.filter(c=>c.bloc===b.code).map(c=>`<span class="chip">${c.id}</span>`).join("")}
        </div>
      </div>
    `).join("");

    // timeline
    const tl = document.getElementById("timeline");
    tl.innerHTML = D.TIMELINE.map(t => `
      <div class="tl-card">
        <div class="tl-card__year">📅 ${t.annee} — ${t.focus}</div>
        <div style="font-weight:600;font-size:.85rem;color:var(--c-accent);margin:6px 0 4px;">En centre</div>
        <ul>${t.centre.map(x=>`<li>${x}</li>`).join("")}</ul>
        <div style="font-weight:600;font-size:.85rem;color:var(--c-accent);margin:6px 0 4px;">En structure</div>
        <ul>${t.structure.map(x=>`<li>${x}</li>`).join("")}</ul>
        <div style="font-weight:600;font-size:.85rem;color:var(--c-primary);margin:6px 0 4px;">Objectifs</div>
        <ul>${t.objectifs.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
    `).join("");
  }

  // ---------- PARCOURS ----------
  function renderParcours() {
    const annee = document.getElementById("filtreAnnee").value;
    const bloc = document.getElementById("filtreBloc").value;
    const ctx = document.getElementById("filtreContexte").value;

    let list = D.COMPETENCES.slice();
    if (annee !== "all") list = list.filter(c => c.annees.includes(annee));
    if (bloc !== "all") list = list.filter(c => c.bloc === bloc);
    if (ctx !== "all") list = list.filter(c => c.contexte.includes(ctx));

    const container = document.getElementById("competencesList");
    if (list.length === 0) {
      container.innerHTML = `<div class="empty-state"><div class="empty-state__icon">🔍</div><p>Aucune compétence ne correspond à ces filtres.</p></div>`;
      return;
    }
    container.innerHTML = list.map(c => {
      const b = D.BLOCS.find(x=>x.code===c.bloc);
      const lvl = getLevel(c.id);
      const lvlObj = D.NIVEAUX.find(n=>n.code===lvl);
      return `
        <div class="comp-item">
          <div>
            <div class="comp-item__title">${c.id} — ${c.titre}</div>
            <div class="comp-item__desc">${c.desc}</div>
            <div class="comp-item__meta">
              <span class="tag tag--annee">${c.annees.map(a=>a==="2"?"2de":a==="1"?"1re":"Tle").join(", ")}</span>
              ${c.contexte.map(cx=>`<span class="tag tag--${cx}">${cx==="centre"?"Centre":"Structure"}</span>`).join("")}
              <span class="chip" style="background:${b.color};color:#fff">${b.code}</span>
            </div>
          </div>
          <div class="comp-item__level">
            <div class="level-badge level-${lvl}" title="${lvlObj.label}">${lvl}</div>
            <div style="font-size:.7rem;color:var(--c-muted);text-align:center;">${lvlObj.label}</div>
            <div class="rating" style="flex-direction:column;gap:2px;">
              ${D.NIVEAUX.map(n=>`<button class="btn--sm" style="background:${n.color};color:#fff;border:none;border-radius:6px;padding:2px 6px;font-size:.7rem;" onclick="setCompLevel('${c.id}',${n.code})">${n.code}</button>`).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
  window.setCompLevel = function (id, level) {
    setLevel(id, level);
    renderParcours();
    toast(`Niveau mis à jour : ${D.NIVEAUX.find(n=>n.code===level).label}`);
  };

  // filtres
  ["filtreAnnee","filtreBloc","filtreContexte"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", renderParcours);
  });

  // ---------- SCÉNARIOS ----------
  function renderScenarios() {
    const list = document.getElementById("scenarioList");
    list.innerHTML = D.SCENARIOS.map(s => {
      const b = D.BLOCS.find(x=>x.code===s.bloc);
      return `
        <div class="scenario-item ${STATE.scenario && STATE.scenario.id===s.id ? 'scenario-item--active':''}" onclick="openScenario('${s.id}')">
          <div class="scenario-item__title">${b.emoji} ${s.titre}</div>
          <div class="scenario-item__meta">${s.bloc} · ${s.annee==="2"?"2de":s.annee==="1"?"1re":"Tle"} · ${s.contexte} · ${s.duree}</div>
        </div>
      `;
    }).join("");
    if (!STATE.scenario) {
      document.getElementById("scenarioDetail").innerHTML = `
        <div class="empty-state"><div class="empty-state__icon">🎬</div><p>Sélectionne un scénario pour commencer la simulation.</p></div>`;
    } else {
      renderScenarioPlay();
    }
  }
  window.openScenario = function (id) {
    STATE.scenario = D.SCENARIOS.find(s=>s.id===id);
    STATE.stepIndex = 0;
    STATE.score = 0;
    STATE.answers = [];
    renderScenarios();
  };

  function renderScenarioPlay() {
    const s = STATE.scenario;
    const b = D.BLOCS.find(x=>x.code===s.bloc);
    const total = s.steps.length;
    const idx = STATE.stepIndex;
    const detail = document.getElementById("scenarioDetail");

    if (idx >= total) {
      // bilan
      const pct = Math.round((STATE.score / total) * 100);
      detail.innerHTML = `
        <div class="scenario-play">
          <div class="scenario-play__header">
            <div class="scenario-play__title">🏁 Bilan — ${s.titre}</div>
            <span class="chip" style="background:${b.color};color:#fff">${s.bloc}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar__fill" style="width:100%"></div></div>
          <div style="text-align:center;margin:20px 0;">
            <div style="font-size:3rem;font-weight:800;color:${pct>=70?'var(--c-accent)':'var(--c-warn)'}">${pct}%</div>
            <div style="color:var(--c-muted);">Score : ${STATE.score} / ${total} bonnes décisions</div>
          </div>
          <div class="feedback ${pct>=70?'feedback--good':'feedback--warn'}">
            <strong>📋 Analyse pédagogique</strong><br>${s.bilan}
          </div>
          <div style="margin-top:18px;">
            <h3 style="color:var(--c-primary);">🪞 Question de réflexivité</h3>
            <p class="muted">Qu'aurais-tu fait différemment et pourquoi ?</p>
            <textarea class="input" id="reflexText" rows="3" style="width:100%;min-width:0;"></textarea>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
            <button class="btn btn--primary" onclick="finishScenario()">✅ Valider et enregistrer</button>
            <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="replayScenario()">🔁 Rejouer</button>
            <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="openScenario('${s.id}')">🆕 Nouvelle tentative</button>
          </div>
        </div>
      `;
      return;
    }

    const step = s.steps[idx];
    detail.innerHTML = `
      <div class="scenario-play">
        <div class="scenario-play__header">
          <div class="scenario-play__title">${s.titre}</div>
          <span class="chip" style="background:${b.color};color:#fff">${s.bloc} · ${idx+1}/${total}</span>
        </div>
        <div class="progress-bar"><div class="progress-bar__fill" style="width:${(idx/total*100)}%"></div></div>
        <div class="scenario-step">
          <div class="scenario-step__q">${step.q}</div>
          ${step.choices.map((ch,i)=>`<button class="choice" onclick="chooseAnswer(${i})">${String.fromCharCode(65+i)}. ${ch.text}</button>`).join("")}
          ${step.hint ? `<div class="hint">💡 Indice : ${step.hint}</div>` : ""}
        </div>
      </div>
    `;
  }

  window.chooseAnswer = function (i) {
    const s = STATE.scenario;
    const step = s.steps[STATE.stepIndex];
    const ch = step.choices[i];
    const btns = document.querySelectorAll(".choice");
    btns.forEach((b, k) => {
      b.disabled = true;
      if (k === i) b.classList.add(ch.correct ? "choice--correct" : "choice--wrong");
      if (step.choices[k].correct) b.classList.add("choice--correct");
    });
    if (ch.correct) STATE.score++;
    STATE.answers.push({ step: STATE.stepIndex, choice: i, correct: ch.correct });

    const fb = document.createElement("div");
    fb.className = "feedback " + (ch.correct ? "feedback--good" : "feedback--bad");
    fb.innerHTML = `<strong>${ch.correct ? "✅ Bonne décision" : "❌ Décision à revoir"}</strong><br>${ch.feedback}`;
    document.querySelector(".scenario-step").appendChild(fb);

    const nav = document.createElement("div");
    nav.style.marginTop = "14px";
    nav.innerHTML = `<button class="btn btn--primary" onclick="nextStep()">Suivant →</button>`;
    document.querySelector(".scenario-step").appendChild(nav);
  };

  window.nextStep = function () {
    STATE.stepIndex++;
    renderScenarioPlay();
  };

  window.replayScenario = function () {
    STATE.stepIndex = 0; STATE.score = 0; STATE.answers = [];
    renderScenarioPlay();
  };

  window.finishScenario = function () {
    const s = STATE.scenario;
    const reflex = (document.getElementById("reflexText") || {}).value || "";
    // mise à jour progression : +1 niveau sur les compétences liées au bloc (simulation)
    const related = D.COMPETENCES.filter(c => c.bloc === s.bloc);
    related.forEach(c => {
      const cur = getLevel(c.id);
      if (cur < 3) setLevel(c.id, Math.min(3, cur + (STATE.score >= s.steps.length * 0.7 ? 1 : 0)));
    });
    // sauvegarde historique
    const hist = JSON.parse(localStorage.getItem("simassp_history") || "[]");
    hist.unshift({ date: new Date().toLocaleString("fr-FR"), scenario: s.titre, bloc: s.bloc, score: STATE.score, total: s.steps.length, reflex });
    localStorage.setItem("simassp_history", JSON.stringify(hist.slice(0, 50)));
    toast("Scénario enregistré dans ton parcours ✅");
    showView("dashboard");
  };

  // ---------- AUTOÉVAL ----------
  function renderAutoeval() {
    const container = document.getElementById("autoevalContainer");
    const saved = JSON.parse(localStorage.getItem("simassp_autoeval") || "{}");
    STATE.autoeval = saved;
    container.innerHTML = `
      <div class="autoeval__intro">
        <h3 style="color:var(--c-primary);margin:0 0 6px;">🪞 Autoévaluation par critères</h3>
        <p class="muted">Évalue-toi honnêtement sur chaque critère. 0 = non acquis · 1 = en cours · 2 = acquis · 3 = maîtrisé. Puis compare avec ton tuteur.</p>
      </div>
      ${D.CRITERES.map(c => {
        const val = STATE.autoeval[c.id] !== undefined ? STATE.autoeval[c.id] : "";
        return `
          <div class="critere-row">
            <div>
              <div class="critere-row__q">${c.label}</div>
              <div class="critere-row__hint">${c.question}</div>
            </div>
            <div class="rating">
              ${[0,1,2,3].map(n => `<button class="${val===n?'r-'+n:''}" onclick="rateCritere('${c.id}',${n})">${n}</button>`).join("")}
            </div>
          </div>
        `;
      }).join("")}
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn--primary" onclick="saveAutoeval()">💾 Enregistrer</button>
        <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="resetAutoeval()">🔄 Réinitialiser</button>
      </div>
      <div id="gapContainer"></div>
    `;
    updateGap();
  }
  window.rateCritere = function (id, n) {
    STATE.autoeval[id] = n;
    renderAutoeval();
  };
  window.saveAutoeval = function () {
    localStorage.setItem("simassp_autoeval", JSON.stringify(STATE.autoeval));
    toast("Autoévaluation enregistrée 🪞");
    updateGap();
  };
  window.resetAutoeval = function () {
    STATE.autoeval = {};
    localStorage.removeItem("simassp_autoeval");
    renderAutoeval();
    toast("Réinitialisé");
  };
  function updateGap() {
    const gap = document.getElementById("gapContainer");
    if (!gap) return;
    const low = D.CRITERES.filter(c => (STATE.autoeval[c.id] || 0) < 2);
    if (low.length === 0) {
      gap.innerHTML = `<div class="gap-card" style="background:#e8f5e9;border-left-color:var(--c-accent);">🌟 Tous tes critères sont au niveau « acquis » ou plus. Continue à consolider !</div>`;
    } else {
      gap.innerHTML = `<div class="gap-card"><strong>🎯 Points à retravailler :</strong><br>${low.map(c=>`• ${c.label} (${STATE.autoeval[c.id] || 0}/3)`).join("<br>")}<br><br><span class="muted">Demande à ton tuteur d'évaluer les mêmes critères pour comparer.</span></div>`;
    }
  }

  // ---------- DASHBOARD ----------
  function renderDashboard() {
    const container = document.getElementById("dashboardContainer");
    const prog = STATE.progression;
    const comps = D.COMPETENCES;
    const total = comps.length;
    const done = comps.filter(c => (prog[c.id]||0) >= 2).length;
    const mastered = comps.filter(c => (prog[c.id]||0) === 3).length;
    const avg = total ? (Object.values(prog).reduce((a,b)=>a+b,0) / total).toFixed(1) : "0.0";
    const hist = JSON.parse(localStorage.getItem("simassp_history") || "[]");

    // par bloc
    const byBloc = D.BLOCS.map(b => {
      const cs = comps.filter(c=>c.bloc===b.code);
      const lvl = cs.reduce((a,c)=>a+(prog[c.id]||0),0);
      const max = cs.length*3;
      const pct = max ? Math.round(lvl/max*100) : 0;
      return { b, cs, pct };
    });

    container.innerHTML = `
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi__num">${done}</div><div class="kpi__label">Compétences acquises (≥2)</div></div>
        <div class="kpi"><div class="kpi__num">${mastered}</div><div class="kpi__label">Compétences maîtrisées (3)</div></div>
        <div class="kpi"><div class="kpi__num">${avg}</div><div class="kpi__label">Niveau moyen /3</div></div>
        <div class="kpi"><div class="kpi__num">${hist.length}</div><div class="kpi__label">Scénarios réalisés</div></div>
      </div>

      <div class="chart-card">
        <h3>📊 Progression par bloc</h3>
        ${byBloc.map(x => `
          <div class="bar">
            <div class="bar__label">${x.b.code} — ${x.b.title.slice(0,22)}…</div>
            <div class="bar__track"><div class="bar__fill" style="width:${x.pct}%;background:${x.b.color}"></div></div>
            <div class="bar__val">${x.pct}%</div>
          </div>
        `).join("")}
      </div>

      <div class="chart-card">
        <h3>🎯 Détail par compétence</h3>
        ${comps.map(c => {
          const lvl = prog[c.id] || 0;
          const b = D.BLOCS.find(x=>x.code===c.bloc);
          return `
            <div class="bar">
              <div class="bar__label" style="width:200px;">${c.id}</div>
              <div class="bar__track"><div class="bar__fill" style="width:${lvl/3*100}%;background:${b.color}"></div></div>
              <div class="bar__val">${lvl}/3</div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="chart-card">
        <h3>📜 Historique des scénarios</h3>
        ${hist.length === 0 ? `<p class="muted">Aucun scénario réalisé pour l'instant.</p>` :
          `<table class="table"><thead><tr><th>Date</th><th>Scénario</th><th>Bloc</th><th>Score</th></tr></thead><tbody>
            ${hist.map(h=>`<tr><td>${h.date}</td><td>${h.scenario}</td><td>${h.bloc}</td><td>${h.score}/${h.total}</td></tr>`).join("")}
          </tbody></table>`}
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="exportData()">📤 Exporter mes données</button>
        <button class="btn btn--ghost" style="color:var(--c-danger);border:1px solid var(--c-danger);" onclick="resetAll()">🗑️ Réinitialiser tout</button>
      </div>
    `;
  }
  window.exportData = function () {
    const data = { progression: STATE.progression, autoeval: JSON.parse(localStorage.getItem("simassp_autoeval")||"{}"), history: JSON.parse(localStorage.getItem("simassp_history")||"[]") };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "simassp_export.json"; a.click();
    URL.revokeObjectURL(url);
    toast("Export téléchargé 📤");
  };
  window.resetAll = function () {
    if (!confirm("Réinitialiser toutes tes données ?")) return;
    localStorage.removeItem("simassp_progress");
    localStorage.removeItem("simassp_autoeval");
    localStorage.removeItem("simassp_history");
    STATE.progression = {};
    toast("Données réinitialisées");
    renderDashboard();
  };

  // ---------- ENSEIGNANT ----------
  function renderTeacher() {
    if (!STATE.teacherAuth) {
      document.getElementById("teacherGate").hidden = false;
      document.getElementById("teacherPanel").hidden = true;
      return;
    }
    document.getElementById("teacherGate").hidden = true;
    document.getElementById("teacherPanel").hidden = false;
    renderTeacherTab("suivi");
  }
  document.getElementById("teacherLoginBtn").addEventListener("click", () => {
    const pwd = document.getElementById("teacherPwd").value;
    if (pwd === "ecbg2026") {
      STATE.teacherAuth = true;
      document.getElementById("teacherError").textContent = "";
      renderTeacher();
    } else {
      document.getElementById("teacherError").textContent = "Mot de passe incorrect.";
    }
  });
  document.querySelectorAll(".tab").forEach(t => {
    t.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("tab--active"));
      t.classList.add("tab--active");
      renderTeacherTab(t.dataset.tab);
    });
  });
  function renderTeacherTab(tab) {
    const c = document.getElementById("teacherTabContent");
    if (tab === "suivi") {
      const hist = JSON.parse(localStorage.getItem("simassp_history") || "[]");
      c.innerHTML = `
        <h3 style="color:var(--c-primary);">👥 Suivi des scénarios réalisés</h3>
        <p class="muted">Données locales du navigateur. En production, connecter à une base partagée.</p>
        ${hist.length === 0 ? `<p class="muted">Aucun scénario réalisé.</p>` :
          `<table class="table"><thead><tr><th>Date</th><th>Scénario</th><th>Bloc</th><th>Score</th><th>Réflexivité</th></tr></thead><tbody>
            ${hist.map(h=>`<tr><td>${h.date}</td><td>${h.scenario}</td><td>${h.bloc}</td><td>${h.score}/${h.total}</td><td style="max-width:200px;font-size:.75rem;">${h.reflex||"—"}</td></tr>`).join("")}
          </tbody></table>`}
      `;
    } else if (tab === "scenarios") {
      c.innerHTML = `
        <h3 style="color:var(--c-primary);">🎬 Scénarios disponibles</h3>
        <p class="muted">Liste des ${D.SCENARIOS.length} scénarios du MVP. Éditable dans js/data.js.</p>
        <table class="table"><thead><tr><th>ID</th><th>Titre</th><th>Bloc</th><th>Année</th><th>Contexte</th><th>Durée</th></tr></thead><tbody>
          ${D.SCENARIOS.map(s=>`<tr><td>${s.id}</td><td>${s.titre}</td><td>${s.bloc}</td><td>${s.annee==="2"?"2de":s.annee==="1"?"1re":"Tle"}</td><td>${s.contexte}</td><td>${s.duree}</td></tr>`).join("")}
        </tbody></table>
      `;
    } else if (tab === "bilans") {
      const prog = STATE.progression;
      const comps = D.COMPETENCES;
      c.innerHTML = `
        <h3 style="color:var(--c-primary);">📈 Bilan de progression</h3>
        <p class="muted">Niveaux par compétence (données locales).</p>
        <table class="table"><thead><tr><th>Compétence</th><th>Bloc</th><th>Niveau</th></tr></thead><tbody>
          ${comps.map(c=>`<tr><td>${c.id} — ${c.titre}</td><td>${c.bloc}</td><td>${prog[c.id]||0}/3</td></tr>`).join("")}
        </tbody></table>
      `;
    }
  }

  // ---------- TOAST ----------
  let toastTimer;
  window.toast = function (msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  };

  // ---------- MODAL (utilitaire) ----------
  window.openModal = function (html) {
    document.getElementById("modalContent").innerHTML = html;
    document.getElementById("modal").hidden = false;
  };
  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("modal").hidden = true;
  });
  document.querySelector(".modal__backdrop").addEventListener("click", () => {
    document.getElementById("modal").hidden = true;
  });

  // ---------- INIT ----------
  function init() {
    renderAccueil();
    // hide loader
    setTimeout(() => document.getElementById("loader").classList.add("loader--hidden"), 600);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
