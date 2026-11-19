# -*- coding: utf-8 -*-
"""Vérifie la chaîne PBKDF2 : migration legacy, création, reset, changement de mot de passe."""
import base64
import functools
import http.server
import json
import re
import socketserver
import threading

from playwright.sync_api import sync_playwright

ROOT = r"C:\Users\YAN\Desktop\SimASSP"
PORT = 8772
PWD = "TestAmelio2026"
LEGACY = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
ELEVE = {
    "id": "u_auth", "login": "auth.eleve", "passwordHash": LEGACY,
    "prenom": "Auth", "nom": "Eleve", "niveau": "1", "classe": "1",
    "created": "x", "mustChangePassword": False,
}
PROF = {
    "id": "t_auth", "login": "auth.prof", "passwordHash": LEGACY,
    "prenom": "Auth", "nom": "Prof", "role": "enseignant",
    "created": "x", "mustChangePassword": False,
}
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


def attendre(pg, expression, tours=20):
    for _ in range(tours):
        if pg.evaluate(expression):
            return True
        pg.wait_for_timeout(500)
    return False


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(INIT)
    ctx.route(re.compile(r".*supabase\.co.*"), lambda route: route.abort())
    page = ctx.new_page()
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.on("dialog", lambda d: d.accept())
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="domcontentloaded")
    page.wait_for_function(
        "document.getElementById('view-login').classList.contains('view--active')", timeout=60000)

    # Connexion enseignant (hash legacy => doit être migré).
    page.evaluate("showView('enseignant')")
    page.fill("#teacherUser", "auth.prof")
    page.fill("#teacherPwd", PWD)
    page.evaluate("document.getElementById('teacherLoginBtn').click()")
    if not attendre(page, "!document.getElementById('teacherPanel').hidden"):
        erreurs.append("Connexion enseignant impossible")
    hash_prof = page.evaluate("JSON.parse(localStorage.getItem('simassp_teachers'))[0].passwordHash")
    if not str(hash_prof).startswith("pbkdf2$"):
        erreurs.append("Migration PBKDF2 enseignant absente")

    # Création d'un compte élève.
    page.evaluate("renderTeacherTab('comptes')")
    page.fill("#newPrenom", "Nouveau")
    page.fill("#newNom", "Eleve")
    page.select_option("#newNiveau", "2")
    page.fill("#newClasse", "2nde ASSP")
    page.evaluate("window.createAccount()")
    page.wait_for_timeout(900)
    comptes = page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts'))")
    nouv = [a for a in comptes if a["login"] != "auth.eleve"][0] if len(comptes) == 2 else None
    if not nouv or not str(nouv["passwordHash"]).startswith("pbkdf2$"):
        erreurs.append("Création de compte : hash PBKDF2 absent")
    else:
        # Reset du mot de passe.
        old = nouv["passwordHash"]
        page.evaluate("window.resetPwd('%s')" % nouv["id"])
        page.wait_for_timeout(900)
        comptes = page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts'))")
        nouv2 = [a for a in comptes if a["id"] == nouv["id"]][0]
        if nouv2["passwordHash"] == old or not str(nouv2["passwordHash"]).startswith("pbkdf2$"):
            erreurs.append("Reset mot de passe : hash PBKDF2 invalide")

    # Changement de mot de passe côté élève (le prof doit être déconnecté).
    page.evaluate("window.teacherLogout()")
    page.fill("#loginUser", "auth.eleve")
    page.fill("#loginPwd", PWD)
    page.evaluate("doLogin()")
    if not attendre(page, "document.getElementById('view-accueil').classList.contains('view--active')"):
        erreurs.append("Connexion élève impossible")
    hash_eleve = page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts'))[0].passwordHash")
    if not str(hash_eleve).startswith("pbkdf2$"):
        erreurs.append("Migration PBKDF2 élève absente")

    page.evaluate("showChangePasswordModal(false)")
    page.fill("#cp_new", "NouveauPwd2026")
    page.fill("#cp_confirm", "NouveauPwd2026")
    page.evaluate("window.changePasswordNow(false)")
    page.wait_for_timeout(900)
    compte = [x for x in page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts'))")
              if x["login"] == "auth.eleve"][0]
    if not str(compte["passwordHash"]).startswith("pbkdf2$") or compte["mustChangePassword"] is not False:
        erreurs.append("Changement de mot de passe : hash ou drapeau invalide")

    # Reconnexion avec le nouveau mot de passe.
    page.evaluate("window.logout()")
    page.fill("#loginUser", "auth.eleve")
    page.fill("#loginPwd", "NouveauPwd2026")
    page.evaluate("doLogin()")
    if not attendre(page, "document.getElementById('view-accueil').classList.contains('view--active')"):
        erreurs.append("Reconnexion avec le nouveau mot de passe impossible")

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
