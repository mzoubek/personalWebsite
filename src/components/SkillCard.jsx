import React from "react";
import { SkillCards } from "./index";

const SkillCard = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:gap-8 gap-12 items-center justify-center mt-24 md:mt-[144px]'>
      {SkillCards.map((card, index) => {
        const Icon = card.icon;
        const titleParts = card.title.split("\n");
        const skillParts = card.skill.split("\n");
        return (
          <div
            key={index}
            className='h-[400px] w-[300px] bg-grayWhite rounded-[55px] relative overflow-hidden'
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
                className='text-right text-2xl font-poppins font-bold italic pr-9'
              >
                {part}
              </p>
            ))}
            <Icon />
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
