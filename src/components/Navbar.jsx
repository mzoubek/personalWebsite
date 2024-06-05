import { NavLink, useMatch } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div className='w-[346px] bg-white/30 fixed top-4 z-10 rounded-full'>
      <nav className='h-[72px] flex items-center'>
        <ul className='flex justify-center w-full'>
          <li>
            <NavLink
              className={`text-base font-poppins p-3 rounded-full duration-200 ${
                useMatch("/personalWebsite/") ? "bg-white/30" : ""
              }`}
              to='/personalWebsite/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text-base font-poppins p-3 rounded-full duration-200 ${
                useMatch("/personalWebsite/about") ? "bg-white/30" : ""
              }`}
              to='/personalWebsite/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text-base font-poppins p-3 rounded-full duration-200 ${
                useMatch("/personalWebsite/projects") ? "bg-white/40" : ""
              }`}
              to='/personalWebsite/projects'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <Contact />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
