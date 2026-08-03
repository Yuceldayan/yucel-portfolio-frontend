// src/api/fallbackGuard.js
//
// Public okuma çağrılarını sarar. API'ye ulaşılabiliyorsa cevabı olduğu gibi
// geçirir; ulaşılamıyorsa paketlenmiş yedek içeriği API'nin döndürdüğü şekilde
// sarıp döner, böylece çağıran kodun hiçbir şeyi değişmez.
//
// Yedeğe yalnızca ağ/sunucu tarafı hatalarda düşülür (bağlantı yok, 5xx,
// zaman aşımı). 4xx hataları uygulamanın kendi hatasıdır ve gizlenmez.

const SUNUCU_HATASI = (status) => status === undefined || status === 0 || status >= 500;

export function withFallback(istek, yedekVeri) {
  return istek.catch((error) => {
    const status = error?.response?.status;

    if (!SUNUCU_HATASI(status)) {
      throw error;
    }

    if (import.meta.env.DEV) {
      console.info(
        "[fallback] API'ye ulaşılamadı, paketlenmiş içerik kullanılıyor.",
        { status }
      );
    }

    return {
      data: { data: yedekVeri },
      status: 200,
      fromFallback: true,
    };
  });
}
