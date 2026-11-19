/* SimASSP — Service worker (app shell hors-ligne) */
"use strict";

var CACHE = "simassp-shell-v1";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/crypto.js",
  "./js/supabase.js",
  "./js/storage.js",
  "./js/data.js",
  "./js/scenarios_extra.js",
  "./js/app.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
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

  // Assets : cache d'abord, revalidation en arrière-plan.
  event.respondWith((async function () {
    var cache = await caches.open(CACHE);
    var cached = await cache.match(req);
    var network = fetch(req).then(function (resp) {
      if (resp && resp.ok) cache.put(req, resp.clone());
      return resp;
    }).catch(function () { return null; });
    if (cached) return cached;
    return (await network) || Response.error();
  })());
});
