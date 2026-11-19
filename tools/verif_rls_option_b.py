# -*- coding: utf-8 -*-
"""Vérifie le câblage client de l'Option B (RLS Supabase) SANS toucher au projet de production.

Le SDK Supabase est remplacé par un faux injecté avant le chargement des scripts :
les RPC sont simulées en mémoire, toutes les requêtes réelles vers *.supabase.co
et vers le CDN du SDK sont bloquées. Le vrai js/supabase.js et le vrai js/app.js
sont exécutés : c'est donc bien le câblage applicatif qui est testé.
"""
import base64
import functools
import http.server
import json
import re
import socketserver
import threading

from playwright.sync_api import sync_playwright

ROOT = r"C:\Users\YAN\Desktop\SimASSP"
PORT = 8775
PWD = "TestAmelio2026"
LEGACY = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")

ELEVE = {
    "id": "u_rls_test", "login": "rls.eleve", "passwordHash": LEGACY,
    "prenom": "Rls", "nom": "Eleve", "niveau": "1", "classe": "1re ASSP",
    "created": "19/11/2026", "mustChangePassword": False,
}
PROF = {
    "id": "t_rls_test", "login": "rls.prof", "passwordHash": LEGACY,
    "prenom": "Rls", "nom": "Prof", "role": "enseignant",
    "created": "19/11/2026", "mustChangePassword": False,
}
AUTRE = {"name": "AUTRE ELEVE — NE PAS VOIR", "secret": "CONFIDENTIEL"}

# Données distantes simulées (les blobs globaux contiennent un autre élève).
FAKE_KV = {
    "accounts": {"u_rls_test": ELEVE},
    "teachers": {"t_rls_test": PROF},
    "students_data": {"global": {
        "rls.eleve": {"name": "Rls Eleve", "progression": {}, "history": []},
        "autre.eleve": AUTRE,
    }},
    "pfmp": {"global": {
        "rls.eleve": {"PFMP3": {"structure": "Hopital Test"}},
        "autre.eleve": AUTRE,
    }},
    "tuteur_evals": {"global": {
        "rls.eleve": {"competences": {"1.1": 2}},
        "autre.eleve": AUTRE,
    }},
}

FAUX_SDK = r"""
(function () {
  "use strict";
  window.__fakeKV = %s;
  window.__rpcLog = [];
  window.__rpcMode = "ok";
  window.__currentLogin = null;
  window.__isTeacher = false;

  function findRow(filters) {
    var rows = window.__fakeKV[filters.namespace] || {};
    if (filters.owner) return rows[filters.owner] ? { owner: filters.owner, data: rows[filters.owner] } : null;
    var keys = Object.keys(rows);
    return keys.length ? { owner: keys[0], data: rows[keys[0]] } : null;
  }

  function builder() {
    var op = null, filters = {}, payload = null;
    var b = {
      select: function () { op = "select"; return b; },
      upsert: function (row) { op = "upsert"; payload = row; return b; },
      delete: function () { op = "delete"; return b; },
      eq: function (k, v) { filters[k] = v; return b; },
      maybeSingle: async function () {
        var r = findRow(filters);
        return { data: r ? { data: r.data } : null, error: null };
      },
      then: function (resolve, reject) { return run().then(resolve, reject); }
    };
    async function run() {
      var rows = window.__fakeKV[filters.namespace] || {};
      if (op === "select") {
        return { data: Object.keys(rows).map(function (k) {
          return { owner: k, data: rows[k] };
        }), error: null };
      }
      if (op === "upsert") {
        // RLS simulée : un élève ne peut pas écrire directement owner='global'.
        if (payload.owner === "global" && window.__currentLogin && !window.__isTeacher) {
          return { data: null, error: { message: "new row violates row-level security policy" } };
        }
        if (!window.__fakeKV[payload.namespace]) window.__fakeKV[payload.namespace] = {};
        window.__fakeKV[payload.namespace][payload.owner] = payload.data;
        return { data: null, error: null };
      }
      if (op === "delete") {
        if (filters.owner === "global" && window.__currentLogin && !window.__isTeacher) {
          return { data: null, error: { message: "row-level security policy violated" } };
        }
        delete rows[filters.owner]; return { data: null, error: null };
      }
      return { data: null, error: null };
    }
    return b;
  }

  window.supabase = {
    createClient: function () {
      var session = { user: { id: "fake-uid-device-1" } };
      return {
        auth: {
          getSession: async function () { return { data: { session: session } }; },
          signInAnonymously: async function () { return { data: { session: session }, error: null }; },
          signOut: async function () { return { error: null }; }
        },
        from: function () { return builder(); },
        channel: function () { return { on: function () { return { subscribe: function () {} }; } }; },
        removeChannel: function () {},
        rpc: async function (fn, params) {
          params = params || {};
          window.__rpcLog.push({ fn: fn, params: params });
          if (window.__rpcMode === "missing") {
            return { data: null, error: { message: "Could not find the function public." + fn + " in schema cache" } };
          }
          var KV = window.__fakeKV;
          if (fn === "simassp_public_account" || fn === "simassp_public_teacher") {
            var ns = fn.indexOf("teacher") !== -1 ? "teachers" : "accounts";
            var all = KV[ns] || {};
            var acc = Object.keys(all).map(function (k) { return all[k]; })
              .filter(function (a) { return a.login === params.p_login; })[0];
            return { data: acc ? { id: acc.id, login: acc.login, passwordHash: acc.passwordHash } : null, error: null };
          }
          if (fn === "simassp_claim") {
            var ns2 = params.p_kind === "teacher" ? "teachers" : "accounts";
            var a2 = (KV[ns2] || {})[params.p_owner];
            if (!a2) return { data: false, error: null };
            var stored = String(a2.passwordHash);
            var ok = stored.indexOf("pbkdf2$") === 0
              ? params.p_proof === stored.split("$")[3]
              : params.p_proof === stored;
            if (!ok) return { data: false, error: null };
            if (params.p_new_hash) a2.passwordHash = params.p_new_hash;
            window.__currentLogin = a2.login;
            window.__isTeacher = params.p_kind === "teacher";
            return { data: true, error: null };
          }
          if (fn === "simassp_student_snapshot_get" || fn === "simassp_student_pfmp_get" ||
              fn === "simassp_student_tuteur_eval_get") {
            var key = fn === "simassp_student_snapshot_get" ? "students_data"
                    : fn === "simassp_student_pfmp_get" ? "pfmp" : "tuteur_evals";
            var blob = (KV[key] || {}).global || {};
            return { data: blob[window.__currentLogin] || {}, error: null };
          }
          if (fn === "simassp_student_global_set") {
            var login = window.__currentLogin;
            if (!KV[params.p_namespace]) KV[params.p_namespace] = {};
            if (!KV[params.p_namespace].global) KV[params.p_namespace].global = {};
            KV[params.p_namespace].global[login] = params.p_value;
            return { data: true, error: null };
          }
          return { data: null, error: { message: "RPC inconnue: " + fn } };
        }
      };
    }
  };
})();
""" % json.dumps(FAKE_KV, ensure_ascii=False)

INIT = (
    "localStorage.setItem('simassp_accounts', JSON.stringify([%s]));"
    "localStorage.setItem('simassp_teachers', JSON.stringify([%s]));"
) % (json.dumps(ELEVE, ensure_ascii=False), json.dumps(PROF, ensure_ascii=False))


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


httpd = socketserver.TCPServer(("127.0.0.1", PORT), functools.partial(Quiet, directory=ROOT))
threading.Thread(target=httpd.serve_forever, daemon=True).start()
erreurs = []


def check(cond, msg):
    if not cond:
        erreurs.append(msg)


def attendre(pg, expression, tours=20):
    for _ in range(tours):
        if pg.evaluate(expression):
            return True
        pg.wait_for_timeout(500)
    return False


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(FAUX_SDK)
    ctx.add_init_script(INIT)
    # Aucune écriture / aucun appel réel vers Supabase ni le CDN du SDK.
    ctx.route(re.compile(r".*supabase\.co.*"), lambda route: route.abort())
    ctx.route(re.compile(r".*cdn\.jsdelivr\.net/npm/@supabase/.*"),
              lambda route: route.fulfill(status=200, content_type="application/javascript", body=""))
    page = ctx.new_page()
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="domcontentloaded")
    page.wait_for_function(
        "document.getElementById('view-login').classList.contains('view--active')", timeout=60000)
    page.wait_for_function("window.SB_READY !== undefined", timeout=20000)
    page.wait_for_timeout(300)

    check(page.evaluate("window.SimASSPAuth.ready === true"), "Session anonyme non prête")
    check(page.evaluate("window.SB_READY.then(function(v){return v;})"), "SB_READY false")

    # --- Connexion élève : lookup distant + claim PBKDF2 + migration legacy ---
    page.fill("#loginUser", "rls.eleve")
    page.fill("#loginPwd", PWD)
    page.evaluate("doLogin()")
    check(attendre(page, "document.getElementById('view-accueil').classList.contains('view--active')"),
          "Connexion élève impossible: " + page.locator("#loginError").inner_text())
    page.wait_for_timeout(400)

    log = page.evaluate("window.__rpcLog")
    fns = [e["fn"] for e in log]
    check("simassp_public_account" in fns, "RPC lookup élève absente")
    check("simassp_claim" in fns, "RPC claim élève absente")
    claim = [e for e in log if e["fn"] == "simassp_claim"][0]
    check(claim["params"].get("p_kind") == "student", "claim élève : mauvais kind")
    check(PWD not in json.dumps(claim["params"]), "Le mot de passe en clair a été envoyé au serveur")
    check(bool(claim["params"].get("p_new_hash", "").startswith("pbkdf2$")),
          "Migration legacy : p_new_hash PBKDF2 absent")
    check(page.evaluate(
        "window.__fakeKV.accounts['u_rls_test'].passwordHash.indexOf('pbkdf2$') === 0"),
        "Le hash distant n'a pas été migré en PBKDF2")

    # --- Isolation des blobs globaux : seul le login courant est injecté ---
    for key in ("simassp_students_data", "simassp_pfmp", "simassp_tuteur_evals"):
        contenu = page.evaluate("localStorage.getItem('%s') || '{}'" % key)
        check("rls.eleve" in contenu, "Snapshot %s non injecté" % key)
        check("AUTRE ELEVE" not in contenu, "Fuite d'un autre élève dans %s" % key)

    # --- Écriture ciblée : une clé seulement, l'autre intacte ---
    page.evaluate("window.saveStudentData()")
    page.wait_for_timeout(500)
    kv = page.evaluate("window.__fakeKV.students_data.global")
    check("rls.eleve" in kv, "snapshot élève non écrit côté serveur")
    check(kv.get("autre.eleve") == AUTRE, "snapshot d'un autre élève écrasé")
    check(PWD not in json.dumps(kv), "Mot de passe présent dans le snapshot")

    # --- Mauvais mot de passe : le claim échoue et bloque la connexion ---
    page.evaluate("window.logout()")
    page.wait_for_timeout(200)
    page.fill("#loginUser", "rls.eleve")
    page.fill("#loginPwd", "MauvaisPwd2026")
    page.evaluate("doLogin()")
    page.wait_for_timeout(900)
    vue = page.evaluate("(document.querySelector('.view.view--active')||{}).id")
    check(vue == "view-login", "Connexion avec un mauvais mot de passe acceptée (vue=%s)" % vue)

    # --- Repli si la migration SQL n'est pas encore appliquée ---
    page.evaluate("window.__rpcMode = 'missing'")
    page.evaluate("window.__rpcLog = []")
    page.fill("#loginUser", "rls.eleve")
    page.fill("#loginPwd", PWD)
    page.evaluate("doLogin()")
    check(attendre(page, "document.getElementById('view-accueil').classList.contains('view--active')"),
          "Repli sans RPC : connexion locale impossible")
    check("simassp_claim" not in [e["fn"] for e in page.evaluate("window.__rpcLog")],
          "Repli sans RPC : claim appelé alors que la RPC est absente")
    page.evaluate("window.__rpcMode = 'ok'")

    # --- Connexion enseignant : claim avec kind=teacher ---
    page.evaluate("window.teacherLogout ? window.teacherLogout() : 0")
    page.evaluate("showView('enseignant')")
    page.fill("#teacherUser", "rls.prof")
    page.fill("#teacherPwd", PWD)
    page.evaluate("document.getElementById('teacherLoginBtn').click()")
    check(attendre(page, "!document.getElementById('teacherPanel').hidden"),
          "Connexion enseignant impossible")
    page.wait_for_timeout(400)
    claims = [e for e in page.evaluate("window.__rpcLog") if e["fn"] == "simassp_claim"]
    check(any(e["params"].get("p_kind") == "teacher" for e in claims),
          "RPC claim enseignante absente")

    browser.close()

httpd.shutdown()
print("RPC appelées :", sorted(set(e["fn"] for e in log)))
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
