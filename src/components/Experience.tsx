import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Co-founder and Engineer",
      company: "JobsInc",
      location: "Remote",
      period: "2025 - Present",
      description:
        "Building an agentic recruitment platform that automates the hiring pipeline from job posting and candidate scoring to AI interviews with proctoring and offer negotiation. Developed the platform using NestJS microservices with RabbitMQ as the asynchronous backbone.",
      technologies: [
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Agentic AI",
      ],
    },
    {
      title: "Full-Stack and AI Engineer",
      company: "IVY Online",
      location: "Karachi, Pakistan",
      period: "2025 - Present",
      description:
        "Worked across the full stack of a live iOS, Android, and web education platform serving over 1,000 active users. Contributed to AI features, backend systems, payments and subscriptions, store integrations, dashboards, and deployment. Improved platform stability through end-to-end observability and backend hardening, including an idempotent purchase-reconciliation flow. Built Invoker, a hybrid-retrieval exam-prep feature, and a WhatsApp support bot with human escalation.",
      technologies: [
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "Qdrant",
        "RAG",
        "Grafana",
        "Loki",
      ],
    },
    {
      title: "Software Engineer",
      company: "Virtuosoft",
      location: "Karachi, Pakistan",
      period: "2024 - 2025",
      description:
        "Worked on data and AI systems, including optimization of a natural-language BI analytics agent built with WrenAI and RAG. Improved response time by consolidating LLM calls and caching role-based access hierarchies. Also contributed to migrating a reporting platform from SQL Server to Redshift with a zero-downtime cutover.",
      technologies: [
        "WrenAI",
        "RAG",
        "Python",
        "Redshift",
        "SQL Server",
        ".NET",
        "MongoDB",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "PARCO",
      location: "Karachi, Pakistan",
      period: "Jun 2025 - Aug 2025",
      description:
        "Worked on internal business applications, including Figma UI designs, interface development, marketing materials, and a Power App for internal application access management using SharePoint and an approval workflow.",
      technologies: ["Figma", "Power Apps", "SharePoint", "UI/UX"],
    },
    {
      title: "Frontend Developer",
      company: "360 Xperts",
      location: "Karachi, Pakistan",
      period: "2025",
      description:
        "Developed responsive frontend interfaces using React.js, Next.js, TypeScript, and Ant Design. Worked on resume assessment pages, dashboards, data visualizations, and reusable interface components.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Ant Design",
        "Frontend",
        "Dashboards",
      ],
    },
    {
      title: "Web Development Intern",
      company: "CodSoft",
      location: "Remote",
      period: "2024",
      description:
        "Worked on web development projects using HTML, CSS, and JavaScript. Implemented responsive interfaces, fixed frontend issues, and contributed to debugging and performance improvements.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Debugging",
      ],
    },
    {
      title: "Backend Engineer",
      company: "Enterprise Projects",
      location: "Remote",
      period: "2024 - Present",
      description:
        "Developed secure REST APIs and scalable backend systems for enterprise applications. Worked with microservices, databases, messaging systems, cloud infrastructure, ERP integrations, enterprise data governance, and database migration projects.",
      technologies: [
        ".NET",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "MSSQL",
        "RabbitMQ",
        "Azure",
        "AWS",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-blue-400">Experience</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            Experience across software engineering, product development,
            frontend, backend, AI systems, and cloud infrastructure.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 md:translate-x-0 border-4 border-gray-900 z-10 shadow-lg shadow-blue-400/30"></div>

                {/* Experience Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Period */}
                    <div className="flex items-center space-x-2 text-blue-400 text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                      <span>{exp.company}</span>

                      <span>•</span>

                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-500/20 text-blue-300 border border-blue-400/10 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
