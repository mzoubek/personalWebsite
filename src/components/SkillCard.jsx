import React from "react";
import { SkillCards } from "./index";
import Reveal from "./Reveal";

const SkillCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8 gap-12 items-center justify-center mt-24 md:mt-[144px]">
      {SkillCards.map((card, index) => {
        const Icon = card.icon;
        const titleParts = card.title.split("\n");
        const skillParts = card.skill.split("\n");
        return (
          <a
            key={index}
            href={card.href}
            target="_blank"
            className="h-[400px] w-[300px] cursor-pointer bg-grayWhite rounded-[55px] relative overflow-hidden ease-in-out duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            {titleParts.map((part, idx) => (
              <h3
                key={idx}
                className={`text-right font-poppins font-light pr-9 ${
                  idx === 0 ? "pt-12" : ""
                }`}
              >
                {part}
              </h3>
            ))}
            {skillParts.map((part, idx) => (
              <p
                key={idx}
                className="text-right text-2xl font-poppins font-bold italic pr-9"
              >
                {part}
              </p>
            ))}
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SkillCard;
