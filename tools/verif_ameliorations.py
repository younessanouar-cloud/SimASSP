# -*- coding: utf-8 -*-
"""Test navigateur des améliorations SimASSP 19/11.

Couvre : filtres de scénarios, carnet réflexif, navigation enseignant,
hachage PBKDF2 (avec migration depuis l'ancien base64) et PWA hors-ligne.
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
PORT = 8768
PWD = "TestAmelio2026"
LEGACY_HASH = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
ELEVE = {
    "id": "u_amelio_test", "login": "amelio.eleve", "passwordHash": LEGACY_HASH,
    "prenom": "Amelio", "nom": "Eleve", "niveau": "1",
    "classe": "Premiere ASSP", "created": "19/11/2026", "mustChangePassword": False,
}
PROF = {
    "id": "t_amelio_test", "login": "amelio.prof", "passwordHash": LEGACY_HASH,
    "prenom": "Amelio", "nom": "Prof", "role": "enseignant",
    "created": "19/11/2026", "mustChangePassword": False,
}
INIT = (
    "localStorage.setItem('simassp_accounts', JSON.stringify([%s]));"
    "localStorage.setItem('simassp_teachers', JSON.stringify([%s]));"
) % (json.dumps(ELEVE, ensure_ascii=False), json.dumps(PROF, ensure_ascii=False))


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


REFLEX = "J'aurais demandé l'avis de l'IDE avant de transmettre, pour vérifier la transmission."

httpd = socketserver.TCPServer(("127.0.0.1", PORT), functools.partial(Quiet, directory=ROOT))
threading.Thread(target=httpd.serve_forever, daemon=True).start()

erreurs = []
BASE = f"http://127.0.0.1:{PORT}"


def connecter(page, user_field, pwd_field, login, action, ready_js):
    """Retry borné : doLogin() est devenu asynchrone (PBKDF2)."""
    for _ in range(20):
        try:
            if page.evaluate(ready_js):
                return True
            page.locator(user_field).wait_for(state="visible", timeout=4000)
            page.fill(user_field, login)
            page.fill(pwd_field, PWD)
            page.evaluate(action)
        except Exception:
            pass
        # La vérification PBKDF2 est asynchrone : laisser la promesse se terminer.
        page.wait_for_timeout(500)
    return page.evaluate(ready_js)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(INIT)
    # Ne jamais écrire dans le projet Supabase de production pendant les tests.
    ctx.route(re.compile(r".*supabase\.co.*"), lambda route: route.abort())
    page = ctx.new_page()
    bruit = ("failed to load resource", "net::", "cdn.jsdelivr", "supabase", "err_")
    page.on("console", lambda m: erreurs.append("console: " + m.text)
            if m.type == "error" and not any(b in m.text.lower() for b in bruit) else None)
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.goto(BASE + "/index.html", wait_until="domcontentloaded")
    page.wait_for_function(
        "document.getElementById('view-login') && "
        "document.getElementById('view-login').classList.contains('view--active')",
        timeout=60000,
    )

    # --- Connexion élève + migration PBKDF2 ---
    if not connecter(page, "#loginUser", "#loginPwd", "amelio.eleve", "doLogin()",
                     "() => document.getElementById('view-accueil').classList.contains('view--active')"):
        erreurs.append("Connexion élève impossible: " + page.locator("#loginError").inner_text())
    hash_eleve = page.evaluate(
        "JSON.parse(localStorage.getItem('simassp_accounts'))[0].passwordHash"
    )
    if not str(hash_eleve).startswith("pbkdf2$"):
        erreurs.append("Le hash élève n'a pas été migré en PBKDF2: " + str(hash_eleve)[:40])

    # --- Filtres scénarios ---
    page.evaluate("showView('scenarios')")
    page.wait_for_selector("#scenarioSearch")
    total = page.locator("#scenarioCount").inner_text()
    if not total.startswith("102 /"):
        erreurs.append("Compteur initial inattendu: " + total)

    page.fill("#scenarioSearch", "chute")
    page.wait_for_timeout(100)
    if page.locator("#scenarioCount").inner_text().startswith("102 /"):
        erreurs.append("La recherche ne filtre rien")

    page.select_option("#scenarioBlocFilter", "B2")
    page.wait_for_timeout(100)
    page.click("button[onclick='resetScenarioFilters()']")
    page.wait_for_timeout(100)
    if not page.locator("#scenarioCount").inner_text().startswith("102 /"):
        erreurs.append("Reset des filtres KO")

    # --- Scénario + réflexivité ---
    page.evaluate("openScenario('S41')")
    page.wait_for_selector("#scenarioDetail .scenario-play")
    for _ in range(12):
        if page.locator("#scenarioDetail .choice").count() == 0:
            break
        page.locator("#scenarioDetail .choice").first.click()
        page.wait_for_timeout(60)
        if page.locator("button[onclick='nextStep()']").count():
            page.click("button[onclick='nextStep()']")
            page.wait_for_timeout(60)
    if not page.locator("#reflexText").count():
        erreurs.append("Bilan sans champ de réflexivité")
    else:
        page.fill("#reflexText", REFLEX)
        page.evaluate("finishScenario()")
        page.wait_for_timeout(200)
        if REFLEX not in page.locator("#dashboardContainer").inner_text():
            erreurs.append("Réflexion absente du tableau de bord")

    # --- Espace enseignant : carnet réflexif + migration PBKDF2 ---
    page.evaluate("showView('enseignant')")
    if not connecter(page, "#teacherUser", "#teacherPwd", "amelio.prof",
                     "document.getElementById('teacherLoginBtn').click()",
                     "() => { var p=document.getElementById('teacherPanel'); return !!(p && !p.hidden); }"):
        erreurs.append("Connexion enseignant impossible: " + page.locator("#teacherError").inner_text()
                       + " | comptes=" + str(page.evaluate("localStorage.getItem('simassp_teachers')"))[:200])
    hash_prof = page.evaluate(
        "JSON.parse(localStorage.getItem('simassp_teachers'))[0].passwordHash"
    )
    if not str(hash_prof).startswith("pbkdf2$"):
        erreurs.append("Le hash enseignant n'a pas été migré en PBKDF2")

    page.evaluate("renderTeacherTab('bilans')")
    page.wait_for_timeout(200)
    bilan = page.locator("#teacherTabContent").inner_text()
    if "Carnet de bord réflexif" not in bilan:
        erreurs.append("Section carnet absente")
    elif REFLEX not in bilan:
        erreurs.append("Réflexion absente du carnet enseignant")

    # Régression : le logo ne doit plus ramener à l'accueil côté enseignant.
    page.click(".brand")
    page.wait_for_timeout(150)
    vue = page.evaluate("(document.querySelector('.view.view--active')||{}).id")
    if vue != "view-enseignant":
        erreurs.append("Bug navigation enseignant présent (vue=" + str(vue) + ")")

    # --- PWA : manifeste, icônes et service worker ---
    page.wait_for_function("!!navigator.serviceWorker", timeout=10000)
    page.evaluate("navigator.serviceWorker.ready.then(function(){return true;})")
    page.wait_for_timeout(300)
    manifest = page.locator('link[rel="manifest"]').get_attribute("href")
    if manifest != "manifest.webmanifest":
        erreurs.append("Manifeste PWA absent ou incorrect")
    for ico in ("icon-192.png", "icon-512.png", "icon-maskable-512.png"):
        rep = page.request.get(BASE + "/icons/" + ico)
        if rep.status != 200 or not rep.body():
            erreurs.append("Icône PWA manquante: " + ico)
    if not page.evaluate(
        "navigator.serviceWorker.getRegistrations().then(r=>r.some(x=>x.active||x.installing||x.waiting))"
    ):
        erreurs.append("Service worker non enregistré")

    # Vérification hors-ligne réelle (app shell déjà en cache).
    page.reload(wait_until="domcontentloaded")
    page.wait_for_timeout(500)
    ctx.set_offline(True)
    try:
        page.reload(wait_until="domcontentloaded")
        page.wait_for_timeout(500)
        if not page.evaluate("!!window.SIM_DATA && window.SIM_DATA.SCENARIOS.length === 102"):
            erreurs.append("Mode hors-ligne PWA : scénarios non disponibles")
    except Exception as e:
        erreurs.append("Mode hors-ligne PWA : " + str(e).splitlines()[0])
    finally:
        ctx.set_offline(False)

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
