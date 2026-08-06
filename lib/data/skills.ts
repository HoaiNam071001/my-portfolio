export type Skill = { name: string; icon?: string };
export type SkillCategory = { name: string; level: "Advanced" | "Intermediate"; skills: Skill[] };

export const skillsData: { categories: SkillCategory[] } = {
  categories: [
    {
      name: "Frontend Frameworks",
      level: "Advanced",
      skills: [
        { name: "React 19", icon: "FaReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "Angular 16-19", icon: "FaAngular" },
        { name: "RxJS" },
      ],
    },
    {
      name: "State Management",
      level: "Advanced",
      skills: [
        { name: "Redux Toolkit", icon: "SiRedux" },
        { name: "Jotai" },
        { name: "NgRx" },
        { name: "Context API" },
      ],
    },
    {
      name: "Styling & UI",
      level: "Advanced",
      skills: [
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "Bootstrap", icon: "FaBootstrap" },
        { name: "Material UI", icon: "SiMui" },
        { name: "SASS/SCSS", icon: "FaSass" },
        { name: "ng-zorro" },
      ],
    },
    {
      name: "Architecture & Core",
      level: "Advanced",
      skills: [
        { name: "Feature-Sliced Design (FSD)" },
        { name: "Component-Driven Architecture" },
        { name: "Performance Optimization" },
        { name: "Web Accessibility (a11y)" },
      ],
    },
    {
      name: "Backend & Tools",
      level: "Intermediate",
      skills: [
        { name: "Node.js", icon: "FaNodeJs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "NestJS", icon: "SiNestjs" },
      ],
    },
    {
      name: "DevOps & Security",
      level: "Intermediate",
      skills: [
        { name: "Git", icon: "FaGitAlt" },
        { name: "Docker", icon: "FaDocker" },
        { name: "Trivy (Security Scanning)" },
        { name: "CI/CD" },
      ],
    },
    {
      name: "Software Engineering",
      level: "Advanced",
      skills: [
        { name: "OOP" },
        { name: "Design Patterns" },
        { name: "Data Structures & Algorithms" },
        { name: "Agile/Scrum" },
      ],
    },
  ],
};
