import {
  Lightbulb,
  Palette,
  Code2,
  TestTube2,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Smartphone,
  Target,
} from "lucide-react";
const approachSteps = [
  { icon: Lightbulb, title: "Understand" },
  { icon: Palette, title: "Design" },
  { icon: Code2, title: "Develop" },
  { icon: TestTube2, title: "Test" },
  { icon: RefreshCw, title: "Refine" },
];
const About = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-blue-400">Us.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start pr-2">
        <div className="space-y-6">
          <div className="mb-4">
            <h2 className="text-4xl md:text-3xl font-bold text-white mb-4">
              ABOUT OUR <span className="text-blue-400">TEAM.</span>
            </h2>
          </div>

          <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>

          <p className="text-lg text-gray-300 leading-relaxed">
            We are a team of software engineers and designers who enjoy turning
            ideas into practical digital products. Our work combines{" "}
            <span className="text-blue-400 font-medium">UI/UX design</span>,{" "}
            <span className="text-blue-400 font-medium">
              frontend development
            </span>
            ,{" "}
            <span className="text-blue-400 font-medium">
              mobile app development
            </span>
            ,{" "}
            <span className="text-blue-400 font-medium">
              backend engineering
            </span>
            , and{" "}
            <span className="text-blue-400 font-medium">AI integration</span>.
            We focus on creating interfaces that look polished while making sure
            the underlying product is{" "}
            <span className="text-cyan-400 font-medium">
              functional, responsive, and maintainable
            </span>
            . From designing interfaces in Figma to developing responsive
            websites, Flutter applications, APIs, dashboards, and{" "}
            <span className="text-cyan-400 font-medium">
              AI-powered features
            </span>
            , we can handle different parts of a product within one team.
          </p>

          <div className="pt-4 mb-4">
            <h2 className="text-4xl md:text-3xl font-bold text-white mb-4">
              OUR <span className="text-blue-400">APPROACH.</span>
            </h2>
          </div>

          <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          {/* Approach */}
          <div className="py-6">
            <div className="relative flex flex-col gap-6 sm:grid sm:grid-cols-5 sm:gap-0">
              {/* connector: vertical on phones, horizontal from sm up */}
              <div
                aria-hidden
                className="absolute left-[22px] top-[22px] bottom-[22px] w-1 -translate-x-1/2 bg-gradient-to-b from-blue-400/60 to-cyan-400/30 sm:hidden"
              />
              <div
                aria-hidden
                className="absolute left-[10%] right-[10%] top-[22px] h-1 -translate-y-1/2 bg-gradient-to-r from-blue-400/60 to-cyan-400/30 hidden sm:block"
              />

              {approachSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-full bg-[#0b1220] border border-blue-400/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What We Care About */}
        <div className="lg:mt-14">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-7 backdrop-blur-sm border border-blue-500/20">
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-white mb-2">
                What we <span className="text-blue-400">care about.</span>
              </h3>
              <p className="text-gray-400 text-sm">
                The principles behind the products we build.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Sparkles,
                  title: "Clean Design",
                  text: "Interfaces that are visually clear, consistent, and easy to use.",
                },
                {
                  icon: CheckCircle2,
                  title: "Functional Development",
                  text: "Solutions that go beyond attractive screens and actually work.",
                },
                {
                  icon: Smartphone,
                  title: "Responsive Experiences",
                  text: "Web and mobile interfaces designed for different screen sizes.",
                },
                {
                  icon: Target,
                  title: "Practical Solutions",
                  text: "Technology chosen according to the project's actual requirements.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-400/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
