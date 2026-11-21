/* ============================================================
   SimASSP — Moteur de l'Assistant Soins (chatbot pédagogique)
   Réponses à partir du lexique technique ASSP intégré.
   100 % local : aucune clé API, fonctionne hors-ligne.
   ============================================================ */
(function () {
  "use strict";

  var LEX = (window.SOINS_LEXIQUE || []).map(function (e) {
    return {
      terme: e[0], def: e[1], syn: e[2], bloc: e[3], comp: e[4],
      retenir: e[5], exemple: e[6], lies: (e[7] || "").split("|").filter(Boolean),
      search: norm(e[0] + " " + e[2] + " " + e[1])
    };
  });

  var STOP = ("le la les un une des de du au aux et ou est sont etre etre ce cet cette ces " +
    "que qui quoi comment pourquoi dans sur avec pour par en du au je tu il elle nous vous ils " +
    "mon ma mes ton ta tes son sa ses leur leurs du de la le un une des est ce c est qu en " +
    "est ce que qu est ce qu il y a y a t il peut peux doit faire fait suis es a l d n s j").split(/\s+/);

  function norm(s) {
    return String(s || "")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  }
  function tokens(s) {
    return norm(s).split(" ").filter(function (w) {
      return w.length > 1 && STOP.indexOf(w) === -1;
    });
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length || !b.length) return Math.max(a.length, b.length);
    var prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      for (j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  function score(ent, qTokens, qNorm) {
    var t = norm(ent.terme);
    var s = 0;
    if (qNorm === t) s += 200;
    else if (qNorm.indexOf(t) !== -1 && t.length >= 4) s += 90;
    var syns = norm(ent.syn).split(" ").filter(Boolean);
    qTokens.forEach(function (w) {
      if (syns.indexOf(w) !== -1) s += 26;
      else if (ent.search.indexOf(" " + w + " ") !== -1) s += 12;
      else if (w.length >= 4) {
        var best = 9;
        syns.forEach(function (sw) {
          if (sw.length >= 4 && Math.abs(sw.length - w.length) <= 2) {
            var d = levenshtein(w, sw);
            if (d <= 2) best = Math.min(best, d === 1 ? 7 : 5);
          }
        });
        s += best === 9 ? 0 : best;
      }
    });
    // boost si tous les mots du terme sont dans la question
    var tt = t.split(" ").filter(function (w) { return w.length > 1; });
    if (tt.length && tt.every(function (w) { return qTokens.indexOf(w) !== -1; })) s += 45;
    return s;
  }

  function rank(question, limit) {
    var q = tokens(question);
    var qn = norm(question);
    if (!q.length) return [];
    return LEX.map(function (e) { return { e: e, s: score(e, q, qn) }; })
      .filter(function (r) { return r.s > 8; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, limit || 5);
  }

  function esc(t) {
    return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function intent(question) {
    var q = norm(question);
    if (/bonjour|salut|hello|coucou/.test(q)) return "hello";
    if (/merci|super|genial|top/.test(q)) return "thanks";
    if (/aide|help|que peux tu faire|comment ca marche/.test(q)) return "help";
    if (/difference entre|difference de|differe de|vs\b|versus/.test(q)) return "compare";
    if (/que faire|conduite a tenir|comment faire|comment reagir|procedure|etapes|signes|symptomes|en cas de/.test(q)) return "action";
    if (/exemple|donne moi un cas|mise en situation/.test(q)) return "example";
    return "definition";
  }

  function chip(label, question) {
    return '<button class="soins-chip" onclick="askSoinsBot(' + JSON.stringify(question).replace(/"/g, "&quot;") + ')">' + esc(label) + '</button>';
  }

  function canonical(name) {
    var n = norm(name);
    var found = LEX.filter(function (x) { return norm(x.terme) === n; })[0];
    return found ? found.terme : name;
  }

  function card(e, mode) {
    var h = '<div class="soins-card">';
    h += '<div class="soins-card__head"><span class="soins-badge">' + esc(e.bloc) + ' · ' + esc(e.comp) + '</span>' +
         '<span class="soins-card__title">' + esc(e.terme) + '</span></div>';
    h += '<p class="soins-def"><b>Définition.</b> ' + esc(e.def) + '</p>';
    if (e.retenir && (mode === "definition" || mode === "action")) {
      h += '<div class="soins-block soins-block--key">💡 <b>À retenir.</b> ' + esc(e.retenir) + '</div>';
    }
    if (e.exemple && (mode === "action" || mode === "example" || mode === "definition")) {
      h += '<div class="soins-block soins-block--ex">📌 <b>Exemple.</b> ' + esc(e.exemple) + '</div>';
    }
    if (mode === "action" && e.retenir) {
      h += '<p class="soins-note">En situation : applique le geste ci-dessus, puis transmets et trace dans le dossier de soins.</p>';
    }
    if (e.lies.length) {
      h += '<div class="soins-related"><span>Voir aussi :</span>' +
        e.lies.slice(0, 5).map(function (t) {
          var c = canonical(t);
          return chip(c, "Explique-moi " + c);
        }).join("") + '</div>';
    }
    return h + '</div>';
  }

  function fallback(question) {
    var q = norm(question);
    var sugg = rank(question, 4).map(function (r) { return r.e.terme; });
    if (!sugg.length) {
      sugg = ["Bientraitance", "Transmission", "Escarre", "Hypoglycémie", "Projet individualisé"];
    }
    return '<div class="soins-card">' +
      '<p class="soins-def">Je n’ai pas trouvé de définition pour « ' + esc(question) + ' » dans mon lexique de la filière de soins.</p>' +
      '<p class="soins-note">Essaie de reformuler avec un terme professionnel, ou explore les suggestions ci-dessous.</p>' +
      '<div class="soins-related"><span>Tu cherches peut-être :</span>' +
      sugg.map(function (t) { return chip(t, "Explique-moi " + t); }).join("") + '</div></div>';
  }

  function answer(question) {
    var q = String(question || "").trim();
    var mode = intent(q);
    if (mode === "hello") {
      return { html: '<p class="soins-def">Bonjour 👋 Je suis l’Assistant Soins. Je connais le vocabulaire technique du Bac Pro ASSP : définitions, gestes, sigles et conduites à tenir. Pose-moi une question !</p>' };
    }
    if (mode === "thanks") {
      return { html: '<p class="soins-def">Avec plaisir 💙 N’hésite pas à revenir si tu as un doute sur un terme ou un geste.</p>' };
    }
    if (mode === "help") {
      return { html: '<p class="soins-def">Je peux t’aider à :</p><ul class="soins-list">' +
        '<li>donner la <b>définition</b> d’un terme (ex. : « c’est quoi la bientraitance ? »),</li>' +
        '<li>expliquer une <b>conduite à tenir</b> (ex. : « que faire en cas d’hypoglycémie ? »),</li>' +
        '<li>comparer deux notions (ex. : « différence entre asepsie et antisepsie »),</li>' +
        '<li>décoder un <b>sigle</b> (EHPAD, AES, DASRI, GIR…).</li></ul>' +
        '<p class="soins-note">Mes réponses sont pédagogiques et fictives : elles ne remplacent ni un professionnel ni un protocole d’établissement.</p>' };
    }

    var found = rank(q, mode === "compare" ? 8 : 4);
    if (!found.length) return fallback(q);

    if (mode === "compare") {
      var a = found[0].e, b = found[1] && found[1].s > 12 ? found[1].e : null;
      if (!b) {
        return { html: '<p class="soins-def">Je n’ai trouvé qu’une notion : ' + esc(a.terme) + '. Précise les deux termes à comparer.</p>' + card(a, "definition") };
      }
      return { html: '<div class="soins-card"><div class="soins-card__head"><span class="soins-card__title">Différence : ' + esc(a.terme) + ' / ' + esc(b.terme) + '</span></div>' +
        '<p class="soins-def"><b>' + esc(a.terme) + ' :</b> ' + esc(a.def) + '</p>' +
        '<p class="soins-def"><b>' + esc(b.terme) + ' :</b> ' + esc(b.def) + '</p>' +
        '<div class="soins-block soins-block--key">💡 <b>Pour retenir :</b> ' + esc(a.terme) + ' — ' + esc(a.retenir || a.def) + ' · ' + esc(b.terme) + ' — ' + esc(b.retenir || b.def) + '</div></div>' };
    }

    var best = found[0].e;
    return { html: card(best, mode), terme: best.terme };
  }

  function allTerms() {
    return LEX.slice().sort(function (a, b) {
      return a.terme.localeCompare(b.terme, "fr");
    });
  }

  function lexiqueHTML() {
    var h = '<div class="soins-lexique">';
    var bloc = "";
    allTerms().forEach(function (e) {
      if (e.bloc !== bloc) {
        bloc = e.bloc;
        h += '<h4 class="soins-lex-titre">Bloc ' + esc(bloc) + '</h4><div class="soins-lex-grid">';
      }
      h += '<button class="soins-lex-item" onclick="askSoinsBot(' + JSON.stringify("Explique-moi " + e.terme).replace(/"/g, "&quot;") + ')">' +
        '<b>' + esc(e.terme) + '</b><span>' + esc(e.def.slice(0, 95)) + (e.def.length > 95 ? "…" : "") + '</span></button>';
    });
    return h + '</div></div>';
  }

  // Révision ciblée après un scénario : notions clés du bloc.
  var BLOCS_KEY = {
    B1: ["Bientraitance", "Projet individualisé", "Écoute active", "Droit des usagers"],
    B2: ["Hygiène des mains", "Transfert", "Escarre", "Hypoglycémie", "Douleur"],
    B3: ["Transmission", "Dossier de soins", "Équipe pluriprofessionnelle", "Bionettoyage"],
    B4: ["Éducation à la santé", "Prévention", "Déterminants de santé", "Évaluation (action)"]
  };
  function blocAnswer(bloc) {
    var noms = BLOCS_KEY[bloc] || BLOCS_KEY.B1;
    var h = '<div class="soins-lex-grid" style="margin-top:8px;">';
    noms.forEach(function (n) {
      var e = LEX.filter(function (x) { return x.terme === n; })[0];
      if (!e) return;
      h += '<div class="soins-block soins-block--key"><b>' + esc(e.terme) + '</b> — ' + esc(e.def) + '</div>';
    });
    return h + '</div><p class="soins-note">Clique sur une suggestion plus haut pour aller plus loin.</p>';
  }

  window.SOINS_BOT = {
    answer: answer,
    rank: rank,
    allTerms: allTerms,
    lexiqueHTML: lexiqueHTML,
    blocAnswer: blocAnswer,
    count: LEX.length,
    normalize: norm
  };
})();
