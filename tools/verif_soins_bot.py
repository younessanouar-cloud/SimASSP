# -*- coding: utf-8 -*-
"""Vérifie l'Assistant Soins : réponses, tolérance aux accents/fautes, lexique.

Supabase BLOQUE : aucun écriture en production.
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
PORT = 8799
PWD = "TestBot2026"
LEGACY = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
ELEVE = {
    "id": "u_bot", "login": "bot.eleve", "passwordHash": LEGACY,
    "prenom": "Bot", "nom": "Eleve", "niveau": "2", "classe": "2de TEST",
    "created": "21/11/2026", "mustChangePassword": False,
}
INIT = "localStorage.setItem('simassp_accounts', JSON.stringify([%s]));" % json.dumps(ELEVE)


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
    page.wait_for_function("document.querySelectorAll('#soinsMessages .soins-msg').length > %d" % avant,
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

    # Connexion élève
    page.fill("#loginUser", "bot.eleve")
    page.fill("#loginPwd", PWD)
    page.evaluate("doLogin()")
    page.wait_for_function(
        "document.getElementById('view-accueil').classList.contains('view--active')", timeout=30000)

    # Ouverture via la navigation
    page.click('button.nav__btn[data-nav="soins"]')
    verifier(page.locator("#view-soins.view--active").count() == 1, "Vue Assistant Soins non active")
    verifier(page.locator("#view-soins iframe").count() == 0, "Un iframe Mathéo subsiste encore")
    verifier("Assistant Soins" in page.locator("#view-soins h1").inner_text(), "Titre incorrect")
    verifier(page.locator("#soinsCount").inner_text() == "145", "Compteur de notions incorrect")
    n = page.locator("#soinsMessages .soins-msg").count()

    # 1. Définition simple
    page.fill("#soinsInput", "c'est quoi la bientraitance ?")
    page.evaluate("sendSoins()")
    attendre_reponse(page, n)
    txt = page.locator("#soinsMessages").inner_text()
    verifier("Bientraitance" in txt and "Définition" in txt, "Réponse définition KO")
    verifier("À retenir" in txt, "Encadré À retenir absent")
    n = page.locator("#soinsMessages .soins-msg").count()

    # 2. Tolérance fautes / accents + conduite à tenir
    page.fill("#soinsInput", "que faire en cas d'hypoglycemie")
    page.evaluate("sendSoins()")
    attendre_reponse(page, n)
    txt = page.locator("#soinsMessages").inner_text()
    verifier("Hypoglycémie" in txt, "Tolérance accents/fautes KO")
    n = page.locator("#soinsMessages .soins-msg").count()

    # 3. Comparaison
    page.fill("#soinsInput", "différence entre asepsie et antisepsie")
    page.evaluate("sendSoins()")
    attendre_reponse(page, n)
    txt = page.locator("#soinsMessages").inner_text()
    verifier("Différence" in txt and "Asepsie" in txt and "Antisepsie" in txt, "Comparaison KO")
    n = page.locator("#soinsMessages .soins-msg").count()

    # 4. Question rapide (chip)
    page.locator('.soins-chip:has-text("Escarre")').click()
    attendre_reponse(page, n)
    txt = page.locator("#soinsMessages").inner_text()
    verifier("Escarre" in txt, "Question rapide KO")
    n = page.locator("#soinsMessages .soins-msg").count()

    # 5. Lexique complet
    page.click('button:has-text("Lexique")')
    verifier(page.locator("#soinsLexique").is_visible(), "Panneau lexique invisible")
    lex = page.locator("#soinsLexique").inner_text()
    verifier("Bientraitance" in lex and "EHPAD" in lex and "Éducation à la santé" in lex,
             "Lexique incomplet")
    page.click('button:has-text("Lexique")')

    # 6. Effacement
    page.click('button[title="Effacer la conversation"]')
    txt = page.locator("#soinsMessages").inner_text()
    verifier("Conversation effacée" in txt, "Effacement KO")
    verifier("Bientraitance" not in txt, "Conversation non vidée")

    browser.close()

httpd.shutdown()
print("Erreurs:", erreurs)
for e in erreurs:
    print(" -", e)
raise SystemExit(1 if erreurs else 0)
