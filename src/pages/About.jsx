import picture1 from "../assets/picture1.png";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import RevealFromSide from "../components/RevealFromSide";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-28 md:pt-36 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <RevealFromSide>
          <p className="font-poppins text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            About
          </p>
        </RevealFromSide>
        <RevealFromSide>
          <h1 className="font-laperhens text-5xl md:text-7xl lg:text-8xl text-white mb-16 md:mb-20">
            Hi, I&apos;m Martin
          </h1>
        </RevealFromSide>

        {/* Photo + Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16 mb-20">
          <div className="shrink-0">
            <Reveal>
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-accent/20">
                <img
                  src={picture1}
                  alt="Martin Zoubek"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <RevealFromSide>
            <h2 className="font-laperhens text-2xl md:text-3xl lg:text-4xl text-zinc-300 leading-snug text-center md:text-left">
              I build user-focused interfaces with the same precision I use to
              write memory-efficient C code. Whether it&apos;s optimizing a loop
              or crafting a smooth UI.
            </h2>
          </RevealFromSide>
        </div>

        {/* Philosophy */}
        <Reveal>
          <div className="max-w-3xl mx-auto mb-20">
            <p className="font-poppins text-zinc-400 text-base md:text-lg leading-relaxed">
              I believe in building things that matter — products that are not
              only functional, but meaningful.
              <br />
              <br />
              I thrive in environments where trust, autonomy, and feedback are
              part of the culture. I enjoy collaborating with people who care —
              about the code, the user, and the team.
              <br />
              <br />
              What drives me is progress. I&apos;m passionate about learning
              low-level fundamentals (C, Assembly, memory) not to stay in the
              past, but to build smarter in the future.
              <br />
              <br />
              For me, development isn&apos;t just about shipping features —
              it&apos;s about crafting well-thought-out experiences that make
              someone&apos;s day easier, faster, or more joyful.
            </p>
          </div>
        </Reveal>

        {/* Certifications */}
        <SkillCard />

        {/* Bio */}
        <div className="max-w-3xl mx-auto mt-24 md:mt-32">
          <RevealFromSide>
            <h2 className="font-laperhens text-4xl md:text-5xl text-white mb-8">
              A little more
              <br />
              about me...
            </h2>
          </RevealFromSide>
          <Reveal>
            <p className="font-poppins text-zinc-400 text-base md:text-lg leading-relaxed">
              I didn&apos;t exactly land my dream dev job on the first try. After
              a less-than-glorious start, I found myself doing customer support
              calls at Verizon. But thanks to my amazing girlfriend (and way too
              many late-night Neovim configs), I found my way back to what I love
              — building and breaking things with code.
              <br />
              <br />
              I completed an internal CCNA course along the way and dove deeper
              into networking. At the time, I was using a MacBook — a gentle
              introduction to the Linux-like world — but once I got my hands on
              proper Linux and x86_64 architecture, I was hooked for good.
              <br />
              <br />
              These days, I spend more time in the terminal than on social media,
              my dotfiles spark more joy than most apps, and low-level
              programming feels like home.
              <br />
              <br />
              Oh — and yes, I still break stuff. But now I know how to fix it
              faster.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex justify-center mt-12">
              <a
                href="/Martin_Zoubek_CV.pdf"
                download
                className="group font-poppins text-sm font-medium text-zinc-300 bg-accent/10 border border-accent/20 px-8 py-4 rounded-full hover:bg-accent/20 hover:border-accent/40 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
              >
                Download my CV
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
