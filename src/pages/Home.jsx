import Reveal from "../components/Reveal.jsx";
import RevealFromSide from "../components/RevealFromSide.jsx";
import { workingOn } from "../components/index.js";
import { t } from "i18next";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <Reveal>
          <h1 className="font-laperhens text-betrBlack text-5xl md:text-8xl xl:text-9xl leading-none">
            Martin
          </h1>
        </Reveal>
        <Reveal>
          <h1 className="font-laperhens text-betrBlack text-4xl md:text-7xl xl:text-8xl leading-none">
            Zoubek
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="font-poppins font-thin text-betrWhite text-xl md:text-[32px] xl:text-4xl">
            Frontend developer
          </h2>
        </Reveal>
      </div>
      <RevealFromSide>
        <h1 className="font-laperhens text-[32px] md:text-5xl text-betrBlack text-center xl:text-left xl:px-32">
          Currently working on...
        </h1>
      </RevealFromSide>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-y-5 mt-20 mx-auto px-6 md:px-8 lg:px-32">
        {workingOn.map((item, index) => (
          <div
            key={index}
            className={`font-poppins flex items-center justify-center text-center xl:text-xl text-betrBlack ${item.className} h-20 bg-gradient-to-tr from-grayWhite/40 rounded-[20px] border-2 border-white/10 shadow-lg transition duration-300 ease-in-out transform delay-200 hover:bg-gradient hover:from-white/30 hover:to-white/10`}
          >
            {t(item.title)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
