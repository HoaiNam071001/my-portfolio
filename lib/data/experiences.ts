export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experienceData: Experience[] = [
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
      "Contributed to the deployment of smart software solutions for passenger services and public transport coordination",
    ],
    technologies: ["Angular 19", "TypeScript", "RxJS", "Trivy"],
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
      "Researched and applied new techniques to optimize system performance and efficiency",
    ],
    technologies: ["Angular 19", "TypeScript", "Bootstrap", "ng-zorro"],
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
      "Collaborated closely with cross-functional teams in Agile/Scrum environments, driving clear communication, daily stand-ups, and successful sprint deliveries",
    ],
    technologies: ["Angular 16", "NgRx", "TypeScript", "Tailwind CSS", "ng-zorro"],
  },
  {
    id: 4,
    company: "Designveloper",
    position: "Intern",
    period: "June 2022 - Aug 2022",
    duration: "3 months",
    description: "Research & develop technology-based blog project",
    highlights: ["Research & develop a technology-based blog project yourself"],
    technologies: ["React", "Node.js", "MongoDB"],
  },
];
