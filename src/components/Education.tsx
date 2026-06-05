import { BookOpen, Award, ExternalLink, Trophy, School, UniversityIcon, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

interface EducationItem {
  icon: typeof BookOpen;
  branch: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  highlights: string[];
  certificateUrl?: string;
  certificateLabel?: string;
}

const educations: EducationItem[] = [
  {
    icon: GraduationCap,
    branch: "Computer Science and Engineering  [CGPA-8.0/10.0]",
    title: "Bachelor of Technology",
    organization: "Bharath Institute Of Higher Education And Research - chennai",
    period: "Sept 2023 – Present",
    highlights: [
      "Currently pursuing an undergraduate degree in Computer Science and Engineering, with a strong focus on software engineering and full-stack web development. Actively working on academic and personal projects using modern technologies to build practical solutions and strengthen software development skills.",
    ],
  },
  {
    icon: UniversityIcon,
    branch: "MPC [Percentage - 85.7%]",
    title: "Board of Intermediate Education, Andhra Pradesh",
    organization: "Aditya Junior College - Amalapuram",
    period: "Sept 2021 - Mar 2023",
    highlights: [
      "Completed Intermediate Education with specialization in Mathematics, Physics, and Chemistry (MPC), developing strong analytical, logical reasoning, and problem-solving skills that laid the foundation for further studies in Computer Science and Engineering.",
    ],
  },
  {
    icon: School,
    branch: "Secondary School Education [Percentage - 95.6%]",
    title: "Board of Secondary Education, Andhra Pradesh",
    organization: "Educare EM School - Nagaram",
    period: "June 2020 – June 2021",
    highlights: [
      "Completed Secondary School Education with a strong foundation in core academic subjects, fostering analytical thinking, problem-solving abilities, and a disciplined approach to learning, while building the fundamental knowledge and skills necessary for higher education and future academic growth.",
    ],
  },
];


const Education = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: timelineRef, isRevealed: timelineRevealed } = useScrollReveal({ threshold: 0.05 });
  const { ref: achieveRef, isRevealed: achieveRevealed } = useScrollReveal();

  return (
    <section id="education" className="py-28 relative bg-secondary/20">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle mx-auto mt-6">
              Building a strong educational foundation while focusing on academic excellence, analytical thinking, problem-solving, and continuous learning through practical experiences.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical Line with gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px overflow-hidden">
              <div
                className={`w-full h-full transition-all duration-1000 ${
                  timelineRevealed ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3), transparent)",
                }}
              />
            </div>

            <div className="space-y-8">
              {educations.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${
                    timelineRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 z-10 shadow-lg shadow-primary/30">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="cyber-card">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                            {exp.branch}
                          </span>
                          <h3 className="font-semibold">{exp.title}</h3>
                          <span className="text-xs text-muted-foreground">
                            {exp.organization}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary/60 rounded-md text-xs text-muted-foreground border border-border/50">
                          {exp.location
                            ? `${exp.location} | ${exp.period}`
                            : exp.period}
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.certificateUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 gap-1.5 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                            asChild
                          >
                            <a
                              href={exp.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>
                                {exp.certificateLabel ?? "View Certificate"}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
