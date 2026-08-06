# 📦 Portfolio Data & Configuration

Sử dụng file này để tạo data constants trong thư mục `lib/data/` của project.

---

## 1. Personal Info (`lib/data/personalInfo.js`)

```javascript
export const personalInfo = {
  fullName: "Nguyễn Hoài Nam",
  title: "Frontend Developer | UI/UX Enthusiast",
  shortTitle: "Frontend Developer",
  email: "namhn077@gmail.com",
  phone: "0336227712",
  location: "Ho Chi Minh City, Vietnam",
  bio: "Proactive Frontend Developer specializing in architecting and optimizing scalable web applications. Proven ability to lead feature development, foster cross-functional communication, and deliver high-performance solutions in complex domains (ERP, Public Transport). Passionate about minimizing technical debt and crafting seamless user experiences.",
  profileImage: "/images/profile.jpg",
  yearsExperience: 3,
  
  socialLinks: {
    github: "https://github.com/hoainam07",
    linkedin: "https://linkedin.com/in/hoainam07",
    email: "mailto:namhn077@gmail.com",
    phone: "tel:+84336227712",
  },
  
  cta: {
    primary: "View My Work",
    secondary: "Get In Touch"
  }
};
```

---

## 2. Skills (`lib/data/skills.js`)

```javascript
export const skillsData = {
  categories: [
    {
      name: "Frontend Frameworks",
      level: "Advanced",
      skills: [
        { name: "React 19", icon: "FaReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "Angular 16-19", icon: "FaAngular" },
        { name: "RxJS", icon: "SiRxjs" }
      ]
    },
    {
      name: "State Management",
      level: "Advanced",
      skills: [
        { name: "Redux Toolkit" },
        { name: "Jotai" },
        { name: "NgRx" },
        { name: "Context API" }
      ]
    },
    {
      name: "Styling & UI",
      level: "Advanced",
      skills: [
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Material UI" },
        { name: "SASS/SCSS" },
        { name: "ng-zorro" }
      ]
    },
    {
      name: "Architecture & Core",
      level: "Advanced",
      skills: [
        { name: "Feature-Sliced Design (FSD)" },
        { name: "Component-Driven Architecture" },
        { name: "Performance Optimization" },
        { name: "Web Accessibility (a11y)" }
      ]
    },
    {
      name: "Backend & Tools",
      level: "Intermediate",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "NestJS" }
      ]
    },
    {
      name: "DevOps & Security",
      level: "Intermediate",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "Trivy (Security Scanning)" },
        { name: "CI/CD" }
      ]
    },
    {
      name: "Software Engineering",
      level: "Advanced",
      skills: [
        { name: "OOP" },
        { name: "Design Patterns" },
        { name: "Data Structures & Algorithms" },
        { name: "Agile/Scrum" }
      ]
    }
  ]
};
```

---

## 3. Experience (`lib/data/experiences.js`)

```javascript
export const experienceData = [
  {
    id: 1,
    company: "VinSmart Future",
    position: "Frontend Developer",
    period: "Dec 2025 - Now",
    duration: "Current",
    description: "Building web interfaces for public transport ecosystem",
    highlights: [
      "Developed web interfaces for bus management systems within the group's public transport ecosystem",
      "Spearheaded the migration of enterprise platforms (Vinbus Dashboard, Map) from Angular 11 to 19, resolving critical security vulnerabilities (Trivy) and ensuring system compliance",
      "Contributed to the deployment of smart software solutions for passenger services and public transport coordination"
    ],
    technologies: ["Angular 19", "TypeScript", "RxJS", "Trivy"]
  },
  {
    id: 2,
    company: "Golabs",
    position: "Frontend Developer",
    period: "Aug 2025 - Nov 2025",
    duration: "4 months",
    description: "Enhanced web UI for bus management system",
    highlights: [
      "Developed and enhanced the web UI for a bus management system, focusing on new features and user experience",
      "Maintained, refactored, and debugged system features to ensure high availability and stability",
      "Researched and applied new techniques to optimize system performance and efficiency"
    ],
    technologies: ["Angular 19", "TypeScript", "Bootstrap", "ng-zorro"]
  },
  {
    id: 3,
    company: "Xperc",
    position: "Frontend Developer",
    period: "Sep 2022 - Aug 2025",
    duration: "3 years",
    description: "Built scalable ERP platform interfaces",
    highlights: [
      "Developed responsive web interfaces for a commercial resource and personnel management system",
      "Architected and built a library of highly reusable UI components, accelerating development cycles and ensuring visual consistency across the platform",
      "Applied advanced software design patterns to architect complex features—such as implementing global application skeleton loaders and dynamic dashboard reordering logic—significantly reducing bug rates and enhancing code maintainability",
      "Collaborated closely with cross-functional teams in Agile/Scrum environments, driving clear communication, daily stand-ups, and successful sprint deliveries"
    ],
    technologies: ["Angular 16", "NgRx", "TypeScript", "Tailwind CSS", "ng-zorro"]
  },
  {
    id: 4,
    company: "Designveloper",
    position: "Intern",
    period: "June 2022 - Aug 2022",
    duration: "3 months",
    description: "Research & develop technology-based blog project",
    highlights: [
      "Research & develop a technology-based blog project yourself"
    ],
    technologies: ["React", "Node.js", "MongoDB"]
  }
];
```

---

## 4. Education (`lib/data/education.js`)

```javascript
export const educationData = {
  degree: "Bachelor of Computer Science",
  university: "Ho Chi Minh City University of Technology (VNU HCM)",
  gpa: "7.5 / 10",
  year: "2020-2024",
  certifications: [
    {
      name: "TOEIC",
      issuer: "ETS",
      score: "585",
      date: "2024"
    }
  ],
  highlights: [
    "Focus on software engineering and full-stack development",
    "Strong foundation in data structures, algorithms, and design patterns"
  ]
};
```

---

## 5. Projects - Main (`lib/data/projects.js`)

```javascript
export const mainProjects = [
  {
    id: 1,
    name: "Vinbus - MiniApp",
    slug: "vinbus-miniapp",
    shortDescription: "Mini App on React 19 integrated into Vingroup's V-app Super App",
    description: "A Mini App on the React 19 platform, integrated into Vingroup's V-app Super App via the @vsf-miniapp framework. Built interactive maps and navigation features leveraging GSM Map SDK for real-time route searching and public transport trip planning.",
    longDescription: "This project showcases modern React development with state management optimization. Developed interactive maps and navigation features using GSM Map SDK for real-time route searching. Managed complex application states with Jotai library and optimized UI/UX using the self-authored skeleton-styler library for professional loading states.",
    period: "Oct 2025 - Present",
    status: "In Progress",
    technologies: [
      { name: "React 19", icon: "FaReact" },
      { name: "@vsf-miniapp" },
      { name: "GSM Map SDK" },
      { name: "TypeScript" },
      { name: "Jotai" },
      { name: "skeleton-styler" }
    ],
    highlights: [
      "Built interactive maps and navigation features",
      "Managed complex application states with Jotai",
      "Optimized UI/UX using skeleton-styler library",
      "Real-time route searching and public transport trip planning"
    ],
    image: "/images/projects/vinbus-miniapp.jpg",
    github: "",
    liveUrl: "",
    category: "Professional"
  },

  {
    id: 2,
    name: "GoAFC",
    slug: "goafc",
    shortDescription: "Modernized Web UI for Ho Chi Minh City bus management system",
    description: "Upgraded the stack to Angular 19 with advanced features including global search, dark mode, and administrative dashboard for route management.",
    longDescription: "Modernized the Web UI for the Ho Chi Minh City bus management system, transitioning from older Angular versions to Angular 19. Implemented key features including global search functionality for quick access, dark mode for better user experience, and a comprehensive administrative dashboard for efficient route management.",
    period: "Aug 2025 - Present",
    status: "In Progress",
    technologies: [
      { name: "Angular 19", icon: "FaAngular" },
      { name: "TypeScript" },
      { name: "RxJS" },
      { name: "Bootstrap" },
      { name: "ng-zorro" }
    ],
    highlights: [
      "Modernized Web UI with Angular 19 upgrade",
      "Implemented global search functionality",
      "Dark mode implementation",
      "Administrative dashboard for route management"
    ],
    image: "/images/projects/goafc.jpg",
    github: "",
    liveUrl: "https://afc.golabs.vn",
    category: "Professional"
  },

  {
    id: 3,
    name: "XCORP Management System",
    slug: "xcorp",
    shortDescription: "Comprehensive ERP platform for resource, project, and performance management",
    description: "Built complex modules such as Gantt charts for task management, OKR/KPI tracking, and automated logwork systems with large-scale state management using NgRx.",
    longDescription: "Developed the Frontend for a comprehensive ERP platform focusing on resource, project, and performance management. Built complex modules such as Gantt charts for intuitive task management, OKR/KPI tracking for performance monitoring, and automated logwork systems. Efficiently managed large-scale application states using NgRx and integrated Froala-based text editors for seamless document management.",
    period: "Sep 2022 - Aug 2025",
    status: "Completed",
    technologies: [
      { name: "Angular 16", icon: "FaAngular" },
      { name: "NgRx" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "ng-zorro" },
      { name: "Froala Editor" }
    ],
    highlights: [
      "Gantt charts for task management",
      "OKR/KPI tracking system",
      "Large-scale state management with NgRx",
      "Document management with Froala editor",
      "Automated logwork systems"
    ],
    image: "/images/projects/xcorp.jpg",
    github: "",
    liveUrl: "https://xcorp.app",
    category: "Professional"
  },

  {
    id: 4,
    name: "Education System",
    slug: "education-system",
    shortDescription: "Full-stack online learning platform with course moderation and AI chatbot",
    description: "Built a Full-stack online learning platform featuring course moderation, enrollment systems, and an AI-powered chatbot. Integrated MoMo payment gateway and managed Big Data storage using Hadoop HDFS.",
    longDescription: "A comprehensive full-stack online learning platform developed with modern technologies. Features course moderation for instructors, enrollment systems for students, and an AI-powered chatbot for student support. Integrated MoMo payment gateway for seamless transactions and managed Big Data storage using Hadoop HDFS for scalability. Implemented LLaMA 3.2 with FAISS for semantic search and intelligent responses.",
    period: "Dec 2024 - May 2025",
    status: "Completed",
    technologies: [
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Hadoop HDFS" },
      { name: "LangChain" },
      { name: "LLaMA 3.2" },
      { name: "FAISS" }
    ],
    highlights: [
      "Full-stack development",
      "Course moderation and enrollment systems",
      "MoMo payment gateway integration",
      "Big Data storage with Hadoop HDFS",
      "AI-powered chatbot with LLaMA 3.2 and FAISS",
      "LangChain integration for LLM orchestration"
    ],
    image: "/images/projects/education-system.jpg",
    github: "",
    liveUrl: "",
    category: "Professional"
  },

  {
    id: 5,
    name: "Skeleton-Styler",
    slug: "skeleton-styler-lib",
    shortDescription: "Open-source npm library for customizable skeleton loaders",
    description: "Authored and published an open-source npm library designed to simplify the creation of highly customizable skeleton loaders with minimal configuration.",
    longDescription: "An innovative open-source npm library that simplifies the creation of highly customizable skeleton loaders. Engineered a maintainable architecture that allows developers to integrate high-fidelity loading states with minimal configuration. Published on npm and actively used across multiple projects for consistent skeleton UI implementation.",
    period: "Sep 2025 - Nov 2025",
    status: "Published",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
    highlights: [
      "Published on npm",
      "Highly customizable skeleton components",
      "Minimal configuration required",
      "Maintainable architecture",
      "Active usage across projects"
    ],
    image: "/images/projects/skeleton-styler.jpg",
    github: "https://github.com/hoainam07/skeleton-styler",
    npm: "skeleton-styler",
    liveUrl: "https://www.npmjs.com/package/skeleton-styler",
    category: "Professional"
  },

  {
    id: 6,
    name: "Vinbus & BusMap Modernization",
    slug: "vinbus-busmap-modernization",
    shortDescription: "Enterprise platform migration from Angular 11 to Angular 19",
    description: "Spearheaded the comprehensive migration of multiple enterprise platforms (Vinbus Dashboard, Vinbus Map, and BusMap) from Angular 11 to Angular 19 with security improvements.",
    longDescription: "Led a comprehensive modernization initiative migrating three enterprise platforms (Vinbus Dashboard, Vinbus Map, and BusMap) from Angular 11 to Angular 19. Resolved critical security vulnerabilities identified by Trivy security scanning, ensuring systems comply with enterprise-grade security standards. Refactored core modules and updated dependent libraries to optimize performance and ensure cross-version compatibility.",
    period: "Dec 2025 - Jan 2026",
    status: "Completed",
    technologies: [
      { name: "Angular 19", icon: "FaAngular" },
      { name: "RxJS" },
      { name: "TypeScript" },
      { name: "Trivy" }
    ],
    highlights: [
      "Multi-platform migration (3 applications)",
      "Angular 11 to Angular 19 upgrade",
      "Critical security vulnerability resolution",
      "Trivy security scanning integration",
      "Performance optimization",
      "Cross-version compatibility"
    ],
    image: "/images/projects/vinbus-modernization.jpg",
    github: "",
    liveUrl: "",
    category: "Professional"
  }
];

export const vibeProjects = [
  {
    id: 7,
    name: "English Master",
    slug: "english-master",
    shortDescription: "Personal vocabulary-learning application with flashcards",
    description: "A vocabulary-learning application utilizing Flashcards and integrated Note-taking features to enhance language retention.",
    longDescription: "A personal learning project designed to enhance language retention through interactive flashcards and integrated note-taking. Implemented robust state management using Redux Toolkit to ensure a seamless and reactive user experience. Features spaced repetition algorithm for optimal learning, vocabulary tracking, and personalized study sessions.",
    period: "Dec 2025 - Present",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" }
    ],
    highlights: [
      "Interactive flashcard system",
      "Integrated note-taking",
      "Redux Toolkit state management",
      "Spaced repetition algorithm",
      "Vocabulary tracking and progress"
    ],
    image: "/images/projects/english-master.jpg",
    github: "",
    liveUrl: "https://niz-vocabulary.vercel.app",
    category: "Vibe"
  },

  {
    id: 8,
    name: "Wallio - Expense Manager",
    slug: "wallio",
    shortDescription: "Personal finance tracker for managing spending and budgets",
    description: "A personal finance tracker for managing spending, wallets, and budgets with visual insights and analytics.",
    longDescription: "A comprehensive personal finance management application built to track expenses, manage multiple wallets, and plan budgets effectively. Features intuitive expense categorization, visual analytics with charts and graphs, budget alerts, and financial goal tracking. Provides clear insights into spending patterns and helps users achieve financial goals.",
    period: "2025",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Chart.js" }
    ],
    highlights: [
      "Expense tracking and categorization",
      "Multi-wallet management",
      "Budget planning and alerts",
      "Visual analytics with charts",
      "Financial goal tracking",
      "Intuitive dashboard"
    ],
    image: "/images/projects/wallio.jpg",
    github: "",
    liveUrl: "https://wallio-app.vercel.app",
    category: "Vibe"
  },

  {
    id: 9,
    name: "Go Travel Planner",
    slug: "go-travel-planner",
    shortDescription: "Travel planning application for organizing itineraries and destinations",
    description: "A travel planning application for organizing itineraries, destinations, and trip schedules with interactive map integration.",
    longDescription: "A comprehensive travel planning tool designed to organize all aspects of a trip in one place. Features itinerary planning with timeline view, destination research and notes, interactive map integration, packing checklists, and budget planning. Perfect for solo travelers, groups, and families planning their next adventure.",
    period: "2025",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Google Maps API" }
    ],
    highlights: [
      "Trip itinerary planning with timeline",
      "Destination notes and research",
      "Interactive map integration",
      "Organized travel checklists",
      "Budget planning per destination",
      "Collaborative trip planning"
    ],
    image: "/images/projects/travel-planner.jpg",
    github: "",
    liveUrl: "https://go-travel-planner.vercel.app",
    category: "Vibe"
  },

  {
    id: 10,
    name: "Skeleton Styler Visualizer",
    slug: "skeleton-styler-app",
    shortDescription: "Interactive tool for creating customizable skeleton loading UI",
    description: "An interactive visualizer tool for creating, customizing, and exporting skeleton loading UI components.",
    longDescription: "A practical tool for designers and developers to create and customize skeleton loading UI components visually. Features real-time preview, customizable animations and colors, CSS/markup export, and copy-to-clipboard functionality. Built to complement the skeleton-styler npm library and provide an easy way to generate loading states.",
    period: "Sep 2025 - Nov 2025",
    status: "Active",
    technologies: [
      { name: "React.js", icon: "FaReact" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
    highlights: [
      "Real-time skeleton preview",
      "Customizable animations",
      "Color customization",
      "CSS/markup export",
      "Copy-to-clipboard functionality",
      "Integration with skeleton-styler library"
    ],
    image: "/images/projects/skeleton-styler-app.jpg",
    github: "",
    liveUrl: "https://skeleton-styler.vercel.app",
    category: "Vibe"
  }
];

export const allProjects = [...mainProjects, ...vibeProjects];
```

---

## 6. Blog Topics (`lib/data/blog.js`)

```javascript
export const blogTopics = [
  {
    id: 1,
    title: "From Angular 11 to 19: Migration Journey & Lessons Learned",
    slug: "angular-migration-guide",
    category: "Technical",
    tags: ["Angular", "Migration", "Best Practices"],
    readTime: 8,
    excerpt: "Deep dive into the challenges and solutions of migrating large-scale enterprise applications from Angular 11 to 19.",
    published: false
  },
  {
    id: 2,
    title: "Building Scalable UI Component Libraries",
    slug: "building-component-libraries",
    category: "Best Practices",
    tags: ["React", "Components", "Architecture"],
    readTime: 6,
    excerpt: "Learn how to architect and build reusable component libraries that scale with your application.",
    published: false
  },
  {
    id: 3,
    title: "State Management Strategies: Redux vs Jotai vs NgRx",
    slug: "state-management-comparison",
    category: "Comparison",
    tags: ["State Management", "Redux", "Jotai", "NgRx"],
    readTime: 10,
    excerpt: "Comprehensive comparison of popular state management libraries and when to use each one.",
    published: false
  },
  {
    id: 4,
    title: "Web Accessibility (a11y) - A Developer's Guide",
    slug: "web-accessibility-guide",
    category: "Accessibility",
    tags: ["Accessibility", "a11y", "Best Practices"],
    readTime: 7,
    excerpt: "Essential guide to building accessible web applications that work for everyone.",
    published: false
  },
  {
    id: 5,
    title: "Performance Optimization Tips for React Applications",
    slug: "react-performance-optimization",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    readTime: 9,
    excerpt: "Proven techniques to optimize your React applications and improve user experience.",
    published: false
  }
];
```

---

## 7. Site Configuration (`lib/config.js`)

```javascript
export const siteConfig = {
  // Basic Info
  siteName: "Nguyễn Hoài Nam Portfolio",
  siteDescription: "Frontend Developer Portfolio - React, Angular, Next.js",
  siteUrl: "https://hoainam-portfolio.vercel.app",
  
  // Author
  author: "Nguyễn Hoài Nam",
  email: "namhn077@gmail.com",
  
  // Social
  social: {
    github: "https://github.com/hoainam07",
    linkedin: "https://linkedin.com/in/hoainam07",
    twitter: "",
    instagram: "",
  },
  
  // SEO
  seo: {
    keywords: [
      "Frontend Developer",
      "React Developer",
      "Angular Developer",
      "Next.js Developer",
      "Web Developer",
      "UI/UX Developer"
    ],
    ogImage: "/og-image.jpg"
  },
  
  // Navigation
  navigation: [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ],
  
  // Color Theme
  colors: {
    primary: "#00D9FF",
    secondary: "#667eea",
    dark: "#0F1419",
    light: "#F5F5F7"
  }
};
```

---

## 8. Routes Enum (`lib/constants/routes.js`)

```javascript
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT_DETAIL: (slug) => `/projects/${slug}`,
  BLOG: "/blog",
  BLOG_POST: (slug) => `/blog/${slug}`,
  CONTACT: "/contact",
};
```

---

## ✅ Implementation Notes

1. **Create directory structure**:
   ```bash
   mkdir -p lib/data lib/constants
   ```

2. **Copy data files** to `lib/data/`:
   - personalInfo.js
   - skills.js
   - experiences.js
   - education.js
   - projects.js
   - blog.js

3. **Copy config files** to `lib/`:
   - config.js
   - constants/routes.js

4. **Usage in components**:
   ```javascript
   import { personalInfo } from '@/lib/data/personalInfo';
   import { mainProjects, vibeProjects } from '@/lib/data/projects';
   ```

5. **Images**: Create folders and add images:
   ```
   public/images/profile.jpg
   public/images/projects/[project-images].jpg
   ```

6. **Ready to code!** 🚀

---

**Note**: Update the data as needed, especially:
- Profile image URL
- Project images
- GitHub/LinkedIn/Social links
- Actual URLs for live projects
- Blog content when ready
