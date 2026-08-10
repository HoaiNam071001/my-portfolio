export type Technology = { name: string; icon?: string };
export type Project = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  period: string;
  status: "In Progress" | "Completed" | "Published" | "Active";
  technologies: Technology[];
  highlights: string[];
  image: string;
  github: string;
  liveUrl: string;
  npm?: string;
  category: "Professional" | "Vibe";
};

export const mainProjects: Project[] = [
  {
    id: 1,
    name: "Vinbus - MiniApp",
    slug: "vinbus-miniapp",
    shortDescription: "Mini App on React 19 integrated into Vingroup's V-app Super App",
    description:
      "A Mini App on the React 19 platform, integrated into Vingroup's V-app Super App via the @vsf-miniapp framework. Built interactive maps and navigation features leveraging GSM Map SDK for real-time route searching and public transport trip planning.",
    longDescription:
      "This project showcases modern React development with state management optimization. Developed interactive maps and navigation features using GSM Map SDK for real-time route searching. Managed complex application states with Jotai library and optimized UI/UX using the self-authored skeleton-styler library for professional loading states.",
    period: "Oct 2025 - Present",
    status: "In Progress",
    technologies: [
      { name: "React 19", icon: "FaReact" },
      { name: "@vsf-miniapp" },
      { name: "GSM Map SDK" },
      { name: "TypeScript" },
      { name: "Jotai" },
      { name: "skeleton-styler" },
    ],
    highlights: [
      "Built interactive maps and navigation features",
      "Managed complex application states with Jotai",
      "Optimized UI/UX using skeleton-styler library",
      "Real-time route searching and public transport trip planning",
    ],
    image: "/images/projects/vinbus-miniapp.jpg",
    github: "",
    liveUrl: "",
    category: "Professional",
  },
  {
    id: 2,
    name: "GoAFC",
    slug: "goafc",
    shortDescription: "Modernized Web UI for Ho Chi Minh City bus management system",
    description:
      "Upgraded the stack to Angular 19 with advanced features including global search, dark mode, and administrative dashboard for route management.",
    longDescription:
      "Modernized the Web UI for the Ho Chi Minh City bus management system, transitioning from older Angular versions to Angular 19. Implemented key features including global search functionality for quick access, dark mode for better user experience, and a comprehensive administrative dashboard for efficient route management.",
    period: "Aug 2025 - Present",
    status: "In Progress",
    technologies: [
      { name: "Angular 19", icon: "FaAngular" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "Bootstrap" },
      { name: "ng-zorro" },
    ],
    highlights: [
      "Modernized Web UI with Angular 19 upgrade",
      "Implemented global search functionality",
      "Dark mode implementation",
      "Administrative dashboard for route management",
    ],
    image: "/images/projects/goafc.jpg",
    github: "",
    liveUrl: "https://afc.golabs.vn",
    category: "Professional",
  },
  {
    id: 3,
    name: "XCORP Management System",
    slug: "xcorp",
    shortDescription: "Comprehensive ERP platform for resource, project, and performance management",
    description:
      "Built complex modules such as Gantt charts for task management, OKR/KPI tracking, and automated logwork systems with large-scale state management using NgRx.",
    longDescription:
      "Developed the Frontend for a comprehensive ERP platform focusing on resource, project, and performance management. Built complex modules such as Gantt charts for intuitive task management, OKR/KPI tracking for performance monitoring, and automated logwork systems. Efficiently managed large-scale application states using NgRx and integrated Froala-based text editors for seamless document management.",
    period: "Sep 2022 - Aug 2025",
    status: "Completed",
    technologies: [
      { name: "Angular 16", icon: "FaAngular" },
      { name: "NgRx" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "ng-zorro" },
      { name: "Froala Editor" },
    ],
    highlights: [
      "Gantt charts for task management",
      "OKR/KPI tracking system",
      "Large-scale state management with NgRx",
      "Document management with Froala editor",
      "Automated logwork systems",
    ],
    image: "/images/projects/xcorp.jpg",
    github: "",
    liveUrl: "https://xcorp.app",
    category: "Professional",
  },
  {
    id: 4,
    name: "Education System",
    slug: "education-system",
    shortDescription: "Full-stack online learning platform with course moderation and AI chatbot",
    description:
      "Built a Full-stack online learning platform featuring course moderation, enrollment systems, and an AI-powered chatbot. Integrated MoMo payment gateway and managed Big Data storage using Hadoop HDFS.",
    longDescription:
      "A comprehensive full-stack online learning platform developed with modern technologies. Features course moderation for instructors, enrollment systems for students, and an AI-powered chatbot for student support. Integrated MoMo payment gateway for seamless transactions and managed Big Data storage using Hadoop HDFS for scalability. Implemented LLaMA 3.2 with FAISS for semantic search and intelligent responses.",
    period: "Dec 2024 - May 2025",
    status: "Completed",
    technologies: [
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Hadoop HDFS" },
      { name: "LangChain" },
      { name: "LLaMA 3.2" },
      { name: "FAISS" },
    ],
    highlights: [
      "Full-stack development",
      "Course moderation and enrollment systems",
      "MoMo payment gateway integration",
      "Big Data storage with Hadoop HDFS",
      "AI-powered chatbot with LLaMA 3.2 and FAISS",
      "LangChain integration for LLM orchestration",
    ],
    image: "/images/projects/education-system.jpg",
    github: "",
    liveUrl: "",
    category: "Professional",
  },
  {
    id: 5,
    name: "Skeleton-Styler",
    slug: "skeleton-styler-lib",
    shortDescription: "Open-source npm library for customizable skeleton loaders",
    description:
      "Authored and published an open-source npm library designed to simplify the creation of highly customizable skeleton loaders with minimal configuration.",
    longDescription:
      "An innovative open-source npm library that simplifies the creation of highly customizable skeleton loaders. Engineered a maintainable architecture that allows developers to integrate high-fidelity loading states with minimal configuration. Published on npm and actively used across multiple projects for consistent skeleton UI implementation.",
    period: "Sep 2025 - Nov 2025",
    status: "Published",
    technologies: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    highlights: [
      "Published on npm",
      "Highly customizable skeleton components",
      "Minimal configuration required",
      "Maintainable architecture",
      "Active usage across projects",
    ],
    image: "/images/projects/skeleton-styler.jpg",
    github: "https://github.com/hoainam07/skeleton-styler",
    npm: "skeleton-styler",
    liveUrl: "https://www.npmjs.com/package/skeleton-styler",
    category: "Professional",
  },
  {
    id: 6,
    name: "Vinbus & BusMap Modernization",
    slug: "vinbus-busmap-modernization",
    shortDescription: "Enterprise platform migration from Angular 11 to Angular 19",
    description:
      "Spearheaded the comprehensive migration of multiple enterprise platforms (Vinbus Dashboard, Vinbus Map, and BusMap) from Angular 11 to Angular 19 with security improvements.",
    longDescription:
      "Led a comprehensive modernization initiative migrating three enterprise platforms (Vinbus Dashboard, Vinbus Map, and BusMap) from Angular 11 to Angular 19. Resolved critical security vulnerabilities identified by Trivy security scanning, ensuring systems comply with enterprise-grade security standards. Refactored core modules and updated dependent libraries to optimize performance and ensure cross-version compatibility.",
    period: "Dec 2025 - Jan 2026",
    status: "Completed",
    technologies: [
      { name: "Angular 19", icon: "FaAngular" },
      { name: "RxJS" },
      { name: "TypeScript" },
      { name: "Trivy" },
    ],
    highlights: [
      "Multi-platform migration (3 applications)",
      "Angular 11 to Angular 19 upgrade",
      "Critical security vulnerability resolution",
      "Trivy security scanning integration",
      "Performance optimization",
      "Cross-version compatibility",
    ],
    image: "/images/projects/vinbus-modernization.jpg",
    github: "",
    liveUrl: "",
    category: "Professional",
  },
  {
    id: 11,
    name: "Simple Blog",
    slug: "simple-blog",
    shortDescription: "Web blog platform built during internship for sharing personal stories",
    description:
      "Developed a web blog project during an internship, enabling users to share personal stories and authentic narratives.",
    longDescription:
      "A full-stack blog platform built during the Designveloper internship, allowing users to write, publish, and share personal stories and authentic narratives. Implemented the frontend with ReactJS and built a RESTful API backend with ExpressJS, backed by MongoDB for data persistence.",
    period: "June 2022 - July 2022",
    status: "Completed",
    technologies: [{ name: "React", icon: "FaReact" }, { name: "Express.js" }, { name: "MongoDB" }],
    highlights: [
      "Full-stack blog platform (ReactJS + ExpressJS + MongoDB)",
      "User-generated personal stories and narratives",
      "RESTful API design",
    ],
    image: "/images/projects/simple-blog.jpg",
    github: "",
    liveUrl: "",
    category: "Professional",
  },
];

export const vibeProjects: Project[] = [
  {
    id: 7,
    name: "English Master",
    slug: "english-master",
    shortDescription: "Personal vocabulary-learning application with flashcards",
    description:
      "A vocabulary-learning application utilizing Flashcards and integrated Note-taking features to enhance language retention.",
    longDescription:
      "A personal learning project designed to enhance language retention through interactive flashcards and integrated note-taking. Implemented robust state management using Redux Toolkit to ensure a seamless and reactive user experience. Features spaced repetition algorithm for optimal learning, vocabulary tracking, and personalized study sessions.",
    period: "Dec 2025 - Present",
    status: "Active",
    technologies: [{ name: "React.js", icon: "FaReact" }, { name: "Redux Toolkit" }, { name: "Tailwind CSS" }],
    highlights: [
      "Interactive flashcard system",
      "Integrated note-taking",
      "Redux Toolkit state management",
      "Spaced repetition algorithm",
      "Vocabulary tracking and progress",
    ],
    image: "/images/projects/english-master.jpg",
    github: "",
    liveUrl: "https://niz-vocabulary.vercel.app",
    category: "Vibe",
  },
  {
    id: 8,
    name: "Wallio - Expense Manager",
    slug: "wallio",
    shortDescription: "Personal finance tracker for managing spending and budgets",
    description:
      "A personal finance tracker for managing spending, wallets, and budgets with visual insights and analytics.",
    longDescription:
      "A comprehensive personal finance management application built to track expenses, manage multiple wallets, and plan budgets effectively. Features intuitive expense categorization, visual analytics with charts and graphs, budget alerts, and financial goal tracking. Provides clear insights into spending patterns and helps users achieve financial goals.",
    period: "2025",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Chart.js" },
    ],
    highlights: [
      "Expense tracking and categorization",
      "Multi-wallet management",
      "Budget planning and alerts",
      "Visual analytics with charts",
      "Financial goal tracking",
      "Intuitive dashboard",
    ],
    image: "/images/projects/wallio.jpg",
    github: "",
    liveUrl: "https://wallio-app.vercel.app",
    category: "Vibe",
  },
  {
    id: 9,
    name: "Go Travel Planner",
    slug: "go-travel-planner",
    shortDescription: "Travel planning application for organizing itineraries and destinations",
    description:
      "A travel planning application for organizing itineraries, destinations, and trip schedules with interactive map integration.",
    longDescription:
      "A comprehensive travel planning tool designed to organize all aspects of a trip in one place. Features itinerary planning with timeline view, destination research and notes, interactive map integration, packing checklists, and budget planning. Perfect for solo travelers, groups, and families planning their next adventure.",
    period: "2025",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Google Maps API" },
    ],
    highlights: [
      "Trip itinerary planning with timeline",
      "Destination notes and research",
      "Interactive map integration",
      "Organized travel checklists",
      "Budget planning per destination",
      "Collaborative trip planning",
    ],
    image: "/images/projects/travel-planner.jpg",
    github: "",
    liveUrl: "https://go-travel-planner.vercel.app",
    category: "Vibe",
  },
  {
    id: 10,
    name: "Skeleton Styler Visualizer",
    slug: "skeleton-styler-app",
    shortDescription: "Interactive tool for creating customizable skeleton loading UI",
    description:
      "An interactive visualizer tool for creating, customizing, and exporting skeleton loading UI components.",
    longDescription:
      "A practical tool for designers and developers to create and customize skeleton loading UI components visually. Features real-time preview, customizable animations and colors, CSS/markup export, and copy-to-clipboard functionality. Built to complement the skeleton-styler npm library and provide an easy way to generate loading states.",
    period: "Sep 2025 - Nov 2025",
    status: "Active",
    technologies: [{ name: "React.js", icon: "FaReact" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    highlights: [
      "Real-time skeleton preview",
      "Customizable animations",
      "Color customization",
      "CSS/markup export",
      "Copy-to-clipboard functionality",
      "Integration with skeleton-styler library",
    ],
    image: "/images/projects/skeleton-styler-app.jpg",
    github: "",
    liveUrl: "https://skeleton-styler.vercel.app",
    category: "Vibe",
  },
];

export const allProjects: Project[] = [...mainProjects, ...vibeProjects];
