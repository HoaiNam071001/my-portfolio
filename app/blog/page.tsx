import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { BlogCard } from "@/components/blog/blog-card";
import { blogTopics } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Nguyễn Hoài Nam",
  description: "Articles on frontend engineering, architecture, and performance by Nguyễn Hoài Nam.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Blog"
        title="Writing & notes"
        subtitle="Long-form pieces on Angular migrations, component architecture and performance — first posts publishing soon."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogTopics.map((topic, i) => (
            <BlogCard key={topic.id} topic={topic} delay={i * 70} />
          ))}
        </div>
      </Section>
    </div>
  );
}
