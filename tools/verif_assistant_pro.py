# -*- coding: utf-8 -*-
"""Vérifie l'Assistant Soins enrichi : onglet enseignant, anatomie, schémas.

- Vocabulaire étendu (253 notions) chargé depuis 3 fichiers de lexique.
- Schémas anatomiques SVG intégrés (hors-ligne, aucun réseau).
- Réponses dans le chat PROF sans quitter l'espace enseignant.
- Les suggestions (chips) restent dans le bon chat.

Supabase est BLOQUÉ : aucune écriture en production.
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
PORT = 8795
PWD = "TestProfBot2026"
LEGACY = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
PROF = {
    "id": "t_assistant", "login": "prof.assistant", "passwordHash": LEGACY,
    "prenom": "Prof", "nom": "Assistant", "role": "enseignant",
    "created": "21/11/2026", "mustChangePassword": False,
}
INIT = "localStorage.setItem('simassp_teachers', JSON.stringify(%s));" % json.dumps([PROF])


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


httpd = socketserver.TCPServer(("127.0.0.1", PORT), functools.partial(Quiet, directory=ROOT))
threading.Thread(target=httpd.serve_forever, daemon=True).start()
erreurs = []


def verifier(cond, msg):
    if not cond:
        erreurs.append(msg)


def attendre_reponse(page, avant):
    page.wait_for_function(
        "document.querySelectorAll('#soinsMessagesProf .soins-msg').length > %d" % avant,
        timeout=10000)
    page.wait_for_timeout(350)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(INIT)
    ctx.route(re.compile(r".*supabase\.co.*"), lambda route: route.abort())
    page = ctx.new_page()
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="domcontentloaded")
    page.wait_for_function(
        "document.getElementById('view-login').classList.contains('view--active')", timeout=60000)

    # --- Connexion enseignant ---
    page.evaluate("showView('enseignant')")
    page.fill("#teacherUser", "prof.assistant")
    page.fill("#teacherPwd", PWD)
    page.evaluate("document.getElementById('teacherLoginBtn').click()")
    page.wait_for_function("!document.getElementById('teacherPanel').hidden", timeout=30000)

    # --- Onglet Assistant Soins ---
    page.click('.tab[data-tab="assistant"]')
    verifier(page.locator("#teacherSoinsPanel").is_visible(), "Panneau Assistant Soins invisible")
    verifier(page.locator("#teacherTabContent").is_hidden(), "Ancien onglet toujours visible")
    verifier(page.locator("#view-enseignant.view--active").count() == 1,
             "L'enseignant a quitté son espace")
    verifier(page.locator("#soinsProfCount").inner_text() == "253", "Compteur prof incorrect")
    n_prof = page.locator("#soinsMessagesProf .soins-msg").count()
    n_eleve = page.locator("#soinsMessages .soins-msg").count()

    # --- Question d'anatomie avec définition étendue ET schéma ---
    page.fill("#soinsInputProf", "c'est quoi le rein ?")
    page.evaluate("sendSoins('prof')")
    attendre_reponse(page, n_prof)
    txt = page.locator("#soinsMessagesProf").inner_text()
    verifier("Rein" in txt, "Définition du rein absente")
    verifier("Pour aller plus loin" in txt, "Définition étendue absente")
    verifier(page.locator("#soinsMessagesProf .soins-illu-btn").count() >= 1,
             "Bouton de schéma absent")

    # --- Schéma anatomique en lightbox ---
    page.locator("#soinsMessagesProf .soins-illu-btn").last.click()
    verifier(page.locator("#soinsLightbox").is_visible(), "Lightbox invisible")
    verifier(page.locator("#soinsIlluBody svg").count() == 1, "SVG du schéma absent")
    verifier("urinaire" in page.locator("#soinsIlluTitle").inner_text().lower(),
             "Mauvais titre de schéma")
    page.keyboard.press("Escape")
    verifier(page.locator("#soinsLightbox").is_hidden(), "Échap ne ferme pas la lightbox")

    # --- Galerie des 12 schémas ---
    page.click('#teacherSoinsPanel button:has-text("Galerie des schémas")')
    verifier(page.locator(".soins-gallery__item").count() == 12, "Galerie incomplète")
    page.locator(".soins-gallery__item").first.click()
    verifier(page.locator("#soinsIlluBody svg").count() == 1, "Vignette non cliquable")
    page.locator("#soinsIlluClose").click()

    # --- Vocabulaire anatomique fin (extension du lexique) ---
    avant_n = page.locator("#soinsMessagesProf .soins-msg").count()
    page.fill("#soinsInputProf", "c'est quoi un néphron ?")
    page.evaluate("sendSoins('prof')")
    attendre_reponse(page, avant_n)
    verifier("Néphron" in page.locator("#soinsMessagesProf").inner_text(), "Néphron absent")

    # --- Les chips restent dans le chat PROF ---
    chips = page.locator("#soinsMessagesProf .soins-related .soins-chip")
    verifier(chips.count() >= 1, "Aucune suggestion 'Voir aussi'")
    avant = page.locator("#soinsMessagesProf .soins-msg").count()
    chips.last.click()
    attendre_reponse(page, avant)
    verifier(page.locator("#soinsMessages .soins-msg").count() == n_eleve,
             "Une suggestion a répondu dans le chat ÉLÈVE")
    verifier(page.locator("#view-enseignant.view--active").count() == 1,
             "Une suggestion a quitté l'espace enseignant")

    # --- Lexique complet fusionné (145 + anatomie + infirmier) ---
    page.click('#teacherSoinsPanel button:has-text("Lexique complet")')
    verifier(page.locator("#soinsLexiqueProf").is_visible(), "Lexique prof invisible")
    lex = page.locator("#soinsLexiqueProf").inner_text()
    for mot in ("Bientraitance", "Néphron", "Alvéole pulmonaire", "SBAR", "Appareil digestif"):
        verifier(mot in lex, "Mot absent du lexique fusionné: " + mot)
    verifier(page.locator("#soinsLexiqueProf .soins-illu-mark").count() >= 10,
             "Badges de schéma absents du lexique")

    # --- Révision ciblée par bloc ---
    page.evaluate("soinsBlocRevision('B2')")
    verifier("Escarre" in page.locator("#soinsMessagesProf").inner_text(),
             "Révision du bloc B2 incomplète")

    # --- Le chat élève reste intact ---
    verifier(page.locator("#soinsMessages .soins-msg").count() == n_eleve,
             "Le chat élève a été modifié")
    verifier(page.locator("#view-enseignant.view--active").count() == 1,
             "Vue finale incorrecte")

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
