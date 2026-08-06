import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experienceData } from "@/lib/data/experiences";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've made an impact"
      subtitle="A track record of shipping frontend solutions across public transport and ERP domains."
    >
      <div className="relative space-y-6 before:absolute before:left-[1.15rem] before:top-2 before:bottom-2 before:hidden before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent sm:before:block">
        {experienceData.map((exp, i) => (
          <Reveal key={exp.id} delay={i * 90} className="relative pl-0 sm:pl-12">
            <span className="absolute left-3 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)] sm:block" />
            <div className="glass glass-card rounded-3xl p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                </div>
                <span className="glass rounded-full px-3 py-1 text-xs font-medium text-muted">
                  {exp.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{exp.description}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
