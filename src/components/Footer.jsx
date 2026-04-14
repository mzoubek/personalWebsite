import InstagramIcon from "../SVG/InstagramIcon.jsx";
import LinkedinIcon from "../SVG/LinkedinIcon.jsx";
import GithubIcon from "../SVG/GithubIcon.jsx";
import FacebookIcon from "../SVG/FacebookIcon.jsx";

const Footer = () => {
  const socials = [
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/martin_zoubek420/",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/in/martin-zoubek-761539247/",
    },
    {
      icon: <GithubIcon />,
      href: "https://github.com/mzoubek",
    },
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/profile.php?id=100009724780665",
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 mt-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-poppins text-xs text-zinc-600 order-3 md:order-1">
          &copy; {new Date().getFullYear()} Martin Zoubek
        </p>
        <a
          href="mailto:martin.zoubek17@gmail.com"
          className="font-poppins text-sm text-zinc-500 hover:text-accent transition-colors duration-200 order-1 md:order-2"
        >
          martin.zoubek17@gmail.com
        </a>
        <div className="flex items-center gap-4 order-2 md:order-3">
          {socials.map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="[&_svg]:w-7 [&_svg]:h-7 opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
