import { FiClock } from "react-icons/fi";
import { Reveal } from "@/components/ui/reveal";
import type { BlogTopic } from "@/lib/data/blog";

export function BlogCard({ topic, delay = 0 }: { topic: BlogTopic; delay?: number }) {
  return (
    <Reveal delay={delay} className="glass glass-card flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-center justify-between gap-2">
        <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-primary">
          {topic.category}
        </span>
        {!topic.published && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-muted">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{topic.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{topic.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {topic.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-foreground/60">
              {tag}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs text-muted">
          <FiClock size={12} /> {topic.readTime} min
        </span>
      </div>
    </Reveal>
  );
}
