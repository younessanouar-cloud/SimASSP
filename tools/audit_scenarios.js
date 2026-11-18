/* ============================================================
   SimASSP — Contrôle qualité des scénarios
   ------------------------------------------------------------
   Usage : node tools/audit_scenarios.js [--pilote|S41-S50] [--all]
   Sans argument : contrôle le lot pilote S41–S50 et affiche
   les statistiques globales (sans échouer sur le reste du corpus).

   Charte (lot pilote et vagues suivantes) :
   1. au moins 3 propositions par étape ;
   2. exactement une bonne réponse par étape ;
   3. longueurs équilibrées (écart <= 15 caractères) ;
   4. aucun distracteur « grotesque » ;
   5. chaque mauvaise réponse explique pourquoi elle est séduisante ;
   6. au moins deux variantes renseignées ;
   7. texte accentué et sans coquille CJK ;
   8. bilan qui explicite l'arbitrage.
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const JS = path.join(__dirname, "..", "js");
const ctx = { window: {}, console };
vm.createContext(ctx);
for (const f of ["data.js", "scenarios_extra.js"]) {
  vm.runInContext(fs.readFileSync(path.join(JS, f), "utf8"), ctx, { filename: f });
}
const D = ctx.window.SIM_DATA;
const scenarios = D.SCENARIOS.concat(ctx.window.SIM_SCENARIOS_EXTRA || []);

const ACCENTS = /[àâçéèêëîïôùûüÿœÀÂÇÉÈÊËÎÏÔÙÛÜŸŒ]/;
const GROTESQUE = /(sans (rien )?demander|continuer sans|ne pas (soigner|transmettre|alerter|prévenir)|ne rien faire|partir sans rien|ignorer l')/i;
const CJK = /[\u2E80-\u9FFF]/;

function controle(s) {
  const erreurs = [];
  if (!ACCENTS.test(JSON.stringify(s))) erreurs.push("scénario sans aucun accent");
  if (!s.variantes || s.variantes.length < 2) erreurs.push("moins de 2 variantes");
  if ((s.variantes || []).some(v => !v.titre || !v.description)) erreurs.push("variante incomplète");
  if (!/arbitr/i.test(s.bilan || "")) erreurs.push("bilan sans arbitrage explicite");
  if (!s.steps || s.steps.length < 3) erreurs.push("moins de 3 étapes");
  (s.steps || []).forEach((st, i) => {
    const prefix = `étape ${i + 1}`;
    if (!st.choices || st.choices.length < 3) erreurs.push(`${prefix}: moins de 3 propositions`);
    const bons = (st.choices || []).filter(c => c.correct);
    if (bons.length !== 1) erreurs.push(`${prefix}: ${bons.length} bonnes réponses (attendu 1)`);
    for (const c of st.choices || []) {
      const txt = c.text || "";
      if (CJK.test(txt)) erreurs.push(`${prefix}: caractères CJK`);
      if (GROTESQUE.test(txt)) erreurs.push(`${prefix}: distracteur grotesque`);
      if (c.correct && !/^Juste\b/i.test(c.feedback || "")) erreurs.push(`${prefix}: feedback juste non balisé`);
      if (!c.correct && !/Séduisant/i.test(c.feedback || "")) erreurs.push(`${prefix}: attractivité du distracteur non expliquée`);
    }
    if (bons.length === 1) {
      const lBonus = Math.max(...bons.map(c => (c.text || "").length));
      const lMauvais = Math.max(...(st.choices || []).filter(c => !c.correct).map(c => (c.text || "").length));
      if (Math.abs(lBonus - lMauvais) > 15) erreurs.push(`${prefix}: écart de longueur ${Math.abs(lBonus - lMauvais)} car.`);
    }
  });
  return erreurs;
}

function statsGlobales() {
  const etapes = scenarios.flatMap(s => s.steps || []);
  const nb = etapes.filter(st => st.choices.length === 2).length;
  const sansAccent = scenarios.filter(s => !ACCENTS.test(JSON.stringify(s))).length;
  const sansVariante = scenarios.filter(s => !s.variantes || !s.variantes.length).length;
  console.log(`Scénarios : ${scenarios.length} | compétences : ${D.COMPETENCES.length} | blocs : ${D.BLOCS.length}`);
  console.log(`Étapes : ${etapes.length} | dont 2 choix seulement : ${nb} (${Math.round(nb * 100 / etapes.length)} %)`);
  console.log(`Scénarios sans accent : ${sansAccent} | sans variante : ${sansVariante}`);
}

const args = process.argv.slice(2);
statsGlobales();
let cibles;
if (args.includes("--all")) {
  cibles = scenarios;
} else {
  const m = args.find(a => /^S\d+-S\d+$/.test(a));
  const [a, b] = (m || "S41-S50").split("-").map(x => +x.slice(1));
  cibles = scenarios.filter(s => +s.id.slice(1) >= a && +s.id.slice(1) <= b);
}
console.log(`\nContrôle de ${cibles.length} scénarios (${cibles.map(s => s.id).join(", ")})`);
let echecs = 0;
for (const s of cibles) {
  const erreurs = controle(s);
  if (erreurs.length) {
    echecs++;
    console.log(`\n✗ ${s.id} — ${s.titre}`);
    erreurs.forEach(e => console.log(`   • ${e}`));
  } else {
    console.log(`✓ ${s.id}`);
  }
}
console.log(`\nRésultat : ${cibles.length - echecs}/${cibles.length} conformes`);
process.exit(echecs ? 1 : 0);
