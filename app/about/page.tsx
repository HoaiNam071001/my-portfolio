import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About | Nguyễn Hoài Nam",
  description: "Learn more about Nguyễn Hoài Nam — Frontend Developer background, skills and experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About full />
      <Skills />
      <Experience />
      <ContactCta />
    </div>
  );
}
