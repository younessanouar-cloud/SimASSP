/* ============================================================
   SimASSP — Schémas anatomiques intégrés (SVG) pour l'Assistant Soins
   100 % local : aucune image distante, fonctionne hors-ligne et en PWA.
   Schémas PÉDAGOGIQUES SIMPLIFIÉS : ils aident à situer et à nommer,
   ils ne sont ni des documents médicaux ni des aides au diagnostic.
   ============================================================ */
(function () {
  "use strict";

  var STYLE = `
    .si-t{font:600 13px Arial,sans-serif;fill:#1e3a5f}
    .si-l{font:12px Arial,sans-serif;fill:#33475b}
    .si-s{font:11px Arial,sans-serif;fill:#5a7184}
    .si-tr{stroke:#1e3a5f;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}
    .si-lead{stroke:#5a7184;stroke-width:1.4;fill:none}
    .si-num{fill:#1e3a5f}
    .si-numtext{font:700 11px Arial,sans-serif;fill:#fff}
  `;

  function frame(body, title) {
    return `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
      <style>${STYLE}</style>
      <rect x="0" y="0" width="460" height="300" rx="12" fill="#fbfcfe" stroke="#dbe4ee"/>
      <text x="18" y="26" class="si-t">${title}</text>
      ${body}
      <text x="18" y="296" class="si-s">Schéma pédagogique simplifié — SimASSP</text>
    </svg>`;
  }

  function num(x, y, n) {
    return `<circle cx="${x}" cy="${y}" r="10" class="si-num"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="si-numtext">${n}</text>`;
  }

  var I = {};

  I.cellule = {
    titre: "La cellule",
    legende: "Une cellule : membrane, cytoplasme, noyau et mitochondries.",
    svg: frame(`
      <ellipse cx="215" cy="155" rx="145" ry="90" fill="#e8f1fa" stroke="#1e3a5f" stroke-width="2.5"/>
      <ellipse cx="215" cy="155" rx="137" ry="82" fill="none" stroke="#7aa7cd" stroke-width="1" stroke-dasharray="4 4"/>
      <ellipse cx="215" cy="155" rx="52" ry="40" fill="#c8e6c9" stroke="#2e7d32" stroke-width="2"/>
      <ellipse cx="215" cy="155" rx="20" ry="15" fill="#a5d6a7" stroke="#2e7d32"/>
      <ellipse cx="118" cy="120" rx="22" ry="11" fill="#ffe0b2" stroke="#ef6c00" stroke-width="1.6" transform="rotate(-25 118 120)"/>
      <ellipse cx="312" cy="195" rx="22" ry="11" fill="#ffe0b2" stroke="#ef6c00" stroke-width="1.6" transform="rotate(20 312 195)"/>
      <ellipse cx="300" cy="110" rx="18" ry="9" fill="#ffe0b2" stroke="#ef6c00" stroke-width="1.6" transform="rotate(-15 300 110)"/>
      ${num(150, 225, 1)}<text x="166" y="229" class="si-l">membrane (échanges)</text>
      ${num(280, 235, 2)}<text x="296" y="239" class="si-l">cytoplasme</text>
      ${num(215, 62, 3)}<path d="M215 72 L215 112" class="si-lead"/><text x="230" y="66" class="si-l">noyau (ADN)</text>
      ${num(345, 148, 4)}<path d="M335 148 L324 160" class="si-lead"/><text x="360" y="152" class="si-l">mitochondrie (énergie)</text>
    `, "La cellule — unité de base du vivant")
  };

  I.respiratoire = {
    titre: "Appareil respiratoire",
    legende: "Nez → trachée → bronches → poumons → alvéoles. Le diaphragme descend à l'inspiration.",
    svg: frame(`
      <path d="M210 48 Q200 62 208 78 L224 78 Q232 62 222 48 Z" fill="#d7e8f7" stroke="#1e3a5f" stroke-width="2"/>
      <rect x="214" y="78" width="14" height="62" rx="6" fill="#e8f1fa" stroke="#1e3a5f" stroke-width="2"/>
      <path d="M221 138 L221 158 M221 158 L180 190 M221 158 L262 190" class="si-tr" stroke-width="6"/>
      <path d="M180 190 Q130 180 118 220 Q108 262 158 262 Q196 262 201 222 Q203 200 180 190 Z" fill="#f6c9c9" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M262 190 Q312 180 324 220 Q334 262 284 262 Q246 262 241 222 Q239 200 262 190 Z" fill="#f6c9c9" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M180 190 L165 235 M180 190 L195 240 M262 190 L247 235 M262 190 L277 240" class="si-lead"/>
      <path d="M120 255 Q220 275 320 255" fill="none" stroke="#2e7d32" stroke-width="7" stroke-linecap="round"/>
      ${num(70, 90, 1)}<path d="M80 90 L200 78" class="si-lead"/><text x="18" y="76" class="si-l">Fosses nasales</text>
      ${num(300, 92, 2)}<path d="M290 92 L230 105" class="si-lead"/><text x="312" y="96" class="si-l">Pharynx / larynx</text>
      ${num(345, 130, 3)}<path d="M335 130 L228 145" class="si-lead"/><text x="357" y="134" class="si-l">Trachée</text>
      ${num(70, 175, 4)}<path d="M80 175 L180 190" class="si-lead"/><text x="18" y="161" class="si-l">Bronches</text>
      ${num(345, 225, 5)}<path d="M335 225 L280 225" class="si-lead"/><text x="357" y="229" class="si-l">Poumons</text>
      ${num(118, 273, 6)}<path d="M128 271 L150 263" class="si-lead"/><text x="18" y="277" class="si-l">Diaphragme</text>
    `, "Appareil respiratoire")
  };

  I.cardiovasculaire = {
    titre: "Appareil cardiovasculaire",
    legende: "4 cavités : oreillettes en haut, ventricules en bas. Artères en rouge, veines en bleu.",
    svg: frame(`
      <path d="M205 80 C170 60 130 88 145 128 C155 155 185 172 205 205 C225 172 255 155 265 128 C280 88 240 60 205 80 Z" fill="#ef9a9a" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M205 82 L205 205 M150 130 L260 130" stroke="#8e4b4b" stroke-width="2" fill="none"/>
      <text x="175" y="112" class="si-s">OD</text><text x="232" y="112" class="si-s">OG</text>
      <text x="175" y="170" class="si-s">VD</text><text x="232" y="170" class="si-s">VG</text>
      <path d="M205 78 L205 45 Q205 35 220 35 L300 35" stroke="#c62828" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M205 78 L170 50 L110 50" stroke="#1565c0" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M150 128 L100 128 L70 128" stroke="#1565c0" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M265 128 L330 128 L370 128" stroke="#c62828" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${num(45, 60, 1)}<text x="18" y="80" class="si-s">veines</text>
      ${num(370, 55, 2)}<text x="386" y="59" class="si-l">aorte</text>
      ${num(60, 148, 3)}<text x="18" y="168" class="si-s">cave</text>
      ${num(390, 148, 4)}<text x="404" y="152" class="si-l">artères</text>
      <text x="205" y="235" text-anchor="middle" class="si-l">Le ventricule gauche éjecte dans l'aorte</text>
      <text x="205" y="255" text-anchor="middle" class="si-s">OD→VD→poumons → OG→VG→organes</text>
    `, "Le cœur et la circulation")
  };

  I.digestif = {
    titre: "Appareil digestif",
    legende: "Bouche → œsophage → estomac → intestin grêle → côlon. Foie et pancréas sécrètent leurs sucs.",
    svg: frame(`
      <ellipse cx="120" cy="72" rx="30" ry="17" fill="#f8c8b0" stroke="#1e3a5f" stroke-width="2"/>
      <path d="M125 88 L133 140" class="si-tr" stroke-width="7"/>
      <path d="M133 140 Q105 148 110 180 Q118 210 155 200 Q178 190 168 160 Q160 142 133 140 Z" fill="#f6d6a8" stroke="#1e3a5f" stroke-width="2"/>
      <path d="M155 200 Q170 220 195 212 Q220 205 220 225 Q220 245 190 240 Q160 235 150 215 Z" fill="#ffe0b2" stroke="#1e3a5f" stroke-width="1.8"/>
      <path d="M195 212 Q240 200 265 215 Q290 230 270 250 Q250 268 220 250 Q200 238 195 212 Z" fill="#ffe0b2" stroke="#1e3a5f" stroke-width="1.8"/>
      <path d="M270 250 Q300 258 305 220 Q310 180 285 175 Q265 172 268 195" fill="none" stroke="#1e3a5f" stroke-width="2.4"/>
      <path d="M268 195 Q262 210 270 225" fill="none" stroke="#1e3a5f" stroke-width="2.4"/>
      <path d="M120 140 Q175 120 215 140 Q230 150 205 158 Q160 158 120 150 Z" fill="#c57a6a" stroke="#1e3a5f" stroke-width="2"/>
      <ellipse cx="205" cy="175" rx="26" ry="12" fill="#f0c27a" stroke="#1e3a5f" stroke-width="1.8" transform="rotate(-15 205 175)"/>
      ${num(55, 68, 1)}<text x="18" y="90" class="si-s">bouche</text>
      ${num(360, 100, 2)}<path d="M350 100 L140 120" class="si-lead"/><text x="372" y="104" class="si-l">œsophage</text>
      ${num(45, 170, 3)}<path d="M55 170 L115 175" class="si-lead"/><text x="18" y="190" class="si-s">estomac</text>
      ${num(345, 220, 4)}<path d="M335 220 L275 225" class="si-lead"/><text x="357" y="224" class="si-l">intestin grêle</text>
      ${num(345, 258, 5)}<path d="M335 258 L300 240" class="si-lead"/><text x="357" y="262" class="si-l">côlon</text>
      ${num(155, 130, 6)}<text x="170" y="135" class="si-l">foie · pancréas</text>
    `, "Appareil digestif")
  };

  I.urinaire = {
    titre: "Appareil urinaire",
    legende: "Rein → uretère → vessie → urètre. Les reins filtrent ~180 L de sang par jour.",
    svg: frame(`
      <path d="M150 75 C120 70 110 100 125 125 C140 150 175 140 178 115 C180 92 170 78 150 75 Z" fill="#b07a5a" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M310 75 C340 70 350 100 335 125 C320 150 285 140 282 115 C280 92 290 78 310 75 Z" fill="#b07a5a" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M155 125 Q165 165 215 185" fill="none" stroke="#d69b3b" stroke-width="4" stroke-linecap="round"/>
      <path d="M305 125 Q295 165 245 185" fill="none" stroke="#d69b3b" stroke-width="4" stroke-linecap="round"/>
      <path d="M215 180 Q230 175 245 180 Q268 190 264 225 Q258 255 230 256 Q202 255 196 225 Q192 190 215 180 Z" fill="#f4d06f" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M230 256 L230 285" class="si-tr" stroke-width="6"/>
      ${num(85, 95, 1)}<path d="M95 95 L130 100" class="si-lead"/><text x="18" y="82" class="si-l">reins</text>
      ${num(370, 95, 2)}<path d="M360 95 L330 105" class="si-lead"/><text x="382" y="99" class="si-l">uretères</text>
      ${num(320, 215, 3)}<path d="M310 215 L262 218" class="si-lead"/><text x="332" y="219" class="si-l">vessie</text>
      ${num(255, 280, 4)}<text x="270" y="284" class="si-l">urètre</text>
    `, "Appareil urinaire")
  };

  I.reproducteur_femme = {
    titre: "Appareil reproducteur féminin",
    legende: "Ovaires → trompes → utérus → vagin. Schéma de face, très simplifié.",
    svg: frame(`
      <ellipse cx="140" cy="120" rx="28" ry="18" fill="#f3b6c6" stroke="#1e3a5f" stroke-width="2" transform="rotate(-20 140 120)"/>
      <ellipse cx="320" cy="120" rx="28" ry="18" fill="#f3b6c6" stroke="#1e3a5f" stroke-width="2" transform="rotate(20 320 120)"/>
      <path d="M150 112 Q185 88 205 125 M310 112 Q275 88 255 125" fill="none" stroke="#d4718f" stroke-width="6" stroke-linecap="round"/>
      <path d="M205 125 Q230 112 255 125 L262 190 Q230 205 198 190 Z" fill="#f6c1cf" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M218 195 L242 195 L246 255 L214 255 Z" fill="#f3d3dc" stroke="#1e3a5f" stroke-width="2"/>
      ${num(80, 100, 1)}<path d="M90 100 L115 110" class="si-lead"/><text x="18" y="86" class="si-l">ovaires</text>
      ${num(365, 100, 2)}<path d="M355 100 L330 110" class="si-lead"/><text x="377" y="104" class="si-l">trompes</text>
      ${num(350, 160, 3)}<path d="M340 160 L260 160" class="si-lead"/><text x="362" y="164" class="si-l">utérus</text>
      ${num(270, 250, 4)}<path d="M260 250 L244 235" class="si-lead"/><text x="282" y="254" class="si-l">vagin</text>
    `, "Appareil reproducteur féminin")
  };

  I.reproducteur_homme = {
    titre: "Appareil reproducteur masculin",
    legende: "Testicules → épididyme → canal déférent → urètre du pénis. Schéma très simplifié.",
    svg: frame(`
      <ellipse cx="205" cy="205" rx="30" ry="38" fill="#c9d9e8" stroke="#1e3a5f" stroke-width="2"/>
      <ellipse cx="255" cy="205" rx="30" ry="38" fill="#c9d9e8" stroke="#1e3a5f" stroke-width="2"/>
      <path d="M205 170 Q210 130 230 120 M255 170 Q250 130 230 120" fill="none" stroke="#7aa7cd" stroke-width="5" stroke-linecap="round"/>
      <path d="M230 120 Q230 80 230 62" class="si-tr" stroke-width="7"/>
      <rect x="215" y="45" width="30" height="45" rx="12" fill="#e8c9b8" stroke="#1e3a5f" stroke-width="2"/>
      ${num(120, 205, 1)}<path d="M130 205 L175 205" class="si-lead"/><text x="18" y="191" class="si-l">testicules</text>
      ${num(340, 150, 2)}<path d="M330 150 L245 160" class="si-lead"/><text x="352" y="154" class="si-l">canal déférent</text>
      ${num(120, 70, 3)}<path d="M130 70 L215 66" class="si-lead"/><text x="18" y="56" class="si-l">urètre / pénis</text>
    `, "Appareil reproducteur masculin")
  };

  I.peau = {
    titre: "La peau — coupes",
    legende: "Épiderme (barrière) · derme (vaisseaux, nerfs, phanères) · hypoderme (graisse, isolation).",
    svg: frame(`
      <rect x="40" y="60" width="380" height="34" rx="4" fill="#f8d7c1" stroke="#1e3a5f" stroke-width="1.8"/>
      <rect x="40" y="94" width="380" height="90" fill="#f3c2b2" stroke="#1e3a5f" stroke-width="1.8"/>
      <rect x="40" y="184" width="380" height="56" rx="4" fill="#f7e2a8" stroke="#1e3a5f" stroke-width="1.8"/>
      <circle cx="115" cy="130" r="7" fill="#c62828"/><circle cx="250" cy="150" r="7" fill="#1565c0"/>
      <path d="M115 130 L115 94 M250 150 L250 94" stroke="#8e4b4b" stroke-width="1.6"/>
      <path d="M180 184 L180 70 L188 70 L188 184 Z" fill="#d9b8a4" stroke="#7a5a4a" stroke-width="1.4"/>
      <path d="M300 184 Q305 150 320 132" stroke="#7a5a4a" stroke-width="2" fill="none"/>
      <circle cx="322" cy="128" r="9" fill="#ef6c00"/>
      ${num(35, 76, 1)}<text x="50" y="55" class="si-l">épiderme</text>
      ${num(35, 145, 2)}<text x="50" y="200" class="si-l">derme</text>
      ${num(35, 230, 3)}<text x="50" y="260" class="si-l">hypoderme (graisse)</text>
      <text x="200" y="278" text-anchor="middle" class="si-s">poils, glandes sudoripares et sébacées, vaisseaux, nerfs</text>
    `, "Coupe de la peau")
  };

  I.nerveux = {
    titre: "Système nerveux",
    legende: "Le cerveau et la moelle forment le système central ; les nerfs vont vers tout le corps.",
    svg: frame(`
      <path d="M175 80 Q175 45 230 45 Q285 45 285 80 Q305 100 285 120 Q275 140 230 140 Q185 140 175 120 Q155 100 175 80 Z" fill="#e4d7f2" stroke="#1e3a5f" stroke-width="2.2"/>
      <path d="M195 70 Q230 90 265 70 M180 100 Q230 120 280 100" fill="none" stroke="#8e7bb5" stroke-width="1.8"/>
      <path d="M230 140 L230 245" stroke="#1e3a5f" stroke-width="7" stroke-linecap="round"/>
      <path d="M230 175 L130 195 M230 195 L330 215 M230 225 L150 250 M230 235 L320 255" class="si-tr" stroke-width="2.5"/>
      ${num(130, 55, 1)}<path d="M140 55 L190 70" class="si-lead"/><text x="18" y="42" class="si-l">cerveau</text>
      ${num(340, 120, 2)}<path d="M330 120 L235 160" class="si-lead"/><text x="352" y="124" class="si-l">moelle</text>
      ${num(60, 200, 3)}<path d="M70 200 L130 195" class="si-lead"/><text x="18" y="215" class="si-s">nerfs</text>
    `, "Système nerveux")
  };

  I.osteo = {
    titre: "Os, muscle, articulation",
    legende: "Le muscle se contracte, le tendon le relie à l'os, le ligament stabilise l'articulation.",
    svg: frame(`
      <rect x="80" y="110" width="120" height="26" rx="12" fill="#e8eef5" stroke="#1e3a5f" stroke-width="2"/>
      <rect x="260" y="110" width="120" height="26" rx="12" fill="#e8eef5" stroke="#1e3a5f" stroke-width="2"/>
      <circle cx="230" cy="123" r="24" fill="#cfe0ee" stroke="#1e3a5f" stroke-width="2"/>
      <path d="M100 100 Q170 60 215 110" fill="none" stroke="#d4718f" stroke-width="16" stroke-linecap="round"/>
      <path d="M100 100 Q170 60 215 110" fill="none" stroke="#8e3f55" stroke-width="1.4" stroke-dasharray="5 4"/>
      <path d="M215 110 L228 116" stroke="#c98a3b" stroke-width="5" stroke-linecap="round"/>
      <path d="M205 150 Q230 170 255 150" fill="none" stroke="#2e7d32" stroke-width="5" stroke-linecap="round"/>
      ${num(60, 80, 1)}<path d="M70 80 L120 95" class="si-lead"/><text x="18" y="66" class="si-l">muscle</text>
      ${num(160, 55, 2)}<text x="176" y="59" class="si-l">tendon</text>
      ${num(350, 90, 3)}<path d="M340 90 L245 115" class="si-lead"/><text x="362" y="94" class="si-l">os</text>
      ${num(350, 175, 4)}<path d="M340 175 L255 160" class="si-lead"/><text x="362" y="179" class="si-l">ligament</text>
      <text x="230" y="240" text-anchor="middle" class="si-s">tendon = muscle → os · ligament = os → os</text>
    `, "Os, muscle et articulation")
  };

  I.escarre = {
    titre: "Points d'appui et escarre",
    legende: "Les zones osseuses appuyées sont à risque : talons, sacrum, hanches, coudes, omoplates.",
    svg: frame(`
      <ellipse cx="230" cy="150" rx="62" ry="105" fill="#eef3fa" stroke="#1e3a5f" stroke-width="2"/>
      <circle cx="230" cy="60" r="16" fill="#e8d7bd" stroke="#1e3a5f" stroke-width="1.6"/>
      <path d="M205 82 L255 82 L268 145 L192 145 Z" fill="#e8d7bd" stroke="#1e3a5f" stroke-width="1.6"/>
      <path d="M192 145 L268 145 L255 200 L205 200 Z" fill="#e8d7bd" stroke="#1e3a5f" stroke-width="1.6"/>
      <path d="M205 200 L255 200 L245 250 L215 250 Z" fill="#e8d7bd" stroke="#1e3a5f" stroke-width="1.6"/>
      <circle cx="176" cy="100" r="11" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
      <circle cx="284" cy="100" r="11" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
      <ellipse cx="230" cy="172" rx="20" ry="14" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
      <circle cx="205" cy="215" r="10" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
      <circle cx="255" cy="215" r="10" fill="#ff8a80" stroke="#c62828" stroke-width="1.5"/>
      ${num(80, 95, 1)}<path d="M90 95 L165 100" class="si-lead"/><text x="18" y="80" class="si-l">omoplates / coudes</text>
      ${num(350, 170, 2)}<path d="M340 170 L252 172" class="si-lead"/><text x="362" y="174" class="si-l">sacrum</text>
      ${num(80, 235, 3)}<path d="M90 235 L195 218" class="si-lead"/><text x="18" y="250" class="si-l">talons</text>
    `, "Points d'appui à risque d'escarre")
  };

  I.sbar = {
    titre: "Transmission SBAR",
    legende: "Situation · Bilan · Analyse · Recommandation : une transmission claire et rapide.",
    svg: frame(`
      <rect x="30" y="70" width="92" height="160" rx="10" fill="#e8f1fa" stroke="#1e3a5f" stroke-width="2"/>
      <rect x="132" y="70" width="92" height="160" rx="10" fill="#eef7f0" stroke="#2e7d32" stroke-width="2"/>
      <rect x="234" y="70" width="92" height="160" rx="10" fill="#fff8e8" stroke="#ef6c00" stroke-width="2"/>
      <rect x="336" y="70" width="92" height="160" rx="10" fill="#f3e9f7" stroke="#6a1b9a" stroke-width="2"/>
      <text x="76" y="105" text-anchor="middle" class="si-t">S</text><text x="76" y="135" text-anchor="middle" class="si-l">Situation</text>
      <text x="76" y="165" text-anchor="middle" class="si-s">Qui ?</text><text x="76" y="185" text-anchor="middle" class="si-s">Quel problème ?</text>
      <text x="178" y="105" text-anchor="middle" class="si-t">B</text><text x="178" y="135" text-anchor="middle" class="si-l">Bilan</text>
      <text x="178" y="165" text-anchor="middle" class="si-s">Constantes</text><text x="178" y="185" text-anchor="middle" class="si-s">Observations</text>
      <text x="280" y="105" text-anchor="middle" class="si-t">A</text><text x="280" y="135" text-anchor="middle" class="si-l">Analyse</text>
      <text x="280" y="165" text-anchor="middle" class="si-s">Ce que je</text><text x="280" y="185" text-anchor="middle" class="si-s">comprends</text>
      <text x="382" y="105" text-anchor="middle" class="si-t">R</text><text x="382" y="135" text-anchor="middle" class="si-l">Recommandation</text>
      <text x="382" y="165" text-anchor="middle" class="si-s">Ce que je</text><text x="382" y="185" text-anchor="middle" class="si-s">demande</text>
      <text x="230" y="260" text-anchor="middle" class="si-s">Factuel · daté · concis · vérifié</text>
    `, "Méthode SBAR")
  };

  window.SOINS_ILLUSTRATIONS = I;
  window.SOINS_ILLUSTRATION_LABELS = {
    cellule: "La cellule", respiratoire: "Appareil respiratoire",
    cardiovasculaire: "Cœur et circulation", digestif: "Appareil digestif",
    urinaire: "Appareil urinaire", reproducteur_femme: "Appareil reproducteur féminin",
    reproducteur_homme: "Appareil reproducteur masculin", peau: "Coupe de la peau",
    nerveux: "Système nerveux", osteo: "Os, muscle, articulation",
    escarre: "Points d'appui", sbar: "Transmission SBAR"
  };
})();
