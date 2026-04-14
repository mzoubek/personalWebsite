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
      "My GitHub is a mixed bag of madness and progress. You'll find school assignments in C, NASM, Haskell, a hand-crafted Tetris in SDL2, and personal configs like my Neovim setup. Some code is clean, some chaotic — all of it taught me something. Whether it runs, breaks, or blinks, it lives here.",
    href: "https://github.com/mzoubek?tab=repositories",
  },
  {
    title: "NeoVim\n config",
    alt: "NeoVim config",
    img: neovim,
    description:
      "My Neovim config is where productivity meets obsession. Fully customized, keybind-driven, and proudly minimalist. It's tailored for focus, speed, and the occasional rabbit hole of tweaking themes at 2AM instead of writing code. This setup is my happy place.",
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
    title:
      "Full Stack Developer at VertiFlex — building frontend and backend for Geek+ warehouse robotics",
  },
  {
    title:
      "Bachelor's in IT at VSB-TUO — focused on systems programming in C, Assembly, and OS",
  },
  {
    title:
      "Looking for opportunities to grow as a full stack engineer on meaningful products",
  },
  {
    title:
      "Training discipline through jiu-jitsu and deliberate practice in code",
  },
];
