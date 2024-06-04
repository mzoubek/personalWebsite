import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div>
      <h1 className='font-laperhens text-betrBlack text-4xl pt-[124px] text-center md:text-[64px] md:leading-none md:pt-[126px] lg:text-8xl lg:pt-[160px]'>
        Welcome to my
        <br />
        Projects Page!
      </h1>
      <p className='font-poppins text-betrWhite text-center px-4 pt-4 leading-normal md:text-xl md:px-9 md:pt-12 lg:text-2xl lg:px-[136px]'>
        Here you'll find a showcase of my work, including personal projects,
        freelance work, and academic assignments. Each project highlights my
        journey, challenges overcome, and the innovative solutions I developed.
        Dive in to see the code in action, and feel free to explore detailed
        case studies of selected projects.
      </p>
      <h2 className='font-laperhens text-betrBlack text-[32px] text-center pt-24 md:text-[40px] md:leading-none md:pt-36 lg:text-5xl'>
        Martin's Code Lab
      </h2>
      <Card />
      <p className='font-poppins text-betrWhite text-center px-4 pt-24 md:text-2xl md:px-8 lg:text-4xl lg:px-[136px]'>
        Thank you for exploring my projects! Each project represents a step in
        my journey as a frontend developer. If you have any questions or would
        like to collaborate, feel free to reach out.
      </p>
    </div>
  );
};

export default Projects;
