"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { personalInfo } from "@/lib/data/personalInfo";
import { ROUTES } from "@/lib/constants/routes";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: ROUTES.HOME },
  { name: "About", href: ROUTES.ABOUT },
  { name: "Projects", href: ROUTES.PROJECTS },
  { name: "Blog", href: ROUTES.BLOG },
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
        <Link href={ROUTES.HOME} className="text-sm font-bold tracking-tight text-foreground">
          <span className="gradient-text">{personalInfo.initials}</span>
          <span className="ml-2 hidden text-foreground/80 sm:inline">{personalInfo.fullName}</span>
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
        </div>
      )}
    </header>
  );
}
