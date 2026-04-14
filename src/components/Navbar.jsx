import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRefs = useRef({});

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  useEffect(() => {
    const activeRef = navRefs.current[location.pathname];
    if (activeRef) {
      setBubbleStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      });
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-surface/80 backdrop-blur-xl border border-white/[0.06] rounded-full px-1 py-1">
      <div className="flex items-center relative">
        <span
          className="absolute h-full top-0 bg-white/[0.06] rounded-full transition-all duration-300 ease-out"
          style={bubbleStyle}
        />
        <ul className="flex relative z-10">
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                ref={(el) => (navRefs.current[path] = el)}
                className={({ isActive }) =>
                  `block font-poppins text-sm px-5 py-2.5 rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
