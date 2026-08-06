import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { mainProjects } from "@/lib/data/projects";
import { ROUTES } from "@/lib/constants/routes";

export function ProjectsPreview() {
  const featured = mainProjects.slice(0, 3);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Featured projects"
      subtitle="Professional platforms I've helped design, build, and scale."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link href={ROUTES.PROJECTS} className="btn-secondary glass flex items-center gap-2 px-6 py-3 text-sm text-foreground hover:text-primary">
          View all projects <FiArrowRight size={14} />
        </Link>
      </Reveal>
    </Section>
  );
}
