import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden "
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-[1600px] mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  We Design. We Develop. We Build.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                UI/UX, web, mobile, backend, and AI solutions — all under one
                team.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl">
                From a clean landing page to a complete mobile application or
                AI-powered platform, we bring design and development together to
                create modern, responsive, and user-focused products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById("projects")?.offsetTop || 0,
                      behavior: "smooth",
                    })
                  }
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View Our Work
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById("contact")?.offsetTop || 0,
                      behavior: "smooth",
                    })
                  }
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                <div className="relative w-150 h-80 md:w-96 md:h-96">
                  <img src="/team.png" alt="Team" className="w-full h-full" />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
