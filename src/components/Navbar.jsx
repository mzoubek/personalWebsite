import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Contact from "./Contact";

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
      const { offsetLeft, offsetWidth } = activeRef;
      setBubbleStyle({
        left: offsetLeft + 8,
        width: offsetWidth - 8,
      });
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white/30 fixed top-4 z-10 rounded-full">
      <nav className="px-1 py-4 flex items-center relative">
        {/* Animated bubble behind active NavLink */}
        <span
          className="absolute h-[41px] top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full transition-all duration-300 ease-in-out"
          style={bubbleStyle}
        />
        <ul className="flex justify-center w-full relative z-10">
          {links.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                ref={(el) => (navRefs.current[path] = el)}
                className={`text-base font-poppins px-4 py-3 rounded-full duration-200 ease-in-out`}
              >
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <Contact />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
