/**
 * Signal Ledger design: Swiss editorial portfolio, paper/ink surfaces, signal-orange accents,
 * asymmetric document spine, technical annotations, and evidence-led project storytelling.
 */
import { useTheme } from "@/contexts/ThemeContext";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Velocity",
    eyebrow: "Operations command center",
    detail: "A responsive workspace for prioritizing work, reading live signals, and moving focus without losing context.",
    stack: ["React", "TypeScript", "State patterns"],
    image: "/manus-storage/kj-project-velocity_07d9ad11.jpg",
    href: "/velocity",
    status: "Live interaction study",
  },
  {
    id: "02",
    title: "Foundry",
    eyebrow: "Product discovery interface",
    detail: "A tactile storefront study built around fast filtering, cart feedback, and a deliberate mobile product journey.",
    stack: ["React", "Accessible forms", "UI systems"],
    image: "/manus-storage/kj-project-foundry_4d1fc7c7.jpg",
    href: "/foundry",
    status: "Live interaction study",
  },
  {
    id: "03",
    title: "Arc",
    eyebrow: "Planning and booking flow",
    detail: "A scheduling experience that makes availability, duration, and next steps legible at a glance.",
    stack: ["React", "Keyboard UX", "Responsive layout"],
    image: "/manus-storage/kj-project-arc_640c152c.jpg",
    href: "/arc",
    status: "Live interaction study",
  },
  {
    id: "04",
    title: "Reel Atlas",
    eyebrow: "Public API search application",
    detail: "A course-aligned JavaScript final project that turns live catalog queries into focused, stateful search results.",
    stack: ["Fetch API", "Async states", "Responsive UI"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    href: "/reel-atlas",
    status: "Module 5 final build",
  },
  {
    id: "05",
    title: "People Atlas",
    eyebrow: "Public directory interface",
    detail: "A business-facing directory view that transforms public sample records into clear search, pending, no-match, and failure states.",
    stack: ["Fetch API", "Query state", "Directory UX"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    href: "/people-atlas",
    status: "Take-home companion build",
  },
];

const capabilities = [
  "Semantic HTML & accessible UI",
  "Responsive CSS systems",
  "JavaScript and React components",
  "Client-side state & interaction design",
  "Git-based delivery workflow",
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ledger-page">
      <header className="ledger-header">
        <a className="brand-lockup" href="#top" aria-label="Kyle Johnson frontend portfolio home">
          <img src="/manus-storage/kj-signal-mark_52c941f0.png" alt="" className="brand-mark" />
          <span className="brand-name">KJ</span>
          <span className="brand-tag">// FRONTEND</span>
        </a>

        <nav className={menuOpen ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub <ArrowUpRight size={13} /></a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color mode">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-index" aria-hidden="true">
            <span>INDEX</span>
            <span>01—24</span>
          </div>
          <div className="hero-copy">
            <p className="kicker"><span className="signal-dot" /> FRONTEND ENGINEER / PORTFOLIO</p>
            <h1 id="hero-heading">Interfaces that make <em>complex work</em> feel obvious.</h1>
            <p className="hero-summary">Kyle Johnson builds responsive, accessible frontends with purposeful interaction design and a preference for clarity over decoration.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">Inspect the live builds <ArrowDownRight size={18} /></a>
              <a className="secondary-link" href="#approach">Read the approach <ArrowDownRight size={18} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/manus-storage/kj-signal-ledger-hero_438e2adb.jpg" alt="Editorial technical desk composition with layered interface materials" />
            <div className="image-note image-note--top">CURRENT SET / 2026</div>
            <div className="image-note image-note--bottom">DESIGN × BUILD</div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO REVIEW</span><div /></div>
        </section>

        <section className="proof-strip" aria-label="Portfolio context">
          <p>BUILDING IN PUBLIC</p>
          <span />
          <p>REACT / TYPESCRIPT / CSS</p>
          <span />
          <p>ACCESSIBILITY MINDED</p>
          <span />
          <p>DETAIL ORIENTED</p>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-heading">
          <div className="section-rail">
            <span>01</span>
            <span>SELECTED BUILDS</span>
          </div>
          <div className="section-heading">
            <p className="kicker"><span className="signal-dot" /> LIVE INTERACTION STUDIES</p>
            <h2 id="work-heading">Each build is an argument for thoughtful UI.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={index % 2 === 1 ? "project-card project-card--offset" : "project-card"} key={project.id}>
                <a className="project-image-wrap" href={project.href} aria-label={`Open ${project.title} live project`}>
                  <img src={project.image} alt="" />
                  <span className="project-id">{project.id}</span>
                  <span className="project-arrow"><ArrowUpRight size={19} /></span>
                </a>
                <div className="project-info">
                  <div className="project-meta"><span>{project.eyebrow}</span><span>{project.status}</span></div>
                  <h3><a href={project.href}>{project.title}</a></h3>
                  <p>{project.detail}</p>
                  <ul aria-label={`${project.title} technology focus`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a className="text-link" href={project.href}>Open the build <ArrowUpRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-heading">
          <div className="approach-grid">
            <div className="approach-statement">
              <p className="kicker"><span className="signal-dot" /> HOW THE WORK IS MADE</p>
              <h2 id="approach-heading">Clear systems. Deliberate details. No mystery meat UI.</h2>
              <p>Good frontend work balances visual judgment, semantics, and the small interaction choices that reduce friction. The goal is not an impressive screenshot—it is a page that makes sense in motion.</p>
            </div>
            <div className="method-card">
              <span className="method-number">/ 01</span>
              <h3>Frame the job</h3>
              <p>Understand the user’s next action before choosing the interface pattern.</p>
              <span className="method-number">/ 02</span>
              <h3>Build the system</h3>
              <p>Use reusable components, responsive rules, and a visible hierarchy.</p>
              <span className="method-number">/ 03</span>
              <h3>Test the edges</h3>
              <p>Check empty states, keyboard flows, contrast, and smaller screens.</p>
            </div>
          </div>

          <div className="capability-grid">
            <div className="capability-lead"><Code2 size={24} /><span>CORE PRACTICE</span></div>
            {capabilities.map((item, index) => <div className="capability" key={item}><span>0{index + 1}</span>{item}</div>)}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-signal"><Sparkles size={34} /></div>
          <div>
            <p className="kicker">AVAILABLE FOR FRONTEND OPPORTUNITIES</p>
            <h2 id="contact-heading">Let’s build something that earns a second look.</h2>
          </div>
          <div className="contact-actions">
            <a className="primary-link" href="mailto:contact@email.kljj365.com">Start a conversation <ArrowUpRight size={18} /></a>
            <a className="secondary-link" href="https://github.com" target="_blank" rel="noreferrer"><Github size={17} /> Browse GitHub</a>
          </div>
        </section>
      </main>

      <footer className="ledger-footer">
        <span>© 2026 KYLE JOHNSON</span>
        <span>DESIGNED AS A SIGNAL LEDGER</span>
        <a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}
