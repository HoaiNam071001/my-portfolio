"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { personalInfo } from "@/lib/data/personalInfo";
import { ROUTES } from "@/lib/constants/routes";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: ROUTES.HOME },
  { name: "About", href: ROUTES.ABOUT },
  { name: "Projects", href: ROUTES.PROJECTS },
  { name: "Contact", href: ROUTES.CONTACT },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/5" : ""
        }`}
      >
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground"
        >
          <Image
            src={personalInfo.logo}
            alt={personalInfo.fullName}
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-full"
          />
          <span className="hidden text-foreground/80 sm:inline">{personalInfo.fullName}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-primary/15 text-primary" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="hidden items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/25 md:inline-flex"
          >
            <FiDownload size={15} />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong absolute left-4 right-4 top-20 rounded-3xl p-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-primary/15 text-primary" : "text-foreground/80 hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-2xl bg-primary/15 px-4 py-3 text-sm font-medium text-primary"
          >
            <FiDownload size={15} />
            {personalInfo.cta.resume}
          </a>
        </div>
      )}
    </header>
  );
}
