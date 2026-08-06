"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "./project-card";
import { allProjects } from "@/lib/data/projects";

const FILTERS = ["All", "Professional", "Vibe"] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const projects = useMemo(
    () => (filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === f ? "btn-primary" : "glass text-foreground/70 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
