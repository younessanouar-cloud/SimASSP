/* ============================================================
   SimASSP - Couche de stockage Supabase (avec cache local)
   ============================================================ */
(function () {
  "use strict";

  function cacheKey(ns, owner) {
    return "simassp_cache_" + ns + "_" + (owner || "global");
  }

  function readCache(ns, owner) {
    try { return JSON.parse(localStorage.getItem(cacheKey(ns, owner)) || "null"); }
    catch (e) { return null; }
  }

  function writeCache(ns, owner, data) {
    try { localStorage.setItem(cacheKey(ns, owner), JSON.stringify(data)); } catch (e) {}
  }

  function removeCache(ns, owner) {
    try { localStorage.removeItem(cacheKey(ns, owner)); } catch (e) {}
  }

  async function sbReady() {
    if (window.SB_READY) { try { await window.SB_READY; } catch (e) {} }
    return !!window.SB;
  }

  window.Storage = {
    // Lire une valeur (namespace, owner). Retourne les donnees ou null.
    async get(ns, owner) {
      owner = owner || "global";
      const sb = window.SB;
      if (sb && await sbReady()) {
        try {
          const { data, error } = await sb
            .from("simassp_kv")
            .select("data")
            .eq("namespace", ns)
            .eq("owner", owner)
            .maybeSingle();
          if (!error && data) {
            writeCache(ns, owner, data.data);
            return data.data;
          }
        } catch (e) { console.warn("Storage.get", ns, owner, e && e.message); }
      }
      // Fallback cache local
      return readCache(ns, owner);
    },

    // Ecrire une valeur (namespace, owner, data).
    async set(ns, owner, data) {
      owner = owner || "global";
      writeCache(ns, owner, data); // cache immediat
      const sb = window.SB;
      if (sb && await sbReady()) {
        try {
          const { error } = await sb
            .from("simassp_kv")
            .upsert({ namespace: ns, owner: owner, data: data, updated_at: new Date().toISOString() },
                    { onConflict: "namespace,owner" });
          if (error) console.warn("Storage.set", ns, owner, error.message);
        } catch (e) { console.warn("Storage.set ex", ns, owner, e && e.message); }
      }
    },

    // Supprimer une valeur.
    async remove(ns, owner) {
      owner = owner || "global";
      removeCache(ns, owner);
      const sb = window.SB;
      if (sb && await sbReady()) {
        try {
          const { error } = await sb
            .from("simassp_kv")
            .delete()
            .eq("namespace", ns)
            .eq("owner", owner);
          if (error) console.warn("Storage.remove", ns, owner, error.message);
        } catch (e) { console.warn("Storage.remove ex", ns, owner, e && e.message); }
      }
    },

    // Lire toutes les lignes d'un namespace (retourne un tableau de {owner, data}).
    async getAll(ns) {
      const sb = window.SB;
      if (sb && await sbReady()) {
        try {
          const { data, error } = await sb
            .from("simassp_kv")
            .select("owner, data")
            .eq("namespace", ns);
          if (!error && data) {
            // Mettre en cache chaque ligne
            data.forEach(function (row) { writeCache(ns, row.owner, row.data); });
            return data;
          }
        } catch (e) { console.warn("Storage.getAll", ns, e && e.message); }
      }
      // Fallback cache : on ne peut pas lister facilement, retourner vide
      return [];
    },

    // Vider le cache local d'un namespace (utile pour forcer un rechargement).
    clearCache(ns, owner) {
      if (owner) removeCache(ns, owner);
      else {
        // Supprimer toutes les cles de cache pour ce namespace
        var prefix = "simassp_cache_" + ns + "_";
        var toRemove = [];
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k && k.indexOf(prefix) === 0) toRemove.push(k);
        }
        toRemove.forEach(function (k) { localStorage.removeItem(k); });
      }
    }
  };
})();
