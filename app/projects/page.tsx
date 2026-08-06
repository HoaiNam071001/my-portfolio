import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata: Metadata = {
  title: "Projects | Nguyễn Hoài Nam",
  description: "Professional and personal projects built by Nguyễn Hoài Nam.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Portfolio"
        title="All projects"
        subtitle="Professional platforms and personal side projects — filter to browse either."
      >
        <ProjectGrid />
      </Section>
    </div>
  );
}
