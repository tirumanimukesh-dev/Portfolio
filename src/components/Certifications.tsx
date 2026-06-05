import {
  Award,
  Clock,
  CheckCircle,
  ExternalLink,
  Trophy,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

interface Certification {
  name: string;
  issuer: string;
  status: "completed" | "in-progress" | "planned";
  date?: string;
  certificateUrl?: string;
  certificateLabel?: string;
  highlights?: string[];
}

const certifications: Certification[] = [
  {
    name: "Node Basic",
    issuer: "HackerRank",
    status: "completed",
    date: "2026",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/b30a953e168c",
    certificateLabel: "View Certificate",
    highlights: [
      "Node.js fundamentals",
      "Backend development concepts",
    ],
  },
  {
    name: "Javascript Basic",
    issuer: "HackerRank",
    status: "completed",
    date: "2025",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/2f1677ac0100",
    certificateLabel: "View Certificate",
    highlights: [
      "JavaScript syntax and logic",
      "Functions and DOM basics",
    ],
  },
  {
    name: "Practice Python",
    issuer: "CodeChef",
    status: "completed",
    date: "2025",
    certificateUrl: "https://www.codechef.com/certificates/public/8551541",
    certificateLabel: "View Certificate",
    highlights: [
      "Problem solving",
      "Python programming fundamentals",
    ],
  },
  {
    name: "React.JS Developer",
    issuer: "OneRoadmap",
    status: "completed",
    date: "2026",
    certificateUrl: "/React.JS Developer-Certificate.pdf",
    certificateLabel: "View Certificate",
    highlights: [
      "React components and hooks",
      "State management and routing",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Participant — Vishwanova 2026 National Level Project Competition",
    detail: "National-Level Project Competition | 2026",
    description: "Represented Team CODEX at Vishwanova 2026, a national-level project competition hosted by MIT World Peace University, Pune. Presented an innovative project solution, collaborated in a team environment, and gained experience in project development.",
    certificateUrl: "",
    certificateLabel: "View Certificate",
  },
  {
    icon: Trophy,
    title: "Participant — RIFT'26 Hackathon",
    detail: "Hackathon & Innovation Challenge | 2026",
    description: "Actively participated in RIFT'26 Hackathon organized by Physics Wallah Institute of Innovation, collaborating with Team ASAM to develop innovative solutions under a competitive, time-constrained environment.",
    certificateUrl: "https://rift2026.vercel.app/verify/fa677768-141d-48e7-aee5-1e21914d1bb6",
    certificateLabel: "View Certificate",
  },
  {
    icon: Award,
    title: "Participant — Smart India Hackathon (SIH)",
    detail: "National Hackathon Competition | 2025",
    description: "Participated in Smart India Hackathon (SIH), one of India's largest innovation competitions, and successfully cleared the first evaluation round by contributing to project ideation, problem-solving, and collaborative teamwork.",
  },
];

const experiences = [
  {
    icon: Target,
    title: "MERN Full Stack Development Intern",
    detail: "EduSkills Academy | Mar 2026",
    certificateUrl: "https://drive.google.com/file/d/1GmUF8gIGsy1hmetKZXhQMW5AKwMwLLdJ/view?usp=drive_link",
    certificateLabel: "View Certificate",
    highlights: [
      "Completed a 10-week MERN Stack internship focused on full-stack web development.",
      "Built web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Developed APIs, implemented authentication, and applied modern software development practices.",
    ],
  },
];

const Certifications = () => {
  const {
    ref: headerRef,
    isRevealed: headerRevealed,
  } = useScrollReveal();

  const {
    ref: gridRef,
    isRevealed: gridRevealed,
  } = useScrollReveal({
    threshold: 0.05,
  });

  const { 
    ref: achieveRef, 
    isRevealed: achieveRevealed 
  } = useScrollReveal();

  const { 
    ref: experienceRef, 
    isRevealed: experienceRevealed 
  } = useScrollReveal();

  const getStatusConfig = (
    status: Certification["status"]
  ) => {
    switch (status) {
      case "completed":
        return {
          icon: CheckCircle,
          label: "Completed",
          className:
            "text-accent bg-accent/10 border-accent/30",
        };

      case "in-progress":
        return {
          icon: Clock,
          label: "In Progress",
          className:
            "text-primary bg-primary/10 border-primary/30",
        };

      case "planned":
        return {
          icon: Clock,
          label: "Planned",
          className:
            "text-muted-foreground bg-muted/50 border-border",
        };

      default:
        return {
          icon: Clock,
          label: "Unknown",
          className:
            "text-muted-foreground bg-muted/50 border-border",
        };
    }
  };

  return (
    <section id="certifications" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">
              Certifications
            </h2>

            <p className="section-subtitle mx-auto mt-6">
              Professional certifications and continuous
              learning achievements across web development,
              programming, and modern technologies.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-2 gap-6 stagger-children ${
              gridRevealed ? "revealed" : ""
            }`}
          >
            {certifications.map((cert, index) => {
              const statusConfig = getStatusConfig(
                cert.status
              );

              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={cert.name}
                  className="cyber-card group flex flex-col justify-between"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                        <Award className="w-5 h-5 text-primary" />
                      </div>

                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusConfig.className}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        <span>{statusConfig.label}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>

                    {cert.date && (
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        {cert.date}
                      </p>
                    )}

                    {cert.highlights?.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {cert.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {cert.certificateUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 gap-1.5 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          {cert.certificateLabel ??
                            "View Certificate"}
                        </span>

                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div
            ref={achieveRef}
            className={`mt-20 transition-all duration-700 ${
              achieveRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((a, i) => (
                <div
                  key={a.title}
                  className="cyber-card text-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <a.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {a.title}
                  </h4>
                  <p className="text-xs text-primary/80 font-medium mb-2">
                    {a.detail}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                  {a.certificateUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-primary hover:bg-primary/10 gap-1 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={a.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div> 
          </div>

          {/* Experience Section */}
           <div
            ref={experienceRef}
            className={`mt-20 transition-all duration-700 ${
              experienceRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-start-2">
              {experiences.map((a, i) => (
                <div
                  key={a.title}
                  className="cyber-card text-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <a.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {a.title}
                  </h4>
                  <p className="text-xs text-primary/80 font-medium mb-2">
                    {a.detail}
                  </p>
                  <ul className="space-y-2 mt-3 text-left">
                    {a.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                    ))}
                  </ul>
                  {a.certificateUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-primary hover:bg-primary/10 gap-1 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={a.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
              </div>
            </div> 
          </div>

          {/* Footer */}
          <div className="mt-12 cyber-card text-center group">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold">
                Continuous Learning
              </span>
            </div>

            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
              Dedicated to continuous skill development
              through certifications, hands-on projects,
              coding challenges, and staying updated with
              modern web technologies and industry best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;