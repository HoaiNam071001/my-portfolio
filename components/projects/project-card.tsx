import Link from "next/link";
import { FiGithub, FiExternalLink, FiPackage } from "react-icons/fi";
import { TechIcon } from "@/components/ui/tech-icon";
import type { Project } from "@/lib/data/projects";

const STATUS_STYLES: Record<Project["status"], string> = {
  "In Progress": "bg-primary/15 text-primary",
  Completed: "bg-emerald-400/15 text-emerald-400",
  Published: "bg-secondary/15 text-secondary",
  Active: "bg-primary/15 text-primary",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-6">
      <div
        className="absolute inset-x-0 top-0 h-24 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: "linear-gradient(120deg, var(--primary), var(--secondary))" }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mt-0.5 text-xs text-muted">{project.period}</p>
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_STYLES[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-foreground/75">
        {project.shortDescription}
      </p>

      <ul className="relative mt-4 space-y-1.5">
        {project.highlights.slice(0, 2).map((h) => (
          <li key={h} className="flex gap-2 text-xs leading-relaxed text-foreground/60">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/70"
          >
            <TechIcon name={tech.icon} size={11} />
            {tech.name}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary glass flex items-center gap-1.5 px-4 py-2 text-xs text-foreground hover:text-primary"
          >
            <FiExternalLink size={13} /> Live
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary glass flex items-center gap-1.5 px-4 py-2 text-xs text-foreground hover:text-primary"
          >
            <FiGithub size={13} /> Code
          </Link>
        )}
        {project.npm && (
          <Link
            href={`https://www.npmjs.com/package/${project.npm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary glass flex items-center gap-1.5 px-4 py-2 text-xs text-foreground hover:text-primary"
          >
            <FiPackage size={13} /> npm
          </Link>
        )}
        {!project.liveUrl && !project.github && !project.npm && (
          <span className="text-xs text-muted">Private / Internal project</span>
        )}
      </div>
    </article>
  );
}
