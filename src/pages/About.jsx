import picture1 from "../assets/picture1.png";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import RevealFromSide from "../components/RevealFromSide";

const About = () => {
  return (
    <div>
      <RevealFromSide>
        <h1 className="font-laperhens text-center text-4xl md:text-[64px] xl:text-8xl pt-[168px] md:pt-[216px]">
          Hi, I&apos;m Martin
        </h1>
      </RevealFromSide>
      <div className="md:flex md:flex-row md:items-center md:mt-24 md:px-8 md:gap-8 xl:px-32">
        <div className="flex flex-col items-center justify-center mt-9 md:mt-0">
          <Reveal>
            <div className="bg-white w-[266px] h-[266px] rounded-full flex items-center justify-center">
              <img
                className="object-cover rounded-full flex"
                src={picture1}
                alt="Personal photo"
                width={267}
                height={267}
              />
            </div>
          </Reveal>
        </div>
        <RevealFromSide>
          <h2 className="font-laperhens text-2xl text-center md:text-right md:text-[40px] xl:text-5xl md:leading-10 xl:leading-snug px-6 mt-9 md:px-0 md:mt-0">
            I build user-focused interfaces with the same precision I use to
            write memory-efficient C code. Whether it&apos;s optimizing a loop
            or crafting a smooth UI.
          </h2>
        </RevealFromSide>
      </div>
      <div className="px-6 mt-4 md:mt-12 md:px-8 xl:px-32">
        <Reveal>
          <p className="font-poppins text-betrWhite text-center md:text-xl xl:text-2xl">
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
        </Reveal>
      </div>
      <SkillCard />
      <div className="flex flex-col px-6 mt-32 md:mt-[144px] md:px-8 gap-4 md:gap-12 xl:mt-[164px] xl:px-32">
        <h2 className="font-laperhens text-4xl md:text-[64px] md:leading-[64px]">
          A little more
          <br />
          about me...
        </h2>
        <p className="font-poppins text-betrWhite md:text-2xl">
          I didn&apos;t exactly land my dream dev job on the first try. After a
          less-than-glorious start, I found myself doing customer support calls
          at Verizon. But thanks to my amazing girlfriend (and way too many
          late-night Neovim configs), I found my way back to what I love —
          building and breaking things with code.
          <br />
          <br />
          I completed an internal CCNA course along the way and dove deeper into
          networking. At the time, I was using a MacBook — a gentle introduction
          to the Linux-like world — but once I got my hands on proper Linux and
          x86_64 architecture, I was hooked for good.
          <br />
          <br />
          These days, I spend more time in the terminal than on social media, my
          dotfiles spark more joy than most apps, and low-level programming
          feels like home.
          <br />
          <br />
          Oh — and yes, I still break stuff. But now I know how to fix it
          faster.
        </p>
        <a
          href="/martinzoubekCV.pdf"
          download
          className="font-laperhens text-betrWhite flex items-center justify-center bg-gradient-to-tr from-blueBlack to-lightBlue w-[358px] h-20 rounded-full self-center mt-8 shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-traslate-y-2 hover:scale-105 hover:shadow-xl hover:from-imperialRed hover:to-magenta"
        >
          Download my CV
        </a>
      </div>
    </div>
  );
};

export default About;
