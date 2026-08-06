import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data/personalInfo";
import { ROUTES } from "@/lib/constants/routes";

export function Footer() {
  return (
    <footer className="relative mt-20 px-4 pb-6">
      <div className="glass mx-auto flex w-full max-w-6xl flex-col items-center gap-6 rounded-3xl px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-foreground">{personalInfo.fullName}</p>
          <p className="mt-1 text-sm text-muted">{personalInfo.shortTitle} · {personalInfo.location}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-0.5 hover:text-primary"
          >
            <FiGithub size={17} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-0.5 hover:text-primary"
          >
            <FiLinkedin size={17} />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-0.5 hover:text-primary"
          >
            <FiMail size={17} />
          </a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {personalInfo.fullName}. Built with Next.js.
        </p>
      </div>
      <p className="mt-4 text-center text-xs text-muted/70">
        <Link href={ROUTES.HOME} className="hover:text-primary">
          Back to top
        </Link>
      </p>
    </footer>
  );
}
