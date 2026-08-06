# 🚀 Portfolio Plan - Nguyễn Hoài Nam (Frontend Developer)

## 📋 Overview
Modern, Bold portfolio website showcasing Nguyễn Hoài Nam's expertise as a Frontend Developer with 3+ years of experience in building scalable web applications. Features: Dark/Light mode, Animations, Blog, Contact Form, GitHub Integration, Project Showcase.

---

## 👤 Section 1: PERSONAL INFO & HERO

### Data Structure
```typescript
const personalInfo = {
  fullName: "Nguyễn Hoài Nam",
  title: "Frontend Developer | UI/UX Enthusiast",
  email: "namhn077@gmail.com",
  phone: "0336227712",
  location: "Ho Chi Minh City",
  bio: "Proactive Frontend Developer specializing in architecting and optimizing scalable web applications. Proven ability to lead feature development, foster cross-functional communication, and deliver high-performance solutions in complex domains (ERP, Public Transport). Passionate about minimizing technical debt and crafting seamless user experiences.",
  profileImage: "/images/profile.jpg", // User to provide
  socialLinks: {
    github: "https://github.com/hoainam07",
    linkedin: "https://linkedin.com/in/hoainam07",
    email: "mailto:namhn077@gmail.com"
  }
};
```

### Components
- **Hero Section**: Full-screen intro with animated text, profile image, CTA buttons
- **Navigation Bar**: Sticky navbar with dark/light toggle, smooth scroll links

---

## 🛠️ Section 2: SKILLS

### Skill Categories
```typescript
const skills = {
  "Frontend Frameworks": {
    level: "Advanced",
    items: ["React 19", "Next.js", "Angular 16-19", "RxJS"]
  },
  "State Management": {
    level: "Advanced",
    items: ["Redux Toolkit", "Jotai", "NgRx", "Context API"]
  },
  "Styling & UI": {
    level: "Advanced",
    items: ["Tailwind CSS", "Bootstrap", "Material UI", "SASS/SCSS", "ng-zorro"]
  },
  "Architecture & Core": {
    level: "Advanced",
    items: ["Feature-Sliced Design (FSD)", "Component-Driven Architecture", "Performance Optimization", "Web Accessibility (a11y)"]
  },
  "Backend & Tools": {
    level: "Intermediate",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "NestJS"]
  },
  "DevOps & Security": {
    level: "Intermediate",
    items: ["Git", "Docker", "Trivy (Security Scanning)", "CI/CD"]
  },
  "Software Engineering": {
    level: "Advanced",
    items: ["OOP", "Design Patterns", "Data Structures & Algorithms", "Agile/Scrum"]
  }
};
```

### Component Features
- Skill cards with proficiency levels (Beginner/Intermediate/Advanced)
- Visual indicators (progress bars, colored badges)
- Animated skill reveal on scroll

---

## 💼 Section 3: EXPERIENCE

### Work History
```typescript
const experiences = [
  {
    company: "VinSmart Future",
    position: "Frontend Developer",
    period: "Dec 2025 - Now",
    highlights: [
      "Developed web interfaces for bus management systems within public transport ecosystem",
      "Spearheaded Angular 11 → 19 migration, resolving critical security vulnerabilities (Trivy)",
      "Ensured system compliance with enterprise-grade security standards"
    ]
  },
  {
    company: "Golabs",
    position: "Frontend Developer",
    period: "Aug 2025 - Nov 2025",
    highlights: [
      "Developed and enhanced web UI for bus management system (GoAFC)",
      "Implemented dark mode, global search, administrative dashboard",
      "Optimized system performance and stability"
    ]
  },
  {
    company: "Xperc",
    position: "Frontend Developer",
    period: "Sep 2022 - Aug 2025",
    highlights: [
      "Developed responsive web interfaces for ERP resource management system",
      "Architected reusable UI component library (reducing development cycles)",
      "Applied advanced design patterns (skeleton loaders, dynamic dashboard reordering)",
      "Cross-functional collaboration in Agile/Scrum environments"
    ]
  },
  {
    company: "Designveloper",
    position: "Intern",
    period: "June 2022 - Aug 2022",
    highlights: [
      "Research & develop technology-based blog project"
    ]
  }
];
```

### Component Features
- Timeline view with company logo, position, duration
- Expandable/collapsible highlights
- Animated entrance effects

---

## 🎓 Section 4: EDUCATION

### Data
```typescript
const education = {
  degree: "Bachelor of Computer Science",
  university: "Ho Chi Minh City University of Technology (VNU HCM)",
  gpa: "7.5 / 10",
  certifications: [
    { name: "TOEIC", score: "585", date: "2024" }
  ]
};
```

---

## 📁 Section 5: PROJECTS (MAIN + VIBE PROJECTS)

### Main Projects (from CV)
```typescript
const mainProjects = [
  {
    id: 1,
    name: "Vinbus - MiniApp",
    description: "Mini App on React 19 integrated into Vingroup's V-app Super App with interactive maps and real-time navigation.",
    period: "Oct 2025 - Present",
    technologies: ["React 19", "@vsf-miniapp", "GSM Map SDK", "TypeScript", "Jotai", "skeleton-styler"],
    highlights: [
      "Built interactive maps and navigation features",
      "Managed complex states with Jotai",
      "Real-time route searching and public transport trip planning"
    ],
    github: "",
    liveUrl: "",
    image: "/images/projects/vinbus-miniapp.jpg"
  },
  {
    id: 2,
    name: "GoAFC (Ho Chi Minh City Bus Management)",
    description: "Modernized Web UI for HCMC bus management system, upgraded to Angular 19 with advanced features.",
    period: "Aug 2025 - Present",
    technologies: ["Angular 19", "TypeScript", "RxJS", "Bootstrap", "ng-zorro"],
    highlights: [
      "Global search functionality",
      "Dark mode implementation",
      "Administrative dashboard for route management"
    ],
    github: "",
    liveUrl: "https://afc.golabs.vn",
    image: "/images/projects/goafc.jpg"
  },
  {
    id: 3,
    name: "XCORP Management System",
    description: "Comprehensive ERP platform for resource, project, and performance management with complex dashboard modules.",
    period: "Sep 2022 - Aug 2025",
    technologies: ["Angular 16", "NgRx", "TypeScript", "Tailwind CSS", "ng-zorro", "Froala Editor"],
    highlights: [
      "Gantt charts for task management",
      "OKR/KPI tracking system",
      "Large-scale state management with NgRx",
      "Document management with Froala editor"
    ],
    github: "",
    liveUrl: "https://xcorp.app",
    image: "/images/projects/xcorp.jpg"
  },
  {
    id: 4,
    name: "Education System",
    description: "Full-stack online learning platform with course moderation, enrollment, and AI-powered chatbot.",
    period: "Dec 2024 - May 2025",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Hadoop HDFS", "LangChain", "LLaMA 3.2", "FAISS"],
    highlights: [
      "Full-stack development",
      "MoMo payment gateway integration",
      "Big Data storage with Hadoop HDFS",
      "AI-powered chatbot with LLaMA 3.2"
    ],
    github: "",
    liveUrl: "",
    image: "/images/projects/education-system.jpg"
  },
  {
    id: 5,
    name: "Skeleton-Styler",
    description: "Open-source npm library for creating highly customizable skeleton loaders with minimal configuration.",
    period: "Sep 2025 - Nov 2025",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Published on npm",
      "Maintainable architecture",
      "High-fidelity loading states"
    ],
    github: "https://github.com/hoainam07/skeleton-styler",
    liveUrl: "https://www.npmjs.com/package/skeleton-styler",
    npm: "skeleton-styler",
    image: "/images/projects/skeleton-styler.jpg"
  },
  {
    id: 6,
    name: "Vinbus & BusMap Modernization",
    description: "Comprehensive migration of enterprise platforms from Angular 11 to Angular 19 with security fixes.",
    period: "Dec 2025 - Jan 2026",
    technologies: ["Angular 19", "RxJS", "TypeScript", "Trivy"],
    highlights: [
      "Multi-platform migration (Vinbus Dashboard, Vinbus Map, BusMap)",
      "Security vulnerability resolution",
      "Performance optimization",
      "Cross-version compatibility"
    ],
    github: "",
    liveUrl: "",
    image: "/images/projects/vinbus-modernization.jpg"
  }
];
```

### Vibe Projects (Personal Side Projects)
```typescript
const vibeProjects = [
  {
    id: 7,
    name: "English Master",
    description: "Personal vocabulary-learning application with flashcards and note-taking for enhanced language retention.",
    period: "Dec 2025 - Present",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    highlights: [
      "Flashcard system",
      "Integrated note-taking",
      "Robust state management with Redux Toolkit",
      "Seamless reactive UX"
    ],
    github: "",
    liveUrl: "https://niz-vocabulary.vercel.app",
    image: "/images/projects/english-master.jpg",
    isVibe: true
  },
  {
    id: 8,
    name: "Wallio - Expense Manager",
    description: "Personal finance tracker for managing spending, wallets, and budgets with visual insights.",
    period: "2025",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Chart.js"],
    highlights: [
      "Expense tracking and categorization",
      "Wallet management",
      "Budget planning and visualization",
      "Intuitive dashboard"
    ],
    github: "",
    liveUrl: "https://wallio-app.vercel.app",
    image: "/images/projects/wallio.jpg",
    isVibe: true
  },
  {
    id: 9,
    name: "Go Travel Planner",
    description: "Travel planning application for organizing itineraries, destinations, and trip schedules.",
    period: "2025",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Google Maps API"],
    highlights: [
      "Trip itinerary planning",
      "Destination notes and research",
      "Interactive map integration",
      "Organized travel checklists"
    ],
    github: "",
    liveUrl: "https://go-travel-planner.vercel.app",
    image: "/images/projects/travel-planner.jpg",
    isVibe: true
  },
  {
    id: 10,
    name: "Skeleton Styler Visualizer",
    description: "Interactive tool for creating, customizing, and exporting skeleton loading UI components.",
    period: "Sep 2025 - Nov 2025",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Real-time skeleton preview",
      "CSS/markup export",
      "Customizable animations",
      "Copy-to-clipboard functionality"
    ],
    github: "",
    liveUrl: "https://skeleton-styler.vercel.app",
    image: "/images/projects/skeleton-styler-app.jpg",
    isVibe: true
  }
];
```

### Project Component Features
- Grid/Card layout with project image, description
- Technology badges
- Links to GitHub, Live demo
- Filter by category (Professional/Vibe)
- Hover animations and transitions
- Modal for detailed project view

---

## 📝 Section 6: BLOG (Optional)

### Blog Topics Ideas
```typescript
const blogTopics = [
  {
    title: "From Angular 11 to 19: Migration Journey & Lessons Learned",
    category: "Technical",
    readTime: "8 min"
  },
  {
    title: "Building Scalable UI Component Libraries",
    category: "Best Practices",
    readTime: "6 min"
  },
  {
    title: "State Management Strategies: Redux vs Jotai vs NgRx",
    category: "Comparison",
    readTime: "10 min"
  },
  {
    title: "Web Accessibility (a11y) - A Developer's Guide",
    category: "Accessibility",
    readTime: "7 min"
  },
  {
    title: "Performance Optimization Tips for React Applications",
    category: "Performance",
    readTime: "9 min"
  }
];
```

---

## 📧 Section 7: CONTACT

### Contact Methods
- Email form with validation
- Direct email link: namhn077@gmail.com
- Phone: 0336227712 (WhatsApp/Zalo)
- Social links: LinkedIn, GitHub

### Contact Form Features
- Name, Email, Subject, Message fields
- Form validation (email format, required fields)
- Submit to backend (Nodemailer or API endpoint)
- Success/Error notifications
- Loading states

---

## 🔗 Section 8: FEATURES IMPLEMENTATION

### 1. Dark/Light Mode Toggle
- Using next-themes
- Toggle in navbar
- Persistent preference (localStorage)
- Smooth transitions

### 2. Animations
- Framer Motion for entrance animations
- Scroll-triggered animations (Intersection Observer)
- Smooth page transitions
- Hover effects on interactive elements

### 3. GitHub Integration
- Fetch GitHub user data
- Display GitHub stats (followers, public repos, etc.)
- Show pinned repositories
- GitHub contribution graph widget

### 4. Contact Form
- Form validation
- Email notifications
- Success/error handling
- Loading states with visual feedback

### 5. Blog System
- Markdown-based blog posts
- MDX support (gray-matter + marked)
- Blog listing page
- Individual blog post pages
- Categories and tags
- Reading time estimation

### 6. Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Touch-friendly interactions
- Optimized for all screen sizes

### 7. Performance Optimizations
- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading components
- SEO optimization (next/head)

---

## 📂 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.jsx
│   ├── page.jsx (Home/Hero)
│   ├── globals.css
│   ├── providers.jsx
│   ├── projects/
│   │   ├── page.jsx
│   │   └── [id]/
│   │       └── page.jsx
│   ├── about/
│   │   └── page.jsx
│   ├── blog/
│   │   ├── page.jsx
│   │   └── [slug]/
│   │       └── page.jsx
│   └── contact/
│       └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectGrid.jsx
│   │   └── ProjectModal.jsx
│   ├── Blog/
│   │   ├── BlogCard.jsx
│   │   └── BlogList.jsx
│   ├── Contact/
│   │   └── ContactForm.jsx
│   ├── ThemeToggle.jsx
│   └── ScrollToTop.jsx
│
├── lib/
│   ├── api/
│   │   └── github.js
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   ├── experiences.js
│   │   ├── education.js
│   │   └── projects.js
│   └── utils/
│       ├── animations.js
│       └── helpers.js
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       └── [project images]
│   └── icons/
│
├── styles/
│   └── variables.css
│
├── posts/
│   └── [blog posts in .md]
│
├── pages/
│   └── api/
│       └── contact.js (email handler)
│
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Scheme (Modern & Bold)
```css
Primary: #00D9FF (Cyan - Accent)
Secondary: #667eea (Purple - Complement)
Dark BG: #0F1419
Light BG: #F5F5F7
Text Dark: #1a1a1a
Text Light: #F5F5F7
```

### Typography
- Headlines: Sans-serif (System font)
- Body: System font stack
- Font sizes: Tailwind defaults with custom scales

### Spacing & Sizing
- Consistent padding/margins (Tailwind spacing)
- Component-based layout system

---

## 🚀 Development Roadmap

### Phase 1: Setup & Core Pages (Week 1)
- [x] Project initialization
- [ ] Install dependencies
- [ ] Create basic layout & navbar
- [ ] Hero section
- [ ] Navigation links setup

### Phase 2: Content Sections (Week 2)
- [ ] About section
- [ ] Skills section
- [ ] Experience section
- [ ] Education section

### Phase 3: Projects Showcase (Week 2-3)
- [ ] Projects page with grid
- [ ] Project detail modals
- [ ] Filter functionality
- [ ] GitHub integration

### Phase 4: Blog & Contact (Week 3)
- [ ] Blog setup with MDX
- [ ] Blog listing page
- [ ] Individual blog posts
- [ ] Contact form with validation
- [ ] Email service integration

### Phase 5: Animations & Polish (Week 4)
- [ ] Framer Motion animations
- [ ] Page transitions
- [ ] Scroll effects
- [ ] Dark/Light mode refinement

### Phase 6: Optimization & Deployment (Week 4)
- [ ] Performance optimization
- [ ] SEO setup
- [ ] Mobile responsiveness testing
- [ ] Deployment to Vercel

---

## 📋 TODO Checklist

- [ ] Provide profile image
- [ ] Provide project screenshots/images
- [ ] Set up GitHub API token (for GitHub integration)
- [ ] Prepare blog post content
- [ ] Configure email service (Nodemailer setup)
- [ ] Update social links
- [ ] Add analytics (Google Analytics/Vercel Analytics)

---

## 🔧 Key Technologies

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + SCSS
- **Animations**: Framer Motion
- **State Management**: React hooks
- **Theme**: next-themes
- **Blog**: gray-matter + marked
- **Icons**: react-icons
- **Email**: nodemailer
- **Deployment**: Vercel

---

## 💡 Notes

1. **Images**: User needs to provide profile image and project screenshots
2. **GitHub API**: Need GitHub API token for real-time data fetching
3. **Email Service**: Configure SMTP credentials for contact form
4. **Content**: Blog posts can be added as .md files in `/posts` directory
5. **Customization**: Color scheme, fonts, and animations can be easily customized via config files

---

**Status**: ✅ Plan Complete - Ready for Development!
