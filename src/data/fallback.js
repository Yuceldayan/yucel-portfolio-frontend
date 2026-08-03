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

export const fallbackProjects = [
  {
    id: 1,
    title: "GSS — Yapay Zekâ Destekli Güvenli Online Sınav ve Gözetim Sistemi",
    shortDescription:
      "Yüz tanıma, nesne tespiti ve ses analiziyle online sınav gözetimi. Bitirme projem.",
    description:
      "Online sınavda kimlik doğrulama ve gözetim yapan üç servisli sistem.",
    longDescription:
      "Bitirme projem. Online sınavı yapmak kolay, güvenmek zor. GSS önce sınava girenin kim olduğunu doğruluyor, sonra oturumu bir gözetmenin fark edeceği şeylere karşı izliyor: masanın altındaki telefon, karede beliren ikinci yüz, konuşma sesi, kameradan çıkma.\n\nÜç servisin de mimarisini ve kodunu tek başıma yazdım. Spring Boot API'de 13 controller, 13 JPA entity, Flyway migration zinciri ve JWT ile rol bazlı yetkilendirme var. React arayüzü öğrenci, öğretmen ve yönetici olmak üzere üç ayrı yüzeyden oluşuyor, i18next ile Türkçe/İngilizce çalışıyor. Görü işlemleri ayrı bir FastAPI servisinde: InsightFace Buffalo_L ile 512 boyutlu L2-normalize yüz embedding'i, YOLOv8 + Open Images V7 ile telefon/tablet/kulaklık tespiti, Web Audio API metrikleriyle ses seviyesi analizi.\n\nJava tarafını model bağımlılıklarından uzak tutmak için görüyü ayrı servise sunucudan sunucuya taşıdım. Tarayıcı tarafında da sekme değişimi, odak kaybı ve tam ekrandan çıkış denetimi var.",
    technologies: [
      "Java 21", "Spring Boot 4", "PostgreSQL", "Flyway", "JWT",
      "React", "MUI", "i18next", "Python", "FastAPI",
      "YOLOv8", "InsightFace", "ONNX Runtime",
    ],
    features: [
      "Yüz kaydı ve sınav öncesi kimlik doğrulama",
      "Telefon, tablet ve kulaklık tespiti",
      "Ses seviyesi analizi",
      "Sekme değişimi ve tam ekrandan çıkış denetimi",
      "Öğretmen için canlı gözetim paneli ve olay zaman çizelgesi",
      "Öğrenci bazlı risk özeti",
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
    shortDescription:
      "PDF yükleme, moderasyon ve tarayıcı içi görüntüleyici. Uçtan uca TypeScript.",
    description:
      "Üniversite → bölüm → ders hiyerarşisinde ders notu ve çıkmış soru paylaşımı.",
    longDescription:
      "Üniversite, bölüm ve ders hiyerarşisinde ders notu ve çıkmış soru paylaşılan bir platform. Yüklenen PDF'ler moderasyondan geçmeden görünür olmuyor.\n\nUçtan uca TypeScript: Express + Prisma API'si ve React istemcisi tek repoda, tipleri ve test kurulumunu paylaşıyorlar. Sekiz Prisma modeli ve arkasındaki migration zincirini ben tasarladım. Altı alan modülünün her birini controller → service → repository ayrımında kurdum; doğrulama uçta zod şemalarıyla, hatalar tek bir error-handler üzerinden yönetiliyor.\n\nPDF yükleme hattı, depolama adaptörü ve erişim kuralları da bana ait — moderasyondan geçmemiş bir doküman hangi rotadan istenirse istensin erişilemiyor. 19 test paketi ve tek komutla ayağa kalkan Docker geliştirme ortamı var.",
    technologies: [
      "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL",
      "React", "Vite", "zod", "pdfjs-dist", "Docker", "JWT",
    ],
    features: [
      "Üç seviyeli katalog: üniversite → bölüm → ders",
      "PDF yükleme ve moderasyon kuyruğu",
      "Tarayıcı içi PDF görüntüleyici",
      "Favori, beğeni ve yorum",
      "httpOnly çerezde JWT, rol bazlı rota koruması",
      "19 test paketi",
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
    shortDescription:
      "Grup kur, paket seç, arkadaşlarınla oyla, rezervasyon gönder. Web + mobil.",
    description:
      "Arkadaş gruplarının 'nereye gidelim?' sorusunu tek akışta çözen şehir bazlı platform.",
    longDescription:
      "Grup kurulur, kişi sayısı, bütçe ve tarih girilir, uygun mekân paketleri listelenir, arkadaşlar bağlantıyla davet edilip birlikte oy verir ve kazanan paket için işletmeye rezervasyon talebi gider.\n\nMonorepo olarak kurdum: Next.js web uygulaması, Expo mobil uygulaması ve dört paylaşılan paket (core, types, ui, validation). Supabase şemasını, 13 migration'ı ve row-level security politikalarını yazdım; RLS için ayrı bir SQL test paketi hazırladım.\n\nVeri erişimini adaptör deseniyle kurdum: Supabase anahtarı tanımlı değilken uygulama otomatik demo moduna düşüyor ve hiçbir kurulum gerekmeden tüm akış çalışıyor. 479 birim/entegrasyon ve 44 uçtan uca test yazdım.",
    technologies: [
      "Next.js", "TypeScript", "React", "Expo", "Supabase",
      "PostgreSQL", "Tailwind", "Vitest", "Playwright",
    ],
    features: [
      "7 adımlı plan sihirbazı",
      "Hesap açmadan davet ve oylama",
      "İşletme paneli: paket yönetimi, rezervasyon onayı",
      "Yönetici paneli ve denetim kaydı",
      "Expo ile mobil uygulama",
      "479 birim + 44 uçtan uca test",
    ],
    repoUrl: "https://github.com/Yuceldayan/hazirgrup",
    liveUrl: null,
    coverImageUrl: null,
    createdAt: "2026-07-29T00:00:00Z",
    displayOrder: 3,
  },
  {
    id: 4,
    title: "Full-Stack Portfolio ve İçerik Yönetim Sistemi",
    shortDescription:
      "Şu an baktığınız site. Admin panelinden yönetilen, Spring Boot destekli CMS.",
    description:
      "İçeriği admin panelinden yönetilen kişisel site ve arkasındaki REST API.",
    longDescription:
      "Şu an baktığınız site. Arkasında tam bir içerik yönetim sistemi var: projeler, deneyimler, hakkımda metni ve gelen iletişim mesajları admin panelinden yönetiliyor, içerik değiştirmek için kod değiştirmek gerekmiyor.\n\nBackend'de controller'ları iki ayrı pakete böldüm — herkese açık okuma uçları ve kimlik doğrulaması gereken yazma uçları. Servisler arayüz + implementasyon olarak ayrı, DTO'lar alan bazında paketli, böylece JPA entity'leri API sınırının dışına çıkmıyor. Şema migration güdümlü: 9 Flyway migration'ı ve ddl-auto: validate. JWT hem httpOnly çerezden hem Authorization başlığından okunuyor.\n\nFrontend'de tüm ağ trafiği tek bir axios örneğinden geçiyor, her kaynak için ayrı modül var. SEO tarafında meta etiketleri, robots.txt, sitemap.xml ve Open Graph görseli mevcut.",
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
    shortDescription:
      "Next.js + Supabase ile içerik yönetimli kurumsal site. Müşteri projesi.",
    description:
      "Bir dijital ajans için kurumsal site ve talep toplama platformu.",
    longDescription:
      "Bir dijital ajans için geliştirdiğim kurumsal site ve talep toplama platformu. Ziyaretçiler hizmetleri ve sektörleri geziyor, rehber içeriklerini okuyor, geçmiş projeleri inceliyor ve teklif talebi ya da ücretsiz dijital analiz formuyla dönüşüyor.\n\nBilgi mimarisi, Next.js uygulaması, Supabase şeması ve row-level security politikaları, içerik yönetim paneli, SEO ve erişilebilirlik çalışması ile test altyapısı bana ait. 13 sıralı SQL migration, Vitest ve Playwright test paketleri var. Metadata (sitemap, robots, Open Graph) sayfaların render ettiği içerikten üretiliyor, böylece birbirinden ayrışamıyor.\n\nMüşteri projesi olduğu için deposu özel.",
    technologies: [
      "Next.js", "TypeScript", "Supabase", "PostgreSQL",
      "Tailwind CSS", "zod", "Vitest", "Playwright",
    ],
    features: [
      "İçerik yönetim paneli",
      "13 SQL migration + row-level security",
      "Teklif ve ücretsiz analiz dönüşüm akışları",
      "Sitemap, robots ve Open Graph üretimi",
      "Erişilebilirlik ve SEO test paketleri",
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
    shortDescription:
      "STEM oyuncak markası için WooCommerce tabanlı e-ticaret sitesi.",
    description:
      "WordPress ve WooCommerce ile kurulan e-ticaret altyapısı.",
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
    shortDescription:
      "HTML, CSS ve JavaScript ile geliştirdiğim kurumsal tanıtım sitesi.",
    description:
      "Kurumsal tanıtım web sitesi.",
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
];

export const fallbackAbout = {
  id: 1,
  title: "Hakkımda",
  subtitle: "Software Developer · Bilgisayar Mühendisi",
  bio:
    "Yeni mezun bir Bilgisayar Mühendisiyim. React ve Java Spring Boot ile uçtan uca web uygulamaları geliştiriyorum; Node.js, TypeScript ve PostgreSQL ile üretim seviyesinde projeler kurdum. Bitirme projemde YOLOv8 ve InsightFace ile bilgisayarlı görüyü üç servisli bir mimariye entegre ettim.\n\nÇalışma biçimim: katmanlı mimari, test edilebilir kod ve yazılı dokümantasyon. Her projemin GitHub reposunda mimari açıklaması, kurulum talimatı ve projedeki rolüm ayrıca belirtilmiştir.\n\nTaşınmaya ve hibrit/uzaktan çalışmaya açığım.",
  highlights: [
    "Uçtan uca web geliştirme: React + Java Spring Boot",
    "Bilgisayarlı görü entegrasyonu: YOLOv8, InsightFace",
    "Katmanlı mimari ve test edilebilir kod",
    "T3 Vakfı'nda 2 yıl gönüllü yazılım eğitmenliği",
  ],
  educationSchool: "Harran Üniversitesi",
  educationDepartment: "Bilgisayar Mühendisliği (Lisans)",
  educationYear: "Eylül 2022 – Haziran 2026",
  educationDesc:
    "Bitirme projemde yapay zekâ destekli bir online sınav gözetim sistemi geliştirdim.",
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
      "Tasarımcı bir arkadaşımla ikili çalıştım; tasarım yönünü o belirledi, uygulamayı ben kurdum ve kodladım. WordPress ve React tabanlı e-ticaret modüllerini geliştirdim; WooCommerce ödeme sistemi, sipariş takibi ve ürün yönetimi entegrasyonlarını tamamladım. Mobil uyumluluk ve site performansı optimizasyonunu üstlendim.",
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
      "10 kişilik bir ekipte gönüllü olarak yer aldım. Benim sorumluluğumdaki parça React tarafındaki CSV upload, çoklu dosya yükleme ve progress tracking modülleriydi; bunları tasarlayıp entegre ettim. Git ile versiyon kontrolü ve branch yönetimi süreçlerinde aktif rol aldım.",
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
      "İki yıl boyunca ortaokul ve lise öğrencilerine haftalık uygulamalı yazılım ve teknoloji eğitimi verdim. Temel programlama, algoritma ve proje geliştirme konularında ders anlattım; öğrencilere proje geliştirme sürecinde birebir mentörlük yaptım.",
    technologiesText: "Eğitim, Mentörlük",
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
      "Kulüp faaliyetlerinin planlanmasında görev aldım; teknik proje ekipleri arasındaki koordinasyon süreçlerini yürüttüm.",
    technologiesText: "",
  },
];
