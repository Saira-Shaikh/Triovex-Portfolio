import { Users, Cpu, Layout, TrendingUp, Sparkles } from "lucide-react";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      title: "One Team. Multiple Skills.",
      subtitle: "Design + Development",
      description: "You don't need separate people for the interface and implementation. Our team can handle both.",
      icon: <Users className="text-purple-400 h-6 w-6" />
    },
    {
      title: "Modern Technology",
      subtitle: "",
      description: "We work with modern frameworks and technologies including React, Next.js, Flutter, NestJS, Python, Firebase, and AI tools.",
      icon: <Cpu className="text-purple-400 h-6 w-6" />
    },
    {
      title: "User-Focused Design",
      subtitle: "",
      description: "We don't treat design as decoration. We focus on usability, structure, responsiveness, and clear user flows.",
      icon: <Layout className="text-purple-400 h-6 w-6" />
    },
    {
      title: "Scalable Solutions",
      subtitle: "",
      description: "For larger applications, our backend experience allows us to think beyond just the frontend.",
      icon: <TrendingUp className="text-purple-400 h-6 w-6" />
    },
    {
      title: "AI Integration",
      subtitle: "",
      description: "We can integrate AI capabilities into existing products or build AI-powered features from the ground up.",
      icon: <Sparkles className="text-purple-400 h-6 w-6" />
    }
  ];

  return (
    <section id="why-us" className="py-20 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Work <span className="text-purple-400">With Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-colors duration-300">
              <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              {reason.subtitle && <h4 className="text-purple-400 text-sm font-semibold mb-3">{reason.subtitle}</h4>}
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;