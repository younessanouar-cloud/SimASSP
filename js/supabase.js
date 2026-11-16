/* ============================================================
   SimASSP - Client Supabase (sync PC <-> telephone)
   ============================================================ */
(function () {
  "use strict";

  const SUPABASE_URL = "https://jipiobgwkunqgkffdmqk.supabase.co";
  const SUPABASE_KEY = "sb_publishable_4K1eJIjP1uJM3CvvPII6Cg_eDm81wEI";

  if (!window.supabase) {
    console.error("Supabase SDK non charge. Verifier le CDN dans index.html.");
    window.SB = null;
    window.SB_READY = Promise.resolve(false);
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    realtime: { params: { eventsPerSecond: 5 } }
  });

  window.SB = client;

  // Promise resolue quand la connexion initiale est testee
  window.SB_READY = (async function () {
    try {
      const { error } = await client.from("simassp_kv").select("namespace").limit(1);
      if (error) { console.warn("Supabase init:", error.message); return false; }
      return true;
    } catch (e) {
      console.warn("Supabase init exception:", e && e.message);
      return false;
    }
  })();

  // Realtime : callback appele quand une ligne change
  window.SB_SUBSCRIBE = function (callback) {
    if (!client) return function () {};
    const channel = client
      .channel("simassp_kv_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "simassp_kv" }, function (payload) {
        try { callback(payload); } catch (e) { console.warn("SB callback:", e && e.message); }
      })
      .subscribe();
    return function () { try { client.removeChannel(channel); } catch (e) {} };
  };
})();
