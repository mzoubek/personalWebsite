import picture1 from "../assets/picture1.png";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import RevealFromSide from "../components/RevealFromSide";

const About = () => {
  return (
    <div>
      <RevealFromSide>
        <h1 className="font-laperhens text-center text-4xl md:text-[64px] xl:text-8xl pt-[168px] md:pt-[216px]">
          I&apos;m Martin
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
            a self taught Frontend Developer currently working for Verizon as
            Customer Service Representative in Ostrava.
          </h2>
        </RevealFromSide>
      </div>
      <div className="px-6 mt-4 md:mt-12 md:px-8 xl:px-32">
        <Reveal>
          <p className="font-poppins text-betrWhite text-center md:text-xl xl:text-2xl">
            Passionate Frontend Developer and First-Year Informatics Student at
            VSB-TUO, self-taught through online resources and extensive
            practice.
            <br />
            <br />
            Proficient in JavaScript, React, and enthusiastic about exploring
            Python and C.
            <br />
            <br />
            Dedicated to honing skills through platforms like CodeWars and
            hands-on projects.
            <br />
            <br />
            Adept in UI/UX design using Figma. Eager to contribute innovative
            solutions and collaborate on impactful projects.
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
          I am currently working as a Customer Service Representative at Verizon
          Czech, where I have honed my communication and problem-solving skills.
          <br />
          <br />
          To further my professional development, I recently completed an
          internal CCNA course, which provided me with a solid foundation in
          networking. Eager to expand my expertise in the field of IT, I am set
          to begin my studies at VSB-TUO, pursuing a degree in Information
          Technology.
          <br />
          <br />
          This educational journey will equip me with comprehensive knowledge
          and skills, enabling me to excel in the dynamic and ever-evolving tech
          industry.
        </p>
        <a
          href="/personalWebsite/martinzoubekCV.pdf"
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
