import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Award, Globe, Rocket, Users, GraduationCap, ArrowRight,
  Sparkles, HeartPulse, Brain, Accessibility, Linkedin, Github, Mail,
  Calendar, MapPin, Languages,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Counter } from "@/components/Counter";
import { Lightbox, openLightbox } from "@/components/Lightbox";
import { useT } from "@/lib/i18n";
import profileImg from "@/assets/leonardo-profile.jpg";
import microidCover from "@/assets/microidlab-cover.jpg";
import healthgitCover from "@/assets/healthgit-cover.jpg";
import teacessoCover from "@/assets/teacesso-cover.jpg";
import teacessoBuildathon from "@/assets/teacesso-buildathon.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Leonardo Oliveira Rodrigues Cardoso — Health Innovation & AI" },
      { name: "description", content: "Nursing student, healthcare innovator and entrepreneur. Harvard HSIL 2026 Champion. Building AI-powered diagnostics and accessible healthcare technologies." },
      { property: "og:title", content: "Leonardo Oliveira Rodrigues Cardoso — Health Innovation & AI" },
      { property: "og:description", content: "Building impactful healthcare technologies through AI, diagnostics and innovation." },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
      <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
      {children}
    </div>
  );
}

function LangToggle() {
  const { lang, toggle } = useT();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:border-primary hover:text-primary transition"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className={lang === "en" ? "text-primary" : ""}>EN</span>
      <span className="opacity-40">/</span>
      <span className={lang === "pt" ? "text-primary" : ""}>PT</span>
    </button>
  );
}

function Nav() {
  const { t } = useT();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5 mx-3 md:mx-auto">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">L</span>
          <span className="hidden sm:inline">Leonardo O. R. Cardoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">{t.nav.about}</a>
          <a href="#projects" className="hover:text-foreground transition">{t.nav.projects}</a>
          <a href="#achievements" className="hover:text-foreground transition">{t.nav.awards}</a>
          <a href="#contact" className="hover:text-foreground transition">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition">
            {t.nav.cta} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <Particles count={80} />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
          </motion.div>
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-normal"
          >
            <span className="text-gradient">Leonardo</span><br />
            <span className="text-foreground">Oliveira Rodrigues</span><br />
            <span className="italic text-emerald-glow">Cardoso</span>
          </motion.h1>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t.hero.tagline}
          </motion.p>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-3 text-sm uppercase tracking-[0.25em] text-primary/80">
            {t.hero.role}
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_var(--emerald-glow)] hover:shadow-[0_0_60px_-5px_var(--emerald-glow)] transition-all">
              {t.hero.viewProjects} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-7 py-3.5 text-sm font-semibold">
              {t.hero.aboutMe}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/20 blur-2xl animate-pulse-glow" />
          <div className="relative overflow-hidden rounded-[2rem] glass glow-ring">
            <img src={profileImg} alt="Leonardo Oliveira Rodrigues Cardoso" width={768} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" /> {t.hero.location}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const { t } = useT();
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-float" />
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="relative mx-auto max-w-4xl text-center"
      >
        <SectionLabel>{t.about.label}</SectionLabel>
        <h2 className="text-4xl md:text-6xl leading-tight">
          {t.about.headlineA} <span className="italic text-emerald-glow">{t.about.innovator}</span><br />
          {t.about.headlineB}
        </h2>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{t.about.p1a}<span className="text-foreground">{t.about.p1b}</span>{t.about.p1c}</p>
          <p>{t.about.p2a}<span className="text-foreground">{t.about.p2b}</span>{t.about.p2c}</p>
          <p>{t.about.p3a}<span className="text-primary">{t.about.p3b}</span></p>
        </div>
      </motion.div>
    </section>
  );
}

const achIcons = [Award, Globe, Rocket, Users, GraduationCap];

function Achievements() {
  const { t } = useT();
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>{t.achievements.label}</SectionLabel>
            <h2 className="text-4xl md:text-5xl">{t.achievements.headline} <span className="italic text-emerald-glow">{t.achievements.headlineItalic}</span></h2>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={41} suffix="+" /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.achievements.countries}</div>
            </div>
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={93} /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.achievements.teams}</div>
            </div>
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={1} /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.achievements.champion}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.achievements.items.map((a, i) => {
            const Icon = achIcons[i];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-2xl glass glass-hover p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:from-primary/40 transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const projectMeta = [
  { img: microidCover, gallery: [microidCover, g1, g2, g3, g4], title: "MicroID Lab", tags: ["AI", "Diagnostics", "Healthcare", "Harvard HSIL 2026"] },
  { img: healthgitCover, title: "HealthGit", tags: ["Blockchain", "AI", "Healthcare", "Solana"] },
  { img: teacessoBuildathon, gallery: [teacessoBuildathon, teacessoCover], title: "TEAcesso", tags: ["Accessibility", "Social Impact", "AI", "Lovable Buildathon"] },
];

function Projects() {
  const { t } = useT();
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>{t.projects.label}</SectionLabel>
          <h2 className="text-4xl md:text-6xl">{t.projects.headlineA} <span className="italic text-emerald-glow">{t.projects.headlineB}</span> {t.projects.headlineC}</h2>
        </div>

        <div className="space-y-10">
          {projectMeta.map((p, i) => {
            const tr = t.projects.items[i];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group grid gap-8 rounded-3xl glass p-6 md:p-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() => openLightbox(p.img, p.title)}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 z-10 pointer-events-none" />
                    <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </button>
                  {p.gallery && p.gallery.length > 1 && (
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {p.gallery.slice(1).map((src, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => openLightbox(src, `${p.title} — ${idx + 2}`)}
                          className="relative aspect-square overflow-hidden rounded-lg border border-primary/15 cursor-zoom-in"
                        >
                          <img src={src} alt={`${p.title} — ${idx + 2}`} loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">0{i + 1} — {t.projects.projectN}</div>
                  <h3 className="text-3xl md:text-4xl font-display mb-2">{p.title}</h3>
                  <p className="text-lg text-foreground/80 mb-4">{tr.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{tr.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">{tag}</span>
                    ))}
                  </div>
                  <button className="group/btn inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition">
                    {t.projects.explore} <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const experienceMeta = [
  { year: "2026", title: "Harvard HSIL 2026" },
  { year: "2025", title: "START SP Ecosystem" },
  { year: "2025" },
  { year: "2024" },
  { year: "2024" },
  { year: "2023" },
];

function Experience() {
  const { t } = useT();
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>{t.experience.label}</SectionLabel>
        <h2 className="text-4xl md:text-5xl mb-16">{t.experience.headlineA} <span className="italic text-emerald-glow">{t.experience.headlineB}</span></h2>

        <div className="relative">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {experienceMeta.map((m, i) => {
            const e = t.experience.items[i];
            const title = m.title ?? e.title ?? "";
            return (
              <motion.div
                key={title + i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-10 pb-10"
              >
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_var(--emerald-glow)]" />
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary mb-1">
                  <Calendar className="h-3.5 w-3.5" /> {m.year} · {e.place}
                </div>
                <h3 className="text-xl md:text-2xl font-display mb-1">{title}</h3>
                <p className="text-muted-foreground">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const valueIcons = [Brain, HeartPulse, Accessibility];

function Values() {
  const { t } = useT();
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>{t.values.label}</SectionLabel>
          <h2 className="text-4xl md:text-5xl">{t.values.headlineA} <span className="italic text-emerald-glow">{t.values.headlineB}</span></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.values.items.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl glass p-8 md:p-10 text-center"
              >
                <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl opacity-50 group-hover:opacity-100 transition duration-700" />
                <div className="relative">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_40px_-5px_var(--emerald-glow)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-display mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: g1, h: "row-span-2" },
  { src: g2, h: "" },
  { src: g3, h: "" },
  { src: g4, h: "row-span-2" },
];

function Gallery() {
  const { t } = useT();
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <SectionLabel>{t.gallery.label}</SectionLabel>
          <h2 className="text-4xl md:text-5xl">{t.gallery.headlineA} <span className="italic text-emerald-glow">{t.gallery.headlineB}</span> {t.gallery.headlineC}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {gallery.map((g, i) => (
            <motion.button
              type="button"
              key={i}
              onClick={() => openLightbox(g.src, "Gallery")}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl glass cursor-zoom-in ${g.h}`}
            >
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-12 md:p-20 text-center glow-ring"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
          <div className="relative">
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="text-4xl md:text-6xl leading-tight mb-8">
              {t.contact.headlineA} <span className="italic text-emerald-glow">{t.contact.headlineB}</span> {t.contact.headlineC}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://www.linkedin.com/in/leonardo-orc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--emerald-glow)] hover:shadow-[0_0_50px_-5px_var(--emerald-glow)] transition-all">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:lo140849@gmail.com" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold">
                <Mail className="h-4 w-4" /> lo140849@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <div className="font-display text-base">Leonardo Oliveira Rodrigues Cardoso © 2026</div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.footer.tagline}</div>
        </div>
        <div className="text-xs text-muted-foreground">{t.footer.built}</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Experience />
      <Values />
      <Gallery />
      <Contact />
      <Footer />
      <Lightbox />
    </main>
  );
}
