/* SimASSP — Service worker (app shell hors-ligne)
   v8 — 21/11/2026 : Assistant Soins enrichi (anatomie, schémas SVG, onglet prof).
   - bump de cache : les anciens visiteurs (v2) purgent leur vieux cache
     a l'activation du nouveau SW.
   - scripts/CSS en NETWORK-FIRST : chaque mise a jour deployee est visible
     au rechargement suivant ; le cache ne sert qu'en hors-ligne.
   - icônes/manifest en cache-first (fichiers immuables).
   - les URLs du shell portent le meme ?v= que index.html (cache.match
     fonctionne par URL exacte). */
"use strict";

var CACHE = "simassp-shell-v8";
var VERSION = "20261121f";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css?v=" + VERSION,
  "./js/crypto.js?v=" + VERSION,
  "./js/soins_lexique.js?v=" + VERSION,
  "./js/soins_anatomie.js?v=" + VERSION,
  "./js/soins_infirmier.js?v=" + VERSION,
  "./js/soins_illustrations.js?v=" + VERSION,
  "./js/soins_bot.js?v=" + VERSION,
  "./js/supabase.js?v=" + VERSION,
  "./js/storage.js?v=" + VERSION,
  "./js/data.js?v=" + VERSION,
  "./js/scenarios_extra.js?v=" + VERSION,
  "./js/app.js?v=" + VERSION,
  "./icons/dwyn.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

// Fichiers dont on veut TOUJOURS la version reseau quand elle est joignable.
var NETWORK_FIRST = [
  "./js/",
  "./css/"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
        return null;
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function isNetworkFirst(path) {
  for (var i = 0; i < NETWORK_FIRST.length; i++) {
    if (path.indexOf(NETWORK_FIRST[i]) !== -1) return true;
  }
  return false;
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // CDN Supabase / polices / QR : réseau direct.

  if (req.mode === "navigate") {
    event.respondWith((async function () {
      var cache = await caches.open(CACHE);
      try {
        var resp = await fetch(req);
        if (resp && resp.ok) cache.put("./index.html", resp.clone());
        return resp;
      } catch (e) {
        return (await cache.match("./index.html")) ||
               (await cache.match("./")) ||
               Response.error();
      }
    })());
    return;
  }

  // Scripts / CSS : réseau d'abord (mise à jour toujours visible), cache en secours.
  if (isNetworkFirst(url.pathname)) {
    event.respondWith((async function () {
      var cache = await caches.open(CACHE);
      try {
        var fresh = await fetch(req);
        if (fresh && fresh.ok) cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        var cached = await cache.match(req);
        if (cached) return cached;
        return Response.error();
      }
    })());
    return;
  }

  // Icônes / manifest : cache d'abord.
  event.respondWith((async function () {
    var cache = await caches.open(CACHE);
    var cached = await cache.match(req);
    if (cached) return cached;
    try {
      var resp = await fetch(req);
      if (resp && resp.ok) cache.put(req, resp.clone());
      return resp;
    } catch (e) {
      return Response.error();
    }
  })());
});
