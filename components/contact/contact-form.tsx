"use client";

import { useState, type FormEvent } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { personalInfo } from "@/lib/data/personalInfo";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "New message from portfolio");
    const message = String(form.get("message") ?? "");

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass glass-card space-y-5 rounded-3xl p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Let's work together"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm">
        {status === "sent" ? (
          <>
            <FiCheckCircle size={16} /> Opening your email client...
          </>
        ) : (
          <>
            <FiSend size={16} /> Send Message
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        Submitting opens your default email app addressed to {personalInfo.email}.
      </p>
    </form>
  );
}
