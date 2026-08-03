// src/pages/HomePage.jsx
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";

import { getProjects } from "../api/projects";
import { getAbout } from "../api/about";
import { getExperiences } from "../api/experiences";

import ProjectDetailModal from "../components/ProjectDetailModal";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  const [projects, setProjects] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const [about, setAbout] = useState(null);

  // ✅ Experiences
  const [experiences, setExperiences] = useState([]);
  const [expLoading, setExpLoading] = useState(true);
  const [expErr, setExpErr] = useState("");

  useEffect(() => {
    // Projects
    // loading ve err zaten bu değerlerle başlatılıyor, bu effect de yalnızca
    // mount'ta çalışıyor; burada tekrar atamak boş bir render turu ekliyordu.
    getProjects()
      .then((res) => {
        setProjects(res?.data?.data || []);
      })
      .catch((e) => {
        setErr(
          e?.uiMessage ||
            e?.response?.data?.message ||
            e?.message ||
            "Bir hata oluştu"
        );
      })
      .finally(() => setLoading(false));

    // About (Public)
    getAbout()
      .then((res) => setAbout(res?.data?.data || null))
      .catch(() => setAbout(null));

    // ✅ Experiences (Public) — expLoading/expErr de başlangıç değerleriyle aynı
    getExperiences()
      .then((res) => {
        // Backend'in cevabı bazen {data:{data:[]}} bazen direkt [] olabiliyor
        const payload = res?.data?.data ?? res?.data ?? [];
        setExperiences(Array.isArray(payload) ? payload : []);
      })
      .catch((e) => {
        setExpErr(
          e?.response?.data?.message ||
            e?.message ||
            "Deneyimler yüklenemedi."
        );
        setExperiences([]);
      })
      .finally(() => setExpLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return projects;

    return projects.filter((p) => {
      const t = (p.title || "").toLowerCase();
      const d = (p.description || "").toLowerCase();
      return t.includes(s) || d.includes(s);
    });
  }, [q, projects]);

  const contactInfo = [
    {
      icon: "📧",
      label: "E-posta",
      value: "dayanyucel14@gmail.com",
      link: "mailto:dayanyucel14@gmail.com",
    },
    {
      icon: "📱",
      label: "Telefon",
      value: "+90 541 157 91 58",
      link: "tel:+905411579158",
    },
    { icon: "📍", label: "Konum", value: "Mersin, Türkiye", link: null },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yucel-dayan",
      link: "https://www.linkedin.com/in/yucel-dayan",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/yucel-dayan",
      variant: "primary",
    },
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/Yuceldayan",
      variant: "ghost",
    },
    {
      name: "Email",
      icon: "✉️",
      url: "mailto:dayanyucel14@gmail.com",
      variant: "soft",
    },
  ];

  const handleOpenProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) setSelectedProject(project);
  };

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <>
      <Helmet>
        <title>Ana Sayfa | Yücel Dayan</title>
        <meta
          name="description"
          content="Yücel Dayan – Full-Stack Developer. React ve modern web teknolojileriyle kullanıcı odaklı web uygulamaları geliştiriyorum."
        />
      </Helmet>

      <div className="flex flex-col gap-16 md:gap-20">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section (backend data) */}
        <AboutSection about={about} />

        {/* Projects Section */}
        <ProjectsSection
          query={q}
          onQueryChange={setQ}
          filtered={filtered}
          loading={loading}
          err={err}
          onOpenProject={handleOpenProject}
          onClearQuery={() => setQ("")}
        />

        {/* ✅ Experiences Section */}
        {expLoading ? (
          <section id="experience" className="scroll-mt-24">
            <div className="px-6 py-16 md:px-10">
              <div className="mx-auto max-w-5xl">
                <p className="text-white/70 text-sm">
                  Deneyimler yükleniyor...
                </p>
              </div>
            </div>
          </section>
        ) : expErr ? (
          <section id="experience" className="scroll-mt-24">
            <div className="px-6 py-16 md:px-10">
              <div className="mx-auto max-w-5xl">
                <p className="text-red-200/90 text-sm">{expErr}</p>
              </div>
            </div>
          </section>
        ) : (
          <ExperienceSection items={experiences} />
        )}

        {/* Contact Section */}
        <ContactSection contactInfo={contactInfo} socialLinks={socialLinks} />

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}
