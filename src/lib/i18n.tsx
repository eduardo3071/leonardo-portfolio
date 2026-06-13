import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = {
  nav: { about: string; projects: string; awards: string; contact: string; cta: string };
  hero: {
    badge: string;
    tagline: string;
    role: string;
    viewProjects: string;
    aboutMe: string;
    location: string;
  };
  about: {
    label: string;
    headlineA: string;
    headlineB: string;
    innovator: string;
    p1a: string; p1b: string; p1c: string;
    p2a: string; p2b: string; p2c: string;
    p3a: string; p3b: string;
  };
  achievements: {
    label: string;
    headline: string; headlineItalic: string;
    countries: string; teams: string; champion: string;
    items: { title: string; text: string }[];
  };
  projects: {
    label: string;
    headlineA: string; headlineB: string; headlineC: string;
    projectN: string;
    explore: string;
    items: { subtitle: string; desc: string }[];
  };
  experience: {
    label: string; headlineA: string; headlineB: string;
    items: { place: string; desc: string; title?: string }[];
  };
  values: {
    label: string; headlineA: string; headlineB: string;
    items: { title: string; text: string }[];
  };
  gallery: { label: string; headlineA: string; headlineB: string; headlineC: string };
  contact: {
    label: string;
    headlineA: string; headlineB: string; headlineC: string;
  };
  footer: { tagline: string; built: string };
};

const en: Dict = {
  nav: { about: "About", projects: "Projects", awards: "Awards", contact: "Contact", cta: "Get in touch" },
  hero: {
    badge: "Harvard HSIL 2026 Champion",
    tagline: "Building impactful healthcare technologies through artificial intelligence, diagnostics and innovation.",
    role: "Nursing Student • Health Innovation • AI & Entrepreneurship",
    viewProjects: "View Projects",
    aboutMe: "About Me",
    location: "São Paulo · Brazil",
  },
  about: {
    label: "About",
    headlineA: "A human-centered",
    innovator: "innovator",
    headlineB: "at the edge of healthcare and AI.",
    p1a: "Leonardo Oliveira Rodrigues Cardoso is a Nursing student at ",
    p1b: "FCMSCSP",
    p1c: ", passionate about healthcare innovation, artificial intelligence and entrepreneurship.",
    p2a: "He is currently the ",
    p2b: "President of LATS",
    p2c: " (Academic League of Health Technology), leading initiatives focused on digital transformation and technology applied to healthcare.",
    p3a: "Leonardo is deeply involved in innovation ecosystems, scientific research and startup communities, always seeking to create accessible solutions capable of generating",
    p3b: " real-world social impact.",
  },
  achievements: {
    label: "Recognition",
    headline: "Milestones &",
    headlineItalic: "distinctions",
    countries: "Countries", teams: "Global Teams", champion: "Champion",
    items: [
      { title: "Harvard HSIL 2026 Champion", text: "Winner of the Harvard Health Systems Innovation Lab Hackathon in Brazil at Hub InovaHC." },
      { title: "Global Harvard Circuit", text: "Selected among 93 teams from 41 countries in the international Harvard innovation circuit." },
      { title: "START SP", text: "Member of one of the world's largest startup ecosystems for young entrepreneurs, present in 22+ countries." },
      { title: "LATS President", text: "Leading healthcare technology initiatives and interdisciplinary innovation projects." },
      { title: "Cambridge English", text: "B1 English Certification — Score 153." },
    ],
  },
  projects: {
    label: "Selected work",
    headlineA: "Projects shaping the",
    headlineB: "future",
    headlineC: "of care.",
    projectN: "Project",
    explore: "Explore Project",
    items: [
      { subtitle: "AI-powered infectious disease diagnostics", desc: "Portable artificial intelligence platform focused on accessible diagnostics, epidemiological support and healthcare accessibility for vulnerable regions. Recognized at Harvard HSIL 2026 — a global hackathon connecting 30+ countries and 40 hubs around the world." },
      { subtitle: "AI-powered cash flow forecasting for real estate — Link School + GRI Hackathon Runner-up", desc: "Web platform that forecasts, based on key inputs from the developer, when cash flow is about to turn red — before it happens. Built to help small and mid-size real estate developers anticipate mismatches between construction outflows and slowing sales. Awarded 2nd place (Vice-Champion) at the Zero to Hero Hackathon (Link School of Business + GRI Institute)." },
      { subtitle: "CivicTech × AI — 42 SP × Replit × ChatGPT Hackathon Champion", desc: "An app that uses AI and public voting data to analyze whether parliamentarians' votes align with the principles and values taught by Jesus Christ — giving voters a clear, accessible way to see if their representatives' votes match the values they claim to defend. Champion of the CivicTech × AI Hackathon (42 São Paulo × Replit × ChatGPT)." },
      { subtitle: "Inclusive accessibility platform — Lovable Buildathon Runner-up", desc: "Digital platform designed to improve accessibility, communication and inclusion experiences. Recognized as 2nd place (Vice-Champion) at the Lovable Buildathon, alongside top Brazilian universities." },
    ],
  },
  experience: {
    label: "Journey",
    headlineA: "Experience &",
    headlineB: "ecosystems",
    items: [
      { place: "Hub InovaHC · Brazil", desc: "Champion of the Harvard Health Systems Innovation Lab hackathon." },
      { place: "Global", desc: "Selected for one of the world's largest startup ecosystems for young founders." },
      { title: "Pesquisadores do Futuro", place: "Research Program", desc: "Scientific research initiative on next-gen healthcare technologies." },
      { title: "Healthcare Innovation Events", place: "São Paulo", desc: "Speaker and contributor across innovation circuits and health-tech summits." },
      { title: "HCOR Technology Events", place: "HCOR", desc: "Active participant in clinical technology and digital health forums." },
      { title: "Garagem for Startups", place: "Founder Track", desc: "Entrepreneurship and product-building intensive for emerging founders." },
    ],
  },
  values: {
    label: "Principles", headlineA: "What I", headlineB: "stand for",
    items: [
      { title: "Innovation", text: "Pushing the boundaries of what's possible — using AI, computer vision and emerging tech to reimagine clinical workflows." },
      { title: "Social Impact", text: "Building solutions that move beyond hospitals — reaching vulnerable communities and rewriting access to care." },
      { title: "Accessible Healthcare", text: "Designing human-centered technology that includes everyone, regardless of geography, ability, or background." },
    ],
  },
  gallery: { label: "Moments", headlineA: "From", headlineB: "labs", headlineC: "to global stages." },
  contact: {
    label: "Let's connect",
    headlineA: "Let's build the",
    headlineB: "future of healthcare",
    headlineC: "together.",
  },
  footer: { tagline: "Healthcare • Innovation • AI", built: "Designed with intent. Built for impact." },
};

const pt: Dict = {
  nav: { about: "Sobre", projects: "Projetos", awards: "Conquistas", contact: "Contato", cta: "Entre em contato" },
  hero: {
    badge: "Campeão Harvard HSIL 2026",
    tagline: "Construindo tecnologias de saúde de impacto por meio de inteligência artificial, diagnóstico e inovação.",
    role: "Estudante de Enfermagem • Inovação em Saúde • IA & Empreendedorismo",
    viewProjects: "Ver Projetos",
    aboutMe: "Sobre Mim",
    location: "São Paulo · Brasil",
  },
  about: {
    label: "Sobre",
    headlineA: "Um",
    innovator: "inovador",
    headlineB: "centrado no humano, na fronteira entre saúde e IA.",
    p1a: "Leonardo Oliveira Rodrigues Cardoso é estudante de Enfermagem na ",
    p1b: "FCMSCSP",
    p1c: ", apaixonado por inovação em saúde, inteligência artificial e empreendedorismo.",
    p2a: "Atualmente é ",
    p2b: "Presidente da LATS",
    p2c: " (Liga Acadêmica de Tecnologia em Saúde), liderando iniciativas focadas em transformação digital e tecnologia aplicada à saúde.",
    p3a: "Leonardo está profundamente envolvido em ecossistemas de inovação, pesquisa científica e comunidades de startups, sempre buscando criar soluções acessíveis capazes de gerar",
    p3b: " impacto social real.",
  },
  achievements: {
    label: "Reconhecimento",
    headline: "Marcos &",
    headlineItalic: "distinções",
    countries: "Países", teams: "Equipes Globais", champion: "Campeão",
    items: [
      { title: "Campeão Harvard HSIL 2026", text: "Vencedor do Hackathon do Harvard Health Systems Innovation Lab no Brasil, no Hub InovaHC." },
      { title: "Circuito Global Harvard", text: "Selecionado entre 93 equipes de 41 países no circuito internacional de inovação de Harvard." },
      { title: "START SP", text: "Membro de um dos maiores ecossistemas de startups do mundo para jovens empreendedores, presente em mais de 22 países." },
      { title: "Presidente da LATS", text: "Lidera iniciativas de tecnologia em saúde e projetos interdisciplinares de inovação." },
      { title: "Cambridge English", text: "Certificação B1 em Inglês — Score 153." },
    ],
  },
  projects: {
    label: "Trabalhos selecionados",
    headlineA: "Projetos moldando o",
    headlineB: "futuro",
    headlineC: "do cuidado.",
    projectN: "Projeto",
    explore: "Explorar Projeto",
    items: [
      { subtitle: "Diagnóstico de doenças infecciosas com IA", desc: "Plataforma portátil de inteligência artificial focada em diagnóstico acessível, suporte epidemiológico e acessibilidade à saúde para regiões vulneráveis. Reconhecido no Harvard HSIL 2026 — um hackathon global que conecta 30+ países e 40 hubs ao redor do mundo." },
      { subtitle: "Previsão de fluxo de caixa com IA para o setor imobiliário — Vice-Campeão do Hackathon Link School + GRI", desc: "Plataforma web que prevê, a partir de inputs-chave da incorporadora, quando o fluxo de caixa está prestes a ficar negativo — antes que aconteça. Criada para ajudar pequenas e médias incorporadoras a antecipar descompassos entre as saídas da obra e a desaceleração das vendas. Vice-Campeã do Zero to Hero Hackathon (Link School of Business + GRI Institute)." },
      { subtitle: "CivicTech × IA — Campeão do Hackathon 42 SP × Replit × ChatGPT", desc: "Aplicativo que usa IA e dados públicos de votação para analisar se os votos dos parlamentares estão alinhados com os princípios e valores ensinados por Jesus Cristo — oferecendo aos eleitores uma forma clara e acessível de verificar se seus representantes votam de acordo com os valores que dizem defender. Campeão do Hackathon CivicTech × IA (42 São Paulo × Replit × ChatGPT)." },
      { subtitle: "Plataforma de acessibilidade inclusiva — Vice-Campeã do Lovable Buildathon", desc: "Plataforma digital projetada para melhorar experiências de acessibilidade, comunicação e inclusão. Reconhecida como 2º lugar (Vice-Campeã) no Lovable Buildathon, ao lado das principais universidades brasileiras." },
    ],
  },
  experience: {
    label: "Trajetória",
    headlineA: "Experiência &",
    headlineB: "ecossistemas",
    items: [
      { place: "Hub InovaHC · Brasil", desc: "Campeão do hackathon do Harvard Health Systems Innovation Lab." },
      { place: "Global", desc: "Selecionado para um dos maiores ecossistemas de startups do mundo para jovens fundadores." },
      { title: "Pesquisadores do Futuro", place: "Programa de Pesquisa", desc: "Iniciativa de pesquisa científica sobre tecnologias de saúde de próxima geração." },
      { title: "Eventos de Inovação em Saúde", place: "São Paulo", desc: "Palestrante e contribuidor em circuitos de inovação e eventos de health-tech." },
      { title: "Eventos de Tecnologia do HCOR", place: "HCOR", desc: "Participante ativo em fóruns de tecnologia clínica e saúde digital." },
      { title: "Garagem para Startups", place: "Trilha de Founders", desc: "Intensivo de empreendedorismo e construção de produto para fundadores emergentes." },
    ],
  },
  values: {
    label: "Princípios", headlineA: "Pelo que", headlineB: "luto",
    items: [
      { title: "Inovação", text: "Empurrando os limites do possível — usando IA, visão computacional e tecnologias emergentes para reimaginar fluxos clínicos." },
      { title: "Impacto Social", text: "Construindo soluções que vão além dos hospitais — alcançando comunidades vulneráveis e reescrevendo o acesso ao cuidado." },
      { title: "Saúde Acessível", text: "Projetando tecnologia centrada no humano que inclui todos, independentemente de geografia, habilidade ou origem." },
    ],
  },
  gallery: { label: "Momentos", headlineA: "Dos", headlineB: "laboratórios", headlineC: "aos palcos globais." },
  contact: {
    label: "Vamos conectar",
    headlineA: "Vamos construir o",
    headlineB: "futuro da saúde",
    headlineC: "juntos.",
  },
  footer: { tagline: "Saúde • Inovação • IA", built: "Projetado com intenção. Construído para impacto." },
};

const dicts: Record<Lang, Dict> = { en, pt };

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void; toggle: () => void };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const toggle = () => setLang(lang === "en" ? "pt" : "en");

  return (
    <I18nContext.Provider value={{ lang, t: dicts[lang], setLang, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx;
}
