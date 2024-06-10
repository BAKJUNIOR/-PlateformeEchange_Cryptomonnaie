import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Accueil",
    link: "/",
  },
  {
    id: 2,
    name: "A propos de nous",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 5,
    name: "Cryptomonnaie",
    link: "/crypto",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="" className="w-5" />
              <span className="text-2xl sm:text-3xl font-semibold">YTG</span>
            </Link>
            {/* Desktop view Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => (
                    <li
                        key={id}
                        className="py-4"
                    >
                      <Link
                          to={link || "#"}
                          className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                      >
                        {name}
                      </Link>
                    </li>
                ))}
                <Link to="/login" className="primary-btn">
                  Se Connecter
                </Link>
                <DarkMode />
              </ul>
            </nav>
            {/* Mobile view Drawer  */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {/* Mobile Hamburger icon */}
              {showMenu ? (
                  <HiMenuAlt1
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                  />
              ) : (
                  <HiMenuAlt3
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                  />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </div>
  );
};

export default Navbar;