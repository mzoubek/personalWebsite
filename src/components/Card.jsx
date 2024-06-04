import React, { useState } from "react";
import { ProjectCards } from "../components/index";
import CloseIconW from "../SVG/CloseIconW";

const Card = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const cardOpen = (index) => {
    setOpenCardIndex(index);
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 items-center pt-9'>
      {ProjectCards.map((card, index) => (
        <div
          key={index}
          className={`relative w-[358px] h-[394px] rounded-[33px] bg-gradient-to-tr from-blueBlack/50 md:w-[336px] lg:w-[280px] border-2 border-white/10 border-solid shadow-lg transition duration-500 ease-in-out transform ${
            openCardIndex === index
              ? "-translate-y-2 scale-105 from-blueBlack to-betrBlack/40 shadow-2xl"
              : "hover:-translate-y-2 hover:scale-105 hover:from-blueBlack hover:to-betrBlack/40 hover:shadow-2xl"
          }`}
        >
          <h3 className='font-grandSlang text-neonGreen text-2xl pt-6 pl-4'>
            {card.title}
          </h3>
          <img
            className='w-[326px] h-auto mx-auto pt-8 md:w-[304px] lg:w-[248px]'
            src={card.img}
            alt={card.alt}
            width={2880}
            height={1560}
          />
          {openCardIndex === index && (
            <div className='absolute flex flex-col gap-5 items-center z-10 bottom-0 bg-blueBlack rounded-b-[33px] w-full h-3/5'>
              <p className='font-poppins text-betrWhite font-light text-sm w-[326px] md:w-[304px] lg:w-[248px] pt-4'>
                {card.description}
              </p>
              <CloseIconW onClick={() => cardOpen(null)} />
            </div>
          )}
          <div className='text-center pt-6'>
            <button
              onClick={() => cardOpen(index)}
              className={`font-laperhens w-[326px] md:w-[304px] lg:w-[248px] h-[44px] bg-gradient-to-tr from-grayWhite to-darkGWhite hover:from-darkGWhite hover:to-grayWhite rounded-full shadow-lg ${
                openCardIndex === card.index ? "hidden" : ""
              }`}
            >
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
