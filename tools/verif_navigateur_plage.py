# -*- coding: utf-8 -*-
"""Validation navigateur d'une plage de scénarios SimASSP.

Usage : python tools/verif_navigateur_plage.py [debut] [fin]  (ex: 1 126)
"""
import base64
import functools
import http.server
import json
import re
import socketserver
import sys
import threading

from playwright.sync_api import sync_playwright

DEBUT = int(sys.argv[1]) if len(sys.argv) > 1 else 1
FIN = int(sys.argv[2]) if len(sys.argv) > 2 else 126

ROOT = r"C:\Users\YAN\Desktop\SimASSP"
PORT = 8769
PWD = "TestPilote2026"
HASH = base64.b64encode(("simassp::" + PWD).encode("utf-8")).decode("ascii")
ACCOUNT = {
    "id": "u_pilote_test", "login": "pilote.tle", "passwordHash": HASH,
    "prenom": "Pilote", "nom": "Test", "niveau": "T",
    "classe": "Terminale ASSP", "created": "19/11/2026", "mustChangePassword": False,
}
# Un TABLEAU est obligatoire (AUTH.loadAccounts appelle .forEach sur le cache).
INIT = "localStorage.setItem('simassp_accounts', JSON.stringify([%s]));" % json.dumps(ACCOUNT, ensure_ascii=False)


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


handler = functools.partial(Quiet, directory=ROOT)
httpd = socketserver.TCPServer(("127.0.0.1", PORT), handler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

erreurs = []
ok = 0

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    ctx.add_init_script(INIT)
    # Ne jamais écrire dans le projet Supabase de production pendant les tests.
    ctx.route(re.compile(r".*supabase\.co.*"), lambda route: route.abort())
    page = ctx.new_page()
    bruit = ("failed to load resource", "net::", "cdn.jsdelivr", "supabase", "err_")

    def on_console(m):
        if m.type == "error" and not any(b in m.text.lower() for b in bruit):
            erreurs.append("console: " + m.text)

    page.on("console", on_console)
    page.on("pageerror", lambda e: erreurs.append("pageerror: " + str(e)))
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="domcontentloaded")
    page.wait_for_function("window.SIM_DATA && window.SIM_SCENARIOS_EXTRA && window.SIM_DATA.SCENARIOS.length >= 102")
    nb = page.evaluate("window.SIM_DATA.SCENARIOS.length")
    print(f"Scénarios chargés: {nb} (attendu 102)")

    # init() est asynchrone : attendre la vue login avant de tenter doLogin().
    page.wait_for_function(
        "document.getElementById('view-login') && "
        "document.getElementById('view-login').classList.contains('view--active')",
        timeout=60000,
    )

    page.fill("#loginUser", "pilote.tle")
    page.fill("#loginPwd", PWD)
    connecte = False
    for _ in range(20):
        if page.evaluate("document.getElementById('view-accueil').classList.contains('view--active')"):
            connecte = True
            break
        page.evaluate("doLogin()")
        page.wait_for_timeout(500)  # PBKDF2 asynchrone
    if not connecte:
        raise RuntimeError("Connexion impossible: " + (page.locator("#loginError").inner_text() or "erreur inconnue"))
    hash_final = page.evaluate("JSON.parse(localStorage.getItem('simassp_accounts'))[0].passwordHash")
    if not str(hash_final).startswith("pbkdf2$"):
        erreurs.append("Migration PBKDF2 absente après connexion")
    print("Connexion OK (hash PBKDF2 migré)")

    page.evaluate("showView('scenarios')")
    page.wait_for_selector("#scenarioDetail")

    presents = page.evaluate(
        "window.SIM_DATA.SCENARIOS.map(s=>+s.id.slice(1)).filter(n=>n>=" + str(DEBUT) + "&&n<=" + str(FIN) + ")"
    )
    print(f"IDs S{DEBUT}–S{FIN} présents: {len(presents)}")

    for n in presents:
        sid = f"S{n}"
        try:
            page.evaluate(f"openScenario('{sid}')")
            page.wait_for_selector("#scenarioDetail .scenario-play", timeout=5000)
            choix = page.locator("#scenarioDetail .choice").all_inner_texts()
            if len(choix) != 4:
                erreurs.append(f"{sid}: {len(choix)} choix rendus (attendu 4)")
            textes = [c.split(". ", 1)[-1] for c in choix]
            if len(set(textes)) != len(textes):
                erreurs.append(f"{sid}: choix en double")

            for etape in range(6):
                btns = page.locator("#scenarioDetail .choice")
                if btns.count() == 0:
                    break
                btns.nth(0).click()
                fb = page.locator("#scenarioDetail .feedback")
                if fb.count() == 0:
                    erreurs.append(f"{sid} etape {etape+1}: aucun feedback")
                else:
                    txt = fb.last.inner_text()
                    if not re.search(r"Juste|Séduisant", txt):
                        erreurs.append(f"{sid} etape {etape+1}: feedback non balisé")
                # Un CHOIX peut contenir « Suivant » : cibler l'onclick exact.
                nxt = page.locator('#scenarioDetail button[onclick="nextStep()"]')
                if nxt.count() == 0:
                    break
                nxt.first.click()
                page.wait_for_timeout(20)
                # Le titre de S74 contient « Bilan » : seul finishScenario() fait foi.
                if page.locator('#scenarioDetail button[onclick="finishScenario()"]').count() > 0:
                    break

            if page.locator('#scenarioDetail button[onclick="finishScenario()"]').count() == 0:
                erreurs.append(f"{sid}: bilan non atteint")
            else:
                analyse = page.locator("#scenarioDetail").inner_text()
                if not re.search(r"arbitr", analyse, re.I):
                    erreurs.append(f"{sid}: bilan sans arbitrage")

            var_btn = page.locator('#scenarioDetail button[onclick="showVariants()"]')
            if var_btn.count() == 0:
                erreurs.append(f"{sid}: bouton Variantes absent")
            else:
                var_btn.first.click()
                page.wait_for_timeout(20)
                modal_txt = page.locator("#modalContent").inner_text()
                if "Variante" not in modal_txt:
                    erreurs.append(f"{sid}: modal variantes vide")
                page.evaluate("closeModal()")
            ok += 1
        except Exception as e:
            erreurs.append(f"{sid}: exception navigateur -> {str(e)[:120]}")

    browser.close()

httpd.shutdown()
print(f"Scénarios validés: {ok}/{len(presents)}")
print("--- ERREURS ---")
if erreurs:
    for e in erreurs[:60]:
        print("  ✗", e)
    if len(erreurs) > 60:
        print(f"  … et {len(erreurs)-60} autres")
    raise SystemExit(1)
print("  Aucune erreur. Validation navigateur OK.")
