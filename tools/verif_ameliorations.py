# -*- coding: utf-8 -*-
"""Test navigateur des améliorations SimASSP 19/11 (filtres + carnet réflexif + nav enseignant)."""
import base64
import functools
import http.server
import json
import socketserver
import threading

from playwright.sync_api import sync_playwright

ROOT = r"C:\Users\YAN\Desktop\SimASSP"
PORT = 8768
PWD = "TestAmelio2026"
HASH = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
ELEVE = {
    "id": "u_amelio_test", "login": "amelio.eleve", "passwordHash": HASH,
    "prenom": "Amelio", "nom": "Eleve", "niveau": "1",
    "classe": "Premiere ASSP", "created": "19/11/2026", "mustChangePassword": False,
}
PROF = {
    "id": "t_amelio_test", "login": "amelio.prof", "passwordHash": HASH,
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

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(INIT)
    page = ctx.new_page()
    bruit = ("Failed to load resource", "net::", "cdn.jsdelivr", "supabase", "ERR_")
    page.on("console", lambda m: erreurs.append("console: " + m.text)
            if m.type == "error" and not any(b in m.text for b in bruit) else None)
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="domcontentloaded")
    page.wait_for_function(
        "document.getElementById('view-login') && "
        "document.getElementById('view-login').classList.contains('view--active')",
        timeout=60000,
    )

    # Connexion élève.
    for _ in range(10):
        page.fill("#loginUser", "amelio.eleve")
        page.fill("#loginPwd", PWD)
        page.evaluate("doLogin()")
        if page.evaluate("!!window.AUTH_CURRENT") or page.evaluate(
            "document.getElementById('view-accueil').classList.contains('view--active')"
        ):
            break
        page.wait_for_timeout(200)

    # Filtres des scénarios (insensibles aux accents).
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

    # Scénario + réflexivité.
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

    # Espace enseignant : carnet réflexif.
    page.evaluate("showView('enseignant')")
    page.fill("#teacherUser", "amelio.prof")
    page.fill("#teacherPwd", PWD)
    page.click("#teacherLoginBtn")
    page.wait_for_timeout(300)
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

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
if erreurs:
    for e in erreurs:
        print(" -", e)
raise SystemExit(1 if erreurs else 0)
