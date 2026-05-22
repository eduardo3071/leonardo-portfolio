import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Award, Globe, Rocket, Users, GraduationCap, ArrowRight,
  Sparkles, HeartPulse, Brain, Accessibility, Linkedin, Github, Mail,
  Calendar, MapPin,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Counter } from "@/components/Counter";
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

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5 mx-3 md:mx-auto">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">L</span>
          <span className="hidden sm:inline">Leonardo O. R. Cardoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#achievements" className="hover:text-foreground transition">Awards</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition">
          Get in touch <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <Particles count={80} />
      {/* floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Harvard HSIL 2026 Champion
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
            Building impactful healthcare technologies through artificial intelligence,
            diagnostics and innovation.
          </motion.p>
          <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-3 text-sm uppercase tracking-[0.25em] text-primary/80">
            Nursing Student • Health Innovation • AI & Entrepreneurship
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_var(--emerald-glow)] hover:shadow-[0_0_60px_-5px_var(--emerald-glow)] transition-all">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-7 py-3.5 text-sm font-semibold">
              About Me
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
                <MapPin className="h-3.5 w-3.5 text-primary" /> São Paulo · Brazil
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-float" />
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="relative mx-auto max-w-4xl text-center"
      >
        <SectionLabel>About</SectionLabel>
        <h2 className="text-4xl md:text-6xl leading-tight">
          A human-centered <span className="italic text-emerald-glow">innovator</span><br />
          at the edge of healthcare and AI.
        </h2>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Leonardo Oliveira Rodrigues Cardoso is a Nursing student at <span className="text-foreground">FCMSCSP</span>,
            passionate about healthcare innovation, artificial intelligence and entrepreneurship.
          </p>
          <p>
            He is currently the <span className="text-foreground">President of LATS</span> (Academic League
            of Health Technology), leading initiatives focused on digital transformation
            and technology applied to healthcare.
          </p>
          <p>
            Leonardo is deeply involved in innovation ecosystems, scientific research and startup
            communities, always seeking to create accessible solutions capable of generating
            <span className="text-primary"> real-world social impact</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

const achievements = [
  { icon: Award, title: "Harvard HSIL 2026 Champion", text: "Winner of the Harvard Health Systems Innovation Lab Hackathon in Brazil at Hub InovaHC." },
  { icon: Globe, title: "Global Harvard Circuit", text: "Selected among 93 teams from 41 countries in the international Harvard innovation circuit." },
  { icon: Rocket, title: "START SP", text: "Member of one of the world's largest startup ecosystems for young entrepreneurs, present in 22+ countries." },
  { icon: Users, title: "LATS President", text: "Leading healthcare technology initiatives and interdisciplinary innovation projects." },
  { icon: GraduationCap, title: "Cambridge English", text: "B1 English Certification — Score 153." },
];

function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="text-4xl md:text-5xl">Milestones & <span className="italic text-emerald-glow">distinctions</span></h2>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={41} suffix="+" /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={93} /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Global Teams</div>
            </div>
            <div>
              <div className="text-5xl font-display text-primary"><Counter to={1} /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Champion</div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl glass glass-hover p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:from-primary/40 transition">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  img: string;
  gallery?: string[];
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
};

const projects: Project[] = [
  {
    img: microidCover,
    gallery: [microidCover, g1, g2, g3, g4],
    title: "MicroID Lab",
    subtitle: "AI-powered infectious disease diagnostics",
    desc: "Portable artificial intelligence platform focused on accessible diagnostics, epidemiological support and healthcare accessibility for vulnerable regions. Recognized at Harvard HSIL 2026 — a global hackathon connecting 30+ countries and 40 hubs around the world.",
    tags: ["AI", "Diagnostics", "Healthcare", "Harvard HSIL 2026"],
  },
  {
    img: healthgitCover, title: "HealthGit",
    subtitle: "Blockchain + AI for medical records",
    desc: "Transforming fragmented patient data into intelligent clinical infrastructure using Solana blockchain and artificial intelligence.",
    tags: ["Blockchain", "AI", "Healthcare", "Solana"],
  },
  {
    img: teacessoBuildathon,
    gallery: [teacessoBuildathon, teacessoCover],
    title: "TEAcesso",
    subtitle: "Inclusive accessibility platform — Lovable Buildathon Runner-up",
    desc: "Digital platform designed to improve accessibility, communication and inclusion experiences. Recognized as 2nd place (Vice-Champion) at the Lovable Buildathon, alongside top Brazilian universities.",
    tags: ["Accessibility", "Social Impact", "AI", "Lovable Buildathon"],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="text-4xl md:text-6xl">Projects shaping the <span className="italic text-emerald-glow">future</span> of care.</h2>
        </div>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`group grid gap-8 rounded-3xl glass p-6 md:p-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 z-10 pointer-events-none" />
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                {p.gallery && p.gallery.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {p.gallery.slice(1).map((src, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg border border-primary/15">
                        <img src={src} alt={`${p.title} — photo ${idx + 2}`} loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">0{i + 1} — Project</div>
                <h3 className="text-3xl md:text-4xl font-display mb-2">{p.title}</h3>
                <p className="text-lg text-foreground/80 mb-4">{p.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">{t}</span>
                  ))}
                </div>
                <button className="group/btn inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition">
                  Explore Project <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  { year: "2026", title: "Harvard HSIL 2026", place: "Hub InovaHC · Brazil", desc: "Champion of the Harvard Health Systems Innovation Lab hackathon." },
  { year: "2025", title: "START SP Ecosystem", place: "Global", desc: "Selected for one of the world's largest startup ecosystems for young founders." },
  { year: "2025", title: "Pesquisadores do Futuro", place: "Research Program", desc: "Scientific research initiative on next-gen healthcare technologies." },
  { year: "2024", title: "Healthcare Innovation Events", place: "São Paulo", desc: "Speaker and contributor across innovation circuits and health-tech summits." },
  { year: "2024", title: "HCOR Technology Events", place: "HCOR", desc: "Active participant in clinical technology and digital health forums." },
  { year: "2023", title: "Garagem for Startups", place: "Founder Track", desc: "Entrepreneurship and product-building intensive for emerging founders." },
];

function Experience() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>Journey</SectionLabel>
        <h2 className="text-4xl md:text-5xl mb-16">Experience & <span className="italic text-emerald-glow">ecosystems</span></h2>

        <div className="relative">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {experience.map((e, i) => (
            <motion.div
              key={e.title + i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pl-10 pb-10"
            >
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_var(--emerald-glow)]" />
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-primary mb-1">
                <Calendar className="h-3.5 w-3.5" /> {e.year} · {e.place}
              </div>
              <h3 className="text-xl md:text-2xl font-display mb-1">{e.title}</h3>
              <p className="text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  { icon: Brain, title: "Innovation", text: "Pushing the boundaries of what's possible — using AI, computer vision and emerging tech to reimagine clinical workflows." },
  { icon: HeartPulse, title: "Social Impact", text: "Building solutions that move beyond hospitals — reaching vulnerable communities and rewriting access to care." },
  { icon: Accessibility, title: "Accessible Healthcare", text: "Designing human-centered technology that includes everyone, regardless of geography, ability, or background." },
];

function Values() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Principles</SectionLabel>
          <h2 className="text-4xl md:text-5xl">What I <span className="italic text-emerald-glow">stand for</span></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
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
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-display mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
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
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <SectionLabel>Moments</SectionLabel>
          <h2 className="text-4xl md:text-5xl">From <span className="italic text-emerald-glow">labs</span> to global stages.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl glass ${g.h}`}
            >
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
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
            <SectionLabel>Let's connect</SectionLabel>
            <h2 className="text-4xl md:text-6xl leading-tight mb-8">
              Let's build the <span className="italic text-emerald-glow">future of healthcare</span> together.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--emerald-glow)] hover:shadow-[0_0_50px_-5px_var(--emerald-glow)] transition-all">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <div className="font-display text-base">Leonardo Oliveira Rodrigues Cardoso © 2026</div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">Healthcare • Innovation • AI</div>
        </div>
        <div className="text-xs text-muted-foreground">Designed with intent. Built for impact.</div>
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
    </main>
  );
}
