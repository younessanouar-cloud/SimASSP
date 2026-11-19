/* ============================================================
   SimASSP - Client Supabase (sync PC <-> telephone)
   Option B : session anonyme Supabase Auth + RLS par identite.
   La session est persistee sur l'appareil ; a chaque connexion,
   l'app "revendique" son compte (preuve PBKDF2) pour rattacher
   les donnees (owner u_.../t_...) a l'uid courant.
   ============================================================ */
(function () {
  "use strict";

  const SUPABASE_URL = "https://jipiobgwkunqgkffdmqk.supabase.co";
  const SUPABASE_KEY = "sb_publishable_4K1eJIjP1uJM3CvvPII6Cg_eDm81wEI";
  const AUTH_STORAGE_KEY = "simassp-auth";

  window.SimASSPAuth = {
    ready: false,
    uid: null,
    available: false,
    // true si la RPC n'est pas (encore) deployee dans le projet Supabase.
    rpcMissing: function (error) {
      const m = String((error && error.message) || error || "");
      return m.indexOf("does not exist") !== -1 ||
             m.indexOf("PGRST202") !== -1 ||
             m.indexOf("42883") !== -1 ||
             m.indexOf("Could not find the function") !== -1;
    },

    // Lookup public : renvoie UNIQUEMENT id / login / passwordHash.
    // Aucune donnee personnelle, aucune donnee pedagogique.
    lookup: async function (login, kind) {
      if (!window.SB || !this.ready) return null;
      const fn = kind === "teacher" ? "simassp_public_teacher" : "simassp_public_account";
      try {
        const { data, error } = await window.SB.rpc(fn, { p_login: login });
        if (error) {
          if (this.rpcMissing(error)) return null; // migration pas encore appliquee
          console.warn("SimASSPAuth.lookup:", error.message);
          return null;
        }
        return data || null;
      } catch (e) {
        console.warn("SimASSPAuth.lookup ex:", e && e.message);
        return null;
      }
    },

    // Revendique le compte pour l'uid anonyme courant.
    // proof = empreinte PBKDF2 (ou hash legacy), newHash = hash PBKDF2 apres migration.
    claim: async function (ownerId, proof, kind, newHash) {
      if (!window.SB || !this.ready || !proof) return false;
      const params = { p_owner: ownerId, p_proof: proof, p_kind: kind };
      if (newHash) params.p_new_hash = newHash;
      try {
        const { data, error } = await window.SB.rpc("simassp_claim", params);
        if (error) {
          console.warn("SimASSPAuth.claim:", error.message);
          return false;
        }
        return !!data;
      } catch (e) {
        console.warn("SimASSPAuth.claim ex:", e && e.message);
        return false;
      }
    },

    // Snapshot élève : la RPC ne touche QUE la clé de l'élève connecté.
    getSnapshot: async function () {
      if (!window.SB || !this.ready) return null;
      try {
        const { data, error } = await window.SB.rpc("simassp_student_snapshot_get");
        if (error) {
          if (this.rpcMissing(error)) return null;
          console.warn("SimASSPAuth.getSnapshot:", error.message);
          return null;
        }
        return data && typeof data === "object" ? data : {};
      } catch (e) { return null; }
    },

    // Écriture ciblée d'un blob global : une seule clé (le login courant).
    // Renvoie null si la RPC n'existe pas encore (repli sur l'ancien schéma).
    setGlobalKey: async function (namespace, value) {
      if (!window.SB || !this.ready) return null;
      try {
        const { data, error } = await window.SB.rpc(
          "simassp_student_global_set", { p_namespace: namespace, p_value: value }
        );
        if (error) {
          if (this.rpcMissing(error)) return null;
          console.warn("SimASSPAuth.setGlobalKey:", error.message);
          return false;
        }
        return !!data;
      } catch (e) { return false; }
    },

    setSnapshot: async function (value) {
      return this.setGlobalKey("students_data", value);
    },

    // Lectures ciblées des blobs que l'élève peut consulter.
    getScoped: async function (namespace) {
      if (!window.SB || !this.ready) return null;
      const fn = namespace === "pfmp" ? "simassp_student_pfmp_get"
               : namespace === "tuteur_evals" ? "simassp_student_tuteur_eval_get"
               : "simassp_student_snapshot_get";
      try {
        const { data, error } = await window.SB.rpc(fn);
        if (error) {
          if (this.rpcMissing(error)) return null;
          console.warn("SimASSPAuth.getScoped:", error.message);
          return null;
        }
        return data && typeof data === "object" ? data : {};
      } catch (e) { return null; }
    },

    // Récupère les données de l'élève après connexion et les injecte dans le
    // cache local, afin que loadStudentsData()/loadPFMP()/loadTuteurEvals()
    // continuent à fonctionner sans modification de leur signature.
    refreshStudentGlobals: async function (login) {
      if (!login) return;
      var mapping = [
        ["students_data", "simassp_students_data"],
        ["pfmp", "simassp_pfmp"],
        ["tuteur_evals", "simassp_tuteur_evals"]
      ];
      for (var i = 0; i < mapping.length; i++) {
        var ns = mapping[i][0], key = mapping[i][1];
        var value = await this.getScoped(ns);
        if (!value || !Object.keys(value).length) continue;
        try {
          var all = JSON.parse(localStorage.getItem(key) || "{}");
          all[login] = value;
          localStorage.setItem(key, JSON.stringify(all));
          localStorage.setItem(key + "__wr", String(Date.now()));
        } catch (e) {}
      }
    },

    // Ancien nom conservé pour compatibilité.
    refreshSnapshotIntoCache: async function (login) {
      return this.refreshStudentGlobals(login);
    }
  };

  if (!window.supabase) {
    console.error("Supabase SDK non charge. Verifier le CDN dans index.html.");
    window.SB = null;
    window.SB_READY = Promise.resolve(false);
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      storageKey: AUTH_STORAGE_KEY
    },
    realtime: { params: { eventsPerSecond: 5 } }
  });

  window.SB = client;

  // Connexion anonyme : fournit un uid stable sur cet appareil.
  // La RLS Refuse toute lecture/ecriture tant que cette promesse n'est pas resolue.
  window.SB_READY = (async function () {
    try {
      let { data: sessionData } = await client.auth.getSession();
      if (!sessionData || !sessionData.session) {
        const { data, error } = await client.auth.signInAnonymously();
        if (error) throw error;
        sessionData = data;
      }
      window.SimASSPAuth.uid = sessionData && sessionData.session && sessionData.session.user
        ? sessionData.session.user.id : null;
      window.SimASSPAuth.ready = !!window.SimASSPAuth.uid;
      window.SimASSPAuth.available = window.SimASSPAuth.ready;
      return window.SimASSPAuth.ready;
    } catch (e) {
      console.warn("Supabase auth anonymous:", e && e.message);
      window.SimASSPAuth.ready = false;
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

  // Deconnexion : conserve le compte local mais libere la session Supabase.
  window.SB_SIGN_OUT = async function () {
    try { await client.auth.signOut(); } catch (e) {}
    window.SimASSPAuth.ready = false;
    window.SimASSPAuth.uid = null;
  };
})();
