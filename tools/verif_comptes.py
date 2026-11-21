# -*- coding: utf-8 -*-
"""Vérifie la suppression multiple des comptes élèves et le bouton 👁 mot de passe.

Supabase est BLOQUE (test 100 % local, aucune écriture en production).
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
PORT = 8797
PWD = "TestComptes2026"
LEGACY = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")


def acc(i, login, nom):
    return {
        "id": "u_test_" + str(i), "login": login, "passwordHash": LEGACY,
        "prenom": nom, "nom": "Eleve", "niveau": "2", "classe": "2de TEST",
        "created": "21/11/2026", "mustChangePassword": False,
    }


ELEVES = [acc(1, "compte.un", "Un"), acc(2, "compte.deux", "Deux"), acc(3, "compte.trois", "Trois")]
PROF = {
    "id": "t_test", "login": "prof.comptes", "passwordHash": LEGACY,
    "prenom": "Prof", "nom": "Comptes", "role": "enseignant",
    "created": "21/11/2026", "mustChangePassword": False,
}
INIT = (
    "localStorage.setItem('simassp_accounts', JSON.stringify(%s));"
    "localStorage.setItem('simassp_teachers', JSON.stringify(%s));"
) % (json.dumps(ELEVES), json.dumps([PROF]))


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


httpd = socketserver.TCPServer(("127.0.0.1", PORT), functools.partial(Quiet, directory=ROOT))
threading.Thread(target=httpd.serve_forever, daemon=True).start()
erreurs = []


def verifier(condition, message):
    if not condition:
        erreurs.append(message)


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

    # --- 0. Pied de page DWYN present sur toutes les vues ---
    pied = page.locator("footer.pied-app")
    verifier(pied.count() == 1, "Pied de page DWYN absent")
    verifier("Application développée par" in pied.inner_text() and "DWYN Solutions" in pied.inner_text(),
             "Texte du pied de page incorrect")
    verifier(pied.locator("img").get_attribute("src") == "icons/dwyn.png", "Logo DWYN absent du pied")
    page.evaluate("showView('enseignant')")
    verifier(pied.is_visible(), "Pied de page invisible dans la vue enseignant")
    page.evaluate("showView('login')")

    # --- 1. Bouton afficher/masquer sur la page de connexion ---
    # Vue élève (active au depart)
    btn = page.locator(".pwd-field:has(> #loginPwd) .pwd-toggle-btn")
    verifier(btn.count() == 1, "Bouton 👁 absent pour #loginPwd")
    verifier(page.locator("#loginPwd").get_attribute("type") == "password", "Type initial incorrect #loginPwd")
    btn.click()
    verifier(page.locator("#loginPwd").get_attribute("type") == "text", "👁 n'affiche pas le mot de passe élève")
    btn.click()
    verifier(page.locator("#loginPwd").get_attribute("type") == "password", "🙈 ne masque pas le mot de passe élève")

    # Vue enseignant (masquée au départ)
    page.evaluate("showView('enseignant')")
    btn2 = page.locator(".pwd-field:has(> #teacherPwd) .pwd-toggle-btn")
    verifier(btn2.count() == 1, "Bouton 👁 absent pour #teacherPwd")
    btn2.click()
    verifier(page.locator("#teacherPwd").get_attribute("type") == "text", "👁 n'affiche pas le mot de passe prof")
    btn2.click()
    verifier(page.locator("#teacherPwd").get_attribute("type") == "password", "🙈 ne masque pas le mot de passe prof")

    # --- 2. Bouton 👁 dans les modales (champ créé dynamiquement) ---
    page.evaluate("window.openModal('<input type=\"password\" id=\"pwdModal\" class=\"input\" />')")
    verifier(page.locator(".pwd-field:has(> #pwdModal) .pwd-toggle-btn").count() == 1,
             "Bouton 👁 absent dans la modale")
    page.evaluate("closeModal()")

    # --- 3. Connexion enseignant puis onglet comptes ---
    page.evaluate("showView('enseignant')")
    page.fill("#teacherUser", "prof.comptes")
    page.fill("#teacherPwd", PWD)
    page.evaluate("document.getElementById('teacherLoginBtn').click()")
    page.wait_for_function("!document.getElementById('teacherPanel').hidden", timeout=30000)
    page.evaluate("renderTeacherTab('comptes')")

    boxes = page.locator(".sel-eleve")
    verifier(boxes.count() == 3, "3 cases à cocher attendues, trouvé %d" % boxes.count())
    verifier(page.locator("#selAllEleves").count() == 1, "Case « Tout sélectionner » absente")
    btn_del = page.locator("#btnDeleteSelected")
    verifier(btn_del.is_disabled(), "Bouton supprimer devrait être désactivé au départ")

    # --- 4. Fiche d'identifiants imprimable ---
    verifier(page.locator("#printClasse").count() == 1, "Liste déroulante des classes absente")
    verifier(page.locator("button:has-text('Imprimer les identifiants')").count() == 1,
             "Bouton « Imprimer les identifiants » absent")
    options = page.locator("#printClasse option").all_inner_texts()
    verifier("Toutes les classes" in options and "2de TEST" in options,
             "Options de classe incorrectes: %s" % options)

    # Toutes les classes : les 3 comptes et le mot de passe (hash legacy décodé)
    with ctx.expect_page() as popup_info:
        page.evaluate("window.printIdentifiants()")
    popup = popup_info.value
    popup.wait_for_load_state("domcontentloaded")
    contenu = popup.content()
    for attendu in ("compte.un", "compte.deux", "compte.trois", PWD, "Identifiants élèves"):
        verifier(attendu in contenu, "Fiche PDF: « %s » absent" % attendu)
    verifier("Enregistrer en PDF" in contenu, "Bouton d'impression PDF absent de la fiche")
    popup.close()

    # Filtre par classe : créer un 4e compte dans une autre classe via l'UI
    page.fill("#newPrenom", "Quatre")
    page.fill("#newNom", "Eleve")
    page.select_option("#newNiveau", "2")
    page.fill("#newClasse", "3e AUTRE")
    page.evaluate("window.createAccount()")
    page.wait_for_timeout(800)
    page.evaluate("renderTeacherTab('comptes')")
    id_quatre = page.evaluate("""() => {
        var l = JSON.parse(localStorage.getItem('simassp_accounts')||'[]')
                  .filter(x => x.classe === '3e AUTRE');
        return l.length ? l[0].id : null;
    }""")
    verifier(id_quatre is not None, "Création du compte 3e AUTRE KO")
    page.select_option("#printClasse", "3e AUTRE")
    with ctx.expect_page() as popup_info2:
        page.evaluate("window.printIdentifiants()")
    popup2 = popup_info2.value
    popup2.wait_for_load_state("domcontentloaded")
    contenu2 = popup2.content()
    nb_lignes = contenu2.count("<tr>") - 1  # -1 = ligne d'en-tête
    verifier(nb_lignes == 1 and "compte.un" not in contenu2,
             "Filtre par classe KO (%d lignes)" % nb_lignes)
    verifier("3e AUTRE" in contenu2, "Nom de classe absent de la fiche")
    popup2.close()
    # Retirer le compte supplémentaire avant le test de suppression
    if id_quatre:
        page.evaluate("window.deleteAccount('%s')" % id_quatre)
    page.wait_for_timeout(500)
    page.evaluate("renderTeacherTab('comptes')")

    # Tout sélectionner
    page.locator("#selAllEleves").check()
    verifier(page.locator(".sel-eleve:checked").count() == 3, "Sélection totale KO")
    verifier(not btn_del.is_disabled(), "Bouton supprimer devrait être actif")
    verifier(page.locator("#nbElevesSelected").inner_text() == "3", "Compteur de sélection KO")

    # Désélectionner un compte -> 2 restants
    boxes.nth(1).uncheck()
    verifier(page.locator(".sel-eleve:checked").count() == 2, "Désélection KO")
    verifier(page.locator("#nbElevesSelected").inner_text() == "2", "Compteur après désélection KO")

    # Supprimer la sélection
    btn_del.click()
    page.wait_for_timeout(1200)
    restants = page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts') || '[]')")
    verifier(len(restants) == 1, "Suppression multiple : 1 compte attendu, trouvé %d" % len(restants))
    verifier(restants[0]["id"] == "u_test_2", "Le mauvais compte a été supprimé")
    verifier(page.locator("#nbElevesSelected").inner_text() == "0" if page.locator("#nbElevesSelected").count() else True,
             "Compteur non réinitialisé après suppression")

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
