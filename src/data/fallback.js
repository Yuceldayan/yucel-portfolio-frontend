// src/data/fallback.js
//
// Site içeriğinin paketlenmiş kopyası.
//
// Public sayfa normalde içeriğini API'den çeker. API'ye ulaşılamadığında
// (barındırma askıda, ağ hatası, soğuk başlatma) sayfanın boş kalmaması için
// bu veri kullanılır. Backend geri döndüğünde hiçbir kod değişikliği
// gerekmeden yeniden API'den okunur — bu dosya yalnızca yedektir.
//
// Alan adları API'nin döndürdüğü DTO'larla birebir aynıdır.
//
// NOT: `shortDescription` kart üzerinde satır satır maddeye çevrilir
// (bkz. ProjectCard.jsx), bu yüzden her satır tek başına anlamlı ve kısa
// olmalıdır. `longDescription` ise detay penceresinde paragraf olarak görünür.

export const fallbackProjects = [
  {
    id: 8,
    title: "Diyetisyen Platformu — Abonelik Tabanlı SaaS",
    shortDescription: [
      "Diyetisyenler danışanlarını, danışanlar programını mobilden takip eder",
      "Spring Boot modüler monolit + React admin + Astro landing + Expo mobil",
      "14 alan modülü, 32 controller, 35 entity, 25 migration, 324 test",
      "PostgreSQL, Redis, MinIO ve Caddy ile Docker üzerinde çalışır",
    ].join("\n"),
    description:
      "Diyetisyenlerin danışanlarını yönettiği, danışanların beslenme programını mobilden takip ettiği abonelik tabanlı SaaS. Yayına hazırlanıyor.",
    longDescription:
      "Diyetisyenlerin danışanlarını yönettiği, danışanların beslenme programını mobilden takip ettiği abonelik tabanlı bir SaaS. Şu an yayına hazırlanıyor.\n\nBackend'i modüler monolit olarak kurdum: tek uygulama ama on dört ayrı alan modülü — kimlik doğrulama, hasta, diyetisyen, diyet planı, randevu, ölçüm, abonelik, ödeme, bildirim, rozet, yapay zekâ ve denetim kaydı. Her modül kendi sınırları içinde duruyor; monolitin işletme kolaylığını mikroservis disiplinine yakın bir ayrımla birleştiriyor. 310 Java dosyası, 32 controller, 35 entity, 25 migration ve 324 test var.\n\nÜç ayrı istemci var: diyetisyenlerin kullandığı React admin paneli (TanStack Query ile sunucu durumu yönetimi), Astro ile üretilen statik tanıtım sitesi ve Expo ile yazılmış mobil uygulama — push bildirim, güvenli depolama, fotoğraf yükleme ve çoklu dil desteğiyle.\n\nAltyapı Docker Compose üzerinde: PostgreSQL 16, Redis 7, S3 uyumlu nesne depolama için MinIO ve önünde Caddy. Bağımlılık sürümleri bilerek sabitlendi ve her sabitlemenin gerekçesi kod içinde yazılı.\n\nÜrün kararlarını mimari karar kaydı (ADR) olarak belgeledim: aboneliği biten hastanın verisine ne olacağı, yapay zekâ veri akışının KVKK ile ilişkisi, reşit olmayan danışan, uygulama içi satın alma komisyonu ve fiyatlandırma, paket düşürme davranışı, besin veritabanı seçimi ve mağaza uyumluluk kapıları.\n\nKaynak kodu şu an özel. Mimari, veri modeli veya belirli bir modül hakkında konuşmaktan memnuniyet duyarım.",
    technologies: [
      "Java 21", "Spring Boot 3.3", "PostgreSQL 16", "Redis", "MinIO (S3)",
      "React", "TanStack Query", "Astro", "Expo", "React Native",
      "Docker", "Caddy", "Testcontainers",
    ],
    features: [
      "14 alan modülü: hasta, diyet planı, randevu, ölçüm, abonelik, ödeme…",
      "Abonelik ve uygulama içi satın alma akışı",
      "Expo ile mobil uygulama: push bildirim, güvenli depolama, çoklu dil",
      "React admin paneli ve Astro ile statik tanıtım sitesi",
      "Denetim kaydı ve rol bazlı erişim",
      "Docker Compose ile geliştirme ve üretim ortamı",
      "7 mimari karar kaydı (ADR) ve yayın güvenlik yol haritası",
    ],
    // Dosyalar frontend/public/diyetisyen/ altına konur. Bir dosya yoksa
    // galeri onu sessizce atlar; hiçbiri yoksa bölüm hiç görünmez.
    screenshots: [
      { src: "/diyetisyen/01.png", caption: "Diyetisyen paneli" },
      { src: "/diyetisyen/02.png", caption: "Danışan listesi" },
      { src: "/diyetisyen/03.png", caption: "Danışan detayı" },
      { src: "/diyetisyen/04.png", caption: "Ölçüm takibi" },
      { src: "/diyetisyen/05.png", caption: "Profil" },
    ],
    // Kod özel; repo yalnızca mimari anlatımı ve ekran görüntülerini içeriyor,
    // bu yüzden bağlantı "Repository" yerine ne olduğunu söyleyen bir etiket taşıyor.
    repoUrl: "https://github.com/Yuceldayan/diyetisyen-platform",
    repoLabel: "Mimari & Görseller",
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-07-27T00:00:00Z",
    displayOrder: 1,
  },
  {
    id: 1,
    title: "GSS — Yapay Zekâ Destekli Sınav Gözetim Sistemi",
    shortDescription: [
      "Sınava girenin kimliğini yüz tanımayla doğrular",
      "Telefon, tablet ve kulaklığı karede tespit eder",
      "Ses seviyesi, sekme değişimi ve tam ekrandan çıkışı izler",
      "Spring Boot API + React arayüz + FastAPI görü servisi",
    ].join("\n"),
    description:
      "Online sınavda kimlik doğrulama ve gözetim yapan üç servisli sistem. Bitirme projem.",
    longDescription:
      "Bitirme projem. Online sınavı yapmak kolay, güvenmek zor. GSS önce sınava girenin kim olduğunu doğruluyor, sonra oturumu bir gözetmenin fark edeceği şeylere karşı izliyor: masanın altındaki telefon, karede beliren ikinci yüz, konuşma sesi, kameradan çıkma.\n\nÜç servisin de mimarisini ve kodunu tek başıma yazdım. Spring Boot API'de 13 controller, 13 JPA entity, Flyway migration zinciri ve JWT ile rol bazlı yetkilendirme var. React arayüzü öğrenci, öğretmen ve yönetici olmak üzere üç ayrı yüzeyden oluşuyor; i18next ile Türkçe ve İngilizce çalışıyor.\n\nGörü işlemleri ayrı bir FastAPI servisinde. InsightFace Buffalo_L ile 512 boyutlu L2-normalize yüz embedding'i çıkarıyorum; vektörler normalize olduğu için iki yüzü karşılaştırmak tek bir nokta çarpımına iniyor. Nesne tespitinde YOLOv8 ve Open Images V7 kullanıyorum; telefon kısmen görünürken bile yakalanıyor. Ses tarafında Web Audio API'den gelen dBFS ve RMS metrikleri değerlendiriliyor.\n\nJava tarafını model bağımlılıklarından uzak tutmak için görüyü ayrı servise taşıdım; ikisi sunucudan sunucuya konuşuyor. Şüpheli her durum, türü ve ağırlığıyla birlikte bir gözetim olayına dönüşüyor ve kare kanıt olarak saklanıyor. Öğretmen oturumu canlı izliyor, sonrasında olay zaman çizelgesini inceliyor.",
    technologies: [
      "Java 21", "Spring Boot 4", "PostgreSQL", "Flyway", "JWT",
      "React", "MUI", "i18next", "Python", "FastAPI",
      "YOLOv8", "InsightFace", "ONNX Runtime", "Docker",
    ],
    features: [
      "Yüz kaydı ve sınav öncesi kimlik doğrulama",
      "Telefon, tablet ve kulaklık tespiti (kısmi görünürlükte bile)",
      "Web Audio API metrikleriyle ses seviyesi analizi",
      "Sekme değişimi, odak kaybı ve tam ekrandan çıkış denetimi",
      "Öğretmen için canlı gözetim paneli ve olay zaman çizelgesi",
      "Öğrenci bazlı risk özeti ve rıza yönetimi",
      "13 controller, 13 JPA entity, 8 Flyway migration",
    ],
    repoUrl: "https://github.com/Yuceldayan/gss-online-exam-proctoring",
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-06-01T00:00:00Z",
    displayOrder: 1,
  },
  {
    id: 2,
    title: "ACADEM-X — Akademik Doküman Paylaşım Platformu",
    shortDescription: [
      "Üniversite → bölüm → ders hiyerarşisinde ders notu paylaşımı",
      "PDF yükleme, moderasyon kuyruğu ve tarayıcı içi görüntüleyici",
      "Uçtan uca TypeScript: Express + Prisma API ve React istemci",
      "19 test paketi, tek komutla ayağa kalkan Docker ortamı",
    ].join("\n"),
    description:
      "Ders notu ve çıkmış soru paylaşım platformu; moderasyondan geçmeden hiçbir doküman görünmez.",
    longDescription:
      "Öğrenciler üniversite, bölüm ve ders hiyerarşisinde gezinip ders notu ve çıkmış soru paylaşıyor, PDF'leri tarayıcıda okuyor, işine yarayanları favoriliyor. Yüklenen her doküman moderasyondan geçmeden görünür olmuyor.\n\nUçtan uca TypeScript: Express + Prisma API'si ve React istemcisi tek repoda, tipleri ve test kurulumunu paylaşıyorlar. Sekiz Prisma modelini ve arkasındaki migration zincirini ben tasarladım.\n\nAltı alan modülünün her birini controller → service → repository ayrımında kurdum; HTTP işi, iş kuralları ve veri erişimi birbirine karışmıyor. Doğrulama uçta zod şemalarıyla yapılıyor, hatalar tek bir error-handler üzerinden HTTP kodlarına eşleniyor.\n\nErişim kurallarını tek yerde topladım: moderasyondan geçmemiş bir doküman, hangi rotadan istenirse istensin erişilemiyor — sadece bariz olandan değil. Kimlik doğrulama httpOnly çerezde JWT ile, rol bazlı korumalar hem sunucuda hem istemcide.\n\n19 test paketi var ve tüm yığın tek komutla Docker üzerinde ayağa kalkıyor.\n\nBu, projenin ikinci sürümü. İlk sürüm tek dosyalık bir Express + Socket.IO uygulamasıydı ve gerçek zamanlı forum odaları içeriyordu; arşiv olarak github.com/Yuceldayan/academ-x-v1 adresinde duruyor.",
    technologies: [
      "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL",
      "React", "Vite", "zod", "pdfjs-dist", "Docker", "JWT", "bcrypt",
    ],
    features: [
      "Üç seviyeli katalog: üniversite → bölüm → ders",
      "PDF yükleme, tür ve boyut doğrulaması",
      "Moderasyon kuyruğu; onaylanmadan görünmez",
      "pdfjs-dist ile tarayıcı içi görüntüleyici",
      "Favori, beğeni ve yorum",
      "httpOnly çerezde JWT, rol bazlı rota koruması",
      "19 test paketi, Docker Compose geliştirme ortamı",
    ],
    repoUrl: "https://github.com/Yuceldayan/academix-2.0",
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-07-14T00:00:00Z",
    displayOrder: 2,
  },
  {
    id: 3,
    title: "HazırGrup — Grup Etkinlik Planlama Platformu",
    shortDescription: [
      "Grup kur, bütçe ve tarih gir, uygun mekân paketlerini gör",
      "Arkadaşlarını bağlantıyla davet et, birlikte oy verin",
      "Kazanan paket için işletmeye rezervasyon talebi gider",
      "479 birim/entegrasyon + 44 uçtan uca test",
    ].join("\n"),
    description:
      "Arkadaş gruplarının 'nereye gidelim?' sorusunu tek akışta çözen şehir bazlı platform.",
    longDescription:
      "Arkadaş gruplarının \"nereye gidelim?\" sorusunu tek akışta çözüyor. Grup kuruluyor, kişi sayısı, bütçe ve tarih giriliyor, uygun mekân paketleri listeleniyor, arkadaşlar bağlantıyla davet edilip birlikte oy veriyor ve kazanan paket için işletmeye rezervasyon talebi gidiyor.\n\nMonorepo olarak kurdum: Next.js web uygulaması, Expo mobil uygulaması ve dört paylaşılan paket — core (iş mantığı), types, ui (tasarım tokenları) ve validation.\n\nVeri erişimini adaptör deseniyle yazdım: uygulama katmanı verinin Supabase'den mi yoksa bellek içi demo deposundan mı geldiğini bilmiyor. Bu sayede depo klonlandığı anda hiçbir hesap açmadan çalışıyor; Supabase eklendiğinde tek satır uygulama kodu değişmiyor.\n\nSupabase şemasını, 13 migration'ı ve row-level security politikalarını yazdım. RLS politikaları asıl otorite; sunucu tarafındaki kontroller ve rota korumaları bunu tekrarlıyor. Davet tokenları veritabanında yalnızca SHA-256 özet olarak saklanıyor.\n\n479 birim/entegrasyon testi ve 44 uçtan uca test yazdım; ayrıca RLS politikaları için ayrı bir SQL test paketi var.",
    technologies: [
      "Next.js", "TypeScript", "React", "Expo", "Supabase",
      "PostgreSQL", "Tailwind CSS", "zod", "Vitest", "Playwright",
    ],
    features: [
      "7 adımlı plan sihirbazı",
      "Hesap açmadan davet ve oylama",
      "İşletme paneli: paket yönetimi, rezervasyon onayı",
      "Yönetici paneli, başvuru inceleme ve denetim kaydı",
      "Expo ile mobil uygulama",
      "Anahtarsız çalışan demo modu",
      "479 birim/entegrasyon + 44 uçtan uca test",
    ],
    repoUrl: "https://github.com/Yuceldayan/hazirgrup",
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-07-29T00:00:00Z",
    displayOrder: 3,
  },
  {
    id: 4,
    title: "Portfolio ve İçerik Yönetim Sistemi",
    shortDescription: [
      "Şu an baktığınız site — arkasında tam bir CMS var",
      "Projeler, deneyimler ve mesajlar admin panelinden yönetilir",
      "İçerik değişikliği için yeniden deploy gerekmiyor",
      "Spring Boot API + React 18 istemci, ikisi de bana ait",
    ].join("\n"),
    description:
      "İçeriği admin panelinden yönetilen kişisel site ve arkasındaki Spring Boot REST API.",
    longDescription:
      "Şu an baktığınız site. Arkasında tam bir içerik yönetim sistemi var: projeler, deneyimler, hakkımda metni ve gelen iletişim mesajları admin panelinden yönetiliyor. İçerik değiştirmek için kod değiştirmek ya da yeniden deploy etmek gerekmiyor.\n\nBackend'de controller'ları iki ayrı pakete böldüm — herkese açık okuma uçları ve kimlik doğrulaması gereken yazma uçları. Yetkilendirme böylece rotanın bir özelliği oluyor; servislerin içine dağılmış kontrollere bağlı kalmıyor.\n\nServisleri arayüz + implementasyon olarak ayırdım ve DTO'ları alan bazında paketledim, böylece JPA entity'leri API sınırının dışına hiç çıkmıyor. Hatalar tek bir GlobalExceptionHandler üzerinden yönetiliyor.\n\nŞema migration güdümlü: dokuz Flyway migration'ı ve ddl-auto: validate. Şema hiçbir zaman otomatik üretilmiyor, her değişiklik sürüm kontrolünde duruyor. JWT hem httpOnly çerezden hem Authorization başlığından okunuyor; aynı API'yi tarayıcı istemcisi de doğrudan istekler de kullanabiliyor.\n\nFrontend'de tüm ağ trafiği tek bir axios örneğinden geçiyor, her kaynak için ayrı modül var; hiçbir bileşen doğrudan ağa çıkmıyor. SEO tarafında meta etiketleri, robots.txt, sitemap.xml ve Open Graph görseli mevcut.\n\nİki repo hâlinde duruyor: arayüz github.com/Yuceldayan/yucel-portfolio-frontend, API github.com/Yuceldayan/yucel-portfolio-backend.",
    technologies: [
      "React 18", "Vite", "Tailwind CSS", "React Router", "Axios",
      "Java 21", "Spring Boot", "Spring Security", "PostgreSQL",
      "Flyway", "JWT", "Docker",
    ],
    features: [
      "Admin panelinden tam içerik yönetimi",
      "Public / admin controller ayrımı",
      "9 Flyway migration, migration güdümlü şema",
      "JWT: httpOnly çerez veya Authorization başlığı",
      "SEO: meta etiketleri, sitemap, Open Graph",
      "Çok aşamalı Dockerfile",
      "API kapalıyken paketlenmiş içerikle çalışan yedek katman",
    ],
    repoUrl: "https://github.com/Yuceldayan/yucel-portfolio-frontend",
    liveUrl: "https://yuceldayan.vercel.app",
    coverImageUrl: null,
    createdAt: "2026-01-28T00:00:00Z",
    displayOrder: 4,
  },
  {
    id: 5,
    title: "Zagros Dijital — Kurumsal Site ve Talep Toplama Platformu",
    shortDescription: [
      "Bir dijital ajans için kurumsal site ve dönüşüm platformu",
      "Hizmet, sektör, proje ve rehber içerikleri panelden yönetilir",
      "Teklif ve ücretsiz analiz formlarıyla talep toplama",
      "13 SQL migration, row-level security, Vitest + Playwright",
    ].join("\n"),
    description:
      "Bir dijital ajans için içerik yönetimli kurumsal site ve talep toplama platformu.",
    longDescription:
      "Bir dijital ajans için geliştirdiğim kurumsal site ve talep toplama platformu. Ziyaretçiler hizmetleri ve sektörleri geziyor, rehber içeriklerini okuyor, geçmiş projeleri inceliyor ve teklif talebi ya da ücretsiz dijital analiz formuyla dönüşüyor.\n\nBilgi mimarisi, Next.js uygulaması, Supabase şeması ve row-level security politikaları, içerik yönetim paneli, SEO ve erişilebilirlik çalışması ile test altyapısı bana ait.\n\nHerkese açık site ile yönetim paneli tek uygulamada ama ayrı rota gruplarında; düzenleri birbirine karışmıyor. Veri erişim katmanı server-only ile korunuyor, böylece Supabase servis anahtarları istemci paketine hiçbir şekilde sızamıyor.\n\nsitemap, robots ve Open Graph metadata'sı sayfaların render ettiği içerikten üretiliyor; ikisi birbirinden ayrışamıyor. 13 sıralı SQL migration, Vitest ve Playwright test paketleri var. Kararların gerekçeleri 22 ayrı doküman olarak repoda duruyor.",
    technologies: [
      "Next.js", "TypeScript", "React", "Supabase", "PostgreSQL",
      "Tailwind CSS", "zod", "Vitest", "Playwright",
    ],
    features: [
      "İçerik yönetim paneli",
      "13 SQL migration + row-level security",
      "Teklif ve ücretsiz analiz dönüşüm akışları",
      "Sitemap, robots ve Open Graph üretimi",
      "Erişilebilirlik ve SEO test paketleri",
      "22 strateji ve karar dokümanı",
    ],
    repoUrl: null,
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-07-01T00:00:00Z",
    displayOrder: 5,
  },
  {
    id: 6,
    title: "SensKids E-Ticaret Web Sitesi",
    shortDescription: [
      "STEM oyuncak markası için WooCommerce e-ticaret altyapısı",
      "Ödeme, sipariş takibi ve ürün yönetimi entegrasyonları",
      "Tasarımcı bir arkadaşımla ikili çalışma",
    ].join("\n"),
    description:
      "STEM oyuncak markası için kurduğum WooCommerce tabanlı e-ticaret altyapısı.",
    longDescription:
      "STEM oyuncak markası SensKids için e-ticaret altyapısını kurdum. Tasarım yönünü tasarımcı bir arkadaşım belirledi, siteyi ben kurdum ve kodladım.\n\nWordPress ve React tabanlı e-ticaret modüllerini geliştirdim; WooCommerce ödeme sistemi, sipariş takibi ve ürün yönetimi entegrasyonlarını tamamladım. Mobil uyumluluk ve site performansı optimizasyonu benim sorumluluğumdaydı.",
    technologies: ["WordPress", "WooCommerce", "PHP", "React", "CSS"],
    features: [
      "WooCommerce ödeme entegrasyonu",
      "Sipariş takibi",
      "Ürün yönetimi",
      "Mobil uyumluluk ve performans optimizasyonu",
    ],
    repoUrl: null,
    liveUrl: "https://senskids.com.tr",
    coverImageUrl: null,
    createdAt: "2025-08-01T00:00:00Z",
    displayOrder: 6,
  },
  {
    id: 7,
    title: "Tsunami Tarım & Hayvancılık Web Sitesi",
    shortDescription: [
      "Kurumsal tanıtım sitesi: hizmetler, ürünler ve iletişim",
      "HTML, CSS ve JavaScript ile duyarlı tasarım",
      "İlk web projelerimden biri",
    ].join("\n"),
    description: "Kurumsal tanıtım web sitesi.",
    longDescription:
      "Tsunami Tarım & Hayvancılık için hizmet ve ürün bilgilerini kullanıcı dostu biçimde sunan kurumsal tanıtım sitesi. HTML, CSS ve JavaScript ile geliştirdiğim ilk web projelerimden biri; sayfa yapısı, duyarlı düzen, temel etkileşimler ve içerik yerleşimi üzerinde çalıştım.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Duyarlı tasarım", "Hizmet ve ürün tanıtım sayfaları"],
    repoUrl: null,
    liveUrl: "https://www.tsunamitarimhayvancilik.com/",
    coverImageUrl: null,
    createdAt: "2025-03-01T00:00:00Z",
    displayOrder: 7,
  },
  {
    id: 9,
    title: "VR/AR Başlıklarının Evrimi ve Kullanıcı Deneyimi",
    shortDescription: [
      "1968'den 2024'e VR/AR başlıklarının gelişimini anlatan tek sayfalık sunum",
      "Çözülmemiş kullanıcı deneyimi sorunları tek tek ele alınıyor",
      "Çerçevesiz: elle yazılmış HTML ve CSS, derleme adımı yok",
      "30+ görsel webp/avif olarak sayfa hafif kalsın diye seçildi",
    ].join("\n"),
    description:
      "VR/AR başlıklarının 1968–2024 arası gelişimini ve hâlâ çözülmemiş kullanıcı deneyimi sorunlarını anlatan tek sayfalık interaktif sunum.",
    longDescription:
      "Sutherland'ın 1968'deki ilk başlığından 2024'e uzanan bir zaman çizelgesi; her dönem kendi görselleriyle anlatılıyor. İkinci bölümde başlıkların hâlâ çözemediği kullanıcı deneyimi sorunları tek tek ele alınıyor: ergonomi ve ağırlık, denge bozulması, fiziksel rahatsızlık, kalabalık arayüzler, lens ve görüş sınırları, ses, dil desteği, bağlantı kopmaları, gizlilik ve maliyet.\n\nTek bir index.html ve elle yazılmış bir styles.css'ten oluşuyor — çerçeve kullanmadım. Düzen, geçişler ve duyarlı davranışın tamamı düz CSS. Otuzdan fazla görsel; her biri için webp, avif, png veya jpg'den hangisi daha hafifse o seçildi.\n\nAraştırma, metin, görsel seçimi, tasarım ve kodlama bana ait.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "1968–2024 arası dönemlere ayrılmış zaman çizelgesi",
      "On başlıkta kullanıcı deneyimi sorunu analizi",
      "Çerçevesiz, derleme adımsız tek sayfa",
      "Görsel başına biçim seçimiyle sayfa ağırlığı optimizasyonu",
    ],
    repoUrl: "https://github.com/Yuceldayan/vr-ar-ux-presentation",
    liveUrl: "https://yuceldayan.github.io/vr-ar-ux-presentation/",
    coverImageUrl: null,
    createdAt: "2025-12-01T00:00:00Z",
    displayOrder: 8,
  },
];

export const fallbackAbout = {
  id: 1,
  title: "Hakkımda",
  subtitle: "Software Developer · Bilgisayar Mühendisi",
  bio:
    "Yeni mezun bir Bilgisayar Mühendisiyim. React ve Java Spring Boot ile uçtan uca web uygulamaları geliştiriyorum; Node.js, TypeScript ve PostgreSQL ile üretim seviyesinde projeler kurdum. Bitirme projemde YOLOv8 ve InsightFace ile bilgisayarlı görüyü üç servisli bir mimariye entegre ettim.\n\nÇalışma biçimim katmanlı mimari, test edilebilir kod ve yazılı dokümantasyon üzerine kurulu. Her projemin GitHub reposunda mimari açıklaması, kurulum talimatı ve projedeki rolüm ayrıca belirtilmiştir — koda bakmadan önce ne yaptığımı okuyabilirsiniz.\n\nTam zamanlı pozisyonlar için görüşmeye açığım; taşınmaya ve hibrit/uzaktan çalışmaya da açığım.",
  highlights: [
    "Uçtan uca web geliştirme: React + Java Spring Boot",
    "Bilgisayarlı görü entegrasyonu: YOLOv8, InsightFace",
    "Katmanlı mimari, test edilebilir kod ve yazılı dokümantasyon",
    "T3 Vakfı'nda 2 yıl gönüllü yazılım eğitmenliği",
  ],
  educationSchool: "Harran Üniversitesi",
  educationDepartment: "Bilgisayar Mühendisliği (Lisans)",
  educationYear: "Eylül 2022 – Haziran 2026",
  educationDesc:
    "Bitirme projesi: GSS — Yapay Zekâ Destekli Güvenli Online Sınav ve Gözetim Sistemi.",
  educationTags: ["Bilgisayar Mühendisliği", "Bitirme Projesi: GSS"],
  goalsDesc:
    "Uçtan uca ürün geliştiren, mimarisini kuran ve kararlarının gerekçesini yazan bir yazılım geliştirici olmak.",
  goalsTags: ["Full-stack", "Sistem tasarımı", "Bilgisayarlı görü"],
  techFrontend: [
    "React", "Next.js", "TypeScript", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "MUI",
  ],
  techBackend: [
    "Java Spring Boot", "Node.js", "Express", "FastAPI", "REST API",
    "PostgreSQL", "JPA/Hibernate", "Prisma", "Flyway", "Supabase",
  ],
  techTools: [
    "Git", "GitHub", "Docker", "Vercel", "Render",
    "Linux", "Vitest", "Playwright", "OpenCV", "YOLOv8",
  ],
};

export const fallbackExperiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "SensKids",
    location: "Ankara, Türkiye",
    startDate: "Haziran 2025",
    endDate: "Ağustos 2025",
    isCurrent: false,
    published: true,
    orderIndex: 1,
    description:
      "Tasarımcı bir arkadaşımla ikili çalıştım: tasarım yönünü o belirledi, uygulamayı ben kurdum ve kodladım.",
    bulletsText: [
      "WordPress ve React tabanlı e-ticaret modüllerini kodladım.",
      "WooCommerce ödeme sistemi, sipariş takibi ve ürün yönetimi entegrasyonlarını tamamladım.",
      "Mobil uyumluluk ve site performansı optimizasyonunu üstlendim.",
    ].join("\n"),
    technologiesText: "WordPress, WooCommerce, PHP, React, CSS",
  },
  {
    id: 2,
    role: "Frontend Developer (Gönüllü)",
    company: "Claridad",
    location: "Uzaktan",
    startDate: "Haziran 2024",
    endDate: "Ağustos 2024",
    isCurrent: false,
    published: true,
    orderIndex: 2,
    description:
      "10 kişilik bir ekipte gönüllü olarak yer aldım. Aşağıdakiler benim sorumluluğumdaki parçalardı.",
    bulletsText: [
      "React tarafındaki CSV upload ve çoklu dosya yükleme modüllerini tasarlayıp entegre ettim.",
      "Yükleme sürecinde ilerleme takibini (progress tracking) geliştirdim.",
      "Git ile versiyon kontrolü ve branch yönetimi süreçlerinde aktif rol aldım.",
    ].join("\n"),
    technologiesText: "React, JavaScript, Git",
  },
  {
    id: 3,
    role: "Yazılım Eğitmeni & Mentör (Gönüllü)",
    company: "T3 Vakfı",
    location: "Şanlıurfa, Türkiye",
    startDate: "Ocak 2023",
    endDate: "Ocak 2025",
    isCurrent: false,
    published: true,
    orderIndex: 3,
    description:
      "İki yıl boyunca ortaokul ve lise öğrencilerine haftalık uygulamalı yazılım ve teknoloji eğitimi verdim.",
    bulletsText: [
      "Temel programlama ve algoritma konularında ders anlattım.",
      "Öğrencilere kendi projelerini geliştirme sürecinde birebir mentörlük yaptım.",
      "Haftalık ders içeriklerini uygulamalı olacak şekilde hazırladım.",
    ].join("\n"),
    technologiesText: "Eğitim, Mentörlük, Algoritma",
  },
  {
    id: 4,
    role: "Yönetim Kurulu Üyesi",
    company: "TEKNOFEST Kulübü — Harran Üniversitesi",
    location: "Şanlıurfa, Türkiye",
    startDate: "2024",
    endDate: "Haziran 2026",
    isCurrent: false,
    published: true,
    orderIndex: 4,
    description:
      "Kulübün yönetim kurulunda görev aldım.",
    bulletsText: [
      "Kulüp faaliyetlerinin planlanmasında görev aldım.",
      "Teknik proje ekipleri arasındaki koordinasyon süreçlerini yürüttüm.",
      "Yarışma başvuru ve hazırlık takvimlerinin takibine katkı verdim.",
    ].join("\n"),
    technologiesText: "Ekip Koordinasyonu, Etkinlik Planlama",
  },
];
