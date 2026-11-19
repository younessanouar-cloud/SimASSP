/* ============================================================
   SimASSP - Hachage des mots de passe (PBKDF2-SHA-256)
   Format stocké : pbkdf2$<itérations>$<sel base64>$<empreinte base64>
   Les anciens mots de passe (base64 réversible) sont acceptés
   UNIQUEMENT lors d'une connexion réussie, puis convertis.
   ============================================================ */
(function () {
  "use strict";

  var PREFIX = "pbkdf2$";
  var ITERATIONS = 150000;
  var SALT_BYTES = 16;
  var KEY_BYTES = 32; // 256 bits

  function bytesToB64(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }

  function b64ToBytes(b64) {
    var s = atob(b64);
    var out = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
    return out;
  }

  function subtle() {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error(
        "Web Crypto indisponible : ouvre SimASSP en HTTPS ou sur localhost " +
        "(PBKDF2 requis pour protéger les mots de passe)."
      );
    }
    return window.crypto.subtle;
  }

  async function deriveBits(password, salt, iterations) {
    var sc = subtle();
    var key = await sc.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    );
    var bits = await sc.deriveBits(
      { name: "PBKDF2", salt: salt, iterations: iterations, hash: "SHA-256" },
      key,
      KEY_BYTES * 8
    );
    return new Uint8Array(bits);
  }

  async function hash(password) {
    var salt = window.crypto.getRandomValues(new Uint8Array(SALT_BYTES));
    var dk = await deriveBits(password, salt, ITERATIONS);
    return PREFIX + ITERATIONS + "$" + bytesToB64(salt) + "$" + bytesToB64(dk);
  }

  // Ancien format : btoa("simassp::" + pwd). Conservé pour la migration.
  function legacyHash(password) {
    return btoa(unescape(encodeURIComponent("simassp::" + password)));
  }

  function constantTimeEqual(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
    return diff === 0;
  }

  /**
   * Vérifie un mot de passe.
   * Retourne { ok: boolean, upgraded: string|null }
   * `upgraded` contient le nouveau hash PBKDF2 quand l'ancien format
   * base64 a été validé (l'app doit alors le persister).
   */
  async function verify(password, stored) {
    if (typeof stored !== "string" || !stored) return { ok: false, upgraded: null };

    if (stored.indexOf(PREFIX) !== 0) {
      var okLegacy = legacyHash(password) === stored;
      return { ok: okLegacy, upgraded: okLegacy ? await hash(password) : null };
    }

    var parts = stored.split("$");
    if (parts.length !== 4) return { ok: false, upgraded: null };
    var iterations = parseInt(parts[1], 10);
    if (!iterations || iterations < 10000 || iterations > 1000000) return { ok: false, upgraded: null };

    var salt, expected;
    try {
      salt = b64ToBytes(parts[2]);
      expected = b64ToBytes(parts[3]);
    } catch (e) {
      return { ok: false, upgraded: null };
    }
    if (expected.length !== KEY_BYTES) return { ok: false, upgraded: null };

    var actual = await deriveBits(password, salt, iterations);
    return { ok: constantTimeEqual(actual, expected), upgraded: null };
  }

  window.SimASSPCrypto = {
    hash: hash,
    verify: verify,
    legacyHash: legacyHash,
    ITERATIONS: ITERATIONS,
    isPbkdf2: function (stored) { return typeof stored === "string" && stored.indexOf(PREFIX) === 0; }
  };
})();
