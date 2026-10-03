import { Palette, BrainCircuit, Server, Code2 } from "lucide-react";

const teamMembers = [
  {
    name: "Saira Shaikh",
    role: "Software Engineer & UI/UX Designer",

    description:
      "Frontend and mobile-focused developer with experience in Flutter, React.js, Next.js, TypeScript, Firebase, Figma, and UI/UX design.",

    focus: ["UI/UX", "Flutter", "React", "Next.js", "Figma", "Frontend"],
    icon: Palette,
    accent: "from-blue-400 to-cyan-400",
  },
  {
    name: "Saham Ahmed",
    role: "Software Engineer — Backend & AI",

    description:
      "Software engineer focused on backend systems, applied AI, RAG, LLM integration, and full-stack applications.",

    focus: [
      "NestJS",
      "Node.js",
      "Python",
      "AI/LLMs",
      "RAG",
      "Backend",
      "Cloud",
    ],
    icon: BrainCircuit,
    accent: "from-purple-400 to-pink-400",
  },
  {
    name: "Abdullah Musharraf",
    role: "Software Engineer — Backend",

    description:
      "Backend-focused software engineer with 3 years of experience building secure, scalable systems and REST APIs.",

    focus: [
      ".NET",
      "Java",
      "Spring Boot",
      "NestJS",
      "Node.js",
      "Backend",
      "Cloud",
    ],
    icon: Server,
    accent: "from-cyan-400 to-blue-400",
  },
];

const MeetTeam = () => (
  <section id="team" className="py-20 relative">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet Our <span className="text-blue-400">Team.</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A multidisciplinary team combining design, development, backend
          engineering, and AI to build practical digital products.
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
      </div>

      {/* Team Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => {
          const RoleIcon = member.icon;

          return (
            <div
              key={member.name}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-5 right-5 w-11 h-11 rounded-xl bg-gray-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <RoleIcon className="w-5 h-5 text-blue-400" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>

                <p
                  className={`text-sm font-medium bg-gradient-to-r ${member.accent} bg-clip-text text-transparent mb-5`}
                >
                  {member.role}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Focus */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-blue-400" />

                    <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Focus
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {member.focus.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs text-gray-300 bg-white/[0.04] border border-white/10 hover:border-blue-400/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${member.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MeetTeam;
