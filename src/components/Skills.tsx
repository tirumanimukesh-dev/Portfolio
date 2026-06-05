import { Shield, Monitor, Code, Terminal, Cpu, } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

interface SkillCategory {
  icon: typeof Shield;
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "From high-level to low-level systems programming",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: Monitor,
    title: "Web & Full-Stack",
    description: "Production FULL Stack applications with secure auth",
    skills: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "JWT Authentication",
      "HTML",
      "CSS",
      "Vercel",
    ],
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description: "Design principles and development methodology",
    skills: [
      "OOP",
      "Data Structures",
      "Problem Solving",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Platforms",
    description: "Development and deployment toolchain",
    skills: [
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "Visual Studio",
    ],
  },
];

const Skills = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-28 relative bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="blob blob-primary w-[500px] h-[500px] top-20 -left-40" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-20 -right-40" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mx-auto mt-6">
              Strong foundation in full-stack development, modern web technologies, scalable application architecture, and software engineering principles.
            </p>
          </div>

          {/* Skills Grid */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs"
                      style={{ transitionDelay: `${i * 25}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <div className="glass-pill">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">
                Continuously expanding knowledge through hands-on projects, modern web technologies, certifications, and technical competitions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
