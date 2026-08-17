"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data/personalInfo";
import { ROUTES } from "@/lib/constants/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center px-6 pt-28 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Open to new opportunities · {personalInfo.location}
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="gradient-border glass-strong relative flex h-28 w-28 items-center justify-center overflow-hidden !rounded-full sm:h-36 sm:w-36"
        >
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.fullName}
            fill
            priority
            sizes="(min-width: 640px) 144px, 112px"
            className="rounded-full "
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
        >
          Hi, I&apos;m <span className="gradient-text">{personalInfo.fullName}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="text-lg font-medium text-muted sm:text-xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="max-w-2xl text-balance text-sm leading-relaxed text-muted sm:text-base"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href={ROUTES.PROJECTS} className="btn-primary px-7 py-3 text-sm">
            {personalInfo.cta.primary}
          </Link>
          <Link
            href={ROUTES.CONTACT}
            className="btn-secondary glass px-7 py-3 text-sm text-foreground hover:text-primary"
          >
            {personalInfo.cta.secondary}
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="flex items-center gap-3"
        >
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-1 hover:text-primary"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-1 hover:text-primary"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            aria-label="Email"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-transform hover:-translate-y-1 hover:text-primary"
          >
            <FiMail size={18} />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={7}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted sm:flex"
        >
          <span className="text-[11px] uppercase tracking-widest">Scroll</span>
          <FiArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
