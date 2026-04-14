import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import RevealFromSide from "../components/RevealFromSide.jsx";
import { workingOn } from "../components/index.js";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-accent/[0.07] rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <Reveal>
            <p className="font-poppins text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8">
              Full Stack Developer
            </p>
          </Reveal>
          <Reveal>
            <h1 className="font-laperhens text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white">
              Martin
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="font-laperhens text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mt-1">
              Zoubek
            </h1>
          </Reveal>
          <Reveal>
            <p className="font-poppins text-zinc-500 text-base md:text-lg mt-8 max-w-md leading-relaxed">
              Systems thinker. Interface builder.
              <br />
              Based in Ostrava, Czech Republic.
            </p>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-poppins text-[10px] text-zinc-600 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>

      {/* What I'm building */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <RevealFromSide>
            <p className="font-poppins text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
              Currently
            </p>
          </RevealFromSide>
          <RevealFromSide>
            <h2 className="font-poppins text-3xl md:text-5xl font-bold text-white leading-tight mb-12">
              What I&apos;m building
            </h2>
          </RevealFromSide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workingOn.map((item, index) => (
              <Reveal key={index}>
                <div className="group bg-surface border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:bg-surface-light">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mb-4 transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  <p className="font-poppins text-sm md:text-base text-zinc-400 leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
