import { ExternalLink, Globe, Code, Gamepad2, ShoppingCart, FileSearch2Icon, Briefcase, Network, Cpu, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

interface Project {
  icon: typeof Code;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tools: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    icon: FileSearch2Icon,
    title: "Job Application Portal",
    category: "Full-Stack MERN Application",
    description:
      "Designed and developed a full-stack MERN Job Portal application with dual-role architecture (Job Seeker and Recruiter), implementing secure JWT authentication, role-based access control (RBAC), job management, and application tracking features.",
    highlights: [
      "Implemented JWT authentication and role-based access control (RBAC) to secure user access and platform resources.",
      "Developed responsive user interfaces and RESTful APIs using React.js, Tailwind CSS, Redux Toolkit, Node.js, and Express.js to deliver a seamless user experience.",
      "Deployed the MERN application on Render with MongoDB Atlas, enabling scalable hosting and automated GitHub deployments.",
    ],
    tools: ["React 18", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Axios", "Redux Toolkit"],
    year: "2026",
    githubUrl: "https://github.com/tirumanimukesh-dev/Job_Portal",
    liveUrl: "https://job-portal-9tfe.onrender.com",
  },
  {
  icon: SparklesIcon,
  title: "CreativeAI",
  category: "AI SaaS Platform (PERN Stack)",
  description:
    "Engineered a full-stack AI SaaS platform with AI-powered image generation, background removal, object removal, article writing, blog title generation, and story generation using React, Express, PostgreSQL, OpenRouter AI, Clerk, and Cloudinary.",

  highlights: [
    "Developed AI-powered tools by integrating OpenRouter AI with secure REST APIs for image generation, content creation, and image editing workflows.",
    "Built a scalable PERN architecture with Clerk authentication, Cloudinary media management, PostgreSQL (Neon), and a responsive React dashboard with community sharing features.",
    "Deployed the production-ready application on Vercel with modular architecture, optimized API performance, and secure cloud-based media storage.",
  ],

  tools: [
    "React 19",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "OpenRouter AI",
    "Clerk",
    "Cloudinary",
    "Tailwind CSS",
    "Axios",
    "Vercel",
  ],

  year: "2026",
  githubUrl: "https://github.com/tirumanimukesh-dev/CreativeAI",
  liveUrl: "https://creative-ai-three-pink.vercel.app",
},
  {
    icon: Gamepad2,
    title: "React Admin Dashboard",
    category: "Frontend Web Application",
    description:
      "Designed and developed a modern React Admin Dashboard using React.js, Vite, and Material UI, featuring analytics, data management, interactive charts, and seamless Dark/Light Mode support for an enhanced user experience.",
    highlights: [
      "Developed responsive dashboard interfaces with Material UI, DataGrid, Formik, Yup, and FullCalendar for efficient data visualization and management.",
      "Implemented analytics dashboards, team management, contact management, invoice tracking, profile forms, FAQs, and multiple interactive chart components.",
      "Deployed the application on Vercel, enabling fast performance, reliable hosting, and automated GitHub-based deployments.",
    ],
    tools: ["React.js", "Vite", "Material UI", "JavaScript", "Formik", "Nivo Charts", "MUI DataGrid", "Vercel",],
    year: "2026",
    githubUrl: "https://github.com/tirumanimukesh-dev/React_Dashboard",
    liveUrl: "https://react-dashboard-tawny-one.vercel.app/",
  },
  {
    icon: Network,
    title: "Fraud Detection Hub",
    category: "Full-Stack Fraud Detection Platform",
    description:
      "Designed and developed a full-stack fraud detection platform using React, Express.js, PostgreSQL, and Drizzle ORM, featuring real-time fraud monitoring, investigation workflows, transaction analysis, and risk-based alert management.",
    highlights: [
      "Built interactive dashboards, transaction monitoring systems, fraud investigation cases, customer risk profiling, and data visualization modules using React, Tailwind CSS, Recharts, Cytoscape.js, and Framer Motion.",
      "Developed scalable REST APIs with Express.js, PostgreSQL, Zod validation, and Drizzle ORM, while leveraging a pnpm workspace monorepo architecture for code sharing, maintainability, and automated build workflows.",
    ],
    tools: ["React.js", "TypeScript", "Vite", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Zod", "Recharts", "Cytoscape.js",],
    year: "2026",
    githubUrl: "https://github.com/tirumanimukesh-dev/Fraud-Detection-Hub",
  },
  {
    icon: Globe,
    title: "Full Stack Developer Portfolio",
    category: "Frontend Portfolio",
    description:
      "Designed and developed a modern Full Stack Developer portfolio using React.js, TypeScript, and Tailwind CSS, showcasing projects, technical skills, certifications, achievements, and professional experience.",
    highlights: [
      "Implemented interactive UI features including particle animations, typing effects, scroll-reveal animations, glassmorphism components, responsive layouts, and a fully functional contact form.",
      "Integrated React Query, React Hook Form, Zod validation, and Resend email services, while deploying the application on Vercel for optimized performance and automated GitHub-based deployments.",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Query", "Zod", "Resend"],
    year: "2026",
    githubUrl: "https://github.com/tirumanimukesh-dev/Portfolio",
    liveUrl: "https://portfolio-lac-six-23.vercel.app/",
  },
];

const Projects = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="py-28 relative">
      {/* Background blobs */}
      <div className="blob blob-primary w-[600px] h-[600px] top-0 right-0" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-40 -left-40" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto mt-6">
              Full-stack web applications, scalable backend systems, responsive user interfaces, and software engineering best practices. 
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={gridRef}
            className={`grid lg:grid-cols-2 gap-5 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="cyber-card group tilt-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground/60">
                          • {project.year}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-muted-foreground/80"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools & Links */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-secondary/80 text-xs rounded-md text-muted-foreground border border-border/50 transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <span>GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
