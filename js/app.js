/* ============================================================
   SimASSP — Logique applicative (enrichie)
   Indices progressifs, variantes, adaptatif, voix, enseignant
   ============================================================ */
(function () {
  "use strict";
  const D = window.SIM_DATA;

  // ---------- ÉTAT ----------
  const STATE = {
    view: "accueil",
    scenario: null,
    variant: null,
    stepIndex: 0,
    score: 0,
    answers: [],
    hintLevel: 0,
    autoeval: {},
    progression: loadProgression(),
    teacherAuth: false,
    voiceOn: false
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
  const views = ["accueil","parcours","scenarios","autoeval","dashboard","matheo","enseignant"];
  function showView(name) {
    if (!views.includes(name)) name = "accueil";
    STATE.view = name;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("view--active"));
    const el = document.getElementById("view-" + name);
    if (el) el.classList.add("view--active");
    document.querySelectorAll(".nav__btn").forEach(b => {
      b.classList.toggle("nav__btn--active", b.dataset.nav === name);
    });
    if (name === "parcours") renderParcours();
    if (name === "scenarios") renderScenarios();
    if (name === "autoeval") renderAutoeval();
    if (name === "dashboard") renderDashboard();
    if (name === "enseignant") renderTeacher();
    if (name === "accueil") renderAccueil();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.showView = showView;
  document.querySelectorAll("[data-nav]").forEach(b => {
    b.addEventListener("click", () => showView(b.dataset.nav));
  });
  document.getElementById("navToggle").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("nav--open");
  });

  // ---------- ACCUEIL ----------
  function renderAccueil() {
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
  ["filtreAnnee","filtreBloc","filtreContexte"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", renderParcours);
  });

  // ---------- SCÉNARIOS ----------
  function diffLabel(d) { return d===1?"🟢 Facile":d===2?"🟡 Moyen":"🔴 Avancé"; }
  function renderScenarios() {
    const list = document.getElementById("scenarioList");
    list.innerHTML = D.SCENARIOS.map(s => {
      const b = D.BLOCS.find(x=>x.code===s.bloc);
      return `
        <div class="scenario-item ${STATE.scenario && STATE.scenario.id===s.id ? 'scenario-item--active':''}" onclick="openScenario('${s.id}')">
          <div class="scenario-item__title">${b.emoji} ${s.titre}</div>
          <div class="scenario-item__meta">${s.bloc} · ${s.annee==="2"?"2de":s.annee==="1"?"1re":"Tle"} · ${s.contexte} · ${s.duree} · ${diffLabel(s.difficulte||1)}</div>
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
  window.openScenario = function (id, variantIdx) {
    STATE.scenario = D.SCENARIOS.find(s=>s.id===id);
    STATE.variant = (variantIdx !== undefined && STATE.scenario.variantes && STATE.scenario.variantes[variantIdx]) ? STATE.scenario.variantes[variantIdx] : null;
    STATE.stepIndex = 0;
    STATE.score = 0;
    STATE.answers = [];
    STATE.hintLevel = 0;
    renderScenarios();
  };

  function renderScenarioPlay() {
    const s = STATE.scenario;
    const b = D.BLOCS.find(x=>x.code===s.bloc);
    const total = s.steps.length;
    const idx = STATE.stepIndex;
    const detail = document.getElementById("scenarioDetail");

    if (idx >= total) {
      const pct = Math.round((STATE.score / total) * 100);
      const low = pct < 70;
      // remédiation
      let remediationHtml = "";
      if (low) {
        const cand = (D.REMEDIATION[s.bloc] || []).filter(x => x !== s.id).slice(0,3);
        remediationHtml = `
          <div class="gap-card" style="margin-top:14px;">
            <strong>🎯 Parcours adaptatif — remédiation proposée</strong><br>
            Ton score est sous 70%. Je te propose de travailler ces scénarios complémentaires :
            <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
              ${cand.map(id => {
                const sc = D.SCENARIOS.find(x=>x.id===id);
                return `<button class="btn btn--sm btn--accent" onclick="openScenario('${id}')">${sc ? sc.titre : id}</button>`;
              }).join("")}
            </div>
          </div>
        `;
      }
      detail.innerHTML = `
        <div class="scenario-play">
          <div class="scenario-play__header">
            <div class="scenario-play__title">🏁 Bilan — ${s.titre}${STATE.variant ? " (variante)" : ""}</div>
            <span class="chip" style="background:${b.color};color:#fff">${s.bloc}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar__fill" style="width:100%"></div></div>
          <div style="text-align:center;margin:20px 0;">
            <div style="font-size:3rem;font-weight:800;color:${pct>=70?'var(--c-accent)':'var(--c-warn)'}">${pct}%</div>
            <div style="color:var(--c-muted);">Score : ${STATE.score} / ${total} bonnes décisions</div>
            <div style="margin-top:6px;">${diffLabel(s.difficulte||1)}</div>
          </div>
          <div class="feedback ${pct>=70?'feedback--good':'feedback--warn'}">
            <strong>📋 Analyse pédagogique</strong><br>${s.bilan}
          </div>
          ${remediationHtml}
          <div style="margin-top:18px;">
            <h3 style="color:var(--c-primary);">🪞 Question de réflexivité</h3>
            <p class="muted">Qu'aurais-tu fait différemment et pourquoi ?</p>
            <textarea class="input" id="reflexText" rows="3" style="width:100%;min-width:0;"></textarea>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
            <button class="btn btn--primary" onclick="finishScenario()">✅ Valider et enregistrer</button>
            <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="replayScenario()">🔁 Rejouer</button>
            ${s.variantes && s.variantes.length ? `<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="showVariants()">🔀 Variantes</button>` : ""}
            <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="askMatheo()">🤖 Demander à Mathéo</button>
          </div>
        </div>
      `;
      return;
    }

    const step = s.steps[idx];
    const hints = s.hints || [];
    const hintHtml = STATE.hintLevel > 0 && hints.length
      ? `<div class="hint">💡 Indice ${STATE.hintLevel}/${hints.length} : ${hints[STATE.hintLevel-1]}</div>`
      : "";
    detail.innerHTML = `
      <div class="scenario-play">
        <div class="scenario-play__header">
          <div class="scenario-play__title">${s.titre}${STATE.variant ? " — " + STATE.variant.titre : ""}</div>
          <span class="chip" style="background:${b.color};color:#fff">${s.bloc} · ${idx+1}/${total} · ${diffLabel(s.difficulte||1)}</span>
        </div>
        ${STATE.variant ? `<div class="feedback feedback--warn" style="margin-bottom:10px;"><strong>Variante :</strong> ${STATE.variant.description}</div>` : ""}
        <div class="progress-bar"><div class="progress-bar__fill" style="width:${(idx/total*100)}%"></div></div>
        <div class="scenario-step">
          <div class="scenario-step__q">${step.q}</div>
          ${step.choices.map((ch,i)=>`<button class="choice" onclick="chooseAnswer(${i})">${String.fromCharCode(65+i)}. ${ch.text}</button>`).join("")}
          ${hintHtml}
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
            ${hints.length ? `<button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="revealHint()">💡 Indice (${STATE.hintLevel}/${hints.length})</button>` : ""}
            <button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="speak('${escapeJs(step.q)}')">🔊 Lire</button>
          </div>
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
    STATE.hintLevel = 0;
    renderScenarioPlay();
  };

  window.revealHint = function () {
    const s = STATE.scenario;
    const hints = s.hints || [];
    if (STATE.hintLevel < hints.length) {
      STATE.hintLevel++;
      renderScenarioPlay();
    } else {
      toast("Tous les indices ont été révélés.");
    }
  };

  window.replayScenario = function () {
    STATE.stepIndex = 0; STATE.score = 0; STATE.answers = []; STATE.hintLevel = 0;
    renderScenarioPlay();
  };

  window.showVariants = function () {
    const s = STATE.scenario;
    if (!s.variantes || !s.variantes.length) return;
    const html = `
      <h3 style="color:var(--c-primary);">🔀 Variantes du scénario</h3>
      <p class="muted">Choisis une variante pour rejouer avec un contexte différent.</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">
        <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);text-align:left;" onclick="openScenario('${s.id}');closeModal();">Standard (sans variante)</button>
        ${s.variantes.map((v,i)=>`<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);text-align:left;" onclick="openScenario('${s.id}',${i});closeModal();">${v.titre}<br><span class='muted' style='font-size:.75rem;'>${v.description}</span></button>`).join("")}
      </div>
    `;
    openModal(html);
  };

  window.finishScenario = function () {
    const s = STATE.scenario;
    const reflex = (document.getElementById("reflexText") || {}).value || "";
    const related = D.COMPETENCES.filter(c => c.bloc === s.bloc);
    related.forEach(c => {
      const cur = getLevel(c.id);
      if (cur < 3) setLevel(c.id, Math.min(3, cur + (STATE.score >= s.steps.length * 0.7 ? 1 : 0)));
    });
    const hist = JSON.parse(localStorage.getItem("simassp_history") || "[]");
    hist.unshift({ date: new Date().toLocaleString("fr-FR"), scenario: s.titre, bloc: s.bloc, score: STATE.score, total: s.steps.length, reflex, variant: STATE.variant ? STATE.variant.titre : null });
    localStorage.setItem("simassp_history", JSON.stringify(hist.slice(0, 100)));
    toast("Scénario enregistré dans ton parcours ✅");
    showView("dashboard");
  };

  window.askMatheo = function () {
    const s = STATE.scenario;
    const url = "https://you45-assistant-mr-anouar.hf.space";
    const prompt = encodeURIComponent(`Je viens de réaliser le scénario "${s.titre}" (bloc ${s.bloc}) et j'ai obtenu ${STATE.score}/${s.steps.length}. Peux-tu m'expliquer ce que j'aurais pu mieux faire et me donner des conseils pour progresser ?`);
    openModal(`
      <h3 style="color:var(--c-primary);">🤖 Demander à Mathéo IA</h3>
      <p class="muted">Ouvre l'assistant pédagogique dans un nouvel onglet avec un prompt pré-rempli.</p>
      <div style="margin:12px 0;padding:12px;background:#f1f5f9;border-radius:8px;font-size:.85rem;">
        <strong>Prompt :</strong> Je viens de réaliser le scénario "${s.titre}" (bloc ${s.bloc}) et j'ai obtenu ${STATE.score}/${s.steps.length}. Peux-tu m'expliquer ce que j'aurais pu mieux faire ?
      </div>
      <a href="${url}?prompt=${prompt}" target="_blank" class="btn btn--primary">Ouvrir Mathéo IA ↗</a>
      <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);margin-left:8px;" onclick="closeModal()">Fermer</button>
    `);
  };

  // ---------- VOIX (Web Speech API) ----------
  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("Synthèse vocale non supportée par ce navigateur."); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR"; u.rate = 0.95; u.pitch = 1;
    window.speechSynthesis.speak(u);
  }
  window.speak = speak;
  window.escapeJs = function (s) { return (s||"").replace(/'/g,"\\'").replace(/"/g,'\\"'); };

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
        <button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="compareTuteur()">👥 Comparer avec tuteur</button>
      </div>
      <div id="gapContainer"></div>
      <div id="compareContainer"></div>
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
  window.compareTuteur = function () {
    const tuteur = JSON.parse(localStorage.getItem("simassp_tuteur_eval") || "{}");
    const c = document.getElementById("compareContainer");
    if (Object.keys(tuteur).length === 0) {
      c.innerHTML = `<div class="gap-card" style="background:#e3f2fd;border-left-color:#1565c0;"><strong>👥 Évaluation tuteur</strong><br>Aucune évaluation tuteur enregistrée. L'enseignant peut en saisir une dans l'espace enseignant.</div>`;
      return;
    }
    c.innerHTML = `
      <div class="chart-card" style="margin-top:14px;">
        <h3>👥 Comparaison élève / tuteur</h3>
        <table class="table"><thead><tr><th>Critère</th><th>Élève</th><th>Tuteur</th><th>Écart</th></tr></thead><tbody>
          ${D.CRITERES.map(cr => {
            const e = STATE.autoeval[cr.id] || 0;
            const t = tuteur[cr.id] || 0;
            const ecart = e - t;
            const color = ecart === 0 ? "var(--c-accent)" : (ecart > 0 ? "var(--c-warn)" : "var(--c-danger)");
            return `<tr><td>${cr.label}</td><td>${e}/3</td><td>${t}/3</td><td style="color:${color};font-weight:700;">${ecart>0?'+':''}${ecart}</td></tr>`;
          }).join("")}
        </tbody></table>
        <p class="muted" style="margin-top:8px;font-size:.75rem;">Écart positif = autoévaluation plus optimiste que le tuteur. Écart négatif = plus sévère.</p>
      </div>
    `;
  };

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
            ${hist.map(h=>`<tr><td>${h.date}</td><td>${h.scenario}${h.variant?' ('+h.variant+')':''}</td><td>${h.bloc}</td><td>${h.score}/${h.total}</td></tr>`).join("")}
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
        <p class="muted">Données locales du navigateur. Pour un suivi multi-élèves, importer les exports JSON des élèves.</p>
        <div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn--sm btn--accent" onclick="importEleveData()">📥 Importer données élève</button>
          <button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="exportTuteurEval()">📤 Exporter éval. tuteur</button>
        </div>
        ${hist.length === 0 ? `<p class="muted">Aucun scénario réalisé.</p>` :
          `<table class="table"><thead><tr><th>Date</th><th>Scénario</th><th>Bloc</th><th>Score</th><th>Réflexivité</th></tr></thead><tbody>
            ${hist.map(h=>`<tr><td>${h.date}</td><td>${h.scenario}</td><td>${h.bloc}</td><td>${h.score}/${h.total}</td><td style="max-width:200px;font-size:.75rem;">${h.reflex||"—"}</td></tr>`).join("")}
          </tbody></table>`}
      `;
    } else if (tab === "scenarios") {
      c.innerHTML = `
        <h3 style="color:var(--c-primary);">🎬 Scénarios disponibles (${D.SCENARIOS.length})</h3>
        <p class="muted">Liste des scénarios du MVP. Éditable dans js/data.js. Créer un nouveau scénario :</p>
        <div class="card" style="margin-bottom:16px;">
          <h4 style="color:var(--c-primary);margin:0 0 8px;">➕ Nouveau scénario (modèle)</h4>
          <p class="muted" style="font-size:.8rem;">Les scénarios sont définis dans <code>js/data.js</code>. Structure : id, bloc, annee, contexte, duree, difficulte, competences[], titre, description, hints[], variantes[], steps[{q, choices[{text,correct,feedback}]}], bilan.</p>
        </div>
        <table class="table"><thead><tr><th>ID</th><th>Titre</th><th>Bloc</th><th>Année</th><th>Contexte</th><th>Durée</th><th>Diff.</th></tr></thead><tbody>
          ${D.SCENARIOS.map(s=>`<tr><td>${s.id}</td><td>${s.titre}</td><td>${s.bloc}</td><td>${s.annee==="2"?"2de":s.annee==="1"?"1re":"Tle"}</td><td>${s.contexte}</td><td>${s.duree}</td><td>${s.difficulte||1}</td></tr>`).join("")}
        </tbody></table>
      `;
    } else if (tab === "bilans") {
      const prog = STATE.progression;
      const comps = D.COMPETENCES;
      // évaluation tuteur
      const tuteurSaved = JSON.parse(localStorage.getItem("simassp_tuteur_eval") || "{}");
      c.innerHTML = `
        <h3 style="color:var(--c-primary);">📈 Bilan de progression</h3>
        <p class="muted">Niveaux par compétence (données locales). Saisir l'évaluation tuteur :</p>
        <div class="card" style="margin-bottom:16px;">
          <h4 style="color:var(--c-primary);margin:0 0 8px;">👩‍🏫 Évaluation tuteur (par critère)</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${D.CRITERES.map(cr => `
              <label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">${cr.label}
                <select id="tuteur_${cr.id}" style="width:100%;padding:6px;border:1px solid var(--c-border);border-radius:6px;">
                  ${[0,1,2,3].map(n=>`<option value="${n}" ${tuteurSaved[cr.id]===n?'selected':''}>${n}</option>`).join("")}
                </select>
              </label>
            `).join("")}
          </div>
          <button class="btn btn--primary btn--sm" style="margin-top:10px;" onclick="saveTuteurEval()">💾 Enregistrer éval. tuteur</button>
        </div>
        <table class="table"><thead><tr><th>Compétence</th><th>Bloc</th><th>Niveau</th></tr></thead><tbody>
          ${comps.map(c=>`<tr><td>${c.id} — ${c.titre}</td><td>${c.bloc}</td><td>${prog[c.id]||0}/3</td></tr>`).join("")}
        </tbody></table>
        <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn--accent btn--sm" onclick="exportBilanPDF()">📄 Exporter bilan PDF</button>
        </div>
      `;
    }
  }
  window.saveTuteurEval = function () {
    const obj = {};
    D.CRITERES.forEach(cr => {
      const sel = document.getElementById("tuteur_" + cr.id);
      if (sel) obj[cr.id] = parseInt(sel.value);
    });
    localStorage.setItem("simassp_tuteur_eval", JSON.stringify(obj));
    toast("Évaluation tuteur enregistrée 👩‍🏫");
  };
  window.importEleveData = function () {
    const input = document.createElement("input");
    input.type = "file"; input.accept = "application/json";
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.progression) {
            // fusion : garder le max par compétence
            Object.keys(data.progression).forEach(k => {
              const cur = STATE.progression[k] || 0;
              STATE.progression[k] = Math.max(cur, data.progression[k]);
            });
            saveProgression();
          }
          if (data.history) {
            const hist = JSON.parse(localStorage.getItem("simassp_history") || "[]");
            const merged = [...data.history, ...hist].slice(0, 100);
            localStorage.setItem("simassp_history", JSON.stringify(merged));
          }
          toast("Données élève importées ✅");
          renderTeacherTab("suivi");
        } catch (err) { toast("Fichier invalide ❌"); }
      };
      reader.readAsText(file);
    };
    input.click();
  };
  window.exportTuteurEval = function () {
    const tuteur = JSON.parse(localStorage.getItem("simassp_tuteur_eval") || "{}");
    const blob = new Blob([JSON.stringify(tuteur, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "eval_tuteur.json"; a.click();
    URL.revokeObjectURL(url);
    toast("Exporté 📤");
  };
  window.exportBilanPDF = function () {
    const w = window.open("", "_blank");
    const prog = STATE.progression;
    const comps = D.COMPETENCES;
    w.document.write(`
      <!DOCTYPE html><html><head><title>Bilan SimASSP</title>
      <style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:6px;font-size:12px;}th{background:#1e3a5f;color:#fff;}h1{color:#1e3a5f;}</style>
      </head><body>
      <h1>Bilan de progression — SimASSP</h1>
      <p>Date : ${new Date().toLocaleDateString("fr-FR")}</p>
      <table><thead><tr><th>Compétence</th><th>Bloc</th><th>Niveau</th></tr></thead><tbody>
      ${comps.map(c=>`<tr><td>${c.id} — ${c.titre}</td><td>${c.bloc}</td><td>${prog[c.id]||0}/3</td></tr>`).join("")}
      </tbody></table>
      <script>window.print();</script>
      </body></html>
    `);
    w.document.close();
  };
  window.closeModal = function () { document.getElementById("modal").hidden = true; };

  // ---------- TOAST ----------
  let toastTimer;
  window.toast = function (msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  };

  // ---------- MODAL ----------
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

  window.openMatheoPrompt = function (prompt) {
    const url = "https://you45-assistant-mr-anouar.hf.space";
    const p = encodeURIComponent(prompt);
    window.open(url + "?prompt=" + p, "_blank");
  };

  // ---------- INIT ----------
  function init() {
    window.showView = showView;
    renderAccueil();
    setTimeout(() => document.getElementById("loader").classList.add("loader--hidden"), 600);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
