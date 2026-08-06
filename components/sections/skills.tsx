import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { skillsData } from "@/lib/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools & technologies I work with"
      subtitle="A snapshot of the stack I use to ship scalable, maintainable frontends."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.categories.map((category, i) => (
          <Reveal key={category.name} delay={i * 70} className="glass glass-card rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  category.level === "Advanced"
                    ? "bg-primary/15 text-primary"
                    : "bg-secondary/15 text-secondary"
                }`}
              >
                {category.level}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  <TechIcon name={skill.icon} size={13} />
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
