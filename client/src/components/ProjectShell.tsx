/** Signal Ledger shared project shell: keeps every build navigable, legible, and visibly connected to the portfolio. */
import { ArrowLeft, Github, Moon, Sun } from "lucide-react";
import { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type ProjectShellProps = {
  label: string;
  title: string;
  stack: string;
  interaction: string;
  outcome: string;
  children: ReactNode;
};

export default function ProjectShell({ label, title, stack, interaction, outcome, children }: ProjectShellProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="project-page">
      <header>
      <nav className="project-nav" aria-label="Project navigation">
        <a href="/" className="project-back"><ArrowLeft size={16} /> Portfolio</a>
        <div className="project-title-lockup"><span>{label}</span><strong>{title}</strong></div>
        <div className="project-nav-actions">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Open GitHub"><Github size={17} /></a>
          <button type="button" onClick={toggleTheme} aria-label="Toggle color mode">{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
        </div>
      </nav>
      </header>
      <aside className="project-ledger" aria-label="Build evidence ledger">
        <span className="ledger-project-id">{label}</span>
        <span><b>STACK</b>{stack}</span>
        <span><b>INTERACTION</b>{interaction}</span>
        <span><b>OUTCOME</b>{outcome}</span>
      </aside>
      {children}
    </div>
  );
}
