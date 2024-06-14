import JavascriptIcon from "../SVG/JavascriptIcon";
import ReactIcon from "../SVG/ReactIcon";
import GithubLgIcon from "../SVG/GithubLgIcon";
import HTMLCSSIcon from "../SVG/HTMLCSSIcon";
import project1 from "../assets/project1.png";
import projectCalculator from "../assets/projectCalculator.png";
import project4 from "../assets/project4.png";

export const SkillCards = [
  {
    title: "Meta Front-end\ndeveloper",
    skill: "Javascript",
    icon: JavascriptIcon,
    href: "https://www.coursera.org/account/accomplishments/certificate/5PSNH3VP6P2Q",
  },
  {
    title: "Meta Front-end\ndeveloper",
    skill: "Version Control",
    icon: GithubLgIcon,
    href: "https://www.coursera.org/account/accomplishments/certificate/KUW3WE8G75PH",
  },
  {
    title: "Meta Front-end\ndeveloper",
    skill: "React Basics",
    icon: ReactIcon,
    href: "https://www.coursera.org/account/accomplishments/certificate/NCLGNC3ERQSW",
  },
  {
    title: "Meta Front-end\ndeveloper",
    skill: "HTML & CSS\nin depth",
    icon: HTMLCSSIcon,
    href: "https://www.coursera.org/account/accomplishments/certificate/XPL5A8VK47R2",
  },
];

export const ProjectCards = [
  {
    title: "Calculator in\nHTML, CSS, JS",
    alt: "Calculator project",
    img: projectCalculator,
    description:
      "This project is a simple calculator application built using plain HTML, CSS and JS. It is designed as a beginner project to practice and demonstrate fundamental skills in Frontend development.",
    href: "https://codepen.io/mzoubek/pen/yLWpLgZ",
  },
  {
    title: "Azte.cz\nin Next.js",
    alt: "Azte.cz project",
    img: project1,
    description:
      "As part of my ongoing commitment to improving my skills, I'm remaking azte.cz using Next.js. This project involves restructuring the site with modern web development practices, enhancing user experience, and optimizing performance. Check out the live demo and source code to see my progress",
    href: "",
  },
  {
    title: "Portfolio Website",
    alt: "Portfolio project",
    img: project1,
    description:
      "This website you're browsing is a testament to my skills in frontend development and UI/UX design. Built with React, it showcases my ability to create responsive and visually appealing web applications. Explore the source code and design process behind this project",
    href: "https://mzoubek.github.io/personalWebsite/",
  },
  {
    title: "CodeWars Challenges",
    alt: "CodeWars project",
    img: project4,
    description:
      "CodeWars is a platform where developers can practice coding challenges in various languages. I use CodeWars to sharpen my problem-solving skills, learn new algorithms, and stay up-to-date with best practices. Check out my profile to see my completed challenges and solutions",
    href: "https://www.codewars.com/users/mzoubek17",
  },
];

export const workingOn = [
  {
    className: "col-span-2",
    title: "Searching for job as Frontend Developer",
    description:
      "I'm actively seeking new opportunities to apply my frontend development skills in a professional setting. If you're looking for a motivated developer with a passion for creating engaging user experiences, I'd love to hear from you. Let's connect and discuss how I can contribute to your team",
  },
  {
    className: "col-span-2 lg:row-start-2 lg:col-start-3",
    title: "Finishing my degree on VSB-TUO, field IT",
    description:
      "I'm currently completing my studies at VSB-TUO in the field of IT. This program has equipped me with a solid foundation in computer science and software engineering, preparing me for a successful career in the tech industry. I'm excited to graduate and apply my knowledge in real-world projects",
  },
  {
    className: "col-span-2 lg:row-start-3 lg:col-start-2",
    title: "Remaking azte.cz in React",
    description:
      "One of my personal projects involves rebuilding azte.cz using React. This project allows me to practice my frontend development skills, experiment with new technologies, and enhance my portfolio. I'm excited to share the final result with you and showcase my progress as a developer",
  },
  {
    className: "col-span-2 lg:col-span-2 row-start-4 col-start-1",
    title: "Getting better at jiu jitsu and programming",
    description:
      "In addition to my professional pursuits, I'm dedicated to improving my skills in jiu jitsu and programming. Both disciplines require focus, dedication, and continuous learning to achieve mastery. By challenging myself in these areas, I aim to grow as a well-rounded individual and reach new heights in my personal and professional life",
  },
];
