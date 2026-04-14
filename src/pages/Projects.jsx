import Card from "../components/Card";
import RevealFromSide from "../components/RevealFromSide";
import Reveal from "../components/Reveal";

const Projects = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-28 md:pt-36 pb-16">
      <div className="max-w-5xl mx-auto">
        <RevealFromSide>
          <p className="font-poppins text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Portfolio
          </p>
        </RevealFromSide>
        <RevealFromSide>
          <h1 className="font-laperhens text-5xl md:text-7xl lg:text-8xl text-white mb-8">
            Projects
          </h1>
        </RevealFromSide>
        <Reveal>
          <p className="font-poppins text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            A selection of my work — from academic assignments to personal
            experiments. Some projects I&apos;ve worked on are under NDA, but
            each one here shows how I think, solve problems, and bring ideas to
            life.
          </p>
        </Reveal>
        <Card />
      </div>
    </div>
  );
};

export default Projects;
