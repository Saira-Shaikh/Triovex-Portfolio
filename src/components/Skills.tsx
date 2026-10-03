import {
  Palette,
  Code2,
  Smartphone,
  Server,
  Sparkles,
  Database,
  Container,
} from "lucide-react";

const skillCategories = [
  {
    title: "UI/UX & Design",
    icon: Palette,
    accent: "text-pink-300 border-pink-500/30 bg-pink-500/10",
    skills: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Design Systems",
      "Graphic Design",
      "Social Media Design",
      "Presentation Design",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    accent: "text-blue-300 border-blue-500/30 bg-blue-500/10",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    accent: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "text-green-300 border-green-500/30 bg-green-500/10",
    skills: ["Node.js", "NestJS", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "AI & LLM",
    icon: Sparkles,
    accent: "text-purple-300 border-purple-500/30 bg-purple-500/10",
    skills: [
      "RAG",
      "LLM Integration",
      "AI Chatbots",
      "Embeddings",
      "Vector Databases",
      "Qdrant",
      "BM25",
      "Agentic AI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "text-yellow-300 border-yellow-500/30 bg-yellow-500/10",
    skills: [
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "SQL Server",
      "Redshift",
    ],
  },
  {
    title: "Infrastructure",
    icon: Container,
    accent: "text-orange-300 border-orange-500/30 bg-orange-500/10",
    skills: [
      "Docker",
      "RabbitMQ",
      "Grafana",
      "Loki",
      "Prometheus",
      "DigitalOcean",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 relative">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-purple-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center ${category.accent}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`border px-3 py-1.5 rounded-full text-sm ${category.accent}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
