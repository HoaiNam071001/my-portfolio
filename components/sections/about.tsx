import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data/personalInfo";
import { educationData } from "@/lib/data/education";
import { FiMapPin, FiMail, FiPhone, FiCalendar } from "react-icons/fi";

const facts = [
  { icon: FiMapPin, label: "Location", value: personalInfo.location },
  { icon: FiCalendar, label: "Experience", value: `${personalInfo.yearsExperience}+ years` },
  { icon: FiMail, label: "Email", value: personalInfo.email },
  { icon: FiPhone, label: "Phone", value: personalInfo.phone },
];

export function About({ full = false }: { full?: boolean }) {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A little about who I am"
      subtitle="The story, the stack, and the standards behind my work."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="glass glass-card rounded-3xl p-8 lg:col-span-3">
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">{personalInfo.bio}</p>

          {full && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Education</h3>
              <p className="mt-3 text-base font-semibold text-foreground">{educationData.degree}</p>
              <p className="text-sm text-muted">
                {educationData.university} · {educationData.year} · GPA {educationData.gpa}
              </p>
              <ul className="mt-4 space-y-2">
                {educationData.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {educationData.certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {cert.name} · {cert.score} ({cert.date})
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 80} className="glass glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary">
                  <fact.icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted">{fact.label}</p>
                  <p className="truncate text-sm font-semibold text-foreground">{fact.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
