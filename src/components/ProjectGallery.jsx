// src/components/ProjectGallery.jsx
import { useEffect, useState } from "react";

/**
 * Proje ekran görüntüleri.
 *
 * Dosya sitede yoksa (henüz kopyalanmadıysa) o görsel sessizce listeden düşer;
 * hiçbiri yüklenemezse bileşen hiç render edilmez. Böylece eksik dosya
 * sayfada kırık resim ikonu bırakmaz.
 */
export default function ProjectGallery({ screenshots, accent }) {
  const [bozuk, setBozuk] = useState(() => new Set());
  const [acikIndex, setAcikIndex] = useState(null);

  const liste = (Array.isArray(screenshots) ? screenshots : []).filter(
    (s) => s?.src && !bozuk.has(s.src)
  );

  // Büyük görünümde ok tuşları ve ESC
  useEffect(() => {
    if (acikIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setAcikIndex(null);
      } else if (e.key === "ArrowRight") {
        setAcikIndex((i) => (i + 1) % liste.length);
      } else if (e.key === "ArrowLeft") {
        setAcikIndex((i) => (i - 1 + liste.length) % liste.length);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [acikIndex, liste.length]);

  if (liste.length === 0) return null;

  const acik = acikIndex === null ? null : liste[acikIndex];

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h4 className="text-white font-black text-lg">Uygulamadan Görüntüler</h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {liste.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setAcikIndex(i);
            }}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-xl"
          >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 aspect-[9/17]">
              <img
                src={s.src}
                alt={s.caption || "Uygulama ekranı"}
                loading="lazy"
                onError={() => setBozuk((prev) => new Set(prev).add(s.src))}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            {s.caption && (
              <div className="mt-2 px-0.5 text-[11.5px] font-bold leading-snug text-white/60 group-hover:text-white/85 transition-colors">
                {s.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      <p className="mt-4 text-[12.5px] font-semibold text-white/45">
        Görseller örnek (test) verisiyle alınmıştır; gerçek kullanıcı bilgisi içermez.
      </p>

      {/* Büyük görünüm */}
      {acik && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={(e) => {
            e.stopPropagation();
            setAcikIndex(null);
          }}
        >
          <button
            type="button"
            aria-label="Kapat"
            onClick={(e) => {
              e.stopPropagation();
              setAcikIndex(null);
            }}
            className="absolute top-4 right-4 rounded-full border border-white/15 bg-white/10 p-2.5 text-white/80 hover:bg-white/20 hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {liste.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Önceki"
                onClick={(e) => {
                  e.stopPropagation();
                  setAcikIndex((i) => (i - 1 + liste.length) % liste.length);
                }}
                className="absolute left-3 sm:left-6 rounded-full border border-white/15 bg-white/10 p-3 text-white/80 hover:bg-white/20 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Sonraki"
                onClick={(e) => {
                  e.stopPropagation();
                  setAcikIndex((i) => (i + 1) % liste.length);
                }}
                className="absolute right-3 sm:right-6 rounded-full border border-white/15 bg-white/10 p-3 text-white/80 hover:bg-white/20 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <figure className="flex max-h-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={acik.src}
              alt={acik.caption || "Uygulama ekranı"}
              className="max-h-[78vh] w-auto rounded-2xl border border-white/15 shadow-2xl"
            />
            {acik.caption && (
              <figcaption
                className={`rounded-full border border-white/10 bg-gradient-to-r ${
                  accent?.bullet || "from-white/20 to-white/10"
                } px-4 py-1.5 text-[13px] font-black text-white`}
              >
                {acik.caption}
              </figcaption>
            )}
            <span className="text-[12px] font-semibold text-white/45">
              {acikIndex + 1} / {liste.length}
            </span>
          </figure>
        </div>
      )}
    </div>
  );
}
