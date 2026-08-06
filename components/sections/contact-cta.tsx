import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data/personalInfo";
import { ROUTES } from "@/lib/constants/routes";

export function ContactCta() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
      <Reveal className="gradient-border glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "linear-gradient(120deg, var(--primary), var(--secondary))" }}
        />
        <h2 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something <span className="gradient-text">great together</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          Currently open to new opportunities and collaborations. Reach out and let&apos;s talk about your
          next project.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={ROUTES.CONTACT} className="btn-primary flex items-center gap-2 px-7 py-3 text-sm">
            {personalInfo.cta.secondary} <FiArrowRight size={15} />
          </Link>
          <a href={personalInfo.socialLinks.email} className="btn-secondary glass px-7 py-3 text-sm text-foreground hover:text-primary">
            {personalInfo.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
