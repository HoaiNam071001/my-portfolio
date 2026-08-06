import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact | Nguyễn Hoài Nam",
  description: "Get in touch with Nguyễn Hoài Nam for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Contact"
        title="Let's get in touch"
        subtitle="Have a project in mind or just want to say hi? Fill out the form or reach out directly."
      >
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Section>
    </div>
  );
}
