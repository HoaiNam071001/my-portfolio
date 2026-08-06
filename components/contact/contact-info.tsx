import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data/personalInfo";

const items = [
  { icon: FiMail, label: "Email", value: personalInfo.email, href: personalInfo.socialLinks.email },
  { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: personalInfo.socialLinks.phone },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: undefined },
  { icon: FiGithub, label: "GitHub", value: "@hoainam07", href: personalInfo.socialLinks.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "in/hoainam07", href: personalInfo.socialLinks.linkedin },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const content = (
          <div className="flex items-center gap-4">
            <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary">
              <item.icon size={17} />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-muted">{item.label}</p>
              <p className="truncate text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          </div>
        );
        return (
          <Reveal key={item.label} delay={i * 70} className="glass glass-card rounded-2xl p-5">
            {item.href ? (
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              content
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
