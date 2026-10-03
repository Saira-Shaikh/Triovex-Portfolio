import Hero from "../components/Hero";
import About from "../components/About";
import MeetTeam from "../components/MeetTeam";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import WhyWorkWithUs from "../components/WhyWorkWithUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-950 to-slate-700">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <MeetTeam />
      <Experience />
      <Projects />
      <WhyWorkWithUs />
      <Contact />
    </div>
  );
};

export default Index;
