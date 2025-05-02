import JavascriptIcon from "../SVG/JavascriptIcon";
import ReactIcon from "../SVG/ReactIcon";
import GithubLgIcon from "../SVG/GithubLgIcon";
import HTMLCSSIcon from "../SVG/HTMLCSSIcon";
import neovim from "../assets/neovim.png";
import projectCalculator from "../assets/projectCalculator.png";
import githubPic from "../assets/github.png";
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
      "Everyone builds a calculator at some point — so I did too. 30 minutes, no frameworks, just pure nostalgia and a few math operations.",
    href: "https://codepen.io/mzoubek/pen/yLWpLgZ",
  },
  {
    title: "Homeworks\non GitHub",
    alt: "Homeworks on GitHub",
    img: githubPic,
    description:
      "My GitHub is a mixed bag of madness and progress. You’ll find school assignments in C, NASM, Haskell, a hand-crafted Tetris in SDL2, and personal configs like my Neovim setup. Some code is clean, some chaotic — all of it taught me something. Whether it runs, breaks, or blinks, it lives here.",
    href: "https://github.com/mzoubek?tab=repositories",
  },
  {
    title: "NeoVim\n config",
    alt: "NeoVim config",
    img: neovim,
    description:
      "My Neovim config is where productivity meets obsession. Fully customized, keybind-driven, and proudly minimalist. It’s tailored for focus, speed, and the occasional rabbit hole of tweaking themes at 2AM instead of writing code. This setup is my happy place.",
    href: "https://github.com/mzoubek/nvim-config",
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
    title:
      "Actively seeking a Frontend/Backend/Fullstack Developer position in a team where I can grow and contribute real value",
    description:
      "I'm actively seeking new opportunities to apply my frontend development skills in a professional setting. If you're looking for a motivated developer with a passion for creating engaging user experiences, I'd love to hear from you. Let's connect and discuss how I can contribute to your team",
  },
  {
    className: "col-span-2 lg:row-start-2 lg:col-start-3",
    title:
      "Pursuing my Bachelor's in IT at VSB-TUO with a strong focus on low-level development (C, Assembly, OS)",
    description:
      "I'm currently completing my studies at VSB-TUO in the field of IT. This program has equipped me with a solid foundation in computer science and software engineering, preparing me for a successful career in the tech industry. I'm excited to graduate and apply my knowledge in real-world projects",
  },
  {
    className: "col-span-2 lg:row-start-3 lg:col-start-2",
    title:
      "Working at VertiFlex, integrating Geek+ robotics and collaborating with the founders to improve warehouse automation.",
    description:
      "One of my personal projects involves rebuilding azte.cz using React. This project allows me to practice my frontend development skills, experiment with new technologies, and enhance my portfolio. I'm excited to share the final result with you and showcase my progress as a developer",
  },
  {
    className: "col-span-2 lg:col-span-2 row-start-4 col-start-1",
    title:
      "Combining martial arts (jiu-jitsu) and programming to train discipline, clarity, and focus",
    description:
      "In addition to my professional pursuits, I'm dedicated to improving my skills in jiu jitsu and programming. Both disciplines require focus, dedication, and continuous learning to achieve mastery. By challenging myself in these areas, I aim to grow as a well-rounded individual and reach new heights in my personal and professional life",
  },
];
