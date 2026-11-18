/* ============================================================
   SimASSP — Logique applicative (avec authentification élève)
   ============================================================ */
(function () {
  "use strict";
  const D = window.SIM_DATA;

  // ---------- AUTH ----------
  var AUTH = {
    currentUser: null,
    accounts: [],
    deletedIds: [],
    hash: function (s) { return btoa(unescape(encodeURIComponent("simassp::" + s))); },
    loadAccounts: async function () {
      var cached = [];
      try { cached = JSON.parse(localStorage.getItem("simassp_accounts") || "[]"); } catch (e) { cached = []; }
      // Essayer Supabase
      if (window.Storage) {
        try {
          var rows = await window.Storage.getAll("accounts");
          if (rows && rows.length > 0) {
            var accounts = rows.map(function (r) { return r.data; });
            // Fusionner avec le cache local pour ne pas perdre les comptes ajoutes entre-temps
            var merged = accounts.slice();
            var ids = merged.map(function (a) { return a.id; });
            (cached || []).forEach(function (c) {
              if (AUTH.deletedIds.indexOf(c.id) !== -1) return;
              if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
            });
            // Filter out deleted
            merged = merged.filter(function (a) { return AUTH.deletedIds.indexOf(a.id) === -1; });
            try { localStorage.setItem("simassp_accounts", JSON.stringify(merged)); } catch (e) {}
            return merged;
          }
        } catch (e) { console.warn("loadAccounts SB:", e && e.message); }
      }
      return cached || [];
    },
    saveAccounts: async function () {
      // Sauvegarder chaque account comme une ligne
      if (window.Storage) {
        try {
          // Supprimer les anciens
          // On upsert chaque account
          for (var i = 0; i < AUTH.accounts.length; i++) {
            await window.Storage.set("accounts", AUTH.accounts[i].id, AUTH.accounts[i]);
          }
        } catch (e) { console.warn("saveAccounts SB:", e && e.message); }
      }
      try { localStorage.setItem("simassp_accounts", JSON.stringify(AUTH.accounts)); } catch (e) {}
    },
    genPassword: function () {
      var chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
      var p = "";
      for (var i = 0; i < 8; i++) p += chars[Math.floor(Math.random() * chars.length)];
      return p;
    },
    genLogin: function (prenom, nom, niveau) {
      var base = (prenom.charAt(0) + nom).toLowerCase().replace(/[^a-z]/g, "");
      var suffix = niveau === "2" ? "2de" : niveau === "1" ? "1re" : "tle";
      return base + "." + suffix;
    },
    login: function (login, pwd) {
      var acc = null;
      for (var i = 0; i < AUTH.accounts.length; i++) {
        if (AUTH.accounts[i].login === login) { acc = AUTH.accounts[i]; break; }
      }
      if (!acc) return false;
      if (acc.passwordHash !== AUTH.hash(pwd)) return false;
      AUTH.currentUser = acc;
      // Pas de restauration automatique : on ne persiste pas la session.
      try { sessionStorage.removeItem("simassp_session"); } catch (e) {}
      return true;
    },
    logout: function () {
      AUTH.currentUser = null;
      try { sessionStorage.removeItem("simassp_session"); } catch (e) {}
      try { localStorage.removeItem("simassp_session"); } catch (e) {}
    },
    restoreSession: function () {
      // Desactive : on demande toujours l'identifiant et le mot de passe.
      return false;
    },
    createAccount: function (prenom, nom, niveau, classe) {
      var login = AUTH.genLogin(prenom, nom, niveau);
      var finalLogin = login;
      var i = 2;
      while (AUTH.accounts.some(function (a) { return a.login === finalLogin; })) { finalLogin = login + i++; }
      var pwd = AUTH.genPassword();
      var acc = {
        id: "u_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
        login: finalLogin,
        passwordHash: AUTH.hash(pwd),
        prenom: prenom, nom: nom, niveau: niveau, classe: classe || "",
        created: new Date().toLocaleString("fr-FR"),
        mustChangePassword: true
      };
      AUTH.accounts.push(acc);
      AUTH.saveAccounts();
      return { account: acc, password: pwd };
    },
    resetPassword: function (id) {
      var acc = null;
      for (var i = 0; i < AUTH.accounts.length; i++) {
        if (AUTH.accounts[i].id === id) { acc = AUTH.accounts[i]; break; }
      }
      if (!acc) return null;
      var pwd = AUTH.genPassword();
      acc.passwordHash = AUTH.hash(pwd);
      acc.mustChangePassword = true;
      AUTH.saveAccounts();
      return pwd;
    },
    deleteAccount: function (id) {
      var acc = null;
      for (var i = 0; i < AUTH.accounts.length; i++) { if (AUTH.accounts[i].id === id) { acc = AUTH.accounts[i]; break; } }
      var login = acc ? acc.login : null;
      if (AUTH.deletedIds.indexOf(id) === -1) AUTH.deletedIds.push(id);
      AUTH.accounts = AUTH.accounts.filter(function (a) { return a.id !== id; });
      try { localStorage.setItem("simassp_accounts", JSON.stringify(AUTH.accounts)); } catch (e) {}
      try { localStorage.removeItem("simassp_progress_" + id); } catch (e) {}
      try { localStorage.removeItem("simassp_autoeval_" + id); } catch (e) {}
      try { localStorage.removeItem("simassp_history_" + id); } catch (e) {}
      if (login) {
        try {
          var sd = JSON.parse(localStorage.getItem("simassp_students_data") || "{}");
          delete sd[login];
          localStorage.setItem("simassp_students_data", JSON.stringify(sd));
          if (window.Storage) window.Storage.set("students_data", "global", sd).catch(function () {});
        } catch (e) {}
        try {
          var pd = JSON.parse(localStorage.getItem("simassp_pfmp") || "{}");
          delete pd[login];
          localStorage.setItem("simassp_pfmp", JSON.stringify(pd));
          if (window.Storage) window.Storage.set("pfmp", "global", pd).catch(function () {});
        } catch (e) {}
        try {
          var ted = JSON.parse(localStorage.getItem("simassp_tuteur_evals") || "{}");
          delete ted[login];
          localStorage.setItem("simassp_tuteur_evals", JSON.stringify(ted));
          if (window.Storage) window.Storage.set("tuteur_evals", "global", ted).catch(function () {});
        } catch (e) {}
      }
      if (window.Storage) {
        window.Storage.remove("progress", id).catch(function () {});
        window.Storage.remove("autoeval", id).catch(function () {});
        window.Storage.remove("history", id).catch(function () {});
        window.Storage.remove("accounts", id).catch(function () {});
      }
    }
  };

  // charger les comptes
  AUTH.accounts = [];
  AUTH.loadAccounts().then(function (acc) {
    var merged = (acc || []).slice();
    var ids = merged.map(function (a) { return a.id; });
    (AUTH.accounts || []).forEach(function (c) {
      if (AUTH.deletedIds.indexOf(c.id) !== -1) return;
      if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
    });
    merged = merged.filter(function (a) { return AUTH.deletedIds.indexOf(a.id) === -1; });
    AUTH.accounts = merged;
  }).catch(function () { /* keep in-memory accounts */ });

  // ---------- COMPTES ENSEIGNANTS / TUTEURS ----------
  var TEACHER_AUTH = {
    currentUser: null,
    accounts: [],
    deletedIds: [],
    hash: AUTH.hash,
    loadAccounts: async function () {
      var cached = [];
      try { cached = JSON.parse(localStorage.getItem("simassp_teachers") || "[]"); } catch (e) { cached = []; }
      if (window.Storage) {
        try {
          var rows = await window.Storage.getAll("teachers");
          if (rows && rows.length > 0) {
            var accounts = rows.map(function (r) { return r.data; });
            var merged = accounts.slice();
            var ids = merged.map(function (a) { return a.id; });
            (cached || []).forEach(function (c) {
              if (TEACHER_AUTH.deletedIds.indexOf(c.id) !== -1) return;
              if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
            });
            merged = merged.filter(function (a) { return TEACHER_AUTH.deletedIds.indexOf(a.id) === -1; });
            try { localStorage.setItem("simassp_teachers", JSON.stringify(merged)); } catch (e) {}
            return merged;
          }
        } catch (e) { console.warn("loadTeachers SB:", e && e.message); }
      }
      return cached || [];
    },
    saveAccounts: async function () {
      if (window.Storage) {
        try {
          for (var i = 0; i < TEACHER_AUTH.accounts.length; i++) {
            await window.Storage.set("teachers", TEACHER_AUTH.accounts[i].id, TEACHER_AUTH.accounts[i]);
          }
        } catch (e) { console.warn("saveTeachers SB:", e && e.message); }
      }
      try { localStorage.setItem("simassp_teachers", JSON.stringify(TEACHER_AUTH.accounts)); } catch (e) {}
    },
    genPassword: AUTH.genPassword,
    genLogin: function (prenom, nom) {
      var base = (prenom.charAt(0) + nom).toLowerCase().replace(/[^a-z]/g, "");
      if (!base) base = "enseignant";
      return base;
    },
    login: function (login, pwd) {
      var acc = null;
      for (var i = 0; i < TEACHER_AUTH.accounts.length; i++) {
        if (TEACHER_AUTH.accounts[i].login === login) { acc = TEACHER_AUTH.accounts[i]; break; }
      }
      if (!acc) return false;
      if (acc.passwordHash !== TEACHER_AUTH.hash(pwd)) return false;
      TEACHER_AUTH.currentUser = acc;
      return true;
    },
    logout: function () { TEACHER_AUTH.currentUser = null; },
    createAccount: function (prenom, nom, role) {
      var login = TEACHER_AUTH.genLogin(prenom, nom);
      var finalLogin = login;
      var i = 2;
      while (TEACHER_AUTH.accounts.some(function (a) { return a.login === finalLogin; })) { finalLogin = login + i++; }
      var pwd = TEACHER_AUTH.genPassword();
      var acc = {
        id: "t_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
        login: finalLogin,
        passwordHash: TEACHER_AUTH.hash(pwd),
        prenom: prenom, nom: nom, role: role || "enseignant",
        created: new Date().toLocaleString("fr-FR"),
        mustChangePassword: true
      };
      TEACHER_AUTH.accounts.push(acc);
      TEACHER_AUTH.saveAccounts();
      return { account: acc, password: pwd };
    },
    resetPassword: function (id) {
      var acc = null;
      for (var i = 0; i < TEACHER_AUTH.accounts.length; i++) {
        if (TEACHER_AUTH.accounts[i].id === id) { acc = TEACHER_AUTH.accounts[i]; break; }
      }
      if (!acc) return null;
      var pwd = TEACHER_AUTH.genPassword();
      acc.passwordHash = TEACHER_AUTH.hash(pwd);
      acc.mustChangePassword = true;
      TEACHER_AUTH.saveAccounts();
      return pwd;
    },
    deleteAccount: function (id) {
      if (TEACHER_AUTH.deletedIds.indexOf(id) === -1) TEACHER_AUTH.deletedIds.push(id);
      TEACHER_AUTH.accounts = TEACHER_AUTH.accounts.filter(function (a) { return a.id !== id; });
      try { localStorage.setItem("simassp_teachers", JSON.stringify(TEACHER_AUTH.accounts)); } catch (e) {}
      TEACHER_AUTH.saveAccounts();
      if (window.Storage) { window.Storage.remove("teachers", id).catch(function () {}); }
    }
  };
  TEACHER_AUTH.accounts = [];
  TEACHER_AUTH.loadAccounts().then(function (acc) {
    var merged = (acc || []).slice();
    var ids = merged.map(function (a) { return a.id; });
    (TEACHER_AUTH.accounts || []).forEach(function (c) {
      if (TEACHER_AUTH.deletedIds.indexOf(c.id) !== -1) return;
      if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
    });
    merged = merged.filter(function (a) { return TEACHER_AUTH.deletedIds.indexOf(a.id) === -1; });
    TEACHER_AUTH.accounts = merged;
  }).catch(function () { /* keep in-memory accounts */ });
  // compte par defaut
  if (TEACHER_AUTH.accounts.length === 0) {
    TEACHER_AUTH.accounts.push({
      id: "t_default",
      login: "enseignant",
      passwordHash: TEACHER_AUTH.hash("ecbg2026"),
      prenom: "Enseignant", nom: "", role: "enseignant",
      created: new Date().toLocaleString("fr-FR"),
      mustChangePassword: true
    });
    TEACHER_AUTH.saveAccounts();
  }

  // ---------- STORAGE PAR UTILISATEUR ----------
  function userKey(base) {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    return base + "_" + uid;
  }

  // ---------- MIGRATION DES COMPÉTENCES (arrêté du 02/02/2022) ----------
  // Ancien modèle : C4.4 = « évaluer » (compétence 4.3 scindée à tort) et
  // C3.4 = tutorat (alors que 3.4 = bionettoyage et 3.5 = tutorat).
  // Nouveau modèle : C4.3 = « mettre en œuvre ET évaluer », C3.4 = bionettoyage,
  // C3.5 = tutorat. Le marqueur `_compVersion: 2` voyage avec les données :
  // sans lui, une progression acquise sur la NOUVELLE C3.4 serait renommée à tort.
  function migrateCompKeys(obj, isRoot, legacy) {
    if (!obj || typeof obj !== "object") return false;
    if (legacy === undefined) legacy = (obj._compVersion !== 2);
    var changed = false;
    Object.keys(obj).forEach(function (k) {
      if (migrateCompKeys(obj[k], false, legacy)) changed = true;
    });
    if (legacy) {
      if (Object.prototype.hasOwnProperty.call(obj, "C3.4")) {
        var old34 = obj["C3.4"];
        if (Object.prototype.hasOwnProperty.call(obj, "C3.5")) {
          if (typeof old34 === "number" && typeof obj["C3.5"] === "number")
            obj["C3.5"] = Math.max(obj["C3.5"], old34);
        } else obj["C3.5"] = old34;
        delete obj["C3.4"];
        changed = true;
      }
      if (Object.prototype.hasOwnProperty.call(obj, "C4.4")) {
        var old44 = obj["C4.4"];
        if (Object.prototype.hasOwnProperty.call(obj, "C4.3")) {
          if (typeof old44 === "number" && typeof obj["C4.3"] === "number")
            obj["C4.3"] = Math.max(obj["C4.3"], old44);
        } else obj["C4.3"] = old44;
        delete obj["C4.4"];
        changed = true;
      }
    }
    if (isRoot && !Array.isArray(obj) && obj._compVersion !== 2) {
      obj._compVersion = 2;
      changed = true;
    }
    return changed;
  }
  function persistMigrated(ns, owner, data, localKey) {
    if (localKey) { try { localStorage.setItem(localKey, JSON.stringify(data)); } catch (e) {} }
    if (window.Storage) window.Storage.set(ns, owner, data).catch(function () {});
  }

  function loadProgression() {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    // Cache local synchrone
    var cached = {};
    try { cached = JSON.parse(localStorage.getItem("simassp_progress_" + uid) || "{}"); } catch (e) { cached = {}; }
    if (migrateCompKeys(cached, true)) persistMigrated("progress", uid, cached, "simassp_progress_" + uid);
    // Supabase async (mise a jour du cache en arriere-plan)
    if (window.Storage) {
      window.Storage.get("progress", uid).then(function (d) {
        if (d) {
          if (migrateCompKeys(d, true)) persistMigrated("progress", uid, d, null);
          try { STATE.progression = d; localStorage.setItem("simassp_progress_" + uid, JSON.stringify(d)); } catch (e) {}
          try { renderProgression && renderProgression(); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function saveProgression() {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    try { localStorage.setItem("simassp_progress_" + uid, JSON.stringify(STATE.progression)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("progress", uid, STATE.progression).catch(function () {});
    }
  }
  function loadAutoeval() {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    var cached = {};
    try { cached = JSON.parse(localStorage.getItem("simassp_autoeval_" + uid) || "{}"); } catch (e) { cached = {}; }
    if (window.Storage) {
      window.Storage.get("autoeval", uid).then(function (d) {
        if (d) {
          try { STATE.autoeval = d; localStorage.setItem("simassp_autoeval_" + uid, JSON.stringify(d)); } catch (e) {}
          try { renderAutoeval && renderAutoeval(); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function saveAutoeval() {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    try { localStorage.setItem("simassp_autoeval_" + uid, JSON.stringify(STATE.autoeval)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("autoeval", uid, STATE.autoeval).catch(function () {});
    }
  }
  function loadHistory() {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    var cached = [];
    try { cached = JSON.parse(localStorage.getItem("simassp_history_" + uid) || "[]"); } catch (e) { cached = []; }
    if (window.Storage) {
      window.Storage.get("history", uid).then(function (d) {
        if (d) {
          try { localStorage.setItem("simassp_history_" + uid, JSON.stringify(d)); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function saveHistory(hist) {
    var uid = AUTH.currentUser ? AUTH.currentUser.id : "anon";
    try { localStorage.setItem("simassp_history_" + uid, JSON.stringify(hist)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("history", uid, hist).catch(function () {});
    }
  }

  // ---------- PFMP ----------
  var PFMP_DATA = [
    { id: "PFMP1", niveau: "2", numero: 1, titre: "PFMP 1 — Seconde — Période 1", objectifs: "Découverte de la structure d'accueil, observation des pratiques professionnelles, accueil des personnes, communication." },
    { id: "PFMP2", niveau: "2", numero: 2, titre: "PFMP 2 — Seconde — Période 2", objectifs: "Réalisation de soins d'hygiène et de confort, surveillance de l'état de santé, transmission d'informations." },
    { id: "PFMP3", niveau: "1", numero: 1, titre: "PFMP 3 — Première — Période 1", objectifs: "Soins plus complexes, participation au projet individualisé, éducation à la santé." },
    { id: "PFMP4", niveau: "1", numero: 2, titre: "PFMP 4 — Première — Période 2", objectifs: "Conduite d'activités, démarche qualité, prévention des risques." },
    { id: "PFMP5", niveau: "T", numero: 1, titre: "PFMP 5 — Terminale — Période 1", objectifs: "Autonomie professionnelle, projet individualisé, animation d'activités." },
    { id: "PFMP6", niveau: "T", numero: 2, titre: "PFMP 6 — Terminale — Période 2", objectifs: "Projet individualisé complet, éducation à la santé, démarche qualité et autonomie." }
  ];
  function loadPFMP() {
    var cached = {};
    try { cached = JSON.parse(localStorage.getItem("simassp_pfmp") || "{}"); } catch (e) { cached = {}; }
    if (window.Storage) {
      window.Storage.get("pfmp", "global").then(function (d) {
        if (d) {
          try { localStorage.setItem("simassp_pfmp", JSON.stringify(d)); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function savePFMP(obj) {
    try { localStorage.setItem("simassp_pfmp", JSON.stringify(obj)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("pfmp", "global", obj).catch(function () {});
    }
  }
  function getPFMPData(login) {
    var all = loadPFMP();
    if (!all[login]) all[login] = {};
    return all[login];
  }
  function savePFMPData(login, pfmpId, data) {
    var all = loadPFMP();
    if (!all[login]) all[login] = {};
    if (!all[login][pfmpId]) all[login][pfmpId] = {};
    Object.keys(data).forEach(function (k) { all[login][pfmpId][k] = data[k]; });
    savePFMP(all);
  }
  // ---------- NIVEAUX DE COMPETENCES ----------
  function getLevel(id) {
    if (!STATE.progression) STATE.progression = {};
    var v = STATE.progression[id];
    return (v === undefined || v === null) ? 0 : v;
  }
  function setLevel(id, level) {
    if (!STATE.progression) STATE.progression = {};
    STATE.progression[id] = level;
    try { saveProgression(); } catch (e) {}
    try { saveStudentData(); } catch (e) {}
  }

  // ---------- ÉTAT ----------
  var STATE = {
    view: "login",
    scenario: null,
    variant: null,
    shuffledChoices: null,
    shuffledFor: -1,
    stepIndex: 0,
    score: 0,
    answers: [],
    hintLevel: 0,
    autoeval: {},
    progression: {},
    teacherAuth: false,
    forcePasswordChange: false
  };

  // ---------- NAVIGATION ----------
  var views = ["login", "accueil", "parcours", "scenarios", "autoeval", "dashboard", "pfmp", "matheo", "enseignant"];
  function showView(name) {
    if (views.indexOf(name) === -1) name = "accueil";
    if (name !== "login" && name !== "enseignant" && !AUTH.currentUser && !TEACHER_AUTH.currentUser) { name = "login"; }
    // L'espace enseignant est un espace distinct : on deconnecte l'eleve pour y entrer.
    if (name === "enseignant" && AUTH.currentUser && !TEACHER_AUTH.currentUser) {
      AUTH.logout();
      STATE.progression = {};
      STATE.autoeval = {};
    }
    STATE.view = name;
    document.body.classList.toggle("login-mode", name === "login");
    document.body.classList.toggle("enseignant-view", name === "enseignant");
    var els = document.querySelectorAll(".view");
    for (var i = 0; i < els.length; i++) els[i].classList.remove("view--active");
    var el = document.getElementById("view-" + name);
    if (el) el.classList.add("view--active");
    var btns = document.querySelectorAll(".nav__btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("nav__btn--active", btns[j].dataset.nav === name);
    }
    updateUserBadge();
    if (name === "login") renderLogin();
    if (name === "accueil") renderAccueil();
    if (name === "parcours") renderParcours();
    if (name === "scenarios") renderScenarios();
    if (name === "autoeval") renderAutoeval();
    if (name === "dashboard") renderDashboard();
    if (name === "pfmp") renderPFMP();
    if (name === "enseignant") renderTeacher();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.showView = showView;
  var navBtns = document.querySelectorAll("[data-nav]");
  for (var k = 0; k < navBtns.length; k++) {
    navBtns[k].addEventListener("click", (function (btn) {
      return function () { showView(btn.dataset.nav); };
    })(navBtns[k]));
  }
  var navToggle = document.getElementById("navToggle");
  var navEl = document.querySelector(".nav");
  if (navToggle && navEl) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navEl.classList.toggle("nav--open");
      navToggle.textContent = navEl.classList.contains("nav--open") ? "✕" : "☰";
    });
    // Fermer le menu quand on clique sur un lien de navigation
    navEl.addEventListener("click", function (e) {
      if (e.target.classList.contains("nav__btn")) {
        navEl.classList.remove("nav--open");
        navToggle.textContent = "☰";
      }
    });
    // Fermer le menu quand on clique a l'exterieur
    document.addEventListener("click", function (e) {
      if (navEl.classList.contains("nav--open") && !navEl.contains(e.target) && e.target !== navToggle) {
        navEl.classList.remove("nav--open");
        navToggle.textContent = "☰";
      }
    });
  }

  function updateUserBadge() {
    var badge = document.getElementById("userBadge");
    var name = document.getElementById("userName");
    var tBadge = document.getElementById("teacherBadge");
    var tName = document.getElementById("teacherName");
    var isTeacher = !!(TEACHER_AUTH && TEACHER_AUTH.currentUser);
    document.body.classList.toggle("teacher-mode", isTeacher);
    if (badge) {
      if (AUTH.currentUser && !isTeacher) {
        badge.hidden = false;
        var u = AUTH.currentUser;
        var niveau = u.niveau === "2" ? "2de" : u.niveau === "1" ? "1re" : "Tle";
        if (name) name.textContent = u.prenom + " " + u.nom + " · " + niveau;
      } else {
        badge.hidden = true;
      }
    }
    if (tBadge) {
      if (isTeacher) {
        tBadge.hidden = false;
        var ta = TEACHER_AUTH.currentUser;
        if (tName) tName.textContent = (ta.prenom || "") + " " + (ta.nom || "") + " · Enseignant";
      } else {
        tBadge.hidden = true;
      }
    }
    // Masquer l'acces enseignant dans la nav quand un eleve est connecte.
    var teacherBtn = document.querySelector('.nav__btn--accent[data-nav="enseignant"]');
    if (teacherBtn) teacherBtn.hidden = !!AUTH.currentUser || isTeacher;
  }

  // ---------- LOGIN ----------
  function renderLogin() {
    var err = document.getElementById("loginError");
    if (err) err.textContent = "";
    var img = document.getElementById("loginQrImg");
    if (img) {
      var url = window.location.href.split("?")[0].split("#")[0];
      img.src = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=" + encodeURIComponent(url);
    }
  }
  window.doLogin = function () {
    var login = document.getElementById("loginUser").value.trim();
    var pwd = document.getElementById("loginPwd").value;
    if (AUTH.login(login, pwd)) {
      STATE.progression = loadProgression();
      STATE.autoeval = loadAutoeval();
      var err = document.getElementById("loginError");
      if (err) err.textContent = "";
      if (AUTH.currentUser.mustChangePassword) {
        STATE.forcePasswordChange = true;
        showChangePasswordModal(false);
        return;
      }
      toast("Bienvenue " + AUTH.currentUser.prenom + " ! 👋");
      showView("accueil");
    } else {
      var err2 = document.getElementById("loginError");
      if (err2) err2.textContent = "Identifiant ou mot de passe incorrect.";
    }
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && STATE.view === "login") doLogin();
  });
  window.logout = function () {
    AUTH.logout();
    STATE.progression = {};
    STATE.autoeval = {};
    toast("Déconnexion réussie.");
    showView("login");
  };

  // ---------- ACCUEIL ----------
  function renderAccueil() {
    var grid = document.getElementById("blocsGrid");
    if (!grid) return;
    grid.innerHTML = D.BLOCS.map(function (b) {
      return '<div class="bloc-card" style="border-left-color:' + b.color + '" onclick="showView(\'parcours\')">' +
        '<div class="bloc-card__head"><span class="bloc-card__emoji">' + b.emoji + '</span><span class="bloc-card__code">' + b.code + '</span></div>' +
        '<div class="bloc-card__title">' + b.title + '</div>' +
        '<div class="bloc-card__desc">' + b.desc + '</div>' +
        '<div class="bloc-card__comps">' + D.COMPETENCES.filter(function (c) { return c.bloc === b.code; }).map(function (c) { return '<span class="chip">' + c.id + '</span>'; }).join("") + '</div>' +
        '</div>';
    }).join("");

    var tl = document.getElementById("timeline");
    if (!tl) return;
    tl.innerHTML = D.TIMELINE.map(function (t) {
      return '<div class="tl-card">' +
        '<div class="tl-card__year">📅 ' + t.annee + ' — ' + t.focus + '</div>' +
        '<div style="font-weight:600;font-size:.85rem;color:var(--c-accent);margin:6px 0 4px;">En centre</div>' +
        '<ul>' + t.centre.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
        '<div style="font-weight:600;font-size:.85rem;color:var(--c-accent);margin:6px 0 4px;">En structure</div>' +
        '<ul>' + t.structure.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
        '<div style="font-weight:600;font-size:.85rem;color:var(--c-primary);margin:6px 0 4px;">Objectifs</div>' +
        '<ul>' + t.objectifs.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' +
        '</div>';
    }).join("");
  }

  // ---------- PARCOURS ----------
  function renderParcours() {
    var annee = document.getElementById("filtreAnnee").value;
    var bloc = document.getElementById("filtreBloc").value;
    var ctx = document.getElementById("filtreContexte").value;

    var list = D.COMPETENCES.slice();
    if (annee !== "all") list = list.filter(function (c) { return c.annees.indexOf(annee) !== -1; });
    if (bloc !== "all") list = list.filter(function (c) { return c.bloc === bloc; });
    if (ctx !== "all") list = list.filter(function (c) { return c.contexte.indexOf(ctx) !== -1; });

    var container = document.getElementById("competencesList");
    if (!container) return;
    if (list.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state__icon">🔍</div><p>Aucune compétence ne correspond à ces filtres.</p></div>';
      return;
    }
    container.innerHTML = list.map(function (c) {
      var b = D.BLOCS.filter(function (x) { return x.code === c.bloc; })[0];
      var lvl = getLevel(c.id);
      var lvlObj = D.NIVEAUX.filter(function (n) { return n.code === lvl; })[0];
      return '<div class="comp-item">' +
        '<div><div class="comp-item__title">' + c.id + (c.ref ? ' <span class="ref-officielle" title="Numérotation officielle (annexe III)">off. ' + c.ref + '</span>' : '') + ' — ' + c.titre + '</div>' +
        '<div class="comp-item__desc">' + c.desc + '</div>' +
        '<div class="comp-item__meta">' +
        '<span class="tag tag--annee">' + c.annees.map(function (a) { return a === "2" ? "2de" : a === "1" ? "1re" : "Tle"; }).join(", ") + '</span>' +
        c.contexte.map(function (cx) { return '<span class="tag tag--' + cx + '">' + (cx === "centre" ? "Centre" : "Structure") + '</span>'; }).join("") +
        '<span class="chip" style="background:' + b.color + ';color:#fff">' + b.code + '</span>' +
        '</div></div>' +
        '<div class="comp-item__level">' +
        '<div class="level-badge level-' + lvl + '" title="' + lvlObj.label + '">' + lvl + '</div>' +
        '<div style="font-size:.7rem;color:var(--c-muted);text-align:center;">' + lvlObj.label + '</div>' +
        '<div class="rating" style="flex-direction:column;gap:2px;">' +
        D.NIVEAUX.map(function (n) { return '<button class="btn--sm" style="background:' + n.color + ';color:#fff;border:none;border-radius:6px;padding:2px 6px;font-size:.7rem;" onclick="setCompLevel(\'' + c.id + '\',' + n.code + ')">' + n.code + '</button>'; }).join("") +
        '</div></div></div>';
    }).join("");
  }
  window.setCompLevel = function (id, level) {
    setLevel(id, level);
    renderParcours();
    toast("Niveau mis à jour : " + D.NIVEAUX.filter(function (n) { return n.code === level; })[0].label);
  };
  ["filtreAnnee", "filtreBloc", "filtreContexte"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("change", renderParcours);
  });

  // ---------- SCÉNARIOS ----------
  function diffLabel(d) { return d === 1 ? "🟢 Facile" : d === 2 ? "🟡 Moyen" : "🔴 Avancé"; }
  function renderScenarios() {
    var list = document.getElementById("scenarioList");
    if (!list) return;
    var randomBtn = '<button class="btn btn--accent btn--sm" style="width:100%;margin-bottom:8px;justify-content:center;" onclick="openRandomScenario()">🎲 Scénario aléatoire</button>';
    list.innerHTML = randomBtn + D.SCENARIOS.map(function (s) {
      var b = D.BLOCS.filter(function (x) { return x.code === s.bloc; })[0];
      return '<div class="scenario-item ' + (STATE.scenario && STATE.scenario.id === s.id ? 'scenario-item--active' : '') + '" onclick="openScenario(\'' + s.id + '\')">' +
        '<div class="scenario-item__title">' + b.emoji + ' ' + s.titre + '</div>' +
        '<div class="scenario-item__meta">' + s.bloc + ' · ' + (s.annee === "2" ? "2de" : s.annee === "1" ? "1re" : "Tle") + ' · ' + s.contexte + ' · ' + s.duree + ' · ' + diffLabel(s.difficulte || 1) + '</div>' +
        '</div>';
    }).join("");
    var detail = document.getElementById("scenarioDetail");
    if (!detail) return;
    if (!STATE.scenario) {
      detail.innerHTML = '<div class="empty-state"><div class="empty-state__icon">🎬</div><p>Sélectionne un scénario pour commencer la simulation.</p></div>';
    } else {
      renderScenarioPlay();
    }
  }
  window.speak = function (text) {
    try {
      if (!("speechSynthesis" in window)) { toast("Synthèse vocale non supportée par ce navigateur."); return; }
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } catch (e) { toast("Erreur de lecture vocale."); }
  };
  window.speakStep = function () {
    var s = STATE.scenario;
    if (!s) return;
    var step = s.steps[STATE.stepIndex];
    var txt = s.titre + ". " + (STATE.variant ? STATE.variant.description + ". " : "") + (step ? step.q : "");
    speak(txt);
  };
  window.openRandomScenario = function () {
    var idx = Math.floor(Math.random() * D.SCENARIOS.length);
    openScenario(D.SCENARIOS[idx].id);
  };
  window.openRandomVariant = function () {
    var s = STATE.scenario;
    if (!s || !s.variantes || !s.variantes.length) return;
    var idx = Math.floor(Math.random() * s.variantes.length);
    openScenario(s.id, idx);
  };
  window.openScenario = function (id, variantIdx) {
    STATE.scenario = null;
    for (var i = 0; i < D.SCENARIOS.length; i++) {
      if (D.SCENARIOS[i].id === id) { STATE.scenario = D.SCENARIOS[i]; break; }
    }
    STATE.variant = (variantIdx !== undefined && STATE.scenario.variantes && STATE.scenario.variantes[variantIdx]) ? STATE.scenario.variantes[variantIdx] : null;
    STATE.stepIndex = 0;
    STATE.score = 0;
    STATE.answers = [];
    STATE.hintLevel = 0;
    STATE.shuffledChoices = null;
    STATE.shuffledFor = -1;
    renderScenarios();
  };

  function renderScenarioPlay() {
    var s = STATE.scenario;
    var b = D.BLOCS.filter(function (x) { return x.code === s.bloc; })[0];
    var total = s.steps.length;
    var idx = STATE.stepIndex;
    var detail = document.getElementById("scenarioDetail");
    if (!detail) return;

    if (idx >= total) {
      var pct = Math.round((STATE.score / total) * 100);
      var low = pct < 70;
      var remediationHtml = "";
      if (low) {
        var cand = (D.REMEDIATION[s.bloc] || []).filter(function (x) { return x !== s.id; }).slice(0, 3);
        remediationHtml = '<div class="gap-card" style="margin-top:14px;"><strong>🎯 Parcours adaptatif — remédiation proposée</strong><br>Ton score est sous 70%. Je te propose de travailler ces scénarios complémentaires :<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">' +
          cand.map(function (id) {
            var sc = null;
            for (var i = 0; i < D.SCENARIOS.length; i++) { if (D.SCENARIOS[i].id === id) { sc = D.SCENARIOS[i]; break; } }
            return '<button class="btn btn--sm btn--accent" onclick="openScenario(\'' + id + '\')">' + (sc ? sc.titre : id) + '</button>';
          }).join("") + '</div></div>';
      }
      detail.innerHTML = '<div class="scenario-play">' +
        '<div class="scenario-play__header"><div class="scenario-play__title">🏁 Bilan — ' + s.titre + (STATE.variant ? " (variante)" : "") + '</div><span class="chip" style="background:' + b.color + ';color:#fff">' + s.bloc + '</span></div>' +
        '<div class="progress-bar"><div class="progress-bar__fill" style="width:100%"></div></div>' +
        '<div style="text-align:center;margin:20px 0;"><div style="font-size:3rem;font-weight:800;color:' + (pct >= 70 ? 'var(--c-accent)' : 'var(--c-warn)') + '">' + pct + '%</div><div style="color:var(--c-muted);">Score : ' + STATE.score + ' / ' + total + ' bonnes décisions</div><div style="margin-top:6px;">' + diffLabel(s.difficulte || 1) + '</div></div>' +
        '<div class="feedback ' + (pct >= 70 ? 'feedback--good' : 'feedback--warn') + '"><strong>📋 Analyse pédagogique</strong><br>' + s.bilan + '</div>' +
        remediationHtml +
        '<div style="margin-top:18px;"><h3 style="color:var(--c-primary);">🪞 Question de réflexivité</h3><p class="muted">Qu\'aurais-tu fait différemment et pourquoi ?</p><textarea class="input" id="reflexText" rows="3" style="width:100%;min-width:0;"></textarea></div>' +
        '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">' +
        '<button class="btn btn--primary" onclick="finishScenario()">✅ Valider et enregistrer</button>' +
        '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="replayScenario()">🔁 Rejouer</button>' +
        (s.variantes && s.variantes.length ? '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="showVariants()">🔀 Variantes</button>' : '') +
(s.variantes && s.variantes.length ? '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="openRandomVariant()">🎲 Variante aléatoire</button>' : '') +
        '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="askMatheo()">🤖 Demander à Mathéo</button>' +
        '</div></div>';
      return;
    }

    var step = s.steps[idx];
    var hints = s.hints || [];
    var hintHtml = (STATE.hintLevel > 0 && hints.length) ? '<div class="hint">💡 Indice ' + STATE.hintLevel + '/' + hints.length + ' : ' + hints[STATE.hintLevel - 1] + '</div>' : "";
    // Mélanger les propositions pour ne pas toujours avoir la bonne réponse en 1er
    if (STATE.shuffledFor !== idx || !STATE.shuffledChoices) {
      var arr = (step.choices || []).slice();
      for (var si = arr.length - 1; si > 0; si--) {
        var sj = Math.floor(Math.random() * (si + 1));
        var stmp = arr[si]; arr[si] = arr[sj]; arr[sj] = stmp;
      }
      STATE.shuffledChoices = arr;
      STATE.shuffledFor = idx;
    }
    var shuffled = STATE.shuffledChoices;
    var mediaHtml = "";
    if (s.video) mediaHtml += '<div style="margin-bottom:12px;"><video controls preload="metadata" style="width:100%;max-height:260px;border-radius:8px;background:#000;" src="' + s.video + '"></video></div>';
    if (s.audio) mediaHtml += '<div style="margin-bottom:12px;"><audio controls preload="metadata" style="width:100%;" src="' + s.audio + '"></audio></div>';
    detail.innerHTML = '<div class="scenario-play">' +
      mediaHtml +
      '<div class="scenario-play__header"><div class="scenario-play__title">' + s.titre + (STATE.variant ? " — " + STATE.variant.titre : "") + '</div><span class="chip" style="background:' + b.color + ';color:#fff">' + s.bloc + ' · ' + (idx + 1) + '/' + total + ' · ' + diffLabel(s.difficulte || 1) + '</span></div>' +
      (STATE.variant ? '<div class="feedback feedback--warn" style="margin-bottom:10px;"><strong>Variante :</strong> ' + STATE.variant.description + '</div>' : '') +
      '<div class="progress-bar"><div class="progress-bar__fill" style="width:' + (idx / total * 100) + '%"></div></div>' +
      '<div class="scenario-step">' +
      '<div class="scenario-step__q">' + step.q + '</div>' +
      shuffled.map(function (ch, i) { return '<button class="choice" onclick="chooseAnswer(' + i + ')">' + String.fromCharCode(65 + i) + '. ' + ch.text + '</button>'; }).join("") +
      hintHtml +
      '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">' +
      (hints.length ? '<button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="revealHint()">💡 Indice (' + STATE.hintLevel + '/' + hints.length + ')</button>' : '') +
      '<button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="speakStep()">🔊 Lire</button>' +
      '</div></div></div>';
  }

  window.chooseAnswer = function (i) {
    var s = STATE.scenario;
    var step = s.steps[STATE.stepIndex];
    var choices = STATE.shuffledChoices || step.choices;
    var ch = choices[i];
    var btns = document.querySelectorAll(".choice");
    for (var k = 0; k < btns.length; k++) {
      btns[k].disabled = true;
      if (k === i) btns[k].classList.add(ch.correct ? "choice--correct" : "choice--wrong");
      if (choices[k].correct) btns[k].classList.add("choice--correct");
    }
    if (ch.correct) STATE.score++;
    STATE.answers.push({ step: STATE.stepIndex, choice: i, correct: ch.correct });
    var fb = document.createElement("div");
    fb.className = "feedback " + (ch.correct ? "feedback--good" : "feedback--bad");
    fb.innerHTML = "<strong>" + (ch.correct ? "✅ Bonne décision" : "❌ Décision à revoir") + "</strong><br>" + ch.feedback;
    document.querySelector(".scenario-step").appendChild(fb);
    var nav = document.createElement("div");
    nav.style.marginTop = "14px";
    nav.innerHTML = '<button class="btn btn--primary" onclick="nextStep()">Suivant →</button>';
    document.querySelector(".scenario-step").appendChild(nav);
  };

  window.nextStep = function () {
    STATE.stepIndex++;
    STATE.hintLevel = 0;
    STATE.shuffledChoices = null;
    STATE.shuffledFor = -1;
    renderScenarioPlay();
  };

  window.revealHint = function () {
    var s = STATE.scenario;
    var hints = s.hints || [];
    if (STATE.hintLevel < hints.length) {
      STATE.hintLevel++;
      renderScenarioPlay();
    } else {
      toast("Tous les indices ont été révélés.");
    }
  };

  window.replayScenario = function () {
    STATE.stepIndex = 0; STATE.score = 0; STATE.answers = []; STATE.hintLevel = 0; STATE.shuffledChoices = null; STATE.shuffledFor = -1;
    renderScenarioPlay();
  };

  window.showVariants = function () {
    var s = STATE.scenario;
    if (!s.variantes || !s.variantes.length) return;
    var html = '<h3 style="color:var(--c-primary);">🔀 Variantes du scénario</h3><p class="muted">Choisis une variante pour rejouer avec un contexte différent.</p><div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">' +
      '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);text-align:left;" onclick="openScenario(\'' + s.id + '\');closeModal();">Standard (sans variante)</button>' +
      s.variantes.map(function (v, i) { return '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);text-align:left;" onclick="openScenario(\'' + s.id + '\',' + i + ');closeModal();">' + v.titre + '<br><span class=\'muted\' style=\'font-size:.75rem;\'>" + v.description + "</span></button>'; }).join("") +
      '</div>';
    openModal(html);
  };

  window.finishScenario = function () {
    var s = STATE.scenario;
    var reflexEl = document.getElementById("reflexText");
    var reflex = reflexEl ? reflexEl.value : "";
    var related = D.COMPETENCES.filter(function (c) { return c.bloc === s.bloc; });
    related.forEach(function (c) {
      var cur = getLevel(c.id);
      if (cur < 3) setLevel(c.id, Math.min(3, cur + (STATE.score >= s.steps.length * 0.7 ? 1 : 0)));
    });
    var hist = loadHistory();
    hist.unshift({ date: new Date().toLocaleString("fr-FR"), scenario: s.titre, bloc: s.bloc, score: STATE.score, total: s.steps.length, reflex: reflex, variant: STATE.variant ? STATE.variant.titre : null, user: AUTH.currentUser ? AUTH.currentUser.login : "anon" });
    saveHistory(hist.slice(0, 100));
    try { saveStudentData(); } catch (e) {}
    toast("Scénario enregistré dans ton parcours ✅");
    showView("dashboard");
  };

  window.askMatheo = function () {
    var s = STATE.scenario;
    var url = "https://you45-assistant-mr-anouar.hf.space";
    var prompt = encodeURIComponent('Je viens de réaliser le scénario "' + s.titre + '" (bloc ' + s.bloc + ') et j\'ai obtenu ' + STATE.score + '/' + s.steps.length + '. Peux-tu m\'expliquer ce que j\'aurais pu mieux faire et me donner des conseils pour progresser ?');
    openModal('<h3 style="color:var(--c-primary);">🤖 Demander à Mathéo IA</h3>' +
      '<p class="muted">Ouvre l\'assistant pédagogique dans un nouvel onglet avec un prompt pré-rempli.</p>' +
      '<div style="margin:12px 0;padding:12px;background:#f1f5f9;border-radius:8px;font-size:.85rem;"><strong>Prompt :</strong> Je viens de réaliser le scénario "' + s.titre + '" (bloc ' + s.bloc + ') et j\'ai obtenu ' + STATE.score + '/' + s.steps.length + '. Peux-tu m\'expliquer ce que j\'aurais pu mieux faire ?</div>' +
      '<a href="' + url + '?prompt=' + prompt + '" target="_blank" class="btn btn--primary">Ouvrir Mathéo IA ↗</a>' +
      '<button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);margin-left:8px;" onclick="closeModal()">Fermer</button>');
  };

  // ---------- VOIX ----------
  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("Synthèse vocale non supportée par ce navigateur."); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR"; u.rate = 0.95; u.pitch = 1;
    window.speechSynthesis.speak(u);
  }
  window.speak = speak;
  window.escapeJs = function (s) { return (s || "").replace(/'/g, "\\'").replace(/"/g, '\\"'); };

  // ---------- AUTOÉVAL ----------
  function renderAutoeval() {
    var container = document.getElementById("autoevalContainer");
    if (!container) return;
    // Ne pas ecraser les modifications en cours : les valeurs deja dans STATE.autoeval priment.
    var saved = loadAutoeval();
    STATE.autoeval = Object.assign({}, saved, STATE.autoeval || {});
    container.innerHTML = '<div class="autoeval__intro"><h3 style="color:var(--c-primary);margin:0 0 6px;">🪞 Autoévaluation par critères</h3><p class="muted">Évalue-toi honnêtement sur chaque critère. 0 = non acquis · 1 = en cours · 2 = acquis · 3 = maîtrisé. Puis compare avec ton tuteur.</p></div>' +
      D.CRITERES.map(function (c) {
        var val = (STATE.autoeval[c.id] !== undefined) ? STATE.autoeval[c.id] : "";
        return '<div class="critere-row"><div><div class="critere-row__q">' + c.label + '</div><div class="critere-row__hint">' + c.question + '</div></div><div class="rating">' +
          [0, 1, 2, 3].map(function (n) { return '<button class="' + (val === n ? 'r-' + n : '') + '" onclick="rateCritere(\'' + c.id + '\',' + n + ')">' + n + '</button>'; }).join("") +
          '</div></div>';
      }).join("") +
      '<div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;"><button class="btn btn--primary" onclick="saveAutoeval()">💾 Enregistrer</button><button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="resetAutoeval()">🔄 Réinitialiser</button><button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="compareTuteur()">👥 Comparer avec tuteur</button></div><div id="gapContainer"></div><div id="compareContainer"></div>';
    updateGap();
  }
  window.rateCritere = function (id, n) {
    STATE.autoeval[id] = n;
    renderAutoeval();
  };
  window.saveAutoeval = function () {
    saveAutoeval();
    try { saveStudentData(); } catch (e) {}
    toast("Autoévaluation enregistrée 🪞");
    updateGap();
  };
  window.resetAutoeval = function () {
    STATE.autoeval = {};
    try { localStorage.removeItem(userKey("simassp_autoeval")); } catch (e) {}
    if (window.Storage) { window.Storage.remove("autoeval", AUTH.currentUser ? AUTH.currentUser.id : "anon").catch(function () {}); }
    renderAutoeval();
    toast("Réinitialisé");
  };
  function updateGap() {
    var gap = document.getElementById("gapContainer");
    if (!gap) return;
    var low = D.CRITERES.filter(function (c) { return (STATE.autoeval[c.id] || 0) < 2; });
    if (low.length === 0) {
      gap.innerHTML = '<div class="gap-card" style="background:#e8f5e9;border-left-color:var(--c-accent);">🌟 Tous tes critères sont au niveau « acquis » ou plus. Continue à consolider !</div>';
    } else {
      gap.innerHTML = '<div class="gap-card"><strong>🎯 Points à retravailler :</strong><br>' + low.map(function (c) { return '• ' + c.label + ' (' + (STATE.autoeval[c.id] || 0) + '/3)'; }).join("<br>") + '<br><br><span class="muted">Demande à ton tuteur d\'évaluer les mêmes critères pour comparer.</span></div>';
    }
  }
  window.compareTuteur = function () {
    var tuteur = {};
    try { tuteur = JSON.parse(localStorage.getItem("simassp_tuteur_eval") || "{}"); } catch (e) {}
    if (window.Storage) {
      window.Storage.get("tuteur_eval", "global").then(function (d) {
        if (d) {
          try { localStorage.setItem("simassp_tuteur_eval", JSON.stringify(d)); } catch (e) {}
        }
      }).catch(function () {});
    }
    var c = document.getElementById("compareContainer");
    if (!c) return;
    if (Object.keys(tuteur).length === 0) {
      c.innerHTML = '<div class="gap-card" style="background:#e3f2fd;border-left-color:#1565c0;"><strong>👥 Évaluation tuteur</strong><br>Aucune évaluation tuteur enregistrée. L\'enseignant peut en saisir une dans l\'espace enseignant.</div>';
      return;
    }
    c.innerHTML = '<div class="chart-card" style="margin-top:14px;"><h3>👥 Comparaison élève / tuteur</h3><div class="table-wrap"><table class="table"><thead><tr><th>Critère</th><th>Élève</th><th>Tuteur</th><th>Écart</th></tr></thead><tbody>' +
      D.CRITERES.map(function (cr) {
        var e = STATE.autoeval[cr.id] || 0;
        var t = tuteur[cr.id] || 0;
        var ecart = e - t;
        var color = ecart === 0 ? "var(--c-accent)" : (ecart > 0 ? "var(--c-warn)" : "var(--c-danger)");
        return '<tr><td>' + cr.label + '</td><td>' + e + '/3</td><td>' + t + '/3</td><td style="color:' + color + ';font-weight:700;">' + (ecart > 0 ? '+' : '') + ecart + '</td></tr>';
      }).join("") + '</tbody></table></div><p class="muted" style="margin-top:8px;font-size:.75rem;">Écart positif = autoévaluation plus optimiste que le tuteur. Écart négatif = plus sévère.</p></div>';
  };

  // ---------- DASHBOARD ----------
  function renderDashboard() {
    var container = document.getElementById("dashboardContainer");
    if (!container) return;
    var prog = STATE.progression;
    var comps = D.COMPETENCES;
    var total = comps.length;
    var done = comps.filter(function (c) { return (prog[c.id] || 0) >= 2; }).length;
    var mastered = comps.filter(function (c) { return (prog[c.id] || 0) === 3; }).length;
    var vals = Object.keys(prog).map(function (k) { return prog[k]; });
    var avg = total ? (vals.reduce(function (a, b) { return a + b; }, 0) / total).toFixed(1) : "0.0";
    var hist = loadHistory();

    var byBloc = D.BLOCS.map(function (b) {
      var cs = comps.filter(function (c) { return c.bloc === b.code; });
      var lvl = cs.reduce(function (a, c) { return a + (prog[c.id] || 0); }, 0);
      var max = cs.length * 3;
      var pct = max ? Math.round(lvl / max * 100) : 0;
      return { b: b, cs: cs, pct: pct };
    });

    container.innerHTML = '<div class="kpi-grid">' +
      '<div class="kpi"><div class="kpi__num">' + done + '</div><div class="kpi__label">Compétences acquises (≥2)</div></div>' +
      '<div class="kpi"><div class="kpi__num">' + mastered + '</div><div class="kpi__label">Compétences maîtrisées (3)</div></div>' +
      '<div class="kpi"><div class="kpi__num">' + avg + '</div><div class="kpi__label">Niveau moyen /3</div></div>' +
      '<div class="kpi"><div class="kpi__num">' + hist.length + '</div><div class="kpi__label">Scénarios réalisés</div></div>' +
      '</div>' +
      '<div class="chart-card"><h3>📊 Progression par bloc</h3>' +
      byBloc.map(function (x) {
        return '<div class="bar"><div class="bar__label">' + x.b.code + ' — ' + x.b.title.slice(0, 22) + '…</div><div class="bar__track"><div class="bar__fill" style="width:' + x.pct + '%;background:' + x.b.color + '"></div></div><div class="bar__val">' + x.pct + '%</div></div>';
      }).join("") + '</div>' +
      '<div class="chart-card"><h3>🎯 Détail par compétence</h3>' +
      comps.map(function (c) {
        var lvl = prog[c.id] || 0;
        var b = D.BLOCS.filter(function (x) { return x.code === c.bloc; })[0];
        return '<div class="bar"><div class="bar__label" style="width:200px;">' + c.id + '</div><div class="bar__track"><div class="bar__fill" style="width:' + (lvl / 3 * 100) + '%;background:' + b.color + '"></div></div><div class="bar__val">' + lvl + '/3</div></div>';
      }).join("") + '</div>' +
      '<div class="chart-card"><h3>📜 Historique des scénarios</h3>' +
      (hist.length === 0 ? '<p class="muted">Aucun scénario réalisé pour l\'instant.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Scénario</th><th>Bloc</th><th>Score</th></tr></thead><tbody>' +
        hist.map(function (h) { return '<tr><td>' + h.date + '</td><td>' + h.scenario + (h.variant ? ' (' + h.variant + ')' : '') + '</td><td>' + h.bloc + '</td><td>' + h.score + '/' + h.total + '</td></tr>'; }).join("") +
        '</tbody></table></div>') +
      '</div>' +
      (function () {
        var weakComps = comps.filter(function (c) { return (prog[c.id] || 0) <= 1; });
        var autoeval = loadAutoeval() || {};
        var weakCrit = D.CRITERES.filter(function (cr) { var v = autoeval[cr.id]; return v !== undefined && v <= 1; });
        var recScen = [];
        weakComps.forEach(function (c) {
          D.SCENARIOS.forEach(function (s) {
            if (s.competences && s.competences.indexOf(c.id) !== -1 && recScen.indexOf(s) === -1) recScen.push(s);
          });
        });
        var html = '<div class="chart-card"><h3>🎯 Recommandations personnalisées</h3>';
        if (weakComps.length === 0 && weakCrit.length === 0) {
          html += '<p class="muted">Bravo ! Aucune compétence faible détectée. Continue à pratiquer pour maintenir ton niveau.</p>';
        } else {
          if (weakComps.length) {
            html += '<p style="font-size:.9rem;margin:0 0 8px;"><strong>Compétences à retravailler :</strong></p><ul style="margin:0 0 10px;padding-left:18px;font-size:.85rem;">';
            weakComps.forEach(function (c) {
              html += '<li><strong>' + c.id + '</strong> — ' + c.titre + ' (niveau ' + (prog[c.id] || 0) + '/3)</li>';
            });
            html += '</ul>';
          }
          if (weakCrit.length) {
            html += '<p style="font-size:.9rem;margin:0 0 8px;"><strong>Critères autoévalués faibles :</strong></p><ul style="margin:0 0 10px;padding-left:18px;font-size:.85rem;">';
            weakCrit.forEach(function (cr) { html += '<li>' + cr.label + ' (' + (autoeval[cr.id]) + '/3)</li>'; });
            html += '</ul>';
          }
          if (recScen.length) {
            html += '<p style="font-size:.9rem;margin:0 0 8px;"><strong>Scénarios recommandés :</strong></p><ul style="margin:0;padding-left:18px;font-size:.85rem;">';
            recScen.slice(0, 5).forEach(function (s) {
              html += '<li><button class="btn btn--ghost btn--sm" style="color:var(--c-primary);padding:2px 6px;" onclick="openScenario(\'' + s.id + '\')">' + s.titre + '</button> <span class="muted">(' + s.bloc + ', ' + s.difficulte + '★)</span></li>';
            });
            html += '</ul>';
          } else {
            html += '<p class="muted">Aucun scénario ciblant ces compétences pour l\'instant.</p>';
          }
        }
        html += '</div>';
        return html;
      })() +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;"><button class="btn btn--primary" onclick="saveStudentData();toast(\'Données enregistrées pour l\\\'enseignant ✅\')">💾 Enregistrer mes données pour l\'enseignant</button><button class="btn btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="exportData()">📤 Exporter mes données</button></div>';
  }
  function saveStudentData() {
    var u = AUTH.currentUser;
    if (!u) return;
    var students = loadStudentsData();
    if (!students[u.login]) students[u.login] = { name: u.prenom + " " + u.nom, niveau: u.niveau, classe: u.classe, progression: {}, autoeval: {}, history: [], imported: "" };
    students[u.login].name = u.prenom + " " + u.nom;
    students[u.login].niveau = u.niveau;
    students[u.login].classe = u.classe;
    students[u.login].progression = STATE.progression || {};
    students[u.login].autoeval = loadAutoeval() || {};
    students[u.login].history = loadHistory() || [];
    students[u.login].imported = new Date().toLocaleString("fr-FR");
    saveStudentsData(students);
  }
  window.saveStudentData = saveStudentData;
  window.exportData = function () {
    var u = AUTH.currentUser;
    var data = {
      student: { login: u ? u.login : "anon", name: u ? (u.prenom + " " + u.nom) : "Anonyme", niveau: u ? u.niveau : "", classe: u ? u.classe : "" },
      progression: STATE.progression, autoeval: loadAutoeval(), history: loadHistory()
    };
    saveStudentData();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a"); a.href = url; a.download = "simassp_export.json"; a.click();
    URL.revokeObjectURL(url);
    toast("Export téléchargé 📤");
  };

  // ---------- PFMP ELEVE ----------
  function renderPFMP() {
    var container = document.getElementById("pfmpContainer");
    if (!container) return;
    var u = AUTH.currentUser;
    if (!u) {
      container.innerHTML = '<p class="muted">Connecte-toi pour accéder à tes PFMP.</p>';
      return;
    }
    var niveau = u.niveau;
    var pfmps = PFMP_DATA.filter(function (p) { return p.niveau === niveau; });
    var login = u.login;
    var pfmpData = getPFMPData(login);
    var html = '';
    pfmps.forEach(function (p) {
      var d = pfmpData[p.id] || {};
      var structure = d.structure || "";
      var dateDebut = d.dateDebut || "";
      var dateFin = d.dateFin || "";
      var objEleve = d.objectifsEleve || "";
      var objTuteur = d.objectifsTuteur || "";
      html += '<div class="card" style="margin-bottom:16px;">' +
        '<h3 style="color:var(--c-primary);margin:0 0 6px;">' + p.titre + '</h3>' +
        '<p class="muted" style="font-size:.85rem;margin:0 0 10px;">' + p.objectifs + '</p>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Structure d\'accueil<input type="text" id="pfmp_structure_' + p.id + '" class="input" value="' + structure.replace(/"/g, '&quot;') + '" placeholder="Nom de la structure" /></label>' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);display:block;margin-bottom:6px;">Mes objectifs (renseignés par l\'élève)<textarea id="pfmp_objeleve_' + p.id + '" class="input" rows="3" style="width:100%;min-width:0;">' + objEleve.replace(/</g, '&lt;') + '</textarea></label>' +
        (objTuteur ? '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);display:block;margin-bottom:6px;">Objectifs du tuteur (lecture seule)<textarea class="input" rows="3" style="width:100%;min-width:0;background:#f5f5f5;" readonly>' + objTuteur.replace(/</g, '&lt;') + '</textarea></label>' : '') +
        '<div></div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Date de début (renseignée par le tuteur)<input type="text" id="pfmp_debut_' + p.id + '" class="input" value="' + dateDebut + '" readonly style="background:#f5f5f5;" /></label>' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Date de fin (renseignée par le tuteur)<input type="text" id="pfmp_fin_' + p.id + '" class="input" value="' + dateFin + '" readonly style="background:#f5f5f5;" /></label>' +
        '</div>' +
        '<button class="btn btn--primary btn--sm" onclick="savePFMPStudent(\'' + p.id + '\')">💾 Enregistrer</button>' +
        '</div>';
    });
    if (pfmps.length === 0) {
      html = '<p class="muted">Aucune PFMP pour ton niveau.</p>';
    }
    html += '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn--accent btn--sm" onclick="exportPFMPPDF()">📄 Exporter mes PFMP en PDF</button></div>';
    container.innerHTML = html;
  }
  window.exportPFMPPDF = function () {
    var w = window.open("", "_blank");
    var login = STATE.pfmpSelectedStudent || (AUTH.currentUser ? AUTH.currentUser.login : null);
    if (!login) { toast("Aucun élève sélectionné."); return; }
    var students = loadActiveStudentsData();
    var s = students[login] || {};
    var name = s.name || login;
    var niveau = s.niveau || (AUTH.currentUser ? AUTH.currentUser.niveau : "2");
    var niveauLabel = niveau === "2" ? "Seconde" : niveau === "1" ? "Première" : "Terminale";
    var pfmpData = getPFMPData(login);
    var css = 'body{font-family:Arial,sans-serif;padding:20px;color:#1a1a1a;} h1{color:#1e3a5f;border-bottom:2px solid #1e3a5f;padding-bottom:6px;} h2{color:#2e7d32;margin-top:18px;} table{width:100%;border-collapse:collapse;margin:8px 0;} th,td{border:1px solid #ccc;padding:6px;font-size:11px;vertical-align:top;} th{background:#1e3a5f;color:#fff;} .meta{font-size:12px;color:#555;margin:4px 0;}';
    var html = '<!DOCTYPE html><html><head><title>PFMP SimASSP - ' + name + '</title><style>' + css + '</style></head><body>';
    html += '<h1>PFMP — Périodes de formation en milieu professionnel</h1>';
    html += '<p class="meta">Élève : <strong>' + name + '</strong> · Niveau : ' + niveauLabel + ' · Identifiant : ' + login + '</p>';
    html += '<p class="meta">Date d’export : ' + new Date().toLocaleDateString("fr-FR") + '</p>';
    PFMP_DATA.forEach(function (p) {
      if (p.niveau !== niveau) return;
      var d = pfmpData[p.id] || {};
      html += '<h2>' + p.titre + '</h2>';
      html += '<p class="meta">' + p.objectifs + '</p>';
      html += '<table><tbody>';
      html += '<tr><th style="width:30%;">Structure d’accueil</th><td>' + (d.structure || "—") + '</td></tr>';
      html += '<tr><th>Date de début</th><td>' + (d.dateDebut || "—") + '</td></tr>';
      html += '<tr><th>Date de fin</th><td>' + (d.dateFin || "—") + '</td></tr>';
      html += '<tr><th>Objectifs de l’élève</th><td>' + (d.objectifsEleve || "—") + '</td></tr>';
      html += '<tr><th>Objectifs du tuteur</th><td>' + (d.objectifsTuteur || "—") + '</td></tr>';
      html += '</tbody></table></div>';
    });
    html += '<script>window.print();</script></body></html>';
    w.document.write(html);
    w.document.close();
  };
  window.exportPFMPPDF = exportPFMPPDF;

  window.savePFMPStudent = function (pfmpId) {
    var u = AUTH.currentUser;
    if (!u) return;
    var input = document.getElementById("pfmp_structure_" + pfmpId);
    var structure = input ? input.value.trim() : "";
    var objInput = document.getElementById("pfmp_objeleve_" + pfmpId);
    var objectifsEleve = objInput ? objInput.value.trim() : "";
    savePFMPData(u.login, pfmpId, { structure: structure, objectifsEleve: objectifsEleve });
    try { saveStudentData(); } catch (e) {}
    toast("Structure enregistrée ✅");
  };
  window.renderPFMP = renderPFMP;

  // ---------- ENSEIGNANT ----------
  function renderTeacher() {
    if (!TEACHER_AUTH.currentUser) {
      var gate = document.getElementById("teacherGate");
      var panel = document.getElementById("teacherPanel");
      if (gate) gate.hidden = false;
      if (panel) panel.hidden = true;
      return;
    }
    var gate2 = document.getElementById("teacherGate");
    var panel2 = document.getElementById("teacherPanel");
    if (gate2) gate2.hidden = true;
    if (panel2) panel2.hidden = false;
    renderTeacherTab("comptes");
  }
  var teacherLoginBtn = document.getElementById("teacherLoginBtn");
  if (teacherLoginBtn) teacherLoginBtn.addEventListener("click", function () {
    var login = document.getElementById("teacherUser").value.trim();
    var pwd = document.getElementById("teacherPwd").value;
    if (TEACHER_AUTH.login(login, pwd)) {
      STATE.teacherAuth = true;
      var err = document.getElementById("teacherError");
      if (err) err.textContent = "";
      if (TEACHER_AUTH.currentUser.mustChangePassword) {
        STATE.forcePasswordChange = true;
        showChangePasswordModal(true);
        return;
      }
      updateUserBadge();
      renderTeacher();
    } else {
      var err2 = document.getElementById("teacherError");
      if (err2) err2.textContent = "Identifiant ou mot de passe incorrect.";
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && document.getElementById("teacherGate") && !document.getElementById("teacherGate").hidden) {
      if (teacherLoginBtn) teacherLoginBtn.click();
    }
  });
  var tabs = document.querySelectorAll(".tab");
  for (var t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener("click", (function (tab) {
      return function () {
        var allTabs = document.querySelectorAll(".tab");
        for (var i = 0; i < allTabs.length; i++) allTabs[i].classList.remove("tab--active");
        tab.classList.add("tab--active");
        renderTeacherTab(tab.dataset.tab);
      };
    })(tabs[t]));
  }

  function renderTeacherTab(tab) {
    var c = document.getElementById("teacherTabContent");
    if (!c) return;
    if (tab === "comptes") renderComptesTab(c);
    else if (tab === "enseignants") renderEnseignantsTab(c);
    else if (tab === "suivi") renderSuiviTab(c);
    else if (tab === "pfmp") renderPFMPTab(c);
    else if (tab === "scenarios") renderScenariosTab(c);
    else if (tab === "bilans") renderBilansTab(c);
  }
  window.renderTeacherTab = renderTeacherTab;

  function renderComptesTab(c) {
    var accounts = AUTH.accounts.slice().sort(function (a, b) { return a.nom.localeCompare(b.nom); });
    c.innerHTML = '<h3 style="color:var(--c-primary);">👥 Gestion des comptes élèves</h3>' +
      '<p class="muted">Crée, réinitialise ou supprime les comptes élèves. Les identifiants/mots de passe sont générés ici.</p>' +
      '<div class="card" style="margin-bottom:16px;">' +
      '<h4 style="color:var(--c-primary);margin:0 0 10px;">➕ Créer un compte élève</h4>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Prénom<input type="text" id="newPrenom" class="input" placeholder="Prénom" /></label>' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Nom<input type="text" id="newNom" class="input" placeholder="Nom" /></label>' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Niveau<select id="newNiveau" class="input"><option value="2">Seconde</option><option value="1">Première</option><option value="T">Terminale</option></select></label>' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Classe<input type="text" id="newClasse" class="input" placeholder="ex: 2de ASSP 1" /></label>' +
      '</div>' +
      '<button class="btn btn--primary btn--sm" style="margin-top:10px;" onclick="createAccount()">Créer le compte</button>' +
      '<div id="newAccountResult" style="margin-top:10px;"></div></div>' +
      '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;">' +
      '<button class="btn btn--sm btn--accent" onclick="exportAccounts()">📤 Exporter la liste</button>' +
      '<button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="importAccounts()">📥 Importer une liste</button></div>' +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">📋 Comptes existants (' + accounts.length + ')</h4>' +
      (accounts.length === 0 ? '<p class="muted">Aucun compte créé.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Identifiant</th><th>Nom</th><th>Niveau</th><th>Classe</th><th>Créé le</th><th>Actions</th></tr></thead><tbody>' +
        accounts.map(function (a) {
          return '<tr><td><code>' + a.login + '</code></td><td>' + a.prenom + ' ' + a.nom + '</td><td>' + (a.niveau === "2" ? "2de" : a.niveau === "1" ? "1re" : "Tle") + '</td><td>' + (a.classe || "—") + '</td><td style="font-size:.75rem;">' + a.created + '</td><td style="display:flex;gap:4px;flex-wrap:wrap;"><button class="btn btn--sm btn--ghost" style="color:var(--c-primary);border:1px solid var(--c-border);" onclick="resetPwd(\'' + a.id + '\')">🔄 Reset mdp</button><button class="btn btn--sm btn--ghost" style="color:var(--c-danger);border:1px solid var(--c-danger);" onclick="deleteAccount(\'' + a.id + '\')">🗑️</button></td></tr>';
        }).join("") + '</tbody></table></div>');
  }

  window.createAccount = function () {
    var prenom = document.getElementById("newPrenom").value.trim();
    var nom = document.getElementById("newNom").value.trim();
    var niveau = document.getElementById("newNiveau").value;
    var classe = document.getElementById("newClasse").value.trim();
    if (!prenom || !nom) { toast("Prénom et nom requis."); return; }
    var res = AUTH.createAccount(prenom, nom, niveau, classe);
    document.getElementById("newPrenom").value = "";
    document.getElementById("newNom").value = "";
    document.getElementById("newClasse").value = "";
    renderTeacherTab("comptes");
    var r = document.getElementById("newAccountResult");
    if (r) r.innerHTML = '<div class="feedback feedback--good"><strong>✅ Compte créé</strong><br>Identifiant : <code>' + res.account.login + '</code><br>Mot de passe : <code>' + res.password + '</code><br><span class="muted" style="font-size:.75rem;">Note ce mot de passe, il ne sera plus affiché.</span></div>';
  };

  window.resetPwd = function (id) {
    if (!confirm("Réinitialiser le mot de passe de ce compte ?")) return;
    var pwd = AUTH.resetPassword(id);
    if (pwd) {
      openModal('<h3 style="color:var(--c-primary);">🔄 Mot de passe réinitialisé</h3><p>Nouveau mot de passe : <code style="font-size:1.1rem;background:#f1f5f9;padding:4px 8px;border-radius:6px;">' + pwd + '</code></p><p class="muted" style="font-size:.8rem;">Note ce mot de passe, il ne sera plus affiché.</p><button class="btn btn--primary" onclick="closeModal()">OK</button>');
    }
  };

  window.deleteAccount = async function (id) {
    if (!confirm("Supprimer ce compte et sa progression ?")) return;
    AUTH.deleteAccount(id);
    await AUTH.saveAccounts();
    toast("Compte supprimé.");
    renderTeacherTab("comptes");
  };

  window.exportAccounts = function () {
    var data = AUTH.accounts.map(function (a) { return { login: a.login, prenom: a.prenom, nom: a.nom, niveau: a.niveau, classe: a.classe, created: a.created }; });
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a"); a.href = url; a.download = "comptes_eleves.json"; a.click();
    URL.revokeObjectURL(url);
    toast("Liste exportée 📤");
  };

  window.importAccounts = function () {
    var input = document.createElement("input");
    input.type = "file"; input.accept = "application/json";
    input.onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = async function (ev) {
        try {
          var data = JSON.parse(ev.target.result);
          if (!Array.isArray(data)) throw new Error("format");
          var n = 0;
          var idx = 0;
          var generated = [];
          data.forEach(function (d) {
            if (!d.login) return;
            if (AUTH.accounts.some(function (a) { return a.login === d.login; })) return;
            var pwd = d.password || AUTH.genPassword();
            AUTH.accounts.push({
              id: "u_" + Date.now() + "_" + idx + "_" + Math.random().toString(36).slice(2, 8),
              login: d.login,
              passwordHash: AUTH.hash(pwd),
              prenom: d.prenom || "", nom: d.nom || "",
              niveau: d.niveau || "2", classe: d.classe || "",
              created: d.created || new Date().toLocaleString("fr-FR"),
              mustChangePassword: !d.password
            });
            if (!d.password) generated.push({ login: d.login, pwd: pwd });
            idx++;
            n++;
          });
          // Persistance synchrone locale d'abord (evite la perte en cas de deconnexion rapide)
          try { localStorage.setItem("simassp_accounts", JSON.stringify(AUTH.accounts)); } catch (e) {}
          await AUTH.saveAccounts();
          toast(n + " compte(s) importé(s) ✅");
          renderTeacherTab("comptes");
          // Afficher les mots de passe generes pour distribution
          if (generated.length > 0) {
            var html = '<h3 style="color:var(--c-primary);">🔑 Mots de passe générés</h3>' +
              '<p class="muted" style="font-size:.8rem;">Note ces identifiants, ils ne seront plus affichés. Les élèves devront changer leur mot de passe à la première connexion.</p>' +
              '<div class="table-wrap"><table class="table"><thead><tr><th>Identifiant</th><th>Mot de passe</th></tr></thead><tbody>' +
              generated.map(function (g) { return '<tr><td><code>' + g.login + '</code></td><td><code>' + g.pwd + '</code></td></tr>'; }).join("") +
              '</tbody></table></div>' +
              '<button class="btn btn--primary" style="margin-top:12px;" onclick="closeModal()">OK</button>';
            openModal(html);
          }
        } catch (err) { toast("Fichier invalide ❌"); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  function renderEnseignantsTab(c) {
    var accounts = TEACHER_AUTH.accounts.slice().sort(function (a, b) { return (a.nom || "").localeCompare(b.nom || ""); });
    c.innerHTML = '<h3 style="color:var(--c-primary);">👩‍🏫 Gestion des comptes enseignants / tuteurs</h3>' +
      '<p class="muted">Crée, réinitialise ou supprime les comptes enseignants et tuteurs.</p>' +
      '<div class="card" style="margin-bottom:16px;">' +
      '<h4 style="color:var(--c-primary);margin:0 0 10px;">➕ Créer un compte</h4>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Prénom<input type="text" id="newTeacherPrenom" class="input" placeholder="Prénom" /></label>' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Nom<input type="text" id="newTeacherNom" class="input" placeholder="Nom" /></label>' +
      '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Rôle<select id="newTeacherRole" class="input"><option value="enseignant">Enseignant</option><option value="tuteur">Tuteur</option></select></label>' +
      '</div>' +
      '<button class="btn btn--primary btn--sm" style="margin-top:10px;" onclick="createTeacherAccount()">Créer le compte</button>' +
      '<div id="newTeacherResult" style="margin-top:10px;"></div></div>' +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">📋 Comptes existants (' + accounts.length + ')</h4>' +
      (accounts.length === 0 ? '<p class="muted">Aucun compte.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Identifiant</th><th>Nom</th><th>Rôle</th><th>Créé le</th><th>Actions</th></tr></thead><tbody>' +
        accounts.map(function (a) {
          return '<tr><td><code>' + a.login + '</code></td><td>' + a.prenom + ' ' + a.nom + '</td><td>' + a.role + '</td><td style="font-size:.75rem;">' + a.created + '</td><td style="display:flex;gap:4px;flex-wrap:wrap;"><button class="btn btn--sm btn--ghost" style="color:var(--c-primary);border:1px solid var(--c-border);" onclick="resetTeacherPwd(\'' + a.id + '\')">🔄 Reset mdp</button>' +
            (a.id !== "t_default" ? '<button class="btn btn--sm btn--ghost" style="color:var(--c-danger);border:1px solid var(--c-danger);" onclick="deleteTeacherAccount(\'' + a.id + '\')">🗑️</button>' : '') +
            '</td></tr>';
        }).join("") + '</tbody></table></div>');
  }
  window.createTeacherAccount = function () {
    var prenom = document.getElementById("newTeacherPrenom").value.trim();
    var nom = document.getElementById("newTeacherNom").value.trim();
    var role = document.getElementById("newTeacherRole").value;
    if (!prenom || !nom) { toast("Prénom et nom requis."); return; }
    var res = TEACHER_AUTH.createAccount(prenom, nom, role);
    document.getElementById("newTeacherPrenom").value = "";
    document.getElementById("newTeacherNom").value = "";
    renderTeacherTab("enseignants");
    var r = document.getElementById("newTeacherResult");
    if (r) r.innerHTML = '<div class="feedback feedback--good"><strong>✅ Compte créé</strong><br>Identifiant : <code>' + res.account.login + '</code><br>Mot de passe : <code>' + res.password + '</code><br><span class="muted" style="font-size:.75rem;">Note ce mot de passe, il ne sera plus affiché.</span></div>';
  };
  window.resetTeacherPwd = function (id) {
    if (!confirm("Réinitialiser le mot de passe de ce compte ?")) return;
    var pwd = TEACHER_AUTH.resetPassword(id);
    if (pwd) {
      openModal('<h3 style="color:var(--c-primary);">🔄 Mot de passe réinitialisé</h3><p>Nouveau mot de passe : <code style="font-size:1.1rem;background:#f1f5f9;padding:4px 8px;border-radius:6px;">' + pwd + '</code></p><p class="muted" style="font-size:.8rem;">Note ce mot de passe, il ne sera plus affiché.</p><button class="btn btn--primary" onclick="closeModal()">OK</button>');
    }
  };
  window.deleteTeacherAccount = function (id) {
    if (!confirm("Supprimer ce compte enseignant ?")) return;
    TEACHER_AUTH.deleteAccount(id);
    toast("Compte supprimé.");
    renderTeacherTab("enseignants");
  };
  window.teacherLogout = function () {
    TEACHER_AUTH.logout();
    STATE.teacherAuth = false;
    toast("Déconnexion enseignant.");
    updateUserBadge();
    showView("login");
  };

  if (STATE.pfmpSelectedStudent === undefined) STATE.pfmpSelectedStudent = null;
  function renderPFMPTab(c) {
    var students = loadActiveStudentsData();
    var logins = Object.keys(students);
    var u = AUTH.currentUser;
    if (u && !students[u.login]) {
      students[u.login] = { name: u.prenom + " " + u.nom, progression: STATE.progression, autoeval: loadAutoeval(), history: loadHistory(), imported: "connecté" };
      logins = Object.keys(students);
    }
    if (logins.length === 0) {
      c.innerHTML = '<h3 style="color:var(--c-primary);">📋 PFMP</h3><p class="muted">Aucun élève disponible. Demande aux élèves d\'enregistrer leurs données.</p>';
      return;
    }
    if (!STATE.pfmpSelectedStudent || logins.indexOf(STATE.pfmpSelectedStudent) === -1) {
      STATE.pfmpSelectedStudent = logins[0];
    }
    var selectedLogin = STATE.pfmpSelectedStudent;
    var s = students[selectedLogin];
    var studentName = s.name || selectedLogin;
    var niveau = s.niveau || (u ? u.niveau : "2");
    var pfmps = PFMP_DATA.filter(function (p) { return p.niveau === niveau; });
    var pfmpData = getPFMPData(selectedLogin);
    var options = logins.map(function (l) {
      return '<option value="' + l + '"' + (l === selectedLogin ? ' selected' : '') + '>' + (students[l].name || l) + '</option>';
    }).join("");
    var html = '<h3 style="color:var(--c-primary);">📋 PFMP — Périodes de formation en milieu professionnel</h3>' +
      '<div style="margin-bottom:12px;"><label style="font-size:.85rem;font-weight:600;color:var(--c-muted);">Élève : <select id="pfmpStudentSelect" class="input" style="width:auto;min-width:200px;">' + options + '</select></label></div>' +
      '<p class="muted">Élève sélectionné : <strong>' + studentName + '</strong> · Niveau : ' + (niveau === "2" ? "Seconde" : niveau === "1" ? "Première" : "Terminale") + '</p>';
    pfmps.forEach(function (p) {
      var d = pfmpData[p.id] || {};
      var structure = d.structure || "";
      var dateDebut = d.dateDebut || "";
      var dateFin = d.dateFin || "";
      var objEleve = d.objectifsEleve || "";
      var objTuteur = d.objectifsTuteur || "";
      html += '<div class="card" style="margin-bottom:16px;">' +
        '<h4 style="color:var(--c-primary);margin:0 0 6px;">' + p.titre + '</h4>' +
        '<p class="muted" style="font-size:.85rem;margin:0 0 10px;">' + p.objectifs + '</p>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Structure d\'accueil (renseignée par l’élève)<input type="text" id="pfmp_structure_' + p.id + '" class="input" value="' + structure.replace(/"/g, '&quot;') + '" readonly style="background:#f5f5f5;" /></label>' +
        '<div></div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Date de début<input type="date" id="pfmp_debut_' + p.id + '" class="input" value="' + dateDebut + '" /></label>' +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">Date de fin<input type="date" id="pfmp_fin_' + p.id + '" class="input" value="' + dateFin + '" /></label>' +
        '</div>' +
        (objEleve ? '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);display:block;margin-bottom:6px;">Objectifs de l\'élève (lecture seule)<textarea class="input" rows="3" style="width:100%;min-width:0;background:#f5f5f5;" readonly>' + objEleve.replace(/</g, '&lt;') + '</textarea></label>' : '') +
        '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);display:block;margin-bottom:6px;">Objectifs du tuteur<textarea id="pfmp_objtuteur_' + p.id + '" class="input" rows="3" style="width:100%;min-width:0;">' + objTuteur.replace(/</g, '&lt;') + '</textarea></label>' +
        '<button class="btn btn--primary btn--sm" onclick="savePFMPTeacher(\'' + p.id + '\')">💾 Enregistrer</button>' +
        '</div>';
    });
    if (pfmps.length === 0) {
      html += '<p class="muted">Aucune PFMP pour ce niveau.</p>';
    }
    html += '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn--accent btn--sm" onclick="exportPFMPPDF()">📄 Exporter les PFMP en PDF</button></div>';
    c.innerHTML = html;
    var sel = document.getElementById("pfmpStudentSelect");
    if (sel) sel.addEventListener("change", function () {
      STATE.pfmpSelectedStudent = this.value;
      renderPFMPTab(c);
    });
  }
  window.savePFMPTeacher = function (pfmpId) {
    var login = STATE.pfmpSelectedStudent;
    if (!login) return;
    var debut = document.getElementById("pfmp_debut_" + pfmpId);
    var fin = document.getElementById("pfmp_fin_" + pfmpId);
    var dateDebut = debut ? debut.value : "";
    var dateFin = fin ? fin.value : "";
    var objInput = document.getElementById("pfmp_objtuteur_" + pfmpId);
    var objectifsTuteur = objInput ? objInput.value.trim() : "";
    savePFMPData(login, pfmpId, { dateDebut: dateDebut, dateFin: dateFin, objectifsTuteur: objectifsTuteur });
    toast("Données enregistrées ✅");
  };
  window.renderPFMPTab = renderPFMPTab;

  function renderSuiviTab(c) {
    var hist = loadHistory();
    var students = loadActiveStudentsData();
    var activeLogins = Object.keys(students);
    hist = hist.filter(function (h) { return !h.user || activeLogins.indexOf(h.user) !== -1; });
    var studentRows = Object.keys(students).map(function (login) {
      var s = students[login];
      var sprog = s.progression || {};
      var comps = D.COMPETENCES;
      var done = comps.filter(function (cp) { return (sprog[cp.id] || 0) >= 2; }).length;
      var shist = s.history || [];
      return '<tr><td>' + (s.name || login) + '</td><td>' + login + '</td><td>' + done + '/' + comps.length + '</td><td>' + shist.length + '</td><td style="font-size:.75rem;">' + (s.imported || "—") + '</td></tr>';
    }).join("");
    c.innerHTML = '<h3 style="color:var(--c-primary);">👥 Suivi des élèves</h3>' +
      '<p class="muted">Les données apparaissent automatiquement quand un élève clique sur "💾 Enregistrer mes données". Tu peux aussi importer un export JSON.</p>' +
      '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn--sm btn--accent" onclick="importEleveData()">📥 Importer données élève (JSON)</button><button class="btn btn--sm btn--ghost" style="color:var(--c-text);border:1px solid var(--c-border);" onclick="renderTeacherTab(\'suivi\')">🔄 Actualiser</button></div>' +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">👥 Élèves enregistrés (' + Object.keys(students).length + ')</h4>' +
      (Object.keys(students).length === 0 ? '<p class="muted">Aucun élève enregistré. Demande aux élèves de cliquer sur "💾 Enregistrer mes données" dans leur tableau de bord.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Élève</th><th>Identifiant</th><th>Compétences ≥2</th><th>Scénarios réalisés</th><th>Dernier enregistrement</th></tr></thead><tbody>' + studentRows + '</tbody></table></div>') +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">📜 Scénarios réalisés (élève connecté)</h4>' +
      (hist.length === 0 ? '<p class="muted">Aucun scénario réalisé.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Élève</th><th>Scénario</th><th>Bloc</th><th>Score</th></tr></thead><tbody>' +
        hist.map(function (h) { return '<tr><td>' + h.date + '</td><td>' + (h.user || "—") + '</td><td>' + h.scenario + '</td><td>' + h.bloc + '</td><td>' + h.score + '/' + h.total + '</td></tr>'; }).join("") +
        '</tbody></table></div>');
  }

  function loadStudentsData() {
    var cached = {};
    try { cached = JSON.parse(localStorage.getItem("simassp_students_data") || "{}"); } catch (e) { cached = {}; }
    if (migrateCompKeys(cached, true)) persistMigrated("students_data", "global", cached, "simassp_students_data");
    if (window.Storage) {
      window.Storage.get("students_data", "global").then(function (d) {
        if (d) {
          if (migrateCompKeys(d, true)) persistMigrated("students_data", "global", d, null);
          try { localStorage.setItem("simassp_students_data", JSON.stringify(d)); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function saveStudentsData(obj) {
    try { localStorage.setItem("simassp_students_data", JSON.stringify(obj)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("students_data", "global", obj).catch(function () {});
    }
  }
  function loadActiveStudentsData() {
    var data = loadStudentsData();
    var active = {};
    var logins = (AUTH.accounts || []).map(function (a) { return a.login; });
    Object.keys(data).forEach(function (l) {
      if (logins.indexOf(l) !== -1) active[l] = data[l];
    });
    return active;
  }
  window.importEleveData = function () {
    var input = document.createElement("input");
    input.type = "file"; input.accept = "application/json";
    input.onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        try {
          var data = JSON.parse(ev.target.result);
          var login = (data.student && data.student.login) ? data.student.login : ("eleve_" + Date.now());
          var name = (data.student && data.student.name) ? data.student.name : login;
          var students = loadStudentsData();
          if (!students[login]) students[login] = { name: name, progression: {}, autoeval: {}, history: [], imported: new Date().toLocaleString("fr-FR") };
          if (data.progression) {
            Object.keys(data.progression).forEach(function (k) {
              var cur = students[login].progression[k] || 0;
              students[login].progression[k] = Math.max(cur, data.progression[k]);
            });
          }
          if (data.autoeval) {
            students[login].autoeval = Object.assign({}, students[login].autoeval || {}, data.autoeval);
          }
          if (data.history) {
            students[login].history = (students[login].history || []).concat(data.history).slice(0, 100);
          }
          students[login].imported = new Date().toLocaleString("fr-FR");
          saveStudentsData(students);
          // aussi fusionner dans la progression courante pour compatibilite
          if (data.progression) {
            Object.keys(data.progression).forEach(function (k) {
              var cur = STATE.progression[k] || 0;
              STATE.progression[k] = Math.max(cur, data.progression[k]);
            });
            saveProgression();
          }
          toast("Données élève importées ✅ (" + name + ")");
          renderTeacherTab("suivi");
          renderTeacherTab("bilans");
        } catch (err) { toast("Fichier invalide ❌"); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  function renderScenariosTab(c) {
    c.innerHTML = '<h3 style="color:var(--c-primary);">🎬 Scénarios disponibles (' + D.SCENARIOS.length + ')</h3>' +
      '<p class="muted">Liste des scénarios du MVP. Éditable dans js/data.js.</p>' +
      '<div class="table-wrap"><table class="table"><thead><tr><th>ID</th><th>Titre</th><th>Bloc</th><th>Année</th><th>Contexte</th><th>Durée</th><th>Diff.</th></tr></thead><tbody>' +
      D.SCENARIOS.map(function (s) { return '<tr><td>' + s.id + '</td><td>' + s.titre + '</td><td>' + s.bloc + '</td><td>' + (s.annee === "2" ? "2de" : s.annee === "1" ? "1re" : "Tle") + '</td><td>' + s.contexte + '</td><td>' + s.duree + '</td><td>' + (s.difficulte || 1) + '</td></tr>'; }).join("") +
      '</tbody></table></div>';
  }

  function loadTuteurEvals() {
    var cached = {};
    try { cached = JSON.parse(localStorage.getItem("simassp_tuteur_evals") || "{}"); } catch (e) { cached = {}; }
    if (migrateCompKeys(cached, true)) persistMigrated("tuteur_evals", "global", cached, "simassp_tuteur_evals");
    if (window.Storage) {
      window.Storage.get("tuteur_evals", "global").then(function (d) {
        if (d) {
          if (migrateCompKeys(d, true)) persistMigrated("tuteur_evals", "global", d, null);
          try { localStorage.setItem("simassp_tuteur_evals", JSON.stringify(d)); } catch (e) {}
        }
      }).catch(function () {});
    }
    return cached;
  }
  function saveTuteurEvals(obj) {
    try { localStorage.setItem("simassp_tuteur_evals", JSON.stringify(obj)); } catch (e) {}
    if (window.Storage) {
      window.Storage.set("tuteur_evals", "global", obj).catch(function () {});
    }
  }
  if (STATE.bilanSelectedStudent === undefined) STATE.bilanSelectedStudent = null;
  function renderBilansTab(c) {
    var comps = D.COMPETENCES;
    var students = loadActiveStudentsData();
    var logins = Object.keys(students);
    var u = AUTH.currentUser;
    if (u && !students[u.login]) {
      students[u.login] = { name: u.prenom + " " + u.nom, progression: STATE.progression, autoeval: loadAutoeval(), history: loadHistory(), imported: "connecte" };
      logins = Object.keys(students);
    }
    if (logins.length === 0) {
      c.innerHTML = '<h3 style="color:var(--c-primary);">📈 Bilan de progression</h3>' +
        '<p class="muted">Aucun eleve disponible. Importe les exports JSON des eleves dans l\'onglet Suivi, ou connecte-toi en tant qu\'eleve.</p>';
      return;
    }
    if (!STATE.bilanSelectedStudent || logins.indexOf(STATE.bilanSelectedStudent) === -1) {
      STATE.bilanSelectedStudent = logins[0];
    }
    var selectedLogin = STATE.bilanSelectedStudent;
    var s = students[selectedLogin];
    var prog = s.progression || {};
    var tuteurEvals = loadTuteurEvals();
    var te = tuteurEvals[selectedLogin] || {};
    var tuteurCriteres = (te.criteres !== undefined) ? te.criteres : (te.criteres_old || te);
    // Retrocompatibilite : ancien format = objet plat {cr_id: niveau}
    if (tuteurCriteres === te && !te.criteres && !te.competences) {
      // ancien format : te contient directement les criteres
      var hasCritere = false;
      D.CRITERES.forEach(function (cr) { if (te[cr.id] !== undefined) hasCritere = true; });
      if (hasCritere) { tuteurCriteres = te; }
    }
    var tuteurCompetences = te.competences || {};
    var studentName = s.name || selectedLogin;
    var vals = Object.keys(prog).map(function (k) { return prog[k]; });
    var avg = vals.length ? (vals.reduce(function (a, b) { return a + b; }, 0) / comps.length).toFixed(1) : "0.0";
    var done = comps.filter(function (cp) { return (prog[cp.id] || 0) >= 2; }).length;
    var studentRows = Object.keys(students).map(function (login) {
      var st = students[login];
      var sprog = st.progression || {};
      var v = Object.keys(sprog).map(function (k) { return sprog[k]; });
      var a = v.length ? (v.reduce(function (x, y) { return x + y; }, 0) / comps.length).toFixed(1) : "0.0";
      var d = comps.filter(function (cp) { return (sprog[cp.id] || 0) >= 2; }).length;
      return '<tr><td>' + (st.name || login) + '</td><td>' + login + '</td><td>' + d + '/' + comps.length + '</td><td>' + a + '/3</td><td style="font-size:.75rem;">' + (st.imported || "\u2014") + '</td></tr>';
    }).join("");
    var options = logins.map(function (l) {
      return '<option value="' + l + '"' + (l === selectedLogin ? ' selected' : '') + '>' + (students[l].name || l) + '</option>';
    }).join("");
    var compRows = comps.map(function (cp) {
      var el = prog[cp.id] || 0;
      var tu = tuteurCompetences[cp.id];
      var tuVal = (tu === undefined) ? "" : tu;
      var ecart = (tu === undefined) ? "\u2014" : (el - tu);
      var ecartColor = (tu === undefined) ? "var(--c-muted)" : (ecart === 0 ? "var(--c-accent)" : (ecart > 0 ? "var(--c-warn)" : "var(--c-danger)"));
      var opts = [0,1,2,3].map(function (n) { return '<option value="' + n + '"' + (tuVal === n ? ' selected' : '') + '>' + n + '</option>'; }).join("");
      return '<tr><td>' + cp.id + ' \u2014 ' + cp.titre + '</td><td>' + cp.bloc + '</td><td style="text-align:center;font-weight:700;">' + el + '/3</td><td><select id="tuteurcomp_' + cp.id + '" style="width:60px;padding:4px;border:1px solid var(--c-border);border-radius:6px;">' + opts + '</select></td><td style="text-align:center;font-weight:700;color:' + ecartColor + ';">' + (tu === undefined ? "\u2014" : ((ecart > 0 ? '+' : '') + ecart)) + '</td></tr>';
    }).join("");
    c.innerHTML = '<h3 style="color:var(--c-primary);">📈 Bilan de progression</h3>' +
      '<div style="margin-bottom:12px;"><label style="font-size:.85rem;font-weight:600;color:var(--c-muted);">Eleve : <select id="bilanStudentSelect" class="input" style="width:auto;min-width:200px;">' + options + '</select></label></div>' +
      '<p class="muted">Eleve selectionne : <strong>' + studentName + '</strong> · ' + done + '/' + comps.length + ' competences ≥2 · Niveau moyen ' + avg + '/3</p>' +
      '<div class="card" style="margin-bottom:16px;"><h4 style="color:var(--c-primary);margin:0 0 8px;">Evaluation tuteur (par critere) \u2014 ' + studentName + '</h4>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
      D.CRITERES.map(function (cr) {
        return '<label style="font-size:.8rem;font-weight:600;color:var(--c-muted);">' + cr.label + '<select id="tuteur_' + cr.id + '" style="width:100%;padding:6px;border:1px solid var(--c-border);border-radius:6px;">' +
          [0, 1, 2, 3].map(function (n) { return '<option value="' + n + '"' + (tuteurCriteres[cr.id] === n ? ' selected' : '') + '>' + n + '</option>'; }).join("") + '</select></label>';
      }).join("") + '</div>' +
      '<button class="btn btn--primary btn--sm" style="margin-top:10px;" onclick="saveTuteurEval()">Enregistrer eval. tuteur pour ' + studentName + '</button></div>' +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">Competences : eleve vs tuteur \u2014 ' + studentName + '</h4>' +
      '<p class="muted" style="font-size:.8rem;">Niveau eleve (autoevaluation) vs niveau tuteur. Ecart positif = eleve plus optimiste.</p>' +
      '<div class="table-wrap"><table class="table"><thead><tr><th>Competence</th><th>Bloc</th><th>Eleve</th><th>Tuteur</th><th>Ecart</th></tr></thead><tbody>' + compRows + '</tbody></table></div>' +
      '<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn--primary btn--sm" onclick="saveTuteurCompetences()">Enregistrer eval. competences tuteur</button></div>' +
      '<h4 style="color:var(--c-primary);margin:14px 0 8px;">Suivi des eleves importes (' + Object.keys(students).length + ')</h4>' +
      (Object.keys(students).length === 0 ? '<p class="muted">Aucun eleve importe. Utilise "Importer donnees eleve" dans l\'onglet Suivi.</p>' :
        '<div class="table-wrap"><table class="table"><thead><tr><th>Eleve</th><th>Identifiant</th><th>Competences >=2</th><th>Niveau moyen</th><th>Dernier import</th></tr></thead><tbody>' + studentRows + '</tbody></table></div>') +
      '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn--accent btn--sm" onclick="exportBilanPDF()">Exporter bilan PDF</button></div>';
    var sel = document.getElementById("bilanStudentSelect");
    if (sel) sel.addEventListener("change", function () {
      STATE.bilanSelectedStudent = this.value;
      renderBilansTab(c);
    });
  }

  window.saveTuteurCompetences = function () {
    var comps = D.COMPETENCES;
    var obj = {};
    comps.forEach(function (cp) {
      var sel = document.getElementById("tuteurcomp_" + cp.id);
      if (sel) obj[cp.id] = parseInt(sel.value);
    });
    var login = STATE.bilanSelectedStudent;
    if (login) {
      var evals = loadTuteurEvals();
      if (!evals[login]) evals[login] = {};
      if (!evals[login].competences) evals[login].competences = {};
      evals[login].competences = obj;
      saveTuteurEvals(evals);
    }
    toast("Evaluation competences tuteur enregistree");
    renderBilansTab(document.getElementById("teacherTabContent"));
  };

  window.saveTuteurEval = function () {
    var obj = {};
    D.CRITERES.forEach(function (cr) {
      var sel = document.getElementById("tuteur_" + cr.id);
      if (sel) obj[cr.id] = parseInt(sel.value);
    });
    var login = STATE.bilanSelectedStudent;
    if (login) {
      var evals = loadTuteurEvals();
      if (!evals[login]) evals[login] = {};
      evals[login].criteres = obj;
      // conserver les competences deja sauvegardees
      if (!evals[login].competences) evals[login].competences = {};
      saveTuteurEvals(evals);
    }
    // compatibilite avec l'ancien stockage global
    localStorage.setItem("simassp_tuteur_eval", JSON.stringify(obj));
    if (window.Storage) { window.Storage.set("tuteur_eval", "global", obj).catch(function () {}); }
    toast("Évaluation tuteur enregistrée 👩‍🏫");
  };

  window.exportBilanPDF = function () {
    var w = window.open("", "_blank");
    var students = loadActiveStudentsData();
    var login = STATE.bilanSelectedStudent;
    var s = students[login] || {};
    var prog = s.progression || STATE.progression;
    var comps = D.COMPETENCES;
    var name = s.name || (AUTH.currentUser ? (AUTH.currentUser.prenom + " " + AUTH.currentUser.nom) : "—");
    var tuteurEvals = loadTuteurEvals();
    var te = tuteurEvals[login] || {};
    var tuteurCriteres = (te.criteres !== undefined) ? te.criteres : (te.criteres_old || te);
    if (tuteurCriteres === te && !te.criteres && !te.competences) {
      var hasCritere = false;
      D.CRITERES.forEach(function (cr) { if (te[cr.id] !== undefined) hasCritere = true; });
      if (hasCritere) { tuteurCriteres = te; }
    }
    var tuteurCompetences = te.competences || {};
    var css = 'body{font-family:Arial,sans-serif;padding:20px;color:#1a1a1a;} h1{color:#1e3a5f;border-bottom:2px solid #1e3a5f;padding-bottom:6px;} h2{color:#2e7d32;margin-top:18px;} table{width:100%;border-collapse:collapse;margin:8px 0;} th,td{border:1px solid #ccc;padding:6px;font-size:11px;} th{background:#1e3a5f;color:#fff;} .meta{font-size:12px;color:#555;margin:4px 0;} .badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;} .ok{background:#e8f5e9;color:#2e7d32;} .warn{background:#fff3e0;color:#e65100;} .bad{background:#fce4ec;color:#c62828;}';
    var html = '<!DOCTYPE html><html><head><title>Bilan SimASSP - ' + name + '</title><style>' + css + '</style></head><body>';
    html += '<h1>Bilan de progression — SimASSP</h1>';
    html += '<p class="meta">Élève : <strong>' + name + '</strong> · Identifiant : ' + (login || "—") + '</p>';
    html += '<p class="meta">Date d\'export : ' + new Date().toLocaleDateString("fr-FR") + ' · Date d\'import : ' + (s.imported || "—") + '</p>';
    // Section 1: Progression competences eleve
    html += '<h2>1. Progression des compétences (élève)</h2>';
    html += '<table><thead><tr><th>Compétence</th><th>Bloc</th><th>Niveau élève</th></tr></thead><tbody>';
    comps.forEach(function (cp) {
      html += '<tr><td>' + cp.id + ' — ' + cp.titre + '</td><td>' + cp.bloc + '</td><td style="text-align:center;font-weight:700;">' + (prog[cp.id] || 0) + '/3</td></tr>';
    });
    html += '</tbody></table></div>';
    // Section 2: Evaluation tuteur par competence
    html += '<h2>2. Évaluation tuteur par compétence</h2>';
    html += '<table><thead><tr><th>Compétence</th><th>Bloc</th><th>Élève</th><th>Tuteur</th><th>Écart</th></tr></thead><tbody>';
    comps.forEach(function (cp) {
      var el = prog[cp.id] || 0;
      var tu = tuteurCompetences[cp.id];
      var tuStr = (tu === undefined) ? "—" : tu;
      var ecart = (tu === undefined) ? "—" : (el - tu);
      var ecartStr = (tu === undefined) ? "—" : ((ecart > 0 ? '+' : '') + ecart);
      var colorClass = (tu === undefined) ? "" : (ecart === 0 ? "ok" : (ecart > 0 ? "warn" : "bad"));
      html += '<tr><td>' + cp.id + ' — ' + cp.titre + '</td><td>' + cp.bloc + '</td><td style="text-align:center;">' + el + '/3</td><td style="text-align:center;">' + tuStr + (tu === undefined ? '' : '/3') + '</td><td style="text-align:center;font-weight:700;" class="' + colorClass + '">' + ecartStr + '</td></tr>';
    });
    html += '</tbody></table></div>';
    // Section 3: Evaluation tuteur par critere
    html += '<h2>3. Évaluation tuteur par critère</h2>';
    html += '<table><thead><tr><th>Critère</th><th>Niveau tuteur</th></tr></thead><tbody>';
    D.CRITERES.forEach(function (cr) {
      var val = tuteurCriteres[cr.id];
      html += '<tr><td>' + cr.label + ' — ' + cr.question + '</td><td style="text-align:center;font-weight:700;">' + (val === undefined ? "—" : val + '/3') + '</td></tr>';
    });
    html += '</tbody></table></div>';
    // Section 4: Autoevaluation eleve
    var autoeval = s.autoeval || {};
    html += '<h2>4. Autoévaluation de l\'élève</h2>';
    html += '<table><thead><tr><th>Critère</th><th>Niveau élève</th></tr></thead><tbody>';
    D.CRITERES.forEach(function (cr) {
      var val = autoeval[cr.id];
      html += '<tr><td>' + cr.label + '</td><td style="text-align:center;font-weight:700;">' + (val === undefined ? "—" : val + '/3') + '</td></tr>';
    });
    html += '</tbody></table></div>';
    // Section 5: Historique scenarios
    var hist = s.history || [];
    html += '<h2>5. Scénarios réalisés (' + hist.length + ')</h2>';
    if (hist.length === 0) {
      html += '<p class="meta">Aucun scénario réalisé.</p>';
    } else {
      html += '<table><thead><tr><th>Date</th><th>Scénario</th><th>Bloc</th><th>Score</th></tr></thead><tbody>';
      hist.forEach(function (h) {
        html += '<tr><td>' + h.date + '</td><td>' + h.scenario + '</td><td>' + h.bloc + '</td><td>' + h.score + '/' + h.total + '</td></tr>';
      });
      html += '</tbody></table></div>';
    }
    html += '<script>window.print();</script></body></html>';
    w.document.write(html);
    w.document.close();
    w.document.close();
  };

  // ---------- MATHEO ----------
  window.openMatheoPrompt = function (prompt) {
    var url = "https://you45-assistant-mr-anouar.hf.space";
    var p = encodeURIComponent(prompt);
    window.open(url + "?prompt=" + p, "_blank");
  };

  // ---------- TOAST ----------
  var toastTimer;
  window.toast = function (msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 2600);
  };

  // ---------- MODAL ----------
  window.openModal = function (html) {
    var mc = document.getElementById("modalContent");
    if (mc) mc.innerHTML = html;
    var m = document.getElementById("modal");
    if (m) m.hidden = false;
  };
  window.closeModal = function () { if (STATE.forcePasswordChange) return; var m = document.getElementById("modal"); if (m) m.hidden = true; };
  window.showChangePasswordModal = function (isTeacher) {
    var name = isTeacher ? (TEACHER_AUTH.currentUser.prenom + " " + TEACHER_AUTH.currentUser.nom) : (AUTH.currentUser.prenom + " " + AUTH.currentUser.nom);
    openModal(
      '<h3 style="color:var(--c-primary);">🔐 Première connexion — change ton mot de passe</h3>' +
      '<p class="muted">Bienvenue ' + name + '. Pour sécuriser ton compte, choisis un nouveau mot de passe.</p>' +
      '<div class="login__form" style="max-width:320px;margin:16px auto 0;">' +
      '<label>Nouveau mot de passe<input type="password" id="cp_new" class="input" placeholder="••••••••" /></label>' +
      '<label>Confirmer<input type="password" id="cp_confirm" class="input" placeholder="••••••••" /></label>' +
      '<button class="btn btn--primary btn--lg" style="width:100%;justify-content:center;margin-top:10px;" onclick="changePasswordNow(' + (isTeacher ? 'true' : 'false') + ')">Valider</button>' +
      '</div>'
    );
  };
  window.changePasswordNow = async function (isTeacher) {
    var p1 = document.getElementById("cp_new").value;
    var p2 = document.getElementById("cp_confirm").value;
    if (!p1 || p1.length < 4) { toast("Mot de passe trop court (4 caractères min)."); return; }
    if (p1 !== p2) { toast("Les mots de passe ne correspondent pas."); return; }
    if (isTeacher) {
      var acc = TEACHER_AUTH.currentUser;
      acc.passwordHash = TEACHER_AUTH.hash(p1);
      acc.mustChangePassword = false;
      await TEACHER_AUTH.saveAccounts();
      STATE.forcePasswordChange = false;
      closeModal();
      toast("Mot de passe modifié ✅");
      updateUserBadge();
      renderTeacher();
    } else {
      var acc2 = AUTH.currentUser;
      acc2.passwordHash = AUTH.hash(p1);
      acc2.mustChangePassword = false;
      await AUTH.saveAccounts();
      STATE.forcePasswordChange = false;
      closeModal();
      toast("Mot de passe modifié ✅");
      showView("accueil");
    }
  };
  var modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", function () { if (STATE.forcePasswordChange) return; var m = document.getElementById("modal"); if (m) m.hidden = true; });
  var backdrop = document.querySelector(".modal__backdrop");
  if (backdrop) backdrop.addEventListener("click", function () { if (STATE.forcePasswordChange) return; var m = document.getElementById("modal"); if (m) m.hidden = true; });

  // ---------- INIT ----------
  async function init() {
    try { window.showView = showView; } catch (e) { console.error("showView", e); }
    // Attendre Supabase
    if (window.SB_READY) { try { await window.SB_READY; } catch (e) {} }
    // Charger les comptes depuis Supabase (ou cache local)
    try {
      var acc = await AUTH.loadAccounts();
      AUTH.accounts = acc || [];
    } catch (e) { AUTH.accounts = []; }
    try {
      var tacc = await TEACHER_AUTH.loadAccounts();
      TEACHER_AUTH.accounts = tacc || [];
    } catch (e) { TEACHER_AUTH.accounts = []; }
    // Compte enseignant par defaut si aucun
    if (TEACHER_AUTH.accounts.length === 0) {
      TEACHER_AUTH.accounts.push({
        id: "t_default",
        login: "enseignant",
        passwordHash: TEACHER_AUTH.hash("ecbg2026"),
        prenom: "Enseignant", nom: "", role: "enseignant",
        created: new Date().toLocaleString("fr-FR"),
        mustChangePassword: true
      });
      TEACHER_AUTH.saveAccounts();
    }
    // Migration one-time : copier les donnees localStorage vers Supabase
    (async function migrateLocalStorage() {
      try {
        if (localStorage.getItem("simassp_migrated_to_supabase") === "1") return;
        if (!window.Storage) return;
        if (!(await window.SB_READY)) return;
        // accounts
        var acc = [];
        try { acc = JSON.parse(localStorage.getItem("simassp_accounts") || "[]"); } catch (e) { acc = []; }
        for (var i = 0; i < acc.length; i++) { await window.Storage.set("accounts", acc[i].id, acc[i]); }
        // teachers
        var tch = [];
        try { tch = JSON.parse(localStorage.getItem("simassp_teachers") || "[]"); } catch (e) { tch = []; }
        for (var j = 0; j < tch.length; j++) { await window.Storage.set("teachers", tch[j].id, tch[j]); }
        // pfmp
        var pfmp = null;
        try { pfmp = JSON.parse(localStorage.getItem("simassp_pfmp") || "null"); } catch (e) { pfmp = null; }
        if (pfmp) await window.Storage.set("pfmp", "global", pfmp);
        // students_data
        var sd = null;
        try { sd = JSON.parse(localStorage.getItem("simassp_students_data") || "null"); } catch (e) { sd = null; }
        if (sd) await window.Storage.set("students_data", "global", sd);
        // tuteur_evals
        var te = null;
        try { te = JSON.parse(localStorage.getItem("simassp_tuteur_evals") || "null"); } catch (e) { te = null; }
        if (te) await window.Storage.set("tuteur_evals", "global", te);
        // tuteur_eval
        var t = null;
        try { t = JSON.parse(localStorage.getItem("simassp_tuteur_eval") || "null"); } catch (e) { t = null; }
        if (t) await window.Storage.set("tuteur_eval", "global", t);
        // progress/autoeval/history par utilisateur
        for (var k = 0; k < acc.length; k++) {
          var uid = acc[k].id;
          var prog = null, ae = null, hist = null;
          try { prog = JSON.parse(localStorage.getItem("simassp_progress_" + uid) || "null"); } catch (e) { prog = null; }
          try { ae = JSON.parse(localStorage.getItem("simassp_autoeval_" + uid) || "null"); } catch (e) { ae = null; }
          try { hist = JSON.parse(localStorage.getItem("simassp_history_" + uid) || "null"); } catch (e) { hist = null; }
          if (prog) await window.Storage.set("progress", uid, prog);
          if (ae) await window.Storage.set("autoeval", uid, ae);
          if (hist) await window.Storage.set("history", uid, hist);
        }
        localStorage.setItem("simassp_migrated_to_supabase", "1");
      } catch (e) { console.warn("Migration error:", e && e.message); }
    })();

    // Abonnement temps reel : recharger les comptes quand ils changent
    if (window.SB_SUBSCRIBE) {
      window.SB_SUBSCRIBE(function (payload) {
        var ns = payload && payload.new && payload.new.namespace;
        if (ns === "accounts" || ns === "teachers") {
          AUTH.loadAccounts().then(function (a) {
            var merged = (a || []).slice();
            var ids = merged.map(function (x) { return x.id; });
            (AUTH.accounts || []).forEach(function (c) {
              if (AUTH.deletedIds.indexOf(c.id) !== -1) return;
              if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
            });
            merged = merged.filter(function (x) { return AUTH.deletedIds.indexOf(x.id) === -1; });
            AUTH.accounts = merged;
          }).catch(function () {});
          TEACHER_AUTH.loadAccounts().then(function (a) {
            var merged = (a || []).slice();
            var ids = merged.map(function (x) { return x.id; });
            (TEACHER_AUTH.accounts || []).forEach(function (c) {
              if (TEACHER_AUTH.deletedIds.indexOf(c.id) !== -1) return;
              if (ids.indexOf(c.id) === -1) { merged.push(c); ids.push(c.id); }
            });
            merged = merged.filter(function (x) { return TEACHER_AUTH.deletedIds.indexOf(x.id) === -1; });
            TEACHER_AUTH.accounts = merged;
          }).catch(function () {});
        }
      });
    }

    try {
      if (AUTH.restoreSession()) {
        STATE.progression = loadProgression();
        STATE.autoeval = loadAutoeval();
        showView("accueil");
      } else {
        showView("login");
      }
    } catch (e) {
      console.error("Init error:", e);
      try { showView("login"); } catch (e2) { console.error(e2); }
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();