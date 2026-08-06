import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          )}
          {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
