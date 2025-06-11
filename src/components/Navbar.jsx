import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-primary shadow-md" : "bg-transparent"}

      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src={logoss}
            alt="logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
          /> */}
          <p className="text-white text-xl font-bold tracking-wide group-hover:text-highlight transition-colors">
            LuisDev
          </p>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`
                  relative text-[17px] font-semibold transition-all duration-300
                  ${active === nav.title ? "text-[#3B82F6]" : "text-white"}
                  hover:text-[#3B82F6]
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                  after:bg-[#3B82F6] after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
              fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-black bg-opacity-90 backdrop-blur-md shadow-2xl
              z-40 p-6 transition-transform duration-300
              ${toggle ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <ul className="flex flex-col gap-6 mt-20 text-white text-lg font-medium">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    className="hover:text-[#3B82F6] transition-colors"
                  >
                    {nav.title}
                  </a>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
