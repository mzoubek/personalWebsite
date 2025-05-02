import React, { useState } from "react";
import InstagramIcon from "../SVG/InstagramIcon.jsx";
import LinkedinIcon from "../SVG/LinkedinIcon.jsx";
import PlaystationIcon from "../SVG/PlaystationIcon.jsx";
import GithubIcon from "../SVG/GithubIcon.jsx";
import FacebookIcon from "../SVG/FacebookIcon.jsx";
import WeatherCard from "./WeatherCard.jsx";
import CloseIconW from "../SVG/CloseIconW.jsx";

const Footer = () => {
  const [showPS, setShowPS] = useState(false);

  return (
    <footer className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-5 lg:grid-rows-4 px-6 md:px-8 lg:px-32 mt-32 md:mt-48">
      <WeatherCard />
      <p className="text-betrWhite font-poppins flex items-center justify-center text-center md:col-span-2 lg:col-span-1">
        © Martin Zoubek {new Date().getFullYear()} - made in React
      </p>
      <h3 className="text-2xl font-poppins font-bold text-neonGreen flex justify-center items-center md:col-start-1 lg:col-start-2 lg:row-start-1">
        Contact me
      </h3>
      <p className="text-xl text-center text-betrBlack font-poppins font-light italic flex items-center justify-center lg:col-start-2 lg:row-start-2">
        martin.zoubek17@gmail.com
      </p>
      <h3 className="text-2xl font-poppins font-bold text-neonGreen flex items-center justify-center text-center md:col-start-2 md:row-start-4 lg:row-start-3">
        Catch me here as well
      </h3>
      <div className="flex justify-center pt-4 md:pt-0 gap-4 lg:col-start-2">
        <a href="https://www.instagram.com/martin_zoubek420/" target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-zoubek-761539247/"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a className="relative" onClick={() => setShowPS(true)}>
          <PlaystationIcon />
          {showPS && (
            <div className="absolute -top-10 -right-20 w-[200px] h-16 bg-blueBlack border-2 border-betrWhite rounded-[10px]">
              <p className="font-poppins text-betrWhite text-center">
                PS Account: ZubMarten
              </p>
              <CloseIconW
                className={"cursor-pointer z-50 mx-auto mt-1"}
                onClick={(event) => {
                  event.stopPropagation();
                  setShowPS(false);
                }}
              />
            </div>
          )}
        </a>
        <a href="https://github.com/mzoubek" target="_blank">
          <GithubIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009724780665"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
