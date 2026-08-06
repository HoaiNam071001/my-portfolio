export type BlogTopic = {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  readTime: number;
  excerpt: string;
  published: boolean;
};

export const blogTopics: BlogTopic[] = [
  {
    id: 1,
    title: "From Angular 11 to 19: Migration Journey & Lessons Learned",
    slug: "angular-migration-guide",
    category: "Technical",
    tags: ["Angular", "Migration", "Best Practices"],
    readTime: 8,
    excerpt:
      "Deep dive into the challenges and solutions of migrating large-scale enterprise applications from Angular 11 to 19.",
    published: false,
  },
  {
    id: 2,
    title: "Building Scalable UI Component Libraries",
    slug: "building-component-libraries",
    category: "Best Practices",
    tags: ["React", "Components", "Architecture"],
    readTime: 6,
    excerpt: "Learn how to architect and build reusable component libraries that scale with your application.",
    published: false,
  },
  {
    id: 3,
    title: "State Management Strategies: Redux vs Jotai vs NgRx",
    slug: "state-management-comparison",
    category: "Comparison",
    tags: ["State Management", "Redux", "Jotai", "NgRx"],
    readTime: 10,
    excerpt: "Comprehensive comparison of popular state management libraries and when to use each one.",
    published: false,
  },
  {
    id: 4,
    title: "Web Accessibility (a11y) - A Developer's Guide",
    slug: "web-accessibility-guide",
    category: "Accessibility",
    tags: ["Accessibility", "a11y", "Best Practices"],
    readTime: 7,
    excerpt: "Essential guide to building accessible web applications that work for everyone.",
    published: false,
  },
  {
    id: 5,
    title: "Performance Optimization Tips for React Applications",
    slug: "react-performance-optimization",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    readTime: 9,
    excerpt: "Proven techniques to optimize your React applications and improve user experience.",
    published: false,
  },
];
