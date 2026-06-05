import { ShieldCheck, DatabaseZap, MonitorCog, Code, Cpu } from "lucide-react";
import Mukesh from "@/assets/Mukesh.jpeg";
import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";

const About = () => {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal();
  // const { ref: statsRef, isRevealed: statsRevealed } = useScrollReveal();
  // const { count: alertCount, ref: alertRef } = useCountUp(30, 2000);
  // const { count: attackScenarios, ref: attackRef } = useCountUp(5, 1500); 
  // const { count: projectCount, ref: projectRef } = useCountUp(7, 1800);

  const focusAreas = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Developing modern and scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), with a focus on responsive design, secure authentication, and efficient API architecture.",
    },
    {
      icon: ShieldCheck,
      title: "Frontend Development",
      description:
        "Building responsive and user-friendly interfaces using React.js, JavaScript, Tailwind CSS, and modern UI libraries to deliver seamless user experiences across devices.",
    },
    {
      icon: MonitorCog,
      title: "Backend Development",
      description:
        "Designing and developing RESTful APIs with Node.js and Express.js, implementing authentication, authorization, database integration, and secure server-side functionality.",
    },
    
    {
      icon: DatabaseZap,
      title: "Database Management",
      description:
        "Working with MongoDB to design efficient schemas, perform CRUD operations, optimize queries, and manage application data effectively.",
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      description:
        "Applying Object-Oriented Programming, Data Structures and Algorithms, and software design principles to develop maintainable, scalable, and high-performance applications.",
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      {/* Background blobs */}
      <div className="blob blob-primary w-[500px] h-[500px] top-20 -right-60" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-40 -left-40" style={{ animationDelay: '5s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={sectionRef}
            className={`text-center mb-16 transition-all duration-700 ${
              sectionRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10 transition-all duration-700 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <img
                    src={Mukesh}
                    alt="Mukesh Tirumani"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-[-4px] rounded-full border-2 border-primary/20 animate-border-glow" />
                <div className="absolute inset-[-12px] rounded-full border border-primary/10 animate-rotate-slow" />
                {/* Status dot */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full border-3 border-background shadow-lg shadow-accent/30">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />
                </div>
              </div>
            </div>

            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto mt-6">
              Computer Science and Engineering student with hands-on experience in full-stack web development, frontend engineering, and backend development — seeking an internship to apply technical skills and contribute to real-world software projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am pursuing a Bachelor of Technology student in Computer Science and 
                  Engineering at Bharath Institute of Higher Education and Research (BIHER), 
                  graduating in 2027. I have a strong interest in Full Stack Web Development 
                  and enjoy building modern, scalable web applications using MERN Stack technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have worked on multiple projects using React.js, Node.js, Express.js, and 
                  MongoDB, developing responsive user interfaces, secure JWT authentication systems, 
                  RESTful APIs, and efficient database-driven applications. These projects have 
                  helped me strengthen my understanding of modern web development practices.

                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My academic background has provided me with a solid foundation in Object-Oriented 
                  Programming, Data Structures and Algorithms, Database Management Systems, 
                  Operating Systems, Computer Networks, and Software Engineering principles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating user-friendly and impactful digital solutions, 
                  I am continuously learning new technologies and seeking internship opportunities 
                  to apply my technical skills, gain industry experience, and grow as a Full Stack 
                  Software Developer.
                </p>
              </div>

              {/* Stats */}
              {/* <div
                ref={statsRef}
                className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
                  statsRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="cyber-card text-center py-5 group" ref={alertRef}>
                  <div className="stat-number">{alertCount}+</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Daily Alerts Triaged
                  </div>
                </div>
                <div className="cyber-card text-center py-5 group" ref={projectRef}>
                  <div className="stat-number">{projectCount}</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Projects Built
                  </div>
                </div>
                <div className="cyber-card text-center py-5 group" ref={attackRef}>
                  <div className="stat-number">{attackScenarios}+</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Attack Scenarios
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column - Focus Areas */}
            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`cyber-card group cursor-default transition-all duration-700 ${
                    sectionRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 shrink-0">
                      <area.icon className="w-5 h-5 text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1.5 group-hover:text-primary transition-colors duration-300">
                        {area.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
