// src/components/AdminGate.jsx
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { api } from "../api/http";

export default function AdminGate({ children }) {
  const [checking, setChecking] = useState(true);
  const [ok, setOk] = useState(false);
  const [offline, setOffline] = useState(false);

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const loc = useLocation();

  const checkMe = async () => {
    try {
      const res = await api.get("/api/v1/auth/me");
      const auths = res.data?.authorities || [];
      const isAdmin = auths.some((a) =>
        String(a?.authority || a).includes("ROLE_ADMIN")
      );
      setOk(isAdmin);
      setOffline(false);
    } catch (e) {
      // 401/403 -> giriş gerekiyor, form gösterilir.
      // Bağlantı yok ya da 5xx -> API ayakta değil. Bu durumda hiçbir zaman
      // başarılı olamayacak bir giriş formu göstermek yerine durumu söyle.
      const status = e?.response?.status;
      setOffline(status === undefined || status === 0 || status >= 500);
      setOk(false);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    checkMe();
  }, []);

  if (checking) {
    return (
      <div className="mx-auto mt-20 w-full max-w-[560px] px-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 text-center">
          <div className="text-3xl">⏳</div>
          <div className="mt-2 text-sm font-bold text-white/70">
            Yetki kontrol ediliyor...
          </div>
        </div>
      </div>
    );
  }

  // ✅ yetkiliyse admin sayfasını aç
  if (ok) return children;

  // API ayakta değil: giriş denemesi anlamsız, durumu açıkça göster.
  if (offline) {
    return (
      <div className="mx-auto mt-20 w-full max-w-[560px] px-4">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-70" />

          <div className="text-center">
            <div className="text-4xl">🛠️</div>
            <h1 className="mt-3 text-2xl font-black tracking-tight text-white">
              Yönetim paneli şu an kapalı
            </h1>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-white/70">
              Panel, içeriği yöneten API'ye bağlı çalışıyor ve o servis şu anda
              yayında değil. Sitenin herkese açık kısmı normal şekilde
              görüntüleniyor.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(99,102,241,0.28)] transition hover:-translate-y-[1px]"
            >
              Ana sayfaya dön
            </a>
            <a
              href="https://github.com/Yuceldayan/yucel-portfolio-backend"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/85 transition hover:bg-white/[0.10] hover:border-white/20"
            >
              API'nin kodu
            </a>
          </div>
        </div>
      </div>
    );
  }

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      await api.post("/api/v1/auth/login", {
        username: username.trim(),
        password,
      });

      // login başarılıysa tekrar kontrol et
      await checkMe();
    } catch (e2) {
      setErr(e2?.uiMessage || "Giriş başarısız");
    }
  };

  return (
    <div className="mx-auto mt-20 w-full max-w-[560px] px-4">
      <div
        className="
          relative overflow-hidden
          rounded-2xl border border-white/10
          bg-white/[0.04]
          p-6 sm:p-8
          shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        "
      >
        <div
          className="
            pointer-events-none absolute inset-x-0 top-0 h-1
            bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500
            opacity-70
          "
        />

        <div className="text-center">
          <h1 className="mt-2 text-3xl font-black tracking-tight text-white">
            🔐 Admin Girişi
          </h1>
          <p className="mt-2 text-sm font-semibold text-white/70">
            Admin paneline erişmek için giriş yap.
          </p>
        </div>

        <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Kullanıcı adı"
            className="
              w-full rounded-xl border border-white/10
              bg-white/[0.05]
              px-4 py-3
              text-center font-bold text-white
              placeholder:text-white/40
              outline-none transition
              focus:border-indigo-500/40
              focus:ring-2 focus:ring-indigo-500/40
            "
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            className="
              w-full rounded-xl border border-white/10
              bg-white/[0.05]
              px-4 py-3
              text-center font-bold text-white
              placeholder:text-white/40
              outline-none transition
              focus:border-indigo-500/40
              focus:ring-2 focus:ring-indigo-500/40
            "
          />

          <button
            type="submit"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl
              border border-indigo-500/30
              bg-gradient-to-r from-indigo-500 to-violet-500
              px-4 py-3
              text-sm font-extrabold text-white
              shadow-[0_14px_34px_rgba(99,102,241,0.28)]
              transition
              hover:-translate-y-[1px]
              focus:outline-none
              focus-visible:ring-2 focus-visible:ring-indigo-500/50
            "
          >
            Giriş Yap
          </button>

          {err && (
            <div
              className="
                rounded-xl border border-red-500/25
                bg-red-500/10
                px-4 py-3
                text-center text-sm font-bold text-red-200
              "
              role="alert"
            >
              {err}
            </div>
          )}

          <div className="pt-1 text-center text-xs font-semibold text-white/55">
            Konum:{" "}
            <code className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-white/80">
              {loc.pathname}
            </code>
          </div>
        </form>
      </div>
    </div>
  );
}
